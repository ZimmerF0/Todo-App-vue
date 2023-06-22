(function(){"use strict";var t={4706:function(t,s,e){var a=e(144),n=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"app"}},[s("todo-app")],1)},i=[],r=function(){var t=this,s=t._self._c;return s("div",{staticClass:"container"},[s("h2",{staticClass:"text-center mt-5"},[t._v("My Vue Todo App")]),s("div",{staticClass:"d-flex"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.task,expression:"task"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter task"},domProps:{value:t.task},on:{input:function(s){s.target.composing||(t.task=s.target.value)}}}),s("button",{staticClass:"btn btn-warning rounded-0",on:{click:t.submitTask}},[t._v(" Submit ")])]),s("table",{staticClass:"table table-bordered mt-5"},[t._m(0),s("tbody",t._l(t.tasks,(function(e,a){return s("tr",{key:a},[s("td",[s("span",{class:{finished:"finished"===e.status}},[t._v(t._s(e.name))])]),s("td",{staticClass:"text-center",staticStyle:{width:"120px"}},[s("span",{staticClass:"pointer",class:{"text-danger":"to-do"===e.status,"text-warning":"in-progress"===e.status,"text-success":"finished"===e.status},on:{click:function(s){return t.changeStatus(a)}}},[t._v(t._s(e.status))])]),s("td",[s("div",{staticClass:"text-center",on:{click:function(s){return t.editTask(a)}}},[s("span",{staticClass:"fa fa-pen"})])]),s("td",[s("div",{staticClass:"text-center",on:{click:function(s){return t.deleteTask(a)}}},[s("span",{staticClass:"fa fa-trash"})])])])})),0)])])},o=[function(){var t=this,s=t._self._c;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("Task")]),s("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("Status")]),s("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("Edit")]),s("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("Delete")])])])}],c=(e(7658),{name:"HelloWorld",props:{msg:String},data(){return{editedTask:null,task:"",availableStatuses:["to-do","in-progress","finished"],tasks:[{name:"Buy bananas from store",status:"to-do"},{name:"Drink two glass of water",status:"in-progress"}]}},methods:{submitTask(){0!==this.task.length&&(null===this.editedTask?this.tasks.push({name:this.task,status:"to-do"}):(this.tasks[this.editedTask].name=this.task,this.editedTask=null),this.task="")},deleteTask(t){this.tasks.splice(t,1)},editTask(t){this.task=this.tasks[t].name,this.editedTask=t},changeStatus(t){let s=this.availableStatuses.indexOf(this.tasks[t].status);++s>2&&(s=0),this.tasks[t].status=this.availableStatuses[s]}}}),l=c,u=e(1001),d=(0,u.Z)(l,r,o,!1,null,"1ad3e356",null),p=d.exports,f={name:"App",components:{TodoApp:p}},h=f,v=(0,u.Z)(h,n,i,!1,null,null,null),k=v.exports;e(682);a.ZP.config.productionTip=!1,new a.ZP({render:t=>t(k)}).$mount("#app")}},s={};function e(a){var n=s[a];if(void 0!==n)return n.exports;var i=s[a]={exports:{}};return t[a].call(i.exports,i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(s,a,n,i){if(!a){var r=1/0;for(u=0;u<t.length;u++){a=t[u][0],n=t[u][1],i=t[u][2];for(var o=!0,c=0;c<a.length;c++)(!1&i||r>=i)&&Object.keys(e.O).every((function(t){return e.O[t](a[c])}))?a.splice(c--,1):(o=!1,i<r&&(r=i));if(o){t.splice(u--,1);var l=n();void 0!==l&&(s=l)}}return s}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[a,n,i]}}(),function(){e.d=function(t,s){for(var a in s)e.o(s,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:s[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){var t={143:0};e.O.j=function(s){return 0===t[s]};var s=function(s,a){var n,i,r=a[0],o=a[1],c=a[2],l=0;if(r.some((function(s){return 0!==t[s]}))){for(n in o)e.o(o,n)&&(e.m[n]=o[n]);if(c)var u=c(e)}for(s&&s(a);l<r.length;l++)i=r[l],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(u)},a=self["webpackChunktodo_app"]=self["webpackChunktodo_app"]||[];a.forEach(s.bind(null,0)),a.push=s.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(4706)}));a=e.O(a)})();
//# sourceMappingURL=app.f3a6c84e.js.map