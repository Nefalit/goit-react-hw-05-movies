"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[36],{7036:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var r=n(5861),a=n(885),c=n(7757),u=n.n(c),s=n(2791),i=n(6871),o=n(6373),p=n(4390),f={wrapper:"reviews_wrapper__DMjfE",notifocation:"reviews_notifocation__PgxC7"},h=n(184);var l=function(){var t=(0,s.useState)(!1),e=(0,a.Z)(t,2),n=e[0],c=e[1],l=(0,s.useState)(!1),v=(0,a.Z)(l,2),d=v[0],x=v[1],w=(0,i.UO)().movieId,m=(0,s.useState)(null),y=(0,a.Z)(m,2),_=y[0],k=y[1];return(0,s.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c(!0),x(!1),t.next=5,(0,p.tx)(w);case 5:e=t.sent,k(e),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),x(t.t0);case 12:return t.prev=12,c(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[w]),(0,h.jsxs)("div",{className:f.wrapper,children:[n&&(0,h.jsx)(o.g4,{color:"#ff6b08",height:80,width:80}),d&&(0,h.jsxs)("p",{className:f.error,children:["\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a : ",d]}),_&&(0,h.jsx)("ul",{children:_.results.length>0?_.results.map((function(t){var e=t.author,n=t.content,r=t.id;return(0,h.jsxs)("li",{children:[(0,h.jsxs)("p",{children:["\u0410\u0432\u0442\u043e\u0440: ",e]}),(0,h.jsx)("p",{children:n})]},r)})):(0,h.jsx)("p",{className:f.notifocation,children:"\u041f\u043e\u043a\u0438 \u0449\u043e \u043d\u0435\u043c\u0430\u0454 \u0432\u0456\u0434\u0433\u0443\u043a\u0456\u0432 \u043f\u0440\u043e \u0444\u0456\u043b\u044c\u043c"})})]})}},4390:function(t,e,n){n.d(e,{Hg:function(){return o},TP:function(){return l},V0:function(){return f},tx:function(){return w},zv:function(){return d}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),s=n.n(u)().create({baseURL:"https://api.themoviedb.org/3/"}),i="f3ea85ad66a7076fbd3968a20cd79e45";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("trending/movie/day?api_key=".concat(i));case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("search/movie?api_key=".concat(i,"&query=").concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("movie/".concat(e,"?api_key=").concat(i));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("movie/".concat(e,"/credits?api_key=").concat(i));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("movie/".concat(e,"/reviews?api_key=").concat(i));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=36.4d40cadb.chunk.js.map