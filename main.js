(()=>{"use strict";var e={996:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(81),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([e.id,"#boxCont {\n    width: 100vw;\n    height: 87vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: #008080;\n    color: #fefdac;\n    gap: 10px;\n}\n\n#boxCont>div {\n    max-width: 80%;\n    height: 480px;\n    border: #fefdac solid 2px;\n    box-shadow: #fefdac 1px 9px 9px 1px;\n    border-radius: 5px;\n}",""]);const c=i},309:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(81),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),i.push([e.id,'* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: "Poppins", sans-serif;\n}\n\nimg {\n    width: 500px;\n    height: 500px;\n}\n\nul {\n    list-style: none;\n}\n\n#content {\n    width: 100vw;\n    height: 100vh;\n}\n\nmain {\n    width: 100vw;\n    height: 87vh;\n}\n\n#navegation {\n    width: 100vw;\n    height: 10vh;\n    display: flex;\n    flex-direction: row;\n    gap: 40px;\n    align-items: center;\n    background-color: #008080;\n    color: #fefdac;\n    border-bottom: #fefdac solid 2px;\n    box-shadow: #fefdac 16px 3px 9px 1px;\n    font-size: 19px;\n}\n\n#navegation h1 {\n    flex: 2;\n    text-align: center;\n    cursor: pointer;\n}\n\n#navegation nav {\n    display: flex;\n    flex: 4;\n}\n\n#navegation nav ul {\n    display: flex;\n    flex-direction: row;\n    flex: 1;\n    padding-top: 10px;\n    cursor: pointer;\n}\n\n#navegation nav ul li {\n    margin-left: 80px;\n    padding: 5px;\n}\n.active{\n    background-color: rgba(254, 253, 172, 0.5);\n    border-radius: 20px;\n    \n}\nfooter {\n    display: flex;\n    justify-content: center;\n    width: 100vw;\n    height: 3vh;\n    background-color: #008080;\n    color: #fefdac;\n    border-top: #fefdac solid 2px;\n    box-shadow: #fefdac 16px 3px 9px 1px;\n}\n\n/*central page*/\n#pageCenter {\n    width: 100vw;\n    height: 87vh;\n    display: grid;\n    grid-template: 1fr 1fr / 1fr 1fr;\n    justify-content: center;\n    align-items: center;\n    background-color: #008080;\n    color: #fefdac;\n    font-size: 18px;\n}\n\n#pageCenter img {\n    grid-column: 1/2;\n    grid-row: 1/3;\n    align-self: center;\n    justify-self: end;\n    width: 85%;\n    height: 80%;\n    object-fit: cover;\n    border-radius: 120px;\n    border: #fefdac solid 2px;\n    box-shadow: #fefdac 2px 4px 4px 1px;\n}\n\n#pageCenter h3 {\n    align-self: flex-end;\n    padding: 20px;\n}\n\n#pageCenter p {\n    align-self: flex-start;\n    padding: 20px;\n}',""]);const c=i},195:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(81),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([e.id,"#boxMenu {\n    width: 100vw;\n    height: 87vh;\n    background-color: #fefdac;\n    display: grid;\n    grid-template: 1fr 1fr / 1fr 1fr 1fr;\n    gap: 10px;\n    justify-items: center;\n    align-items: center;\n    padding-top: 30px;\n}\n\n#boxMenu>div>img {\n    width: 55%;\n    height: 55%;\n    object-fit: cover;\n    border-radius: 120px;\n    border: #fefdac solid 2px;\n    box-shadow: #fefdac 2px 4px 4px 1px;\n}\n\n#boxMenu>div {\n    width: 350px;\n    height: 330px;\n    padding: 20px;\n    border: #008080 solid 2px;\n    background-color: #008080;\n    border-radius: 20px;\n    color: #fefdac;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: justify;\n    gap: 10px;\n    box-shadow: rgba(0, 128, 128, 0.5) 5px 5px 9px 1px;\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);a&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],l=a.base?s[0]+a.base:s[0],d=o[l]||0,p="".concat(l," ").concat(d);o[l]=d+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var h=r(f,a);a.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var s=a(e,r),l=0;l<o.length;l++){var d=t(o[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var o=n[a]={id:a,exports:{}};return e[a](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&!e;)e=a[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),r=t.n(a),o=t(569),i=t.n(o),c=t(565),s=t.n(c),l=t(216),d=t.n(l),p=t(589),u=t.n(p),f=t(309),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),n()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var m=t(195),g={};g.styleTagTransform=u(),g.setAttributes=s(),g.insert=i().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=d(),n()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;var x=t(996),v={};v.styleTagTransform=u(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=d(),n()(x.Z,v),x.Z&&x.Z.locals&&x.Z.locals;const b=()=>{let e=document.createElement("section"),n=document.createElement("img"),t=document.createElement("h3"),a=document.createElement("p");return document.createElement("span"),n.src="./img/logo_pasta.jpg",t.textContent="Welcome to Sapore Italiano",a.textContent="Welcome to 'Sapore Italiano' a culinary oasis where the art of pasta takes center stage, immerse yourself in a journey through Italy's rich and diverse pasta traditions. Located in Bogota Colombia, 'Restauran' combines rustic charm with contemporary elegance to create a warm and inviting atmosphere for lovers of Italian cuisine.",e.setAttribute("id","pageCenter"),e.appendChild(n),e.appendChild(t),e.appendChild(a),e},y=t.p+"50906a3c0a42a1540893.jpg",w=document.querySelector("#content"),C=document.createElement("main");w.appendChild((e=>{let n=document.createElement("header");n.setAttribute("id","navegation");let t=document.createElement("h1");t.textContent="Sapore Italiano";let a=document.createElement("nav"),r=document.createElement("ul");r.setAttribute("id","menuItems");let o="Home";function i(e){let n=document.createElement("li");return n.textContent=e,n.addEventListener("click",(e=>{c(),e.target.classList.add("active"),function(e){if(e.target.textContent===o);else switch(e.target.textContent){case"Home":C.innerHTML="",C.appendChild(b()),o=String(e.target.textContent);break;case"Menu":C.innerHTML="",C.appendChild(function(){let e=document.createElement("div");function n(e,n,t){let a=document.createElement("div"),r=document.createElement("h3"),o=document.createElement("img"),i=document.createElement("p");return r.textContent=e,o.src=n,i.textContent=t,a.appendChild(r),a.appendChild(o),a.appendChild(i),a}return e.appendChild(n("Spaghetti puttanesca",`${y}`,"Cook up this classic sauce in one pan, then toss with spaghetti for a simple midweek meal. It's budget-friendly too, making it a great meal for the family")),e.appendChild(n("One-pot tomato orzo","./img/tomato_orzo.jpg","Perfect for a family midweek dinner. Finish with fresh parsley and plenty of parmesan")),e.appendChild(n("Chicken pasta bake","./img/chicken_pasta.jpg","Enjoy this gooey cheese and chicken pasta bake for the ultimate weekday family dinner. Serve straight from the dish with a dressed green salad")),e.appendChild(n("Spaghetti bolognese","./img/bolognese.jpg","The spaghetti Bolognese sauce was absolutely delicious and flavor a true Italian classic with a meaty")),e.appendChild(n("Classic Italian lasagne","./img/lasagne.jpg","Authentic Italian lasagne recipe, with a creamy béchamel sauce and classic defined layers. Everyone's favourite family meal")),e.appendChild(n("Beef stroganoff","./img/stroganoff.jpg","Classic beef stroganoff with steak and mushrooms for a tasty midweek meal. Garnish with parsley and serve with pappardelle pasta or rice.")),e.setAttribute("id","boxMenu"),e}()),o=String(e.target.textContent);break;case"Contact Us":C.innerHTML="",C.appendChild(function(){let e=document.createElement("div");return e.innerHTML='<h3>Contact</h3>\n    <p>(012)3456789</p>\n    <p>Fake direcction 1234</p> \n    <p>info@fakemail.com</p>\n    <div style="width: 100%"><iframe width="100%" height="480px"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe></div>\n    ',e.setAttribute("id","boxCont"),e}()),o=String(e.target.textContent)}}(e),console.log(e.target.textContent)})),n}t.addEventListener("click",(e=>{C.innerHTML="",c(),C.appendChild(b())}));let c=function(){let e=document.querySelectorAll("li");console.log(e);for(let n=0;n<e.length;n++)e[n].classList.remove("active")};return r.appendChild(i("Home")),r.appendChild(i("Menu")),r.appendChild(i("Contact Us")),n.appendChild(t),a.appendChild(r),n.appendChild(a),n})()),w.appendChild(C),C.appendChild(b()),w.appendChild(function(){let e=document.createElement("footer");return document.createElement("span"),e.innerHTML="<h5>Proyect create by objetive218</h5>",e}())})()})();
