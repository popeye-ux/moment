(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33d1f4a4"],{"0b42":function(e,t,c){var n=c("da84"),r=c("e8b5"),o=c("68ee"),l=c("861d"),a=c("b622"),d=a("species"),s=n.Array;e.exports=function(e){var t;return r(e)&&(t=e.constructor,o(t)&&(t===s||r(t.prototype))?t=void 0:l(t)&&(t=t[d],null===t&&(t=void 0))),void 0===t?s:t}},"1dde":function(e,t,c){var n=c("d039"),r=c("b622"),o=c("2d00"),l=r("species");e.exports=function(e){return o>=51||!n((function(){var t=[],c=t.constructor={};return c[l]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"65f0":function(e,t,c){var n=c("0b42");e.exports=function(e,t){return new(n(e))(0===t?0:t)}},8418:function(e,t,c){"use strict";var n=c("a04b"),r=c("9bf2"),o=c("5c6c");e.exports=function(e,t,c){var l=n(t);l in e?r.f(e,l,o(0,c)):e[l]=c}},"99af":function(e,t,c){"use strict";var n=c("23e7"),r=c("da84"),o=c("d039"),l=c("e8b5"),a=c("861d"),d=c("7b0b"),s=c("07fa"),i=c("8418"),b=c("65f0"),u=c("1dde"),m=c("b622"),O=c("2d00"),j=m("isConcatSpreadable"),p=9007199254740991,f="Maximum allowed index exceeded",E=r.TypeError,N=O>=51||!o((function(){var e=[];return e[j]=!1,e.concat()[0]!==e})),V=u("concat"),h=function(e){if(!a(e))return!1;var t=e[j];return void 0!==t?!!t:l(e)},k=!N||!V;n({target:"Array",proto:!0,forced:k},{concat:function(e){var t,c,n,r,o,l=d(this),a=b(l,0),u=0;for(t=-1,n=arguments.length;t<n;t++)if(o=-1===t?l:arguments[t],h(o)){if(r=s(o),u+r>p)throw E(f);for(c=0;c<r;c++,u++)c in o&&i(a,u,o[c])}else{if(u>=p)throw E(f);i(a,u++,o)}return a.length=u,a}})},b0c0:function(e,t,c){var n=c("83ab"),r=c("5e77").EXISTS,o=c("e330"),l=c("9bf2").f,a=Function.prototype,d=o(a.toString),s=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,i=o(s.exec),b="name";n&&!r&&l(a,b,{configurable:!0,get:function(){try{return i(s,d(this))[1]}catch(e){return""}}})},da3a:function(e,t,c){"use strict";c.r(t);c("b0c0");var n=c("7a23"),r={class:"container mt-7"},o={class:"row row-cols-3 row-cols-sm-3"},l=Object(n["createStaticVNode"])('<div class="col text-center"><div class="check-step check-step-finished d-flex flex-column justify-content-center"><i class="bi bi-check2-circle check-step-icon"></i><span>STEP 1</span><span>確認訂單</span></div></div><div class="col text-center"><div class="check-step check-step-finished d-flex flex-column justify-content-center"><i class="bi bi-check2-circle check-step-icon"></i><span>STEP 2</span><span>建立訂單</span></div></div>',2),a={class:"col text-center"},d={key:0,class:"bi bi-dash-circle-dotted check-step-icon"},s={key:1,class:"bi bi-check2-circle check-step-icon"},i=Object(n["createElementVNode"])("span",null,"STEP 3",-1),b=Object(n["createElementVNode"])("span",null,"完成訂單",-1),u={key:0,class:"row text-center mt-7"},m=Object(n["createElementVNode"])("h2",{class:"fw-bolder"},"訂單已完成付款，謝謝您的訂購！",-1),O=[m],j={class:"container my-7"},p={key:0,class:"col-12 col-sm-6"},f=Object(n["createElementVNode"])("h3",{class:"fw-bold"},"訂購商品",-1),E={class:"table"},N=Object(n["createElementVNode"])("thead",null,[Object(n["createElementVNode"])("tr",null,[Object(n["createElementVNode"])("th",{class:"check-none"}),Object(n["createElementVNode"])("th"),Object(n["createElementVNode"])("th",{class:"text-end check-no"})])],-1),V={class:"align-middle"},h=Object(n["createElementVNode"])("br",null,null,-1),k={class:"ps-3 align-middle text-end"},y={colspan:"3",class:"text-end"},v={class:"text-danger"},g={class:"col-12 col-sm-6"},x={class:"fw-bold"},w=Object(n["createTextVNode"])(" 訂單資訊"),B={class:"fw-normal fs-5 text-danger"},S={class:"table"},D=Object(n["createElementVNode"])("thead",null,[Object(n["createElementVNode"])("tr",null,[Object(n["createElementVNode"])("th",{class:"order-none"}),Object(n["createElementVNode"])("th",{class:"check-table-w60"})])],-1),_=Object(n["createElementVNode"])("td",{class:"align-middle"},"訂單金額",-1),C={class:"text-danger align-middle"},T=Object(n["createElementVNode"])("td",null,"訂單編號",-1),$=Object(n["createElementVNode"])("td",null,"訂單日期",-1),A=Object(n["createElementVNode"])("td",null,"email",-1),z=Object(n["createElementVNode"])("td",null,"收件人姓名",-1),F=Object(n["createElementVNode"])("td",null,"收件人電話",-1),P=Object(n["createElementVNode"])("td",null,"收件地址",-1),I=Object(n["createElementVNode"])("td",null,"備註",-1),J={key:0,class:"col"},L={key:1,class:"col"},q=Object(n["createTextVNode"])("繼續選購");function M(e,t,c,m,M,U){var X=Object(n["resolveComponent"])("router-link");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createElementVNode"])("div",r,[Object(n["createElementVNode"])("div",o,[l,Object(n["createElementVNode"])("div",a,[Object(n["createElementVNode"])("div",{class:Object(n["normalizeClass"])(["check-step d-flex flex-column justify-content-center",{"check-step-finished":M.order.is_paid}])},[M.order.is_paid?(Object(n["openBlock"])(),Object(n["createElementBlock"])("i",s)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("i",d)),i,b],2)])]),M.order.is_paid?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",u,O)):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("div",j,[Object(n["createElementVNode"])("div",{class:Object(n["normalizeClass"])(["row",M.order.is_paid?"justify-content-center":""])},[M.order.is_paid?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",p,[f,Object(n["createElementVNode"])("table",E,[N,Object(n["createElementVNode"])("tbody",null,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(M.products,(function(t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",{key:t.id},[Object(n["createElementVNode"])("td",null,[Object(n["createElementVNode"])("div",{class:"check-product-img",style:Object(n["normalizeStyle"])({backgroundImage:"url(".concat(t.product.imageUrl,")")})},null,4)]),Object(n["createElementVNode"])("td",V,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(t.product.title),1),h,Object(n["createElementVNode"])("small",null,"數量:"+Object(n["toDisplayString"])(t.qty),1)]),Object(n["createElementVNode"])("td",k,Object(n["toDisplayString"])(e.$filters.currency(t.product.price))+" 元 ",1)])})),128))]),Object(n["createElementVNode"])("tfoot",null,[Object(n["createElementVNode"])("tr",null,[Object(n["createElementVNode"])("td",y,[Object(n["createElementVNode"])("h4",v," 總金額 "+Object(n["toDisplayString"])(e.$filters.currency(M.order.total))+" 元 ",1)])])])])])),Object(n["createElementVNode"])("div",g,[Object(n["createElementVNode"])("h3",x,[w,Object(n["createElementVNode"])("span",B,"("+Object(n["toDisplayString"])(M.order.is_paid?"已付款":"未付款")+")",1)]),Object(n["createElementVNode"])("table",S,[D,Object(n["createElementVNode"])("tbody",null,[Object(n["createElementVNode"])("tr",null,[_,Object(n["createElementVNode"])("td",null,[Object(n["createElementVNode"])("h2",C,Object(n["toDisplayString"])(e.$filters.currency(M.order.total))+" 元 ",1)])]),Object(n["createElementVNode"])("tr",null,[T,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(M.order.id),1)]),Object(n["createElementVNode"])("tr",null,[$,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(U.getDate(M.order.create_at)),1)]),Object(n["createElementVNode"])("tr",null,[A,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(M.user.email),1)]),Object(n["createElementVNode"])("tr",null,[z,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(M.user.name),1)]),Object(n["createElementVNode"])("tr",null,[F,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(M.user.tel),1)]),Object(n["createElementVNode"])("tr",null,[P,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(M.user.address),1)]),Object(n["createElementVNode"])("tr",null,[I,Object(n["createElementVNode"])("td",null,[M.order.message?(Object(n["openBlock"])(),Object(n["createElementBlock"])("p",J,Object(n["toDisplayString"])(M.order.message),1)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("p",L,"無"))])])])]),M.order.is_paid?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createElementBlock"])("button",{key:0,type:"submit",class:"btn add-btn w-100 py-3 mt-2",onClick:t[0]||(t[0]=function(){return U.payOrder&&U.payOrder.apply(U,arguments)})}," 信用卡付款 ")),M.order.is_paid?(Object(n["openBlock"])(),Object(n["createBlock"])(X,{key:1,to:"/products",class:"btn add-btn btn-lg mt-3 fw-bolder d-flex justify-content-center"},{default:Object(n["withCtx"])((function(){return[q]})),_:1})):Object(n["createCommentVNode"])("",!0)])],2)])],64)}c("99af");var U={data:function(){return{order:{},user:{},products:{},is_paid:!1}},watch:{is_paid:function(){this.is_paid=this.order.is_paid}},methods:{getOrder:function(){var e=this,t=this.$route.params.id,c="".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("popeye","/order/").concat(t);this.$http.get(c).then((function(t){e.order=t.data.order,e.user=t.data.order.user,e.products=t.data.order.products}))},getDate:function(e){var t=new Date(1e3*e);return t.toLocaleDateString()},payOrder:function(){var e=this,t=this.$route.params.id,c="".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("popeye","/pay/").concat(t);this.$http.post(c).then((function(t){e.showAlert({icon:"success",title:"".concat(t.data.message),showConfirmButton:!1,timer:1500}),e.getOrder()}))},showAlert:function(e){this.$swal(e)}},mounted:function(){this.getOrder(),window.scroll(0,0)}},X=c("d959"),G=c.n(X);const H=G()(U,[["render",M]]);t["default"]=H},e8b5:function(e,t,c){var n=c("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}}}]);
//# sourceMappingURL=chunk-33d1f4a4.17340b4d.js.map