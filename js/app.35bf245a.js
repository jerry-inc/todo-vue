(function(e){function t(t){for(var a,o,i=t[0],c=t[1],d=t[2],l=0,u=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&u.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(t);while(u.length)u.shift()();return r.push.apply(r,d||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,o=1;o<s.length;o++){var i=s[o];0!==n[i]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=s[0]))}return e}var a={},o={app:0},n={app:0},r=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ad582877"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(e){var t=[],s={about:1};o[e]?t.push(o[e]):0!==o[e]&&s[e]&&t.push(o[e]=new Promise((function(t,s){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"a5e23e3f"}[e]+".css",n=c.p+a,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var d=r[i],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===a||l===n))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){d=u[i],l=d.getAttribute("data-href");if(l===a||l===n)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||n,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[e],f.parentNode.removeChild(f),s(r)},f.href=n;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){o[e]=0})));var a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,s){a=n[e]=[t,s]}));t.push(a[2]=r);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var u=new Error;d=function(t){l.onerror=l.onload=null,clearTimeout(f);var s=n[e];if(0!==s){if(s){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,s[1](u)}n[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(s,a,function(t){return e[t]}.bind(null,a));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/todo-vue/",c.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var u=0;u<d.length;u++)t(d[u]);var f=l;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0493":function(e,t,s){},"40f5":function(e,t,s){},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(e){var t=n(e);return s(t)}function n(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=n,e.exports=o,o.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t),s.d(t,"db",(function(){return E}));var a=s("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"components-layout-demo-basic"}},[a("a-layout",[a("a-layout-header",[a("div",{staticClass:"titleDiv"},[a("img",{staticClass:"logoImg",attrs:{alt:"Vue logo",src:s("cf05"),id:"vue-logo"}}),a("h1",{staticClass:"titleText"},[e._v("ToDo")])]),a("div",{staticClass:"titleMenuDiv"},[a("a-menu",{staticClass:"topNavMenu",attrs:{mode:"horizontal",theme:"dark"},model:{value:e.current,callback:function(t){e.current=t},expression:"current"}},[a("a-menu-item",{key:"app"},[a("router-link",{attrs:{to:"/"}},[a("a-icon",{attrs:{type:"check"}}),e._v(" ToDo App ")],1)],1),a("a-menu-item",{key:"about"},[a("router-link",{attrs:{to:"/about"}},[a("a-icon",{attrs:{type:"question"}}),e._v(" About ")],1)],1)],1)],1)]),a("a-layout-content",[a("router-view")],1),a("a-layout-footer",[e._v(" 2020 © Abdullah Jalil ")])],1)],1)},n=[],r={data:function(){return{current:[]}},methods:{setActiveMenu:function(e){this.current=[e]}},mounted:function(){var e="";e="/about"===window.location.pathname?"about":"app",this.setActiveMenu(e)}},i=r,c=s("2877"),d=Object(c["a"])(i,o,n,!1,null,null,null),l=d.exports,u=(s("d3b7"),s("e6cf"),s("8c4f")),f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home",style:e.homeDivStyle},[s("a-row",{staticClass:"contentRow",attrs:{type:"flex",justify:"center",align:"top"}},[s("a-col",{staticClass:"contentCol",attrs:{xs:22,md:8}},[s("to-do")],1)],1)],1)},m=[],b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a-row",{attrs:{type:"flex",justify:"center",align:"top"}},[s("a-col",{attrs:{span:22}},[s("div",{staticClass:"todoApp"},[s("div",{staticClass:"title"},[e._v("What do I need to do today?")]),s("a-form",{attrs:{form:e.form,"wrapper-col":{span:24}},on:{submit:e.handleSubmit}},[s("a-form-item",[s("a-row",{attrs:{gutter:4}},[s("a-col",{attrs:{span:20}},[s("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["todo",{rules:[{required:!0,message:"Enter a Task for Today!"}]}],expression:"[\n                  'todo',\n                  {\n                    rules: [\n                      { required: true, message: 'Enter a Task for Today!' }\n                    ]\n                  }\n                ]"}],attrs:{"allow-clear":""}})],1),s("a-col",{attrs:{span:4}},[s("a-button",{attrs:{type:"primary","html-type":"submit"}},[s("a-icon",{attrs:{type:"plus"}})],1)],1)],1)],1)],1),!1===e.ready?[s("div",{staticClass:"spinnerDiv"},[s("a-spin",{attrs:{tip:"Loading..."}},[s("a-icon",{staticStyle:{"font-size":"24px"},attrs:{slot:"indicator",type:"loading",spin:""},slot:"indicator"})],1)],1)]:[e.todoList&&e.todoList.length>0?s("div",[s("div",{staticClass:"title"},[e._v("Today, you've got to do...")]),s("a-list",{staticClass:"demo-loadmore-list",attrs:{"item-layout":"horizontal",size:"small","data-source":e.todoList,pagination:e.pagination},scopedSlots:e._u([{key:"renderItem",fn:function(t){return s("a-list-item",{},[s("div",{attrs:{slot:"actions"},slot:"actions"},[s("a-popconfirm",{attrs:{title:"Are you sure delete this task?","ok-text":"Yes","cancel-text":"No"},on:{confirm:function(s){return e.deleteItem(t.id)}}},[s("a-icon",{staticClass:"redColor",attrs:{type:"delete"}})],1)],1),s("a-list-item-meta",{attrs:{description:""}},[s("p",{attrs:{slot:"title"},slot:"title"},[e._v(" "+e._s(t.title)+" ")])])],1)}}],null,!1,2673508370)})],1):s("div",[s("a-empty")],1)]],2)])],1)},j=[],p={name:"ToDo",data:function(){return{form:this.$form.createForm(this,{name:"toDoForm"}),currentPage:1,todoList:[],pagination:{pageSize:5,total:1,size:"small"},ready:!1}},methods:{loadData:function(){var e=this;this.ready=!1,this.$store.dispatch("getListFromServer").then((function(){e.todoList=e.$store.getters.getList,e.pagination.total=e.todoList.length,e.ready=!0})).catch((function(e){this.$message.error("There was an error in Obtaining Data from Server"),console.error(e)}))},handleSubmit:function(e){e.preventDefault();var t=this;this.form.validateFields((function(e,s){e||E.collection("todo-list").add({title:s.todo,created_at:Date.now()}).then((function(e){e&&(t.$message.success("Item added to list"),t.myTodo="",t.form.resetFields(),t.loadData())})).catch((function(e){t.$message.error("There was an error in saving item."),console.log(e)}))}))},deleteItem:function(e){var t=this;e?E.collection("todo-list").doc(e).delete().then((function(){console.log("Document successfully deleted"),t.$message.success("Successfully deleted."),t.loadData()})).catch((function(e){t.$message.error("There was an error in deleting item."),console.error(e)})):(t.$message.error("There was an error in deleting item."),console.error("Invalid ID"))}},mounted:function(){},created:function(){this.loadData()},beforeDestroy:function(){}},h=p,g=(s("f119"),Object(c["a"])(h,b,j,!1,null,"5d3d7eda",null)),v=g.exports,y={name:"Home",data:function(){return{windowHeight:""}},components:{ToDo:v},computed:{homeDivStyle:function(){return"height: "+(this.windowHeight-64-69)+"px"}},methods:{setPageHeight:function(){this.windowHeight=JSON.parse(JSON.stringify(window.innerHeight))}},mounted:function(){window.addEventListener("resize",this.setPageHeight),this.setPageHeight()},beforeDestroy:function(){window.removeEventListener("resize",this.setPageHeight)}},w=y,k=Object(c["a"])(w,f,m,!1,null,null,null),z=k.exports;a["a"].use(u["a"]);var S=[{path:"/",name:"Home",component:z},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}}],_=new u["a"]({mode:"history",base:"/todo-vue/",routes:S}),x=_,D=(s("4160"),s("159b"),s("2f62"));a["a"].use(D["a"]);var T=new D["a"].Store({state:{todo:null},getters:{getList:function(e){return e.todo}},mutations:{getListFromServer:function(e,t){e.todo=t}},actions:{getListFromServer:function(e){return new Promise((function(t,s){var a=[];try{E.collection("todo-list").orderBy("created_at").onSnapshot((function(s){a=[],s.forEach((function(e){a.push({id:e.id,title:e.data().title})})),e.commit("getListFromServer",a),t()}))}catch(o){s()}}))}},modules:{}}),C=s("f23d"),L=s("2591");s("40f5");a["a"].config.productionTip=!1,a["a"].use(C["a"]);var O={apiKey:"AIzaSyAaMCidZIvZORi5cLeITouS2XG32BTf2fo",authDomain:"todo-vuejs-4016f.firebaseapp.com",projectId:"todo-vuejs-4016f",storageBucket:"todo-vuejs-4016f.appspot.com",messagingSenderId:"983332104429",appId:"1:983332104429:web:b7548a0e1c361c08d944e4",measurementId:"G-370EQ9HNQL"};L["a"].initializeApp(O),L["a"].analytics();var E=L["a"].firestore();new a["a"]({router:x,store:T,render:function(e){return e(l)}}).$mount("#app")},cf05:function(e,t,s){e.exports=s.p+"img/logo.82b9c7a5.png"},f119:function(e,t,s){"use strict";s("0493")}});