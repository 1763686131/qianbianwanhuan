(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-edit-edit"],{"0019":function(t,e,n){"use strict";n.r(e);var i=n("296c"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"043f":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'.content[data-v-b947ed7a]{display:flex;align-items:center;justify-content:center}@font-face{font-family:jin;\n\t/** 阿里巴巴矢量图标库的字体库地址，可以替换自己的字体库地址 **/src:url(https://at.alicdn.com/t/font_1491431_6m7ltjo8wi.ttf) format("truetype")}.icon[data-v-b947ed7a]{font-family:jin!important;font-size:%?34?%}',""]),t.exports=e},"099f":function(t,e,n){"use strict";(function(t){function i(){return new Promise((function(t,e){uni.request({url:"https://restapi.amap.com/v3/ip?key=03b09423205ecb2da00369ff59a22eaa",success:function(e){var n="";n="string"==typeof e.data.province?e.data.province:"火星",t(n);var i={province:n,time:Date.now()};uni.setStorageSync("historyProvince",i)},fail:function(t){e(t)}})}))}n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.getImgSrc=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,n=[];return t.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/g,(function(t,e){n.push(e)})),n=n.slice(0,e),n},e.getProvince=function(){return new Promise((function(t,e){var n=uni.getStorageSync("historyProvince");n?Date.now()-n.time>36e5?i().then((function(e){t(e)})).catch((function(t){e(t)})):t(n.province):i().then((function(e){t(e)})).catch((function(t){e(t)}))}))},e.giveAvatar=function(t){var e,n,i;return null!==(e=null===(n=t.user_id[0])||void 0===n||null===(i=n.avatar_file)||void 0===i?void 0:i.url)&&void 0!==e?e:"../../static/logo.png"},e.giveName=function(t){return t.user_id[0].nickname||t.user_id[0].username||t.user_id[0].mobile||"请设置昵称"},n("ac1f"),n("5319"),n("14d9"),n("fb6a"),n("d3b7");t.database(),t.importObject("utilsObj",{customUI:!0})}).call(this,n("a9ff")["default"])},"19b1":function(t,e,n){"use strict";var i=n("7783"),o=n.n(i);o.a},"1f10":function(t,e,n){"use strict";n.r(e);var i=n("b8ba"),o=n("8e8a");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("fb95");var s=n("f0c5"),r=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"4ceb3063",null,!1,i["a"],void 0);e["default"]=r.exports},"296c":function(t,e,n){"use strict";(function(t){n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("5530"));n("fb6a");var a=i(n("1f10")),s=n("099f"),r=t.database(),c={name:"edit",components:{jinEdit:a.default},data:function(){return{artobj:{title:"",content:"",dispalytext:"",picurls:"",province:""}}},onLoad:function(){var t=this;(0,s.getProvince)().then((function(e){t.artobj.province=e}))},methods:{editOk:function(t){this.artobj.content=t.html,this.artobj.dispalytext=t.text.slice(0,50),this.artobj.picurls=(0,s.getImgSrc)(t.html),t.isPublic?(uni.showLoading({title:"发布中..."}),this.adddata()):uni.showToast({title:"暂未开放，期待后续更新"})},adddata:function(){r.collection("qianhuan-news-articles").add((0,o.default)({},this.artobj)).then((function(t){uni.showToast({title:"发布成功,系统审核中.."}),setTimeout((function(){uni.reLaunch({url:"/pages/forum/forum"})}),800)}))}}};e.default=c}).call(this,n("a9ff")["default"])},"2c16":function(t,e,n){var i=n("bbb3");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("010b65a0",i,!0,{sourceMap:!1,shadowMode:!1})},"57b3":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */[data-v-00128420] .ql-blank::before{font-style:normal;color:#e0e0e0}.edit[data-v-00128420]{padding:%?30?%}.edit .title uni-input[data-v-00128420]{height:%?120?%;font-size:%?46?%;border-bottom:1px solid #e4e4e4;margin-bottom:%?30?%;color:#000}.edit .title .placeholderClass[data-v-00128420]{color:#e0e0e0}.edit .content[data-v-00128420] .tool-view{width:97%;padding-right:%?20?%}.edit .content .myEdit[data-v-00128420]{height:calc(100vh - %?400?%);margin-bottom:%?10?%}.edit .tools[data-v-00128420]{width:100%;height:%?80?%;background:#fff;border-top:%?1?% solid #f4f4f4;position:fixed;left:0;bottom:0;display:flex;justify-content:space-around;align-items:center}.edit .tools .iconfont[data-v-00128420]{font-size:%?36?%;color:#333}.edit .tools .iconfont.active[data-v-00128420]{color:#0199fe}',""]),t.exports=e},"585e":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{type:{type:String,default:"&#xe644;"},color:{type:String,default:"#666666"},fontSize:{type:String,default:"34rpx"}},methods:{toclick:function(){this.$emit("click")}}};e.default=i},"59f4":function(t,e,n){var i=n("043f");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("5c746c12",i,!0,{sourceMap:!1,shadowMode:!1})},"5a14":function(t,e,n){"use strict";n.r(e);var i=n("dae6"),o=n("0019");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("19b1");var s=n("f0c5"),r=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"00128420",null,!1,i["a"],void 0);e["default"]=r.exports},7783:function(t,e,n){var i=n("57b3");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("0ad7bb3c",i,!0,{sourceMap:!1,shadowMode:!1})},"7c1b":function(t,e,n){"use strict";n.r(e);var i=n("585e"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"8e8a":function(t,e,n){"use strict";n.r(e);var i=n("f691"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"92e5":function(t,e,n){"use strict";n.r(e);var i=n("ae69"),o=n("7c1b");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("c3a2");var s=n("f0c5"),r=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"b947ed7a",null,!1,i["a"],void 0);e["default"]=r.exports},ae69:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"icon",style:{color:t.color,fontSize:t.fontSize},domProps:{innerHTML:t._s(t.type)},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toclick.apply(void 0,arguments)}}})],1)},o=[]},b8ba:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container",style:{height:t.height}},[n("v-uni-editor",{ref:"editot",staticClass:"ql-container",attrs:{placeholder:t.placeholder,"show-img-size":!0,"show-img-toolbar":!0,"show-img-resize":!0,id:"editor"},on:{ready:function(e){arguments[0]=e=t.$handleEvent(e),t.onEditorReady.apply(void 0,arguments)},statuschange:function(e){arguments[0]=e=t.$handleEvent(e),t.statuschange.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.editFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.editBlur.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"tool-view"},[n("v-uni-view",{staticClass:"font-more",style:{height:t.showMoreTool?"100rpx":0}},[n("jinIcon",{staticClass:"single",attrs:{type:"&#xe6e7;","font-size":"44rpx",title:"加粗",color:t.showBold?t.activeColor:"#666666"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setBold.apply(void 0,arguments)}}}),n("jinIcon",{staticClass:"single",attrs:{type:"&#xe6fe;","font-size":"44rpx",title:"斜体",color:t.showItalic?t.activeColor:"#666666"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setItalic.apply(void 0,arguments)}}}),n("jinIcon",{staticClass:"single",attrs:{type:"&#xe6f8;","font-size":"44rpx",title:"分割线",color:t.showIns?t.activeColor:"#666666"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setIns.apply(void 0,arguments)}}}),n("jinIcon",{staticClass:"single",attrs:{type:"&#xe6e3;","font-size":"44rpx",title:"标题",color:t.showHeader?t.activeColor:"#666666"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setHeader.apply(void 0,arguments)}}}),n("jinIcon",{staticClass:"single",attrs:{type:"&#xe6f1;","font-size":"44rpx",title:"居中",color:t.showCenter?t.activeColor:"#666666"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setCenter.apply(void 0,arguments)}}}),n("jinIcon",{staticClass:"single",attrs:{type:"&#xe6ed;","font-size":"44rpx",title:"居右",color:t.showRight?t.activeColor:"#666666"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setRight.apply(void 0,arguments)}}})],1),t.showSettingLayer?n("v-uni-view",{staticClass:"setting-layer-mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showSetting.apply(void 0,arguments)}}}):t._e(),t.showSettingLayer?n("v-uni-view",{staticClass:"setting-layer"},[n("v-uni-view",{staticClass:"single",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.release(!0)}}},[n("jinIcon",{staticClass:"icon",attrs:{type:"&#xe639;"}}),n("v-uni-view",[t._v("公开发布")])],1),n("v-uni-view",{staticClass:"single",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.release(!1)}}},[n("jinIcon",{staticClass:"icon",attrs:{type:"&#xe655;"}}),n("v-uni-view",[t._v("暂时保存")])],1)],1):t._e(),n("v-uni-view",{staticClass:"tool"},[n("jinIcon",{staticClass:"single",attrs:{type:"&#xe6f3;","font-size":"44rpx",title:"插入图片"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.insertImage.apply(void 0,arguments)}}}),n("jinIcon",{staticClass:"single",attrs:{type:"&#xe6f9;","font-size":"44rpx",title:"修改文字样式",color:t.showMoreTool?t.activeColor:"#666666"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showMore.apply(void 0,arguments)}}}),n("jinIcon",{staticClass:"single",attrs:{type:"&#xe6eb;","font-size":"44rpx",title:"分割线"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.insertDivider.apply(void 0,arguments)}}}),n("jinIcon",{staticClass:"single",attrs:{type:"&#xe6e8;","font-size":"44rpx",title:"撤销"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.undo.apply(void 0,arguments)}}}),n("jinIcon",{staticClass:"single",attrs:{type:"&#xe705;","font-size":"44rpx",title:"重做"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.redo.apply(void 0,arguments)}}}),n("jinIcon",{staticClass:"single",attrs:{type:"&#xeb8a;","font-size":"44rpx",title:"设置"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showSetting.apply(void 0,arguments)}}})],1)],1)],1)},o=[]},bbb3:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".container[data-v-4ceb3063]{box-sizing:border-box;display:flex;flex-direction:column;height:100%;box-sizing:border-box\n\t/* padding-top: 30rpx; */}.ql-container[data-v-4ceb3063]{line-height:150%;font-size:%?34?%;width:100%;background:#fff;width:calc(100% - %?60?%);margin:0 auto;flex:1;box-sizing:border-box;margin-top:%?30?%\n\t/* padding-bottom: 5rpx; */}.tool-view[data-v-4ceb3063]{width:100vw;background:#eee\n\t/* margin-top: 20px; */}.tool[data-v-4ceb3063]{height:%?100?%;display:flex;align-items:center;justify-content:space-around;width:100%}.font-more[data-v-4ceb3063]{display:flex;align-items:center;justify-content:space-around;width:100%;background:#ebebeb;overflow:hidden;transition:all .15s}.setting-layer[data-v-4ceb3063]{position:absolute;bottom:%?100?%;background:#fff;width:%?250?%;right:%?20?%;box-shadow:0 2px 8px rgba(0,0,0,.15);border-radius:%?8?%}.setting-layer .single[data-v-4ceb3063]{height:%?80?%;font-size:%?32?%;padding:0 %?30?%;display:flex;align-items:center;line-height:%?80?%;flex-direction:row;color:#666}.setting-layer .single .icon[data-v-4ceb3063]{margin-right:%?20?%}.setting-layer-mask[data-v-4ceb3063]{position:fixed;left:0;top:0;width:100vw;height:100vh;background:transparent}",""]),t.exports=e},c3a2:function(t,e,n){"use strict";var i=n("59f4"),o=n.n(i);o.a},dae6:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"edit"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-input",{attrs:{type:"text",placeholder:"请输入完整的标题","placeholder-class":"placeholderClass"},model:{value:t.artobj.title,callback:function(e){t.$set(t.artobj,"title",e)},expression:"artobj.title"}})],1),n("v-uni-view",{staticClass:"content"},[n("jinEdit",{staticClass:"myEdit",attrs:{placeholder:"请输入内容",height:""},on:{editOk:function(e){arguments[0]=e=t.$handleEvent(e),t.editOk.apply(void 0,arguments)}}})],1)],1)},o=[]},f691:function(t,e,n){"use strict";(function(t){n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("c7eb")),a=i(n("b85c")),s=i(n("1da1"));n("ac1f"),n("baa5");var r=i(n("92e5")),c={props:{showImgSize:{type:Boolean,default:!1},showImgToolbar:{type:Boolean,default:!1},showImgResize:{type:Boolean,default:!1},placeholder:{type:String,default:"开始输入..."},uploadFileUrl:{type:String,default:"#"},fileKeyName:{type:String,default:"file"},header:{type:Object},html:{type:String},height:{type:String,default:"100vh"}},computed:{},data:function(){return{showMoreTool:!1,showBold:!1,showItalic:!1,showIns:!1,showHeader:!1,showCenter:!1,showRight:!1,showSettingLayer:!1,activeColor:"#F56C6C"}},components:{jinIcon:r.default},mounted:function(){},methods:{onEditorReady:function(t){var e=this;uni.createSelectorQuery().in(this).select(".ql-container").fields({size:!0,context:!0},(function(t){e.editorCtx=t.context,e.editorCtx.setContents({html:e.html})})).exec()},undo:function(){this.editorCtx.undo()},insertImage:function(){var e=this;uni.chooseImage({count:9,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(){var n=(0,s.default)((0,o.default)().mark((function n(i){var s,r,c,l,d,u;return(0,o.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:s=i.tempFiles,uni.showLoading({title:"正在上传中..."}),r=(0,a.default)(s);try{for(r.s();!(c=r.n()).done;)l=c.value,d=l.path.substring(l.path.lastIndexOf(".")),u=Date.now()+""+String(Math.random()).substr(3,6)+d,t.uploadFile({filePath:l.path,cloudPath:l.name||u}).then((function(t){e.editorCtx.insertImage({src:t.fileID,alt:"图片",success:function(t){}}),uni.hideLoading()}))}catch(o){r.e(o)}finally{r.f()}case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()})},insertDivider:function(){this.editorCtx.insertDivider()},redo:function(){this.editorCtx.redo()},showMore:function(){this.showMoreTool=!this.showMoreTool,this.editorCtx.setContents()},setBold:function(){this.showBold=!this.showBold,this.editorCtx.format("bold")},setItalic:function(){this.showItalic=!this.showItalic,this.editorCtx.format("italic")},checkStatus:function(t,e,n){e.hasOwnProperty(t)?this[n]=!0:this[n]=!1},statuschange:function(t){var e=t.detail;this.checkStatus("bold",e,"showBold"),this.checkStatus("italic",e,"showItalic"),this.checkStatus("ins",e,"showIns"),this.checkStatus("header",e,"showHeader"),e.hasOwnProperty("align")?"center"==e.align?(this.showCenter=!0,this.showRight=!1):"right"==e.align?(this.showCenter=!1,this.showRight=!0):(this.showCenter=!1,this.showRight=!1):(this.showCenter=!1,this.showRight=!1)},setIns:function(){this.showIns=!this.showIns,this.editorCtx.format("ins")},setHeader:function(){this.showHeader=!this.showHeader,this.editorCtx.format("header",!!this.showHeader&&"H2")},setCenter:function(){this.showCenter=!this.showCenter,this.editorCtx.format("align",!!this.showCenter&&"center")},setRight:function(){this.showRight=!this.showRight,this.editorCtx.format("align",!!this.showRight&&"right")},showSetting:function(){this.showSettingLayer=!this.showSettingLayer},editFocus:function(t){return(0,s.default)((0,o.default)().mark((function t(){return(0,o.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},editBlur:function(t){},release:function(t){var e=this;this.showSettingLayer=!1,this.editorCtx.getContents({success:function(n){Object.assign(n,{isPublic:t}),e.$emit("editOk",n)}})}}};e.default=c}).call(this,n("a9ff")["default"])},fb95:function(t,e,n){"use strict";var i=n("2c16"),o=n.n(i);o.a}}]);