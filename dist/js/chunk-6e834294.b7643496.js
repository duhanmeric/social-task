(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e834294"],{"1dde":function(t,e,i){var n=i("d039"),s=i("b622"),c=i("2d00"),r=s("species");t.exports=function(t){return c>=51||!n((function(){var e=[],i=e.constructor={};return i[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"498a":function(t,e,i){"use strict";var n=i("23e7"),s=i("58a8").trim,c=i("c8d2");n({target:"String",proto:!0,forced:c("trim")},{trim:function(){return s(this)}})},"4de4":function(t,e,i){"use strict";var n=i("23e7"),s=i("b727").filter,c=i("1dde"),r=i("ae40"),l=c("filter"),a=r("filter");n({target:"Array",proto:!0,forced:!l||!a},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var n=i("1d80"),s=i("5899"),c="["+s+"]",r=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),a=function(t){return function(e){var i=String(n(e));return 1&t&&(i=i.replace(r,"")),2&t&&(i=i.replace(l,"")),i}};t.exports={start:a(1),end:a(2),trim:a(3)}},"5a06":function(t,e,i){},"5fb1":function(t,e,i){"use strict";var n=i("3f4a");e["a"]={getList:function(t){return Object(n["a"])().get("/profile/".concat(t.retrieveList))},postList:function(t){return Object(n["a"])().post("/profile/".concat(t.UserId),t)},changeList:function(t){return t.hasOwnProperty("changeCheckState")||t.hasOwnProperty("beingEditing")||t.hasOwnProperty("newListTitle")||t.hasOwnProperty("changeVisibilityState")||t.hasOwnProperty("changeSecretState")?Object(n["a"])().patch("/profile/".concat(t.UserId),t):t.hasOwnProperty("willBeAdmin")?Object(n["a"])().patch("/profile/".concat(t.willBeAdmin),t):void 0},deleteList:function(t){return t.hasOwnProperty("DeleteAll")?Object(n["a"])().delete("/profile/".concat(t.DeleteAll),{data:{deleteAll:t.DeleteAll}}):t.hasOwnProperty("ListId")?Object(n["a"])().delete("/profile/".concat(t.UserId),{data:{deleteOne:t.ListId}}):t.hasOwnProperty("DeleteUserId")?Object(n["a"])().delete("/profile/".concat(t.DeleteUserId),{data:{deleteUser:t.DeleteUserId}}):void 0}}},"6c3f":function(t,e,i){"use strict";var n=i("3f4a");e["a"]={getOtherUsers:function(t){var e=t.retrieveEmail;return Object(n["a"])().get("/profile/".concat(e))}}},8418:function(t,e,i){"use strict";var n=i("c04e"),s=i("9bf2"),c=i("5c6c");t.exports=function(t,e,i){var r=n(e);r in t?s.f(t,r,c(0,i)):t[r]=i}},"8bc1":function(t,e,i){"use strict";i("5a06")},a434:function(t,e,i){"use strict";var n=i("23e7"),s=i("23cb"),c=i("a691"),r=i("50c4"),l=i("7b0b"),a=i("65f0"),o=i("8418"),d=i("1dde"),u=i("ae40"),h=d("splice"),f=u("splice",{ACCESSORS:!0,0:0,1:2}),b=Math.max,g=Math.min,p=9007199254740991,O="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!h||!f},{splice:function(t,e){var i,n,d,u,h,f,j=l(this),m=r(j.length),v=s(t,m),k=arguments.length;if(0===k?i=n=0:1===k?(i=0,n=m-v):(i=k-2,n=g(b(c(e),0),m-v)),m+i-n>p)throw TypeError(O);for(d=a(j,n),u=0;u<n;u++)h=v+u,h in j&&o(d,u,j[h]);if(d.length=n,i<n){for(u=v;u<m-n;u++)h=u+n,f=u+i,h in j?j[f]=j[h]:delete j[f];for(u=m;u>m-n+i;u--)delete j[u-1]}else if(i>n)for(u=m-n;u>v;u--)h=u+n-1,f=u+i-1,h in j?j[f]=j[h]:delete j[f];for(u=0;u<i;u++)j[u+v]=arguments[u+2];return j.length=m-n+i,d}})},c66d:function(t,e,i){"use strict";i.r(e);i("4de4");var n=i("7a23"),s={id:"profile"},c={key:0,class:"content"},r={class:"list-card"},l={class:"list-header"},a={class:"current-username"},o={class:"remaining"},d={class:"list-body"},u={class:"add-list"},h={class:"controls"},f={class:"list-unstyled list-ul m-0"},b={class:"not-editing"},g={class:"side-control d-flex justify-content-between align-items-center"},p={class:"unless-choosebox"},O={class:"list-item-controls"},j={key:0,class:"list-edit-component"},m=Object(n["h"])("h6",{class:"mb-0"},"New title?",-1),v={class:"btn-container"},k={class:"list-footer"},L={class:"extra-control"},y={class:"filter"},A={key:1,class:"content"},I={class:"list-card"},C={class:"current-username"},U={key:0,class:"delete-user"},T={class:"list-body"},w={class:"list-unstyled list-ul m-0"},x={class:"not-editing"},D={class:"unless-choosebox"},E={key:0,class:"list-item-controls"},S={class:"list-footer"},q={class:"extra-control other-viewer text-center w-100"};function $(t,e,i,$,B,V){return Object(n["q"])(),Object(n["d"])("div",s,[B.currentId==B.userId?(Object(n["q"])(),Object(n["d"])("main",c,[Object(n["h"])("div",r,[Object(n["h"])("div",l,[Object(n["h"])("div",a,Object(n["x"])(B.currentUserName),1),Object(n["h"])("div",o,Object(n["x"])(V.remaining)+" remaining ",1)]),Object(n["h"])("div",d,[Object(n["h"])("div",u,[Object(n["D"])(Object(n["h"])("input",{type:"text",maxlength:"50",class:"new-list","onUpdate:modelValue":e[1]||(e[1]=function(t){return B.addingTodoTitle=t}),placeholder:"Enter the job"},null,512),[[n["A"],B.addingTodoTitle]]),Object(n["h"])("div",h,[B.isLocked?(Object(n["q"])(),Object(n["d"])("i",{key:0,class:"fas fa-eye-slash lock-icon",onClick:e[2]||(e[2]=function(){return V.checkLock&&V.checkLock.apply(V,arguments)})})):(Object(n["q"])(),Object(n["d"])("i",{key:1,class:"fas fa-eye lock-icon",onClick:e[3]||(e[3]=function(){return V.checkLock&&V.checkLock.apply(V,arguments)})})),Object(n["h"])("i",{class:"fas fa-plus add-icon",onClick:e[4]||(e[4]=function(){return V.addTodoDB&&V.addTodoDB.apply(V,arguments)})})])]),Object(n["h"])("ul",f,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["u"])(V.getFilteredList,(function(t){return Object(n["q"])(),Object(n["d"])("li",{class:"list-item",key:t.id},[Object(n["h"])("div",b,[Object(n["h"])("div",g,[Object(n["D"])(Object(n["h"])("input",{type:"checkbox",class:"choose-box",style:{"margin-right":"0px"},"onUpdate:modelValue":function(e){return t.completed=e},onClick:function(e){return V.changeList(t.id)}},null,8,["onUpdate:modelValue","onClick"]),[[n["z"],t.completed]]),t.locked?(Object(n["q"])(),Object(n["d"])("i",{key:0,class:"fas fa-eye-slash list-lock-icon",onClick:function(e){return V.changeVisibility(t)}},null,8,["onClick"])):(Object(n["q"])(),Object(n["d"])("i",{key:1,class:"fas fa-eye list-lock-icon",alt:"",onClick:function(e){return V.changeVisibility(t)}},null,8,["onClick"]))]),Object(n["h"])("div",p,[Object(n["h"])("div",{class:["list-title",{completed:t.completed}]},Object(n["x"])(t.title),3),Object(n["h"])("div",O,[Object(n["h"])("i",{class:"fas fa-edit list-edit-icon",onClick:function(e){return V.editList(t)}},null,8,["onClick"]),Object(n["h"])("i",{class:"fas fa-trash delete-list",onClick:function(e){return V.deleteList(t.id)}},null,8,["onClick"])])])]),t.editing?(Object(n["q"])(),Object(n["d"])("div",j,[m,Object(n["D"])(Object(n["h"])("input",{type:"text",maxlength:"50","onUpdate:modelValue":e[5]||(e[5]=function(t){return B.changingListTitle=t})},null,512),[[n["A"],B.changingListTitle]]),Object(n["h"])("div",v,[Object(n["h"])("button",{class:"confirm-btn",onClick:function(e){return V.doneEdit(t)}},"Confirm",8,["onClick"]),Object(n["h"])("button",{class:"cancel-btn",onClick:function(e){return V.cancelEdit(t)}},"Cancel",8,["onClick"])])])):Object(n["e"])("",!0)])})),128))])]),Object(n["h"])("div",k,[Object(n["h"])("div",L,[Object(n["h"])("div",y,[Object(n["h"])("button",{class:["all-btn",{active:"all"==B.filter}],onClick:e[6]||(e[6]=function(t){return B.filter="all"})},"All",2),Object(n["h"])("button",{class:["active-btn",{active:"active"==B.filter}],onClick:e[7]||(e[7]=function(t){return B.filter="active"})},"Active",2),Object(n["h"])("button",{class:["completed-btn",{active:"completed"==B.filter}],onClick:e[8]||(e[8]=function(t){return B.filter="completed"})},"Done",2),Object(n["h"])("button",{class:"delete-all-btn",onClick:e[9]||(e[9]=function(){return V.deleteAll&&V.deleteAll.apply(V,arguments)})},"Clear")])])])])])):(Object(n["q"])(),Object(n["d"])("main",A,[Object(n["h"])("div",I,[Object(n["h"])("div",{class:["list-header",{admin:t.$store.state.user.isAdmin}]},[Object(n["h"])("div",C,Object(n["x"])(V.ViewingUser),1),V.canChangeAdmin?(Object(n["q"])(),Object(n["d"])("div",U,[Object(n["h"])("i",{class:"fas fa-ban delete-list",onClick:e[10]||(e[10]=function(){return V.deleteUser&&V.deleteUser.apply(V,arguments)}),style:{"margin-right":"16px"}}),V.isUserAdmin?(Object(n["q"])(),Object(n["d"])("i",{key:0,class:"fas fa-chess-queen is-admin",onClick:e[11]||(e[11]=function(){return V.changeAdminState&&V.changeAdminState.apply(V,arguments)})})):(Object(n["q"])(),Object(n["d"])("i",{key:1,class:"fas fa-chess-pawn is-admin",onClick:e[12]||(e[12]=function(){return V.changeAdminState&&V.changeAdminState.apply(V,arguments)})}))])):Object(n["e"])("",!0)],2),Object(n["h"])("div",T,[Object(n["h"])("ul",w,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["u"])(V.dontGetLocked,(function(e){return Object(n["q"])(),Object(n["d"])("li",{class:"list-item",key:e.id},[Object(n["h"])("div",x,[Object(n["h"])("div",D,[Object(n["h"])("div",{class:["list-title",{completed:e.completed}]},Object(n["x"])(e.title),3),t.$store.state.user.isAdmin?(Object(n["q"])(),Object(n["d"])("div",E,[Object(n["h"])("i",{class:"fas fa-trash delete-list",onClick:function(t){return V.deleteList(e.id)}},null,8,["onClick"])])):Object(n["e"])("",!0)])])])})),128))])]),Object(n["h"])("div",S,[Object(n["h"])("div",q,[Object(n["h"])("a",{href:"/profile/"+B.currentId,class:"back-to-profile mx-auto"}," Back to your profile ",8,["href"])])])])]))])}i("a434"),i("498a");var B=i("6c3f"),V=i("5fb1"),P={data:function(){return{userId:this.$route.params.id,currentId:this.$store.state.user.id,currentEmail:this.$store.state.user.email,currentUserName:this.$store.state.user.username,profiles:[],lists:[],isLocked:!1,addingTodoTitle:"",changingListTitle:"",filter:"all",isSearching:!1}},methods:{changeAdminState:function(){var t=this;V["a"].changeList({willBeAdmin:this.userId}).then((function(e){for(var i=0;i<t.profiles.length;i++)t.profiles[i].id==t.userId&&(t.profiles[i].isAdmin=e.data.isAdmin)}))},searchUser:function(){this.isSearching=!0},checkLock:function(){this.isLocked=!this.isLocked},changeVisibility:function(t){t.locked=!t.locked,V["a"].changeList({changeVisibilityState:t.id,UserId:this.userId})},addTodoDB:function(){var t=this;if(""==this.addingTodoTitle.trim()||""==this.addingTodoTitle)return alert("boş bir todo girdiniz"),void(this.addingTodoTitle="");V["a"].postList({title:this.addingTodoTitle,completed:!1,editing:!1,locked:this.isLocked,UserId:this.currentId}).then((function(e){t.addTodoLC(e.data)}))},addTodoLC:function(t){this.lists.push(t),this.addingTodoTitle=""},changeList:function(t){V["a"].changeList({changeCheckState:t,UserId:this.userId})},deleteUser:function(){V["a"].deleteList({DeleteUserId:this.userId})},deleteList:function(t){for(var e=0;e<this.lists.length;e++)t===this.lists[e].id&&this.lists.splice(e,1);this.deleteListDB(t)},deleteListDB:function(t){V["a"].deleteList({ListId:t,UserId:this.userId})},editList:function(t){t.editing=!0,V["a"].changeList({beingEditing:t.id,UserId:this.userId})},doneEdit:function(t){if(""==this.changingListTitle.trim()||""==this.changingListTitle)return alert("boş bir düzenleme girdiniz"),void(this.changingListTitle="");t.title=this.changingListTitle,this.changingListTitle="",t.editing=!1,this.doneEditDB(t)},doneEditDB:function(t){V["a"].changeList({ListId:t.id,newListTitle:t.title,UserId:this.userId})},cancelEdit:function(t){t.editing=!1,V["a"].changeList({beingEditing:t.id,UserId:this.userId})},deleteAll:function(){V["a"].deleteList({DeleteAll:this.userId}),this.lists=[]}},computed:{canChangeAdmin:function(){for(var t=0;t<this.$store.getters.getAllUsers.length;t++)if(this.$store.getters.getAllUsers[t].id==this.currentId)return this.$store.getters.getAllUsers[t].isAdmin},isUserAdmin:function(){for(var t=0;t<this.profiles.length;t++)if(this.profiles[t].id==this.userId)return this.profiles[t].isAdmin},dontGetLocked:function(){for(var t=0;t<this.$store.getters.getAllUsers.length;t++)return this.$store.getters.getAllUsers[t].isAdmin?this.lists:this.lists.filter((function(t){return!t.locked}))},remaining:function(){return this.lists.filter((function(t){return!t.completed})).length},ViewingUser:function(){for(var t=0;t<this.profiles.length;t++)if(this.profiles[t].id==this.userId)return this.profiles[t].username},getFilteredList:function(){return"all"==this.filter?this.lists:"active"==this.filter?this.lists.filter((function(t){return!t.completed})):"completed"==this.filter?this.lists.filter((function(t){return t.completed})):void 0}},created:function(){var t=this;V["a"].getList({retrieveList:this.userId}).then((function(e){for(var i=0;i<e.data.length;i++)t.lists.push(e.data[i])})),B["a"].getOtherUsers({retrieveEmail:this.currentEmail}).then((function(e){for(var i=0;i<e.data.length;i++)t.profiles.push(e.data[i]);t.$store.dispatch("makeAllUsers",e.data)}))}};i("8bc1");P.render=$;e["default"]=P},c8d2:function(t,e,i){var n=i("d039"),s=i("5899"),c="​᠎";t.exports=function(t){return n((function(){return!!s[t]()||c[t]()!=c||s[t].name!==t}))}}}]);
//# sourceMappingURL=chunk-6e834294.b7643496.js.map