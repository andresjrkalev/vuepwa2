(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["listitemsIndex"],{"26f8":function(e,t,n){"use strict";n.r(t);n("a4d3"),n("e01a");var c=n("7a23"),a=Object(c["g"])("h1",null,"Index - ListItems",-1),r=Object(c["f"])("Create"),l={class:"table"},u=Object(c["g"])("th",null,"Description",-1),o=Object(c["g"])("th",null,"Checked",-1),i=Object(c["g"])("th",null,null,-1),s=Object(c["g"])("th",null,null,-1),d=Object(c["f"])("Edit"),b=Object(c["g"])("tbody",null,null,-1);function j(e,t,n,j,O,f){var p=Object(c["x"])("router-link");return Object(c["p"])(),Object(c["d"])(c["a"],null,[a,Object(c["g"])("p",null,[Object(c["g"])(p,{class:"nav-link text-dark",to:"/listitems/create"},{default:Object(c["E"])((function(){return[r]})),_:1})]),Object(c["g"])("table",l,[Object(c["g"])("thead",null,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(e.listItems,(function(e){return Object(c["p"])(),Object(c["d"])("tr",{key:e.id},[u,o,i,s])})),128)),(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(e.listItems,(function(t){return Object(c["p"])(),Object(c["d"])("tr",{key:t.id},[Object(c["g"])("td",null,Object(c["z"])(t.description),1),Object(c["g"])("td",null,[Object(c["F"])(Object(c["g"])("input",{type:"checkbox",disabled:"disabled","onUpdate:modelValue":function(e){return t.checked=e}},null,8,["onUpdate:modelValue"]),[[c["B"],t.checked]])]),Object(c["g"])("td",null,[Object(c["g"])(p,{to:{name:"listitemsEdit",params:{id:t.id}}},{default:Object(c["E"])((function(){return[d]})),_:2},1032,["to"])]),Object(c["g"])("td",null,[Object(c["g"])("a",{href:"#",onClick:Object(c["G"])((function(n){return e.deleteClicked(t.id)}),["prevent"])},"Delete",8,["onClick"])])])})),128))]),b])],64)}n("96cf");var O=n("1da1"),f=n("d4ec"),p=n("bee2"),g=n("262e"),k=n("2caf"),h=n("9ab4"),v=n("ce1f"),m=n("d70b"),y=n("8d4c"),w="ListItemsIndex",x=function(e){Object(g["a"])(n,e);var t=Object(k["a"])(n);function n(){var e;return Object(f["a"])(this,n),e=t.apply(this,arguments),e.listItems=[],e}return Object(p["a"])(n,[{key:"deleteClicked",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(w,"deleteClicked",t),e.next=3,Object(y["b"])(t,m["a"]);case 3:return e.next=5,this.loadData();case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"loadData",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(y["d"])(m["a"]);case 2:if(e.t1=t=e.sent,e.t0=null!==e.t1,!e.t0){e.next=6;break}e.t0=void 0!==t;case 6:if(!e.t0){e.next=10;break}e.t2=t,e.next=11;break;case 10:e.t2=[];case 11:this.listItems=e.t2,console.log(w,this.listItems);case 13:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"beforeMount",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(w,"beforeMount"),e.next=3,this.loadData();case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"mounted",value:function(){console.log(w,"mounted")}},{key:"beforeUpdate",value:function(){console.log(w,"beforeUpdate")}},{key:"updated",value:function(){console.log(w,"updated")}},{key:"unmounted",value:function(){console.log(w,"unmounted")}},{key:"activated",value:function(){console.log(w,"activated")}},{key:"deactivated",value:function(){console.log(w,"deactivated")}},{key:"beforeCreate",value:function(){console.log(w,"beforeCreate")}}]),n}(v["b"]);x=Object(h["a"])([Object(v["a"])({components:{}})],x);var I=x;I.render=j;t["default"]=I}}]);
//# sourceMappingURL=listitemsIndex.4e513d9c.js.map