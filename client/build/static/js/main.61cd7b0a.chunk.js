(this["webpackJsonppinkaloo-exercise"]=this["webpackJsonppinkaloo-exercise"]||[]).push([[0],{24:function(e,a,t){},44:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var c=t(1),n=t.n(c),r=t(17),s=t.n(r),i=(t(24),t(7)),l=t.n(i),o=t(8),d=t(18),u=t(3),j=t(19),h=t.n(j),b=(t(44),t(0));function m(e){var a=e.rows,t=void 0===a?[]:a,c=e.columns,n=void 0===c?[]:c;return Object(b.jsxs)("table",{className:"datagrid-container",children:[Object(b.jsx)("thead",{className:"datagrid-header",children:Object(b.jsx)("tr",{className:"datagrid-header-row",children:n.map((function(e,a){return Object(b.jsx)("th",{className:"datagrid-header-cell",children:e.title},a)}))})}),Object(b.jsx)("tbody",{className:"datagrid-body",children:t.map((function(e){return Object(b.jsx)("tr",{className:"datagrid-body-row",children:n.map((function(a,t){return Object(b.jsx)("td",{className:"datagrid-body-cell",children:e[a.field]},t)}))},e.id)}))})]})}t(46);function p(e){var a=e.currentPage,t=void 0===a?1:a,c=e.totalPages,n=void 0===c?1:c,r=e.prevPage,s=void 0===r?function(){return null}:r,i=e.nextPage,l=void 0===i?function(){return null}:i;return Object(b.jsxs)("div",{className:"pagination",children:[Object(b.jsx)("div",{className:"pagination-prev",onClick:s,children:"Prev"}),Object(b.jsxs)("div",{className:"pagination-page",children:["Page ",t," of ",n]}),Object(b.jsx)("div",{className:"pagination-next",onClick:l,children:"Next"})]})}t(47);var x=[{title:"Name",field:"name"},{title:"City",field:"city"},{title:"State",field:"state"}];var f=function(){var e=n.a.useState({search:"",currentPage:1}),a=Object(u.a)(e,2),t=a[0],c=a[1],r=n.a.useState(""),s=Object(u.a)(r,2),i=s[0],j=s[1],f=n.a.useState(1),v=Object(u.a)(f,2),O=v[0],g=v[1],N=n.a.useState(1),P=Object(u.a)(N,2),S=P[0],y=P[1],k=n.a.useState([]),w=Object(u.a)(k,2),C=w[0],J=w[1],B=n.a.useCallback(Object(d.a)(l.a.mark((function e(){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),e.next=4,h.a.get("/api/endpoint",{params:t});case 4:a=e.sent,c=a.data.charities.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{city:e.address.city,state:e.address.state})})),J(c),y(Math.ceil(a.data.num_charities/20)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),[t]);n.a.useEffect((function(){B()}),[t,B]);var D=function(e){var a=O+e;a>=1&&a<=S&&(g(a),c({search:i,currentPage:a}))};return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("div",{className:"search-container",children:[Object(b.jsx)("div",{className:"search-wrapper",children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),g(1),c({search:i,currentPage:1})},children:[Object(b.jsx)("label",{className:"search-lable",htmlFor:"nameSearch",children:"Name Search"}),Object(b.jsx)("input",{type:"text",name:"nameSearch",id:"nameSearch",className:"search-input",value:i,onChange:function(e){e.preventDefault(),j(e.target.value)}}),Object(b.jsx)("input",{className:"search-button",type:"submit",value:"Submit"})]})}),Object(b.jsx)(p,{currentPage:O,totalPages:S,prevPage:function(){return D(-1)},nextPage:function(){return D(1)}}),Object(b.jsx)(m,{rows:C,columns:x})]})})};t(48);function v(e){var a=e.children;return Object(b.jsxs)("div",{className:"site-wrapper",children:[Object(b.jsx)("header",{className:"site-header",children:Object(b.jsx)("img",{className:"site-header-image",src:"images/Pinkaloo.jpg",alt:"Pinkaloo Logo"})}),Object(b.jsx)("main",{className:"site-content",children:a}),Object(b.jsx)("footer",{className:"site-footer",children:Object(b.jsx)("div",{children:"Philip B Flynt Jr"})})]})}s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(v,{children:Object(b.jsx)(f,{})})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.61cd7b0a.chunk.js.map