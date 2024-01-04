import { GoogleGenerativeAI } from '@fuyun/generative-ai';
import { sha256 } from 'js-sha256';

async function digestMessage(message) {
  if (typeof crypto !== "undefined" && crypto?.subtle?.digest) {
    const msgUint8 = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  } else {
    return sha256(message).toString();
  }
}
const generateSignature = async (payload) => {
  const { t: timestamp, m: lastMessage } = payload;
  const secretKey = ({}).PUBLIC_SECRET_KEY || "";
  const signText = `${timestamp}:${lastMessage}:${secretKey}`;
  return await digestMessage(signText);
};
const verifySignature = async (payload, sign) => {
  const payloadSign = await generateSignature(payload);
  return payloadSign === sign;
};

const apiKey = ({}).GEMINI_API_KEY;
const apiBaseUrl = ({}).API_BASE_URL?.trim().replace(/\/$/, "");
const genAI = apiBaseUrl ? new GoogleGenerativeAI(apiKey, apiBaseUrl) : new GoogleGenerativeAI(apiKey);
const startChatAndSendMessageStream = async (history, newMessage) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const chat = model.startChat({
    history: history.map((msg) => ({
      role: msg.role,
      parts: msg.parts.map((part) => part.text).join("")
      // Join parts into a single string
    })),
    generationConfig: {
      maxOutputTokens: 8e3
    }
  });
  const result = await chat.sendMessageStream(newMessage);
  const encodedStream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();
      for await (const chunk of result.stream) {
        const text = await chunk.text();
        const encoded = encoder.encode(text);
        controller.enqueue(encoded);
      }
      controller.close();
    }
  });
  return encodedStream;
};

const sitePassword = ({}).SITE_PASSWORD || "";
const passList = sitePassword.split(",") || [];
const post = async (context) => {
  const body = await context.request.json();
  const { sign, time, messages, pass } = body;
  if (!messages || messages.length === 0 || messages[messages.length - 1].role !== "user") {
    return new Response(JSON.stringify({
      error: {
        message: "Invalid message history: The last message must be from user role."
      }
    }), { status: 400 });
  }
  if (sitePassword && !(sitePassword === pass || passList.includes(pass))) {
    return new Response(JSON.stringify({
      error: {
        message: "Invalid password."
      }
    }), { status: 401 });
  }
  if (!await verifySignature({ t: time, m: messages[messages.length - 1].parts.map((part) => part.text).join("") }, sign)) {
    return new Response(JSON.stringify({
      error: {
        message: "Invalid signature."
      }
    }), { status: 401 });
  }
  try {
    const history = messages.slice(0, -1);
    const newMessage = messages[messages.length - 1].parts.map((part) => part.text).join("");
    const responseStream = await startChatAndSendMessageStream(history, newMessage);
    return new Response(responseStream, { status: 200, headers: { "Content-Type": "text/plain; charset=utf-8" } });
  } catch (error) {
    console.error(error);
    const errorMessage = error.message;
    const regex = /https?:\/\/[^\s]+/g;
    const filteredMessage = errorMessage.replace(regex, "").trim();
    const messageParts = filteredMessage.split("[400 Bad Request]");
    const cleanMessage = messageParts.length > 1 ? messageParts[1].trim() : filteredMessage;
    return new Response(JSON.stringify({
      error: {
        code: error.name,
        message: cleanMessage
      }
    }), { status: 500 });
  }
};

const generate = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  post
}, Symbol.toStringTag, { value: 'Module' }));

export { generate as a, generateSignature as g };
