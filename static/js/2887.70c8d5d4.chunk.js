"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[2887,4801,7182,9563,1944,5277,7658,39,2420],{98335:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(7552),a=r(75785),o=r(66684);const l=(0,a.n9)()((e=>({resizeBar:{background:e.palette.action.disabledBackground,height:12,position:"relative",overflow:"hidden"},tick:{position:"absolute",height:"100%",pointerEvents:"none",background:e.palette.action.disabled,width:1},hiddenTick:{position:"absolute",height:"100%",width:5}})));function s({left:e,scrollLeft:t,idx:r,onDrag:a,onMouseDown:s}){const{classes:i}=l(),c=(0,n.useCallback)(((e,t)=>a(e,t,r)),[r,a]);return n.createElement(n.Fragment,null,n.createElement(o.A,{onDrag:c,onMouseDown:s,vertical:!0,className:i.hiddenTick,style:{left:e-t-2.5}}),n.createElement("div",{style:{left:e-t},className:i.tick}))}function i({widths:e,setWidths:t,checkbox:r,scrollLeft:a=0}){const{classes:o}=l(),i=[],[c,d]=(0,n.useState)();let m=r?52:0;for(let t=0;t<e.length;t++){const r=e[t];i[t]=r+m,m+=r}return n.createElement("div",{className:o.resizeBar},i.map(((r,o)=>n.createElement(s,{key:o,onMouseDown:()=>{d([...e])},left:o===i.length-1?r-3:r,onDrag:(r,n,a)=>{const o=[...e];o[a]=Math.max(c[a]-n,50),t(o)},idx:o,scrollLeft:a}))))}},20194:(e,t,r)=>{r.d(t,{X:()=>a});var n=r(7552);function a(){const e=(0,n.useRef)(null),[t,r]=(0,n.useState)(0);return(0,n.useEffect)((()=>{const t=setInterval((()=>{const t=e.current?.querySelector(".MuiDataGrid-virtualScroller");t&&r(t.scrollLeft)}),100);return()=>{clearInterval(t)}}),[]),{ref:e,scrollLeft:t}}},48927:(e,t,r)=>{r.r(t),r.d(t,{default:()=>j});var n=r(7552),a=r(29499),o=r(49823),l=r(68446),s=r(42489),i=r(36422),c=r(96316),d=r(76157),m=r(13476),u=r(98335),h=r(99546),f=r(20194),v=r(75785),p=r(67314),g=r(1343),w=r(93117),k=r(61723),b=r(61848),E=r(64359),A=r(9469);function S({model:e}){const{faceted:t}=e,[r,a]=(0,n.useState)(null),{showOptions:l,showFilters:s,showSparse:i,useShoppingCart:c}=t;return n.createElement(n.Fragment,null,n.createElement(p.Ay,{container:!0,spacing:4,alignItems:"center"},n.createElement(p.Ay,{item:!0},n.createElement(g.A,{label:"Search...",value:t.filterText,onChange:e=>t.setFilterText(e.target.value),InputProps:{endAdornment:n.createElement(w.A,{position:"end"},n.createElement(k.A,{onClick:()=>t.setFilterText("")},n.createElement(b.A,null)))}})),n.createElement(p.Ay,{item:!0},n.createElement(k.A,{onClick:e=>a(e.currentTarget)},n.createElement(E.A,null))),n.createElement(p.Ay,{item:!0},n.createElement(A.A,{model:e}))),n.createElement(o.Menu,{anchorEl:r,open:!!r,onClose:()=>a(null),onMenuItemClick:(e,t)=>{t(),a(null)},menuItems:[{label:"Add tracks to selection instead of turning them on/off",onClick:()=>t.setUseShoppingCart(!c),type:"checkbox",checked:c},{label:"Show sparse metadata columns",onClick:()=>t.setShowSparse(!i),checked:i,type:"checkbox"},{label:"Show facet filters",onClick:()=>t.setShowFilters(!s),checked:s,type:"checkbox"},{label:"Show extra table options",onClick:()=>t.setShowOptions(!l),checked:l,type:"checkbox"}]}))}var y=r(89003),C=r(48171),x=r(36715),M=r(98360),R=r(21909),T=r(57610);const N=(0,v.n9)()((e=>({facet:{margin:0,marginLeft:e.spacing(2)},select:{marginBottom:e.spacing(2)}})));function L({onClick:e}){return n.createElement(y.A,{title:"Clear selection on this facet filter"},n.createElement(k.A,{onClick:()=>e(),size:"small"},n.createElement(b.A,null)))}function D({visible:e,onClick:t}){return n.createElement(y.A,{title:"Minimize/expand this facet filter"},n.createElement(k.A,{onClick:()=>t(),size:"small"},e?n.createElement(R.A,null):n.createElement(T.A,null)))}const F=(0,l.observer)((function({column:e,vals:t,model:r}){const{classes:a}=N(),[o,l]=(0,n.useState)(!0),{faceted:s}=r,{filters:i}=s,{field:c}=e;return n.createElement(C.A,{className:a.facet,fullWidth:!0},n.createElement("div",null,n.createElement(x.A,{component:"span"},c),n.createElement(L,{onClick:()=>s.setFilter(c,[])}),n.createElement(D,{visible:o,onClick:()=>l(!o)})),o?n.createElement(M.A,{multiple:!0,native:!0,className:a.select,value:i.get(e.field)||[],onChange:t=>{s.setFilter(e.field,[...t.target.options].filter((e=>e.selected)).map((e=>e.value)))}},t.sort(((e,t)=>e[0].localeCompare(t[0]))).map((([e,t])=>n.createElement("option",{key:e,value:e},(0,h.coarseStripHTML)(e)," (",t,")")))):null)}));var H=r(6842);const I=(0,l.observer)((function({rows:e,columns:t,model:r}){const{faceted:a}=r,{filters:o}=a,l=t.slice(1),s=new Map(l.map((e=>[e.field,new Map]))),i=a.filters.keys(),c=l.map((e=>e.field)),d=new Set;for(const e of i)o.get(e)?.length&&d.add(e);for(const e of c)d.add(e);let m=e;for(const e of d){const t=s.get(e);for(const r of m){const n=(0,H.a)(e,r),a=t.get(n);n&&(void 0===a?t.set(n,1):t.set(n,a+1))}const r=o.get(e)?.length?new Set(o.get(e)):void 0;m=m.filter((t=>void 0===r||r.has((0,H.a)(e,t))))}return n.createElement("div",null,l.map((e=>n.createElement(F,{key:e.field,vals:[...s.get(e.field)],column:e,model:r}))))}));var P=r(48408);const z=(0,v.n9)()({cell:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},resizeHandle:{marginLeft:5,background:"grey",width:5}}),O=.75,W=(0,l.observer)((function({model:e}){const{classes:t}=z(),{view:r,selection:a,shownTrackIds:l,faceted:v}=e,{rows:p,panelWidth:g,showFilters:w,useShoppingCart:k,showOptions:b,filteredRows:E,filteredNonMetadataKeys:A,filteredMetadataKeys:y,visible:C,widths:x}=v,{pluginManager:M}=(0,h.getEnv)(e),{ref:R,scrollLeft:T}=(0,f.X)(),N=(0,h.useDebounce)(x,200),L=[{field:"name",hideable:!1,renderCell:r=>{const{value:a,row:o}=r,{id:l,conf:s}=o;return n.createElement("div",{className:t.cell},n.createElement(m.A,{html:a}),n.createElement(P.A,{id:l,conf:s,trackId:l,model:e}))},width:N.name??100},...A.map((e=>({field:e,width:N[e]??100,renderCell:e=>{const r=e.value;return r?n.createElement(m.A,{className:t.cell,html:r}):""}}))),...y.map((e=>({field:`metadata.${e}`,headerName:["name",...A].includes(e)?`${e} (from metadata)`:e,width:N["metadata."+e]??100,valueGetter:(t,r)=>`${r.metadata[e]}`,renderCell:e=>{const r=e.value;return r?n.createElement(m.A,{className:t.cell,html:r}):""}})))];return n.createElement(n.Fragment,null,n.createElement(S,{model:e}),n.createElement("div",{ref:R,style:{display:"flex",overflow:"hidden",height:window.innerHeight*O,width:window.innerWidth*O}},n.createElement("div",{style:{height:window.innerHeight*O,width:window.innerWidth*O-(w?g:0)}},n.createElement(u.A,{checkbox:!0,widths:Object.values(x).map((e=>e??100)),setWidths:e=>v.setWidths(Object.fromEntries(Object.entries(x).map(((t,r)=>[t[0],e[r]])))),scrollLeft:T}),n.createElement(c.z,{rows:E,columnVisibilityModel:C,onColumnVisibilityModelChange:e=>v.setVisible(e),columnHeaderHeight:35,checkboxSelection:!0,disableRowSelectionOnClick:!0,keepNonExistentRowsSelected:!0,onRowSelectionModelChange:t=>{if(k){const r=(0,i.getRoot)(e),n=M.pluggableConfigSchemaType("track");e.setSelection(t.map((e=>(0,i.resolveIdentifier)(n,r,e))))}else{const n=l,a=new Set(t);(0,s.transaction)((()=>{[...n].filter((e=>!a.has(e))).map((e=>r.hideTrack(e))),[...a].filter((e=>!n.has(e))).map((t=>{r.showTrack(t),e.addToRecentlyUsed(t)}))}))}},rowSelectionModel:k?a.map((e=>e.trackId)):[...l],slots:{toolbar:b?d.O:null},slotProps:{toolbar:{printOptions:{disableToolbarButton:!0}}},columns:L,rowHeight:25})),w?n.createElement(n.Fragment,null,n.createElement(o.ResizeHandle,{vertical:!0,onDrag:e=>v.setPanelWidth(g-e),className:t.resizeHandle}),n.createElement("div",{style:{width:g,overflow:"auto"}},n.createElement(I,{model:e,rows:p,columns:L}))):null))})),j=(0,l.observer)((function(e){const{handleClose:t}=e;return n.createElement(o.Dialog,{open:!0,onClose:t,maxWidth:"xl",title:"Faceted track selector"},n.createElement(a.A,null,n.createElement(W,e)))}))},54767:(e,t,r)=>{r.d(t,{x:()=>c});var n=r(7552),a=r(24979),o=r(74795),l=r(89301),s=r(69500);function i(e){return e.substring(2).toLowerCase()}function c(e){const{children:t,disableReactTree:r=!1,mouseEvent:c="onClick",onClickAway:d,touchEvent:m="onTouchEnd"}=e,u=n.useRef(!1),h=n.useRef(null),f=n.useRef(!1),v=n.useRef(!1);n.useEffect((()=>(setTimeout((()=>{f.current=!0}),0),()=>{f.current=!1})),[]);const p=(0,a.A)(t.ref,h),g=(0,o.A)((e=>{const t=v.current;v.current=!1;const n=(0,l.A)(h.current);if(!f.current||!h.current||"clientX"in e&&function(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}(e,n))return;if(u.current)return void(u.current=!1);let a;a=e.composedPath?e.composedPath().indexOf(h.current)>-1:!n.documentElement.contains(e.target)||h.current.contains(e.target),a||!r&&t||d(e)})),w=e=>r=>{v.current=!0;const n=t.props[e];n&&n(r)},k={ref:p};return!1!==m&&(k[m]=w(m)),n.useEffect((()=>{if(!1!==m){const e=i(m),t=(0,l.A)(h.current),r=()=>{u.current=!0};return t.addEventListener(e,g),t.addEventListener("touchmove",r),()=>{t.removeEventListener(e,g),t.removeEventListener("touchmove",r)}}}),[g,m]),!1!==c&&(k[c]=w(c)),n.useEffect((()=>{if(!1!==c){const e=i(c),t=(0,l.A)(h.current);return t.addEventListener(e,g),()=>{t.removeEventListener(e,g)}}}),[g,c]),(0,s.jsx)(n.Fragment,{children:n.cloneElement(t,k)})}},59705:(e,t,r)=>{r.d(t,{A:()=>C});var n=r(83673),a=r(6614),o=r(7552),l=r(93878),s=r(60827),i=r(64761),c=r(15622),d=r(31049),m=r(51148),u=r(72489),h=r(69500);const f=["className","color","disableShrink","size","style","thickness","value","variant"];let v,p,g,w,k=e=>e;const b=(0,i.i7)(v||(v=k`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),E=(0,i.i7)(p||(p=k`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),A=(0,m.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,c.A)(r.color)}`]]}})((({ownerState:e,theme:t})=>(0,a.A)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,i.AH)(g||(g=k`
      animation: ${0} 1.4s linear infinite;
    `),b))),S=(0,m.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),y=(0,m.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${(0,c.A)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((({ownerState:e,theme:t})=>(0,a.A)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,i.AH)(w||(w=k`
      animation: ${0} 1.4s ease-in-out infinite;
    `),E))),C=o.forwardRef((function(e,t){const r=(0,d.A)({props:e,name:"MuiCircularProgress"}),{className:o,color:i="primary",disableShrink:m=!1,size:v=40,style:p,thickness:g=3.6,value:w=0,variant:k="indeterminate"}=r,b=(0,n.A)(r,f),E=(0,a.A)({},r,{color:i,disableShrink:m,size:v,thickness:g,value:w,variant:k}),C=(e=>{const{classes:t,variant:r,color:n,disableShrink:a}=e,o={root:["root",r,`color${(0,c.A)(n)}`],svg:["svg"],circle:["circle",`circle${(0,c.A)(r)}`,a&&"circleDisableShrink"]};return(0,s.A)(o,u.b,t)})(E),x={},M={},R={};if("determinate"===k){const e=2*Math.PI*((44-g)/2);x.strokeDasharray=e.toFixed(3),R["aria-valuenow"]=Math.round(w),x.strokeDashoffset=`${((100-w)/100*e).toFixed(3)}px`,M.transform="rotate(-90deg)"}return(0,h.jsx)(A,(0,a.A)({className:(0,l.A)(C.root,o),style:(0,a.A)({width:v,height:v},M,p),ownerState:E,ref:t,role:"progressbar"},R,b,{children:(0,h.jsx)(S,{className:C.svg,ownerState:E,viewBox:"22 22 44 44",children:(0,h.jsx)(y,{className:C.circle,style:x,ownerState:E,cx:44,cy:44,r:(44-g)/2,fill:"none",strokeWidth:g})})}))}))},72489:(e,t,r)=>{r.d(t,{A:()=>l,b:()=>o});var n=r(55549),a=r(9577);function o(e){return(0,a.Ay)("MuiCircularProgress",e)}const l=(0,n.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])},17515:(e,t,r)=>{r.d(t,{A:()=>f});var n=r(83673),a=r(6614),o=r(7552),l=r(93878),s=r(60827),i=r(31049),c=r(51148),d=r(89663),m=r(69500);const u=["className","component","disableGutters","variant"],h=(0,c.Ay)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,!r.disableGutters&&t.gutters,t[r.variant]]}})((({theme:e,ownerState:t})=>(0,a.A)({position:"relative",display:"flex",alignItems:"center"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}},"dense"===t.variant&&{minHeight:48})),(({theme:e,ownerState:t})=>"regular"===t.variant&&e.mixins.toolbar)),f=o.forwardRef((function(e,t){const r=(0,i.A)({props:e,name:"MuiToolbar"}),{className:o,component:c="div",disableGutters:f=!1,variant:v="regular"}=r,p=(0,n.A)(r,u),g=(0,a.A)({},r,{component:c,disableGutters:f,variant:v}),w=(e=>{const{classes:t,disableGutters:r,variant:n}=e,a={root:["root",!r&&"gutters",n]};return(0,s.A)(a,d.U,t)})(g);return(0,m.jsx)(h,(0,a.A)({as:c,className:(0,l.A)(w.root,o),ref:t,ownerState:g},p))}))},89663:(e,t,r)=>{r.d(t,{A:()=>l,U:()=>o});var n=r(55549),a=r(9577);function o(e){return(0,a.Ay)("MuiToolbar",e)}const l=(0,n.A)("MuiToolbar",["root","gutters","regular","dense"])}}]);
//# sourceMappingURL=2887.70c8d5d4.chunk.js.map