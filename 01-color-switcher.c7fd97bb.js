const t={bodyEl:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),resetBtn:document.querySelector("[data-reset]"),getColor:()=>`#${Math.floor(16777215*Math.random()).toString(16)}`},{resetBtn:e,bodyEl:r,startBtn:o,stopBtn:a,getColor:l}=t,s=localStorage.getItem("bodyBackground");s?r.style.background=s:e.removeAttribute("disabled");const d={intervalId:null,isActive:!1,bodyColor:null,colorChange(t){if(""===t.target.dataset.start){if(this.isActive)return;this.isActive=!0,t.target.setAttribute("disabled",!0),this.intervalId=setInterval((()=>{this.bodyColor=l(),r.style.background=this.bodyColor,localStorage.setItem("bodyBackground",this.bodyColor)}),1e3),a.removeAttribute("disabled"),e.removeAttribute("disabled")}else""===t.target.dataset.stop?(this.isActive=!1,clearInterval(this.intervalId),o.removeAttribute("disabled"),t.target.setAttribute("disabled",!0)):""===t.target.dataset.reset&&(localStorage.removeItem("bodyBackground"),this.isActive=!1,clearInterval(this.intervalId),o.removeAttribute("disabled"),t.target.setAttribute("disabled",!0),this.bodyColor=null,r.style.background=null)}};r.addEventListener("click",(t=>{d.colorChange(t)}));
//# sourceMappingURL=01-color-switcher.c7fd97bb.js.map