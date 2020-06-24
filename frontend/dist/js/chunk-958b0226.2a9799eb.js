(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-958b0226"],{3746:function(t,o,s){"use strict";s.r(o);var e=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"route_container"},[s("confirm-modal",{attrs:{color:"red",text:"Yes, delete it"},on:{confirm:t.deleteAccount},model:{value:t.showConfirmModal,callback:function(o){t.showConfirmModal=o},expression:"showConfirmModal"}},[t._v(" Are you sure you want to delete your account? ")]),s("div",{staticClass:"h1"},[t._v("Account settings")]),s("div",[s("div",{staticClass:"h3"},[t._v("Change your password")]),s("p",{staticClass:"p--condensed"},[t._v(" For security, enter your current password ")]),s("div",[s("fancy-input",{attrs:{placeholder:"Current password",error:t.password.errors["current password"],type:"password"},model:{value:t.password.current,callback:function(o){t.$set(t.password,"current",o)},expression:"password.current"}})],1),s("div",[s("fancy-input",{attrs:{placeholder:"New password",error:t.password.errors["new password"],type:"password"},model:{value:t.password.new,callback:function(o){t.$set(t.password,"new",o)},expression:"password.new"}})],1),s("loading-button",{staticClass:"button button--green",attrs:{loading:t.password.loading},on:{click:t.savePassword}},[t._v("Change password")])],1),s("div",[s("div",{staticClass:"h3 h3--margin_top"},[t._v("Delete your account")]),t._m(0),s("loading-button",{staticClass:"button button--red",attrs:{loading:t.deleteAccountLoading},on:{click:function(o){t.showConfirmModal=!0}}},[t._v("Delete my account")])],1)],1)},n=[function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("p",{staticClass:"p--condensed"},[t._v(" Once this is done, your account "),s("strong",[t._v("cannot")]),t._v(" be restored "),s("br"),t._v(" Your current posts however will be retained ")])}],r=s("80e3"),a=s("8e8d"),c=s("da16"),i=s("c4b0"),d=s.n(i),u=s("bd28"),l={name:"settingsAccount",components:{FancyInput:r["a"],LoadingButton:a["a"],ConfirmModal:c["a"]},data:function(){return{password:{loading:!1,current:"",new:"",errors:{"new password":"","current password":""}},deleteAccountLoading:!1,showConfirmModal:!1}},computed:{},methods:{savePassword:function(){var t=this;this.password.errors["current password"]="",this.password.errors["new password"]="",this.password.current.length?this.password.new.length?(this.password.loading=!0,this.axios.put("/api/v1/user/"+this.$store.state.username,{currentPassword:this.password.current,newPassword:this.password.new}).then((function(){t.password.loading=!1,t.password.current="",t.password.new=""})).catch((function(o){t.password.loading=!1,console.log(o),d()(t.$store)(o,(function(o){"hash"===o.path&&(t.password.errors["new password"]=o.message)}))}))):this.password.errors["new password"]="Cannot be blank":this.password.errors["current password"]="Cannot be blank"},deleteAccount:function(){var t=this;this.deleteAccountLoading=!0,this.axios.delete("/api/v1/user/"+this.$store.state.username).then((function(){t.deleteAccountLoading=!1,t.$store.commit("setUsername",null),t.$router.push("/")})).catch((function(o){t.deleteAccountLoading=!1,d()(t.$store)(o)}))}},mounted:function(){this.$store.dispatch("setTitle","account settings"),Object(u["a"])("settingsAccount")}},w=l,p=(s("edd5"),s("2877")),h=Object(p["a"])(w,e,n,!1,null,"24b57561",null);o["default"]=h.exports},bd28:function(t,o,s){"use strict";var e=s("bc3a"),n=s.n(e);o["a"]=function(t,o){"userPosts"===t||"userThreads"===t?n.a.get("/api/v1/user/"+o).then((function(o){return n.a.post("/api/v1/log",{route:t,resourceId:o.data.id})})).catch(console.log):n.a.post("/api/v1/log",{route:t,resourceId:o}).catch(console.log)}},da16:function(t,o,s){"use strict";var e=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("modal-window",{attrs:{value:t.showModal},on:{input:t.setShowModal}},[s("div",{staticStyle:{"padding-top":"1rem"},attrs:{slot:"main"},slot:"main"},[t._t("default")],2),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("button",{staticClass:"button button--modal",class:t.buttonColor,on:{click:t.confirm}},[t._v(t._s(t.text||"OK"))]),s("button",{staticClass:"button button--modal",on:{click:function(o){return t.setShowModal(!1)}}},[t._v("Cancel")])])])},n=[],r=s("6307"),a={name:"ConfirmModal",props:["value","color","text"],components:{ModalWindow:r["a"]},data:function(){return{showModal:!1}},computed:{buttonColor:function(){return this.color?"button--"+this.color:""}},watch:{value:function(t){this.showModal=t}},methods:{setShowModal:function(t){this.showModal=t,this.$emit("input",t)},confirm:function(){this.$emit("confirm"),this.setShowModal(!1)}},mounted:function(){this.setShowModal(this.value)}},c=a,i=s("2877"),d=Object(i["a"])(c,e,n,!1,null,null,null);o["a"]=d.exports},de8c:function(t,o,s){},edd5:function(t,o,s){"use strict";var e=s("de8c"),n=s.n(e);n.a}}]);
//# sourceMappingURL=chunk-958b0226.2a9799eb.js.map