!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.spasm=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){b.exports={"default":a("core-js/library/fn/array/from"),__esModule:!0}},{"core-js/library/fn/array/from":9}],2:[function(a,b,c){b.exports={"default":a("core-js/library/fn/get-iterator"),__esModule:!0}},{"core-js/library/fn/get-iterator":10}],3:[function(a,b,c){b.exports={"default":a("core-js/library/fn/is-iterable"),__esModule:!0}},{"core-js/library/fn/is-iterable":11}],4:[function(a,b,c){b.exports={"default":a("core-js/library/fn/object/keys"),__esModule:!0}},{"core-js/library/fn/object/keys":12}],5:[function(a,b,c){b.exports={"default":a("core-js/library/fn/promise"),__esModule:!0}},{"core-js/library/fn/promise":13}],6:[function(a,b,c){"use strict";var d=a("babel-runtime/core-js/get-iterator")["default"],e=a("babel-runtime/core-js/is-iterable")["default"];c["default"]=function(){function a(a,b){var c=[],e=!0,f=!1,g=void 0;try{for(var h,i=d(a);!(e=(h=i.next()).done)&&(c.push(h.value),!b||c.length!==b);e=!0);}catch(j){f=!0,g=j}finally{try{!e&&i["return"]&&i["return"]()}finally{if(f)throw g}}return c}return function(b,c){if(Array.isArray(b))return b;if(e(Object(b)))return a(b,c);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c.__esModule=!0},{"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/is-iterable":3}],7:[function(a,b,c){"use strict";var d=a("babel-runtime/core-js/array/from")["default"];c["default"]=function(a){return Array.isArray(a)?a:d(a)},c.__esModule=!0},{"babel-runtime/core-js/array/from":1}],8:[function(a,b,c){"use strict";var d=a("babel-runtime/core-js/array/from")["default"];c["default"]=function(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return d(a)},c.__esModule=!0},{"babel-runtime/core-js/array/from":1}],9:[function(a,b,c){a("../../modules/es6.string.iterator"),a("../../modules/es6.array.from"),b.exports=a("../../modules/$.core").Array.from},{"../../modules/$.core":18,"../../modules/es6.array.from":65,"../../modules/es6.string.iterator":70}],10:[function(a,b,c){a("../modules/web.dom.iterable"),a("../modules/es6.string.iterator"),b.exports=a("../modules/core.get-iterator")},{"../modules/core.get-iterator":63,"../modules/es6.string.iterator":70,"../modules/web.dom.iterable":71}],11:[function(a,b,c){a("../modules/web.dom.iterable"),a("../modules/es6.string.iterator"),b.exports=a("../modules/core.is-iterable")},{"../modules/core.is-iterable":64,"../modules/es6.string.iterator":70,"../modules/web.dom.iterable":71}],12:[function(a,b,c){a("../../modules/es6.object.keys"),b.exports=a("../../modules/$.core").Object.keys},{"../../modules/$.core":18,"../../modules/es6.object.keys":67}],13:[function(a,b,c){a("../modules/es6.object.to-string"),a("../modules/es6.string.iterator"),a("../modules/web.dom.iterable"),a("../modules/es6.promise"),b.exports=a("../modules/$.core").Promise},{"../modules/$.core":18,"../modules/es6.object.to-string":68,"../modules/es6.promise":69,"../modules/es6.string.iterator":70,"../modules/web.dom.iterable":71}],14:[function(a,b,c){b.exports=function(a){if("function"!=typeof a)throw TypeError(a+" is not a function!");return a}},{}],15:[function(a,b,c){var d=a("./$.is-object");b.exports=function(a){if(!d(a))throw TypeError(a+" is not an object!");return a}},{"./$.is-object":32}],16:[function(a,b,c){var d=a("./$.cof"),e=a("./$.wks")("toStringTag"),f="Arguments"==d(function(){return arguments}());b.exports=function(a){var b,c,g;return void 0===a?"Undefined":null===a?"Null":"string"==typeof(c=(b=Object(a))[e])?c:f?d(b):"Object"==(g=d(b))&&"function"==typeof b.callee?"Arguments":g}},{"./$.cof":17,"./$.wks":61}],17:[function(a,b,c){var d={}.toString;b.exports=function(a){return d.call(a).slice(8,-1)}},{}],18:[function(a,b,c){var d=b.exports={version:"1.2.1"};"number"==typeof __e&&(__e=d)},{}],19:[function(a,b,c){var d=a("./$.a-function");b.exports=function(a,b,c){if(d(a),void 0===b)return a;switch(c){case 1:return function(c){return a.call(b,c)};case 2:return function(c,d){return a.call(b,c,d)};case 3:return function(c,d,e){return a.call(b,c,d,e)}}return function(){return a.apply(b,arguments)}}},{"./$.a-function":14}],20:[function(a,b,c){var d=a("./$.global"),e=a("./$.core"),f="prototype",g=function(a,b){return function(){return a.apply(b,arguments)}},h=function(a,b,c){var i,j,k,l,m=a&h.G,n=a&h.P,o=m?d:a&h.S?d[b]:(d[b]||{})[f],p=m?e:e[b]||(e[b]={});m&&(c=b);for(i in c)j=!(a&h.F)&&o&&i in o,j&&i in p||(k=j?o[i]:c[i],m&&"function"!=typeof o[i]?l=c[i]:a&h.B&&j?l=g(k,d):a&h.W&&o[i]==k?!function(a){l=function(b){return this instanceof a?new a(b):a(b)},l[f]=a[f]}(k):l=n&&"function"==typeof k?g(Function.call,k):k,p[i]=l,n&&((p[f]||(p[f]={}))[i]=k))};h.F=1,h.G=2,h.S=4,h.P=8,h.B=16,h.W=32,b.exports=h},{"./$.core":18,"./$.global":25}],21:[function(a,b,c){b.exports=function(a){if(void 0==a)throw TypeError("Can't call method on  "+a);return a}},{}],22:[function(a,b,c){var d=a("./$.is-object"),e=a("./$.global").document,f=d(e)&&d(e.createElement);b.exports=function(a){return f?e.createElement(a):{}}},{"./$.global":25,"./$.is-object":32}],23:[function(a,b,c){b.exports=function(a){try{return!!a()}catch(b){return!0}}},{}],24:[function(a,b,c){var d=a("./$.ctx"),e=a("./$.iter-call"),f=a("./$.is-array-iter"),g=a("./$.an-object"),h=a("./$.to-length"),i=a("./core.get-iterator-method");b.exports=function(a,b,c,j){var k,l,m,n=i(a),o=d(c,j,b?2:1),p=0;if("function"!=typeof n)throw TypeError(a+" is not iterable!");if(f(n))for(k=h(a.length);k>p;p++)b?o(g(l=a[p])[0],l[1]):o(a[p]);else for(m=n.call(a);!(l=m.next()).done;)e(m,o,l.value,b)}},{"./$.an-object":15,"./$.ctx":19,"./$.is-array-iter":31,"./$.iter-call":33,"./$.to-length":57,"./core.get-iterator-method":62}],25:[function(a,b,c){var d="undefined",e=b.exports=typeof window!=d&&window.Math==Math?window:typeof self!=d&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},{}],26:[function(a,b,c){var d={}.hasOwnProperty;b.exports=function(a,b){return d.call(a,b)}},{}],27:[function(a,b,c){var d=a("./$"),e=a("./$.property-desc");b.exports=a("./$.support-desc")?function(a,b,c){return d.setDesc(a,b,e(1,c))}:function(a,b,c){return a[b]=c,a}},{"./$":39,"./$.property-desc":44,"./$.support-desc":52}],28:[function(a,b,c){b.exports=a("./$.global").document&&document.documentElement},{"./$.global":25}],29:[function(a,b,c){b.exports=function(a,b,c){var d=void 0===c;switch(b.length){case 0:return d?a():a.call(c);case 1:return d?a(b[0]):a.call(c,b[0]);case 2:return d?a(b[0],b[1]):a.call(c,b[0],b[1]);case 3:return d?a(b[0],b[1],b[2]):a.call(c,b[0],b[1],b[2]);case 4:return d?a(b[0],b[1],b[2],b[3]):a.call(c,b[0],b[1],b[2],b[3])}return a.apply(c,b)}},{}],30:[function(a,b,c){var d=a("./$.cof");b.exports=0 in Object("z")?Object:function(a){return"String"==d(a)?a.split(""):Object(a)}},{"./$.cof":17}],31:[function(a,b,c){var d=a("./$.iterators"),e=a("./$.wks")("iterator");b.exports=function(a){return(d.Array||Array.prototype[e])===a}},{"./$.iterators":38,"./$.wks":61}],32:[function(a,b,c){b.exports=function(a){return"object"==typeof a?null!==a:"function"==typeof a}},{}],33:[function(a,b,c){var d=a("./$.an-object");b.exports=function(a,b,c,e){try{return e?b(d(c)[0],c[1]):b(c)}catch(f){var g=a["return"];throw void 0!==g&&d(g.call(a)),f}}},{"./$.an-object":15}],34:[function(a,b,c){"use strict";var d=a("./$"),e={};a("./$.hide")(e,a("./$.wks")("iterator"),function(){return this}),b.exports=function(b,c,f){b.prototype=d.create(e,{next:a("./$.property-desc")(1,f)}),a("./$.tag")(b,c+" Iterator")}},{"./$":39,"./$.hide":27,"./$.property-desc":44,"./$.tag":53,"./$.wks":61}],35:[function(a,b,c){"use strict";var d=a("./$.library"),e=a("./$.def"),f=a("./$.redef"),g=a("./$.hide"),h=a("./$.has"),i=a("./$.wks")("iterator"),j=a("./$.iterators"),k=!([].keys&&"next"in[].keys()),l="@@iterator",m="keys",n="values",o=function(){return this};b.exports=function(b,c,p,q,r,s,t){a("./$.iter-create")(p,c,q);var u,v,w=function(a){switch(a){case m:return function(){return new p(this,a)};case n:return function(){return new p(this,a)}}return function(){return new p(this,a)}},x=c+" Iterator",y=b.prototype,z=y[i]||y[l]||r&&y[r],A=z||w(r);if(z){var B=a("./$").getProto(A.call(new b));a("./$.tag")(B,x,!0),!d&&h(y,l)&&g(B,i,o)}if((!d||t)&&g(y,i,A),j[c]=A,j[x]=o,r)if(u={keys:s?A:w(m),values:r==n?A:w(n),entries:r!=n?A:w("entries")},t)for(v in u)v in y||f(y,v,u[v]);else e(e.P+e.F*k,c,u)}},{"./$":39,"./$.def":20,"./$.has":26,"./$.hide":27,"./$.iter-create":34,"./$.iterators":38,"./$.library":40,"./$.redef":45,"./$.tag":53,"./$.wks":61}],36:[function(a,b,c){var d=a("./$.wks")("iterator"),e=!1;try{var f=[7][d]();f["return"]=function(){e=!0},Array.from(f,function(){throw 2})}catch(g){}b.exports=function(a){if(!e)return!1;var b=!1;try{var c=[7],f=c[d]();f.next=function(){b=!0},c[d]=function(){return f},a(c)}catch(g){}return b}},{"./$.wks":61}],37:[function(a,b,c){b.exports=function(a,b){return{value:b,done:!!a}}},{}],38:[function(a,b,c){b.exports={}},{}],39:[function(a,b,c){var d=Object;b.exports={create:d.create,getProto:d.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:d.getOwnPropertyDescriptor,setDesc:d.defineProperty,setDescs:d.defineProperties,getKeys:d.keys,getNames:d.getOwnPropertyNames,getSymbols:d.getOwnPropertySymbols,each:[].forEach}},{}],40:[function(a,b,c){b.exports=!0},{}],41:[function(a,b,c){var d,e,f,g=a("./$.global"),h=a("./$.task").set,i=g.MutationObserver||g.WebKitMutationObserver,j=g.process,k="process"==a("./$.cof")(j),l=function(){var a,b;for(k&&(a=j.domain)&&(j.domain=null,a.exit());d;)b=d.domain,b&&b.enter(),d.fn.call(),b&&b.exit(),d=d.next;e=void 0,a&&a.enter()};if(k)f=function(){j.nextTick(l)};else if(i){var m=1,n=document.createTextNode("");new i(l).observe(n,{characterData:!0}),f=function(){n.data=m=-m}}else f=function(){h.call(g,l)};b.exports=function(a){var b={fn:a,next:void 0,domain:k&&j.domain};e&&(e.next=b),d||(d=b,f()),e=b}},{"./$.cof":17,"./$.global":25,"./$.task":54}],42:[function(a,b,c){var d=a("./$.redef");b.exports=function(a,b){for(var c in b)d(a,c,b[c]);return a}},{"./$.redef":45}],43:[function(a,b,c){b.exports=function(b,c){var d=a("./$.def"),e=(a("./$.core").Object||{})[b]||Object[b],f={};f[b]=c(e),d(d.S+d.F*a("./$.fails")(function(){e(1)}),"Object",f)}},{"./$.core":18,"./$.def":20,"./$.fails":23}],44:[function(a,b,c){b.exports=function(a,b){return{enumerable:!(1&a),configurable:!(2&a),writable:!(4&a),value:b}}},{}],45:[function(a,b,c){b.exports=a("./$.hide")},{"./$.hide":27}],46:[function(a,b,c){b.exports=Object.is||function(a,b){return a===b?0!==a||1/a===1/b:a!=a&&b!=b}},{}],47:[function(a,b,c){var d=a("./$").getDesc,e=a("./$.is-object"),f=a("./$.an-object"),g=function(a,b){if(f(a),!e(b)&&null!==b)throw TypeError(b+": can't set as prototype!")};b.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(b,c,e){try{e=a("./$.ctx")(Function.call,d(Object.prototype,"__proto__").set,2),e(b,[]),c=!(b instanceof Array)}catch(f){c=!0}return function(a,b){return g(a,b),c?a.__proto__=b:e(a,b),a}}({},!1):void 0),check:g}},{"./$":39,"./$.an-object":15,"./$.ctx":19,"./$.is-object":32}],48:[function(a,b,c){var d=a("./$.global"),e="__core-js_shared__",f=d[e]||(d[e]={});b.exports=function(a){return f[a]||(f[a]={})}},{"./$.global":25}],49:[function(a,b,c){"use strict";var d=a("./$"),e=a("./$.wks")("species");b.exports=function(b){!a("./$.support-desc")||e in b||d.setDesc(b,e,{configurable:!0,get:function(){return this}})}},{"./$":39,"./$.support-desc":52,"./$.wks":61}],50:[function(a,b,c){b.exports=function(a,b,c){if(!(a instanceof b))throw TypeError(c+": use the 'new' operator!");return a}},{}],51:[function(a,b,c){var d=a("./$.to-integer"),e=a("./$.defined");b.exports=function(a){return function(b,c){var f,g,h=String(e(b)),i=d(c),j=h.length;return 0>i||i>=j?a?"":void 0:(f=h.charCodeAt(i),55296>f||f>56319||i+1===j||(g=h.charCodeAt(i+1))<56320||g>57343?a?h.charAt(i):f:a?h.slice(i,i+2):(f-55296<<10)+(g-56320)+65536)}}},{"./$.defined":21,"./$.to-integer":55}],52:[function(a,b,c){b.exports=!a("./$.fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"./$.fails":23}],53:[function(a,b,c){var d=a("./$.has"),e=a("./$.hide"),f=a("./$.wks")("toStringTag");b.exports=function(a,b,c){a&&!d(a=c?a:a.prototype,f)&&e(a,f,b)}},{"./$.has":26,"./$.hide":27,"./$.wks":61}],54:[function(a,b,c){"use strict";var d,e,f,g=a("./$.ctx"),h=a("./$.invoke"),i=a("./$.html"),j=a("./$.dom-create"),k=a("./$.global"),l=k.process,m=k.setImmediate,n=k.clearImmediate,o=k.MessageChannel,p=0,q={},r="onreadystatechange",s=function(){var a=+this;if(q.hasOwnProperty(a)){var b=q[a];delete q[a],b()}},t=function(a){s.call(a.data)};m&&n||(m=function(a){for(var b=[],c=1;arguments.length>c;)b.push(arguments[c++]);return q[++p]=function(){h("function"==typeof a?a:Function(a),b)},d(p),p},n=function(a){delete q[a]},"process"==a("./$.cof")(l)?d=function(a){l.nextTick(g(s,a,1))}:o?(e=new o,f=e.port2,e.port1.onmessage=t,d=g(f.postMessage,f,1)):k.addEventListener&&"function"==typeof postMessage&&!k.importScripts?(d=function(a){k.postMessage(a+"","*")},k.addEventListener("message",t,!1)):d=r in j("script")?function(a){i.appendChild(j("script"))[r]=function(){i.removeChild(this),s.call(a)}}:function(a){setTimeout(g(s,a,1),0)}),b.exports={set:m,clear:n}},{"./$.cof":17,"./$.ctx":19,"./$.dom-create":22,"./$.global":25,"./$.html":28,"./$.invoke":29}],55:[function(a,b,c){var d=Math.ceil,e=Math.floor;b.exports=function(a){return isNaN(a=+a)?0:(a>0?e:d)(a)}},{}],56:[function(a,b,c){var d=a("./$.iobject"),e=a("./$.defined");b.exports=function(a){return d(e(a))}},{"./$.defined":21,"./$.iobject":30}],57:[function(a,b,c){var d=a("./$.to-integer"),e=Math.min;b.exports=function(a){return a>0?e(d(a),9007199254740991):0}},{"./$.to-integer":55}],58:[function(a,b,c){var d=a("./$.defined");b.exports=function(a){return Object(d(a))}},{"./$.defined":21}],59:[function(a,b,c){var d=0,e=Math.random();b.exports=function(a){return"Symbol(".concat(void 0===a?"":a,")_",(++d+e).toString(36))}},{}],60:[function(a,b,c){b.exports=function(){}},{}],61:[function(a,b,c){var d=a("./$.shared")("wks"),e=a("./$.global").Symbol;b.exports=function(b){return d[b]||(d[b]=e&&e[b]||(e||a("./$.uid"))("Symbol."+b))}},{"./$.global":25,"./$.shared":48,"./$.uid":59}],62:[function(a,b,c){var d=a("./$.classof"),e=a("./$.wks")("iterator"),f=a("./$.iterators");b.exports=a("./$.core").getIteratorMethod=function(a){return void 0!=a?a[e]||a["@@iterator"]||f[d(a)]:void 0}},{"./$.classof":16,"./$.core":18,"./$.iterators":38,"./$.wks":61}],63:[function(a,b,c){var d=a("./$.an-object"),e=a("./core.get-iterator-method");b.exports=a("./$.core").getIterator=function(a){var b=e(a);if("function"!=typeof b)throw TypeError(a+" is not iterable!");return d(b.call(a))}},{"./$.an-object":15,"./$.core":18,"./core.get-iterator-method":62}],64:[function(a,b,c){var d=a("./$.classof"),e=a("./$.wks")("iterator"),f=a("./$.iterators");b.exports=a("./$.core").isIterable=function(a){var b=Object(a);return e in b||"@@iterator"in b||f.hasOwnProperty(d(b))}},{"./$.classof":16,"./$.core":18,"./$.iterators":38,"./$.wks":61}],65:[function(a,b,c){"use strict";var d=a("./$.ctx"),e=a("./$.def"),f=a("./$.to-object"),g=a("./$.iter-call"),h=a("./$.is-array-iter"),i=a("./$.to-length"),j=a("./core.get-iterator-method");e(e.S+e.F*!a("./$.iter-detect")(function(a){Array.from(a)}),"Array",{from:function(a){var b,c,e,k,l=f(a),m="function"==typeof this?this:Array,n=arguments[1],o=void 0!==n,p=0,q=j(l);if(o&&(n=d(n,arguments[2],2)),void 0==q||m==Array&&h(q))for(b=i(l.length),c=new m(b);b>p;p++)c[p]=o?n(l[p],p):l[p];else for(k=q.call(l),c=new m;!(e=k.next()).done;p++)c[p]=o?g(k,n,[e.value,p],!0):e.value;return c.length=p,c}})},{"./$.ctx":19,"./$.def":20,"./$.is-array-iter":31,"./$.iter-call":33,"./$.iter-detect":36,"./$.to-length":57,"./$.to-object":58,"./core.get-iterator-method":62}],66:[function(a,b,c){"use strict";var d=a("./$.unscope"),e=a("./$.iter-step"),f=a("./$.iterators"),g=a("./$.to-iobject");a("./$.iter-define")(Array,"Array",function(a,b){this._t=g(a),this._i=0,this._k=b},function(){var a=this._t,b=this._k,c=this._i++;return!a||c>=a.length?(this._t=void 0,e(1)):"keys"==b?e(0,c):"values"==b?e(0,a[c]):e(0,[c,a[c]])},"values"),f.Arguments=f.Array,d("keys"),d("values"),d("entries")},{"./$.iter-define":35,"./$.iter-step":37,"./$.iterators":38,"./$.to-iobject":56,"./$.unscope":60}],67:[function(a,b,c){var d=a("./$.to-object");a("./$.object-sap")("keys",function(a){return function(b){return a(d(b))}})},{"./$.object-sap":43,"./$.to-object":58}],68:[function(a,b,c){},{}],69:[function(a,b,c){"use strict";var d,e=a("./$"),f=a("./$.library"),g=a("./$.global"),h=a("./$.ctx"),i=a("./$.classof"),j=a("./$.def"),k=a("./$.is-object"),l=a("./$.an-object"),m=a("./$.a-function"),n=a("./$.strict-new"),o=a("./$.for-of"),p=a("./$.set-proto").set,q=a("./$.same"),r=a("./$.species"),s=a("./$.wks")("species"),t=a("./$.uid")("record"),u=a("./$.microtask"),v="Promise",w=g.process,x="process"==i(w),y=g[v],z=function(a){var b=new y(function(){});return a&&(b.constructor=Object),y.resolve(b)===b},A=function(){function b(a){var c=new y(a);return p(c,b.prototype),c}var c=!1;try{if(c=y&&y.resolve&&z(),p(b,y),b.prototype=e.create(y.prototype,{constructor:{value:b}}),b.resolve(5).then(function(){})instanceof b||(c=!1),c&&a("./$.support-desc")){var d=!1;y.resolve(e.setDesc({},"then",{get:function(){d=!0}})),c=d}}catch(f){c=!1}return c}(),B=function(a){return k(a)&&(A?"Promise"==i(a):t in a)},C=function(a,b){return f&&a===y&&b===d?!0:q(a,b)},D=function(a){var b=l(a)[s];return void 0!=b?b:a},E=function(a){var b;return k(a)&&"function"==typeof(b=a.then)?b:!1},F=function(a,b){if(!a.n){a.n=!0;var c=a.c;u(function(){for(var d=a.v,e=1==a.s,f=0,h=function(b){var c,f,g=e?b.ok:b.fail;try{g?(e||(a.h=!0),c=g===!0?d:g(d),c===b.P?b.rej(TypeError("Promise-chain cycle")):(f=E(c))?f.call(c,b.res,b.rej):b.res(c)):b.rej(d)}catch(h){b.rej(h)}};c.length>f;)h(c[f++]);c.length=0,a.n=!1,b&&setTimeout(function(){var b,c,e=a.p;G(e)&&(x?w.emit("unhandledRejection",d,e):(b=g.onunhandledrejection)?b({promise:e,reason:d}):(c=g.console)&&c.error&&c.error("Unhandled promise rejection",d)),a.a=void 0},1)})}},G=function(a){var b,c=a[t],d=c.a||c.c,e=0;if(c.h)return!1;for(;d.length>e;)if(b=d[e++],b.fail||!G(b.P))return!1;return!0},H=function(a){var b=this;b.d||(b.d=!0,b=b.r||b,b.v=a,b.s=2,b.a=b.c.slice(),F(b,!0))},I=function(a){var b,c=this;if(!c.d){c.d=!0,c=c.r||c;try{(b=E(a))?u(function(){var d={r:c,d:!1};try{b.call(a,h(I,d,1),h(H,d,1))}catch(e){H.call(d,e)}}):(c.v=a,c.s=1,F(c,!1))}catch(d){H.call({r:c,d:!1},d)}}};A||(y=function(a){m(a);var b={p:n(this,y,v),c:[],a:void 0,s:0,d:!1,v:void 0,h:!1,n:!1};this[t]=b;try{a(h(I,b,1),h(H,b,1))}catch(c){H.call(b,c)}},a("./$.mix")(y.prototype,{then:function(a,b){var c=l(l(this).constructor)[s],d={ok:"function"==typeof a?a:!0,fail:"function"==typeof b?b:!1},e=d.P=new(void 0!=c?c:y)(function(a,b){d.res=a,d.rej=b});m(d.res),m(d.rej);var f=this[t];return f.c.push(d),f.a&&f.a.push(d),f.s&&F(f,!1),e},"catch":function(a){return this.then(void 0,a)}})),j(j.G+j.W+j.F*!A,{Promise:y}),a("./$.tag")(y,v),r(y),r(d=a("./$.core")[v]),j(j.S+j.F*!A,v,{reject:function(a){return new this(function(b,c){c(a)})}}),j(j.S+j.F*(!A||z(!0)),v,{resolve:function(a){return B(a)&&C(a.constructor,this)?a:new this(function(b){b(a)})}}),j(j.S+j.F*!(A&&a("./$.iter-detect")(function(a){y.all(a)["catch"](function(){})})),v,{all:function(a){var b=D(this),c=[];return new b(function(d,f){o(a,!1,c.push,c);var g=c.length,h=Array(g);g?e.each.call(c,function(a,c){b.resolve(a).then(function(a){h[c]=a,--g||d(h)},f)}):d(h)})},race:function(a){var b=D(this);return new b(function(c,d){o(a,!1,function(a){b.resolve(a).then(c,d)})})}})},{"./$":39,"./$.a-function":14,"./$.an-object":15,"./$.classof":16,"./$.core":18,"./$.ctx":19,"./$.def":20,"./$.for-of":24,"./$.global":25,"./$.is-object":32,"./$.iter-detect":36,"./$.library":40,"./$.microtask":41,"./$.mix":42,"./$.same":46,"./$.set-proto":47,"./$.species":49,"./$.strict-new":50,"./$.support-desc":52,"./$.tag":53,"./$.uid":59,"./$.wks":61}],70:[function(a,b,c){"use strict";var d=a("./$.string-at")(!0);a("./$.iter-define")(String,"String",function(a){this._t=String(a),this._i=0},function(){var a,b=this._t,c=this._i;return c>=b.length?{value:void 0,done:!0}:(a=d(b,c),this._i+=a.length,{value:a,done:!1})})},{"./$.iter-define":35,"./$.string-at":51}],71:[function(a,b,c){a("./es6.array.iterator");var d=a("./$.iterators");d.NodeList=d.HTMLCollection=d.Array},{"./$.iterators":38,"./es6.array.iterator":66}],72:[function(a,b,c){function d(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function e(a){return"function"==typeof a}function f(a){return"number"==typeof a}function g(a){return"object"==typeof a&&null!==a}function h(a){return void 0===a}b.exports=d,d.EventEmitter=d,d.prototype._events=void 0,d.prototype._maxListeners=void 0,d.defaultMaxListeners=10,d.prototype.setMaxListeners=function(a){if(!f(a)||0>a||isNaN(a))throw TypeError("n must be a positive number");return this._maxListeners=a,this},d.prototype.emit=function(a){var b,c,d,f,i,j;if(this._events||(this._events={}),"error"===a&&(!this._events.error||g(this._events.error)&&!this._events.error.length)){if(b=arguments[1],b instanceof Error)throw b;throw TypeError('Uncaught, unspecified "error" event.')}if(c=this._events[a],h(c))return!1;if(e(c))switch(arguments.length){case 1:c.call(this);break;case 2:c.call(this,arguments[1]);break;case 3:c.call(this,arguments[1],arguments[2]);break;default:for(d=arguments.length,f=new Array(d-1),i=1;d>i;i++)f[i-1]=arguments[i];c.apply(this,f)}else if(g(c)){for(d=arguments.length,f=new Array(d-1),i=1;d>i;i++)f[i-1]=arguments[i];for(j=c.slice(),d=j.length,i=0;d>i;i++)j[i].apply(this,f)}return!0},d.prototype.addListener=function(a,b){var c;if(!e(b))throw TypeError("listener must be a function");if(this._events||(this._events={}),this._events.newListener&&this.emit("newListener",a,e(b.listener)?b.listener:b),this._events[a]?g(this._events[a])?this._events[a].push(b):this._events[a]=[this._events[a],b]:this._events[a]=b,g(this._events[a])&&!this._events[a].warned){var c;c=h(this._maxListeners)?d.defaultMaxListeners:this._maxListeners,c&&c>0&&this._events[a].length>c&&(this._events[a].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[a].length),"function"==typeof console.trace&&console.trace())}return this},d.prototype.on=d.prototype.addListener,d.prototype.once=function(a,b){function c(){this.removeListener(a,c),d||(d=!0,b.apply(this,arguments))}if(!e(b))throw TypeError("listener must be a function");var d=!1;return c.listener=b,this.on(a,c),this},d.prototype.removeListener=function(a,b){var c,d,f,h;if(!e(b))throw TypeError("listener must be a function");if(!this._events||!this._events[a])return this;if(c=this._events[a],f=c.length,d=-1,c===b||e(c.listener)&&c.listener===b)delete this._events[a],this._events.removeListener&&this.emit("removeListener",a,b);else if(g(c)){for(h=f;h-->0;)if(c[h]===b||c[h].listener&&c[h].listener===b){d=h;break}if(0>d)return this;1===c.length?(c.length=0,delete this._events[a]):c.splice(d,1),this._events.removeListener&&this.emit("removeListener",a,b)}return this},d.prototype.removeAllListeners=function(a){var b,c;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[a]&&delete this._events[a],this;if(0===arguments.length){for(b in this._events)"removeListener"!==b&&this.removeAllListeners(b);return this.removeAllListeners("removeListener"),this._events={},this}if(c=this._events[a],e(c))this.removeListener(a,c);else for(;c.length;)this.removeListener(a,c[c.length-1]);return delete this._events[a],this},d.prototype.listeners=function(a){var b;return b=this._events&&this._events[a]?e(this._events[a])?[this._events[a]]:this._events[a].slice():[]},d.listenerCount=function(a,b){var c;return c=a._events&&a._events[b]?e(a._events[b])?1:a._events[b].length:0}},{}],73:[function(a,b,c){c.createAtom=function(a,b){function c(b){if(!e(b)){var c=new Error(b+" failed validation");throw c.name="AssertionError",c}var g=a;a=b,Object.keys(d).forEach(function(a){d[a](a,f,g,b)})}var d={},e=b&&b.validator||function(){return!0},f={addWatch:function(a,b){d[a]=b},removeWatch:function(a){delete d[a]},swap:function(b){var d=[a].concat([].slice.call(arguments,1));c(b.apply(null,d))},reset:function(a){c(a)},deref:function(){return a},toString:function(){return"Atom("+JSON.stringify(a)+")"}};return f}},{}],74:[function(a,b,c){"use strict";function d(a,b){for(var c=0,d=b.length;d>c;++c){var e=a(b[c]);if(e)return e}}function e(a,b){for(var c=0,d=b.length;d>c;++c)if(a(b[c]))return b[c]}function f(a,b){var c=b.host,d=b.port,e=b.scheme;return c?(d&&(c=c.replace(/(:.*)?$/,":"+d)),(e||"http")+"://"+c.replace(/\/$/,"")+a):a}function g(a){var b=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return a?f(a.paramNames.reduce(function(a,c){return a.replace(":"+c,b[c])},a.route),b):null}function h(a,b,c){return g(e(function(a){return a.page===b},a),c)}function i(){var a=arguments.length<=0||void 0===arguments[0]?[]:arguments[0];return a.reduce(function(a,b){var c=o(b,2),d=c[0],e=c[1];return a[d]=e,a},{})}function j(a){var b=a.query,c=a.path,d=p(b).map(function(a){return null===b[a]||void 0===b[a]?null:b[a]===!0?a:a+"="+b[a]}).filter(function(a){return a}).join("&");return c+(d?"?"+d:"")}function k(a,b){var c=a.regexp,d=a.page,e=a.paramNames,f=b.match(q),g=o(f,6),h=g[1],j=g[2],k=g[3],l=g[4],m=g[5],n=l.match(c);return n?{page:d,url:b,path:l,host:j,port:Number(k||80),scheme:h||"http",params:i(n.slice(1).map(function(a,b){return[e[b],a]})),query:i(m&&m.split("&").map(function(a){return a.split("=")}))}:null}function l(a,b){return d(function(a){return k(a,b)},a)||{params:{}}}function m(a,b){var c=(b.match(/:[a-zA-Z0-9]+/g)||[]).map(function(a){return a.slice(1)});return{page:a,paramNames:c,route:b,regexp:new RegExp(c.reduce(function(a,b){return a.replace(":"+b,"([^/?]+)")},b)+"$")}}function n(a){return a.map(function(a){var b=o(a,2),c=b[0],d=b[1];return m(c,d)})}var o=a("babel-runtime/helpers/sliced-to-array")["default"],p=a("babel-runtime/core-js/object/keys")["default"];Object.defineProperty(c,"__esModule",{value:!0}),c.getURL=h,c.toURLString=j,c.match=k,c.getPage=l,c.createRoute=m,c.createRoutes=n;var q=/(?:(?:(https?):)?\/\/([^:\/]+)(?::(\d+))?)?([^\?]*)(?:\?(.*))?/},{"babel-runtime/core-js/object/keys":4,"babel-runtime/helpers/sliced-to-array":6}],75:[function(a,b,c){"use strict";function d(a,b){var c=a.getData&&a.getData(b);return c&&c.then?c:new i(function(a,b){return a(c)})}function e(a,b){return a.prepareData?a.prepareData(b):b}function f(a){function b(){var a=v(e(B,A),A.location,A.state.deref());return a.title&&(document.title=a.title),t(B.render,a),a}function c(a){return d(a,A).then(function(c){return A.pageData=c,B=a,b()})["catch"](function(a){return setTimeout(function(){throw a})})}function f(a){"function"==typeof a&&(a=a(A.state.deref())),A.state.swap(function(b){j(a).forEach(function(c){null===a[c]?delete b[c]:b[c]=a[c]})}),w.emit("updateState",A.state.deref())}function n(a){var b=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];f(b);var d=k.getPage(x,a);return A.location=d,c(z[d.page]||z[404])}function o(a){if(a){for(var b=g(a),c=b[0],d=b.slice(1),e=arguments.length,f=Array(e>1?e-1:0),j=1;e>j;j++)f[j-1]=arguments[j];var k=d.concat(f),l=y.listeners(c);if(0===l.length)throw new Error("Tried to trigger action "+c+" ("+k+"), which has no handlers");return i.all(l.map(function(a){return a.apply(void 0,h(k))}))}}function p(){var a=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];return f(a),c(B)}function q(){return k.toURLString(A.location)}function r(a){f(a),B&&b()}function s(a){if(!B)throw new Error("Cannot update query params before a page is loaded");return A.location.query=a,history.pushState({},"",q()),p()}var t=a.render,u=a.state,v=a.finalizeData,w=new l.EventEmitter,x=[],y=new l.EventEmitter,z={},A={state:m.createAtom(u||{})},B=void 0;v=v||function(a){return a};var C={};return{loadURL:n,triggerAction:o,refresh:p,getCurrentURL:q,on:w.on.bind(w),off:w.removeListener.bind(w),getURL:function(){for(var a=arguments.length,b=Array(a),c=0;a>c;c++)b[c]=arguments[c];return k.getURL.apply(void 0,[x].concat(b))},addAction:function(a,b){y.on(a,function(){for(var a=arguments.length,c=Array(a),d=0;a>d;d++)c[d]=arguments[d];return b.apply(void 0,c.concat([A]))})},performAction:function(a){return function(b){b&&b.preventDefault&&b.preventDefault(),o(a,b&&b.nativeEvent||b)}},addPage:function(a,b,c){x.push(k.createRoute(a,b)),z[a]=c},start:function(){return window.onpopstate=function(){n(location.href)},n(location.href)},gotoURL:function(a){var b=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return history.pushState({},"",a),n(a,b)},updateQueryParams:function(a){return s(j(a).reduce(function(b,c){return b[c]=a[c],b},A.location.query))},clearQueryParams:function(){return s({})},updateState:r,flashState:function(a){var b=arguments.length<=1||void 0===arguments[1]?5e3:arguments[1];f(a);var c=(new Date).getTime()+b;j(a).forEach(function(a){return C[a]=c}),setTimeout(function(){var a=(new Date).getTime();r(j(C).reduce(function(b,c){return C[c]<=a&&(b[c]=null,delete C[c]),b},{}))},b)}}}var g=a("babel-runtime/helpers/to-array")["default"],h=a("babel-runtime/helpers/to-consumable-array")["default"],i=a("babel-runtime/core-js/promise")["default"],j=a("babel-runtime/core-js/object/keys")["default"];Object.defineProperty(c,"__esModule",{value:!0}),c.createApp=f;var k=a("./router"),l=a("events"),m=a("js-atom")},{"./router":74,"babel-runtime/core-js/object/keys":4,"babel-runtime/core-js/promise":5,"babel-runtime/helpers/to-array":7,"babel-runtime/helpers/to-consumable-array":8,events:72,"js-atom":73}]},{},[75])(75)});