/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderComponent, e as renderHead, f as renderSlot, u as unescapeHTML, F as Fragment, m as maybeRenderHead, _ as __astro_tag_component__ } from '../astro.0694af69.mjs';
/* empty css                           */import { ssr, ssrHydrationKey, escape, createComponent as createComponent$1 } from 'solid-js/web';
import { createSignal, createEffect, onMount, onCleanup, Show, Index } from 'solid-js';
import { useClipboard, useEventListener, useThrottleFn } from 'solidjs-use';
import { g as generateSignature } from './generate.ts.2a0d54ba.mjs';
import MarkdownIt from 'markdown-it';
import mdKatex from 'markdown-it-katex';
import mdHighlight from 'markdown-it-highlightjs';

const pwaInfo = {"pwaInDevEnvironment":false,"webManifest":{"href":"/manifest.webmanifest","useCredentials":false,"linkTag":"<link rel=\"manifest\" href=\"/manifest.webmanifest\">"},"registerSW":{"inline":true,"inlinePath":"/sw.js","registerPath":"/registerSW.js","type":"classic","scope":"/","scriptTag":"<script id=\"vite-plugin-pwa:inline-sw\">if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/sw.js', { scope: '/' })})}</script>"}};

const $$Astro$5 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,viewport-fit=cover">
    <link rel="icon" type="image/svg+xml" href="/icon.svg">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180">
    <link rel="mask-icon" href="/icon.svg" color="#FFFFFF">
    <meta name="theme-color" content="#212129">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <title>${title}</title>
    <meta name="description" content="A Minimal web UI for GeminiPro Chat.">
    ${({}).HEAD_SCRIPTS && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(({}).HEAD_SCRIPTS)}` })}`}
    ${pwaInfo && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(pwaInfo.webManifest.linkTag)}` })}`}
    ${pwaInfo && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(pwaInfo.registerSW.scriptTag)}` })}`}
  ${renderHead($$result)}</head>
  <body>
    ${renderSlot($$result, $$slots["default"])}
  

</body></html>`;
}, "D:/work/GeminiProChat/src/layouts/Layout.astro");

const $$Astro$4 = createAstro();
const $$Logo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Logo;
  return renderTemplate`${maybeRenderHead($$result)}<svg viewBox="0 0 48 48" width="48" height="48" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>70 Basic icons by Xicons.co</title><path d="M43,4H5A4,4,0,0,0,1,8V33a4,4,0,0,0,4,4H16l6.38,8.78a2,2,0,0,0,3.23,0L32,37H43a4,4,0,0,0,4-4V8A4,4,0,0,0,43,4Z" fill="#f9da97"></path><path d="M24,18H10a2,2,0,0,1,0-4H24A2,2,0,0,1,24,18Z" fill="#f6c253"></path><path d="M39,27H10a2,2,0,0,1,0-4H39A2,2,0,0,1,39,27Z" fill="#f6c253"></path></g></svg>`;
}, "D:/work/GeminiProChat/src/components/Logo.astro");

const $$Astro$3 = createAstro();
const $$Themetoggle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Themetoggle;
  return renderTemplate`${maybeRenderHead($$result)}<div id="themeToggle" class="flex items-center justify-center w-10 h-10 rounded-md transition-colors hover:bg-slate/10 astro-KXYEDVG6">
  <svg class="theme_toggle_svg astro-KXYEDVG6" width="1.2em" height="1.2em" viewBox="0 0 24 24" color="#858585" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor">
    <mask id="myMask" class="astro-KXYEDVG6">
      <rect x="0" y="0" width="100%" height="100%" fill="white" class="astro-KXYEDVG6"></rect>
      <circle class="theme_toggle_circle1 astro-KXYEDVG6" fill="black" cx="100%" cy="0%"></circle>
    </mask>
    <circle class="theme_toggle_circle2 astro-KXYEDVG6" cx="12" cy="12" fill="#858585" mask="url(#myMask)"></circle>
    <g class="theme_toggle_g astro-KXYEDVG6" stroke="currentColor" opacity="1">
      <line x1="12" y1="1" x2="12" y2="3" class="astro-KXYEDVG6"></line>
      <line x1="12" y1="21" x2="12" y2="23" class="astro-KXYEDVG6"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" class="astro-KXYEDVG6"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" class="astro-KXYEDVG6"></line>
      <line x1="1" y1="12" x2="3" y2="12" class="astro-KXYEDVG6"></line>
      <line x1="21" y1="12" x2="23" y2="12" class="astro-KXYEDVG6"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" class="astro-KXYEDVG6"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" class="astro-KXYEDVG6"></line>
    </g>
  </svg>
