(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-397ca4ce"],{"20d0":function(e,t,n){e.exports=n.p+"img/about2.811be287.jpg"},"54ec":function(e,t,n){e.exports=n.p+"img/about1.04424fd3.jpg"},"5dfc":function(e,t,n){e.exports=n.p+"img/about3.0a072d3f.jpg"},f5af:function(e,t,n){!function(t,n){e.exports=n()}(0,(function(){return function(e){function t(o){if(n[o])return n[o].exports;var a=n[o]={exports:{},id:o,loaded:!1};return e[o].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=n(1),r=(o(i),n(6)),c=o(r),u=n(7),s=o(u),d=n(8),f=o(d),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),g=o(v),y=n(14),w=o(y),h=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return h=(0,g.default)(h,x),(0,b.default)(h,x.once),h},O=function(){h=(0,w.default)(),j()},M=function(){h.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},S=function(e){return!0===e||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&!0===e()},_=function(e){x=a(x,e),h=(0,w.default)();var t=document.all&&!window.atob;return S(x.disable)||t?M():(x.disableMutationObserver||f.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,(function(){j(!0)})):document.addEventListener(x.startEvent,(function(){j(!0)})),window.addEventListener("resize",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,c.default)((function(){(0,b.default)(h,x.once)}),x.throttleDelay)),x.disableMutationObserver||f.default.ready("[data-aos]",O),h)};e.exports={init:_,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,y=e.apply(o,n)}function i(e){return k=e,w=setTimeout(d,t),M?o(e):y}function r(e){var n=e-h,o=e-k,a=t-n;return S?j(a,g-o):a}function u(e){var n=e-h,o=e-k;return void 0===h||n>=t||n<0||S&&o>=g}function d(){var e=O();return u(e)?f(e):void(w=setTimeout(d,r(e)))}function f(e){return w=void 0,_&&b?o(e):(b=v=void 0,y)}function l(){void 0!==w&&clearTimeout(w),k=0,b=h=v=w=void 0}function p(){return void 0===w?y:f(O())}function m(){var e=O(),n=u(e);if(b=arguments,v=this,h=e,n){if(void 0===w)return i(h);if(S)return w=setTimeout(d,t),o(h)}return void 0===w&&(w=setTimeout(d,t)),y}var b,v,g,y,w,h,k=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(s);return t=c(t)||0,a(n)&&(M=!!n.leading,S="maxWait"in n,g=S?x(c(n.maxWait)||0,t):g,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e,t,o){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(s);return a(o)&&(i="leading"in o?!!o.leading:i,r="trailing"in o?!!o.trailing:r),n(e,t,{leading:i,maxWait:t,trailing:r})}function a(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&k.call(e)==f}function c(e){if("number"==typeof e)return e;if(r(e))return d;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?d:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",d=NaN,f="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,g="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,w=g||y||Function("return this")(),h=Object.prototype,k=h.toString,x=Math.max,j=Math.min,O=function(){return w.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function a(t){var n=b,o=v;return b=v=void 0,O=t,y=e.apply(o,n)}function i(e){return O=e,w=setTimeout(d,t),M?a(e):y}function c(e){var n=e-h,o=e-O,a=t-n;return S?x(a,g-o):a}function s(e){var n=e-h,o=e-O;return void 0===h||n>=t||n<0||S&&o>=g}function d(){var e=j();return s(e)?f(e):void(w=setTimeout(d,c(e)))}function f(e){return w=void 0,_&&b?a(e):(b=v=void 0,y)}function l(){void 0!==w&&clearTimeout(w),O=0,b=h=v=w=void 0}function p(){return void 0===w?y:f(j())}function m(){var e=j(),n=s(e);if(b=arguments,v=this,h=e,n){if(void 0===w)return i(h);if(S)return w=setTimeout(d,t),a(h)}return void 0===w&&(w=setTimeout(d,t)),y}var b,v,g,y,w,h,O=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(u);return t=r(t)||0,o(n)&&(M=!!n.leading,S="maxWait"in n,g=S?k(r(n.maxWait)||0,t):g,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function a(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function i(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||a(e)&&h.call(e)==d}function r(e){if("number"==typeof e)return e;if(i(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u="Expected a function",s=NaN,d="[object Symbol]",f=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,y=v||g||Function("return this")(),w=Object.prototype,h=w.toString,k=Math.max,x=Math.min,j=function(){return y.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0;for(t=0;t<e.length;t+=1){if(o=e[t],o.dataset&&o.dataset.aos)return!0;if(o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function a(){return!!o()}function i(e,t){var n=window.document,a=o(),i=new a(r);c=t,i.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function r(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes),a=t.concat(o);if(n(a))return c()}))}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){};t.default={isSupported:a,ready:i}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,r=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,u=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){n(this,e)}return a(e,[{key:"phone",value:function(){var e=o();return!(!i.test(e)&&!r.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!c.test(e)&&!u.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,a=window.innerHeight;e.forEach((function(e,i){n(e,a+o,t)}))};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(12),i=o(a),r=function(e,t){return e.forEach((function(e,n){e.node.classList.add("aos-init"),e.position=(0,i.default)(e.node,t.offset)})),e};t.default=r},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(13),i=o(a),r=function(e,t){var n=0,o=0,a=window.innerHeight,r={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(r.offset&&!isNaN(r.offset)&&(o=parseInt(r.offset)),r.anchor&&document.querySelectorAll(r.anchor)&&(e=document.querySelectorAll(r.anchor)[0]),n=(0,i.default)(e).top,r.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=a/2;break;case"bottom-center":n+=a/2+e.offsetHeight;break;case"center-center":n+=a/2+e.offsetHeight/2;break;case"top-top":n+=a;break;case"bottom-top":n+=e.offsetHeight+a;break;case"center-top":n+=e.offsetHeight/2+a}return r.anchorPlacement||r.offset||isNaN(t)||(o=t),n+o};t.default=r},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=n}])}))},f820:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),a=n("54ec"),i=n.n(a),r=n("20d0"),c=n.n(r),u=n("5dfc"),s=n.n(u),d=Object(o["createStaticVNode"])('<div class="container-fluid mt-3 p-0"><div class="headPic headPic-all d-flex align-items-center justify-content-center"><span class="head-title">About</span></div></div><div class="container my-4 my-lg-6"><div class="row p-5 mb-5 text-center mx-1 mx-lg-4"><h2 class="fw-bolder" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">時間是偉大的作者，它會給每個人寫出完美的結局</h2></div><div class="row row row-cols-1 row-cols-sm-2 g-5 mx-1 mx-lg-4"><div class="col mb-5" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500"><img class="img-fluid" src="'+i.a+'" alt="修錶師傅"></div><div class="col d-flex flex-column justify-content-center mb-6" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500"><p> 時間是沒有時限的，但是對人類來說時間是有限的。<br>高爾基說過：時間是最公平合理的 ，它從不多給誰一分。有限的生命，每一刻的美好都值得珍惜。 </p><p> 這也是 Moment 一刻時光屋 創辦人 毛新一 所秉持的理念，時間是可以讓世界變得更加的美好，何不為世界的美好而做一份努力呢？ </p></div><div class="col d-flex flex-column justify-content-center mb-6 order-2 order-lg-1" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500"><p> 一刻時光屋 日治時代 1938 年從基隆田寮河畔一間小舖起家，創辦人毛新一師從日本工匠緋村劍心，學習修理鐘錶，太平洋 戰爭開始後，師傅緋村劍心前往南洋服役，毛新一季成其在田寮河畔的店鋪做起鐘錶維修的 生意，其間躲過基隆大空襲，直到二戰結束，金瓜石掏金客湧入，基隆商機蓬勃，一刻鐘錶 行也在那時站穩腳步，奠定根基。 </p></div><div class="col mb-5 order-1 order-lg-2" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500"><img class="img-fluid" src="'+c.a+'" alt="基隆老照片"></div><div class="col mb-5 order-3 order-lg-3" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500"><img class="img-fluid" src="'+s.a+'" alt="修錶師傅"></div><div class="col d-flex flex-column justify-content-center mb-6 order-4 order-lg-4" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500"><p> 1960年代，台灣開始經濟起飛，一刻鐘錶行也開始引入國外高端機械錶，尤其是創辦人深感於瑞士製錶工藝的精湛， 引入了多個品牌的瑞士機械錶，並拆解深研奇機械結構，為客戶進行維修保養與調校。許多顧客從南部到基隆的本店修費與維修。 </p><p> 1970年代，一刻鐘錶行為服務廣大顧客，在台北大稻埕開了第一家分店，後來台中店與高雄店也陸續展店，迄今全台有21家分店。 </p><p> 2006年，一刻時光屋 Moment 網站成立，開始進行網路銷售與客戶服務，全世界的客戶都可以再往上購買手表與進行維修諮詢。一刻鐘錶行也秉持初心為客戶提供最真誠的服務。 </p></div></div><div class="row p-5 text-center"><h3 class="fw-bolder" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500"> 珍惜為您服務的機會，一如您珍惜生命中每一個美好時刻 </h3></div></div>',2);function f(e,t,n,a,i,r){var c=Object(o["resolveComponent"])("Loading");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(c,{active:i.isLoading,"z-index":1060},null,8,["active"]),d],64)}var l=n("f5af"),p=n.n(l),m={data:function(){return{isLoading:!1}},mounted:function(){window.scroll(0,0),p.a.init()}},b=n("d959"),v=n.n(b);const g=v()(m,[["render",f]]);t["default"]=g}}]);
//# sourceMappingURL=chunk-397ca4ce.cfae4a28.js.map