(this.webpackJsonpburger=this.webpackJsonpburger||[]).push([[4],{89:function(e,r,t){},90:function(e,r,t){},91:function(e,r,t){"use strict";var n=t(24);var a=t(28);function s(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=t(11),i=(t(89),t(1)),o=function(e){var r=null;switch(e.type){case"bread-bottom":r=Object(i.jsx)("div",{className:"BreadBottom"});break;case"bread-top":r=Object(i.jsxs)("div",{className:"BreadTop",children:[Object(i.jsx)("div",{className:"Seeds1"}),Object(i.jsx)("div",{className:"Seeds2"})]});break;case"meat":r=Object(i.jsx)("div",{className:"Meat"});break;case"salad":r=Object(i.jsx)("div",{className:"Salad"});break;case"cheese":r=Object(i.jsx)("div",{className:"Cheese"});break;case"bacon":r=Object(i.jsx)("div",{className:"Bacon"});break;default:r=null}return r};t(90),r.a=function(e){var r="";r="Please add your ingredients";var t=Object.keys(e.ingredients).map((function(t){return s(Array(e.ingredients[t])).map((function(e,n){return r="",Object(i.jsx)(o,{type:t},t+n)}))}));return Object(i.jsx)(c.a,{children:Object(i.jsxs)("div",{className:"burger",children:[Object(i.jsx)(o,{type:"bread-top"}),t,r,Object(i.jsx)(o,{type:"bread-bottom"})]})})}},92:function(e,r,t){},96:function(e,r,t){"use strict";t.r(r);var n=t(2),a=t(0),s=t(91),c=(t(92),t(12)),i=t(9),o=t(29),d=t(1);r.default=Object(i.b)((function(e){return{orders:e.order.orders,token:e.auth.token}}),(function(e){return{getOrders:function(r){return e(c.f(r))}}}))((function(e){Object(a.useEffect)((function(){e.token&&e.getOrders(e.token)}),[e.token]);var r=Object(d.jsx)(o.a,{});if(e.orders){var t=0;r=e.orders.map((function(e){t+=1;var r=Object(n.a)({},e.order);return console.log(e),Object(d.jsxs)("div",{className:"Card",children:[Object(d.jsx)("div",{children:r.name}),Object(d.jsxs)("div",{children:[r.street,", ",r.zipCode]}),Object(d.jsxs)("div",{children:["email: ",r.email]}),Object(d.jsx)("br",{}),Object(d.jsx)(s.a,{ingredients:e.ingredients}),Object(d.jsx)("div",{className:"Price",children:"Price DT"}),Object(d.jsxs)("div",{children:[e.price," DT"]})]},t)}))}return Object(d.jsx)("div",{children:r})}))}}]);
//# sourceMappingURL=4.b1f2f02d.chunk.js.map