</div>`;
}, "D:/work/GeminiProChat/src/components/Themetoggle.astro");

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead($$result)}<header>
  <div class="fb items-center">
    ${renderComponent($$result, "Logo", $$Logo, {})}
    ${renderComponent($$result, "Themetoggle", $$Themetoggle, {})}
  </div>
  <div class="fi mt-2">
    <a href="https://geminiprochat.com" class="gpt-title">Gemini Pro</a>
    <a href="https://geminiprochat.com" class="gpt-subtitle">Chat</a>
  </div>
  <p mt-1 op-60>
    Based on
    <a href="https://blog.geminiprochat.com/posts/what-is-gemini"> Gemini Pro API.</a>
    <a href="https://github.com/babaohuang/GeminiProChat" class="font-bold">Source code</a>
  </p>
</header>`;
}, "D:/work/GeminiProChat/src/components/Header.astro");

const $$Astro$1 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead($$result)}<footer>
  <div class="max-w-[80vw] mx-auto flex flex-col items-center justify-center mb-[1em]">
    <div class="flex flex-wrap justify-center items-center text-xs op-30 my-2">

      ${({}).BLOG_LINK && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
          <a b-slate-link${addAttribute(({}).BLOG_LINK, "href")} target="_blank">Blog</a>
        ` })}`}

      ${({}).PARTNER_LINK1 && ({}).PARTNER_LINK_TITLE1 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
          <span class="px-1">|</span>
          <a b-slate-link${addAttribute(({}).PARTNER_LINK1, "href")} target="_blank">${({}).PARTNER_LINK_TITLE1}</a>
        ` })}`}

      ${({}).PARTNER_LINK2 && ({}).PARTNER_LINK_TITLE2 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
          <span class="px-1">|</span>
          <a b-slate-link${addAttribute(({}).PARTNER_LINK2, "href")} target="_blank">${({}).PARTNER_LINK_TITLE2}</a>
        ` })}`}
    </div>

    <p class="flex flex-wrap justify-center items-center text-xs op-30 my-2">
      © 2023&nbsp;<a href="https://geminiprochat.com" target="_blank" class="font-bold">Gemini Pro Chat</a>. All rights reserved.
    </p>

    <div class="flex flex-wrap justify-center items-center text-xs op-30 my-2">
      ${({}).PRIVACY_POLICY_LINK && renderTemplate`<a${addAttribute(({}).PRIVACY_POLICY_LINK, "href")} target="_blank">Privacy Policy</a>`}
      ${({}).TOS_LINK && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
          <span class="px-1">|</span>
          <a${addAttribute(({}).TOS_LINK, "href")} target="_blank">Terms of Service</a>
        ` })}`}
    </div>

  </div>
