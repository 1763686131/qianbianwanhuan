(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-detail-detail~pages-forum-forum~pages-self-self"],{"0553":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-b2a05bc2], uni-scroll-view[data-v-b2a05bc2], uni-swiper-item[data-v-b2a05bc2]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-overlay[data-v-b2a05bc2]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.7)}',""]),t.exports=e},"0c78":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var n={props:{show:{type:Boolean,default:uni.$u.props.overlay.show},zIndex:{type:[String,Number],default:uni.$u.props.overlay.zIndex},duration:{type:[String,Number],default:uni.$u.props.overlay.duration},opacity:{type:[String,Number],default:uni.$u.props.overlay.opacity}}};e.default=n},"106c":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={fade:{enter:{opacity:0},"enter-to":{opacity:1},leave:{opacity:1},"leave-to":{opacity:0}},"fade-up":{enter:{opacity:0,transform:"translateY(100%)"},"enter-to":{opacity:1,transform:"translateY(0)"},leave:{opacity:1,transform:"translateY(0)"},"leave-to":{opacity:0,transform:"translateY(100%)"}},"fade-down":{enter:{opacity:0,transform:"translateY(-100%)"},"enter-to":{opacity:1,transform:"translateY(0)"},leave:{opacity:1,transform:"translateY(0)"},"leave-to":{opacity:0,transform:"translateY(-100%)"}},"fade-left":{enter:{opacity:0,transform:"translateX(-100%)"},"enter-to":{opacity:1,transform:"translateY(0)"},leave:{opacity:1,transform:"translateY(0)"},"leave-to":{opacity:0,transform:"translateX(-100%)"}},"fade-right":{enter:{opacity:0,transform:"translateX(100%)"},"enter-to":{opacity:1,transform:"translateY(0)"},leave:{opacity:1,transform:"translateY(0)"},"leave-to":{opacity:0,transform:"translateX(100%)"}},"slide-up":{enter:{transform:"translateY(100%)"},"enter-to":{transform:"translateY(0)"},leave:{transform:"translateY(0)"},"leave-to":{transform:"translateY(100%)"}},"slide-down":{enter:{transform:"translateY(-100%)"},"enter-to":{transform:"translateY(0)"},leave:{transform:"translateY(0)"},"leave-to":{transform:"translateY(-100%)"}},"slide-left":{enter:{transform:"translateX(-100%)"},"enter-to":{transform:"translateY(0)"},leave:{transform:"translateY(0)"},"leave-to":{transform:"translateX(-100%)"}},"slide-right":{enter:{transform:"translateX(100%)"},"enter-to":{transform:"translateY(0)"},leave:{transform:"translateY(0)"},"leave-to":{transform:"translateX(100%)"}},zoom:{enter:{transform:"scale(0.95)"},"enter-to":{transform:"scale(1)"},leave:{transform:"scale(1)"},"leave-to":{transform:"scale(0.95)"}},"fade-zoom":{enter:{opacity:0,transform:"scale(0.95)"},"enter-to":{opacity:1,transform:"scale(1)"},leave:{opacity:1,transform:"scale(1)"},"leave-to":{opacity:0,transform:"scale(0.95)"}}}},"1ef4":function(t,e,a){"use strict";a.r(e);var n=a("b367"),r=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},2062:function(t,e,a){var n=a("0553");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("46ead3a5",n,!0,{sourceMap:!1,shadowMode:!1})},"221d":function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("c7eb")),i=n(a("1da1"));a("d3b7"),a("99af");n(a("106c"));var o=function(t){return{enter:"u-".concat(t,"-enter u-").concat(t,"-enter-active"),"enter-to":"u-".concat(t,"-enter-to u-").concat(t,"-enter-active"),leave:"u-".concat(t,"-leave u-").concat(t,"-leave-active"),"leave-to":"u-".concat(t,"-leave-to u-").concat(t,"-leave-active")}},s={methods:{clickHandler:function(){this.$emit("click")},vueEnter:function(){var t=this,e=o(this.mode);this.status="enter",this.$emit("beforeEnter"),this.inited=!0,this.display=!0,this.classes=e.enter,this.$nextTick((0,i.default)((0,r.default)().mark((function a(){return(0,r.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,uni.$u.sleep(20);case 2:t.$emit("enter"),t.transitionEnded=!1,t.$emit("afterEnter"),t.classes=e["enter-to"];case 6:case"end":return a.stop()}}),a)}))))},vueLeave:function(){var t=this;if(this.display){var e=o(this.mode);this.status="leave",this.$emit("beforeLeave"),this.classes=e.leave,this.$nextTick((function(){t.transitionEnded=!1,t.$emit("leave"),setTimeout(t.onTransitionEnd,t.duration),t.classes=e["leave-to"]}))}},onTransitionEnd:function(){this.transitionEnded||(this.transitionEnded=!0,this.$emit("leave"===this.status?"afterLeave":"afterEnter"),!this.show&&this.display&&(this.display=!1,this.inited=!1))}}};e.default=s},"245d":function(t,e,a){"use strict";a.r(e);var n=a("9585"),r=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},"328a":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.inited?a("v-uni-view",{ref:"u-transition",staticClass:"u-transition",class:t.classes,style:[t.mergeStyle],on:{touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.noop.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},r=[]},"51e1":function(t,e,a){"use strict";var n=a("64aa"),r=a.n(n);r.a},5489:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var n={props:{show:{type:Boolean,default:uni.$u.props.transition.show},mode:{type:String,default:uni.$u.props.transition.mode},duration:{type:[String,Number],default:uni.$u.props.transition.duration},timingFunction:{type:String,default:uni.$u.props.transition.timingFunction}}};e.default=n},"64aa":function(t,e,a){var n=a("7c72");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("65a9a478",n,!0,{sourceMap:!1,shadowMode:!1})},"7c72":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-a75f7a08], uni-scroll-view[data-v-a75f7a08], uni-swiper-item[data-v-a75f7a08]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}\n/**\n * vue版本动画内置的动画模式有如下：\n * fade：淡入\n * zoom：缩放\n * fade-zoom：缩放淡入\n * fade-up：上滑淡入\n * fade-down：下滑淡入\n * fade-left：左滑淡入\n * fade-right：右滑淡入\n * slide-up：上滑进入\n * slide-down：下滑进入\n * slide-left：左滑进入\n * slide-right：右滑进入\n */.u-fade-enter-active[data-v-a75f7a08],\n.u-fade-leave-active[data-v-a75f7a08]{transition-property:opacity}.u-fade-enter[data-v-a75f7a08],\n.u-fade-leave-to[data-v-a75f7a08]{opacity:0}.u-fade-zoom-enter[data-v-a75f7a08],\n.u-fade-zoom-leave-to[data-v-a75f7a08]{-webkit-transform:scale(.95);transform:scale(.95);opacity:0}.u-fade-zoom-enter-active[data-v-a75f7a08],\n.u-fade-zoom-leave-active[data-v-a75f7a08]{transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}.u-fade-down-enter-active[data-v-a75f7a08],\n.u-fade-down-leave-active[data-v-a75f7a08],\n.u-fade-left-enter-active[data-v-a75f7a08],\n.u-fade-left-leave-active[data-v-a75f7a08],\n.u-fade-right-enter-active[data-v-a75f7a08],\n.u-fade-right-leave-active[data-v-a75f7a08],\n.u-fade-up-enter-active[data-v-a75f7a08],\n.u-fade-up-leave-active[data-v-a75f7a08]{transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform}.u-fade-up-enter[data-v-a75f7a08],\n.u-fade-up-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0}.u-fade-down-enter[data-v-a75f7a08],\n.u-fade-down-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);opacity:0}.u-fade-left-enter[data-v-a75f7a08],\n.u-fade-left-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);opacity:0}.u-fade-right-enter[data-v-a75f7a08],\n.u-fade-right-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:0}.u-slide-down-enter-active[data-v-a75f7a08],\n.u-slide-down-leave-active[data-v-a75f7a08],\n.u-slide-left-enter-active[data-v-a75f7a08],\n.u-slide-left-leave-active[data-v-a75f7a08],\n.u-slide-right-enter-active[data-v-a75f7a08],\n.u-slide-right-leave-active[data-v-a75f7a08],\n.u-slide-up-enter-active[data-v-a75f7a08],\n.u-slide-up-leave-active[data-v-a75f7a08]{transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.u-slide-up-enter[data-v-a75f7a08],\n.u-slide-up-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.u-slide-down-enter[data-v-a75f7a08],\n.u-slide-down-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.u-slide-left-enter[data-v-a75f7a08],\n.u-slide-left-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.u-slide-right-enter[data-v-a75f7a08],\n.u-slide-right-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.u-zoom-enter-active[data-v-a75f7a08],\n.u-zoom-leave-active[data-v-a75f7a08]{transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.u-zoom-enter[data-v-a75f7a08],\n.u-zoom-leave-to[data-v-a75f7a08]{-webkit-transform:scale(.95);transform:scale(.95)}',""]),t.exports=e},"8b7f":function(t,e,a){"use strict";(function(t){a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.store=e.mutations=void 0;var r=n(a("c7eb")),i=n(a("5530")),o=n(a("1da1"));a("b64b"),a("d3b7"),a("159b"),a("99af");var s=n(a("7ec6")),u=n(a("987a")),d=n(a("e143")),l=t.importObject("uni-id-co"),f=t.database(),c=f.collection("uni-id-users"),v=uni.getStorageSync("uni-id-pages-userInfo")||{},p=t.getCurrentUserInfo().tokenExpired-Date.now(),m={userInfo:v,hasLogin:0!=Object.keys(v).length&&p>0},h={updateUserInfo:function(){var e=arguments,a=this;return(0,o.default)((0,r.default)().mark((function n(){var o,s,u,d;return(0,r.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(o=e.length>0&&void 0!==e[0]&&e[0],!o){n.next=5;break}c.where("_id==$env.uid").update(o).then((function(t){t.result.updated?(uni.showToast({title:"更新成功",icon:"none",duration:3e3}),a.setUserInfo(o)):uni.showToast({title:"没有改变",icon:"none",duration:3e3})})),n.next=20;break;case 5:return s=t.importObject("uni-id-co",{customUI:!0}),n.prev=6,n.next=9,c.where("'_id' == $cloudEnv_uid").field("mobile,nickname,username,email,avatar_file").get();case 9:return u=n.sent,n.next=12,s.getRealNameInfo();case 12:d=n.sent,a.setUserInfo((0,i.default)((0,i.default)({},u.result.data[0]),{},{realNameAuth:d})),n.next=20;break;case 16:n.prev=16,n.t0=n["catch"](6),a.setUserInfo({},{cover:!0}),console.error(n.t0.message,n.t0.errCode);case 20:case"end":return n.stop()}}),n,null,[[6,16]])})))()},setUserInfo:function(t){var e=arguments;return(0,o.default)((0,r.default)().mark((function a(){var n,i,o;return(0,r.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.length>1&&void 0!==e[1]?e[1]:{cover:!1},i=n.cover,o=i?t:Object.assign(y.userInfo,t),y.userInfo=Object.assign({},o),y.hasLogin=0!=Object.keys(y.userInfo).length,uni.setStorage({key:"uni-id-pages-userInfo",data:y.userInfo}),a.abrupt("return",t);case 6:case"end":return a.stop()}}),a)})))()},logout:function(){var e=this;return(0,o.default)((0,r.default)().mark((function a(){return(0,r.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!(t.getCurrentUserInfo().tokenExpired>Date.now())){a.next=9;break}return a.prev=1,a.next=4,l.logout();case 4:a.next=9;break;case 6:a.prev=6,a.t0=a["catch"](1),console.error(a.t0);case 9:uni.removeStorageSync("uni_id_token"),uni.setStorageSync("uni_id_token_expired",0),uni.redirectTo({url:"/pages/self/self"}),uni.$emit("uni-id-pages-logout"),e.setUserInfo({},{cover:!0});case 14:case"end":return a.stop()}}),a,null,[[1,6]])})))()},loginBack:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.uniIdRedirectUrl,a=void 0===e?"":e,n=0,r=getCurrentPages();if(r.forEach((function(t,e){"login"==r[r.length-e-1].route.split("/")[3]&&n++})),a)return uni.reLaunch({url:a});if("weixin"==t.loginType)return window.history.go(-3);if(n){var i=s.default.pages[0];return uni.reLaunch({url:"/".concat(i.path)})}uni.navigateBack({delta:n})},loginSuccess:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.showToast,a=void 0===e||e,n=t.toastText,r=void 0===n?"登录成功":n,i=t.autoBack,o=void 0===i||i,s=t.uniIdRedirectUrl,d=void 0===s?"":s,l=t.passwordConfirmed;if(a&&uni.showToast({title:r,icon:"none",duration:3e3}),this.updateUserInfo(),uni.$emit("uni-id-pages-login-success"),u.default.setPasswordAfterLogin&&!l)return uni.redirectTo({url:d?"/uni_modules/uni-id-pages/pages/userinfo/set-pwd/set-pwd?uniIdRedirectUrl=".concat(d,"&loginType=").concat(t.loginType):"/uni_modules/uni-id-pages/pages/userinfo/set-pwd/set-pwd?loginType=".concat(t.loginType),fail:function(t){console.log(t)}});o&&this.loginBack({uniIdRedirectUrl:d})}};e.mutations=h;var y=d.default.observable(m);e.store=y}).call(this,a("a9ff")["default"])},9585:function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("5530")),i=n(a("5489")),o=n(a("221d")),s={name:"u-transition",data:function(){return{inited:!1,viewStyle:{},status:"",transitionEnded:!1,display:!1,classes:""}},computed:{mergeStyle:function(){var t=this.viewStyle,e=this.customStyle;return(0,r.default)((0,r.default)({transitionDuration:"".concat(this.duration,"ms"),transitionTimingFunction:this.timingFunction},uni.$u.addStyle(e)),t)}},mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default,i.default],watch:{show:{handler:function(t){t?this.vueEnter():this.vueLeave()},immediate:!0}}};e.default=s},"987a":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={debug:!1,isAdmin:!1,loginTypes:["weixin","username","smsCode"],agreements:{serviceUrl:"https://xxx",privacyUrl:"https://xxx",scope:["register","login","realNameVerify"]},appid:{weixin:{h5:"xxxxxx",web:"xxxxxx"}},passwordStrength:"medium",setPasswordAfterLogin:!1}},a9a4:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var n={uTransition:a("fc09").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("u-transition",{attrs:{show:t.show,"custom-class":"u-overlay",duration:t.duration,"custom-style":t.overlayStyle},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler.apply(void 0,arguments)}}},[t._t("default")],2)},i=[]},b367:function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("0c78")),i={name:"u-overlay",mixins:[uni.$u.mpMixin,uni.$u.mixin,r.default],computed:{overlayStyle:function(){var t={position:"fixed",top:0,left:0,right:0,zIndex:this.zIndex,bottom:0,"background-color":"rgba(0, 0, 0, ".concat(this.opacity,")")};return uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}},methods:{clickHandler:function(){this.$emit("click")}}};e.default=i},bdcf:function(t,e,a){"use strict";var n=a("2062"),r=a.n(n);r.a},fb20:function(t,e,a){"use strict";a.r(e);var n=a("a9a4"),r=a("1ef4");for(var i in r)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("bdcf");var o=a("f0c5"),s=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"b2a05bc2",null,!1,n["a"],void 0);e["default"]=s.exports},fc09:function(t,e,a){"use strict";a.r(e);var n=a("328a"),r=a("245d");for(var i in r)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("51e1");var o=a("f0c5"),s=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"a75f7a08",null,!1,n["a"],void 0);e["default"]=s.exports}}]);