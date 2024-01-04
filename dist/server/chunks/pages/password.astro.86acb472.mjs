/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.0694af69.mjs';
import { $ as $$Layout } from './index.astro.87c07cee.mjs';
/* empty css                              */import 'path-to-regexp';
import 'cookie';
import 'kleur/colors';
import 'fs';
import 'http';
import 'tls';
import 'mime';
import 'html-escaper';
import 'string-width';
import 'slash';
/* empty css                           */import 'solid-js/web';
import 'solid-js';
import 'solidjs-use';
import './generate.ts.2a0d54ba.mjs';
import '@fuyun/generative-ai';
import 'js-sha256';
import 'markdown-it';
import 'markdown-it-katex';
import 'markdown-it-highlightjs';

const $$Astro = createAstro();
const $$Password = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Password;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Password Protection", "class": "astro-MRWAQY26" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<main class="h-screen col-fcc astro-MRWAQY26">
    <div class="op-30 astro-MRWAQY26">Please input password</div>
    <div id="input_container" class="flex mt-4 astro-MRWAQY26">
      <input id="password_input" type="password" class="gpt-password-input astro-MRWAQY26">
      <div id="submit" class="gpt-password-submit astro-MRWAQY26">
        <div class="i-carbon-arrow-right astro-MRWAQY26"></div>
      </div>
    </div>
  </main>
` })}

`;
}, "D:/work/GeminiProChat/src/pages/password.astro");

const $$file = "D:/work/GeminiProChat/src/pages/password.astro";
const $$url = "/password";

export { $$Password as default, $$file as file, $$url as url };
