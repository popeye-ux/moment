(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b39c402e"],{"7f36":function(e,t,a){"use strict";var c=a("7a23"),n={"aria-label":"Page navigation example"},l={class:"pagination"},r=Object(c["createElementVNode"])("span",{"aria-hidden":"true"},"«",-1),o=[r],d={key:0,class:"page-link"},i=["onClick"],s=Object(c["createElementVNode"])("span",{"aria-hidden":"true"},"»",-1),b=[s];function m(e,t,a,r,s,m){return Object(c["openBlock"])(),Object(c["createElementBlock"])("nav",n,[Object(c["createElementVNode"])("ul",l,[Object(c["createElementVNode"])("li",{class:Object(c["normalizeClass"])(["page-item",{disabled:!a.pages.has_pre}])},[Object(c["createElementVNode"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=Object(c["withModifiers"])((function(t){return e.$emit("get-products",a.pages.current_page-1)}),["prevent"]))},o)],2),(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(a.pages.total_pages,(function(t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("li",{class:Object(c["normalizeClass"])(["page-item",{active:t===a.pages.current_page}]),key:t+"page"},[t===a.pages.current_page?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",d,Object(c["toDisplayString"])(t),1)):(Object(c["openBlock"])(),Object(c["createElementBlock"])("a",{key:1,class:"page-link",href:"#",onClick:Object(c["withModifiers"])((function(a){return e.$emit("get-products",t)}),["prevent"])},Object(c["toDisplayString"])(t),9,i))],2)})),128)),Object(c["createElementVNode"])("li",{class:Object(c["normalizeClass"])(["page-item",{disabled:!a.pages.has_next}])},[Object(c["createElementVNode"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=Object(c["withModifiers"])((function(t){return e.$emit("get-products",a.pages.current_page+1)}),["prevent"]))},b)],2)])])}var p={props:["pages"],emits:["get-products"]},u=a("d959"),O=a.n(u);const j=O()(p,[["render",m]]);t["a"]=j},"80ac":function(e,t,a){"use strict";a.r(t);var c=a("7a23"),n={class:"container"},l=Object(c["createElementVNode"])("h2",{class:"text-center"},"這是訂單管理",-1),r={class:"text-end pt-5"},o=["disabled"],d={class:"table mt-4"},i=Object(c["createElementVNode"])("thead",null,[Object(c["createElementVNode"])("tr",null,[Object(c["createElementVNode"])("th",null,"購買時間"),Object(c["createElementVNode"])("th",null,"Email"),Object(c["createElementVNode"])("th",null,"購買款項"),Object(c["createElementVNode"])("th",null,"應付金額"),Object(c["createElementVNode"])("th",null,"是否付款"),Object(c["createElementVNode"])("th",null,"編輯")])],-1),s={class:"table"},b={width:"100"},m={width:"50"},p={class:"text-right"},u={class:"form-check form-switch"},O=["id","onUpdate:modelValue","onChange"],j=["for"],h={key:0},E={key:1},V={class:"btn-group"},N=["onClick"],f=["onClick"];function g(e,t,a,g,k,y){var v=Object(c["resolveComponent"])("Loading"),B=Object(c["resolveComponent"])("pagination"),D=Object(c["resolveComponent"])("order-modal"),x=Object(c["resolveComponent"])("del-order-modal");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createVNode"])(v,{active:k.isLoading,"z-index":1060},null,8,["active"]),Object(c["createElementVNode"])("div",n,[l,Object(c["createElementVNode"])("div",r,[Object(c["createElementVNode"])("button",{class:"btn btn-outline-danger",type:"button",onClick:t[0]||(t[0]=function(){return y.removeAllOrders&&y.removeAllOrders.apply(y,arguments)}),disabled:0===k.orderData.length}," 刪除全部訂單 ",8,o)]),Object(c["createElementVNode"])("table",d,[i,Object(c["createElementVNode"])("tbody",null,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(k.orderData,(function(t){return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],{key:t.id},[k.orderData.length?(Object(c["openBlock"])(),Object(c["createElementBlock"])("tr",{key:0,class:Object(c["normalizeClass"])({"text-secondary":!t.is_paid})},[Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(y.getDate(t.create_at)),1),Object(c["createElementVNode"])("td",null,[Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(t.user.email),1)]),Object(c["createElementVNode"])("td",null,[Object(c["createElementVNode"])("table",s,[Object(c["createElementVNode"])("tbody",null,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(t.products,(function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("tr",{key:t},[Object(c["createElementVNode"])("td",b,Object(c["toDisplayString"])(e.product.title),1),Object(c["createElementVNode"])("td",m," 數量 "+Object(c["toDisplayString"])(e.qty)+" "+Object(c["toDisplayString"])(e.product.unit),1)])})),128))])])]),Object(c["createElementVNode"])("td",p,Object(c["toDisplayString"])(e.$filters.currency(t.total)),1),Object(c["createElementVNode"])("td",null,[Object(c["createElementVNode"])("div",u,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{class:"form-check-input",type:"checkbox",id:"".concat(t.id),"onUpdate:modelValue":function(e){return t.is_paid=e},onChange:function(e){return y.updateOrder(t)}},null,40,O),[[c["vModelCheckbox"],t.is_paid]]),Object(c["createElementVNode"])("label",{class:"form-check-label",for:"".concat(t.id)},[t.is_paid?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",h,"已付款")):(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",E,"未付款"))],8,j)])]),Object(c["createElementVNode"])("td",null,[Object(c["createElementVNode"])("div",V,[Object(c["createElementVNode"])("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:function(e){return y.openOrderModal(t)}}," 檢視 ",8,N),Object(c["createElementVNode"])("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:function(e){return y.openDelModal(t)}}," 刪除 ",8,f)])])],2)):Object(c["createCommentVNode"])("",!0)],64)})),128))])]),Object(c["createVNode"])(B,{pages:k.pagination,onGetProducts:y.getOrder},null,8,["pages","onGetProducts"])]),Object(c["createVNode"])(D,{ref:"orderModal",order:k.tempOrder,onUpdatePaid:y.updateOrder},null,8,["order","onUpdatePaid"]),Object(c["createVNode"])(x,{ref:"delOrder","temp-order":k.tempOrder,onUpdate:y.getOrder},null,8,["temp-order","onUpdate"])],64)}var k=a("5530"),y=(a("99af"),a("7f36")),v={id:"delOrder",ref:"delOrder",class:"modal fade",tabindex:"-1","aria-labelledby":"delOrderLabel","aria-hidden":"true"},B={class:"modal-dialog"},D={class:"modal-content border-0"},x=Object(c["createElementVNode"])("div",{class:"modal-header bg-danger text-white"},[Object(c["createElementVNode"])("h5",{id:"delOrderLabel",class:"modal-title"},[Object(c["createElementVNode"])("span",null,"刪除訂單")]),Object(c["createElementVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),w={class:"modal-body"},_=Object(c["createTextVNode"])(" 是否刪除 "),C={class:"text-danger"},M=Object(c["createTextVNode"])(" 訂單(刪除後將無法恢復)。 "),S={class:"modal-footer"},L=Object(c["createElementVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function $(e,t,a,n,l,r){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",v,[Object(c["createElementVNode"])("div",B,[Object(c["createElementVNode"])("div",D,[x,Object(c["createElementVNode"])("div",w,[_,Object(c["createElementVNode"])("strong",C,Object(c["toDisplayString"])(a.tempOrder.id),1),M]),Object(c["createElementVNode"])("div",S,[L,Object(c["createElementVNode"])("button",{type:"button",class:"btn btn-danger","data-bs-dismiss":"modal",onClick:t[0]||(t[0]=function(){return r.delOrder&&r.delOrder.apply(r,arguments)})}," 確認刪除 ")])])])],512)}var U=a("7c2b"),F=a.n(U),P={props:["tempOrder"],data:function(){return{modal:""}},mounted:function(){this.modal=new F.a(this.$refs.delOrder,{keyboard:!1,backdrop:"static"})},methods:{delOrder:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("popeye","/admin/order/").concat(this.tempOrder.id);this.$http.delete(t).then((function(t){e.$emit("update"),e.hideModal(),alert("訂單已刪除")})).catch((function(e){alert(e)}))},openModal:function(){this.modal.show()},hideModal:function(){this.modal.hide()}}},T=a("d959"),z=a.n(T);const A=z()(P,[["render",$]]);var q=A,G=(a("b0c0"),{class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"orderModal"}),J={class:"modal-dialog modal-xl"},I={class:"modal-content border-0"},X=Object(c["createElementVNode"])("div",{class:"modal-header bg-dark text-white"},[Object(c["createElementVNode"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(c["createElementVNode"])("span",null,"訂單細節")]),Object(c["createElementVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),H={class:"modal-body"},K={class:"row"},Q={class:"col-md-4"},R=Object(c["createElementVNode"])("h3",null,"用戶資料",-1),W={class:"table"},Y={key:0},Z=Object(c["createElementVNode"])("label",{for:"name",class:"form-label"},"姓名",-1),ee=Object(c["createElementVNode"])("label",{for:"email",class:"form-label"},"Email",-1),te=Object(c["createElementVNode"])("label",{for:"tel",class:"form-label"},"電話",-1),ae=Object(c["createElementVNode"])("label",{for:"address",class:"form-label"},"地址",-1),ce={class:"col-md-8"},ne=Object(c["createElementVNode"])("h3",null,"訂單細節",-1),le={class:"table"},re=Object(c["createElementVNode"])("th",{style:{width:"100px"}},"訂單編號",-1),oe=Object(c["createElementVNode"])("th",null,"下單時間",-1),de=Object(c["createElementVNode"])("th",null,"付款時間",-1),ie={key:0},se={key:1},be=Object(c["createElementVNode"])("th",null,"付款狀態",-1),me={key:0,class:"text-success"},pe={key:1,class:"text-muted"},ue=Object(c["createElementVNode"])("th",null,"總金額",-1),Oe=Object(c["createElementVNode"])("h3",null,"選購商品",-1),je={class:"table"},he=Object(c["createElementVNode"])("thead",null,[Object(c["createElementVNode"])("tr")],-1),Ee=Object(c["createElementVNode"])("td",{class:"text-end"},null,-1),Ve={class:"d-flex justify-content-end"},Ne={class:"form-check"},fe={class:"form-check-label",for:"flexCheckDefault"},ge={key:0},ke={key:1},ye={class:"modal-footer"},ve=Object(c["createElementVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Be(e,t,a,n,l,r){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",G,[Object(c["createElementVNode"])("div",J,[Object(c["createElementVNode"])("div",I,[X,Object(c["createElementVNode"])("div",H,[Object(c["createElementVNode"])("div",K,[Object(c["createElementVNode"])("div",Q,[R,Object(c["createElementVNode"])("table",W,[l.tempOrder.user?(Object(c["openBlock"])(),Object(c["createElementBlock"])("tbody",Y,[Object(c["createElementVNode"])("tr",null,[Object(c["createElementVNode"])("td",null,[Z,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{id:"name",type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=function(e){return l.tempOrder.user.name=e})},null,512),[[c["vModelText"],l.tempOrder.user.name]])])]),Object(c["createElementVNode"])("tr",null,[Object(c["createElementVNode"])("td",null,[ee,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{id:"email",type:"email",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=function(e){return l.tempOrder.user.email=e})},null,512),[[c["vModelText"],l.tempOrder.user.email]])])]),Object(c["createElementVNode"])("tr",null,[Object(c["createElementVNode"])("td",null,[te,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{id:"tel",type:"tel",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=function(e){return l.tempOrder.user.tel=e})},null,512),[[c["vModelText"],l.tempOrder.user.tel]])])]),Object(c["createElementVNode"])("tr",null,[Object(c["createElementVNode"])("td",null,[ae,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{id:"address",type:"text",class:"form-control","onUpdate:modelValue":t[3]||(t[3]=function(e){return l.tempOrder.user.address=e})},null,512),[[c["vModelText"],l.tempOrder.user.address]])])])])):Object(c["createCommentVNode"])("",!0)])]),Object(c["createElementVNode"])("div",ce,[ne,Object(c["createElementVNode"])("table",le,[Object(c["createElementVNode"])("tbody",null,[Object(c["createElementVNode"])("tr",null,[re,Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(l.tempOrder.id),1)]),Object(c["createElementVNode"])("tr",null,[oe,Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(r.getDate(l.tempOrder.create_at)),1)]),Object(c["createElementVNode"])("tr",null,[de,Object(c["createElementVNode"])("td",null,[l.tempOrder.is_paid?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",ie,Object(c["toDisplayString"])(r.paidOrder(l.tempOrder)),1)):(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",se,"尚未付款"))])]),Object(c["createElementVNode"])("tr",null,[be,Object(c["createElementVNode"])("td",null,[l.tempOrder.is_paid?(Object(c["openBlock"])(),Object(c["createElementBlock"])("strong",me,"已付款")):(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",pe,"尚未付款"))])]),Object(c["createElementVNode"])("tr",null,[ue,Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(l.tempOrder.total),1)])])]),Oe,Object(c["createElementVNode"])("table",je,[he,Object(c["createElementVNode"])("tbody",null,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(l.tempOrder.products,(function(e){return Object(c["openBlock"])(),Object(c["createElementBlock"])("tr",{key:e.id},[Object(c["createElementVNode"])("th",null,Object(c["toDisplayString"])(e.product.title),1),Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(e.qty)+" / "+Object(c["toDisplayString"])(e.product.unit),1),Ee])})),128))])]),Object(c["createElementVNode"])("div",Ve,[Object(c["createElementVNode"])("div",Ne,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":t[4]||(t[4]=function(e){return l.tempOrder.is_paid=e}),onClick:t[5]||(t[5]=function(e){return r.paidOrder(l.tempOrder)})},null,512),[[c["vModelCheckbox"],l.tempOrder.is_paid]]),Object(c["createElementVNode"])("label",fe,[l.tempOrder.is_paid?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",ge,"已付款")):(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",ke,"未付款"))])])])])])]),Object(c["createElementVNode"])("div",ye,[ve,Object(c["createElementVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[6]||(t[6]=function(){return r.update&&r.update.apply(r,arguments)})}," 修改付款狀態 ")])])])],512)}var De={props:{order:{type:Object,default:function(){return{}}}},data:function(){return{status:{},modal:"",tempOrder:this.order,isPaid:!1,paid:{}}},emits:["update-paid"],mounted:function(){this.modal=new F.a(this.$refs.orderModal,{keyboard:!1,backdrop:"static"})},watch:{order:function(){this.tempOrder=this.order}},methods:{paidOrder:function(e){if(this.paid={is_paid:e.is_paid},!0===this.paid.is_paid)return this.paid.paid_day=Date.now(),this.paid.paid_day=new Date(this.paid.paid_day),this.paid.paid_day.toLocaleDateString();this.paid.paid_day=""},update:function(){this.$emit("update-paid",this.tempOrder),this.modal.hide()},getDate:function(e){var t=new Date(1e3*e);return t.toLocaleDateString()},openModal:function(){this.modal.show()},hideModal:function(){this.modal.hide()}}};const xe=z()(De,[["render",Be]]);var we=xe,_e={data:function(){return{orderData:{},pagination:{},isLoading:!1,tempOrder:{}}},components:{pagination:y["a"],DelOrderModal:q,OrderModal:we},methods:{getOrder:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a="".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("popeye","/admin/orders?page=").concat(t);this.isLoading=!0,this.$http.get(a).then((function(t){e.orderData=t.data.orders,e.pagination=t.data.pagination,e.isLoading=!1})).catch((function(e){alert(e.data.message)}))},getDate:function(e){var t=new Date(1e3*e);return t.toLocaleDateString()},updateOrder:function(e){var t=this;this.isLoading=!0;var a="".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("popeye","/admin/order/").concat(e.id),c={is_paid:e.is_paid};!0===!c.is_paid?c.paid_day=Date.now():c.paid_day="",this.$http.put(a,{data:e}).then((function(e){t.getOrder(t.page),alert("訂單已更新"),t.isLoading=!1})).catch((function(e){alert(e)}))},openOrderModal:function(e){this.tempOrder=Object(k["a"])({},e),this.$refs.orderModal.openModal()},openDelModal:function(e){this.tempOrder=Object(k["a"])({},e),this.$refs.delOrder.openModal()},removeAllOrders:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("popeye","/admin/orders/all");this.$http.delete(t).then((function(t){e.getOrder(e.page),alert("訂單"+t.message),e.isLoading=!1})).catch((function(e){alert(e)}))}},mounted:function(){this.getOrder()}};const Ce=z()(_e,[["render",g]]);t["default"]=Ce},b0c0:function(e,t,a){var c=a("83ab"),n=a("5e77").EXISTS,l=a("e330"),r=a("9bf2").f,o=Function.prototype,d=l(o.toString),i=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,s=l(i.exec),b="name";c&&!n&&r(o,b,{configurable:!0,get:function(){try{return s(i,d(this))[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-b39c402e.5aa2ab9f.js.map