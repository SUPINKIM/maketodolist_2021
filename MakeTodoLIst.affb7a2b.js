parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"xmNH":[function(require,module,exports) {
"use strict";function e(e){var o,r=e.Symbol;return"function"==typeof r?r.observable?o=r.observable:(o=r("observable"),r.observable=o):o="@@observable",o}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"G8eR":[function(require,module,exports) {
var global = arguments[3];
var e=arguments[3];Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var d,o=t(require("./ponyfill.js"));function t(e){return e&&e.__esModule?e:{default:e}}d="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof module?module:Function("return this")();var u=(0,o.default)(d),n=u;exports.default=n;
},{"./ponyfill.js":"xmNH"}],"OV4J":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.applyMiddleware=w,exports.bindActionCreators=p,exports.combineReducers=f,exports.compose=b,exports.createStore=i,exports.__DO_NOT_USE__ActionTypes=void 0;var e=t(require("symbol-observable"));function t(e){return e&&e.__esModule?e:{default:e}}var r=function(){return Math.random().toString(36).substring(7).split("").join(".")},n={INIT:"@@redux/INIT"+r(),REPLACE:"@@redux/REPLACE"+r(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+r()}};function o(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function i(t,r,u){var c;if("function"==typeof r&&"function"==typeof u||"function"==typeof u&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof r&&void 0===u&&(u=r,r=void 0),void 0!==u){if("function"!=typeof u)throw new Error("Expected the enhancer to be a function.");return u(i)(t,r)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var a=t,s=r,f=[],d=f,p=!1;function l(){d===f&&(d=f.slice())}function h(){if(p)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}function y(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(p)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return l(),d.push(e),function(){if(t){if(p)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,l();var r=d.indexOf(e);d.splice(r,1),f=null}}}function b(e){if(!o(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(p)throw new Error("Reducers may not dispatch actions.");try{p=!0,s=a(s,e)}finally{p=!1}for(var t=f=d,r=0;r<t.length;r++){(0,t[r])()}return e}return b({type:n.INIT}),(c={dispatch:b,subscribe:y,getState:h,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");a=e,b({type:n.REPLACE})}})[e.default]=function(){var t,r=y;return(t={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function t(){e.next&&e.next(h())}return t(),{unsubscribe:r(t)}}})[e.default]=function(){return this},t},c}function u(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(t){}}function c(e,t){var r=t&&t.type;return"Given "+(r&&'action "'+String(r)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function a(e,t,r,i){var u=Object.keys(t),c=r&&r.type===n.INIT?"preloadedState argument passed to createStore":"previous state received by the reducer";if(0===u.length)return"Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";if(!o(e))return"The "+c+' has unexpected type of "'+{}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1]+'". Expected argument to be an object with the following keys: "'+u.join('", "')+'"';var a=Object.keys(e).filter(function(e){return!t.hasOwnProperty(e)&&!i[e]});return a.forEach(function(e){i[e]=!0}),r&&r.type===n.REPLACE?void 0:a.length>0?"Unexpected "+(a.length>1?"keys":"key")+' "'+a.join('", "')+'" found in '+c+'. Expected to find one of the known reducer keys instead: "'+u.join('", "')+'". Unexpected keys will be ignored.':void 0}function s(e){Object.keys(e).forEach(function(t){var r=e[t];if(void 0===r(void 0,{type:n.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===r(void 0,{type:n.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+n.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}function f(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];0,"function"==typeof e[o]&&(r[o]=e[o])}var i,u=Object.keys(r);try{s(r)}catch(a){i=a}return function(e,t){if(void 0===e&&(e={}),i)throw i;for(var n=!1,o={},a=0;a<u.length;a++){var s=u[a],f=r[s],d=e[s],p=f(d,t);if(void 0===p){var l=c(s,t);throw new Error(l)}o[s]=p,n=n||p!==d}return(n=n||u.length!==Object.keys(e).length)?o:e}}function d(e,t){return function(){return t(e.apply(this,arguments))}}function p(e,t){if("function"==typeof e)return d(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var r={};for(var n in e){var o=e[n];"function"==typeof o&&(r[n]=d(o,t))}return r}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(r,!0).forEach(function(t){l(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function b(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function w(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){var r=e.apply(void 0,arguments),n=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},i=t.map(function(e){return e(o)});return y({},r,{dispatch:n=b.apply(void 0,i)(r.dispatch)})}}}function v(){}exports.__DO_NOT_USE__ActionTypes=n;
},{"symbol-observable":"G8eR"}],"KZ7Y":[function(require,module,exports) {
"use strict";function t(t){return n(t)||o(t)||r(t)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}function o(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function n(t){if(Array.isArray(t))return i(t)}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}function a(){var t=(new Date).getHours(),e=(new Date).getMinutes(),r=t>=12?"pm":"am";return(t=(t=t%12||12)<10?"0"+t:t)+":"+(e=e<10?"0"+e:e)+r}function l(t){var e=a();localStorage.setItem("".concat(t.id),JSON.stringify({text:t.item,time:e}))}function c(e){null!==localStorage.getItem("finish")&&(e=Array.from(new Set([].concat(t(e),t(localStorage.getItem("finish").split(","))))),localStorage.removeItem("finish")),localStorage.setItem("finish",e)}function s(t){if(null!==localStorage.getItem("finish")){var e=localStorage.getItem("finish").split(",");e=e.filter(function(e){return e!==t}),localStorage.removeItem("finish"),localStorage.setItem("finish",e)}}function f(t){return localStorage.getItem("".concat(t))}function u(t){localStorage.removeItem("".concat(t))}function m(){localStorage.clear()}Object.defineProperty(exports,"__esModule",{value:!0}),exports.saveTodoList=l,exports.getTodoList=f,exports.deleteTodoListLocal=u,exports.deleteAllLocal=m,exports.saveFinishID=c,exports.removeFinishID=s;
},{}],"ULhu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.checkClear=t,exports.deleteTodoList=d,exports.deleteAll=l;var e=require("./storage"),o=document.getElementById("clear");function t(){document.querySelector(".todoBox").hasChildNodes()?o.disabled=!1:(o.disabled=!0,(0,e.deleteAllLocal)())}function d(o){(0,e.deleteTodoListLocal)(o.id),(0,e.removeFinishID)(o.id),document.getElementById("".concat(o.id)).remove(),t()}function l(){(0,e.deleteAllLocal)();for(var o=document.querySelector(".todoBox");o.hasChildNodes();)o.removeChild(o.firstChild)}
},{"./storage":"KZ7Y"}],"Mq7B":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.makeTodoList=o,exports.doneTodoList=r;var e=require("./storage"),t=require("./remove"),i=document.querySelector(".todoBox"),n=[];function o(n){if(n.id>localStorage.key(localStorage.length-1)&&(0,e.saveTodoList)(n),null!==(0,e.getTodoList)(n.id)){var o=document.createElement("div");o.id=n.id,(0,e.getTodoList)("finish")&&(0,e.getTodoList)("finish").includes(n.id)&&o.classList.add("finish");var r=document.createElement("span"),a=document.createElement("button"),s=document.createElement("button"),d='<span id="stampTime">'.concat(JSON.parse(localStorage.getItem("".concat(n.id))).time,"</span>");r.innerText=JSON.parse(localStorage.getItem("".concat(n.id))).text,a.innerText="✔︎",a.id="done",s.innerText="❌",s.id="remove",o.append(r),o.innerHTML+=d,o.prepend(a),o.append(s),i.prepend(o)}(0,t.checkClear)()}function r(t){for(var i=[],o=0,r=localStorage.length;o<r;++o)i.push(localStorage.key(o));n=n.filter(function(e){return i.includes(e)});var a=document.getElementById("".concat(t.id));a.classList.contains("finish")?(a.classList.remove("finish"),n=n.filter(function(e){return e!==t.id}),(0,e.removeFinishID)(t.id)):(a.classList.add("finish"),n.push(t.id),(0,e.saveFinishID)(n))}
},{"./storage":"KZ7Y","./remove":"ULhu"}],"Focm":[function(require,module,exports) {
"use strict";var e=require("redux"),t=require("./create"),r=require("./remove");function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){i(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=document.querySelector(".glass"),c=document.getElementById("inputForm"),d=c.querySelector("input"),l=c.querySelector("button"),u=document.querySelector(".todoBox"),s=document.getElementById("clear");function v(){var e=[];if(0!==localStorage.length){for(var t=0,r=localStorage.length;t<r;++t)e.push(localStorage.key(t));(e=e.filter(function(e){return"finish"!==e})).sort(function(e,t){return e-t}),e.forEach(function(e){return E.dispatch(g(e))})}}var m="showTodoList",f="addTodoList",p="removeTodoList",y="finishTodoList",b="removeAll",g=function(e){return{type:m,listID:e}},h=function(e){return{type:f,listitem:e}},k=function(e){return{type:p,listID:e}},O=function(e){return{type:y,listID:e}},I=function(){return{type:b}},L={id:0,item:"",add:!1,remove:!1,done:!1,all:!1,lastkey:0};function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return o(o({},e),{},{id:t.listID,item:JSON.parse(localStorage.getItem("".concat(t.listID))).text,add:!0,remove:!1,done:!1,all:!1,lastkey:t.listID});case f:return o(o({},e),{},{id:parseInt(e.lastkey)+1,item:t.listitem,add:!0,remove:!1,done:!1,all:!1,lastkey:parseInt(e.lastkey)+1});case p:return o(o({},e),{},{id:t.listID,add:!1,remove:!0,done:!1,all:!1,lastkey:e.lastkey});case y:return o(o({},e),{},{id:t.listID,add:!1,remove:!1,done:!0,all:!1,lastkey:e.lastkey});case b:return o(o({},e),{},{add:!1,remove:!1,done:!1,all:!0,lastkey:0});default:return e}}var E=(0,e.createStore)(D),S=function(){var e=E.getState(),n=e.add,o=e.remove,i=e.done,a=e.all;n?(0,t.makeTodoList)(e):o?(0,r.deleteTodoList)(e):i?(0,t.doneTodoList)(e):a&&(0,r.deleteAll)()};S(),E.subscribe(S),c.addEventListener("submit",function(e){e.preventDefault();var t=d.value;E.dispatch(h(t)),d.value=""},!1),u.addEventListener("click",function(e){if("remove"===e.target.id){var t=e.target.parentNode.id;E.dispatch(k(t))}else if("done"===e.target.id){var r=e.target.parentNode.id;E.dispatch(O(r))}},!1),s.addEventListener("click",function(e){var t=document.createElement("div");t.id="confirm_bg";var n=document.createElement("div");n.id="confirm",n.innerHTML+="<div>작성하신 ToDo 리스트를 정말 다 지우시겠어요? <br>맞다면 확인을, 아니라면 취소를 눌러주세요.</div>",n.innerHTML+='<button id="cancle">취소</button>',n.innerHTML+='<button id="ok">확인</button>',a.append(n),a.append(t);var o=document.getElementById("cancle"),i=document.getElementById("ok");o.addEventListener("click",function(e){n.remove(),t.remove()},!1),i.addEventListener("click",function(e){E.dispatch(I()),n.remove(),t.remove(),(0,r.checkClear)()},!1)}),v(),(0,r.checkClear)();
},{"redux":"OV4J","./create":"Mq7B","./remove":"ULhu"}]},{},["Focm"], null)
//# sourceMappingURL=https://supinkim.github.io/maketodolist_2021/MakeTodoLIst.affb7a2b.js.map