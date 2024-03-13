import{b as q}from"./sanity-70519f4d.js";const x=/_key\s*==\s*['"](.*)['"]/;function J(e){return typeof e=="string"?x.test(e.trim()):typeof e=="object"&&"_key"in e}function I(e){if(!Array.isArray(e))throw new Error("Path is not an array");return e.reduce((t,n,r)=>{const i=typeof n;if(i==="number")return`${t}[${n}]`;if(i==="string")return`${t}${r===0?"":"."}${n}`;if(J(n)&&n._key)return`${t}[_key=="${n._key}"]`;if(Array.isArray(n)){const[s,a]=n;return`${t}[${s}:${a}]`}throw new Error(`Unsupported path segment \`${JSON.stringify(n)}\``)},"")}const S={"\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","'":"\\'","\\":"\\\\"},j={"\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	","\\'":"'","\\\\":"\\"};function v(e){return`$${e.map(t=>typeof t=="string"?`['${t.replace(/[\f\n\r\t'\\]/g,n=>S[n])}']`:typeof t=="number"?`[${t}]`:t._key!==""?`[?(@._key=='${t._key.replace(/['\\]/g,n=>S[n])}')]`:`[${t._index}]`).join("")}`}function P(e){const t=[],n=/\['(.*?)'\]|\[(\d+)\]|\[\?\(@\._key=='(.*?)'\)\]/g;let r;for(;(r=n.exec(e))!==null;){if(r[1]!==void 0){const i=r[1].replace(/\\(\\|f|n|r|t|')/g,s=>j[s]);t.push(i);continue}if(r[2]!==void 0){t.push(parseInt(r[2],10));continue}if(r[3]!==void 0){const i=r[3].replace(/\\(\\')/g,s=>j[s]);t.push({_key:i,_index:-1});continue}}return t}function T(e){return e.map(t=>{if(typeof t=="string"||typeof t=="number")return t;if(t._key!=="")return{_key:t._key};if(t._index!==-1)return t._index;throw new Error(`invalid segment:${JSON.stringify(t)}`)})}function V(e){return e.map(t=>{if(typeof t=="string"||typeof t=="number")return t;if(t._index!==-1)return t._index;throw new Error(`invalid segment:${JSON.stringify(t)}`)})}function G(e,t){if(!(t!=null&&t.mappings))return;const n=v(V(e));if(t.mappings[n]!==void 0)return{mapping:t.mappings[n],matchedPath:n,pathSuffix:""};const r=Object.entries(t.mappings).filter(([d])=>n.startsWith(d)).sort(([d],[u])=>u.length-d.length);if(r.length==0)return;const[i,s]=r[0],a=n.substring(i.length);return{mapping:s,matchedPath:i,pathSuffix:a}}function K(e){return e!==null&&Array.isArray(e)}function U(e){return typeof e=="object"&&e!==null}function b(e,t,n=[]){return K(e)?e.map((r,i)=>{if(U(r)){const s=r._key;if(typeof s=="string")return b(r,t,n.concat({_key:s,_index:i}))}return b(r,t,n.concat(i))}):U(e)?Object.fromEntries(Object.entries(e).map(([r,i])=>[r,b(i,t,n.concat(r))])):t(e,n)}function z(e,t,n){return b(e,(r,i)=>{if(typeof r!="string")return r;const s=G(i,t);if(!s)return r;const{mapping:a,matchedPath:d}=s;if(a.type!=="value"||a.source.type!=="documentValue")return r;const u=t.documents[a.source.document],f=t.paths[a.source.path],h=P(d),y=P(f).concat(i.slice(h.length));return n({sourcePath:y,sourceDocument:u,resultPath:i,value:r})})}const A="drafts.";function B(e){return e.startsWith(A)?e.slice(A.length):e}function H(e){const{baseUrl:t,workspace:n="default",tool:r="default",id:i,type:s,path:a,projectId:d,dataset:u}=e;if(!t)throw new Error("baseUrl is required");if(!a)throw new Error("path is required");if(!i)throw new Error("id is required");if(t!=="/"&&t.endsWith("/"))throw new Error("baseUrl must not end with a slash");const f=n==="default"?void 0:n,h=r==="default"?void 0:r,y=B(i),_=Array.isArray(a)?I(T(a)):a,o=new URLSearchParams({baseUrl:t,id:y,type:s,path:_});f&&o.set("workspace",f),h&&o.set("tool",h),d&&o.set("projectId",d),u&&o.set("dataset",u);const k=[t==="/"?"":t];f&&k.push(f);const p=["mode=presentation",`id=${y}`,`type=${s}`,`path=${encodeURIComponent(_)}`];return h&&p.push(`tool=${h}`),k.push("intent","edit",`${p.join(";")}?${o}`),k.join("/")}function X(e){let t=typeof e=="string"?e:e.baseUrl;return t!=="/"&&(t=t.replace(/\/$/,"")),typeof e=="string"?{baseUrl:t}:{...e,baseUrl:t}}const m=({sourcePath:e,value:t})=>{if(Q(t)||Y(t))return!1;const n=e.at(-1);return!(e.at(-2)==="slug"&&n==="current"||typeof n=="string"&&n.startsWith("_")||typeof n=="number"&&e.at(-2)==="marks"||n==="href"&&typeof e.at(-2)=="number"&&e.at(-3)==="markDefs"||n==="style"||n==="listItem"||e.some(r=>r==="meta"||r==="metadata"||r==="openGraph"||r==="seo")||typeof n=="string"&&F.has(n))},F=new Set(["color","colour","currency","email","format","gid","hex","href","hsl","hsla","icon","id","index","key","language","layout","link","linkAction","locale","lqip","page","path","ref","rgb","rgba","route","secret","slug","status","tag","template","theme","type","unit","url","username","variant","website"]);function Q(e){return/^\d{4}-\d{2}-\d{2}/.test(e)?!!Date.parse(e):!1}function Y(e){try{new URL(e,e.startsWith("/")?"https://acme.com":void 0)}catch{return!1}return!0}const w=20;function Z(e,t,n){var r,i,s,a,d,u,f,h,y;const{filter:_,logger:o,enabled:k}=n;if(!k){const l="config.enabled must be true, don't call this function otherwise";throw(r=o==null?void 0:o.error)==null||r.call(o,`[@sanity/client]: ${l}`,{result:e,resultSourceMap:t,config:n}),new TypeError(l)}if(!t)return(i=o==null?void 0:o.error)==null||i.call(o,"[@sanity/client]: Missing Content Source Map from response body",{result:e,resultSourceMap:t,config:n}),e;if(!n.studioUrl){const l="config.studioUrl must be defined";throw(s=o==null?void 0:o.error)==null||s.call(o,`[@sanity/client]: ${l}`,{result:e,resultSourceMap:t,config:n}),new TypeError(l)}const p={encoded:[],skipped:[]},C=z(e,t,({sourcePath:l,sourceDocument:g,resultPath:$,value:c})=>{if((typeof _=="function"?_({sourcePath:l,resultPath:$,filterDefault:m,sourceDocument:g,value:c}):m({sourcePath:l,resultPath:$,filterDefault:m,sourceDocument:g,value:c}))===!1)return o&&p.skipped.push({path:R(l),value:`${c.slice(0,w)}${c.length>w?"...":""}`,length:c.length}),c;o&&p.encoded.push({path:R(l),value:`${c.slice(0,w)}${c.length>w?"...":""}`,length:c.length});const{baseUrl:E,workspace:O,tool:L}=X(typeof n.studioUrl=="function"?n.studioUrl(g):n.studioUrl);if(!E)return c;const{_id:N,_type:W,_projectId:D,_dataset:M}=g;return q(c,{origin:"sanity.io",href:H({baseUrl:E,workspace:O,tool:L,id:N,type:W,path:l,...!n.omitCrossDatasetReferenceData&&{dataset:M,projectId:D}})},!1)});if(o){const l=p.skipped.length,g=p.encoded.length;if((l||g)&&((a=(o==null?void 0:o.groupCollapsed)||o.log)==null||a("[@sanity/client]: Encoding source map into result"),(d=o.log)==null||d.call(o,`[@sanity/client]: Paths encoded: ${p.encoded.length}, skipped: ${p.skipped.length}`)),p.encoded.length>0&&((u=o==null?void 0:o.log)==null||u.call(o,"[@sanity/client]: Table of encoded paths"),(f=(o==null?void 0:o.table)||o.log)==null||f(p.encoded)),p.skipped.length>0){const $=new Set;for(const{path:c}of p.skipped)$.add(c.replace(x,"0").replace(/\[\d+\]/g,"[]"));(h=o==null?void 0:o.log)==null||h.call(o,"[@sanity/client]: List of skipped paths",[...$.values()])}(l||g)&&((y=o==null?void 0:o.groupEnd)==null||y.call(o))}return C}function R(e){return I(T(e))}var et=Object.freeze({__proto__:null,stegaEncodeSourceMap:Z});export{z as encodeIntoResult,Z as stegaEncodeSourceMap,et as stegaEncodeSourceMap$1};
