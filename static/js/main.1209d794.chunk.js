(this["webpackJsonpname-application"]=this["webpackJsonpname-application"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),r=n(4),o=n.n(r),i=(n(10),n(2)),l=(n(11),function(e){var t=e.names.sort((function(e,t){return t.amount-e.amount})).map((function(e,t){return Object(a.jsxs)("div",{className:"result",children:[Object(a.jsx)("div",{className:"result__name",children:e.name}),Object(a.jsx)("div",{className:"result__amount",children:e.amount})]},t)}));return Object(a.jsx)("div",{className:"results orderd-by-amount",children:t})}),u=(n(12),function(e){var t=e.names.sort((function(e,t){return e.name.localeCompare(t.name)})).map((function(e,t){return Object(a.jsx)("div",{className:"result",children:e.name},t)}));return Object(a.jsx)("div",{className:"results orderd-alphabetically",children:t})}),j=(n(13),function(e){var t=Object(c.useState)(!1),n=Object(i.a)(t,2),s=n[0],r=n[1],o=e.component,l=e.btnText,u=e.toolTipText;return Object(a.jsxs)("div",{className:"component-container",children:[Object(a.jsx)("button",{className:"btn","tool-tip":u,onClick:function(){return r(!s)},children:l}),s?o:null]})}),m=(n(14),function(e){var t=e.names.length,n=0;return e.names.forEach((function(e){n+=e.amount})),Object(a.jsxs)("div",{className:"results total",children:[Object(a.jsx)("div",{className:"result",children:Object(a.jsxs)("div",{className:"result__text",children:["Different names at Solita:",Object(a.jsx)("span",{className:"result__amount",children:t})]})}),Object(a.jsx)("div",{className:"result",children:Object(a.jsxs)("div",{className:"result__text",children:["Amount of people at Solita:",Object(a.jsx)("span",{className:"result__amount",children:n})]})})]})});n(15);function d(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),s=n[0],r=n[1],o=Object(c.useState)(null),l=Object(i.a)(o,2),u=l[0],j=l[1],m=e.names;return Object(a.jsxs)("div",{className:"search-container",children:[Object(a.jsx)("input",{className:"searchbar",onKeyDown:function(e){"Enter"===e.key&&j(function(e){if(0===e.length)return null;var t=0;return m.forEach((function(n){n.name===e&&(t=n.amount)})),t>0?(e=e.charAt(0).toUpperCase()+e.slice(1),Object(a.jsxs)("div",{className:"result__text",children:["There are ",Object(a.jsx)("em",{children:t})," people named ",Object(a.jsx)("em",{children:e})," working at Solita!"]})):Object(a.jsx)("div",{className:"result__text",children:"Name not found"})}(e.target.value.toLowerCase()))},onChange:function(e){r(e.target.value)},type:"text",placeholder:"Search for a name",value:s}),Object(a.jsx)("div",{className:"result name-amount",children:u})]})}n(16);function b(){return Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("h1",{className:"header__title",children:"Solita Name Application"}),Object(a.jsx)("h2",{className:"header__text",children:"Start exploring the top names at Solita now!"})]})}n(17);function h(){return Object(a.jsxs)("div",{className:"footer",children:[Object(a.jsx)("span",{className:"footer__text",children:"\xa9 Vili Tulonen"}),Object(a.jsx)("a",{href:"https://github.com/vtulonen/name-application",className:"footer__link",children:"View Project on Github"})]})}var x=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){var e=function e(t){for(var n in t)"string"===typeof t[n]&&(t[n]=t[n].toLowerCase()),"object"===typeof t[n]&&e(t[n]);return t};fetch("names.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(t){return s(e(t.names))}))}),[]),Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)(b,{}),Object(a.jsxs)("main",{className:"components",children:[Object(a.jsx)(d,{names:n}),Object(a.jsx)(j,{btnText:"Totals",toolTipText:"Total names at Solita",component:Object(a.jsx)(m,{names:n})}),Object(a.jsx)(j,{btnText:"List all",toolTipText:"Names ordered by amount",component:Object(a.jsx)(l,{names:n})}),Object(a.jsx)(j,{btnText:"List names",toolTipText:"Ordered alphabetically",component:Object(a.jsx)(u,{names:n})})]}),Object(a.jsx)(h,{})]})};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.1209d794.chunk.js.map