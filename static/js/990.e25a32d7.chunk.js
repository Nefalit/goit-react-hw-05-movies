"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[990],{1990:function(t,e,n){n.r(e),n.d(e,{default:function(){return k}});var r=n(5861),a=n(885),c=n(7757),u=n.n(c),s=n(2791),i=n(501),o=n(6373),p=n(4390),f="home_wrapper__W9iJK",h="home_list__3shv3",l="home_item__wTW4T",_="home_link__JbC2k",m="home_img__uPDbU",v="home_title__MzCla",d="home_text__Blo2p",g="home_error__ZxwEH",x=n(184);var k=function(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],k=(0,s.useState)(!1),w=(0,a.Z)(k,2),y=w[0],b=w[1],Z=(0,s.useState)(!1),j=(0,a.Z)(Z,2),N=j[0],C=j[1];(0,s.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,b(!0),C(!1),t.next=5,(0,p.Hg)();case 5:e=t.sent,c(e),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),C(t.t0);case 12:return t.prev=12,b(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[]);var H=n.map((function(t){var e=t.id,n=t.title,r=t.poster_path;return(0,x.jsx)("li",{className:l,children:(0,x.jsxs)(i.rU,{className:_,to:"/movies/".concat(e),children:[(0,x.jsx)("img",{className:m,src:"https://image.tmdb.org/t/p/w300".concat(r),alt:n}),(0,x.jsxs)("p",{className:d,children:[" ",n]})]})},e)}));return(0,x.jsxs)("div",{className:f,children:[y&&(0,x.jsx)(o.g4,{color:"#ff6b08",height:80,width:80}),N&&(0,x.jsxs)("p",{className:g,children:["\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a : ",N]}),(0,x.jsx)("h1",{className:v,children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0456 \u0441\u044c\u043e\u0433\u043e\u0434\u043d\u0456"}),(0,x.jsx)("ul",{className:h,children:H})]})}},4390:function(t,e,n){n.d(e,{Hg:function(){return o},TP:function(){return l},V0:function(){return f},tx:function(){return d},zv:function(){return m}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),s=n.n(u);s().defaults.baseURL="https://api.themoviedb.org/3";var i="f3ea85ad66a7076fbd3968a20cd79e45";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("trending/movie/day?api_key=".concat(i,"&language=uk"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("search/movie?api_key=".concat(i,"&query=").concat(e,"&language=uk"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("movie/".concat(e,"?api_key=").concat(i,"&language=uk"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=uk"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("movie/".concat(e,"/reviews?api_key=").concat(i));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=990.e25a32d7.chunk.js.map