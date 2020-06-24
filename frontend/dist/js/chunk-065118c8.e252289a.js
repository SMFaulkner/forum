(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-065118c8"],{"19b4":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fancy_textarea"},[a("div",{staticClass:"fancy_textarea__container",staticStyle:{position:"relative",display:"inline-block"},style:{width:t.width||"20rem"}},[a("div",{staticClass:"fancy_textarea__placeholder",class:{"fancy_textarea__placeholder--active":t.active||t.value.length}},[t._v(" "+t._s(t.placeholder)+" ")]),a("textarea",{staticClass:"input fancy_textarea__textarea",domProps:{value:t.value},on:{input:function(e){return t.updateValue(e.target.value)},focus:t.addActive,blur:t.removeActive}})]),a("error-tooltip",{attrs:{error:t.error}})],1)},s=[],o=a("e145"),n={name:"FancyTextarea",props:["value","placeholder","width","error"],components:{ErrorTooltip:o["a"]},data:function(){return{active:!1}},methods:{updateValue:function(t){this.$emit("input",t)},addActive:function(){this.active=!0},removeActive:function(){this.active=!1}}},i=n,c=(a("b701"),a("2877")),l=Object(c["a"])(i,r,s,!1,null,"2fc2e934",null);e["a"]=l.exports},"3ef7":function(t,e,a){},"4f2d":function(t,e,a){"use strict";var r=a("a7a0"),s=a.n(r);s.a},a7a0:function(t,e,a){},b701:function(t,e,a){"use strict";var r=a("3ef7"),s=a.n(r);s.a},eb57:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"route_container route_container--fullscreen"},[a("div",{directives:[{name:"show",rawName:"v-show",value:1===t.panel,expression:"panel === 1"}],staticClass:"panel"},[a("div",{staticClass:"h1"},[t._v("Hi.")]),a("p",{staticClass:"explanation"},[t._v(" First create your admin account for the forum. ")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.createAccount(e)}}},[a("fancy-input",{attrs:{error:t.errors.username,width:"100%",placeholder:"Username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),a("fancy-input",{attrs:{error:t.errors.hash,width:"100%",placeholder:"Password",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("fancy-input",{attrs:{error:t.errors.confirmPassword,width:"100%",placeholder:"Confirm password",type:"password"},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}}),a("loading-button",{staticClass:"button button--green",staticStyle:{width:"100%"},attrs:{loading:t.loading}},[t._v(" Create account ")])],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:2===t.panel,expression:"panel === 2"}],staticClass:"panel"},[a("div",{staticClass:"h1"},[t._v("A few settings")]),a("p",{staticClass:"explanation"},[t._v(" You can change these later on the admin page ")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.addSettings(e)}}},[a("fancy-input",{attrs:{error:t.errors.forumName,width:"100%",placeholder:"Forum name"},model:{value:t.forumName,callback:function(e){t.forumName=e},expression:"forumName"}}),a("p",{staticClass:"p--small"},[t._v("What is your forum about?")]),a("fancy-textarea",{attrs:{error:t.errors.forumDescription,width:"100%",placeholder:"Forum description"},model:{value:t.forumDescription,callback:function(e){t.forumDescription=e},expression:"forumDescription"}}),a("loading-button",{staticClass:"button button--green",staticStyle:{width:"100%"},attrs:{loading:t.loading}},[t._v(" Add settings ")])],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:3===t.panel,expression:"panel === 3"}],staticClass:"panel"},[a("div",{staticClass:"h1"},[t._v("Categories")]),t._m(0),a("form",{on:{submit:function(e){return e.preventDefault(),t.addCategory(e)}}},[t.categories.length?a("p",[a("b",[t._v("Categories:")]),t._v(" "+t._s(t.categories.join(", "))+" ")]):a("p",[t._v("No categories added")]),a("div",{staticClass:"categories_form"},[a("fancy-input",{attrs:{error:t.errors.name,large:!0,"error-bottom":!0,width:"calc(100% - 9rem)",placeholder:"Category name"},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}}),a("loading-button",{staticClass:"button",attrs:{loading:t.loading}},[t._v(" Add category ")])],1)]),a("button",{staticClass:"button button--green",staticStyle:{width:"100%"},on:{click:t.finish}},[t._v("Finish")])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"explanation"},[t._v(" People post threads in categories so that they're easier to sort through"),a("br"),t._v(" You can add or remove them later on the admin page ")])}],o=(a("b0c0"),a("498a"),a("80e3")),n=a("19b4"),i=a("8e8d"),c=a("c4b0"),l=a.n(c),u={name:"start",data:function(){return{username:"",password:"",confirmPassword:"",forumName:"",forumDescription:"",loading:!1,category:"",categories:[],panel:1,errors:{username:"",hash:"",confirmPassword:"",forumName:"",forumDescription:"",name:""},modal:{show:!1,errors:[]}}},components:{FancyInput:o["a"],FancyTextarea:n["a"],LoadingButton:i["a"]},computed:{},methods:{clearErrors:function(){this.errors.username="",this.errors.hash="",this.errors.confirmPassword="",this.errors.forumName="",this.errors.forumDescription="",this.errors.name=""},errorCallback:function(t){var e=this;this.loading=!1,l()(this.$store)(t,(function(t,a){void 0!==e.errors[t.path]?e.errors[t.path]=t.message:a.push(t.message)}))},createAccount:function(){var t=this;if(this.clearErrors(),this.password===this.confirmPassword){var e=this.axios.post("/api/v1/user",{username:this.username,password:this.password,admin:!0});this.loading=!0,e.then((function(e){t.$store.commit("setUsername",e.data.username),t.panel=2,t.loading=!1})).catch(this.errorCallback)}else this.errors.confirmPassword="passwords do not match"},addSettings:function(){var t=this;if(this.clearErrors(),this.forumName.trim().length){this.loading=!0;var e=this.axios.put("/api/v1/settings",{forumName:this.forumName,forumDescription:this.forumDescription});e.then((function(e){t.loading=!1,t.$store.commit("setSettings",e.data),t.panel=3})).catch(this.errorCallback)}else this.errors.forumName="Forum name can't be blank"},addCategory:function(){var t=this;this.clearErrors(),this.category.length?(this.loading=!0,this.axios.post("/api/v1/category",{name:this.category.trim()}).then((function(e){t.loading=!1,t.$store.commit("addCategories",e.data),t.categories.push(e.data.name)})).catch(this.errorCallback),this.category=""):this.errors.name="Category name can't be blank"},finish:function(){this.categories.length&&this.$router.push("/")}},mounted:function(){this.$store.dispatch("setTitle","start")}},d=u,m=(a("4f2d"),a("2877")),h=Object(m["a"])(d,r,s,!1,null,"517076e0",null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-065118c8.e252289a.js.map