var n=function(n){return"@@krf/"+n.toUpperCase()},t=function(n){return function(t){return(n?">":"")+n+">"+t}},r=function(r){return function(e){return n("SET"+t(r)(e))}},e=function(n){return function(t){return function(e){return{type:r(n)(t),payload:e}}}},u=function(r){return function(e){return n("RESET"+t(r)(e))}},i=function(n){return function(t){return function(){return{type:u(n)(t)}}}},o=function(r){return function(e){return n("ADD"+t(r)(e))}},c=function(r){return function(e){return n("UPDATE"+t(r)(e))}},a=function(n){return function(t){return function(r){return{type:c(n)(t),payload:r}}}},f=function(r){return function(e){return n("REMOVE"+t(r)(e))}},s=function(r){return function(e){return n("ADD_OR_UPDATE"+t(r)(e))}},d={set:e,SET:r,add:function(n){return function(t){return function(r){return{type:o(n)(t),payload:r}}}},ADD:o,reset:i,RESET:u,remove:function(n){return function(t){return function(r){return{type:f(n)(t),payload:r}}}},REMOVE:f,update:a,UPDATE:c,addOrUpdate:function(n){return function(t){return function(r){return{type:s(n)(t),payload:r}}}},ADD_OR_UPDATE:s},p={data:{},keys:[],array:[],initialized:!1},y=function(n){return Array.isArray(n)?n:[n]},l=function(n,t){var r={};return y(t).forEach(function(t){r[t[n]]=t}),r},v=function(n){return function(t){return Object.assign({},n,{data:t,keys:Object.keys(t),array:Object.values(t),initialized:!0})}},g=function(n,t,r){return v(t)(l(n,y(r)))},O=function(n){return function(t,r,e){var u=y(e),i=[];return u.forEach(function(e){(n||function(n){return function(t){return void 0!==n.data[t]}}(r)(e[t]))&&i.push(Object.assign({},r.data[e[t]],e))}),0===i.length?r:v(r)(Object.assign({},r.data,l(t,i)))}},E=function(n,t){return void 0!==t?g(n,{},t):p},b=function(n){return function(t){return function(e){return function(i){return function(a,d){void 0===a&&(a=E(n,i)),void 0===d&&(d={});var p=d.payload;switch(d.type){case r(t)(e):return g(n,a,p);case o(t)(e):return function(n,t,r){return v(t)(Object.assign({},t.data,l(n,y(r))))}(n,a,p);case s(t)(e):return O(!0)(n,a,p);case f(t)(e):return function(n,t,r){var e=y(r),u=Object.assign({},t.data);return e.forEach(function(n){delete u[n]}),v(t)(u)}(0,a,p);case u(t)(e):return E(n,i);case c(t)(e):return O(!1)(n,a,p);default:return a}}}}}};var j=function(n,t){return t.split(".").reduce(function(n,t){return n&&n[t]},n)},A=function(n){return function(t){var r=t,e=n.name,u=n.path;return void 0!==u&&u.length>0&&(r=j(t,u)),r[e]}},m=function(n){return function(t){return function(r){return A(t)(r)[n]}}},D=m("keys"),h=m("array"),k=m("initialized"),T={},U=function(n){return void 0!==n?n:T},w=function(){return function(n){return function(t){return function(e){return function(i,o){void 0===i&&(i=U(e)),void 0===o&&(o={});var a=o.payload;switch(o.type){case r(n)(t):return a;case c(n)(t):return Object.assign({},i,a);case u(n)(t):return U(e);default:return i}}}}}};var R,S,z=function(n){return function(){return function(t){return A(n)(t)}}},P={keyValue:{middlewares:[function(n){return function(t){return function(r){return function(e){return function(u){return void 0===u&&(u={}),Object.assign({},u,{state:b(n)(t)(r)(e)(u.state,u.action)})}}}}}],actions:d,selectors:{getState:A,getKeys:D,getAsArray:h,getLength:function(n){return function(t){return D(n)(t).length}},isInitialized:k,get:function(n){return function(t){return function(r){var e=function(n){return m("data")(n)}(n)(r);return null==t?e:Array.isArray(t)?t.map(function(n){return e[n]}):e[t]}}},getBy:function(n){return function(t,r){return function(e){var u=h(n)(e);return Array.isArray(r)?u.filter(function(n){return r.includes(j(n,t))}):u.filter(function(n){return r===j(n,t)})}}},hasKey:function(n){return function(t){return function(r){return D(n)(r).includes(t)}}}}},simpleObject:{middlewares:[function(n){return function(t){return function(r){return function(e){return function(u){return void 0===u&&(u={}),Object.assign({},u,{state:w(n)(t)(r)(e)(u.state,u.action)})}}}}}],actions:{set:e,SET:r,reset:i,RESET:u,update:a,UPDATE:c},selectors:{get:z,isInitialized:function(n){return function(t){return void 0!==n.defaultData?A(n)(t)!==n.defaultData:z(n)()(t)!==T}}}}};var V={key:"id",type:"keyValue",prefix:""},x=function(n){return void 0===n&&(n={}),function(t){void 0===t&&(t={});var r=Object.assign({},V,t),e=r.key,u=r.type,i=r.prefix,o=r.name,c=r.defaultData,a=P[u];return Object.assign.apply(Object,[function(n){return function(t){return function(r){return function(e){return function(u){return function(i,o){void 0===o&&(o={});var c=o.type;void 0===c&&(c="UNKNOWN");var a={state:i,action:{type:c,payload:o.payload}};return(n.pre||[].concat(n.engine||[],n.post||[])).map(function(n){return n(t)(r)(e)(u)}).forEach(function(n){a=n(a)}),a.state}}}}}}(Object.assign({},n,{engine:a.middlewares}))(e)(i)(o)(c),{krfType:u}].concat(Object.keys(a.actions).map(function(n){return(R={})[n]=a.actions[n](i)(o),R}),Object.keys(a.selectors).map(function(n){return(S={})[n]=a.selectors[n](r),S})))}},_=function(){throw Error("parameter is not a middleware configuration, nor a factory option object.")},K=function(n){return void 0===n&&(n={}),function(t){return null==t&&_(),function(n){return n.engine||n.pre||n.post}(t)?function(r){return x(t)(Object.assign({},r,n))}:function(n){return!!n.name||"string"==typeof n}(t)?"string"==typeof t?x()(Object.assign({},{name:t},n)):x()(Object.assign({},t,n)):void _()}},N=K({type:"simpleObject"}),I=K({type:"keyValue"});export default K();export{N as simpleObject,I as keyValue};
