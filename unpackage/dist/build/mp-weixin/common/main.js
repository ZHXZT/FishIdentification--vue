(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{2139:function(t,e,o){"use strict";o.r(e);var n=o("5b01"),c=o.n(n);for(var a in n)"default"!==a&&function(t){o.d(e,t,(function(){return n[t]}))}(a);e["default"]=c.a},"4f85":function(t,e,o){"use strict";(function(t){o("7efa");var e=c(o("66fd")),n=c(o("77cb"));function c(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}e.default.config.productionTip=!1,n.default.mpType="app";var l=new e.default(i({},n.default));t(l).$mount()}).call(this,o("543d")["createApp"])},"5b01":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={globalData:{ipw:"wss://adl.seafishery.com/api/socket/web-socket",limit:0,timeout:1e4,timeoutObj:null,serverTimeoutObj:null,callback:function(){}},onLaunch:function(){console.log("App Launch"),this.linkSocket()},onShow:function(){},onHide:function(){},methods:{linkSocket:function(){var e=this;t.connectSocket({url:e.globalData.ipw,success:function(t){console.log(t),e.initEventHandle()},fail:function(t){console.log(t)}})},initEventHandle:function(){var e=this;t.onSocketMessage((function(t){"heartbeat"==t.data?(e.reset(),e.start()):e.globalData.callback(t)})),t.onSocketOpen((function(){console.log("WebSocket连接打开"),e.reset(),e.start()})),t.onSocketError((function(t){console.log("WebSocket连接打开失败"),e.reconnect()})),t.onSocketClose((function(t){console.log("WebSocket 已关闭！"),e.reconnect()}))},reconnect:function(){var t=this;t.lockReconnect||(t.lockReconnect=!0,clearTimeout(t.timer),t.globalData.limit<5&&(t.timer=setTimeout((function(){t.linkSocket(),t.lockReconnect=!1}),5e3),t.globalData.limit=t.globalData.limit+1))},reset:function(){var t=this;return clearTimeout(t.globalData.timeoutObj),clearTimeout(t.globalData.serverTimeoutObj),t},start:function(){var t=this;t.globalData.timeoutObj=setTimeout((function(){t.globalData.serverTimeoutObj=setTimeout((function(){wx.closeSocket()}),t.globalData.timeout)}),t.globalData.timeout)}}};e.default=o}).call(this,o("543d")["default"])},"77cb":function(t,e,o){"use strict";o.r(e);var n=o("2139");for(var c in n)"default"!==c&&function(t){o.d(e,t,(function(){return n[t]}))}(c);o("a7fe");var a,i,r,l,u=o("f0c5"),f=Object(u["a"])(n["default"],a,i,!1,null,null,null,!1,r,l);e["default"]=f.exports},"84f0":function(t,e,o){},a7fe:function(t,e,o){"use strict";var n=o("84f0"),c=o.n(n);c.a}},[["4f85","common/runtime","common/vendor"]]]);