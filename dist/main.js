(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: 'Montserrat', sans-serif;\n}\n\n:root {\n    --dark-blue: #2b3467;\n    --light-blue: #bad7e9;\n    --cream: #fcffe7;\n    --red: #eb455f;\n    --purple: #5d3891;\n    --orange: #f99417;\n    --gray: #e8e2e2;\n    --light-grey: #f5f5f5;\n    --green: #ade792;\n    --dark-green: #5d9c59;\n}\n\n.main-container {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 100vh;\n}\n\n/* Sidebar */\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    padding: 1rem;\n    color: var(--light-grey);\n    background-color: var(--dark-blue);\n}\n\n.sidebar-head {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.sidebar-user {\n    font-size: 0.7rem;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n.edit-user {\n    opacity: 0.3;\n    padding-left: 0px;\n    cursor: pointer;\n}\n\n/* PopUp */\n.edit-popup {\n    position: relative;\n}\n\n.edit-form {\n    visibility: hidden;\n    width: 160px;\n    background-color: var(--light-blue);\n    color: #fff;\n    text-align: center;\n    border-radius: 6px;\n    padding: 8px 0;\n    position: absolute;\n    z-index: 1;\n    bottom: 125%;\n    left: 50%;\n    margin-left: -80px;\n}\n\n.edit-form input {\n    width: 90%;\n    display: block;\n    text-align: center;\n    margin-left: 8px;\n    border: none;\n    padding: 5px;\n    border-radius: 6px;\n    margin-bottom: 10px;\n}\n\n.edit-form span {\n    padding: 5px;\n}\n\n/* Toggle this class - hide and show the popup */\n.show {\n    visibility: visible;\n    z-index: 0;\n    -webkit-animation: fadeIn 1s;\n    animation: fadeIn 1s;\n}\n\n/* Add animation (fade in the popup) */\n@-webkit-keyframes fadeIn {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n@keyframes fadeIn {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n.form-check {\n    color: var(--dark-green);\n    cursor: pointer;\n}\n\n.form-cancel {\n    color: var(--red);\n    cursor: pointer;\n}\n\n/* Sidebar notifications */\n\n.sidebar-notifications {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.today,\n.upcoming,\n.high-priority {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.today-logo,\n.today .notif-text:hover {\n    color: var(--green);\n}\n\n.upcoming-logo,\n.upcoming .notif-text:hover {\n    color: var(--orange);\n}\n\n.priority-logo,\n.high-priority .notif-text:hover {\n    color: var(--red);\n}\n\n.notification {\n    opacity: 0.3;\n    margin-left: auto;\n    cursor: pointer;\n}\n\n.notif-text {\n    cursor: pointer;\n}\n\n.division {\n    border: 2px solid var(--purple);\n    opacity: 0.3;\n    width: 50%;\n    align-self: center;\n}\n\n/* My projects */\n\n.my-projects {\n    display: flex;\n    justify-content: space-between;\n}\n\n.my-projects span,\n.edit-project {\n    opacity: 0.3;\n    cursor: pointer;\n}\n\n.projects-container {\n    padding: 1rem 0 0 1rem;\n}\n\n.project {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    position: relative;\n}\n\n.project div {\n    display: flex;\n    gap: 5px;\n}\n",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=a(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=t(o[i]);e[c].references--}for(var s=r(n,a),d=0;d<o.length;d++){var l=t(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),a=t.n(r),o=t(569),i=t.n(o),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),f=t(426),m={};function v(){document.querySelector(".edit-form").classList.toggle("show")}m.styleTagTransform=u(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=l(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const g={name:"User",projects:{}},h=document.querySelector(".sidebar-user strong");h.textContent=g.name,g.projects.Home={},g.projects.Work={},console.log(g.projects),document.querySelector(".edit-user").addEventListener("click",v),document.querySelector(".form-cancel").addEventListener("click",v);let y=document.querySelector(".form-check");y.addEventListener("click",(()=>{let n=document.getElementById("name");g.name=n.value,h.textContent=g.name})),y.addEventListener("click",v),Object.keys(g.projects).forEach((n=>{!function(n){let e=document.querySelector(".projects-container"),t=document.createElement("div");t.classList.add("project");let r=document.createElement("p");r.textContent=n;let a=document.createElement("div"),o=document.createElement("span");o.classList.add("edit-project");let i=document.createElement("i");i.classList.add("fa-solid"),i.classList.add("fa-check"),i.classList.add("fa-2xs"),o.appendChild(i);let c=document.createElement("span");c.classList.add("edit-project");let s=document.createElement("i");s.classList.add("fa-solid"),s.classList.add("fa-xmark"),c.appendChild(s),a.appendChild(o),a.appendChild(c),t.appendChild(r),t.appendChild(a),a.appendChild(function(n){let e=document.createElement("div");e.classList.add("edit-current-project");let t=document.createElement("input");t.setAttribute("type","text"),t.setAttribute("name",n),t.setAttribute("id",n),t.setAttribute("value",n),e.appendChild(t);let r=document.createElement("div"),a=document.createElement("span");a.classList.add("ok");let o=document.createElement("i");o.classList.add("fa-solid"),o.classList.add("fa-check"),o.classList.add("fa-2xs"),a.appendChild(o);let i=document.createElement("span");i.classList.add("cancel");let c=document.createElement("i");return c.classList.add("fa-solid"),c.classList.add("fa-xmark"),i.appendChild(c),r.appendChild(a),r.appendChild(i),e.appendChild(r),e}(n)),e.appendChild(t)}(n)}))})()})();