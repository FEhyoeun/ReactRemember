(this.webpackJsonpremember=this.webpackJsonpremember||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var i=n(2),c=n.n(i),r=n(8),o=n.n(r),s=(n(15),n(3)),a=n(1);var u=function(e){var t=Object(i.useState)(e.edit?e.edit.value:""),n=Object(s.a)(t,2),c=n[0],r=n[1],o=Object(i.useRef)(null);Object(i.useEffect)((function(){o.current.focus()}));var u=function(e){r(e.target.value)};return Object(a.jsx)("form",{className:"remember-form",onSubmit:function(t){t.preventDefault(),e.onSubmit({id:Math.floor(1e4*Math.random()),text:c}),r("")},children:e.edit?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{type:"text",placeholder:"Update your something",value:c,name:"text",className:"remember-input",onChange:u,ref:o}),Object(a.jsx)("button",{className:"remember-button",children:"Update something!"})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{type:"text",placeholder:"Add something to remember",value:c,name:"text",className:"remember-input edit",onChange:u,ref:o}),Object(a.jsx)("button",{className:"remember-button edit",children:"Add something!"})]})})},m=n(7),d=n(9),l=n(10);var j=function(e){var t=e.somethings,n=e.completeSomething,c=e.removeSomething,r=e.updateSomething,o=Object(i.useState)({id:null,value:""}),m=Object(s.a)(o,2),j=m[0],b=m[1];return j.id?Object(a.jsx)(u,{edit:j,onSubmit:function(e){r(j.id,e),b({id:null,value:""})}}):t.map((function(e,t){return Object(a.jsxs)("div",{className:e.isComplete?"something-row complete":"something-row",children:[Object(a.jsx)("div",{onClick:function(){return n(e.id)},children:e.text},e.id),Object(a.jsxs)("div",{className:"icons",children:[Object(a.jsx)(d.a,{onClick:function(){return c(e.id)},className:"delete-icon"}),Object(a.jsx)(l.a,{onClick:function(){return b({id:e.id,value:e.text})},className:"edit-icon"})]})]},t)}))};var b=function(){var e=Object(i.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"What's your 'something'?"}),Object(a.jsx)(u,{onSubmit:function(e){if(e.text&&!/^\s*$/.test(e.text)){var t=[e].concat(Object(m.a)(n));c(t)}}}),Object(a.jsx)(j,{somethings:n,completeSomething:function(e){var t=n.map((function(t){return t.id===e&&(t.isComplete=!t.isComplete),t}));c(t)},removeSomething:function(e){var t=Object(m.a)(n).filter((function(t){return t.id!==e}));c(t)},updateSomething:function(e,t){t.text&&!/^\s*$/.test(t.text)&&c((function(n){return n.map((function(n){return n.id===e?t:n}))}))}})]})};var h=function(){return Object(a.jsx)("div",{className:"remember",children:Object(a.jsx)(b,{})})};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5ccc5e50.chunk.js.map