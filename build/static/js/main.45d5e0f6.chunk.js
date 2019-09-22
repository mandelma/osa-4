(window.webpackJsonpblogit=window.webpackJsonpblogit||[]).push([[0],{17:function(e,t,n){e.exports=n(41)},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(16),u=n.n(l),c=n(6),o=n(1),i=n.n(o),s=n(4),p=n(2),b=n(5),m=n.n(b),d=null,f={getAll:function(){var e=Object(s.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/api/blogs");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(s.a)(i.a.mark(function e(t){var n,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:d}},e.next=3,m.a.post("/api/blogs",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(s.a)(i.a.mark(function e(t,n){var a,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:d}},e.prev=1,e.next=4,m.a.put("".concat("/api/blogs","/").concat(t),n,a);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t,n){return e.apply(this,arguments)}}(),setToken:function(e){d="bearer ".concat(e)},removeToken:function(){d=null},baseUrl:"/api/blogs"},g={login:function(){var e=Object(s.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},v=(n(40),function(e){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:e.handleLogin},r.a.createElement("h2",null,"Log in to application:"),r.a.createElement("label",null,"Username:",r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:e.username,onChange:e.usernameHandler}),r.a.createElement("br",null)),r.a.createElement("label",null,"Password:",r.a.createElement("br",null),r.a.createElement("input",{type:"password",value:e.salasana,onChange:e.passwordHandler}),r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Kirjaudu")),r.a.createElement("br",null))}),E=function(e){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:e.handleBlogi},r.a.createElement("h2",null,"Create new blog"),r.a.createElement("label",null,"Title:",r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:e.title,onChange:e.titleHandler}),r.a.createElement("br",null)),r.a.createElement("label",null,"Author:",r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:e.author,onChange:e.authorHandler})),r.a.createElement("br",null),r.a.createElement("label",null,"Url:",r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:e.url,onChange:e.urlHandler})),r.a.createElement("br",null),r.a.createElement("label",null,"Likes:",r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:e.likes,onChange:e.likesHandler})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Create blog")))},O=r.a.forwardRef(function(e,t){var n=Object(a.useState)(!1),l=Object(p.a)(n,2),u=l[0],c=l[1],o={display:u?"none":""},i={display:u?"":"none"},s=function(){c(!u)};return Object(a.useImperativeHandle)(t,function(){return s}),r.a.createElement("div",{onClick:s}," ",e.openBlog,r.a.createElement("div",{style:o}),r.a.createElement("div",{style:i},e.children))}),h=function(e){var t=e.blog,n=e.addLike;return r.a.createElement("div",{style:{paddingTop:10,paddingLeft:2,border:"solid",borderWidth:1,marginBottom:5}},r.a.createElement(O,{openBlog:t.title},r.a.createElement("a",{href:t.url},"www.postimees.ee"),r.a.createElement("br",null),t.likes," likes\xa0\xa0",r.a.createElement("button",{onClick:n},"Like"),r.a.createElement("br",null),"added by ",t.author,r.a.createElement("br",null),r.a.createElement("br",null)))},j=function(e){var t=e.msg,n=e.msgType;return null===t?null:r.a.createElement("div",{className:n},t)},w=function(e){var t=Object(a.useState)(!1),n=Object(p.a)(t,2),l=n[0],u=n[1],c={display:l?"none":""},o={display:l?"":"none"},i=function(){u(!l)};return r.a.createElement("div",null,r.a.createElement("div",{style:c},r.a.createElement("button",{onClick:i},e.buttonLabel)),r.a.createElement("div",{style:o},e.children,r.a.createElement("button",{onClick:i},"Cansel")))};function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(n,!0).forEach(function(t){Object(c.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var x=function(){var e,t=Object(a.useState)(null),n=Object(p.a)(t,2),l=n[0],u=n[1],o=Object(a.useState)(null),b=Object(p.a)(o,2),m=b[0],d=b[1],O=Object(a.useState)(null),k=Object(p.a)(O,2),x=k[0],S=k[1],C=Object(a.useState)(""),H=Object(p.a)(C,2),L=H[0],T=H[1],B=Object(a.useState)(""),P=Object(p.a)(B,2),U=P[0],A=P[1],D=Object(a.useState)(!1),I=Object(p.a)(D,2),J=(I[0],I[1],Object(a.useState)([])),N=Object(p.a)(J,2),R=N[0],z=N[1],W=Object(a.useState)(""),K=Object(p.a)(W,2),q=K[0],F=K[1],G=Object(a.useState)(""),M=Object(p.a)(G,2),Q=M[0],V=M[1],X=Object(a.useState)(""),Y=Object(p.a)(X,2),Z=Y[0],$=Y[1],_=Object(a.useState)(""),ee=Object(p.a)(_,2),te=ee[0],ne=ee[1];r.a.createRef();Object(a.useEffect)(function(){ae()},[]);var ae=function(){var e=Object(s.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getAll();case 2:t=e.sent,z(re(t));case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),re=function(e){return e.sort(function(e,t){return e.likes-t.likes})};Object(a.useEffect)(function(){var e=window.localStorage.getItem("loggedBlogappUser");if(e){var t=JSON.parse(e);S(t),f.setToken(t.token)}},[]);var le=function(){var e=Object(s.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,g.login({username:L,password:U});case 4:n=e.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(n)),f.setToken(n.token),S(n),T(""),A(""),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(1),T(""),A(""),d("Wrong username or password!"),setTimeout(function(){d(null)},5e3);case 18:case"end":return e.stop()}},e,null,[[1,12]])}));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=Object(s.a)(i.a.mark(function e(t){var n,a,r,l;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.likes+1,a=R.find(function(e){return e.id===t.id}),r=y({},a,{likes:n}),e.prev=3,e.next=6,f.update(a.id,r);case 6:l=e.sent,z(R.map(function(e){return e.id!==t.id?e:l})),console.log("Response: ",l),console.log("base url: ",f.baseUrl),console.log("like omanik on: ",t.author,"ja like id: ",t.id),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0);case 16:case"end":return e.stop()}},e,null,[[3,13]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(j,{msg:null!==l?l:m,msgType:null!==l?"message":"error"}),null===x?r.a.createElement(v,(e={handleLogin:le,username:L,usernameHandler:function(e){T(e.target.value)},salasana:U,passwordHandler:function(e){A(e.target.value)}},Object(c.a)(e,"username",L),Object(c.a)(e,"salasana",U),e)):r.a.createElement("div",null,r.a.createElement("h1",null,"Blogs"),r.a.createElement("p",null,x.name," logged in\xa0\xa0",r.a.createElement("button",{onClick:function(){window.localStorage.removeItem("loggedBlogappUser"),f.removeToken(),S(null)}},"Log out")),r.a.createElement(w,{buttonLabel:"New blog"},r.a.createElement(E,{handleBlogi:function(e){e.preventDefault();var t={title:q,author:Q,url:Z,likes:te};f.create(t).then(function(e){z(R.concat(e)),F(""),V(""),$(""),ne(""),u("A new blog ".concat(e.title," by ").concat(e.author," added!")),setTimeout(function(){u(null)},5e3)})},title:q,author:Q,url:Z,likes:te,titleHandler:function(e){F(e.target.value)},authorHandler:function(e){V(e.target.value)},urlHandler:function(e){$(e.target.value)},likesHandler:function(e){ne(e.target.value)}})),R.map(function(e){return r.a.createElement(h,{key:e.title,blog:e,addLike:function(){return ue(e)}})})))};u.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.45d5e0f6.chunk.js.map