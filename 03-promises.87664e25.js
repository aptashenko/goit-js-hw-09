!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequire7bc7;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequire7bc7=o);var i=o("h6c0i"),r=document.querySelector(".form"),a={delayEl:r[0],stepEl:r[1],amountEl:r[2]},l=a.delayEl,u=a.stepEl,c=a.amountEl;r.addEventListener("submit",(function(e){e.preventDefault();var n=0,t=Number(l.value),o=setInterval((function(){var e,r;n<c.value?(n+=1,t+=Number(u.value),(e=n,r=t-Number(u.value),new Promise((function(n,t){var o=Math.random()>.3;setTimeout((function(){o?n({position:e,delay:r}):t({position:e,delay:r})}),r)}))).then((function(e){var n=e.position,t=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))):clearInterval(o)}),u.value)}))}();
//# sourceMappingURL=03-promises.87664e25.js.map
