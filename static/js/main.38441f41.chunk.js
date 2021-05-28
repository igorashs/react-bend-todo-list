(this["webpackJsonpreact-bend-todo-list"]=this["webpackJsonpreact-bend-todo-list"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r,o=n(0),i=n.n(o),l=n(6),c=n.n(l),a=n(2),d=n(4),u=n(3),s=n(1),p=u.a.h1(r||(r=Object(a.a)(["\n  font-size: 6.25rem;\n  font-weight: 400;\n  text-align: center;\n  color: #c927275e;\n"]))),f=function(){return Object(s.jsx)(p,{children:"Todos"})},b=n(7),h=Object(b.b)({name:"todo",initialState:{todos:[],total:0},reducers:{addTodo:function(e,t){var n=t.payload.todo;e.todos.push(n),e.total+=1},removeTodo:function(e,t){var n=t.payload.id;e.todos=e.todos.filter((function(e){return e.id!==n})),e.total-=1},toggleTodo:function(e,t){var n=t.payload.id,r=e.todos.find((function(e){return e.id===n}));r&&(r.isCompleted=!r.isCompleted)}}}),j=h.actions,x=j.addTodo,O=j.removeTodo,m=j.toggleTodo,g=function(e){return e.todos},v=function(e){return e.total},w=h.reducer;function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var L=o.createElement("path",{d:"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"});function C(e,t){var n=e.title,r=e.titleId,i=k(e,["title","titleId"]);return o.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:t,"aria-labelledby":r},i),n?o.createElement("title",{id:r},n):null,L)}var E=o.forwardRef(C);n.p;function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var P=o.createElement("path",{d:"M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"});function A(e,t){var n=e.title,r=e.titleId,i=I(e,["title","titleId"]);return o.createElement("svg",S({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:t,"aria-labelledby":r},i),n?o.createElement("title",{id:r},n):null,P)}var T=o.forwardRef(A);n.p;function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var R=o.createElement("path",{d:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"});function z(e,t){var n=e.title,r=e.titleId,i=B(e,["title","titleId"]);return o.createElement("svg",M({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",ref:t,"aria-labelledby":r},i),n?o.createElement("title",{id:r},n):null,R)}var X,Z,D,J,F,W,q,G,H,K=o.forwardRef(z),N=(n.p,u.a.input(X||(X=Object(a.a)(["\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n"])))),Q=u.a.label(Z||(Z=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #00000013;\n\n  ","\n"])),(function(e){return e.checked&&"color: #5c5cb3"})),U=function(e){var t=e.checked,n=e.onChange;return Object(s.jsxs)(Q,{checked:t,children:[t?Object(s.jsx)(E,{width:"2.5rem",height:"2.5rem"}):Object(s.jsx)(T,{width:"2.5rem",height:"2.5rem"}),Object(s.jsx)(N,{type:"checkbox",onChange:n})]})},V=u.a.button(D||(D=Object(a.a)(["\n  padding: 0;\n  border: 0;\n  background: 0;\n  color: #c927275e;\n  width: 3rem;\n  height: 3rem;\n\n  :hover {\n    color: #c9272794;\n  }\n"]))),Y=function(e){var t=e.onClick;return Object(s.jsx)(V,{onClick:t,children:Object(s.jsx)(K,{width:"1.5rem",height:"1.5rem"})})},$=u.a.div(J||(J=Object(a.a)(["\n  display: grid;\n  grid-template-columns: 3rem 2fr 4rem;\n  grid-template-rows: 3.75rem;\n  align-items: center;\n  gap: 1rem;\n\n  background-color: #fff;\n  box-shadow: 0px 0px 3px 0px #33333373;\n\n  button:last-child {\n    visibility: hidden;\n  }\n\n  :hover {\n    button:last-child {\n      visibility: initial;\n    }\n  }\n"]))),_=u.a.p(F||(F=Object(a.a)(["\n  font-size: 1.5rem;\n  color: #444;\n  word-break: break-all;\n\n  transition: color 300ms;\n\n  ","\n"])),(function(e){return e.completed&&"text-decoration: line-through; color: #4444446f;"})),ee=function(e){var t=e.todo,n=Object(d.b)();return Object(s.jsxs)($,{children:[Object(s.jsx)(U,{checked:t.isCompleted,onChange:function(){return n(m({id:t.id}))}}),Object(s.jsx)(_,{completed:t.isCompleted,children:t.value}),Object(s.jsx)(Y,{onClick:function(){return n(O({id:t.id}))}})]})},te=u.a.p(W||(W=Object(a.a)(["\n  color: #8d8d8d;\n  padding: 0.5rem 1rem;\n\n  background-color: #fff;\n  box-shadow: 0px 0px 3px 0px #33333373, 0px 7px 0px -3px #fff,\n    0px 7px 3px -3px #33333373, 0px 14px 0px -7px #fff,\n    0px 14px 3px -7px #33333373;\n"]))),ne=function(){var e=Object(d.c)(g),t=Object(d.c)(v);return e?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("ul",{children:e.map((function(e){return Object(s.jsx)("li",{children:Object(s.jsx)(ee,{todo:e})},e.id)}))}),!!t&&Object(s.jsxs)(te,{children:[t," ",t>1?"items":"item"," left"]})]}):null},re=Object(b.a)({reducer:w}),oe=u.a.form(q||(q=Object(a.a)(["\n  display: flex;\n"]))),ie=u.a.input(G||(G=Object(a.a)(["\n  width: 100%;\n  border: 0;\n  box-shadow: none;\n  padding: 1rem;\n  padding-left: 4rem;\n\n  ::placeholder {\n    color: #999;\n    font-style: italic;\n  }\n\n  color: #444;\n  font-size: 1.5rem;\n  box-shadow: 0px 0px 3px 0px #33333373;\n"]))),le=function(){var e=Object(d.b)(),t=Object(o.useRef)(null);return Object(s.jsx)(oe,{onSubmit:function(n){n.preventDefault(),t.current&&t.current.value&&(e(x({todo:{id:(new Date).getTime().toString(),isCompleted:!1,value:t.current.value}})),t.current.value="")},children:Object(s.jsx)(ie,{ref:t,type:"text",placeholder:"What needs do be done?"})})},ce=u.a.div(H||(H=Object(a.a)(["\n  max-width: 560px;\n  margin: 0 auto;\n"])));var ae=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(f,{}),Object(s.jsx)(d.a,{store:re,children:Object(s.jsxs)(ce,{children:[Object(s.jsx)(le,{}),Object(s.jsx)(ne,{})]})})]})};n(28);c.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(ae,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.38441f41.chunk.js.map