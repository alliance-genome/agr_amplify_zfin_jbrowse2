"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[6834],{6834:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var a=r(89238),s=r(60972),n=r(46377),c=r(99834),i=r(66885),o=r(6434),u=r(84747),h=r(34796),d=r(4101);class f extends n.BaseFeatureDataAdapter{async configurePre(e){const t=this.pluginManager,r=new a.C({filehandle:(0,c.openLocation)(this.getConf("bigBedLocation"),t)}),n=await r.getHeader(e);return{bigbed:r,header:n,parser:new s.A({autoSql:n.autoSql})}}async configure(e){return this.cached||(this.cached=this.configurePre(e).catch((e=>{throw this.cached=void 0,e}))),this.cached}async getRefNames(e){const{header:t}=await this.configure(e);return Object.keys(t.refsByName)}async getHeader(e){const{parser:t,header:r}=await this.configure(e),{version:a,fileType:s}=r,{fields:n,...c}=t.autoSql;return{version:a,fileType:s,autoSql:{...c},fields:Object.fromEntries(n.map((({name:e,comment:t})=>[e,t])))}}getFeatures(e,t={}){const{signal:r}=t,a=this.getConf("scoreColumn");return(0,i.ObservableCreate)((async s=>{try{const{parser:n,bigbed:c}=await this.configure(t);(await c.getFeatureStream(e.refName,e.start,e.end,{signal:r,basesPerSpan:e.end-e.start})).pipe((0,u.U)(),(0,h.T)((t=>{const r=n.parseLine(`${e.refName}\t${t.start}\t${t.end}\t${t.rest}`,{uniqueId:t.uniqueId});if(void 0===t.uniqueId)throw new Error("invalid bbi feature");const{uniqueId:s,type:c,chromStart:i,chromStarts:u,blockStarts:h,blockCount:f,blockSizes:l,chromEnd:m,thickStart:b,thickEnd:p,chrom:k,score:S,...y}=r,N=f?(0,d.zZ)({chromStarts:u,blockStarts:h,blockCount:f,blockSizes:l,uniqueId:s,refName:e.refName,start:t.start}):[];return new o.A({id:`${this.id}-${s}`,data:(0,d.xD)(r)?(0,d.BX)({...y,uniqueId:s,type:c,start:t.start,end:t.end,refName:e.refName,score:a?+r[a]:S,chromStarts:u,blockCount:f,blockSizes:l,thickStart:b,thickEnd:p,subfeatures:N}):{...y,uniqueId:s,type:c,start:t.start,score:a?+r[a]:S,end:t.end,refName:e.refName,subfeatures:N}})}))).subscribe(s)}catch(e){s.error(e)}}),t.signal)}freeResources(){}}},4101:(e,t,r)=>{r.d(t,{BX:()=>s,dE:()=>c,xD:()=>i,zZ:()=>n});var a=r(99546);function s(e){const{subfeatures:t,thickStart:r,thickEnd:a,blockCount:s,blockSizes:n,chromStarts:c,refName:i,strand:o=0,...u}=e;if(!r||!a||!o)return e;const h=[];return t.filter((e=>"block"===e.type)).sort(((e,t)=>e.start-t.start))?.forEach((e=>{const t=e.start,s=e.end;if(r>=s){const e=o>0?"five":"three";h.push({type:`${e}_prime_UTR`,start:t,end:s,refName:i})}else if(r>t&&r<s&&a>=s){const e=o>0?"five":"three";h.push({type:`${e}_prime_UTR`,start:t,end:r,refName:i},{type:"CDS",start:r,end:s,refName:i})}else if(r<=t&&a>=s)h.push({type:"CDS",start:t,end:s,refName:i});else if(r>t&&r<s&&a<s){const e=o>0?"five":"three",n=o>0?"three":"five";h.push({type:`${e}_prime_UTR`,start:t,end:r,refName:i},{type:"CDS",start:r,end:a,refName:i},{type:`${n}_prime_UTR`,start:a,end:s,refName:i})}else if(r<=t&&a>t&&a<s){const e=o>0?"three":"five";h.push({type:"CDS",start:t,end:a,refName:i},{type:`${e}_prime_UTR`,start:a,end:s,refName:i})}else if(a<=t){const e=o>0?"three":"five";h.push({type:`${e}_prime_UTR`,start:t,end:s,refName:i})}})),{...u,strand:o,type:"mRNA",refName:i,subfeatures:h}}function n({start:e,uniqueId:t,refName:r,chromStarts:a,blockCount:s,blockSizes:n,blockStarts:c}){const i=[],o=a||c||[];for(let a=0;a<s;a++){const s=(o[a]||0)+e,c=s+(n?.[a]||0);i.push({uniqueId:`${t}-${a}`,start:s,end:c,refName:r,type:"block"})}return i}function c(e,t,r,c,o,u,h,d){const f=e.split("\t"),l=f[t],m=+f[r],b=r===c?1:0,p=+f[c]+b,k=d?function(e,t){const{blockStarts:r,blockCount:a,chromStarts:s,thickEnd:n,thickStart:c,blockSizes:i,...o}=Object.fromEntries(t.split("\t").map(((t,r)=>[e[r],t])));return{...o,blockStarts:r?.split(",").map((e=>+e)),chromStarts:s?.split(",").map((e=>+e)),blockSizes:i?.split(",").map((e=>+e)),thickStart:+c,thickEnd:+n,blockCount:+a}}(d,e):u.parseLine(e,{uniqueId:h}),{blockCount:S,blockSizes:y,blockStarts:N,chromStarts:g,thickStart:C,thickEnd:w,type:q,score:_,chrom:v,chromStart:E,chromEnd:$,...z}=k,I=S?n({start:m,uniqueId:h,refName:l,chromStarts:g,blockCount:S,blockSizes:y,blockStarts:N}):[],T={...z,type:q,score:o?+k[o]:_,start:m,end:p,refName:l,uniqueId:h,subfeatures:I};return new a.SimpleFeature({id:h,data:i(k)?s({thickStart:C,thickEnd:w,blockCount:S,blockSizes:y,chromStarts:g,...T}):T})}function i(e){return e.thickStart&&e.blockCount&&0!==e.strand}}}]);
//# sourceMappingURL=6834.143cc4a1.chunk.js.map