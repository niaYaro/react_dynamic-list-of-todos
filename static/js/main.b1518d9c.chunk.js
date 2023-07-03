(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var s=c(6),a=c.n(s),n=c(4),o=c(2),r=c(3),l=c.n(r),d=c(1);c(13),c(14),c(15);function i(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var j,u=c(7),b=c.n(u),h=c(0),O=function(e){var t=e.todo,c=e.selectedTodo,s=e.isTodoInfoRequested,a=e.onTodoInfoRequest,n=e.onUserIdChange,o=e.onSelectedTodoChange,r=t.id,l=t.title,d=t.completed,i=t.userId;return Object(h.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(h.jsx)("td",{className:"is-vcentered",children:r}),Object(h.jsx)("td",{className:"is-vcentered",children:d&&Object(h.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(h.jsx)("i",{className:"fas fa-check"})})}),Object(h.jsx)("td",{className:"is-vcentered is-expanded",children:Object(h.jsx)("p",{className:b()({"has-text-danger":!d,"has-text-success":d}),children:l})}),Object(h.jsx)("td",{className:"has-text-right is-vcentered",children:Object(h.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){a(!0),n(i),o(t)},children:Object(h.jsx)("span",{className:"icon",children:s&&(null===c||void 0===c?void 0:c.id)===r?Object(h.jsx)("i",{className:"far fa-eye-slash"}):Object(h.jsx)("i",{className:"far fa-eye"})})})})]},r)},m=function(e){var t=e.todos,c=e.selectedTodo,s=e.isTodoInfoRequested,a=e.onTodoInfoRequest,n=e.onUserIdChange,o=e.onSelectedTodoChange;return Object(h.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[t.length>0&&Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:"fas fa-check"})})}),Object(h.jsx)("th",{children:"Title"}),Object(h.jsx)("th",{children:" "})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){return Object(h.jsx)(O,{todo:e,selectedTodo:c,isTodoInfoRequested:s,onTodoInfoRequest:a,onUserIdChange:n,onSelectedTodoChange:o})}))})]})};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(j||(j={}));var x=function(e){var t=e.onFilterChange,c=e.currentFilter,s=e.onQueryChange,a=e.currentQuery;return Object(h.jsxs)("form",{className:"field has-addons",children:[Object(h.jsx)("p",{className:"control",children:Object(h.jsx)("span",{className:"select",children:Object(h.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(e){t(e.target.value)},children:[Object(h.jsx)("option",{value:j.ALL,children:"All"}),Object(h.jsx)("option",{value:j.ACTIVE,children:"Active"}),Object(h.jsx)("option",{value:j.COMPLETED,children:"Completed"})]})})}),Object(h.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(h.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:a,onChange:function(e){s(e.target.value)}}),Object(h.jsx)("span",{className:"icon is-left",children:Object(h.jsx)("i",{className:"fas fa-magnifying-glass"})}),a&&Object(h.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(h.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){s("")},"aria-label":"Clear search"})})]})]})},f=(c(17),function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(h.jsx)("div",{className:"Loader__content"})})}),p=function(e){var t=e.currntUserId,c=e.selectedTodo,s=e.onTodoInfoRequestedChange,a=Object(d.useState)(null),r=Object(o.a)(a,2),j=r[0],u=r[1],b=Object(d.useState)(!1),O=Object(o.a)(b,2),m=O[0],x=O[1],p=Object(d.useState)(!1),v=Object(o.a)(p,2),N=v[0],g=v[1];Object(d.useEffect)((function(){var e=function(){var e=Object(n.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i("/users/".concat(t));case 3:c=e.sent,u(c),x(!0),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),x(!0),g(!0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();t&&e(t)}),[t]);var y=m&&c&&j;return Object(h.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(h.jsx)("div",{className:"modal-background"}),N&&Object(h.jsx)("div",{className:"modal-card",children:Object(h.jsx)("div",{className:"message p-2 my-4 is-danger",children:Object(h.jsx)("p",{className:"message-body",children:"Error loading data"})})}),y?Object(h.jsxs)("div",{className:"modal-card",children:[Object(h.jsxs)("header",{className:"modal-card-head",children:[Object(h.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(c.id)}),Object(h.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){s(!1)},"aria-label":"Close modal"})]}),Object(h.jsxs)("div",{className:"modal-card-body",children:[Object(h.jsx)("p",{className:"block","data-cy":"modal-title",children:c.title}),Object(h.jsxs)("p",{className:"block","data-cy":"modal-user",children:[c.completed?Object(h.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(h.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(h.jsx)("a",{href:"mailto:".concat(j.email),children:j.name})]})]})]}):Object(h.jsx)(f,{})]})},v=function(){var e=Object(d.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(d.useState)(!1),r=Object(o.a)(a,2),u=r[0],b=r[1],O=Object(d.useState)(!1),v=Object(o.a)(O,2),N=v[0],g=v[1],y=Object(d.useState)(j.ALL),C=Object(o.a)(y,2),T=C[0],I=C[1],S=Object(d.useState)(""),k=Object(o.a)(S,2),E=k[0],L=k[1],w=Object(d.useState)(null),q=Object(o.a)(w,2),R=q[0],A=q[1],U=Object(d.useState)(null),F=Object(o.a)(U,2),P=F[0],_=F[1],D=Object(d.useState)(!1),M=Object(o.a)(D,2),Q=M[0],B=M[1];Object(d.useEffect)((function(){var e=function(){var e=Object(n.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i("/todos");case 3:t=e.sent,b(!0),s(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),b(!0),B(!0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var V=Object(d.useMemo)((function(){return c.filter((function(e){var t=e.title.toLowerCase().includes(E.toLowerCase());switch(T){case j.ALL:return t;case j.ACTIVE:return t&&!e.completed;case j.COMPLETED:return t&&e.completed;default:return 0}}))}),[c,T,E]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)("h1",{className:"title",children:"Todos:"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsx)(x,{onFilterChange:I,currentFilter:T,onQueryChange:L,currentQuery:E})}),!u&&Object(h.jsx)(f,{}),Object(h.jsx)("div",{className:"block",children:Q?Object(h.jsx)("div",{className:"message p-2 my-4 is-danger",children:Object(h.jsx)("p",{className:"message-body",children:"Error loading goods"})}):Object(h.jsx)(m,{todos:V,selectedTodo:P,isTodoInfoRequested:N,onTodoInfoRequest:g,onUserIdChange:A,onSelectedTodoChange:_})})]})})}),N&&Object(h.jsx)(p,{onTodoInfoRequestedChange:g,currntUserId:R,selectedTodo:P})]})};a.a.render(Object(h.jsx)(v,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.b1518d9c.chunk.js.map