"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[7011],{37011:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var a=n(7552),r=n(943),i=n(68446),o=n(33039),l=n.n(o),s=n(68984),c=n(99546);async function u(e,t){const n=(0,c.getSession)(t),{view:a}=t;try{if(!a)throw new Error("No view associated with this view anymore");await a.navToLocString(e)}catch(e){console.error(e),n.notify(`${e}`)}}const m={AM:"The smallest template-independent mapping quality in the template",AS:"Alignment score generated by aligner",BC:"Barcode sequence identifying the sample",BQ:"Offset to base alignment quality (BAQ)",BZ:"Phred quality of the unique molecular barcode bases in the {OX} tag",CB:"Cell identifier",CC:"Reference name of the next hit",CM:"Edit distance between the color sequence and the color reference (see also {NM})",CO:"Free-text comments",CP:"Leftmost coordinate of the next hit",CQ:"Color read base qualities",CR:"Cellular barcode sequence bases (uncorrected)",CS:"Color read sequence",CT:"Complete read annotation tag, used for consensus annotation dummy features",CY:"Phred quality of the cellular barcode sequence in the {CR} tag",E2:"The 2nd most likely base calls",FI:"The index of segment in the template",FS:"Segment suffix",FZ:"Flow signal intensities",GC:"Reserved for backwards compatibility reasons",GQ:"Reserved for backwards compatibility reasons",GS:"Reserved for backwards compatibility reasons",H0:"Number of perfect hits",H1:"Number of 1-difference hits (see also {NM})",H2:"Number of 2-difference hits",HI:"Query hit index",IH:"Query hit total count",LB:"Library",MC:"CIGAR string for mate/next segment",MD:"String encoding mismatched and deleted reference bases",MF:"Reserved for backwards compatibility reasons",MI:"Molecular identifier; a string that uniquely identifies the molecule from which the record was derived",ML:"Base modification probabilities",MM:"Base modifications / methylation ",MQ:"Mapping quality of the mate/next segment",NH:"Number of reported alignments that contain the query in the current record",NM:"Edit distance to the reference",OA:"Original alignment",OC:"Original CIGAR (deprecated; use {OA} instead)",OP:"Original mapping position (deprecated; use {OA} instead)",OQ:"Original base quality",OX:"Original unique molecular barcode bases",PG:"Program",PQ:"Phred likelihood of the template",PT:"Read annotations for parts of the padded read sequence",PU:"Platform unit",Q2:"Phred quality of the mate/next segment sequence in the {R2} tag",QT:"Phred quality of the sample barcode sequence in the {BC} tag",QX:"Quality score of the unique molecular identifier in the {RX} tag",R2:"Sequence of the mate/next segment in the template",RG:"Read group",RT:"Reserved for backwards compatibility reasons",RX:"Sequence bases of the (possibly corrected) unique molecular identifier",S2:"Reserved for backwards compatibility reasons",SA:"Other canonical alignments in a chimeric alignment",SM:"Template-independent mapping quality",SQ:"Reserved for backwards compatibility reasons",TC:"The number of segments in the template",TS:"Transcript strand",U2:"Phred probability of the 2nd call being wrong conditional on the best being wrong",UQ:"Phred likelihood of the segment, conditional on the mapping being correct"};var d=n(36715),f=n(87731),p=n(80544);function g({tag:e,model:t}){return a.createElement("div",null,a.createElement(d.A,null,"List of supplementary alignment locations"),a.createElement("ul",null,e.split(";").filter((e=>!!e)).map(((e,n)=>{const[r,i,o,l]=e.split(","),s=(0,p.getLengthOnRef)(l),c=Math.floor(s/5),m=+i,d=+i+s,g=m-c,h=d+c,b=`${r}:${Math.max(1,g)}-${h}`,y=`${r}:${m.toLocaleString("en-US")}-${d.toLocaleString("en-US")} (${o}) [${s}bp]`;return a.createElement("li",{key:`${b}-${n}`},a.createElement(f.A,{onClick:async e=>{e.preventDefault(),u(b,t)}},y))}))))}var h=n(89003),b=n(75785),y=n(49823),v=n(86576);const w=(0,a.lazy)((()=>n.e(8136).then(n.bind(n,28136)))),C=(0,b.n9)()({cursor:{cursor:"pointer"}});function E({model:e,feature:t,viewType:n}){const{classes:r}=C(),i=(0,c.getSession)(e),{view:o}=e,[l,s]=(0,a.useState)(),[u,m]=(0,a.useState)();(0,a.useEffect)((()=>{(async()=>{try{const e=await async function({view:e,feature:t}){const{assemblyManager:n}=(0,c.getSession)(e),a=t.get("CIGAR"),r=t.get("strand"),i=(0,v.bH)(t,"SA")||"",o=t.get("name"),l=(0,p.getClip)(a,1),s=await n.waitForAssembly(e.assemblyNames[0]);if(!s)throw new Error("assembly not found");const u=(0,p.featurizeSA)(i,t.id(),r,o,!0),m=t.toJSON();m.clipPos=l,m.strand=1,m.mate={refName:o,start:l,end:l+(0,p.getLengthSansClipping)(a)};const d=[m,...u];return d.forEach(((e,t)=>{e.refName=s?.getCanonicalRefName(e.refName)||e.refName,e.syntenyId=t,e.mate.syntenyId=t,e.mate.uniqueId=`${e.uniqueId}_mate`})),d.sort(((e,t)=>e.clipPos-t.clipPos)),d}({view:o,feature:new c.SimpleFeature(t)});s(e)}catch(e){m(e),console.error(e)}})()}),[t,o]);const g=[];if(l)for(let e=0;e<l.length-1;e++)g.push([l[e],l[e+1]]);return g.length?a.createElement("div",null,a.createElement(d.A,null,"Launch split views with breakend source and target"),u?a.createElement(y.ErrorMessage,{error:u}):null,a.createElement("ul",null,g.map(((t,o)=>{const[l,s]=t;return a.createElement("li",{key:`${JSON.stringify(t)}-${o}`},a.createElement(h.A,{title:"Top panel->Bottom panel"},a.createElement(f.A,{href:"#",className:r.cursor,onClick:t=>{t.preventDefault(),i.queueDialog((t=>[w,{handleClose:t,f1:l,f2:s,model:e,viewType:n}]))}},l.refName,":",(0,c.toLocale)(1===l.strand?l.end:l.start)," ","-> ",s.refName,":",(0,c.toLocale)(1===s.strand?s.start:s.end))))})))):null}function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},S.apply(this,arguments)}function O(e){const{model:t,tag:n,feature:r}=e,i=(0,c.getSession)(t),{pluginManager:o}=(0,c.getEnv)(i);let l;try{l=o.getViewType("BreakpointSplitView")}catch(e){}return a.createElement(s.BaseCard,S({},e,{title:"Supplementary alignments"}),a.createElement(g,{model:t,tag:n}),l?a.createElement(E,{viewType:l,model:t,feature:r}):null)}var q=n(83867),A=n(33371),k=n(32808),R=n(32106);function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},P.apply(this,arguments)}const T=(0,b.n9)()({compact:{paddingRight:0,paddingTop:0,paddingBottom:0}}),M=["read paired","read mapped in proper pair","read unmapped","mate unmapped","read reverse strand","mate reverse strand","first in pair","second in pair","not primary alignment","read fails platform/vendor quality checks","read is PCR or optical duplicate","supplementary alignment"];function N(e){const{classes:t}=T(),{feature:n}=e,{flags:r}=n;return a.createElement(s.BaseCard,P({},e,{title:"Flags"}),a.createElement(R.A,{name:"Flag",value:r}),a.createElement(q.A,null,M.map(((e,n)=>{const i=r&1<<n,o=`${e}_${i}`;return a.createElement(A.A,{key:o,control:a.createElement(k.A,{className:t.compact,checked:Boolean(i),name:e,readOnly:!0}),label:e})}))))}function $({locString:e,model:t}){return a.createElement(f.A,{onClick:n=>{n.preventDefault(),u(e,t)},href:"#"},e)}var B=n(31409),Q=n.n(B);function L({value:e}){const[t,n]=(0,a.useState)(!1),[r,i]=(0,a.useState)(!1),o=String(e);return o.length>100?a.createElement(a.Fragment,null,a.createElement("button",{type:"button",onClick:()=>{Q()(o),i(!0),setTimeout((()=>i(!1)),700)}},r?"Copied to clipboard":"Copy"),a.createElement("button",{type:"button",onClick:()=>n((e=>!e))},t?"Show less":"Show more"),a.createElement("div",null,t?o:`${o.slice(0,100)}...`)):a.createElement("div",null,o)}function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},x.apply(this,arguments)}const F=["clipPos","flags"],j=(0,i.observer)((function(e){const{model:t}=e,n=l()(t.featureData),i=function(e,t){return t.tags?.SA||t.SA}(0,n);return a.createElement(r.A,{"data-testid":"alignment-side-drawer"},a.createElement(s.FeatureDetails,x({},e,{omit:F,descriptions:{...m,tags:m},feature:n,formatter:(e,n)=>"next_segment_position"===n?a.createElement($,{model:t,locString:e}):a.createElement(L,{value:e})})),i?a.createElement(O,{model:t,tag:i,feature:n}):null,void 0!==n.flags?a.createElement(N,x({feature:n},e)):null)}))}}]);
//# sourceMappingURL=7011.131829b7.chunk.js.map