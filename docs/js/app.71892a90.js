(function(e){function t(t){for(var a,o,s=t[0],l=t[1],c=t[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/gradex/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("AppInfoDrawer"),n("GrapeBgDownloader")],1)},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"container",staticClass:"gradient-wrap"},[n("el-upload",{staticClass:"avatar-uploader",attrs:{drap:"",action:"","show-file-list":!1,"on-change":e.onFileChange,"auto-upload":!1,accept:"image/jpeg,image/png,application/x-bmp,image/gif"}},[e.imageUrl?[n("img",{staticClass:"avatar",attrs:{src:e.imageUrl}})]:[n("i",{staticClass:"el-icon-upload"}),n("div",{staticClass:"el-upload__text"},[e._v("\n        将图片文件拖到此处，或\n        "),n("em",[e._v("点击上传")])]),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("支持：.jpg / .png / .bmp / .gif 格式")])]],2),n("el-button",{directives:[{name:"show",rawName:"v-show",value:e.imageUrl,expression:"imageUrl"}],staticClass:"download-btn",on:{click:e.downloadBg}},[e._v("下载背景图片")]),n("el-button",{directives:[{name:"show",rawName:"v-show",value:e.imageUrl,expression:"imageUrl"}],staticClass:"download-btn",attrs:{type:"text"},on:{click:e.showHTMLCode}},[e._v("复制HTML代码")])],1)},s=[],l=(n("34ef"),n("28a5"),n("4917"),n("a481"),n("7f7f"),{data:function(){return{imageUrl:"",filename:""}},methods:{onFileChange:function(e,t){var n=e.name;this.filename=n.substring(0,n.lastIndexOf(".")),this.imageUrl=URL.createObjectURL(e.raw),setTimeout(function(){Grade(document.querySelectorAll(".gradient-wrap"))},200)},showHTMLCode:function(){var e=this.$refs["container"].style.backgroundImage;if(e){var t=screen.width<=screen.height?screen.width:screen.height;this.$alert('<div style="height: '.concat(t,"px; background-image: ").concat(e,'"></div>'),"HTML代码",{confirmButtonText:"确定",callback:function(e){}})}else this.$message.error("无法获取背景色， 请刷新重试")},downloadBg:function(){var e=this.$refs["container"].style.backgroundImage;if(e){e=e.replace("linear-gradient","");var t=e.substring(e.indexOf("rgb("),e.indexOf("0%")),n=e.substring(e.lastIndexOf("rgb("),e.indexOf("75%")),a=screen.width<=screen.height?screen.width:screen.height,r=document.createElement("canvas");r.width=a,r.height=a,r.style.display="none";var i=r.getContext("2d"),o=i.createRadialGradient(0,0,0,a/16,a/16,a);o.addColorStop(0,t),o.addColorStop(1,n),i.fillStyle=o,i.fillRect(0,0,a,a),this.saveAsImg(this.filename+"_bg.png",r.toDataURL())}else this.$message.error("无法获取背景色， 请刷新重试")},saveAsImg:function(e,t){var n=document.createElement("a");n.download=e,n.href=t;var a=navigator.userAgent,r=a.match(/MSIE\s([\d.]+)/)||a.match(/Trident\/.+?rv:(([\d.]+))/),i=a.match(/Edge\/([\d.]+)/);if("function"!==typeof MouseEvent||r||i)if(window.navigator.msSaveOrOpenBlob){var o=atob(t.split(",")[1]),s=o.length,l=new Uint8Array(s);while(s--)l[s]=o.charCodeAt(s);var c=new Blob([l]);window.navigator.msSaveOrOpenBlob(c,e)}else{var u='<body style="margin:0;"><img src="'+t+'" style="max-width:100%;" title="'+e+'" /></body>',d=window.open();d.document.write(u)}else{var f=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!1});n.dispatchEvent(f)}}}}),c=l,u=(n("9726"),n("2877")),d=Object(u["a"])(c,o,s,!1,null,null,null),f=d.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("i",{staticClass:"el-icon-info drawer-btn",on:{click:e.showDrawer}}),n("el-drawer",{attrs:{title:"关于 / 帮助","custom-class":"drawer-style",visible:e.drawer,direction:"btt"},on:{"update:visible":function(t){e.drawer=t}}},[n("h4",[e._v("如何使用?")]),n("p",[e._v("拖拽 / 上传一张图片，程序会自动读取图片的两个主色并将其设置为背景。")]),n("p",[e._v("你可以点击下载按钮，下载背景图片；")]),n("p",[e._v("也可以点击复制该背景颜色对应的HTML代码。")]),n("p",{staticClass:"copyright"},[e._v("\n      Github:\n      "),n("a",{attrs:{href:"https://github.com/jwenjian/gradex",target:"_blank"}},[e._v("jwenjian/gradex")])])])],1)},g=[],v={data:function(){return{drawer:!0}},methods:{showDrawer:function(){this.drawer=!0}}},h=v,w=(n("cb41"),Object(u["a"])(h,p,g,!1,null,null,null)),b=w.exports,m={name:"app",components:{AppInfoDrawer:b,GrapeBgDownloader:f}},y=m,_=(n("034f"),Object(u["a"])(y,r,i,!1,null,null,null)),x=_.exports,O=n("5c96"),j=n.n(O),C=(n("0fae"),n("512a")),k=n.n(C);a["default"].use(j.a),a["default"].config.productionTip=!1,window.Grade=k.a,new a["default"]({render:function(e){return e(x)}}).$mount("#app")},"64a9":function(e,t,n){},9726:function(e,t,n){"use strict";var a=n("ccb7"),r=n.n(a);r.a},b147:function(e,t,n){},cb41:function(e,t,n){"use strict";var a=n("b147"),r=n.n(a);r.a},ccb7:function(e,t,n){}});
//# sourceMappingURL=app.71892a90.js.map