(window.webpackJsonpblogit=window.webpackJsonpblogit||[]).push([[0],{14:function(e,t,n){e.exports=n(36)},36:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(13),u=n.n(r),c=n(2),o=n(3),i=n.n(o),b="http://localhost:3003/api/blogs",m={getAll:function(){return i.a.get(b).then(function(e){return e.data})},create:function(e){return i.a.post(b,e).then(function(e){return e.data})},update:function(e,t){return i.a.put("".concat(b,"/").concat(e),t).then(function(e){return e.data})}};var E=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],r=t[1],u=Object(a.useState)(""),o=Object(c.a)(u,2),i=o[0],b=o[1],E=Object(a.useState)(""),f=Object(c.a)(E,2),s=f[0],p=f[1],g=Object(a.useState)(""),h=Object(c.a)(g,2),v=h[0],d=h[1],j=Object(a.useState)(""),O=Object(c.a)(j,2),w=O[0],S=O[1];return Object(a.useEffect)(function(){m.getAll().then(function(e){r(e)})},[]),l.a.createElement("div",null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={title:i,author:s,url:v,likes:w};m.create(t).then(function(e){r(n.concat(e.data))})}},l.a.createElement("h1",null,"Tallenna blogien tiedot:"),l.a.createElement("label",null,"Title:",l.a.createElement("br",null),l.a.createElement("input",{value:i,onChange:function(e){b(e.target.value)}}),l.a.createElement("br",null)),l.a.createElement("label",{value:s,onChange:function(e){p(e.target.value)}},"Author:",l.a.createElement("br",null),l.a.createElement("input",null),l.a.createElement("br",null)),l.a.createElement("label",null,"Url:",l.a.createElement("br",null),l.a.createElement("input",{value:v,onChange:function(e){d(e.target.value)}}),l.a.createElement("br",null)),l.a.createElement("label",{value:w,onChange:function(e){S(e.target.value)}},"Likes:",l.a.createElement("br",null),l.a.createElement("input",null)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{type:"submit"},"Lisaa blogi")),l.a.createElement("br",null),i,l.a.createElement("br",null),s,l.a.createElement("br",null),v,l.a.createElement("br",null),w,l.a.createElement("div",null,n.map(function(e){return l.a.createElement("li",null,e.author)})))};u.a.render(l.a.createElement(E,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e910f35d.chunk.js.map