var e={isWebGLAvailable:function(){try{var e=document.createElement("canvas");return!(!window.WebGLRenderingContext||!e.getContext("webgl")&&!e.getContext("experimental-webgl"))}catch(e){return!1}},isWebGL2Available:function(){try{var e=document.createElement("canvas");return!(!window.WebGL2RenderingContext||!e.getContext("webgl2"))}catch(e){return!1}},getWebGLErrorMessage:function(){return this.getErrorMessage(1)},getWebGL2ErrorMessage:function(){return this.getErrorMessage(2)},getErrorMessage:function(e){var t={1:window.WebGLRenderingContext,2:window.WebGL2RenderingContext},n='Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>',r=document.createElement("div");return r.id="webglmessage",r.style.fontFamily="monospace",r.style.fontSize="13px",r.style.fontWeight="normal",r.style.textAlign="center",r.style.background="#fff",r.style.color="#000",r.style.padding="1.5em",r.style.width="400px",r.style.margin="5em auto 0",n=(n=t[e]?n.replace("$0","graphics card"):n.replace("$0","browser")).replace("$1",{1:"WebGL",2:"WebGL 2"}[e]),r.innerHTML=n,r}};const t=e=>{const t=document.querySelector("#error #message");t&&(t.textContent=e,document.querySelector("#error")?.classList.remove("hide"))},n=(()=>{if(!0!==e.isWebGL2Available())return e.getWebGL2ErrorMessage().textContent;const t=document.createElement("canvas");if(!t.transferControlToOffscreen)return"OffscreenCanvas is not supported";try{t.transferControlToOffscreen()}catch(e){return"OffscreenCanvas is not supported"}return null})();if(n)t(n);else{const e=document.querySelector("#game");if(!e)throw new Error("cannot find game canvas");const n=()=>{e.setAttribute("width",window.innerWidth.toString()),e.setAttribute("height",window.innerHeight.toString())};n();const r=e.transferControlToOffscreen(),o=new Worker(new URL("space.worker-ead7d64e.js",document.baseURI).href,{type:"module"}),s=()=>{e.addEventListener("wheel",(e=>{const t=e.deltaY>0?1:-1;o.postMessage({topic:"wheel",deltaY:t})})),e.addEventListener("mousedown",(()=>{o.postMessage({topic:"mousedown"})})),e.addEventListener("mouseup",(()=>{o.postMessage({topic:"mouseup"})})),e.addEventListener("mousemove",(e=>{o.postMessage({topic:"mousemove",event:{movementX:e.movementX,movementY:e.movementY,x:e.clientX/window.innerWidth*2-1,y:-e.clientY/window.innerHeight*2+1}})})),window.addEventListener("resize",(()=>{n(),o.postMessage({topic:"resize",size:{width:window.innerWidth,height:window.innerHeight}})}))};o.onmessage=({data:e})=>{e.success?s():e.error&&t(e.error)},o.postMessage({topic:"canvas",canvas:r},{transfer:[r]})}
//# sourceMappingURL=app-8ed26681.js.map