</footer>`;
}, "D:/work/GeminiProChat/src/components/Footer.astro");

const _tmpl$$6 = ["<svg", " xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M8 20v-5h2v5h9v-7H5v7h3zm-4-9h16V8h-6V4h-4v4H4v3zM3 21v-8H2V7a1 1 0 0 1 1-1h5V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3h5a1 1 0 0 1 1 1v6h-1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z\"></path></svg>"];
const _arrow_function$6 = () => {
  return ssr(_tmpl$$6, ssrHydrationKey());
};

__astro_tag_component__(_arrow_function$6, "@astrojs/solid-js");

const _tmpl$$5 = ["<svg", " xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z\"></path></svg>"];
const _arrow_function$5 = () => {
  return ssr(_tmpl$$5, ssrHydrationKey());
};

__astro_tag_component__(_arrow_function$5, "@astrojs/solid-js");

const _tmpl$$4 = ["<svg", " width=\"1em\" height=\"1em\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#555\" d=\"M19.0909091,2 C19.5929861,2 20,2.39796911 20,2.88888889 L20,17.1111111 C20,17.6020309 19.5929861,18 19.0909091,18 L0.909090909,18 C0.407013864,18 0,17.6020309 0,17.1111111 L0,2.88888889 C0,2.39796911 0.407013864,2 0.909090909,2 L19.0909091,2 Z M5.41498358,8.41650391 L1.35528564,12.4593235 L1.35528564,16.6760254 L18.6397145,16.6760254 L18.6397145,15.243208 L15.4396522,12.1229367 L12.6626905,14.4561124 C12.4973565,14.5726194 12.3372165,14.6241229 12.1822704,14.6106228 C12.0273243,14.5971228 11.8813994,14.5342746 11.7444957,14.4220785 L5.41498358,8.41650391 Z M18.634732,3.33114963 L1.36244722,3.33114963 L1.36244722,10.5609045 L4.96842818,6.9698622 C5.10609945,6.86625615 5.2524821,6.81445312 5.40757613,6.81445312 C5.56267016,6.81445312 5.69937041,6.86096747 5.81767689,6.95399616 L12.2491594,13.0423991 L15.0544045,10.6911214 C15.1877478,10.594062 15.3280547,10.5455322 15.4753252,10.5455322 C15.6225956,10.5455322 15.761728,10.594062 15.8927224,10.6911214 L18.634732,13.3555356 L18.634732,3.33114963 Z M15.2726045,5.22858343 C16.0257201,5.22858343 16.6362408,5.8255371 16.6362408,6.56191676 C16.6362408,7.29829643 16.0257201,7.8952501 15.2726045,7.8952501 C14.5194889,7.8952501 13.9089681,7.29829643 13.9089681,6.56191676 C13.9089681,5.8255371 14.5194889,5.22858343 15.2726045,5.22858343 Z\"></path></svg>"];
const _arrow_function$4 = () => {
  return ssr(_tmpl$$4, ssrHydrationKey());
};

__astro_tag_component__(_arrow_function$4, "@astrojs/solid-js");

const _tmpl$$3 = ["<svg", " xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 32 32\"><path d=\"M25.95 7.65l.005-.004c-.092-.11-.197-.206-.293-.312c-.184-.205-.367-.41-.563-.603c-.139-.136-.286-.262-.43-.391c-.183-.165-.366-.329-.558-.482c-.16-.128-.325-.247-.49-.367c-.192-.14-.385-.277-.585-.406a13.513 13.513 0 0 0-.533-.324q-.308-.179-.625-.341c-.184-.094-.37-.185-.56-.27c-.222-.1-.449-.191-.678-.28c-.19-.072-.378-.145-.571-.208c-.246-.082-.498-.15-.75-.217c-.186-.049-.368-.102-.556-.143c-.29-.063-.587-.107-.883-.15c-.16-.023-.315-.056-.476-.073A12.933 12.933 0 0 0 6 7.703V4H4v8h8v-2H6.811A10.961 10.961 0 0 1 16 5a11.111 11.111 0 0 1 1.189.067c.136.015.268.042.403.061c.25.037.501.075.746.128c.16.035.315.08.472.121c.213.057.425.114.633.183c.164.054.325.116.486.178c.193.074.384.15.57.235c.162.072.32.15.477.23q.268.136.526.286c.153.09.305.18.453.276c.168.11.33.224.492.342c.14.102.282.203.417.312c.162.13.316.268.47.406c.123.11.248.217.365.332c.167.164.323.338.479.512A10.993 10.993 0 1 1 5 16H3a13 13 0 1 0 22.95-8.35z\" fill=\"currentColor\"></path></svg>"];
const _arrow_function$3 = () => {
  return ssr(_tmpl$$3, ssrHydrationKey());
};

__astro_tag_component__(_arrow_function$3, "@astrojs/solid-js");

const _tmpl$$2 = ["<div", " class=\"py-2 -mx-4 px-4 transition-colors md:hover:bg-slate/3\"><div class=\"", "\"><div class=\"", "\"></div><div class=\"message prose break-words overflow-hidden\">", "</div></div><!--#-->", "<!--/--></div>"],
  _tmpl$2$2 = ["<div", " class=\"fie px-3 mb-2\"><div class=\"gpt-retry-btn\"><!--#-->", "<!--/--><span>Regenerate</span></div></div>"];
const _arrow_function$2 = ({
  role,
  message,
  showRetry,
  onRetry
}) => {
  const roleClass = {
    system: "bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300",
    user: "bg-gradient-to-r from-purple-400 to-yellow-400",
    assistant: "bg-gradient-to-r from-yellow-200 via-green-200 to-green-300"
  };
  const [source] = createSignal("");
  const {
    copy,
    copied
  } = useClipboard({
    source,
    copiedDuring: 1e3
  });
  useEventListener("click", e => {
    const el = e.target;
    let code = null;
    if (el.matches("div > div.copy-btn")) {
      code = decodeURIComponent(el.dataset.code);
      copy(code);
    }
    if (el.matches("div > div.copy-btn > svg")) {
      code = decodeURIComponent(el.parentElement?.dataset.code);
      copy(code);
    }
  });
  const htmlString = () => {
    const md = MarkdownIt({
      linkify: true,
      breaks: true
    }).use(mdKatex).use(mdHighlight);
    const fence = md.renderer.rules.fence;
    md.renderer.rules.fence = (...args) => {
      const [tokens, idx] = args;
      const token = tokens[idx];
      const rawCode = fence(...args);
      return `<div relative>
      <div data-code=${encodeURIComponent(token.content)} class="copy-btn gpt-copy-btn group">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z" /><path fill="currentColor" d="M4 18H2V4a2 2 0 0 1 2-2h14v2H4Z" /></svg>
            <div class="group-hover:op-100 gpt-copy-tips">
              ${copied() ? "Copied" : "Copy"}
            </div>
      </div>
      ${rawCode}
      </div>`;
    };
    if (typeof message === "function") return md.render(message());else if (typeof message === "string") return md.render(message);
    return "";
  };
  return ssr(_tmpl$$2, ssrHydrationKey(), `flex gap-3 rounded-lg ${role === "user" ? "op-75" : ""}`, `shrink-0 w-7 h-7 mt-4 rounded-full op-80 ${escape(roleClass[role], true)}`, htmlString(), showRetry?.() && onRetry && ssr(_tmpl$2$2, ssrHydrationKey(), escape(createComponent$1(_arrow_function$3, {}))));
};

__astro_tag_component__(_arrow_function$2, "@astrojs/solid-js");

const _tmpl$$1 = ["<div", " class=\"my-4 px-4 py-3 border border-red/50 bg-red/10\"><!--#-->", "<!--/--><div class=\"text-red op-70 text-sm\">", "</div><!--#-->", "<!--/--></div>"],
  _tmpl$2$1 = ["<div", " class=\"text-red mb-1\">", "</div>"],
  _tmpl$3$1 = ["<div", " class=\"fie px-3 mb-2\"><div class=\"gpt-retry-btn border-red/50 text-red\"><!--#-->", "<!--/--><span>Regenerate</span></div></div>"];
const _arrow_function$1 = ({
  data,
  onRetry
}) => {
  return ssr(_tmpl$$1, ssrHydrationKey(), data.code && ssr(_tmpl$2$1, ssrHydrationKey(), escape(data.code)), escape(data.message), onRetry && ssr(_tmpl$3$1, ssrHydrationKey(), escape(createComponent$1(_arrow_function$3, {}))));
};

__astro_tag_component__(_arrow_function$1, "@astrojs/solid-js");

const _tmpl$ = ["<div", " class=\"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-100\"><div class=\"bg-white rounded-md shadow-md p-6\"><div class=\"flex items-center justify-between\"><h3 class=\"text-lg font-medium\">Coming soon</h3><button>", "</button></div><p class=\"text-gray-500 mt-2\">Chat with picture is coming soon!</p></div></div>"],
  _tmpl$2 = ["<div", " class=\"gen-text-wrapper relative\"><button title=\"Picture\" class=\"absolute left-1rem top-50% translate-y-[-50%]\">", "</button><textarea placeholder=\"Enter something...\" autocomplete=\"off\" autofocus rows=\"1\" class=\"gen-textarea\"></textarea><button gen-slate-btn>Send</button><button title=\"Clear\" gen-slate-btn>", "</button></div>"],
  _tmpl$3 = ["<div", " my-6><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--></div>"],
  _tmpl$4 = ["<div", " class=\"gen-cb-wrapper\"><span>AI is thinking...</span><div class=\"gen-cb-stop\">Stop</div></div>"];
const _arrow_function = () => {
  let inputRef;
  const [messageList, setMessageList] = createSignal([]);
  const [currentError, setCurrentError] = createSignal();
  const [currentAssistantMessage, setCurrentAssistantMessage] = createSignal("");
  const [loading, setLoading] = createSignal(false);
  const [controller, setController] = createSignal(null);
  const [isStick, setStick] = createSignal(false);
  const [showComingSoon, setShowComingSoon] = createSignal(false);
  const maxHistoryMessages = parseInt(({}).PUBLIC_MAX_HISTORY_MESSAGES || "99");
  createEffect(() => isStick() && smoothToBottom());
  onMount(() => {
    let lastPostion = window.scrollY;
    window.addEventListener("scroll", () => {
      const nowPostion = window.scrollY;
      nowPostion < lastPostion && setStick(false);
      lastPostion = nowPostion;
    });
    try {
      if (localStorage.getItem("messageList")) setMessageList(JSON.parse(localStorage.getItem("messageList")));
      if (localStorage.getItem("stickToBottom") === "stick") setStick(true);
    } catch (err) {
      console.error(err);
    }
    window.addEventListener("beforeunload", handleBeforeUnload);
    onCleanup(() => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    });
  });
  const handleBeforeUnload = () => {
    localStorage.setItem("messageList", JSON.stringify(messageList()));
    isStick() ? localStorage.setItem("stickToBottom", "stick") : localStorage.removeItem("stickToBottom");
  };
  const smoothToBottom = useThrottleFn(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  }, 300, false, true);
  const instantToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "instant"
    });
  };
  const convertReqMsgList = originalMsgList => {
    return originalMsgList.filter((curMsg, i, arr) => {
      const nextMsg = arr[i + 1];
      return !nextMsg || curMsg.role !== nextMsg.role;
    });
  };
  const requestWithLatestMessage = async () => {
    setLoading(true);
    setCurrentAssistantMessage("");
    setCurrentError(null);
    const storagePassword = localStorage.getItem("pass");
    try {
      const controller2 = new AbortController();
      setController(controller2);
      const requestMessageList = messageList().map(message => ({
        role: message.role === "assistant" ? "model" : "user",
        parts: [{
          text: message.content
        }]
      })).slice(-maxHistoryMessages);
      const timestamp = Date.now();
      const response = await fetch("/api/generate", {
        method: "POST",
        body: JSON.stringify({
          messages: convertReqMsgList(requestMessageList),
          time: timestamp,
          pass: storagePassword,
          sign: await generateSignature({
            t: timestamp,
            m: requestMessageList?.[requestMessageList.length - 1]?.parts[0]?.text || ""
          })
        }),
        signal: controller2.signal
      });
      if (!response.ok) {
        const error = await response.json();
        console.error(error.error);
        setCurrentError(error.error);
        throw new Error("Request failed");
      }
      const data = response.body;
      if (!data) throw new Error("No data");
      const reader = data.getReader();
      const decoder = new TextDecoder("utf-8");
      let done = false;
      while (!done) {
        const {
          value,
          done: readerDone
        } = await reader.read();
        if (value) {
          const char = decoder.decode(value, {
            stream: true
          });
          if (char === "\n" && currentAssistantMessage().endsWith("\n")) continue;
          if (char) setCurrentAssistantMessage(currentAssistantMessage() + char);
          isStick() && instantToBottom();
        }
        done = readerDone;
      }
      if (done) setCurrentAssistantMessage(currentAssistantMessage() + decoder.decode());
    } catch (e) {
      console.error(e);
      setLoading(false);
      setController(null);
      return;
    }
    archiveCurrentMessage();
    isStick() && instantToBottom();
  };
  const archiveCurrentMessage = () => {
    if (currentAssistantMessage()) {
      setMessageList([...messageList(), {
        role: "assistant",
        content: currentAssistantMessage()
      }]);
      setCurrentAssistantMessage("");
      setLoading(false);
      setController(null);
      if (!("ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0)) inputRef.focus();
    }
  };
  const retryLastFetch = () => {
    if (messageList().length > 0) {
      const lastMessage = messageList()[messageList().length - 1];
      if (lastMessage.role === "assistant") setMessageList(messageList().slice(0, -1));
      requestWithLatestMessage();
    }
  };
  return ssr(_tmpl$3, ssrHydrationKey(), escape(createComponent$1(Show, {
    get when() {
      return showComingSoon();
    },
    get children() {
      return ssr(_tmpl$, ssrHydrationKey(), escape(createComponent$1(_arrow_function$5, {})));
    }
  })), escape(createComponent$1(Index, {
    get each() {
      return messageList();
    },
    children: (message, index) => createComponent$1(_arrow_function$2, {
      get role() {
        return message().role;
      },
      get message() {
        return message().content;
      },
      showRetry: () => message().role === "assistant" && index === messageList().length - 1,
      onRetry: retryLastFetch
    })
  })), currentAssistantMessage() && escape(createComponent$1(_arrow_function$2, {
    role: "assistant",
    message: currentAssistantMessage
  })), currentError() && escape(createComponent$1(_arrow_function$1, {
    get data() {
      return currentError();
    },
    onRetry: retryLastFetch
  })), escape(createComponent$1(Show, {
    get when() {
      return !loading();
    },
    fallback: () => ssr(_tmpl$4, ssrHydrationKey()),
    get children() {
      return ssr(_tmpl$2, ssrHydrationKey(), escape(createComponent$1(_arrow_function$4, {})), escape(createComponent$1(_arrow_function$6, {})));
    }
  })));
};

__astro_tag_component__(_arrow_function, "@astrojs/solid-js");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gemini Pro Chat" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<main>
    ${renderComponent($$result2, "Header", $$Header, {})}
    ${renderComponent($$result2, "Generator", _arrow_function, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/work/GeminiProChat/src/components/Generator", "client:component-export": "default" })}
  </main>
  ${renderComponent($$result2, "Footer", $$Footer, {})}
` })}`;
}, "D:/work/GeminiProChat/src/pages/index.astro");

const $$file = "D:/work/GeminiProChat/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, index as i };
