(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(14),o=t.n(c),u=(t(20),t(4)),i=t(2),l=function(e){var n=e.keyword,t=e.handleKeywordChange;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},s=function(e){var n=e.newName,t=e.handleNameChange,a=e.newNumber,c=e.handleNumberChange,o=e.addPerson;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:o},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:t})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:a,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},m=function(e){var n=e.persons,t=e.deletePerson;return r.a.createElement("div",null,n.map((function(e){return r.a.createElement("div",{key:e.name},e.name," ",e.number," ",r.a.createElement("button",{onClick:function(){return t(e)}},"delete"))})))},d=function(e){var n=e.notification;return n&&n.message?r.a.createElement("div",{className:"message message-".concat(n.type)},n.message):null},f=t(3),h=t.n(f),p="https://polar-spire-33098.herokuapp.com/api/persons",b=function(){return h.a.get(p).then((function(e){return e.data}))},v=function(e){return h.a.post(p,e).then((function(e){return e.data}))},g=function(e){return h.a.put("".concat(p,"/").concat(e.id),e).then((function(e){return e.data}))},E=function(e){return h.a.delete("".concat(p,"/").concat(e))},w=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),f=Object(i.a)(o,2),h=f[0],p=f[1],w=Object(a.useState)(""),y=Object(i.a)(w,2),C=y[0],O=y[1],j=Object(a.useState)(""),k=Object(i.a)(j,2),N=k[0],P=k[1],S=Object(a.useState)({message:"",type:""}),L=Object(i.a)(S,2),D=L[0],x=L[1],J=function(e){console.log(e.message),x(e),setTimeout((function(){x({message:"",type:""})}),5e3)},K=N?t.filter((function(e){return e.name.toLowerCase().indexOf(N.toLowerCase())>-1})):t;return Object(a.useEffect)((function(){b().then((function(e){c(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(d,{notification:D}),r.a.createElement(l,{keyword:N,handleKeywordChange:function(e){P(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(s,{newName:h,handleNameChange:function(e){p(e.target.value)},newNumber:C,handleNumberChange:function(e){O(e.target.value)},addPerson:function(e){e.preventDefault();var n=t.find((function(e){return e.name.toLowerCase()===h.toLocaleLowerCase()}));if(n){if(window.confirm("".concat(h," is already added to phonebook, replace the old number with a new one?"))){var a=Object(u.a)(Object(u.a)({},n),{},{number:C});g(a).then((function(e){c(t.map((function(n){return n.id===e.id?e:n}))),p(""),O("");var n={message:"Updated '".concat(a.name,"'"),type:"success"};J(n)})).catch((function(e){var n={message:"Person '".concat(a.name,"' has already been removed from server"),type:"error"};J(n)}))}}else{var r={name:h,number:C};v(r).then((function(e){c(t.concat(e)),p(""),O("");var n={message:"Added '".concat(r.name,"'"),type:"success"};J(n)})).catch((function(e){var n={message:"Person '".concat(r.name,"' cannot be created"),type:"error"};J(n)}))}}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(m,{persons:K,deletePerson:function(e){window.confirm("Delete ".concat(e.id,"?"))&&E(e.id).then((function(){c(t.filter((function(n){return n.id!==e.id})));var n={message:"Deleted '".concat(e.name,"'"),type:"success"};J(n)})).catch((function(n){var t={message:"Person '".concat(e.name,"' has already been removed from server"),type:"error"};J(t)}))}}))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e9dccc59.chunk.js.map