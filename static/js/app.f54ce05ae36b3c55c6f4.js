webpackJsonp([1],{"3BMG":function(t,e){},"8Z9+":function(t,e){},JKkS:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},i,!1,function(t){n("8Z9+")},null,null).exports,o=n("/ocq"),r=(n("zyIk"),n("obbq")),l=(n("rs7v"),n("2s+L")),c=(n("36z6"),n("LROY")),u=n("6s2J"),p=n.n(u),d={data:function(){return{activeIndex:"1"}},mounted:function(){},methods:{handleSelect:function(t,e){console.log(t,e)}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[n("el-menu-item",{attrs:{index:"1"}},[t._v("handle center")]),t._v(" "),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[t._v("工作台")]),t._v(" "),n("el-menu-item",{attrs:{index:"2-1"}},[t._v("选项一")]),t._v(" "),n("el-menu-item",{attrs:{index:"2-2"}},[t._v("选项二")]),t._v(" "),n("el-menu-item",{attrs:{index:"2-3"}},[t._v("选项三")])],2)],1)],1)},staticRenderFns:[]};var h=n("VU/8")(d,f,!1,function(t){n("hx7O")},"data-v-02148733",null).exports;s.default.use(r.a).use(l.a).use(c.a).use(p.a);var v={name:"HelloWorld",components:{Header:h},data:function(){return{response:[],time:1}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.$http({method:"get",url:"https://zhihu-daily.leanapp.cn/api/v1/last-stories"}).then(function(e){t.response=t.response.concat(e.data.STORIES.stories),console.log(e)})},beforeData:function(){var t=this,e=new Date,n=e.getFullYear(),s=e.getMonth()+1,i=e.getDate();console.log(e.getDate()),s<9&&(s="0"+s),i<9&&(i="0"+i);var a=n+""+s+i-this.time;console.log(a),"20190601"!=a?this.$http({method:"get",url:"https://zhihu-daily.leanapp.cn/api/v1/before-stories/"+a}).then(function(e){t.response=t.response.concat(e.data.STORIES.stories),t.time++}):console.log("20190601")},linkto:function(t){this.$router.push({path:"/details/"+t})},infinite:function(t){var e=this;setTimeout(function(){e.beforeData(),t()},1e3)},refresh:function(){var t=this;this.response=[],this.time=1,setTimeout(function(){t.getData(),t.$refs.myscroller.finishPullToRefresh()},500)}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"hello"},[n("scroller",{ref:"myscroller",attrs:{"on-refresh":t.refresh,"on-infinite":t.infinite}},[n("Header"),t._v(" "),n("van-swipe",{staticClass:"swipe",attrs:{autoplay:3e3}},[n("van-swipe-item"),t._v(" "),n("van-swipe-item"),t._v(" "),n("van-swipe-item"),t._v(" "),n("van-swipe-item")],1),t._v(" "),t._l(t.response,function(e,s){return n("ul",{key:s,staticClass:"content"},[n("li",{attrs:{id:"linkto"},on:{click:function(n){return t.linkto(e.id)}}},[t._v(t._s(e.title))]),t._v(" "),n("img",{attrs:{src:e.images[0]}})])})],2)],1)])},staticRenderFns:[]};var _=n("VU/8")(v,m,!1,function(t){n("TvLQ")},"data-v-0272677a",null).exports,g={name:"newsDetails",data:function(){return{id:this.$route.params.id,content:""}},created:function(){var t=this;window.location.href.split(":")[3];this.$http({url:"https://zhihu-daily.leanapp.cn/api/v1/contents/"+this.id,method:"get"}).then(function(e){t.content=e.data.CONTENTS.body,console.log(e)})}},y={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content",domProps:{innerHTML:this._s(this.content)}},[this._v("\n    "+this._s(this.content)+"\n")])},staticRenderFns:[]};var w=n("VU/8")(g,y,!1,function(t){n("bIRD")},"data-v-fe6bca1c",null).exports;s.default.use(o.a);var $=new o.a({routes:[{path:"/",name:"HelloWorld",component:_},{path:"/details/:id",name:"details",component:w}]}),b=n("4gzT"),x=n.n(b),T=(n("JKkS"),n("Muz9")),D=n.n(T),R={install(t){t.prototype.open1=function(t){this.$message(t)},t.prototype.open2=function(t){this.$message({message:t,type:"success"})},t.prototype.open3=function(t){this.$message({message:t,type:"warning"})},t.prototype.open4=function(t){this.$message.error(t)}}};s.default.config.productionTip=!1,s.default.prototype.$http=D.a,s.default.use(x.a),s.default.use(R),new s.default({el:"#app",router:$,components:{App:a},template:"<App/>"})},NZHf:function(t,e){},ORbB:function(t,e){},TvLQ:function(t,e){},bIRD:function(t,e){},hx7O:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f54ce05ae36b3c55c6f4.js.map