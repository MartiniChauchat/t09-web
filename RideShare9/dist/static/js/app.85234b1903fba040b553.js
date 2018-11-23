webpackJsonp([1],{"1/oy":function(t,e){},"8Jlj":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{staticClass:"p-4"},[s("b-row",[s("b-button",{attrs:{variant:"primary",id:"torankbutton",type:"button"},on:{click:function(e){t.toranking()}}},[t._v("Rankings")])],1),t._v(" "),s("b-row",[s("b-col",[s("b-row",[s("h2",{staticClass:"mx-auto",staticStyle:{width:"130px"}},[t._v("Active Trips")])]),t._v(" "),s("b-row",{staticClass:"form-group"},[s("b-form",{staticClass:"w-100"},[s("b-form-input",{staticClass:"my-2",attrs:{placeholder:"Search"},model:{value:t.adSearchInput,callback:function(e){t.adSearchInput=e},expression:"adSearchInput"}}),t._v(" "),s("label",{attrs:{for:"advertStatusFilter"}},[t._v("Status:")]),t._v(" "),s("b-form-select",{attrs:{id:"advertStatusFilter",options:t.tripStatuses},model:{value:t.tripStatus,callback:function(e){t.tripStatus=e},expression:"tripStatus"}})],1)],1)],1),t._v(" "),s("b-col",{staticClass:"mx-2"},[s("b-row",[s("h2",{staticClass:"mx-auto",staticStyle:{width:"82px"}},[t._v("Drivers")])]),t._v(" "),s("b-row",{staticClass:"form-group"},[s("b-form-input",{staticClass:"my-2",attrs:{placeholder:"Search"},model:{value:t.driverSearchInput,callback:function(e){t.driverSearchInput=e},expression:"driverSearchInput"}})],1)],1),t._v(" "),s("b-col",[s("b-row",[s("h2",{staticClass:"mx-auto",staticStyle:{width:"127 px"}},[t._v("Passengers")])]),t._v(" "),s("b-row",[s("b-form-input",{staticClass:"my-2",attrs:{placeholder:"Search"},model:{value:t.passengerSearchInput,callback:function(e){t.passengerSearchInput=e},expression:"passengerSearchInput"}})],1)],1)],1),t._v(" "),s("b-row",[s("b-col",[s("b-row",[s("b-list-group",{staticClass:"w-100"},t._l(t.filteredTrips,function(e){return s("b-list-group-item",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"advertCollapse"+e.id,expression:"'advertCollapse' + trip.id"}],key:e.id,staticClass:"text-center",attrs:{href:"#"}},[s("span",{staticClass:"font-weight-bold"},[t._v(t._s(e.title))]),t._v(" "),s("b-collapse",{attrs:{accordion:"advert-accordion",id:"advertCollapse"+e.id}},[s("table",{staticClass:"table"},[s("tbody",[s("tr",{attrs:{scope:"row"}},[s("th",[t._v("Created by")]),t._v(" "),s("td",[t._v(t._s(e.driverUsername))])]),t._v(" "),s("tr",[s("th",{attrs:{scope:"row"}},[t._v("Date and time")]),t._v(" "),s("td",[t._v(t._s(e.startTime))])]),t._v(" "),s("tr",[s("th",{attrs:{scope:"row"}},[t._v("Starting at")]),t._v(" "),s("td",[t._v(t._s(e.startLocation))])]),t._v(" "),s("tr",[s("th",[t._v("Ending at")]),t._v(" "),s("td",[t._v(t._s(e.endLocation))])]),t._v(" "),s("tr",[s("th",[t._v("Seats remaining")]),t._v(" "),s("td",[t._v(t._s(e.seatsAvailable))])]),t._v(" "),s("tr",[s("th",{attrs:{scope:"row"}},[t._v("Status")]),t._v(" "),s("td",[t._v(t._s(t.translateTripStatus(e.tripStatus)))])])])]),t._v(" "),null!==e.vehicle?s("div",[s("span",{staticClass:"font-weight-bold"},[t._v("Vehicle")]),t._v(" "),s("table",{staticClass:"table"},[s("tbody",[s("tr",[s("th",{attrs:{scope:"row"}},[t._v("Model")]),t._v(" "),s("td",[t._v(t._s(e.vehicle.model))])]),t._v(" "),s("tr",[s("th",{attrs:{scope:"row"}},[t._v("Colour")]),t._v(" "),s("td",[t._v(t._s(e.vehicle.color))])]),t._v(" "),s("tr",[s("th",{attrs:{scope:"row"}},[t._v("# of Seats")]),t._v(" "),s("td",[t._v(t._s(e.vehicle.maxSeat))])]),t._v(" "),s("tr",[s("th",{attrs:{scope:"row"}},[t._v("License Plate")]),t._v(" "),s("td",[t._v(t._s(e.vehicle.licencePlate))])])])])]):t._e(),t._v(" "),s("span",{staticClass:"font-weight-bold"},[t._v("Stops")]),t._v(" "),s("table",{staticClass:"table"},t._l(e.stops,function(e){return s("tbody",[s("tr",[s("th",{attrs:{scope:"row"}},[t._v("Location")]),t._v(" "),s("td",[t._v(t._s(e.stopName))])]),t._v(" "),s("tr",[s("th",{attrs:{scope:"row"}},[t._v("Price")]),t._v(" "),s("td",[t._v(t._s(e.price))])])])}))])],1)}))],1)],1),t._v(" "),s("b-col",{staticClass:"mx-2"},[s("b-row",[s("b-list-group",{staticClass:"w-100"},t._l(t.filteredDrivers,function(e){return s("b-list-group-item",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"driverCollapse"+e.id,expression:"'driverCollapse' + user.id"}],key:e.id,staticClass:"text-center",attrs:{href:"#"}},[s("div",{staticClass:"font-weight-bold"},[t._v(t._s(e.username))]),t._v(" "),s("b-collapse",{attrs:{accordion:"driver-accordion",id:"driverCollapse"+e.id}},[s("table",{staticClass:"table"},[s("tbody",[s("tr",[s("th",{attrs:{scope:"row"}},[t._v("Driver Status")]),t._v(" "),s("td",[t._v(t._s(e.status))])])])])])],1)}))],1)],1),t._v(" "),s("b-col",[s("b-row",[s("b-list-group",{staticClass:"w-100"},t._l(t.filteredPassengers,function(e){return s("b-list-group-item",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"passengerCollapse"+e.id,expression:"'passengerCollapse' + user.id"}],key:e.id,staticClass:"text-center",attrs:{href:"#"}},[s("div",{staticClass:"font-weight-bold"},[t._v(t._s(e.username))]),t._v(" "),s("b-collapse",{attrs:{accordion:"passenger-accordion",id:"passengerCollapse"+e.id}},[s("table",{staticClass:"table"},[s("tbody",[s("tr",[s("th",{attrs:{scope:"row"}},[t._v("Passenger Status")]),t._v(" "),s("td",[t._v(t._s(e.status))])])])])])],1)}))],1)],1)],1)],1)},n=[],r={render:a,staticRenderFns:n};e.a=r},"9M+g":function(t,e){},EV1k:function(t,e,s){"use strict";function a(t){s("s2GX")}var n=s("zBY4"),r=s("W+Kx"),i=s("VU/8"),o=a,c=i(n.a,r.a,!1,o,"data-v-fae14512",null);e.a=c.exports},FhoZ:function(t,e,s){(function(e){var a=s("o/zv");t.exports={build:{env:s("rBKV"),index:a.resolve(e,"../dist/index.html"),assetsRoot:a.resolve(e,"../dist"),assetsSubDirectory:"static",assetsPublicPath:"/",productionSourceMap:!0,productionGzip:!1,productionGzipExtensions:["js","css"],bundleAnalyzerReport:s.i({NODE_ENV:"production"}).npm_config_report},dev:{env:s("dhIU"),port:8087,host:"localhost",backendHost:"mysterious-hollows-14613.herokuapp.com",backendPort:80,autoOpenBrowser:!0,assetsSubDirectory:"static",assetsPublicPath:"/",proxyTable:{},cssSourceMap:!1}}}).call(e,"/")},GfHa:function(t,e){},HkhQ:function(t,e,s){"use strict";var a=s("mtWM"),n=s.n(a),r=s("SZn+"),i=s("IC97"),o=s("FhoZ"),c=(o.dev.host,o.dev.port,"https://"+o.dev.backendHost),l=n.a.create({baseURL:c,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Authorization","Access-Control-Expose-Headers":"Authorization",Authorization:r.a.fetch()}});e.a={name:"Ranking",components:{Datepicker:i.a},data:function(){return{startdate:"",enddate:"",drivers:[],passengers:[],trips:[],errormessage:"fine"}},created:function(){this.$emit("authenticated",!0),this.fetchdriver("1111-1-11 11:11:11","4444-5-11 11:11:11"),this.fetchpassenger("1111-1-11 11:11:11","4444-5-11 11:11:11"),this.fetchbestadv("1111-1-11 11:11:11","4444-5-11 11:11:11")},methods:{search:function(){""!=this.startdate&&""!=this.enddate||alert("One of the field is empty! "),this.fetchpassenger(this.startdate.getFullYear()+"-"+(this.startdate.getMonth()+1)+"-"+(this.startdate.getDate()-1)+" 00:00:00",this.enddate.getFullYear()+"-"+(this.enddate.getMonth()+1)+"-"+this.enddate.getDate()+" 23:59:59"),this.fetchdriver(this.startdate.getFullYear()+"-"+(this.startdate.getMonth()+1)+"-"+(this.startdate.getDate()-1)+" 00:00:00",this.enddate.getFullYear()+"-"+(this.enddate.getMonth()+1)+"-"+this.enddate.getDate()+" 23:59:59"),this.fetchbestadv(this.startdate.getFullYear()+"-"+(this.startdate.getMonth()+1)+"-"+(this.startdate.getDate()-1)+" 00:00:00",this.enddate.getFullYear()+"-"+(this.enddate.getMonth()+1)+"-"+this.enddate.getDate()+" 23:59:59")},fetchdriver:function(t,e){var s=this;l.post("/adv/get-top-drivers",{startTimeX:t,startTimeY:e}).then(function(t){s.drivers=t.data}).catch(function(t){console.log(t)})},fetchpassenger:function(t,e){var s=this;l.post("/map/get-top-passengers",{startTimeX:t,startTimeY:e}).then(function(t){s.passengers=t.data}).catch(function(t){console.log(t)})},fetchbestadv:function(t,e){var s=this;l.post("/adv/get-top-adv",{startTimeX:t,startTimeY:e}).then(function(t){s.trips=t.data}).catch(function(t){console.log(t)})},tofleet:function(){this.$router.replace({name:"Fleet"})}}}},I9wQ:function(t,e){},Id91:function(t,e){},M93x:function(t,e,s){"use strict";function a(t){s("gFHT")}var n=s("xJD8"),r=s("cMq+"),i=s("VU/8"),o=a,c=i(n.a,r.a,!1,o,null,null);e.a=c.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n=s("e6fC"),r=s("M93x"),i=s("YaEn"),o=s("qb6w"),c=(s.n(o),s("9M+g")),l=(s.n(c),s("kVq8"));s.n(l);a.a.use(n.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:i.a,template:"<App/>",components:{App:r.a}})},"SZn+":function(t,e,s){"use strict";e.a={fetch:function(){return window.localStorage.getItem("Authorization")},save:function(t){window.localStorage.setItem("Authorization",t)},clean:function(){window.localStorage.clear()}}},"W+Kx":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"login"}},[s("div",{staticClass:"ui two column middle aligned very relaxed stackable grid"},[s("div",{staticClass:"column"},[s("div",{staticClass:"ui form"},[s("div",{staticClass:"field"},[s("label",[t._v("username")]),t._v(" "),s("div",{staticClass:"ui left icon input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.input.username,expression:"input.username"}],attrs:{type:"text",id:"usernametext",name:"username",placeholder:"account username"},domProps:{value:t.input.username},on:{focus:function(e){t.disappear()},input:function(e){e.target.composing||t.$set(t.input,"username",e.target.value)}}}),t._v(" "),s("i",{staticClass:"user icon"}),t._v(" "),s("div",{staticClass:"ui left pointing red basic label",attrs:{id:"errormsg"}},[t._v("\n              Wrong username or password!\n            ")])])]),t._v(" "),s("div",{staticClass:"field"},[s("label",[t._v("password")]),t._v(" "),s("div",{staticClass:"ui left icon input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.input.password,expression:"input.password"}],attrs:{type:"password",id:"passwordtext",name:"password",placeholder:"Password"},domProps:{value:t.input.password},on:{input:function(e){e.target.composing||t.$set(t.input,"password",e.target.value)}}}),t._v(" "),s("i",{staticClass:"lock icon"})])]),t._v(" "),s("div",{staticClass:"ui blue submit button",attrs:{id:"loginbutton",type:"button"},on:{click:function(e){t.login()}}},[t._v("Login")])])]),t._v(" "),s("div",{staticClass:"center aligned column"},[s("div",{staticClass:"ui big green labeled icon button",on:{click:function(e){t.signupnotice()}}},[s("i",{staticClass:"signup icon"}),t._v("\n        Join\n      ")])])])])},n=[],r={render:a,staticRenderFns:n};e.a=r},YaEn:function(t,e,s){"use strict";var a=s("7+uW"),n=s("/ocq"),r=s("qSdX"),i=s("EV1k"),o=s("nBFr"),c=s("ZYaW");a.a.use(n.a),e.a=new n.a({routes:[{path:"/",redirect:{name:"login"}},{path:"/",name:"login",component:i.a},{path:"/hello",name:"Hello",component:r.a},{path:"/fleet",name:"Fleet",component:o.a},{path:"/ranking",name:"Ranking",component:c.a}]})},ZYaW:function(t,e,s){"use strict";function a(t){s("I9wQ")}var n=s("HkhQ"),r=s("xr4T"),i=s("VU/8"),o=a,c=i(n.a,r.a,!1,o,"data-v-1b73c387",null);e.a=c.exports},"cMq+":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"nav"}},[t.authenticated?s("router-link",{attrs:{to:"/login",replace:""},nativeOn:{click:function(e){t.logout()}}},[t._v("Logout")]):t._e()],1),t._v(" "),s("router-view",{on:{authenticated:t.setAuthenticated}})],1)},n=[],r={render:a,staticRenderFns:n};e.a=r},dhIU:function(t,e,s){var a=s("2cg0"),n=s("rBKV");t.exports=a(n,{NODE_ENV:'"development"'})},gFHT:function(t,e){},kVq8:function(t,e){},kaMa:function(t,e,s){"use strict";var a=s("mtWM"),n=s.n(a),r=s("FhoZ"),i="http://"+r.dev.host+":"+r.dev.port,o="https://"+r.dev.backendHost,c=n.a.create({baseURL:o,headers:{"Access-Control-Allow-Origin":i}});e.a={name:"fleet",data:function(){return{trips:[],tripStatus:"All",tripStatuses:["All","Registering Passengers","Registration Complete","On Route"],drivers:[],renderedDrivers:[],passengers:[],errorMessage:"",adSearchInput:"",driverSearchInput:"",passengerSearchInput:""}},methods:{toranking:function(){this.$router.replace({name:"Ranking"})},translateTripStatus:function(t){return u[t]}},created:function(){var t=this;c.get("/adv/active-advertisements").then(function(e){t.trips=e.data}).catch(function(t){console.log(t)}),c.get("/user/active-drivers").then(function(e){t.drivers=e.data}).catch(function(t){console.log(t)}),c.get("/user/active-passengers").then(function(e){t.passengers=e.data}).catch(function(t){console.log(t)})},computed:{filteredTrips:function(){var t=this.adSearchInput,e=this.tripStatus,s=this.tripStatuses;return this.trips.filter(function(a){if(e!==s[0]&&a.tripStatus!==l[e])return!1;if(null!==a.title.toLowerCase().match(t.toLowerCase()))return!0;for(var n=a.stops,r=0;r<n.length;r++)if(null!==n[r].stopName.toLowerCase().match(t.toLowerCase()))return!0;return!1})},filteredDrivers:function(){var t=this.driverSearchInput;return this.drivers.filter(function(e){if(null!==e.username.toLowerCase().match(t.toLowerCase()))return!0})},filteredPassengers:function(){var t=this.passengerSearchInput;return this.passengers.filter(function(e){if(null!==e.username.toLowerCase().match(t.toLowerCase()))return!0})}}};var l={"Registering Passengers":"REGISTERING","Registration Complete":"CLOSED","On Route":"ON_RIDE"},u={REGISTERING:"Registering Passengers",CLOSED:"Registration Complete",ON_RIDE:"On Route"}},nBFr:function(t,e,s){"use strict";function a(t){s("xWwS")}var n=s("kaMa"),r=s("8Jlj"),i=s("VU/8"),o=a,c=i(n.a,r.a,!1,o,null,null);e.a=c.exports},pMZz:function(t,e,s){"use strict";var a=s("SZn+");e.a={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}},mounted:function(){console.log(a.a.fetch())}}},qSdX:function(t,e,s){"use strict";function a(t){s("vpDX")}var n=s("pMZz"),r=s("y/hP"),i=s("VU/8"),o=a,c=i(n.a,r.a,!1,o,"data-v-c781e28c",null);e.a=c.exports},qb6w:function(t,e){},rBKV:function(t,e){t.exports={NODE_ENV:'"production"'}},s2GX:function(t,e){},vpDX:function(t,e){},xJD8:function(t,e,s){"use strict";e.a={name:"app",data:function(){return{authenticated:!0,mockAccount:{username:"hello",password:"password"}}},mounted:function(){this.authenticated||this.$router.replace({name:"login"})},methods:{setAuthenticated:function(t){this.authenticated=t},logout:function(){this.authenticated=!1,this.$router.replace({name:"login"})}}}},xWwS:function(t,e){},xr4T:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{staticClass:"p-4"},[s("b-row",[s("b-button",{attrs:{variant:"primary",id:"tofleetbutton",type:"button"},on:{click:function(e){t.tofleet()}}},[t._v("Fleet")])],1),t._v(" "),s("b-row",[s("b-col",[s("datepicker",{attrs:{id:"startdatepicker",placeholder:"StartTime",format:"yyyy-MM-dd","calendar-button-icon":"calendar icon","calendar-button":!0,"bootstrap-styling":!0,"full-month-name":!0},model:{value:t.startdate,callback:function(e){t.startdate=e},expression:"startdate"}}),t._v(" "),s("h4",{staticClass:"mx-auto",staticStyle:{width:"127px"}},[t._v("Top popular routes")]),t._v(" "),s("b-list-group",t._l(t.trips,function(e,a){return s("b-list-group-item",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"advertCollapse"+a,expression:"'advertCollapse' + index"}],key:a,staticClass:"text-center",attrs:{href:"#"}},[s("div",{staticClass:"font-weight-bold"},[t._v("From "+t._s(e.start)+" to "+t._s(e.end))]),t._v(" "),s("b-collapse",{attrs:{accordion:"advert-accordion",id:"advertCollapse"+a}},[s("table",{staticClass:"table"},[s("tbody",[s("tr",[s("th",{attrs:{scope:"row"}},[t._v("Trips completed on this route")]),t._v(" "),s("td",[t._v(t._s(e.count))])])])])])],1)}))],1),t._v(" "),s("b-col",[s("datepicker",{staticClass:"input",attrs:{id:"enddatepicker",placeholder:"EndTime",format:"yyyy-MM-dd","calendar-button-icon":"calendar icon","calendar-button":!0,"bootstrap-styling":!0,"full-month-name":!0},model:{value:t.enddate,callback:function(e){t.enddate=e},expression:"enddate"}}),t._v(" "),s("h4",{staticClass:"mx-auto",staticStyle:{width:"127px"}},[t._v("Top drivers")]),t._v(" "),s("b-list-group",t._l(t.drivers,function(e){return s("b-list-group-item",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"driverCollapse"+e.best.id,expression:"'driverCollapse' + driver.best.id"}],key:e.best.id,staticClass:"text-center",attrs:{href:"#"}},[s("div",{staticClass:"font-weight-bold"},[t._v(t._s(e.best.username))]),t._v(" "),s("b-collapse",{attrs:{accordion:"driver-accordion",id:"driverCollapse"+e.best.id}},[s("table",{staticClass:"table"},[s("tbody",[s("tr",[s("th",{attrs:{scope:"row"}},[t._v("Trips involved")]),t._v(" "),s("td",[t._v(t._s(e.count))])])])])])],1)}))],1),t._v(" "),s("b-col",[s("div",{staticClass:"ui animated button",attrs:{tabindex:"0",id:"searchbutton",type:"button"},on:{click:function(e){t.search()}}},[s("div",{staticClass:"visible content"},[t._v("Search")]),t._v(" "),s("div",{staticClass:"hidden content"},[s("i",{staticClass:"search icon"})])]),t._v(" "),s("h4",{staticClass:"mx-auto",staticStyle:{width:"127px"},attrs:{id:"topdriver"}},[t._v("Top passengers")]),t._v(" "),s("b-list-group",t._l(t.passengers,function(e){return s("b-list-group-item",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"passengerCollapse"+e.best.id,expression:"'passengerCollapse' + passenger.best.id"}],key:e.best.id,staticClass:"text-center",attrs:{href:"#"}},[s("div",{staticClass:"font-weight-bold"},[t._v(t._s(e.best.username))]),t._v(" "),s("b-collapse",{attrs:{accordion:"passenger-accordion",id:"passengerCollapse"+e.best.id}},[s("table",{staticClass:"table"},[s("tbody",[s("tr",[s("th",{attrs:{scope:"row"}},[t._v("Trips involved")]),t._v(" "),s("td",[t._v(t._s(e.count))])])])])])],1)}))],1)],1)],1)},n=[],r={render:a,staticRenderFns:n};e.a=r},"y/hP":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"login"}},[s("div",{staticClass:"ui two column middle aligned very relaxed stackable grid"},[s("div",{staticClass:"column"},[s("div",{staticClass:"ui form"},[s("div",{staticClass:"field"},[s("label",[t._v("username")]),t._v(" "),s("div",{staticClass:"ui left icon input"},[s("input",{attrs:{type:"text",placeholder:"account username"}}),t._v(" "),s("i",{staticClass:"user icon"})])]),t._v(" "),s("div",{staticClass:"field"},[s("label",[t._v("password")]),t._v(" "),s("div",{staticClass:"ui left icon input"},[s("input",{attrs:{type:"password"}}),t._v(" "),s("i",{staticClass:"lock icon"})])]),t._v(" "),s("div",{staticClass:"ui blue submit button"},[t._v("Login")])])]),t._v(" "),s("div",{staticClass:"center aligned column"},[s("div",{staticClass:"ui big green labeled icon button"},[s("i",{staticClass:"signup icon"}),t._v("\n      Join\n    ")])])])])}],r={render:a,staticRenderFns:n};e.a=r},zBY4:function(t,e,s){"use strict";var a=s("mtWM"),n=s.n(a),r=s("SZn+"),i=s("FhoZ"),o=(i.dev.host,i.dev.port,"http://"+i.dev.backendHost+":"+i.dev.backendPort),c=n.a.create({baseURL:o,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Authorization","Access-Control-Expose-Headers":"Authorization"}});e.a={name:"Login",mounted:function(){document.getElementById("errormsg").style.display="none"},data:function(){return{input:{username:"",password:""}}},methods:{disappear:function(){document.getElementById("errormsg").style.display="none"},signupnotice:function(){alert("Signup for admin is not open, please contact our company!")},login:function(){var t=this;c.post("/login",{username:t.input.username,password:t.input.password}).then(function(e){t.$emit("authenticated",!0),t.$router.replace({name:"Fleet"}),r.a.save(e.headers.authorization)}).catch(function(t){console.log(t),document.getElementById("errormsg").style.display="block"})}}}},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.85234b1903fba040b553.js.map