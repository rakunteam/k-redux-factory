var n=function(n){return function(){return function(){return function(){return function(){return function(t){return Object.assign({},t,{state:n(t.action,t.state)})}}}}}},t=function(n){return function(){return function(){return function(){return function(){return function(t){return Object.assign({},t,{action:n(t.action)})}}}}}},r=function(n){return function(t){return function(){return function(){return function(){return function(){return function(r){var u=r.action;return!n||n.test(u.type)?{action:u,state:t(r.state)}:r}}}}}}},u=function(n){return function(r){return function(){return function(){return function(){return function(){return function(u){var e=u.action,c=e.payload;return!n||n.test(e.type)?t(function(n){return Object.assign({},n,{payload:r(c)})})()()()()(u):u}}}}}}};export{n as reducer,t as mapAction,r as mapState,u as mapPayload};
