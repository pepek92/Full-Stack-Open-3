(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{42:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t.n(c),o=t(18),u=t.n(o),i=(t(9),t(8)),r=t(3),s=t(4),l=t.n(s),d="/api/persons",j=function(){return l.a.get(d)},b=function(e){return l.a.post(d,e)},f=function(e,n){return l.a.put("".concat(d,"/").concat(e),n)},m=function(e,n){return l.a.delete("".concat(d,"/").concat(e),n)},h=t(0),O=function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:e.onSubmit,children:[Object(h.jsxs)("div",{children:["name: ",Object(h.jsx)("input",{value:e.newName,onChange:e.onNameChange})]}),Object(h.jsxs)("div",{children:["number: ",Object(h.jsx)("input",{value:e.newNumber,onChange:e.onNumberChange})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"add"})})]})})},v=function(e){return Object(h.jsxs)("div",{children:["filter shown with ",Object(h.jsx)("input",{onChange:e.onChange,value:e.value})]})},x=function(e){return Object(h.jsx)("div",{children:e.persons.map((function(n,t){return n.name.toLowerCase().includes(e.filter.toLowerCase())?Object(h.jsxs)("li",{children:[n.name," ",n.number,Object(h.jsx)("button",{onClick:function(){return t=n,void e.deleteName(t);var t},children:"delete"})]},t):console.log("Numeroa ei l\xf6ydy")}))})},p=function(e){var n=e.message;return null===n?null:Object(h.jsx)("div",{className:"notification",children:n})},g=function(e){var n=e.message;return null===n?null:Object(h.jsx)("div",{className:"error",children:n})},w=function(){var e=Object(c.useState)([]),n=Object(r.a)(e,2),t=n[0],a=n[1],o=Object(c.useState)(""),u=Object(r.a)(o,2),s=u[0],l=u[1],d=Object(c.useState)(""),w=Object(r.a)(d,2),C=w[0],N=w[1],S=Object(c.useState)(""),y=Object(r.a)(S,2),k=y[0],T=y[1],D=Object(c.useState)(null),A=Object(r.a)(D,2),E=A[0],I=A[1],J=Object(c.useState)(null),L=Object(r.a)(J,2),B=L[0],M=L[1];Object(c.useEffect)((function(){j().then((function(e){a(e.data)}))}),[]);return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(p,{message:E}),Object(h.jsx)(g,{message:B}),Object(h.jsx)(v,{onChange:function(e){T(e.target.value)},value:k}),Object(h.jsx)("h2",{children:"Add a new"}),Object(h.jsx)(O,{onSubmit:function(e){e.preventDefault();var n={name:s,number:C};if(t.some((function(e){return e.name===s}))){if(window.confirm("".concat(s," is already added to phonebook, replace the old number with a new one?"))){var c=t.find((function(e){return e.name===s})),o=Object(i.a)(Object(i.a)({},c),{},{number:C});f(c.id,o).then((function(e){console.log(e),a(t.map((function(n){return n.id!==o.id?n:e.data}))),I("".concat(s," number changed")),setTimeout((function(){I(null)}),5e3)})).catch((function(e){M("Information of ".concat(n.name," has already been removed from the server")),setTimeout((function(){M(null)}),5e3)}))}}else b(n).then((function(e){l(""),N(""),a(t.concat(e.data)),I("Added ".concat(s)),setTimeout((function(){I(null)}),5e3)})).catch((function(e){M("".concat(e.response.data.error)),setTimeout((function(){M(null)}),5e3)}))},onNameChange:function(e){l(e.target.value)},onNumberChange:function(e){N(e.target.value)},name:s,number:C}),Object(h.jsx)("h2",{children:"Numbers"}),Object(h.jsx)(x,{persons:t,filter:k,deleteName:function(e){if(window.confirm("Delete ".concat(e.name," ?"))){var n=t.find((function(n){return n.id===e.id}));m(e.id,n).then((function(c){a(t.filter((function(n){return n.id!==e.id}))),I("Deleted ".concat(n.name)),setTimeout((function(){I(null)}),5e3)})).catch((function(e){alert("".concat(n.name," was already removed from the server"))}))}}})]})};u.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root"))},9:function(e,n,t){}},[[42,1,2]]]);
//# sourceMappingURL=main.b5358094.chunk.js.map