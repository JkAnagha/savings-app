(this["webpackJsonpsavings-app"]=this["webpackJsonpsavings-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var l=n(1),c=n(7),i=n.n(c),s=(n(12),n(13),n(2)),r=n(6),a=n(0),o=Object(l.createContext)(),d=function(e){var t=e.children,n=Object(l.useState)([]),c=Object(s.a)(n,2),i=c[0],d=c[1],u=Object(l.useState)("Monthly"),b=Object(s.a)(u,2),j=b[0],f=b[1],O=Object(l.useState)(!1),h=Object(s.a)(O,2),v=h[0],m=h[1];Object(l.useEffect)((function(){d(JSON.parse(localStorage.getItem("updated-bills"))||[])}),[d]);var x=function(e){return e.sort((function(e,t){return e.title.toUpperCase()<t.title.toUpperCase()?-1:0}))};return Object(a.jsx)(o.Provider,{value:{bills:i,updateBills:function(e){var t=x([].concat(Object(r.a)(i),[e]));localStorage.setItem("updated-bills",JSON.stringify(t)),d(t)},editBill:function(e){var t=i.filter((function(t){return t.title!==e.title})),n=x([].concat(Object(r.a)(t),[e]));localStorage.setItem("updated-bills",JSON.stringify(n)),d(n)},selectedCostInterval:j,setSelectedCostInterval:f,setEditModeEnabled:m,editModeEnabled:v,deleteBill:function(e){var t=i.filter((function(t){return t.title!==e.title}));localStorage.setItem("updated-bills",JSON.stringify(t)),d(t)}},children:t})},u=(n(15),function(){var e=Object(l.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(l.useState)(""),r=Object(s.a)(i,2),d=r[0],u=r[1],b=Object(l.useContext)(o).updateBills;return Object(a.jsxs)("div",{className:"add-bill-container",children:[Object(a.jsx)("input",{className:"add-bill-form-control form-control",placeholder:"Enter Bill Title",type:"text",value:n,onChange:function(e){return c(e.target.value)}}),Object(a.jsx)("input",{className:"add-bill-form-control form-control",placeholder:"Enter Bill Cost/Month",type:"number",value:d,onChange:function(e){return u(e.target.value)}}),Object(a.jsx)("button",{className:"add-bill-form-control btn btn-primary",onClick:function(){(function(){var e=d&&Number.parseFloat(d);return n&&n.split("").find((function(e){return" "!==e}))&&e})()&&(b({title:n,monthlyCost:d}),u(""),c(""))},children:"Add Bill"})]})}),b=(n(16),function(){var e=Object(l.useContext)(o),t=e.bills,n=e.editBill,c=e.setEditModeEnabled;return Object(a.jsxs)("div",{className:"bills-list-container",children:[Object(a.jsx)("h6",{className:"edit-mode-btn",onClick:function(){return c(!0)},children:"Edit"}),t.map((function(e,t){return Object(a.jsxs)("div",{className:"bills-list-row",children:[Object(a.jsx)("input",{type:"checkbox",className:"form-check-input",defaultChecked:e.enabled,onChange:function(){return n({title:e.title,monthlyCost:e.monthlyCost,enabled:!e.enabled})}}),Object(a.jsxs)("div",{className:"bills-list-row-content",children:[e.title," - Rs.",e.monthlyCost]})]},t)}))]})}),j=(n(17),function(){var e=Object(l.useContext)(o),t=e.bills,n=e.selectedCostInterval,c=function(e){var t=Number.parseFloat(e);switch(n){case"Monthly":return t;case"Yearly":return 12*t;case"Weekly":return 12*t/52;case"Daily":return 12*t/365;default:return 0}};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"bill-total-container",children:[n," bill cost :",Object(a.jsx)("span",{className:"total-cost",children:" Rs "+t.reduce((function(e,t){return t.enabled?c(t.monthlyCost)+e:e}),0).toFixed(2)})]}),Object(a.jsxs)("div",{className:"total-saved-container",children:[n," saved :",Object(a.jsx)("span",{className:"total-saved",children:" Rs "+t.reduce((function(e,t){return t.enabled?e:c(t.monthlyCost)+e}),0).toFixed(2)})]})]})}),f=(n(18),function(){var e=Object(l.useContext)(o),t=e.selectedCostInterval,n=e.setSelectedCostInterval;return Object(a.jsxs)("div",{className:"interval-option-container",children:[Object(a.jsx)("div",{className:"Daily"===t?"selected-interval":"interval",onClick:function(e){return n(e.target.innerText)},children:"Daily"}),Object(a.jsx)("div",{className:"Weekly"===t?"selected-interval":"interval",onClick:function(e){return n(e.target.innerText)},children:"Weekly"}),Object(a.jsx)("div",{className:"Monthly"===t?"selected-interval":"interval",onClick:function(e){return n(e.target.innerText)},children:"Monthly"}),Object(a.jsx)("div",{className:"Yearly"===t?"selected-interval":"interval",onClick:function(e){return n(e.target.innerText)},children:"Yearly"})]})}),O=(n(19),function(){var e=Object(l.useContext)(o),t=e.bills,n=e.setEditModeEnabled,c=e.editBill,i=e.deleteBill;return Object(a.jsxs)("div",{className:"edit-bill-container",children:[Object(a.jsx)("h6",{className:"edit-mode-btn",onClick:function(){return n(!1)},children:"Done"}),t.map((function(e,t){return Object(a.jsxs)("div",{className:"edit-bill-row",children:[Object(a.jsxs)("div",{className:"edit-bill-row-content",children:[Object(a.jsx)("div",{className:"edit-bill-title",children:e.title}),Object(a.jsx)("input",{className:"edit-bill-cost-input",type:"number",value:e.monthlyCost,onChange:function(t){return c({title:e.title,enabled:e.enabled,monthlyCost:t.target.value})}}),Object(a.jsx)("h6",{onClick:function(){return i(e)},className:"delete-btn",children:"DELETE"})]}),Object(a.jsx)("hr",{})]},t)}))]})}),h=function(){var e=Object(l.useContext)(o).editModeEnabled;return Object(a.jsx)("div",{className:"bills-container",children:e?Object(a.jsx)(O,{}):Object(a.jsxs)("span",{children:[Object(a.jsx)(f,{}),Object(a.jsx)(u,{}),Object(a.jsx)(j,{}),Object(a.jsx)(b,{})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,l=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),l(e),c(e),i(e),s(e)}))};i.a.render(Object(a.jsx)(d,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),v()}],[[20,1,2]]]);
//# sourceMappingURL=main.d4f90d0a.chunk.js.map