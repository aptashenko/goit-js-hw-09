var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},l={},o=e.parcelRequire7bc7;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in l){var o=l[e];delete l[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){l[e]=t},e.parcelRequire7bc7=o);var n=o("iQIUW");const r=document.querySelector(".form"),i={delayEl:r[0],stepEl:r[1],amountEl:r[2]},{delayEl:a,stepEl:s,amountEl:u}=i;r.addEventListener("submit",(e=>{e.preventDefault();let t=0,l=Number(a.value),o=setInterval((()=>{var e,r;t<u.value?(t+=1,l+=Number(s.value),(e=t,r=l-Number(s.value),new Promise(((t,l)=>{const o=Math.random()>.3;setTimeout((()=>{o?t({position:e,delay:r}):l({position:e,delay:r})}),r)}))).then((({position:e,delay:t})=>{n.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{n.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}))):clearInterval(o)}),s.value)}));
//# sourceMappingURL=03-promises.28dcd7e8.js.map
