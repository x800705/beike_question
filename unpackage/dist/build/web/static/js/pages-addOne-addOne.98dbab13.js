(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-addOne-addOne"],{"083b":function(i,n,t){var e=t("21e5");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[i.i,e,""]]),e.locals&&(i.exports=e.locals);var a=t("967d").default;a("9d29dfaa",e,!0,{sourceMap:!1,shadowMode:!1})},"21e5":function(i,n,t){var e=t("c86c");n=e(!1),n.push([i.i,"uni-input[data-v-352d865d]{border:1px solid #999;border-radius:4px;width:260px;margin:0 auto;height:40px}.cos uni-input[data-v-352d865d]{margin-top:3px}.cos uni-text[data-v-352d865d]{width:400px}uni-radio[data-v-352d865d]{margin:auto 0}.cos uni-view[data-v-352d865d]{display:flex}",""]),i.exports=n},4608:function(i,n,t){"use strict";t("6a54");var e=t("f5bd").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,t("bf0f"),t("aa9c");var a=e(t("2634")),o=e(t("2fdc")),u=(e(t("165f")),{data:function(){return{que:"",a:"",b:"",c:"",d:"",ans:"",url:"http://154.12.26.163:5000/",radio_array:[!1,!1,!1,!1],columns:[],item_list_id:[],item:"",item_id:"",user_id:""}},onShow:function(i){var n=this;return(0,o.default)((0,a.default)().mark((function i(){return(0,a.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return n.user_id=sessionStorage.getItem("user_id"),console.log(123),n.columns=[],n.item_list_id=[],i.next=6,new Promise((function(i,t){uni.request({url:n.url+"/getitem",success:function(t){console.log(t.data);for(var e=[],a=0;a<t.data.length;a++)console.log(t.data[a][1]),-1!=t.data[a][0]&&(e.push(t.data[a][1]),n.item_list_id.push(t.data[a][0]));n.columns.push(e),console.log(n.columns),console.log(n.item_list_id),i("suc")}})}));case 6:case"end":return i.stop()}}),i)})))()},methods:{gans:function(i){this.ans=i,this.radio_array=[!1,!1,!1,!1],this.radio_array[i]=!0,console.log(this.radio_array)},submit:function(){""===this.ans?(console.log("还没确定正确答案"),uni.showModal({title:"错误",content:"还没确定正确答案",showCancel:!1})):(uni.request({url:this.url+"addOne",timeout:2e3,data:{que:this.que,item_id:this.item_id,user_id:this.user_id,a:this.a,b:this.b,c:this.c,d:this.d,ans:this.ans},success:function(i){console.log("已提交"),uni.showToast({title:"已提交",icon:"success",duration:1e3})},fail:function(){uni.showToast({title:"服务器繁忙，请稍后再试。。。",icon:"none",duration:1e3})}}),this.que="",this.radio_array=[!1,!1,!1,!1],this.a="",this.b="",this.c="",this.d="",this.ans="")},openPicker:function(){this.$refs.picker.open()},confirm:function(i){console.log(i.value[0]),this.item=i.value[0],console.log(this.item_list_id[i.indexs[0]]),this.item_id=this.item_list_id[i.indexs[0]]}}});n.default=u},affa:function(i,n,t){"use strict";t.r(n);var e=t("4608"),a=t.n(e);for(var o in e)["default"].indexOf(o)<0&&function(i){t.d(n,i,(function(){return e[i]}))}(o);n["default"]=a.a},be40:function(i,n,t){"use strict";t.r(n);var e=t("c61c"),a=t("affa");for(var o in a)["default"].indexOf(o)<0&&function(i){t.d(n,i,(function(){return a[i]}))}(o);t("d87d");var u=t("828b"),c=Object(u["a"])(a["default"],e["b"],e["c"],!1,null,"352d865d",null,!1,e["a"],void 0);n["default"]=c.exports},c61c:function(i,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return e}));var e={uvPicker:t("ec56").default},a=function(){var i=this,n=i.$createElement,t=i._self._c||n;return t("v-uni-view",[t("v-uni-view",{staticStyle:{"margin-bottom":"20px"}},[t("v-uni-input",{attrs:{placeholder:"输入问题"},model:{value:i.que,callback:function(n){i.que=n},expression:"que"}}),t("v-uni-input",{attrs:{placeholder:"输入分区"},on:{click:function(n){arguments[0]=n=i.$handleEvent(n),i.openPicker.apply(void 0,arguments)}},model:{value:i.item,callback:function(n){i.item=n},expression:"item"}}),t("uv-picker",{ref:"picker",attrs:{columns:i.columns},on:{confirm:function(n){arguments[0]=n=i.$handleEvent(n),i.confirm.apply(void 0,arguments)}}})],1),t("v-uni-view",{staticClass:"cos"},[t("v-uni-radio-group",[t("v-uni-view",[t("v-uni-input",{attrs:{placeholder:"选项A"},model:{value:i.a,callback:function(n){i.a=n},expression:"a"}}),t("v-uni-radio",{attrs:{checked:i.radio_array[0]},on:{click:function(n){arguments[0]=n=i.$handleEvent(n),i.gans(0)}}})],1),t("v-uni-view",[t("v-uni-input",{attrs:{placeholder:"选项B"},model:{value:i.b,callback:function(n){i.b=n},expression:"b"}}),t("v-uni-radio",{attrs:{checked:i.radio_array[1]},on:{click:function(n){arguments[0]=n=i.$handleEvent(n),i.gans(1)}}})],1),t("v-uni-view",[t("v-uni-input",{attrs:{placeholder:"选项C"},model:{value:i.c,callback:function(n){i.c=n},expression:"c"}}),t("v-uni-radio",{attrs:{checked:i.radio_array[2]},on:{click:function(n){arguments[0]=n=i.$handleEvent(n),i.gans(2)}}})],1),t("v-uni-view",[t("v-uni-input",{attrs:{placeholder:"选项D"},model:{value:i.d,callback:function(n){i.d=n},expression:"d"}}),t("v-uni-radio",{attrs:{checked:i.radio_array[3]},on:{click:function(n){arguments[0]=n=i.$handleEvent(n),i.gans(3)}}})],1)],1)],1),t("uv-picker",{ref:"picker",attrs:{columns:i.columns},on:{confirm:function(n){arguments[0]=n=i.$handleEvent(n),i.confirm.apply(void 0,arguments)}}}),t("v-uni-button",{staticStyle:{"margin-top":"30px","background-color":"#4CD964"},on:{click:function(n){arguments[0]=n=i.$handleEvent(n),i.submit()}}},[i._v("提交")])],1)},o=[]},d87d:function(i,n,t){"use strict";var e=t("083b"),a=t.n(e);a.a}}]);