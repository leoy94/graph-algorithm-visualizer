(this["webpackJsonpgraph-algorithm-visualizer"]=this["webpackJsonpgraph-algorithm-visualizer"]||[]).push([[0],{31:function(e,t,a){},33:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),s=a.n(i),o=(a(31),a(20)),c=a.n(o),l=a(23),d=(a(33),a(6)),u=a(8),h="createGraph",f="setStart",p="setEnd",b="blockOrUnblockCell",g="setAlg",m="pause",v="play",j="getNext",y="generateFrames",O="clearFrames",x="resetAnimator",k=a(1);function w(e,t,a,n,r){return function(i,s){"mousedown"===i.type||"mouseenter"===i.type?i.ctrlKey&&1===i.buttons&&(i.preventDefault(),e(s),r&&n()):"contextmenu"===i.type?(i.preventDefault(),a(s),r&&n()):"click"===i.type&&(0!==i.button||i.ctrlKey||(t(s),r&&n()))}}var F=Object(d.b)((function(e,t){return Object(u.a)({},t)}),(function(e){return{blockOrUnBlock:function(t){return e({type:b,payload:{id:t}})},setStart:function(t){return e({type:f,payload:{id:t}})},setEnd:function(t){return e({type:p,payload:{id:t}})},clearFrames:function(){return e({type:O})}}}))((function(e){String.fromCharCode(160);var t=e.id,a=Object(d.c)((function(e){return{blocked:e.gameboard.get(t).payload.blocked,start:e.startVertexid,end:e.endVertexid,focusedNode:e.animator.focusedNode,visited:e.animator.visitedNodes.has(t),inSolution:e.animator.solutionNodes.has(t),clearOnEdit:e.animator.frames.size>0}})),n=a.blocked,r=a.start,i=a.end,s=a.focusedNode,o=a.visited,c=a.inSolution,l=a.clearOnEdit;return Object(k.jsx)("div",{className:"cell",onContextMenu:function(a){return w(e.blockOrUnBlock,e.setStart,e.setEnd,e.clearFrames,l)(a,t)},onClick:function(a){return w(e.blockOrUnBlock,e.setStart,e.setEnd,e.clearFrames,l)(a,t)},onMouseDown:function(a){return w(e.blockOrUnBlock,e.setStart,e.setEnd,e.clearFrames,l)(a,t)},onMouseEnter:function(a){return w(e.blockOrUnBlock,e.setStart,e.setEnd,e.clearFrames,l)(a,t)},children:Object(k.jsxs)("div",{style:{backgroundColor:function(e,a,n){var r="slategrey";return n===s&&c&&t!=a&&t!=n?r="lightgreen":t===s&&n!==s?r="green":a===t?r="yellow":n===t?r="orange":o?r="lightblue":e&&(r="black"),r}(n,r,i),width:"1vw",height:"1vw",minHeight:"15px",minWidth:"15px",fontSize:"10px",padding:"0",margin:"0"},children:[r===t?"start":"",i===t?"end":""]})})}));function N(e){for(var t=0,a=[],n=1;t<e.height;){for(var r=[];n<=(t+1)*e.width;){var i=Object(k.jsx)(F,{id:n},n);r.push(i),n++,i=null}a.unshift(r),r=[],t++}return a.map((function(e,t){return Object(k.jsx)("div",{className:"row",children:e},"Row "+t)}))}var z=Object(d.b)((function(e){return{size:e.size}}),(function(e){return{}}))((function(e){return Object(k.jsx)("div",{className:"graph",style:{marginRight:"50px"},children:N(e.size)})})),E=a(11);var S,C=Object(d.b)((function(e){return{size:e.size,currentFrame:e.animator.currentFrame,isPaused:e.animator.isPaused}}),(function(e){return{createGameBoard:function(t){return e({type:h,payload:Object(u.a)({},t)})},pause:function(){return e({type:m})},play:function(){e({type:v})},resetAnimator:function(){return e({type:x})},setAlg:function(t){return e({type:g,payload:{alg:t}})}}}))((function(e){var t=Object(n.useState)({height:5,width:5}),a=Object(E.a)(t,2),r=a[0],i=a[1];return Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{style:{display:"flex"},children:Object(k.jsxs)("ol",{style:{margin:"0",marginTop:"15px",marginLeft:"50px",padding:"0",textAlign:"left",color:"red"},children:[Object(k.jsxs)("li",{children:["Set Start",Object(k.jsx)("ul",{children:Object(k.jsx)("li",{children:Object(k.jsx)("span",{children:"Left-click a cell"})})})]}),Object(k.jsxs)("li",{children:["Set End",Object(k.jsx)("ul",{children:Object(k.jsx)("li",{children:Object(k.jsx)("span",{children:"Right-click a cell"})})})]}),Object(k.jsxs)("li",{children:["Block/Unblock Cells",Object(k.jsx)("ul",{children:Object(k.jsx)("li",{children:Object(k.jsx)("span",{children:"Left-click + Hold-down CTRL + drag cursor over cells"})})})]})]})}),Object(k.jsx)("div",{style:{display:"flex",padding:"0"},children:Object(k.jsxs)("form",{style:{margin:"0",padding:"0",marginTop:"15px",marginLeft:"35px"},onSubmit:function(t){console.log("Generated New Graph!"),t.preventDefault(),e.createGameBoard(r)},children:[Object(k.jsx)("input",{style:{maxWidth:"50px",marginRight:"5px"},type:"text",placeholder:"height",onChange:function(e){var t=parseInt(e.target.value);i(Object(u.a)(Object(u.a)({},r),{},{height:t}))}}),Object(k.jsx)("input",{style:{maxWidth:"50px",marginRight:"5px"},type:"text",placeholder:"width",onChange:function(e){var t=parseInt(e.target.value);i(Object(u.a)(Object(u.a)({},r),{},{width:t}))}}),Object(k.jsx)("input",{type:"submit",value:"Generate"})]})}),Object(k.jsx)("div",{style:{display:"flex",padding:"0"}}),Object(k.jsxs)("div",{style:{display:"flex",padding:"0"},children:[Object(k.jsx)("div",{style:{margin:"0",padding:"0",marginTop:"15px",marginLeft:"35px"},children:Object(k.jsxs)("select",{name:"algorithms",onChange:function(t){return e.setAlg(t.target.value)},children:[Object(k.jsx)("option",{value:"bfs",children:"bfs"}),Object(k.jsx)("option",{value:"dfs",children:"dfs"}),Object(k.jsx)("option",{value:"Bi-Dir",children:"Bi-Dir"})]})}),Object(k.jsxs)("div",{style:{margin:"0",padding:"0",marginTop:"15px",marginLeft:"5px"},children:[Object(k.jsx)("button",{onClick:e.play,children:"Play"}),Object(k.jsx)("button",{onClick:e.pause,children:"Pause"}),Object(k.jsx)("button",{onClick:e.resetAnimator,children:"Reset"})]})]})]})})),A=a(14),V=a(3),B=a(18),M=a(15),P=a(4),G=a(5),D=a(2),L=a(9),R=a(7),T=a(26),U=function(e){Object(P.a)(a,e);var t=Object(G.a)(a);function a(){return Object(D.a)(this,a),t.apply(this,arguments)}return Object(R.a)(a,[{key:"getEdges",value:function(e,t){var n=e.height,r=e.width,i=[],s=a.getCoordinates(this.id,n,r),o=s.x,c=s.y,l=this.payload.blocked,d=o+1+(c-1)*r;if(!l&&d<n*r+1&&d<=c*r){var u=t.get(d);u&&!u.payload.blocked&&i.push(d)}var h=o-1+(c-1)*r;if(!l){var f=t.get(h);h>0&&h>(c-1)*r&&f&&!f.payload.blocked&&i.push(h)}var p=o+c*r;if(!l){var b=t.get(p);p<n*r+1&&b&&!b.payload.blocked&&i.push(p)}var g=o+(c-2)*r;if(!l){var m=t.get(g);g>0&&m&&!m.payload.blocked&&i.push(g)}return i}}]),a}(function(){function e(t,a){Object(D.a)(this,e),this.payload={blocked:!1},this.id=-1,this.edges=[],this.payload=t,this.id=a}return Object(R.a)(e,[{key:"addEdge",value:function(e){try{this.edges&&this.edges.push(e)}catch(t){console.log(t)}}},{key:"removeEdge",value:function(e){try{this.edges&&(this.edges=this.edges.filter((function(t){return t!==e})))}catch(t){console.log(t)}}},{key:"Edges",get:function(){return this.edges}}],[{key:"getCoordinates",value:function(e,t,a){var n=Math.ceil(e/a);return{x:a-(n*a-e),y:n}}}]),e}()),I=function e(t,a){Object(D.a)(this,e),this.processed=!1,this.animation="default",this.payload={},this.payload=a,this.animation=t},W=function(e){Object(P.a)(a,e);var t=Object(G.a)(a);function a(){return Object(D.a)(this,a),t.apply(this,arguments)}return Object(R.a)(a,[{key:"addVertex",value:function(e,t){this.set(t,new U(e,t))}},{key:"addEdge",value:function(e,t){this.get(e).addEdge(t)}},{key:"removeEdge",value:function(e,t){this.get(e).removeEdge(t)}},{key:"bfs",value:function(e,t,a){var n=new Map,r=[],i=new Map;for(r.push([e,-1]);r.length>0;){var s=r.pop(),o=void 0,c=null;if(s){var l=Object(E.a)(s,2);o=l[0],c=l[1]}if(null!=o&&i.set(i.size,new I("focus",{id:o})),o==t){for(var d=[o];c>-1;)d.unshift(c),c=n.get(c);return{length:d.length,path:d,frames:i}}var u=void 0;a&&(u=this.get(o).getEdges(a,this));var h,f=Object(L.a)(u);try{var p=function(){var e=h.value;n.has(e)||r.some((function(t){return t[0]===e}))||r.unshift([e,o])};for(f.s();!(h=f.n()).done;)p()}catch(b){f.e(b)}finally{f.f()}n.set(o,c)}return{length:0,path:void 0,frames:i}}},{key:"dfs",value:function(e,t,a){var n=new Map,r=[],i=new Map;for(r.push([e,-1]);r.length>0;){var s=r.pop(),o=void 0,c=void 0;if(s){var l=Object(E.a)(s,2);o=l[0],c=l[1]}if(null!=o&&i.set(i.size,new I("focus",{id:o})),o==t){for(var d=[o];c>-1;)d.unshift(c),c=n.get(c);return{length:d.length,path:d,frames:i}}var u,h=this.get(o).getEdges(a,this),f=Object(L.a)(h);try{var p=function(){var e=u.value;n.has(e)||r.some((function(t){return t[0]===e}))||r.push([e,o])};for(f.s();!(u=f.n()).done;)p()}catch(b){f.e(b)}finally{f.f()}n.set(o,c)}return{length:0,path:void 0,frames:i}}}],[{key:"vertexFactory",value:function(e,t){var a,n=Object(L.a)(t);try{for(n.s();!(a=n.n()).done;){var r=a.value;e.addVertex(r.payload,r.id)}}catch(i){n.e(i)}finally{n.f()}}},{key:"edgeFactory",value:function(e,t){var a,n=Object(L.a)(t);try{for(n.s();!(a=n.n()).done;){var r=a.value,i=Object(E.a)(r,2),s=i[0],o=i[1];e.addEdge(s,o)}}catch(c){n.e(c)}finally{n.f()}}}]),a}(Object(T.a)(Map)),H=function(e){Object(P.a)(a,e);var t=Object(G.a)(a);function a(){var e;return Object(D.a)(this,a),(e=t.call(this)).focusedNode=null,e.visitedNodes=new Map,e.solutionNodes=new Map,e.addAnimation("focus"),e}return Object(R.a)(a,[{key:"focus",value:function(e){this.focusedNode=e.id}},{key:"processFrame",value:function(){var e=this.getFrame(this.currentFrame);if(e){var t=this.getAnimation(e.animation);t&&(this[t](e.payload),e.processed=!0,this.visitedNodes.set(e.payload.id,e.payload.id),this.currentFrame++)}}},{key:"generateFrames",value:function(e,t,a,n,r){if(n&&r)try{e[t];var i=e[t](n,r,a),s=i.frames,o=i.path;if(this.frames=s,this.solutionNodes.clear(),o){var c,l=Object(L.a)(o);try{for(l.s();!(c=l.n()).done;){var d=c.value;this.solutionNodes.set(d,d)}}catch(u){l.e(u)}finally{l.f()}}return s}catch(h){console.log(h)}else;}}]),a}(function(e){Object(P.a)(a,e);var t=Object(G.a)(a);function a(){return Object(D.a)(this,a),t.call(this)}return a}(function(){function e(){Object(D.a)(this,e),this.animations=new Map,this.frames=new Map,this.currentFrame=0,this.isPaused=!0}return Object(R.a)(e,[{key:"addAnimation",value:function(e){this.animations.set(e,e)}},{key:"removeAnimation",value:function(e){try{var t=this.getAnimation(e);return this.animations.delete(e),t}catch(a){return console.log(a),null}}},{key:"getAnimation",value:function(e){try{var t=this.animations.get(e);if(!t)throw new Error("animation doesnt exist");return t}catch(a){return null}}},{key:"addFrame",value:function(e){this.frames.set(this.frames.size,e)}},{key:"removeFrame",value:function(e){try{var t=this.getFrame(e);return this.frames.delete(e),t}catch(a){return console.log(a),null}}},{key:"getFrame",value:function(e){try{return this.frames.get(e)}catch(t){return null}}}]),e}()));!function(e){e[e.default=0]="default"}(S||(S={}));var J,K,q=function e(t,a,n,r){var i=this;return Object(D.a)(this,e),this.name="default",this.size={height:20,width:20},this[V.c]=!0,this.createGameboard=function(){for(var e=new W,t=i.size,a=t.height*t.width,n=1;n<=a;n++)e.addVertex({blocked:!1},n);return i.gameboard=e,e},this.gameboard=this.createGameboard(),this.animations=void 0,this.currentAlg="bfs",this.algs=S,a&&n&&(this.size.height=a,this.size.width=n),r&&(this.algs=r),t&&(this.name=t),this};(K=J||(J={}))[K.BFS=0]="BFS",K[K.DFS=1]="DFS";var Q=function(e){Object(P.a)(a,e);var t=Object(G.a)(a);function a(e,n,r){var i;return Object(D.a)(this,a),(i=t.call(this,e,n,r,J)).startVertexid=1,i.endVertexid=i.size.height*i.size.width,i.animator=new H,i.createGameboard(),Object(B.a)(i,Object(M.a)(i))}return a}(q),X=Object(A.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return new Q("Graph Visualizer",t.payload.height,t.payload.width);case y:return Object(V.a)(e,(function(t){t.animator.generateFrames(e.gameboard,t.currentAlg,t.size,t.startVertexid,t.endVertexid),t.animator.currentFrame=0,t.animator.visitedNodes.clear(),t.animator.isPaused=!0,t.animator.focusedNode=null}));case j:return e.animator.processFrame(),e;case v:return Object(V.a)(e,(function(t){t.animator.isPaused=!1,0===t.animator.frames.size&&t.animator.generateFrames(e.gameboard,t.currentAlg,t.size,t.startVertexid,t.endVertexid)}));case m:return e.animator.isPaused=!0,e;case x:Object(V.a)(e,(function(e){e.animator.currentFrame=0,e.animator.focusedNode=null,e.animator.visitedNodes.clear(),e.animator.isPaused=!0}));case O:return Object(V.a)(e,(function(e){e.animator.currentFrame=0,e.animator.focusedNode=null,e.animator.frames.clear(),e.animator.solutionNodes.clear(),e.animator.visitedNodes.clear(),e.animator.isPaused=!0}));case g:return Object(V.a)(e,(function(e){e.currentAlg=t.payload.alg,e.animator.currentFrame=0,e.animator.focusedNode=null,e.animator.frames.clear(),e.animator.solutionNodes.clear(),e.animator.visitedNodes.clear(),e.animator.isPaused=!0}));case f:return Object(V.a)(e,(function(e){e.startVertexid=t.payload.id;var a=e.gameboard.get(t.payload.id).payload.blocked;!0===a&&(a=!1,e.gameboard.get(t.payload.id).payload.blocked=a),e.start===e.end&&(e.end=null)}));case p:return Object(V.a)(e,(function(e){e.endVertexid=t.payload.id;var a=e.gameboard.get(t.payload.id).payload.blocked;!0===a&&(a=!1,e.gameboard.get(t.payload.id).payload.blocked=a),e.start===e.end&&(e.start=null)}));case b:return Object(V.a)(e,(function(e){var a=e.gameboard.get(t.payload.id);a.payload.blocked=!a.payload.blocked,t.payload.id===e.start?e.start=null:t.payload.id===e.end&&(e.end=null)}));default:return new Q("Graph Visualizer")}}));(function(){var e=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=X.subscribe((function(){!1===X.getState().animator.isPaused&&requestAnimationFrame((function(){return X.dispatch({type:j})}))})),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()();var Y=function(){return String.fromCharCode(160),Object(k.jsx)("div",{className:"App",style:{backgroundColor:"#282c34",height:"100vh",color:"white",display:"flex"},children:Object(k.jsxs)(d.a,{store:X,children:[Object(k.jsx)(C,{}),Object(k.jsx)(z,{})]})})},Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),i(e),s(e)}))};Object(V.b)(),s.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(Y,{})}),document.getElementById("root")),Z()}},[[43,1,2]]]);
//# sourceMappingURL=main.e4ea850c.chunk.js.map