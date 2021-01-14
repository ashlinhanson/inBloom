(this["webpackJsonpin-bloom"]=this["webpackJsonpin-bloom"]||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),i=a.n(r),s=(a(70),a(6)),m=a(21),o=a(5),c=a(24),u=a(20),d=a.n(u),p=function(e){return d.a.get("/api/trefle/search/"+e)},g=function(e){return d.a.get("/api/trefle/detail/"+e)},h=function(e){return d.a.post("/api/plant",e)},f=function(e){return d.a.post("/api/user",e)},E=function(e){return d.a.delete("/api/plant/".concat(e),{data:{id:e}})},b=function(e){return d.a.get("/api/user/"+e)};var v=a(54),w=a.n(v),x=a(55),y=a.n(x),_=a(56),N=a.n(_),O=(a(88),a(22)),S=a.n(O),j=a(23),G=a.n(j),I=a(9),k=function(){return Object(n.useEffect)((function(){I.a.from(".inbloom",{duration:4,opacity:0}),I.a.from("#login-container",{duration:4,opacity:0}),I.a.to(".leftpalm-1",{duration:4,ease:"slow.out",transformOrigin:"left bottom",rotate:-75}),I.a.to(".rightpalm-1",{duration:4.5,ease:"slow.out",transformOrigin:"right bottom",rotate:75}),I.a.to(".leftpalm-2",{duration:3,ease:"slow.out",transformOrigin:"left bottom",rotate:-75}),I.a.to(".rightpalm-2",{duration:3.5,ease:"slow.out",transformOrigin:"right bottom",rotate:75}),I.a.to(".leftpalm-3",{duration:2,ease:"slow.out",transformOrigin:"left bottom",rotate:-75}),I.a.to(".rightpalm-3",{duration:2.5,ease:"slow.out",transformOrigin:"right bottom",rotate:75}),I.a.to(".leftpalm-4",{duration:2.2,ease:"slow.out",transformOrigin:"left bottom",rotate:-75}),I.a.to(".rightpalm-4",{duration:2.3,ease:"slow.out",transformOrigin:"right bottom",rotate:75}),I.a.to(".leftpalm-5",{duration:2.1,ease:"slow.out",transformOrigin:"left bottom",rotate:-75}),I.a.to(".rightpalm-5",{duration:2.1,ease:"slow.out",transformOrigin:"right bottom",rotate:75}),I.a.to(".leftpalm-6",{duration:2.2,ease:"slow.out",transformOrigin:"left bottom",rotate:-75}),I.a.to(".rightpalm-6",{duration:2,ease:"slow.out",transformOrigin:"right bottom",rotate:75})}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{className:"leftpalm-1",src:G.a}),l.a.createElement("img",{className:"rightpalm-1",src:S.a}),l.a.createElement("img",{className:"leftpalm-2",src:G.a}),l.a.createElement("img",{className:"rightpalm-2",src:S.a}),l.a.createElement("img",{className:"leftpalm-3",src:G.a}),l.a.createElement("img",{className:"rightpalm-3",src:S.a}),l.a.createElement("img",{className:"leftpalm-4",src:G.a}),l.a.createElement("img",{className:"rightpalm-4",src:S.a}),l.a.createElement("img",{className:"leftpalm-5",src:G.a}),l.a.createElement("img",{className:"rightpalm-5",src:S.a}),l.a.createElement("img",{className:"leftpalm-6",src:G.a}),l.a.createElement("img",{className:"rightpalm-6",src:S.a}))},U=a(57),B=a(58);var C=function(){return l.a.createElement("div",{className:"footer mt-5"},l.a.createElement("div",{className:"container text-center"},l.a.createElement("div",{className:"row"},l.a.createElement("i",{class:"fab fa-github"}),l.a.createElement("small",{className:"footer-text"},"Copyright \xa9 inBloom")),l.a.createElement("div",{className:"row"},l.a.createElement("a",{href:"https://github.com/ashlinhanson/inBloom",target:"_blank"},l.a.createElement(U.a,{icon:B.a,size:"2x",id:"github-icon"})))))};var H=function(e){return l.a.createElement("div",null,l.a.createElement(k,null),l.a.createElement("div",{className:"jumbotron bg-transparent text-center"},l.a.createElement("img",{className:"inbloom",src:w.a})),l.a.createElement("img",{id:"plant1",src:y.a}),l.a.createElement("img",{id:"plant2",src:N.a}),l.a.createElement("div",{className:"container col-10 col-md-3 mx-auto text-center",id:"login-container"},l.a.createElement("div",{className:"align-middle mx-auto p-5",id:"googleBtn"},!e.user&&l.a.createElement(c.GoogleLogin,{setUser:e.setUser,clientId:"21199057526-pc5p89vu1fos35ufcd9m597mmd84aq88.apps.googleusercontent.com",buttonText:"Login",onSuccess:function(t){console.log("[Login Success] currentUser:",t.profileObj);t.profileObj.email;console.log(t),f(t.profileObj).then((function(t){e.setUser(t.data)}))},onFailure:function(e){console.log("[Login failed] res: ",e),alert("invalid user")},cookiePolicy:"single_host_origin",isSignedIn:!0}))))};a(29);var L=a(1),P=(a(92),a(43));var R=function(e){var t=l.a.useState(!1),a=Object(s.a)(t,2),n=a[0],r=a[1];return n?l.a.createElement(P.a,{variant:"success",onClose:function(){r(!1),e.setUser(null)},dismissible:!0},l.a.createElement(P.a.Heading,null,"Log out successful!"),l.a.createElement("p",null,"We'll see you soon! \ud83c\udf31")):l.a.createElement("div",null,l.a.createElement(c.GoogleLogout,{clientId:"21199057526-pc5p89vu1fos35ufcd9m597mmd84aq88.apps.googleusercontent.com",buttonText:"Logout",onLogoutSuccess:function(){console.log("Logout successful"),r(!0)},style:{scope:"profile",width:"240",height:"50",longtitle:"true",theme:"dark"}}))};var M=a(59),F=a.n(M);var T=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],i=a[1],m=function(e,t){var a=Object(n.useState)(e),l=Object(s.a)(a,2),r=l[0],i=l[1];return Object(n.useEffect)((function(){var a=setTimeout((function(){i(e)}),t);return function(){clearTimeout(a)}}),[e]),r}(r,500);Object(n.useEffect)((function(){var t=m;m?(e.setIsSearching(!0),e.setUserGarden(!0),p(t).then((function(t){e.setIsSearching(!0),e.setResults(t.data),e.setUserGarden(!1)}))):e.setResults([])}),[m]);var o=new L.d({delay:.8});return Object(n.useEffect)((function(){o.from(".homes",{x:15,opacity:0,ease:L.b.easeOut,delay:.1},"Start"),o.from(".search",{x:15,opacity:0,ease:L.b.easeOut,delay:.2},"Start"),o.from(".contact",{x:15,opacity:0,ease:L.b.easeOut,delay:.3},"Start")}),[]),l.a.createElement("div",null,l.a.createElement("nav",{id:"navbar",className:"navbar navbar-light bg-light mt-n5"},l.a.createElement("div",{className:"justify-content-left"},l.a.createElement("a",{id:"navbar-title",className:"navbar-brand homes text-success"},"inBloom"),!e.userGarden&&l.a.createElement("button",{id:"back-to-garden-btn",className:"btn",onClick:e.handleGetPlants},"Back to Garden")),l.a.createElement("div",{className:"navbar justify-content-end",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item active search"},l.a.createElement("form",{className:"form-inline",onSubmit:F.a},l.a.createElement("div",{className:"form-group mx-sm-3 mb-2"},l.a.createElement("label",{htmlFor:"plantSearch",className:"sr-only"},"Search : "),l.a.createElement("input",{type:"search",className:"form-control",id:"plantSearch",placeholder:"Search by plant name...",onChange:function(e){return function(e){e.preventDefault(),i(e.target.value)}(e)}}),e.isSearching&&l.a.createElement("div",null," Searching... ")),l.a.createElement("li",{className:"nav-item contact"},l.a.createElement(R,{user:e.user,setUser:e.setUser}))))))),e.isSearching&&l.a.createElement("div",{className:"mx-auto text-center sublead"},l.a.createElement("h1",null,l.a.createElement("b",null,"Search Results"))))},D=a(64);var J=function(e){var t=l.a.useState("Plant it!"),a=Object(s.a)(t,2),n=a[0],r=a[1],i={common_name:e.displayname,image_url:e.img,trefle_id:e.plantid,UserId:e.userId};return l.a.createElement("div",null,l.a.createElement("button",{className:"Btn btn sublead",onClick:function(){return h(i).then((function(t){console.log(t.data.common_name+" added to your garden!"),e.setGarden((function(e){return[].concat(Object(D.a)(e),[i])})),e.setModalShow&&e.setModalShow(!1)})),void r("Successfully Planted!")}},n))};var q=function(e){return console.log(e),l.a.createElement("div",null,e&&l.a.createElement("div",null,l.a.createElement("h5",{className:"sublead"},l.a.createElement("b",null,"General Info")),l.a.createElement("ul",{className:"text-left sublead"},e.edible&&l.a.createElement("li",null,"Edible: ",e.edible),e.flower&&l.a.createElement("li",null,"Flower: ",e.flower),e.growthform&&l.a.createElement("li",null,"Growth Form: ",e.growthform),e.growthhabit&&l.a.createElement("li",null,"Growth Habit: ",e.growthhabit),e.growthrate&&l.a.createElement("li",null,"Growth Rate: ",e.growthrate),e.avgheight&&l.a.createElement("li",null,"Average Height: ",e.avgheight," cm"),e.maxheight&&l.a.createElement("li",null,"Maximum Height: ",e.maxheight," cm"),e.toxicity&&l.a.createElement("li",null,"Toxicity: ",e.toxicity))))},z=a(27);var A=function(e){return console.log(e),l.a.createElement("div",null,e&&l.a.createElement("div",null,l.a.createElement("h4",{className:"sublead"},l.a.createElement("b",null,"Care Info")),l.a.createElement("ul",{className:"text-left sublead"},e.phmin&&e.phmax&&l.a.createElement("li",null,"pH Range: ",e.phmin," - ",e.phmax),e.light&&l.a.createElement("li",null,"Light: ",e.light),e.bloommonths&&l.a.createElement("li",null,"Bloom Months: ",e.bloommonths),e.growthmonths&&l.a.createElement("li",null,"Growth Months: ",e.growthmonths),e.humidity&&l.a.createElement("li",null,"Humidity: ",e.humidity),e.minwater&&e.maxwater&&l.a.createElement("li",null,"Precipitation Range: ",e.minwater,"mm - ",e.maxwater,"mm"),e.rootdepth&&l.a.createElement("li",null,"Minimum Root Depth: ",e.rootdepth,"cm"),e.mintemp&&e.maxtemp&&l.a.createElement("li",null,"Temperature Range: ",e.mintemp,"\xbaF - ",e.maxtemp,"\xbaF"),e.soilnutriments&&l.a.createElement("li",null,"Soil Nutriments: ",e.soilnutriments," (pH Level)"),null!=e.soilsalinity&&l.a.createElement("li",null,"Soil Salinity: ",e.soilsalinity),e.soiltexture&&l.a.createElement("li",null,"Soil Texture: ",e.soiltexture),e.soilhumidity&&l.a.createElement("li",null,"Soil Humidity: ",e.soilhumidity))))};var W=function(e){var t="",a="",n="";return e.plantres?(e.plantres,t=null===e.plantres.data.common_name?"":"("+e.plantres.data.scientific_name+")",a=!0===e.plantres.data.main_species.edible?"Yes":e.plantres.data.main_species.edible?"No":null,n=!0===e.plantres.data.main_species.toxicity?"Yes":e.plantres.data.main_species.toxicity?"No":null):null,l.a.createElement(z.a,Object.assign({},e,{size:"lg",className:"infoModal rounded mb-0","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),l.a.createElement(z.a.Header,{closeButton:!0},l.a.createElement(z.a.Title,{id:"contained-modal-title-vcenter",className:"lead mx-auto"},e.displayname," ",t)),l.a.createElement(z.a.Body,null,l.a.createElement("img",{src:e.img,alt:"plant",style:{width:"400px"},className:"text-center modalPhoto"}),l.a.createElement(q,{id:"infoContainer",className:"text-center",edible:a,flower:e.plantres.data.main_species.flower.color,growthform:e.plantres.data.main_species.specifications.growth_form,growthhabit:e.plantres.data.main_species.specifications.growth_habit,growthrate:e.plantres.data.main_species.specifications.growth_rate,avgheight:e.plantres.data.main_species.specifications.average_height.cm,maxheight:e.plantres.data.main_species.specifications.maximum_height.cm,toxicity:n}),l.a.createElement(A,{id:"careContainer",phmax:e.plantres.data.main_species.growth.ph_maximum,phmin:e.plantres.data.main_species.growth.ph_minimum,bloommonths:e.plantres.data.main_species.growth.bloom_months,light:e.plantres.data.main_species.growth.light,growthmonths:e.plantres.data.main_species.growth.growth_months,humidity:e.plantres.data.main_species.growth.atmospheric_humidity,minwater:e.plantres.data.main_species.growth.minimum_precipitation.mm,maxwater:e.plantres.data.main_species.growth.maximum_precipitation.mm,rootdepth:e.plantres.data.main_species.growth.minimum_root_depth.cm,mintemp:e.plantres.data.main_species.growth.minimum_temperature.deg_f,maxtemp:e.plantres.data.main_species.growth.maximum_temperature.deg_f,soilnutriments:e.plantres.data.main_species.growth.soil_nutriments,soilsalinity:e.plantres.data.main_species.growth.soil_salinity,soiltexture:e.plantres.data.main_species.growth.soil_texture,soilhumidity:e.plantres.data.main_species.growth.soil_humidity})),l.a.createElement(z.a.Footer,null,l.a.createElement("button",{onClick:e.onHide,className:"Btn sublead"},"Close"),"yes"===e.addbtn&&l.a.createElement(J,{setModalShow:e.setModalShow,setGarden:e.setGarden,plantid:e.plantid,displayname:e.displayname,img:e.img,plant:e.plantres,userId:e.user})))};var Y=function(e){var t,a,n=l.a.useState(!1),r=Object(s.a)(n,2),i=r[0],m=r[1],o=l.a.useState(),c=Object(s.a)(o,2),u=c[0],d=c[1];return e.plant.trefle_id?(t=e.plant.trefle_id,a="no"):(t=e.plantId,a="yes"),l.a.createElement("div",null,l.a.createElement("button",{className:"Btn btn sublead",onClick:function(){return[m(!0),void g(t).then((function(e){d(e)}))]}},"More Info"),u&&l.a.createElement(W,{show:i,onHide:function(){return m(!1)},plantres:u,plantid:t,displayname:e.displayname,img:e.img,user:e.user,setModalShow:m,addbtn:a,setGarden:e.setGarden}))},K=a(60),Q=a.n(K);var V=function(e){var t,a;return t=e.plant.common_name?e.plant.common_name:e.plant.scientific_name,a=e.plant.image_url?e.plant.image_url:Q.a,l.a.createElement("div",{id:"search-card",className:"card m-2 p-2",key:e.plant.id,style:{width:"350px"}},l.a.createElement("h3",{className:"card-title"},l.a.createElement("b",null,t)),l.a.createElement("img",{src:a,className:"card-img-top mx-auto",alt:e.plant.scientific_name,style:{height:"350px"}}),l.a.createElement(J,{setGarden:e.setGarden,plant:e.plant,plantid:e.plant.id,displayname:t,userId:e.user,img:a}),l.a.createElement(Y,{setGarden:e.setGarden,plant:e.plant,plantId:e.plant.id,displayname:t,img:a,user:e.user}))},X=a(61),Z=a.n(X);var $=function(e){var t=l.a.useState("Remove"),a=Object(s.a)(t,2),n=a[0],r=a[1];return l.a.createElement("div",null,l.a.createElement("button",{className:"Btn btn sublead",onClick:function(){E(e.plant.id).then((function(t){r("Successfully Removed!"),setTimeout((function(){e.handleGetPlants(e.user.id)}),1e3)}))}},n))};var ee=function(e){var t,a;return t=e.plant.common_name?e.plant.common_name:e.plant.scientific_name,a=e.plant.image_url?e.plant.image_url:Z.a,l.a.createElement("div",{className:"card m-4 p-4",key:e.plant.trefle_id,style:{width:"350px"}},l.a.createElement("h3",{className:"card-title"},l.a.createElement("b",null,t)),l.a.createElement("img",{src:a,className:"card-img-top mx-auto",alt:e.plant.scientific_name,style:{height:"350px"}}),l.a.createElement(Y,{plant:e.plant,plantid:e.plant.trefle_id,displayname:t,img:a,user:e.user}),l.a.createElement($,{plant:e.plant,userGarden:e.userGarden,user:e.user,handleGetPlants:e.handleGetPlants}))},te=a(62),ae=a.n(te);var ne=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),r=a[0],i=a[1],m=Object(n.useState)(!1),o=Object(s.a)(m,2),c=o[0],u=o[1],d=Object(n.useState)(!0),p=Object(s.a)(d,2),g=p[0],h=p[1],f=Object(n.useState)([]),E=Object(s.a)(f,2),v=E[0],w=E[1];Object(n.useEffect)((function(){console.log(e.user.id),x()}),[]);var x=function(){b(e.user.id).then((function(e){w(e.data.Plants),u(!1),h(!0)}))};return console.log(r),Object(n.useEffect)((function(){I.a.from("#plant-cards",{duration:3,x:300,opacity:0})}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"garden-body"},l.a.createElement("div",{className:"jumbotron garden-jumbo"},l.a.createElement("img",{className:"gardenHeader",src:ae.a})),l.a.createElement(T,{setResults:i,results:r,isSearching:c,setIsSearching:u,setUserGarden:h,userGarden:g,handleGetPlants:x,user:e.user,setUser:e.setUser}),l.a.createElement("div",{id:"plant-cards",className:"row p-3 mb-5 col-md-10 mx-auto"},c&&r.map((function(t){return l.a.createElement(V,{setGarden:w,key:t.id,plant:t,user:e.user.id,userGarden:g})}))),l.a.createElement("div",{id:"saved-plants",className:"container row p-5 m-3 mx-auto col-md-8"},v.map((function(t){return l.a.createElement(ee,{key:t.id,handleGetPlants:x,plant:t,user:e.user.id,userGarden:g})})))),l.a.createElement(C,null),l.a.createElement("br",null)," ",l.a.createElement("br",null))};var le=function(){return l.a.createElement("div",null,l.a.createElement(T,null),l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"text-center m-2"},"Welcome to inBloom!"),l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"First Name","aria-label":"Username"})),l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Last Name","aria-label":"Recipient's username"})),l.a.createElement("button",{className:"btn btn-outline-success"},l.a.createElement(m.b,{to:"/search"}),"Add your plants!")))};var re=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){r(JSON.parse(sessionStorage.getItem("userData")))}),[]),l.a.createElement(m.a,null,l.a.createElement("div",null,!a&&l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/"},l.a.createElement(H,{setUser:r,user:a})),l.a.createElement(o.a,{exact:!0,path:"/newuser"},l.a.createElement(le,null))),a&&l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/"},l.a.createElement(ne,{setUser:r,user:a})))))};a(101);i.a.render(l.a.createElement(re,null),document.getElementById("root"))},22:function(e,t,a){e.exports=a.p+"static/media/rightpalm.d27a76c8.svg"},23:function(e,t,a){e.exports=a.p+"static/media/leftpalm.0b40382f.svg"},29:function(e,t,a){},54:function(e,t,a){e.exports=a.p+"static/media/inbloom.c82f97ad.png"},55:function(e,t,a){e.exports=a.p+"static/media/plant1.36c68f8f.png"},56:function(e,t,a){e.exports=a.p+"static/media/plant2.506a618d.png"},60:function(e,t,a){e.exports=a.p+"static/media/no-plant.9e0023e9.png"},61:function(e,t,a){e.exports=a.p+"static/media/planty.4413f528.jpg"},62:function(e,t,a){e.exports=a.p+"static/media/yourgarden.94212cfe.png"},65:function(e,t,a){e.exports=a(102)},70:function(e,t,a){},88:function(e,t,a){e.exports=a.p+"static/media/flower.7ef5483a.png"}},[[65,1,2]]]);
//# sourceMappingURL=main.f78dc778.chunk.js.map