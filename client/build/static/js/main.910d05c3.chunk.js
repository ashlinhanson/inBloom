(this["webpackJsonpin-bloom"]=this["webpackJsonpin-bloom"]||[]).push([[0],{25:function(e,a,t){e.exports=t.p+"static/media/header3.4954f751.png"},26:function(e,a,t){e.exports=t.p+"static/media/monstera1.c3068292.png"},29:function(e,a,t){e.exports=t(62)},34:function(e,a,t){},52:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(13),r=t.n(c),s=(t(34),t(28)),o=t(8),m=t(1),i=t(10),u=t(9),p=t.n(u),E=function(e){return p.a.post("/api/user",e)};var d=function(e){return l.a.createElement("div",null,l.a.createElement(i.GoogleLogin,{clientId:"21199057526-pc5p89vu1fos35ufcd9m597mmd84aq88.apps.googleusercontent.com",buttonText:"Login",onSuccess:function(a){console.log("[Login Success] currentUser:",a.profileObj);a.profileObj.email;console.log(a),E(a.profileObj).then((function(a){e.setUser(a.data)}))},onFailure:function(e){console.log("[Login failed] res: ",e),alert("invalid user")},cookiePolicy:"single_host_origin",isSignedIn:!0}))},b=t(25),g=t.n(b),f=t(26),v=t.n(f);var h=function(e){return l.a.createElement("div",null,l.a.createElement("img",{className:"monstera",src:v.a}),l.a.createElement("div",{className:"jumbotron bg-transparent text-center"},l.a.createElement("img",{className:"inbloom",src:g.a}),l.a.createElement("p",{className:"sublead mt-5"},"Let's Get Growing")),l.a.createElement("div",{className:"container m-5 col-4 mx-auto text-center"},!e.user&&l.a.createElement(d,{setUser:e.setUser})))},N=(t(52),t(64));var x=function(){return l.a.createElement("div",null,l.a.createElement(i.GoogleLogout,{clientId:"21199057526-pc5p89vu1fos35ufcd9m597mmd84aq88.apps.googleusercontent.com",buttonText:"Logout",onLogoutSuccess:function(){alert("Logout made successfully")},style:{scope:"profile",width:"240",height:"50",longtitle:"true",theme:"dark"}}))};var y=function(){var e=new N.b({delay:.8});return Object(n.useEffect)((function(){e.from(".homes",{x:15,opacity:0,ease:N.a.easeOut,delay:.1},"Start"),e.from(".search",{x:15,opacity:0,ease:N.a.easeOut,delay:.2},"Start"),e.from(".contact",{x:15,opacity:0,ease:N.a.easeOut,delay:.3},"Start")}),[]),l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light mt-n5"},l.a.createElement("a",{className:"navbar-brand homes text-success",href:"#"},"inBloom"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item active search"},l.a.createElement("form",{class:"form-inline"},l.a.createElement("div",{class:"form-group mx-sm-3 mb-2"},l.a.createElement("label",{for:"plantSearch",class:"sr-only"},"Search : "),l.a.createElement("input",{type:"search",class:"form-control",id:"plantSearch",placeholder:"Search by plant name..."})),l.a.createElement("button",{type:"submit",class:"btn btn-success mb-2 mx-4"},"Search Plants"))),l.a.createElement("li",{className:"nav-item contact"},l.a.createElement(x,null)))))};var S=function(){return l.a.createElement("div",null,l.a.createElement("div",{class:"jumbotron bg-success"},l.a.createElement("h1",{class:"display-3 text-center"},"Your Garden")),l.a.createElement(y,null))};var O=function(){return l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"text-center m-2"},"Welcome to inBloom!"),l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"First Name","aria-label":"Username"})),l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Last Name","aria-label":"Recipient's username"})),l.a.createElement("button",{className:"btn btn-outline-success"},l.a.createElement(o.b,{to:"/search"}),"Add your plants!")))};var j=function(){var e=Object(n.useState)(null),a=Object(s.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){c(JSON.parse(sessionStorage.getItem("userData")))}),[]),l.a.createElement(o.a,null,l.a.createElement("div",null,!t&&l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/"},l.a.createElement(h,{setUser:c,user:t})),l.a.createElement(m.a,{exact:!0,path:"/newuser"},l.a.createElement(O,null))),t&&l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/"},l.a.createElement(h,{user:t})),l.a.createElement(m.a,{exact:!0,path:"/plants"},l.a.createElement(S,null)))))};t(61);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.910d05c3.chunk.js.map