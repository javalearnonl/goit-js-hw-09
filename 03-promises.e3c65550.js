function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequire7bc7;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=i);var r=i("7Y9D8");function l(e,t){return new Promise(((n,o)=>{const i=Math.random()>.3;setTimeout((()=>{i?n({position:e,delayTime:t}):o({position:e,delayTime:t})}),t)}))}document.querySelector("form").addEventListener("submit",(function(t){t.preventDefault();const{delay:n,step:o,amount:i}=t.target.elements;let s=+n.value;const u=+o.value,a=+i.value;for(let t=1;t<=a;t++)l(t,s).then((({position:t,delayTime:n})=>{e(r).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delayTime:n})=>{e(r).Notify.failure(`❌ rejected promise ${t} in ${n}ms`)})),s+=u}));
//# sourceMappingURL=03-promises.e3c65550.js.map