(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-set-set"],{2115:function(t,e,i){"use strict";var l=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=l(i("5530")),n=i("2f62"),c={data:function(){return{}},methods:(0,a.default)((0,a.default)({},(0,n.mapMutations)(["logout"])),{},{navTo:function(t){this.$api.msg("跳转到".concat(t))},toLogout:function(){var t=this;uni.showModal({content:"确定要退出登录么",success:function(e){e.confirm&&(t.logout(),setTimeout((function(){uni.navigateBack()}),200))}})},switchChange:function(t){var e=t.detail.value?"打开":"关闭";this.$api.msg("".concat(e,"消息推送"))}})};e.default=c},"2d29":function(t,e,i){var l=i("546e");"string"===typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);var a=i("4f06").default;a("365f440a",l,!0,{sourceMap:!1,shadowMode:!1})},"403c":function(t,e,i){"use strict";var l;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return l}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"list-cell b-b m-t",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("个人资料")}}},[i("v-uni-text",{staticClass:"cell-tit"},[t._v("个人资料")]),i("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),i("v-uni-view",{staticClass:"list-cell b-b",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("收货地址")}}},[i("v-uni-text",{staticClass:"cell-tit"},[t._v("收货地址")]),i("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),i("v-uni-view",{staticClass:"list-cell",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("实名认证")}}},[i("v-uni-text",{staticClass:"cell-tit"},[t._v("实名认证")]),i("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),i("v-uni-view",{staticClass:"list-cell m-t"},[i("v-uni-text",{staticClass:"cell-tit"},[t._v("消息推送")]),i("v-uni-switch",{attrs:{checked:!0,color:"#fa436a"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"list-cell m-t b-b",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("清除缓存")}}},[i("v-uni-text",{staticClass:"cell-tit"},[t._v("清除缓存")]),i("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),i("v-uni-view",{staticClass:"list-cell b-b",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("关于Dcloud")}}},[i("v-uni-text",{staticClass:"cell-tit"},[t._v("关于Dcloud")]),i("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),i("v-uni-view",{staticClass:"list-cell"},[i("v-uni-text",{staticClass:"cell-tit"},[t._v("检查更新")]),i("v-uni-text",{staticClass:"cell-tip"},[t._v("当前版本 1.0.3")]),i("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),i("v-uni-view",{staticClass:"list-cell log-out-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toLogout.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cell-tit"},[t._v("退出登录")])],1)],1)},n=[]},"546e":function(t,e,i){var l=i("24fb");e=l(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-14348618]{background:#f8f8f8}.list-cell[data-v-14348618]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline;padding:%?20?% %?30?%;line-height:%?60?%;position:relative;background:#fff;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.list-cell.log-out-btn[data-v-14348618]{margin-top:%?40?%}.list-cell.log-out-btn .cell-tit[data-v-14348618]{color:#fa436a;text-align:center;margin-right:0}.list-cell.cell-hover[data-v-14348618]{background:#fafafa}.list-cell.b-b[data-v-14348618]:after{left:%?30?%}.list-cell.m-t[data-v-14348618]{margin-top:%?16?%}.list-cell .cell-more[data-v-14348618]{-webkit-align-self:baseline;align-self:baseline;font-size:%?32?%;color:#909399;margin-left:%?10?%}.list-cell .cell-tit[data-v-14348618]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?30?%;color:#303133;margin-right:%?10?%}.list-cell .cell-tip[data-v-14348618]{font-size:%?28?%;color:#909399}.list-cell uni-switch[data-v-14348618]{-webkit-transform:translateX(%?16?%) scale(.84);transform:translateX(%?16?%) scale(.84)}body.?%PAGE?%[data-v-14348618]{background:#f8f8f8}',""]),t.exports=e},8173:function(t,e,i){"use strict";i.r(e);var l=i("2115"),a=i.n(l);for(var n in l)"default"!==n&&function(t){i.d(e,t,(function(){return l[t]}))}(n);e["default"]=a.a},efb9:function(t,e,i){"use strict";i.r(e);var l=i("403c"),a=i("8173");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("fb16");var c,s=i("f0c5"),o=Object(s["a"])(a["default"],l["b"],l["c"],!1,null,"14348618",null,!1,l["a"],c);e["default"]=o.exports},fb16:function(t,e,i){"use strict";var l=i("2d29"),a=i.n(l);a.a}}]);