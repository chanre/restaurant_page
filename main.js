(()=>{"use strict";var n={919:(n,e,t)=>{t.d(e,{A:()=>h});var o=t(601),r=t.n(o),i=t(314),a=t.n(i),c=t(417),d=t.n(c),s=new URL(t(518),t.b),l=new URL(t(868),t.b),p=a()(r()),u=d()(s),m=d()(l);p.push([n.id,`@font-face {\n    font-family: 'Montserrat';\n    src: url(${u});\n}\n\nhtml {\n    overflow-y: scroll;\n}\n\nhtml, body {\n    background-color:black;\n    background-image: url(${m});\n    font-family: 'Montserrat';\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nheader {\n    width: 100%;\n    background-color: black;\n    color: white;\n    opacity: 80%;\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    padding-top: 2.5vh;\n    padding-bottom: 2.5vh;\n}\n\n#restaurantName {\n    width: 20%;\n    order: 1;\n    margin-left: 2.5vw;\n    font-size: 3rem;\n    font-weight: bold;\n}\n\nnav {\n    order: 2;\n    width: 33%;\n    margin-left: auto;\n    margin-right: 2.5%;\n    display:flex;\n    gap: 5%;\n}\n\nbutton {\n    background-color: inherit;\n    width: 33%;\n    color: white;\n    font-size: 1.5rem;\n    border: none;\n    padding-bottom: 2%;\n    transition: transform 0.3s;\n}\n\nbutton:hover {\n    transform:translateY(-15%);\n}\n\nbutton.active {\n    border-bottom: 2px solid white;\n}\n\n#content {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    flex-direction: column;\n    align-items: center;\n}\n\n#mainContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    max-width: 900px;\n    margin-top: 4rem;\n    margin-bottom: 10vh;\n    padding-top: 2rem;\n    padding-bottom: 2vh;\n    background-color: blanchedalmond;\n    opacity: 100%;\n}\n\n#mainContainer img {\n    margin: 1% 0 1%;\n    width: 50%;\n}\n\n#mainContainer img.location {\n    width: 50%;\n}\n\n#mainMenu {\n    display: flex;                   \n    flex-direction: column;\n    align-items: center;\n    background-color: blanchedalmond;\n    color: black;\n    width: 90%;\n    margin-top: 4rem;\n    padding-top: 2rem;\n}\n\n.sectionTitle {\n    display:flex;\n    justify-content: center;\n    margin: 1rem 0 2rem 0;\n    font-size: 2rem;\n    font-weight: bold;\n}\n\n.menuSection {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    flex-wrap: wrap;\n    row-gap: 1.5rem;\n    margin-bottom: 3rem;\n}\n\n.menuItem { \n    display: flex;\n    flex-direction: column;\n    flex: initial;\n    width: 40%;\n}\n\n.name {\n    font-size: 1.5rem;\n    float: left;\n}\n\n.price {\n    font-size: 1.5rem;\n    float: right;\n}\n\n.description {\n    margin-top: 0.5rem;\n    font-size: 1rem;\n}\n\n@media (max-width:700px) {\n    html {\n        font-size: 60%;\n    }\n\n    img.location {\n        width: 80%;\n    }\n}`,""]);const h=p},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var d=n[c],s=o.base?d[0]+o.base:d[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var d=o(n,r),s=0;s<i.length;s++){var l=t(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=d}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},518:(n,e,t)=>{n.exports=t.p+"24785cc015b27a3e964b.ttf"},868:(n,e,t)=>{n.exports=t.p+"a9ac3a389838cf5e86f6.jpg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=t.p+"8c4b4b8fcd3cba6b14d4.jpg",e=function(){const e=document.querySelector("#content"),t=document.createElement("div");t.id="mainContainer";const o=document.createElement("img");o.src=n,o.alt="Mapo Tofu";const r=document.createElement("h1");r.textContent="Welcome to the Tasty Wok!";const i=document.createElement("p");i.textContent="The very best Chinese food in the GTA!",t.appendChild(r),t.appendChild(o),t.appendChild(i),e.appendChild(t)},o=t.p+"5db149278e7b61e2361e.png";function r(n,e,t){const o=document.createElement("div");o.classList.add("menuItem");const r=document.createElement("div");r.classList.add("menuTitle");const i=document.createElement("div");i.classList.add("name"),i.textContent=n;const a=document.createElement("div");a.classList.add("price"),a.textContent=e;const c=document.createElement("div");return c.classList.add("description"),c.textContent=t,r.appendChild(i),r.appendChild(a),o.appendChild(r),o.appendChild(c),o}function i(n){const e=document.createElement("div");return e.textContent=n,e.classList.add("sectionTitle"),e}var a=t(72),c=t.n(a),d=t(825),s=t.n(d),l=t(659),p=t.n(l),u=t(56),m=t.n(u),h=t(540),f=t.n(h),g=t(113),v=t.n(g),y=t(919),b={};b.styleTagTransform=v(),b.setAttributes=m(),b.insert=p().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=f(),c()(y.A,b),y.A&&y.A.locals&&y.A.locals;const w=document.getElementById("homeBtn"),x=document.getElementById("menuBtn"),S=document.getElementById("aboutBtn");function C(){document.querySelector("#content").textContent=""}function E(n){document.querySelectorAll("button").forEach((n=>{n!==this&&n.classList.remove("active")})),n.classList.add("active")}w.addEventListener("click",(n=>{C(),e(),E(n.target)})),x.addEventListener("click",(n=>{C(),function(){const n=document.querySelector("#content"),e=document.createElement("div");e.id="mainMenu",n.appendChild(e);const t=document.createElement("div");t.classList.add("menuSection"),e.append(i("APPETIZERS"),t);const o=r("Spring Rolls (4)","$7.99","Deep Fried Spring Rolls (Pork and Shrimp)"),a=r("Spicy Fried Tofu (2)","$4.99","Deep fried tofu with hot chili sauce, spicy"),c=r("Scallion Pancake","$6.99","Thin pancake made with vegetable oil & thinly sliced scallions"),d=r("Salty & Spicy Squid","$8.99","Deep fried squid fried in a hot chili sauce, spicy");t.append(o,a,c,d);const s=document.createElement("div");s.classList.add("menuSection"),e.append(i("SOUPS"),s);const l=r("Hot & Sour Soup","$4.99","Spicy and tangy soup with mushrooms, tofu, bamboo shoots and chicken"),p=r("Egg Drop Soup","$3.99","Soup with eggs in chicken broth"),u=r("Shark Fin Soup","$5.99","Shark fin with chicken broth and pork"),m=r("Winter Melon Soup","$4.99","Winter melon with pork broth, green onions and mushrooms");s.append(l,p,u,m);const h=document.createElement("div");h.classList.add("menuSection"),e.append(i("ENTREES"),h);const f=r("Fried Rice","$14.99","Stir fried rice with Chinese broccoli, shrimp and chicken"),g=r("Cantonese Chow Mein","$14.99","Pan fried crispy egg noodles with chicken and veggies"),v=r("Mapo Tofu","$12.99","Spicy tofu with ground pork and chili mix served on white rice"),y=r("Kung Pao Chicken","$13.99","Chicken with hot peppers and peanuts with white rice");h.append(f,g,v,y);const b=document.createElement("div");b.classList.add("menuSection"),e.append(i("DRINKS"),b);const w=r("Pop","$1.99","Coke, Sprite, Coke Zero, Fanta"),x=r("Lemon Tea","$2.99","Lemon tea served hot or cold"),S=r("Lemon Honey","$2.99","Lemon drink with sweet syrup served hot or cold"),C=r("Arizona","$1.49","Iced tea");b.append(w,x,S,C)}(),E(n.target)})),S.addEventListener("click",(n=>{C(),function(){const n=document.querySelector("#content"),e=document.createElement("div");e.id="mainContainer";const t=document.createElement("p");t.textContent="☎ 123-456-7890";const r=document.createElement("p");r.textContent="🏡 123 Fake Street, Fake City, FS, FC";const i=document.createElement("img");i.classList.add("location"),i.src=o,i.alt="Restaurant Location",e.appendChild(t),e.appendChild(r),e.appendChild(i),n.appendChild(e)}(),E(n.target)}));const k=document.querySelector("header"),T=document.createElement("div");T.id="restaurantName",T.textContent="THE TASTY WOK",k.appendChild(T),e(),E(w)})()})();