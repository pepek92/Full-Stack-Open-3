(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{42:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t.n(c),o=t(18),i=t.n(o),r=(t(9),t(8)),u=t(3),s=t(4),l=t.n(s),d="/api/persons",j=function(){return l.a.get(d)},f=function(e){return l.a.post(d,e)},b=function(e,n){return l.a.put("".concat(d,"/").concat(e),n)},m=function(e,n){return l.a.delete("".concat(d,"/").concat(e),n)},h=t(0),O=function(e){return Object(h.jsx)("div",{style:{fontFamily:"Verdana",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(h.jsxs)("form",{onSubmit:e.onSubmit,children:[Object(h.jsxs)("div",{children:["name: ",Object(h.jsx)("input",{value:e.newName,onChange:e.onNameChange})]}),Object(h.jsxs)("div",{children:["number: ",Object(h.jsx)("input",{value:e.newNumber,onChange:e.onNumberChange})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"add"})})]})})},v=function(e){return Object(h.jsxs)("div",{style:{fontFamily:"Verdana",display:"flex",justifyContent:"center",alignItems:"center"},children:["filter shown with ",Object(h.jsx)("input",{onChange:e.onChange,value:e.value})]})},x=function(e){return Object(h.jsx)("div",{style:{fontFamily:"Verdana",justifyContent:"center",alignItems:"center"},children:e.persons.map((function(n,t){return n.name.toLowerCase().includes(e.filter.toLowerCase())?Object(h.jsxs)("li",{children:[n.name," ",n.number,Object(h.jsx)("button",{onClick:function(){return t=n,void e.deleteName(t);var t},children:"delete"})]},t):console.log("Numeroa ei l\xf6ydy")}))})},p=function(e){var n=e.message;return null===n?null:Object(h.jsx)("div",{className:"notification",children:n})},g=function(e){var n=e.message;return null===n?null:Object(h.jsx)("div",{className:"error",children:n})},y=function(){var e=Object(c.useState)([]),n=Object(u.a)(e,2),t=n[0],a=n[1],o=Object(c.useState)(""),i=Object(u.a)(o,2),s=i[0],l=i[1],d=Object(c.useState)(""),y=Object(u.a)(d,2),w=y[0],C=y[1],N=Object(c.useState)(""),S=Object(u.a)(N,2),k=S[0],I=S[1],T=Object(c.useState)(null),D=Object(u.a)(T,2),F=D[0],V=D[1],A=Object(c.useState)(null),E=Object(u.a)(A,2),J=E[0],L=E[1];Object(c.useEffect)((function(){j().then((function(e){a(e.data)}))}),[]);return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(p,{message:F}),Object(h.jsx)(g,{message:J}),Object(h.jsx)(v,{onChange:function(e){I(e.target.value)},value:k}),Object(h.jsx)("h2",{children:"Add a new"}),Object(h.jsx)(O,{onSubmit:function(e){e.preventDefault();var n={name:s,number:w};if(t.some((function(e){return e.name===s}))){if(window.confirm("".concat(s," is already added to phonebook, replace the old number with a new one?"))){var c=t.find((function(e){return e.name===s})),o=Object(r.a)(Object(r.a)({},c),{},{number:w});b(c.id,o).then((function(e){console.log(e),a(t.map((function(n){return n.id!==o.id?n:e.data}))),V("".concat(s," number changed")),setTimeout((function(){V(null)}),5e3)})).catch((function(e){L("Information of ".concat(n.name," has already been removed from the server")),setTimeout((function(){L(null)}),5e3)}))}}else f(n).then((function(e){l(""),C(""),a(t.concat(e.data)),V("Added ".concat(s)),setTimeout((function(){V(null)}),5e3)})).catch((function(e){L("".concat(e.response.data.error)),setTimeout((function(){L(null)}),5e3)}))},onNameChange:function(e){l(e.target.value)},onNumberChange:function(e){C(e.target.value)},name:s,number:w}),Object(h.jsx)("h2",{children:"Numbers"}),Object(h.jsx)(x,{persons:t,filter:k,deleteName:function(e){if(window.confirm("Delete ".concat(e.name," ?"))){var n=t.find((function(n){return n.id===e.id}));m(e.id,n).then((function(c){a(t.filter((function(n){return n.id!==e.id}))),V("Deleted ".concat(n.name)),setTimeout((function(){V(null)}),5e3)})).catch((function(e){alert("".concat(n.name," was already removed from the server"))}))}}})]})};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))},9:function(e,n,t){}},[[42,1,2]]]);
//# sourceMappingURL=main.37e15397.chunk.js.map