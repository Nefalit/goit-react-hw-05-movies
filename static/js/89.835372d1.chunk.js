"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[89],{3089:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(5861),a=n(885),s=n(7757),i=n.n(s),c=n(501),o=n(6871),u=n(2791),l=n(6373),p=n(4390),v=n(9841),f="movieDetails_goBack__CI1KW",d="movieDetails_wrapper__s3VPh",h="movieDetails_title__SN6Ns",_="movieDetails_box__HIl+f",m="movieDetails_img__h4EeK",x="movieDetails_info__w8a5S",w="movieDetails_titleTwo__VTn9p",g="movieDetails_text__uNA0S",j="movieDetails_link__Rx+J2",k="movieDetails_active__IorLW movieDetails_link__Rx+J2",y="movieDetails_error__GFwgE",N=n(184);var b=function(){var e,t,n=(0,u.useState)(null),s=(0,a.Z)(n,2),b=s[0],D=s[1],Z=(0,u.useState)(!1),S=(0,a.Z)(Z,2),I=S[0],T=S[1],L=(0,u.useState)(!1),A=(0,a.Z)(L,2),C=A[0],E=A[1],H=(0,o.UO)().movieId,O=(0,o.TH)(),P=null!==(e=null===O||void 0===O||null===(t=O.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,u.useEffect)((function(){function e(){return(e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,T(!0),E(!1),e.next=5,(0,p.TP)(H);case 5:t=e.sent,D(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),E(e.t0);case 12:return e.prev=12,T(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[H]),(0,N.jsxs)("div",{className:d,children:[(0,N.jsx)(c.rU,{className:f,to:P,children:"\u041d\u0430 \u043f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u044e"}),I&&(0,N.jsx)(l.g4,{color:"#ff6b08",height:80,width:80}),C&&(0,N.jsxs)("p",{className:y,children:["\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a : ",C]}),b&&(0,N.jsxs)("div",{children:[(0,N.jsxs)("h2",{className:h,children:[b.title," (",b.release_date.slice(0,4),")"]}),(0,N.jsxs)("div",{className:_,children:[(0,N.jsx)("img",{className:m,src:b.poster_path?"https://image.tmdb.org/t/p/w300".concat(b.poster_path):v,alt:b.title}),(0,N.jsxs)("div",{className:x,children:[(0,N.jsx)("h3",{className:w,children:"\u041e\u0433\u043b\u044f\u0434"}),(null===b||void 0===b?void 0:b.overview)&&(0,N.jsx)("p",{className:g,children:b.overview}),(0,N.jsx)("h3",{className:w,children:"\u0416\u0430\u043d\u0440\u0438"}),b.genres.length>0&&(0,N.jsx)("p",{className:g,children:b.genres.map((function(e){return e.name})).join(", ")}),(null===b||void 0===b?void 0:b.vote_average)&&(0,N.jsxs)("p",{className:g,children:["\u0420\u0435\u0439\u0442\u0438\u043d\u0433: ",b.vote_average]}),(0,N.jsx)("p",{className:g,children:"\u0414\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u0430 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f"}),(0,N.jsx)(c.OL,{className:function(e){return e.isActive?k:j},to:"cast",state:{from:P},children:"\u0410\u043a\u0442\u043e\u0440\u0438"}),(0,N.jsx)(c.OL,{className:function(e){return e.isActive?k:j},to:"reviews",state:{from:P},children:"\u0412\u0456\u0434\u0433\u0443\u043a\u0438"})]})]})]}),(0,N.jsx)(o.j3,{})]})}},4390:function(e,t,n){n.d(t,{Hg:function(){return u},TP:function(){return f},V0:function(){return p},tx:function(){return m},zv:function(){return h}});var r=n(5861),a=n(7757),s=n.n(a),i=n(4569),c=n.n(i)().create({baseURL:"https://api.themoviedb.org/3/"}),o="f3ea85ad66a7076fbd3968a20cd79e45";function u(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("trending/movie/day?api_key=".concat(o));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("search/movie?api_key=".concat(o,"&query=").concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(t,"?api_key=").concat(o));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(t,"/credits?api_key=").concat(o));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(t,"/reviews?api_key=").concat(o));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},9841:function(e,t,n){e.exports=n.p+"static/media/noImgMovie.b667e504c8d4ca61dab3.jpg"}}]);
//# sourceMappingURL=89.835372d1.chunk.js.map