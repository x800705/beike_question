(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-add-add"],{"0d42":function(n,t,a){"use strict";a.r(t);var i=a("9730"),e=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(n){a.d(t,n,(function(){return i[n]}))}(o);t["default"]=e.a},"3f44":function(n,t,a){"use strict";a.r(t);var i=a("fed0"),e=a("0d42");for(var o in e)["default"].indexOf(o)<0&&function(n){a.d(t,n,(function(){return e[n]}))}(o);a("a9d7");var u=a("828b"),c=Object(u["a"])(e["default"],i["b"],i["c"],!1,null,"1d01b162",null,!1,i["a"],void 0);t["default"]=c.exports},9730:function(n,t,a){"use strict";a("6a54");var i=a("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;i(a("165f"));var e={data:function(){return{que:"",a:"",b:"",c:"",d:"",ans:"",url:"http://154.12.26.163:5000/",radio_array:[!1,!1,!1,!1],columns:[["中国","美国","日本"]]}},methods:{gans:function(n){this.ans=n,this.radio_array=[!1,!1,!1,!1],this.radio_array[n]=!0,console.log(this.radio_array)},submit:function(){""===this.ans?(console.log("还没确定正确答案"),uni.showModal({title:"错误",content:"还没确定正确答案",showCancel:!1})):(uni.request({url:this.url+"add",timeout:2e3,data:{que:this.que,a:this.a,b:this.b,c:this.c,d:this.d,ans:this.ans},success:function(n){console.log("已提交"),uni.showToast({title:"已提交",icon:"success",duration:1e3})},fail:function(){uni.showToast({title:"服务器繁忙，请稍后再试。。。",icon:"none",duration:1e3})}}),this.que="",this.radio_array=[!1,!1,!1,!1],this.a="",this.b="",this.c="",this.d="",this.ans="")}}};t.default=e},a9d7:function(n,t,a){"use strict";var i=a("bcbc"),e=a.n(i);e.a},bcbc:function(n,t,a){var i=a("dcf0");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var e=a("967d").default;e("533c5753",i,!0,{sourceMap:!1,shadowMode:!1})},dcf0:function(n,t,a){var i=a("c86c");t=i(!1),t.push([n.i,"uni-input[data-v-1d01b162]{border:1px solid #999;border-radius:4px;width:260px;margin:0 auto;height:40px}.cos uni-input[data-v-1d01b162]{margin-top:3px}.cos uni-text[data-v-1d01b162]{width:400px}uni-radio[data-v-1d01b162]{margin:auto 0}.cos uni-view[data-v-1d01b162]{display:flex}",""]),n.exports=t},fed0:function(n,t,a){"use strict";a.d(t,"b",(function(){return e})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i}));var i={uvPicker:a("ec56").default},e=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticStyle:{"margin-bottom":"20px"}},[a("v-uni-input",{attrs:{placeholder:"输入问题"},model:{value:n.que,callback:function(t){n.que=t},expression:"que"}})],1),a("v-uni-view",{staticClass:"cos"},[a("v-uni-radio-group",[a("v-uni-view",[a("v-uni-input",{attrs:{placeholder:"选项A"},model:{value:n.a,callback:function(t){n.a=t},expression:"a"}}),a("v-uni-radio",{attrs:{checked:n.radio_array[0]},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.gans(0)}}})],1),a("v-uni-view",[a("v-uni-input",{attrs:{placeholder:"选项B"},model:{value:n.b,callback:function(t){n.b=t},expression:"b"}}),a("v-uni-radio",{attrs:{checked:n.radio_array[1]},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.gans(1)}}})],1),a("v-uni-view",[a("v-uni-input",{attrs:{placeholder:"选项C"},model:{value:n.c,callback:function(t){n.c=t},expression:"c"}}),a("v-uni-radio",{attrs:{checked:n.radio_array[2]},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.gans(2)}}})],1),a("v-uni-view",[a("v-uni-input",{attrs:{placeholder:"选项D"},model:{value:n.d,callback:function(t){n.d=t},expression:"d"}}),a("v-uni-radio",{attrs:{checked:n.radio_array[3]},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.gans(3)}}})],1)],1)],1),a("uv-picker",{ref:"picker",attrs:{columns:n.columns},on:{confirm:function(t){arguments[0]=t=n.$handleEvent(t),n.confirm.apply(void 0,arguments)}}}),a("v-uni-button",{staticStyle:{"margin-top":"30px","background-color":"#4CD964"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.submit()}}},[n._v("提交")])],1)},o=[]}}]);