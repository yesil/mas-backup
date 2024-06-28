// branch: MWPW-153599 commit: 78add3ab27aa1cedd5ddab08df680124ae51ed3f Thu, 27 Jun 2024 14:42:04 GMT
var Yn=Object.defineProperty;var Zn=e=>{throw TypeError(e)};var aa=(e,t,r)=>t in e?Yn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var se=(e,t)=>()=>(e&&(t=e(e=0)),t);var sa=(e,t)=>{for(var r in t)Yn(e,r,{get:t[r],enumerable:!0})};var I=(e,t,r)=>aa(e,typeof t!="symbol"?t+"":t,r),Jn=(e,t,r)=>t.has(e)||Zn("Cannot "+r);var ce=(e,t,r)=>(Jn(e,t,"read from private field"),r?r.call(e):t.get(e)),bt=(e,t,r)=>t.has(e)?Zn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Qe=(e,t,r,n)=>(Jn(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r);var Kt,tr,wi,Ei,er,_i,En,rr,wn=se(()=>{Kt=window,tr=Kt.ShadowRoot&&(Kt.ShadyCSS===void 0||Kt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wi=Symbol(),Ei=new WeakMap,er=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==wi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o,r=this.t;if(tr&&t===void 0){let n=r!==void 0&&r.length===1;n&&(t=Ei.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Ei.set(r,t))}return t}toString(){return this.cssText}},_i=e=>new er(typeof e=="string"?e:e+"",void 0,wi),En=(e,t)=>{tr?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{let n=document.createElement("style"),o=Kt.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},rr=tr?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(let n of t.cssRules)r+=n.cssText;return _i(r)})(e):e});var _n,nr,Si,sc,Ai,An,Ti,Sn,Tn,Ne,Pi=se(()=>{wn();wn();nr=window,Si=nr.trustedTypes,sc=Si?Si.emptyScript:"",Ai=nr.reactiveElementPolyfillSupport,An={toAttribute(e,t){switch(t){case Boolean:e=e?sc:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Ti=(e,t)=>t!==e&&(t==t||e==e),Sn={attribute:!0,type:String,converter:An,reflect:!1,hasChanged:Ti},Tn="finalized",Ne=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((r,n)=>{let o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=Sn){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){let n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){let i=this[t];this[r]=o,this.requestUpdate(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Sn}static finalize(){if(this.hasOwnProperty(Tn))return!1;this[Tn]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(let o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let r=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let o of n)r.unshift(rr(o))}else t!==void 0&&r.push(rr(t));return r}static _$Ep(t,r){let n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;let r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return En(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=Sn){var o;let i=this.constructor._$Ep(t,n);if(i!==void 0&&n.reflect===!0){let a=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:An).toAttribute(r,n.type);this._$El=t,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$El=null}}_$AK(t,r){var n;let o=this.constructor,i=o._$Ev.get(t);if(i!==void 0&&this._$El!==i){let a=o.getPropertyOptions(i),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?a.converter:An;this._$El=i,this[i]=s.fromAttribute(r,a.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||Ti)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,i)=>this[i]=o),this._$Ei=void 0);let r=!1,n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostUpdate)===null||i===void 0?void 0:i.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Ne[Tn]=!0,Ne.elementProperties=new Map,Ne.elementStyles=[],Ne.shadowRootOptions={mode:"open"},Ai?.({ReactiveElement:Ne}),((_n=nr.reactiveElementVersions)!==null&&_n!==void 0?_n:nr.reactiveElementVersions=[]).push("1.6.3")});function Gi(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ci!==void 0?Ci.createHTML(t):t}function Ye(e,t,r=e,n){var o,i,a,s;if(t===Ie)return t;let c=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl,h=pt(t)?void 0:t._$litDirective$;return c?.constructor!==h&&((i=c?._$AO)===null||i===void 0||i.call(c,!1),h===void 0?c=void 0:(c=new h(e),c._$AT(e,r,n)),n!==void 0?((a=(s=r)._$Co)!==null&&a!==void 0?a:s._$Co=[])[n]=c:r._$Cl=c),c!==void 0&&(t=Ye(e,c._$AS(e,t.values),c,n)),t}var Pn,or,Xe,Ci,On,be,Ii,cc,ke,ut,pt,Mi,lc,Cn,dt,Oi,Li,Re,Ni,Ri,Ui,Di,T,eu,Ie,k,$i,$e,hc,mt,Ln,ft,Ze,Nn,dc,Rn,$n,kn,ki,zi,ir=se(()=>{or=window,Xe=or.trustedTypes,Ci=Xe?Xe.createPolicy("lit-html",{createHTML:e=>e}):void 0,On="$lit$",be=`lit$${(Math.random()+"").slice(9)}$`,Ii="?"+be,cc=`<${Ii}>`,ke=document,ut=()=>ke.createComment(""),pt=e=>e===null||typeof e!="object"&&typeof e!="function",Mi=Array.isArray,lc=e=>Mi(e)||typeof e?.[Symbol.iterator]=="function",Cn=`[ 	
\f\r]`,dt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Oi=/-->/g,Li=/>/g,Re=RegExp(`>|${Cn}(?:([^\\s"'>=/]+)(${Cn}*=${Cn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ni=/'/g,Ri=/"/g,Ui=/^(?:script|style|textarea|title)$/i,Di=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),T=Di(1),eu=Di(2),Ie=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),$i=new WeakMap,$e=ke.createTreeWalker(ke,129,null,!1);hc=(e,t)=>{let r=e.length-1,n=[],o,i=t===2?"<svg>":"",a=dt;for(let s=0;s<r;s++){let c=e[s],h,l,u=-1,d=0;for(;d<c.length&&(a.lastIndex=d,l=a.exec(c),l!==null);)d=a.lastIndex,a===dt?l[1]==="!--"?a=Oi:l[1]!==void 0?a=Li:l[2]!==void 0?(Ui.test(l[2])&&(o=RegExp("</"+l[2],"g")),a=Re):l[3]!==void 0&&(a=Re):a===Re?l[0]===">"?(a=o??dt,u=-1):l[1]===void 0?u=-2:(u=a.lastIndex-l[2].length,h=l[1],a=l[3]===void 0?Re:l[3]==='"'?Ri:Ni):a===Ri||a===Ni?a=Re:a===Oi||a===Li?a=dt:(a=Re,o=void 0);let p=a===Re&&e[s+1].startsWith("/>")?" ":"";i+=a===dt?c+cc:u>=0?(n.push(h),c.slice(0,u)+On+c.slice(u)+be+p):c+be+(u===-2?(n.push(void 0),s):p)}return[Gi(e,i+(e[r]||"<?>")+(t===2?"</svg>":"")),n]},mt=class e{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,a=0,s=t.length-1,c=this.parts,[h,l]=hc(t,r);if(this.el=e.createElement(h,n),$e.currentNode=this.el.content,r===2){let u=this.el.content,d=u.firstChild;d.remove(),u.append(...d.childNodes)}for(;(o=$e.nextNode())!==null&&c.length<s;){if(o.nodeType===1){if(o.hasAttributes()){let u=[];for(let d of o.getAttributeNames())if(d.endsWith(On)||d.startsWith(be)){let p=l[a++];if(u.push(d),p!==void 0){let f=o.getAttribute(p.toLowerCase()+On).split(be),g=/([.?@])?(.*)/.exec(p);c.push({type:1,index:i,name:g[2],strings:f,ctor:g[1]==="."?Nn:g[1]==="?"?Rn:g[1]==="@"?$n:Ze})}else c.push({type:6,index:i})}for(let d of u)o.removeAttribute(d)}if(Ui.test(o.tagName)){let u=o.textContent.split(be),d=u.length-1;if(d>0){o.textContent=Xe?Xe.emptyScript:"";for(let p=0;p<d;p++)o.append(u[p],ut()),$e.nextNode(),c.push({type:2,index:++i});o.append(u[d],ut())}}}else if(o.nodeType===8)if(o.data===Ii)c.push({type:2,index:i});else{let u=-1;for(;(u=o.data.indexOf(be,u+1))!==-1;)c.push({type:7,index:i}),u+=be.length-1}i++}}static createElement(t,r){let n=ke.createElement("template");return n.innerHTML=t,n}};Ln=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;let{el:{content:n},parts:o}=this._$AD,i=((r=t?.creationScope)!==null&&r!==void 0?r:ke).importNode(n,!0);$e.currentNode=i;let a=$e.nextNode(),s=0,c=0,h=o[0];for(;h!==void 0;){if(s===h.index){let l;h.type===2?l=new ft(a,a.nextSibling,this,t):h.type===1?l=new h.ctor(a,h.name,h.strings,this,t):h.type===6&&(l=new kn(a,this,t)),this._$AV.push(l),h=o[++c]}s!==h?.index&&(a=$e.nextNode(),s++)}return $e.currentNode=ke,i}v(t){let r=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}},ft=class e{constructor(t,r,n,o){var i;this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(i=o?.isConnected)===null||i===void 0||i}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode,r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Ye(this,t,r),pt(t)?t===k||t==null||t===""?(this._$AH!==k&&this._$AR(),this._$AH=k):t!==this._$AH&&t!==Ie&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):lc(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==k&&pt(this._$AH)?this._$AA.nextSibling.data=t:this.$(ke.createTextNode(t)),this._$AH=t}g(t){var r;let{values:n,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=mt.createElement(Gi(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===i)this._$AH.v(n);else{let a=new Ln(i,this),s=a.u(this.options);a.v(n),this.$(s),this._$AH=a}}_$AC(t){let r=$i.get(t.strings);return r===void 0&&$i.set(t.strings,r=new mt(t)),r}T(t){Mi(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,n,o=0;for(let i of t)o===r.length?r.push(n=new e(this.k(ut()),this.k(ut()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){let o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}},Ze=class{constructor(t,r,n,o,i){this.type=1,this._$AH=k,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=k}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){let i=this.strings,a=!1;if(i===void 0)t=Ye(this,t,r,0),a=!pt(t)||t!==this._$AH&&t!==Ie,a&&(this._$AH=t);else{let s=t,c,h;for(t=i[0],c=0;c<i.length-1;c++)h=Ye(this,s[n+c],r,c),h===Ie&&(h=this._$AH[c]),a||(a=!pt(h)||h!==this._$AH[c]),h===k?t=k:t!==k&&(t+=(h??"")+i[c+1]),this._$AH[c]=h}a&&!o&&this.j(t)}j(t){t===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Nn=class extends Ze{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===k?void 0:t}},dc=Xe?Xe.emptyScript:"",Rn=class extends Ze{constructor(){super(...arguments),this.type=4}j(t){t&&t!==k?this.element.setAttribute(this.name,dc):this.element.removeAttribute(this.name)}},$n=class extends Ze{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){var n;if((t=(n=Ye(this,t,r,0))!==null&&n!==void 0?n:k)===Ie)return;let o=this._$AH,i=t===k&&o!==k||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,a=t!==k&&(o===k||i);i&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}},kn=class{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Ye(this,t)}},ki=or.litHtmlPolyfillSupport;ki?.(mt,ft),((Pn=or.litHtmlVersions)!==null&&Pn!==void 0?Pn:or.litHtmlVersions=[]).push("2.8.0");zi=(e,t,r)=>{var n,o;let i=(n=r?.renderBefore)!==null&&n!==void 0?n:t,a=i._$litPart$;if(a===void 0){let s=(o=r?.renderBefore)!==null&&o!==void 0?o:null;i._$litPart$=a=new ft(t.insertBefore(ut(),s),s,void 0,r??{})}return a._$AI(e),a}});var ar,sr,In,Fi,gt,pe,Me,Mn,cr,Un=se(()=>{ar=window,sr=ar.ShadowRoot&&(ar.ShadyCSS===void 0||ar.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,In=Symbol(),Fi=new WeakMap,gt=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==In)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o,r=this.t;if(sr&&t===void 0){let n=r!==void 0&&r.length===1;n&&(t=Fi.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Fi.set(r,t))}return t}toString(){return this.cssText}},pe=e=>new gt(typeof e=="string"?e:e+"",void 0,In),Me=(e,...t)=>{let r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new gt(r,e,In)},Mn=(e,t)=>{sr?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{let n=document.createElement("style"),o=ar.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},cr=sr?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(let n of t.cssRules)r+=n.cssText;return pe(r)})(e):e});var Dn,lr,ji,uc,Hi,zn,Vi,Gn,Fn,me,jn=se(()=>{Un();Un();lr=window,ji=lr.trustedTypes,uc=ji?ji.emptyScript:"",Hi=lr.reactiveElementPolyfillSupport,zn={toAttribute(e,t){switch(t){case Boolean:e=e?uc:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Vi=(e,t)=>t!==e&&(t==t||e==e),Gn={attribute:!0,type:String,converter:zn,reflect:!1,hasChanged:Vi},Fn="finalized",me=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((r,n)=>{let o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=Gn){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){let n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){let i=this[t];this[r]=o,this.requestUpdate(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Gn}static finalize(){if(this.hasOwnProperty(Fn))return!1;this[Fn]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(let o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let r=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let o of n)r.unshift(cr(o))}else t!==void 0&&r.push(cr(t));return r}static _$Ep(t,r){let n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;let r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Mn(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=Gn){var o;let i=this.constructor._$Ep(t,n);if(i!==void 0&&n.reflect===!0){let a=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:zn).toAttribute(r,n.type);this._$El=t,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$El=null}}_$AK(t,r){var n;let o=this.constructor,i=o._$Ev.get(t);if(i!==void 0&&this._$El!==i){let a=o.getPropertyOptions(i),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?a.converter:zn;this._$El=i,this[i]=s.fromAttribute(r,a.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||Vi)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,i)=>this[i]=o),this._$Ei=void 0);let r=!1,n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostUpdate)===null||i===void 0?void 0:i.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};me[Fn]=!0,me.elementProperties=new Map,me.elementStyles=[],me.shadowRootOptions={mode:"open"},Hi?.({ReactiveElement:me}),((Dn=lr.reactiveElementVersions)!==null&&Dn!==void 0?Dn:lr.reactiveElementVersions=[]).push("1.6.3")});var Hn,Vn,ne,Bi,Wi=se(()=>{jn();jn();ir();ir();ne=class extends me{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;let n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=zi(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Ie}};ne.finalized=!0,ne._$litElement$=!0,(Hn=globalThis.litElementHydrateSupport)===null||Hn===void 0||Hn.call(globalThis,{LitElement:ne});Bi=globalThis.litElementPolyfillSupport;Bi?.({LitElement:ne});((Vn=globalThis.litElementVersions)!==null&&Vn!==void 0?Vn:globalThis.litElementVersions=[]).push("3.3.3")});var qi=se(()=>{});var hr=se(()=>{Pi();ir();Wi();qi()});var Oc={};async function mc(e,t){let{type:r="catalog"}=e,n=Yi[r]||Yi.catalog;if(t.variant=r,t.setAttribute("variant",r),e.icon?.forEach(o=>{let i=createTag("merch-icon",{slot:"icons",src:o,alt:"",href:"",size:"l"});t.append(i)}),e.title&&t.append(createTag(n.title.tag,{slot:n.title.slot},e.title)),e.prices?.html){let o=e.prices.html,i=createTag(n.prices.tag,{slot:n.prices.slot},o);t.append(i)}if(t.append(createTag("p",{slot:"body-xxs",id:"individuals1"},"Desktop")),e.description?.html){let o=createTag(n.description.tag,{slot:n.description.slot},e.description.html);t.append(o)}if(e.ctas?.html){let o=e.ctas.html;o=o.flatMap(c=>{c.style.display="none";let h=c.classList.contains("blue")?"accent":"primary",l=h==="primary"?"outline":"",u=createTag("sp-button",{variant:h,treatment:l,size:n.ctas.size});return u.innerHTML=c.innerHTML,u.addEventListener("click",d=>{if(d.stopImmediatePropagation(),t.getAttribute("in-app")===""){let[{productArrangementCode:p}]=c.value,f={type:"deep-link",target:`inapp://ccd?workflow=routeToPath&routePath=%2FeditPlan%3Fpa%3D${p}%26cli%3Dcc_desktop%26co%3DUS%26landing_page%3Dhttps%3A%2F%2Fcommerce-stg.adobe.com%2Fstore%2Fsegmentation%26ctx%3Da`};c.dispatchEvent(new CustomEvent("deep-link",{detail:f,bubbles:!0}))}else c.click()}),[c,u]});let i=t.getAttribute("color")??"light",a=createTag("sp-theme",{theme:"spectrum",color:i,scale:"medium"},o);a.style.display="contents";let s=createTag("div",{slot:"footer"},a);t.append(s)}}function Ac(e){let t=[];function r(n){n.nodeType===Node.TEXT_NODE?t.push(n):n.childNodes.forEach(r)}return r(e),t}var dr,pc,Bn,Xi,ea,Yi,Wn,qn,fc,vt,ta,Y,W,fe,gc,vc,xc,yc,bc,Ec,wc,bu,ra,_c,Sc,Zi,Ji,Qi,Tc,Pc,Xn,Ki,ur,ge,Cc,na=se(()=>{hr();hr();hr();pc=(dr=class extends ne{constructor(){super(),this.size="m",this.alt=""}render(){let{href:e}=this;return e?T`<a href="${e}">
                  <img src="${this.src}" alt="${this.alt}" loading="lazy" />
              </a>`:T` <img src="${this.src}" alt="${this.alt}" loading="lazy" />`}},I(dr,"properties",{size:{type:String,attribute:!0},src:{type:String,attribute:!0},alt:{type:String,attribute:!0},href:{type:String,attribute:!0}}),I(dr,"styles",Me`
        :host {
            --img-width: 32px;
            --img-height: 32px;
            display: block;
            width: var(--img-width);
            height: var(--img-height);
        }

        :host([size='s']) {
            --img-width: 24px;
            --img-height: 24px;
        }

        :host([size='l']) {
            --img-width: 40px;
            --img-height: 40px;
        }

        img {
            width: var(--img-width);
            height: var(--img-height);
        }
    `),dr);customElements.define("merch-icon",pc);Bn="odin",Xi="odin-author",Yi={catalog:{name:"catalog",title:{tag:"h3",slot:"heading-xs"},prices:{tag:"h3",slot:"heading-xs"},description:{tag:"div",slot:"body-xs"},ctas:{size:"l"}},ah:{name:"ah",title:{tag:"h3",slot:"heading-xxs"},prices:{tag:"h3",slot:"heading-xs"},description:{tag:"div",slot:"body-xxs"},ctas:{size:"s"}},"ccd-action":{name:"ccd-action",title:{tag:"h3",slot:"heading-xs"},prices:{tag:"h3",slot:"heading-xs"},description:{tag:"div",slot:"body-xs"},ctas:{size:"l"}}},Wn=new Map,qn=async(e,t)=>{if(Wn.has(e)){let n=Wn.get(e);return await n,n}let r=fetch(e,t).then(n=>n.json());return Wn.set(e,r),await r,r};window.addEventListener("message",e=>{e.data.type==="mas:updateAccessToken"&&(ea=e.data.accessToken)});fc=class extends HTMLElement{constructor(){super(...arguments);I(this,"data",{})}static get observedAttributes(){return["source","path"]}connectedCallback(){this.fetchData()}refresh(){setTimeout(async()=>{this.parentElement.querySelectorAll("[slot]").forEach(t=>t.remove()),this.fetchData()},1e3)}async fetchData(){let t=this.getAttribute("source")??Bn,r=this.getAttribute("path"),n=r;if(!r||![Bn,Xi].includes(t))return;let o="https://dev-odin.adobe.com",i={},a=this.getAttribute("mep"),s;a&&(s=await qn(a).then(({experiences:{data:u}})=>u)),t===Bn&&s?r=s.filter(({action:u})=>u==="replaceFragment").find(({selector:u})=>u===r)?.all??r:t===Xi&&(o="https://author-p22655-e59341.adobeaemcloud.com",i={Authorization:`Bearer ${ea}`});let c,h=`?cb=${Math.round(Math.random()*1e6)}`;c=await qn(`${o}${r}.cfm.gql.json${h}`,{headers:i}),c.status===404&&(c=await qn(`${o}${n}.cfm.gql.json${h}`,{headers:i}));let{data:{merchCardByPath:{item:l}}}=await c;this.data=l,this.render()}async render(){this.isConnected&&this.parentElement.tagName==="MERCH-CARD"&&(await Promise.all([...this.parentElement.querySelectorAll('[is="inline-price"],[is="checkout-link"]')].map(t=>t.onceSettled())),mc(this.data,this.parentElement).then(async()=>{this.parentElement.style.opacity=1}))}};customElements.define("merch-datasource",fc);vt="(max-width: 767px)",ta="(max-width: 1199px)",Y="(min-width: 768px)",W="(min-width: 1200px)",fe="(min-width: 1600px)",gc=Me`
    :host {
        position: relative;
        display: flex;
        flex-direction: column;
        text-align: start;
        background-color: var(--consonant-merch-card-background-color);
        grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
        background-color: var(--consonant-merch-card-background-color);
        font-family: var(--body-font-family, 'Adobe Clean');
        border-radius: var(--consonant-merch-spacing-xs);
        border: 1px solid var(--consonant-merch-card-border-color);
        box-sizing: border-box;
    }

    :host(.placeholder) {
        visibility: hidden;
    }

    :host([variant='special-offers']) {
        min-height: 439px;
    }

    :host([variant='catalog']) {
        min-height: 330px;
    }

    :host([variant='plans']) {
        min-height: 348px;
    }

    :host([variant='segment']) {
        min-height: 214px;
    }

    :host([aria-selected]) {
        outline: none;
        box-sizing: border-box;
        box-shadow: inset 0 0 0 2px var(--color-accent);
    }

    .invisible {
        visibility: hidden;
    }

    :host(:hover) .invisible {
        visibility: visible;
        background-image: var(--ellipsis-icon);
        cursor: pointer;
    }

    .action-menu.always-visible {
        visibility: visible;
        background-image: var(--ellipsis-icon);
    }

    :host([variant='mini-compare-chart']) > slot:not([name='icons']) {
        display: block;
    }

    .top-section {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 16px;
    }

    .top-section.badge {
        min-height: 32px;
    }

    .body {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 100%;
        gap: var(--consonant-merch-spacing-xxs);
        padding: var(--consonant-merch-spacing-xs);
    }

    footer {
        display: flex;
        justify-content: flex-end;
        box-sizing: border-box;
        align-items: flex-end;
        width: 100%;
        flex-flow: wrap;
        gap: var(--consonant-merch-spacing-xs);

        padding: var(--consonant-merch-spacing-xs);
    }

    hr {
        background-color: var(--color-gray-200);
        border: none;
        height: 1px;
        width: auto;
        margin-top: 0;
        margin-bottom: 0;
        margin-left: var(--consonant-merch-spacing-xs);
        margin-right: var(--consonant-merch-spacing-xs);
    }

    div[class$='-badge'] {
        position: absolute;
        top: 16px;
        right: 0;
        font-size: var(--type-heading-xxs-size);
        font-weight: 500;
        max-width: 180px;
        line-height: 16px;
        text-align: center;
        padding: 8px 11px;
        border-radius: 5px 0 0 5px;
    }

    div[class$='-badge']:dir(rtl) {
        left: 0;
        right: initial;
        padding: 8px 11px;
        border-radius: 0 5px 5px 0;
    }

    .body .catalog-badge {
        display: flex;
        height: fit-content;
        flex-direction: column;
        width: fit-content;
        border-radius: 5px;
        position: relative;
        top: 0;
        margin-left: var(--consonant-merch-spacing-xxs);
    }

    .detail-bg-container {
        right: 0;
        padding: var(--consonant-merch-spacing-xs);
        border-radius: 5px;
        font-size: var(--consonant-merch-card-body-font-size);
        margin: var(--consonant-merch-spacing-xs);
    }

    .action-menu {
        display: flex;
        width: 32px;
        height: 32px;
        position: absolute;
        top: 16px;
        right: 16px;
        background-color: #f6f6f6;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 16px 16px;
    }
    .hidden {
        visibility: hidden;
    }

    #stock-checkbox,
    .secure-transaction-label {
        font-size: var(--consonant-merch-card-body-xxs-font-size);
        line-height: 1.3;
        color: var(--color-gray-600);
    }

    #stock-checkbox {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        gap: 10px; /*same as spectrum */
    }

    #stock-checkbox > input {
        display: none;
    }

    #stock-checkbox > span {
        display: inline-block;
        box-sizing: border-box;
        border: 2px solid rgb(117, 117, 117);
        border-radius: 2px;
        width: 14px;
        height: 14px;
    }

    #stock-checkbox > input:checked + span {
        background: var(--checkmark-icon) no-repeat var(--color-accent);
        border-color: var(--color-accent);
    }

    .secure-transaction-label {
        white-space: nowrap;
        display: inline-flex;
        gap: var(--consonant-merch-spacing-xxs);
        align-items: center;
        flex: 1;
        height: 100%;
        line-height: normal;
    }

    .secure-transaction-label::before {
        display: inline-block;
        content: '';
        width: 12px;
        height: 15px;
        background: var(--secure-icon) no-repeat;
        background-position: center;
        background-size: contain;
    }

    .checkbox-container {
        display: flex;
        align-items: center;
        gap: var(--consonant-merch-spacing-xxs);
    }

    .checkbox-container input[type='checkbox']:checked + .checkmark {
        background-color: var(--color-accent);
        background-image: var(--checkmark-icon);
        border-color: var(--color-accent);
    }

    .checkbox-container input[type='checkbox'] {
        display: none;
    }

    .checkbox-container .checkmark {
        position: relative;
        display: inline-block;
        width: 12px;
        height: 12px;
        border: 2px solid #757575;
        background: #fff;
        border-radius: 2px;
        cursor: pointer;
        margin-top: 2px;
    }

    .twp-badge {
        padding: 4px 10px 5px 10px;
    }

    :host([aria-selected]) .twp-badge {
        margin-inline-end: 2px;
        padding-inline-end: 9px;
    }

    :host([variant='twp']) {
        padding: 4px 10px 5px 10px;
    }

    slot[name='icons'] {
        display: flex;
        gap: 8px;
    }

    :host([variant='twp']) ::slotted(merch-offer-select) {
        display: none;
    }

    :host([variant='twp']) .top-section {
        flex: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 100%;
        gap: var(--consonant-merch-spacing-xxs);
        padding: var(--consonant-merch-spacing-xs)
            var(--consonant-merch-spacing-xs) var(--consonant-merch-spacing-xs)
            var(--consonant-merch-spacing-xs);
        align-items: flex-start;
    }

    :host([variant='twp']) .body {
        padding: 0 var(--consonant-merch-spacing-xs);
    }

    :host([variant='twp']) footer {
        gap: var(--consonant-merch-spacing-xxs);
        flex-direction: column;
        align-self: flex-start;
    }

    :host([variant='special-offers'].center) {
        text-align: center;
    }

    /* plans */
    :host([variant='plans']) {
        min-height: 348px;
    }

    :host([variant='mini-compare-chart']) footer {
        min-height: var(--consonant-merch-card-mini-compare-footer-height);
        padding: var(--consonant-merch-spacing-xs);
    }

    /* mini-compare card  */
    :host([variant='mini-compare-chart']) .top-section {
        padding-top: var(--consonant-merch-spacing-s);
        padding-inline-start: var(--consonant-merch-spacing-s);
        height: var(--consonant-merch-card-mini-compare-top-section-height);
    }

    @media screen and ${pe(ta)} {
        [class*'-merch-cards'] :host([variant='mini-compare-chart']) footer {
            flex-direction: column;
            align-items: stretch;
            text-align: center;
        }
    }

    @media screen and ${pe(vt)} {
        :host([variant='mini-compare-chart']) .top-section {
            padding-top: var(--consonant-merch-spacing-xs);
        }
        :host([variant='mini-compare-chart']) .mini-compare-chart-badge {
            font-size: var(--consonant-merch-card-detail-font-size);
            padding: 6px 8px;
            top: 10px;
        }
    }
    @media screen and ${pe(W)} {
        :host([variant='mini-compare-chart']) footer {
            padding: var(--consonant-merch-spacing-xs)
                var(--consonant-merch-spacing-s)
                var(--consonant-merch-spacing-s)
                var(--consonant-merch-spacing-s);
        }
    }

    :host([variant='mini-compare-chart']) slot[name='footer-rows'] {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: end;
    }
    /* mini-compare card heights for the slots: heading-m, body-m, heading-m-price, price-commitment, offers, promo-text, footer */
    :host([variant='mini-compare-chart']) slot[name='heading-m'] {
        min-height: var(--consonant-merch-card-mini-compare-heading-m-height);
    }
    :host([variant='mini-compare-chart']) slot[name='body-m'] {
        min-height: var(--consonant-merch-card-mini-compare-body-m-height);
    }
    :host([variant='mini-compare-chart']) slot[name='heading-m-price'] {
        min-height: var(
            --consonant-merch-card-mini-compare-heading-m-price-height
        );
    }
    :host([variant='mini-compare-chart']) slot[name='price-commitment'] {
        min-height: var(
            --consonant-merch-card-mini-compare-price-commitment-height
        );
    }
    :host([variant='mini-compare-chart']) slot[name='offers'] {
        min-height: var(--consonant-merch-card-mini-compare-offers-height);
    }
    :host([variant='mini-compare-chart']) slot[name='promo-text'] {
        min-height: var(--consonant-merch-card-mini-compare-promo-text-height);
    }

    :host([variant='plans']) ::slotted([slot='heading-xs']),
    :host([variant='segment']) ::slotted([slot='heading-xs']) {
        max-width: var(--consonant-merch-card-heading-xs-max-width, 100%);
    }
`,vc=()=>{let e=[Me`
        /* Tablet */
        @media screen and ${pe(Y)} {
            :host([size='wide']),
            :host([size='super-wide']) {
                grid-column: span 2;
                width: 100%;
            }
        }

        /* Laptop */
        @media screen and ${pe(W)} {
            :host([size='super-wide']) {
                grid-column: span 3;
            }
        `];return e.push(Me`
        /* Large desktop */
        @media screen and ${pe(fe)} {
            :host([size='super-wide']) {
                grid-column: span 4;
            }
        }
    `),e},[xc,yc,bc,Ec,wc,bu]=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter","Tab"],ra=document.createElement("style");ra.innerHTML=`
:root {

    --consonant-merch-card-detail-font-size: 12px;
    --consonant-merch-card-detail-font-weight: 500;
    --consonant-merch-card-detail-letter-spacing: 0.8px;
    --consonant-merch-card-background-color: #fff;

    --consonant-merch-card-heading-font-size: 18px;
    --consonant-merch-card-heading-line-height: 22.5px;
    --consonant-merch-card-heading-secondary-font-size: 14px;
    --consonant-merch-card-body-font-size: 14px;
    --consonant-merch-card-body-line-height: 21px;
    --consonant-merch-card-promo-text-height: 17px;

    /* responsive width */
    --consonant-merch-card-mobile-width: 300px;

    /* spacing */
    --consonant-merch-spacing-xxxs: 4px;
    --consonant-merch-spacing-xxs: 8px;
    --consonant-merch-spacing-xs: 16px;
    --consonant-merch-spacing-s: 24px;
    --consonant-merch-spacing-m: 32px;

    /* cta */
    --consonant-merch-card-cta-font-size: 15px;

    /* headings */
    --consonant-merch-card-heading-xs-font-size: 18px;
    --consonant-merch-card-heading-xs-line-height: 22.5px;
    --consonant-merch-card-heading-s-font-size: 20px;
    --consonant-merch-card-heading-s-line-height: 25px;
    --consonant-merch-card-heading-m-font-size: 24px;
    --consonant-merch-card-heading-m-line-height: 30px;
    --consonant-merch-card-heading-l-font-size: 20px;
    --consonant-merch-card-heading-l-line-height: 30px;
    --consonant-merch-card-heading-xl-font-size: 36px;
    --consonant-merch-card-heading-xl-line-height: 45px;

    /* detail */
    --consonant-merch-card-detail-m-font-size: 12px;
    --consonant-merch-card-detail-m-line-height: 15px;
    --consonant-merch-card-detail-m-font-weight: 700;
    --consonant-merch-card-detail-m-letter-spacing: 1px;

    /* body */
    --consonant-merch-card-body-xxs-font-size: 12px;
    --consonant-merch-card-body-xxs-line-height: 18px;
    --consonant-merch-card-body-xxs-letter-spacing: 1px;
    --consonant-merch-card-body-xs-font-size: 14px;
    --consonant-merch-card-body-xs-line-height: 21px;
    --consonant-merch-card-body-s-font-size: 16px;
    --consonant-merch-card-body-s-line-height: 24px;
    --consonant-merch-card-body-m-font-size: 18px;
    --consonant-merch-card-body-m-line-height: 27px;
    --consonant-merch-card-body-l-font-size: 20px;
    --consonant-merch-card-body-l-line-height: 30px;
    --consonant-merch-card-body-xl-font-size: 22px;
    --consonant-merch-card-body-xl-line-height: 33px;


    --consonant-merch-card-heading-padding: 0;
    --consonant-merch-card-image-height: 180px;

    /* colors */
    --consonant-merch-card-border-color: #eaeaea;
    --color-accent: #1473E6;
    --merch-color-focus-ring: #1473E6;
    --merch-color-grey-80: #2c2c2c;
    --merch-color-green-promo: #2D9D78;

    /* merch card generic */
    --consonant-merch-card-max-width: 300px;
    --transition: cmax-height 0.3s linear, opacity 0.3s linear;

    /* special offers */
    --consonant-merch-card-special-offers-width: 378px;

    /* image */
    --consonant-merch-card-image-width: 300px;

    /* segment */
    --consonant-merch-card-segment-width: 378px;

    /* inline-heading */
    --consonant-merch-card-inline-heading-width: 300px;

    /* product */
    --consonant-merch-card-product-width: 300px;

    /* plans */
    --consonant-merch-card-plans-width: 300px;
    --consonant-merch-card-plans-icon-size: 40px;

    /* catalog */
    --consonant-merch-card-catalog-width: 276px;
    --consonant-merch-card-catalog-icon-size: 40px;

    /* twp */
    --consonant-merch-card-twp-width: 268px;
    --consonant-merch-card-twp-mobile-width: 300px;
    --consonant-merch-card-twp-mobile-height: 358px;

    /*mini compare chart */
    --consonant-merch-card-mini-compare-chart-icon-size: 32px;
    --consonant-merch-card-mini-compare-mobile-cta-font-size: 15px;
    --consonant-merch-card-mini-compare-mobile-cta-width: 75px;
    --consonant-merch-card-mini-compare-badge-mobile-max-width: 50px;

    /* inline SVGs */
    --checkmark-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Cpath fill='%23fff' d='M3.788 9A.999.999 0 0 1 3 8.615l-2.288-3a1 1 0 1 1 1.576-1.23l1.5 1.991 3.924-4.991a1 1 0 1 1 1.576 1.23l-4.712 6A.999.999 0 0 1 3.788 9z' class='spectrum-UIIcon--medium'/%3E%3C/svg%3E%0A");

    --secure-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23757575' viewBox='0 0 12 15'%3E%3Cpath d='M11.5 6H11V5A5 5 0 1 0 1 5v1H.5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5ZM3 5a3 3 0 1 1 6 0v1H3Zm4 6.111V12.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1.389a1.5 1.5 0 1 1 2 0Z'/%3E%3C/svg%3E");

    --info-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36'><circle cx='18' cy='12' r='2.15'%3E%3C/circle%3E%3Cpath d='M20.333 24H20v-7.6a.4.4 0 0 0-.4-.4h-3.933s-1.167.032-1.167 1 1.167 1 1.167 1H16v6h-.333s-1.167.032-1.167 1 1.167 1 1.167 1h4.667s1.167-.033 1.167-1-1.168-1-1.168-1z'%3E%3C/path%3E%3Cpath d='M18 2.1A15.9 15.9 0 1 0 33.9 18 15.9 15.9 0 0 0 18 2.1zm0 29.812A13.912 13.912 0 1 1 31.913 18 13.912 13.912 0 0 1 18 31.913z'%3E%3C/path%3E%3C/svg%3E");

    --ellipsis-icon: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><circle cx="2" cy="2" r="2" fill="%232c2c2c" transform="translate(6 6)"/><circle cx="2" cy="2" r="2" fill="%232c2c2c" data-name="Ellipse 71" transform="translate(12 6)"/><circle cx="2" cy="2" r="2" fill="%232c2c2c" transform="translate(0 6)"/></svg>');

}

merch-card-collection {
    display: contents;
}

merch-card-collection > merch-card:not([style]) {
    display: none;
}

merch-card-collection > p[slot],
merch-card-collection > div[slot] p {
    margin: 0;
}

.one-merch-card,
.two-merch-cards,
.three-merch-cards,
.four-merch-cards {
    display: grid;
    justify-content: center;
    justify-items: stretch;
    gap: var(--consonant-merch-spacing-m);
    padding: var(--spacing-m);
}

merch-card.background-opacity-70 {
    background-color: rgba(255 255 255 / 70%);
}

merch-card.has-divider hr {
    margin-bottom: var(--consonant-merch-spacing-xs);
    height: 1px;
    border: none;
}

merch-card[variant="special-offers"] span[is="inline-price"][data-template="strikethrough"] {
    font-size: var(--consonant-merch-card-body-xs-font-size);
}

merch-card p, merch-card h3, merch-card h4 {
    margin: 0;
}

merch-card span[is=inline-price] {
    display: inline-block;
}

merch-card [slot='heading-xs'] {
    color: var(--merch-color-grey-80);
    font-size: var(--consonant-merch-card-heading-xs-font-size);
    line-height: var(--consonant-merch-card-heading-xs-line-height);
    margin: 0;
    text-decoration: none;
}

merch-card.dc-pricing [slot='heading-xs'] {
    margin-bottom: var(--consonant-merch-spacing-xxs);
}

merch-card:not([variant='inline-heading']) [slot='heading-xs'] a {
    color: var(--merch-color-grey-80);
}

merch-card [slot='heading-xs'] a:not(:hover) {
    text-decoration: inherit;
}

merch-card [slot='heading-s'] {
    font-size: var(--consonant-merch-card-heading-s-font-size);
    line-height: var(--consonant-merch-card-heading-s-line-height);
    margin: 0;
    color: var(--merch-color-grey-80);
}

merch-card [slot='heading-m'] {
    font-size: var(--consonant-merch-card-heading-m-font-size);
    line-height: var(--consonant-merch-card-heading-m-line-height);
    margin: 0;
    color: var(--merch-color-grey-80);
    font-weight: 700;
}

merch-card [slot='heading-m-price'] {
    font-size: var(--consonant-merch-card-heading-m-font-size);
    line-height: var(--consonant-merch-card-heading-m-line-height);
    padding: 0 var(--consonant-merch-spacing-s);
    font-weight: 700;
    margin: 0;
    color: var(--merch-color-grey-80);
}

merch-card [slot='offers'] {
    padding: var(--consonant-merch-spacing-xxs) var(--consonant-merch-spacing-s);
}

merch-card [slot='heading-l'] {
    font-size: var(--consonant-merch-card-heading-l-font-size);
    line-height: var(--consonant-merch-card-heading-l-line-height);
    margin: 0;
    color: var(--merch-color-grey-80);
}

merch-card [slot='heading-xl'] {
    font-size: var(--consonant-merch-card-heading-xl-font-size);
    line-height: var(--consonant-merch-card-heading-xl-line-height);
    margin: 0;
    color: var(--merch-color-grey-80);
}

merch-card [slot='detail-m'] {
    font-size: var(--consonant-merch-card-detail-m-font-size);
    letter-spacing: var(--consonant-merch-card-detail-m-letter-spacing);
    font-weight: var(--consonant-merch-card-detail-m-font-weight);
    text-transform: uppercase;
    margin: 0;
    color: var(--merch-color-grey-80);
}

merch-card [slot="body-xxs"] {
    font-size: var(--consonant-merch-card-body-xxs-font-size);
    line-height: var(--consonant-merch-card-body-xxs-line-height);
    font-weight: normal;
    letter-spacing: var(--consonant-merch-card-body-xxs-letter-spacing);
    color: var(--merch-color-grey-80);
    margin: 0;
}

merch-card [slot="body-xs"] {
    font-size: var(--consonant-merch-card-body-xs-font-size);
    line-height: var(--consonant-merch-card-body-xs-line-height);
    color: var(--merch-color-grey-80);
}

merch-card [slot="body-m"] {
    font-size: var(--consonant-merch-card-body-m-font-size);
    line-height: var(--consonant-merch-card-body-m-line-height);
    color: var(--merch-color-grey-80);
}

merch-card [slot="body-l"] {
    font-size: var(--consonant-merch-card-body-l-font-size);
    line-height: var(--consonant-merch-card-body-l-line-height);
    color: var(--merch-color-grey-80);
}

merch-card [slot="body-xl"] {
    font-size: var(--consonant-merch-card-body-xl-font-size);
    line-height: var(--consonant-merch-card-body-xl-line-height);
    color: var(--merch-color-grey-80);
}

merch-card[variant="plans"] [slot="description"] {
    min-height: 84px;
}

merch-card[variant="catalog"] [slot="action-menu-content"] {
    background-color: #000;
    color: var(--color-white, #fff);
    font-size: var(--consonant-merch-card-body-xs-font-size);
    width: fit-content;
    padding: var(--consonant-merch-spacing-xs);
    border-radius: var(--consonant-merch-spacing-xxxs);
    position: absolute;
    top: 55px;
    right: 15px;
    line-height: var(--consonant-merch-card-body-line-height);
}

merch-card[variant="catalog"] [slot="action-menu-content"] ul {
    padding-left: 0;
    padding-bottom: var(--consonant-merch-spacing-xss);
    margin-top: 0;
    margin-bottom: 0;
    list-style-position: inside;
    list-style-type: '\u2022 ';
}

merch-card[variant="catalog"] [slot="action-menu-content"] ul li {
    padding-left: 0;
    line-height: var(--consonant-merch-card-body-line-height);
}

merch-card[variant="catalog"] [slot="action-menu-content"] ::marker {
    margin-right: 0;
}

merch-card[variant="catalog"] [slot="action-menu-content"] p {
    color: var(--color-white, #fff);
}

merch-card[variant="catalog"] [slot="action-menu-content"] a {
    color: var(--consonant-merch-card-background-color);
    text-decoration: underline;
}

merch-card[variant="plans"] [slot="quantity-select"] {
    display: flex;
    justify-content: flex-start;
    box-sizing: border-box;
    width: 100%;
    padding: var(--consonant-merch-spacing-xs);
}

merch-card[variant="twp"] div[class$='twp-badge'] {
    padding: 4px 10px 5px 10px;
}

merch-card[variant="twp"] [slot="body-xs-top"] {
    font-size: var(--consonant-merch-card-body-xs-font-size);
    line-height: var(--consonant-merch-card-body-xs-line-height);
    color: var(--merch-color-grey-80);
}

merch-card[variant="twp"] [slot="body-xs"] ul {
    padding: 0;
    margin: 0;
}

merch-card[variant="twp"] [slot="body-xs"] ul li {
    list-style-type: none;
    padding-left: 0;
}

merch-card[variant="twp"] [slot="body-xs"] ul li::before {
    content: '\xB7';
    font-size: 20px;
    padding-right: 5px;
    font-weight: bold;
}

merch-card[variant="twp"] [slot="footer"] {
    font-size: var(--consonant-merch-card-body-xs-font-size);
    line-height: var(--consonant-merch-card-body-xs-line-height);
    padding: var(--consonant-merch-spacing-s)
    var(--consonant-merch-spacing-xs) var(--consonant-merch-spacing-xs);
    color: var(--merch-color-grey-80);
    display: flex;
    flex-flow: wrap;
}

merch-card[variant='twp'] merch-quantity-select,
merch-card[variant='twp'] merch-offer-select {
    display: none;
}

[slot="cci-footer"] p,
[slot="cct-footer"] p,
[slot="cce-footer"] p {
    margin: 0;
}

/* mini compare chart card styles */

merch-card[variant="mini-compare-chart"] [slot="heading-m"] {
    padding: 0 var(--consonant-merch-spacing-s) 0;
}

merch-card[variant="mini-compare-chart"] [slot="body-m"] {
    padding: var(--consonant-merch-spacing-xs) var(--consonant-merch-spacing-s);
}

merch-card[variant="mini-compare-chart"] [is="inline-price"] {
    display: inline-block;
    min-height: 30px;
    min-width: 1px;
}

merch-card[variant="mini-compare-chart"] span.placeholder-resolved[data-template="strikethrough"] {
    font-size: var(--consonant-merch-card-body-m-font-size);
    font-weight: 500;
}

merch-card[variant="mini-compare-chart"] [slot="price-commitment"] {
    font-size: var(--consonant-merch-card-body-xs-font-size);
    padding: 0 var(--consonant-merch-spacing-s);
}

merch-card[variant="mini-compare-chart"] [slot="price-commitment"] a {
    display: inline-block;
    height: 27px;
}

merch-card[variant="mini-compare-chart"] [slot="offers"] {
    font-size: var(--consonant-merch-card-body-xs-font-size);
}

merch-card [slot="promo-text"] {
    color: var(--merch-color-green-promo);
    font-size: var(--consonant-merch-card-promo-text-height);
    font-weight: 700;
    line-height: var(--consonant-merch-card-promo-text-height);
    margin: 0;
    min-height: var(--consonant-merch-card-promo-text-height);
    padding: 0;
}

merch-card[variant="mini-compare-chart"] [slot="promo-text"] {
    padding: var(--consonant-merch-spacing-xs) var(--consonant-merch-spacing-s) 0;
}

merch-card[variant="mini-compare-chart"] [slot="promo-text"] a {
    text-decoration: underline;
}

merch-card[variant="mini-compare-chart"] .footer-row-icon {
    display: flex;
    place-items: center;
}

merch-card[variant="mini-compare-chart"] .footer-row-icon img {
    max-width: initial;
    width: var(--consonant-merch-card-mini-compare-chart-icon-size);
    height: var(--consonant-merch-card-mini-compare-chart-icon-size);
}

merch-card[variant="mini-compare-chart"] .footer-row-cell {
    border-top: 1px solid var(--consonant-merch-card-border-color);
    display: flex;
    gap: var(--consonant-merch-spacing-xs);
    justify-content: start;
    place-items: center;
    padding: var(--consonant-merch-spacing-xs) var(--consonant-merch-spacing-s);
}

merch-card[variant="mini-compare-chart"] .footer-row-cell-description {
    font-size: var(--consonant-merch-card-body-s-font-size);
    line-height: var(--consonant-merch-card-body-s-line-height);
}

merch-card[variant="mini-compare-chart"] .footer-row-cell-description p {
    color: var(--merch-color-grey-80);
    vertical-align: bottom;
}

merch-card[variant="mini-compare-chart"] .footer-row-cell-description a {
    color: var(--color-accent);
    text-decoration: solid;
}

@media screen and ${vt} {
    merch-card[variant="mini-compare-chart"] .mini-compare-chart-badge + [slot='heading-m'] {
        margin-top: var(--consonant-merch-spacing-m);
    }

    merch-card[variant="mini-compare-chart"] [slot='heading-m'] {
        padding: 0 var(--consonant-merch-spacing-xs) 0;
        font-size: var(--consonant-merch-card-body-s-font-size);
        line-height: var(--consonant-merch-card-body-s-line-height);
        width: inherit;
    }

    merch-card[variant="mini-compare-chart"] [slot='body-m'] {
        font-size: var(--consonant-merch-card-body-xs-font-size);
        line-height: var(--consonant-merch-card-body-xs-line-height);
        padding: var(--consonant-merch-spacing-xs);
    }

    merch-card[variant="mini-compare-chart"] [slot="offers"] {
        padding: 0 var(--consonant-merch-spacing-xs);
    }

    merch-card[variant="mini-compare-chart"] [slot='heading-m-price'] {
        font-size: var(--consonant-merch-card-body-s-font-size);
        padding: 0 var(--consonant-merch-spacing-xs) var(--consonant-merch-spacing-xs);
    }

    merch-card[variant="mini-compare-chart"] [slot="heading-m-price"]:has(+ [slot="footer"]) {
        padding-bottom: 0;
    }

    merch-card[variant="mini-compare-chart"] span.placeholder-resolved[data-template="strikethrough"] {
        font-size: var(--consonant-merch-card-body-xs-font-size);
    }

    merch-card[variant="mini-compare-chart"] [slot="price-commitment"] {
        padding: 0 var(--consonant-merch-spacing-xs);
    }

    merch-card[variant="mini-compare-chart"] [slot="promo-text"] {
        font-size: var(--consonant-merch-card-body-xs-font-size);
        padding: var(--consonant-merch-spacing-xs);
    }

    merch-card[variant="mini-compare-chart"] .footer-row-cell {
        flex-direction: column;
        place-items: flex-start;
        gap: 0px;
        padding: var(--consonant-merch-spacing-xs);
    }

    merch-card[variant="mini-compare-chart"] .footer-row-icon {
        margin-bottom: var(--consonant-merch-spacing-xs);
    }

    merch-card[variant="mini-compare-chart"] .footer-row-cell-description {
        font-size: var(--consonant-merch-card-body-xs-font-size);
        line-height: var(--consonant-merch-card-body-xs-line-height);
    }
}

div[slot="footer"] {
    display: contents;
}

[slot="footer"] a {
    word-wrap: break-word;
    text-align: center;
}

[slot="footer"] a:not([class]) {
    font-weight: 700;
    font-size: var(--consonant-merch-card-cta-font-size);
}

div[slot='bg-image'] img {
    position: relative;
    width: 100%;
    min-height: var(--consonant-merch-card-image-height);
    max-height: var(--consonant-merch-card-image-height);
    object-fit: cover;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
}

/* Mobile */
@media screen and ${vt} {
    :root {
        --consonant-merch-card-mini-compare-chart-width: 142px;
        --consonant-merch-card-segment-width: 276px;
        --consonant-merch-card-mini-compare-chart-wide-width: 302px;
        --consonant-merch-card-special-offers-width: 302px;
        --consonant-merch-card-twp-width: 300px;
    }
}


/* Tablet */
@media screen and ${Y} {
    :root {
        --consonant-merch-card-catalog-width: 302px;
        --consonant-merch-card-plans-width: 302px;
        --consonant-merch-card-segment-width: 276px;
        --consonant-merch-card-mini-compare-chart-width: 178px;
        --consonant-merch-card-mini-compare-chart-wide-width: 302px;
        --consonant-merch-card-special-offers-width: 302px;
        --consonant-merch-card-twp-width: 268px;
    }
}

/* desktop */
@media screen and ${W} {
    :root {
        --consonant-merch-card-catalog-width: 276px;
        --consonant-merch-card-plans-width: 276px;
        --consonant-merch-card-segment-width: 302px;
        --consonant-merch-card-inline-heading-width: 378px;
        --consonant-merch-card-product-width: 378px;
        --consonant-merch-card-image-width: 378px;
        --consonant-merch-card-mini-compare-chart-width: 378px;
        --consonant-merch-card-mini-compare-chart-wide-width: 484px;
        --consonant-merch-card-twp-width: 268px;
    }
}

/* supported cards */
/* grid style for plans */
.one-merch-card.plans,
.two-merch-cards.plans,
.three-merch-cards.plans,
.four-merch-cards.plans {
    grid-template-columns: var(--consonant-merch-card-plans-width);
}

/* Tablet */
@media screen and ${Y} {
    .two-merch-cards.plans,
    .three-merch-cards.plans,
    .four-merch-cards.plans {
        grid-template-columns: repeat(2, var(--consonant-merch-card-plans-width));
    }
}

/* desktop */
@media screen and ${W} {
    .three-merch-cards.plans,
    .four-merch-cards.plans {
        grid-template-columns: repeat(3, var(--consonant-merch-card-plans-width));
    }
}

/* Large desktop */
    @media screen and ${fe} {
    .four-merch-cards.plans {
        grid-template-columns: repeat(4, var(--consonant-merch-card-plans-width));
    }
}


/* grid style for catalog */
.one-merch-card.catalog,
.two-merch-cards.catalog,
.three-merch-cards.catalog,
.four-merch-cards.catalog {
    grid-template-columns: var(--consonant-merch-card-catalog-width);
}

/* Tablet */
@media screen and ${Y} {
    .two-merch-cards.catalog,
    .three-merch-cards.catalog,
    .four-merch-cards.catalog {
        grid-template-columns: repeat(2, var(--consonant-merch-card-catalog-width));
    }
}

/* desktop */
@media screen and ${W} {
    .three-merch-cards.catalog,
    .four-merch-cards.catalog {
        grid-template-columns: repeat(3, var(--consonant-merch-card-catalog-width));
    }
}

/* Large desktop */
    @media screen and ${fe} {
    .four-merch-cards.catalog {
        grid-template-columns: repeat(4, var(--consonant-merch-card-catalog-width));
    }
}


/* grid style for special-offers */
.one-merch-card.special-offers,
.two-merch-cards.special-offers,
.three-merch-cards.special-offers,
.four-merch-cards.special-offers {
    grid-template-columns: minmax(300px, var(--consonant-merch-card-special-offers-width));
}

/* Tablet */
@media screen and ${Y} {
    .two-merch-cards.special-offers,
    .three-merch-cards.special-offers,
    .four-merch-cards.special-offers {
        grid-template-columns: repeat(2, minmax(300px, var(--consonant-merch-card-special-offers-width)));
    }
}

/* desktop */
@media screen and ${W} {
    .three-merch-cards.special-offers,
    .four-merch-cards.special-offers {
        grid-template-columns: repeat(3, minmax(300px, var(--consonant-merch-card-special-offers-width)));
    }
}

@media screen and ${fe} {
    .four-merch-cards.special-offers {
        grid-template-columns: repeat(4, minmax(300px, var(--consonant-merch-card-special-offers-width)));
    }
}


/* grid style for image */
.one-merch-card.image,
.two-merch-cards.image,
.three-merch-cards.image,
.four-merch-cards.image {
    grid-template-columns: var(--consonant-merch-card-image-width);
}

/* Tablet */
@media screen and ${Y} {
    .two-merch-cards.image,
    .three-merch-cards.image,
    .four-merch-cards.image {
        grid-template-columns: repeat(2, var(--consonant-merch-card-image-width));
    }
}

/* desktop */
@media screen and ${W} {
    .three-merch-cards.image,
    .four-merch-cards.image {
        grid-template-columns: repeat(3, var(--consonant-merch-card-image-width));
    }
}

/* Large desktop */
    @media screen and ${fe} {
    .four-merch-cards.image {
        grid-template-columns: repeat(4, var(--consonant-merch-card-image-width));
    }
}


/* grid style for segment */
.one-merch-card.segment,
.two-merch-cards.segment,
.three-merch-cards.segment,
.four-merch-cards.segment {
    grid-template-columns: minmax(276px, var(--consonant-merch-card-segment-width));
}

/* Tablet */
@media screen and ${Y} {
    .two-merch-cards.segment,
    .three-merch-cards.segment,
    .four-merch-cards.segment {
        grid-template-columns: repeat(2, minmax(276px, var(--consonant-merch-card-segment-width)));
    }
}

/* desktop */
@media screen and ${W} {
    .three-merch-cards.segment {
        grid-template-columns: repeat(3, minmax(276px, var(--consonant-merch-card-segment-width)));
    }

    .four-merch-cards.segment {
        grid-template-columns: repeat(4, minmax(276px, var(--consonant-merch-card-segment-width)));
    }
}


/* grid style for product */
.one-merch-card.product,
.two-merch-cards.product,
.three-merch-cards.product,
.four-merch-cards.product {
    grid-template-columns: var(--consonant-merch-card-product-width);
}

/* Tablet */
@media screen and ${Y} {
    .two-merch-cards.product,
    .three-merch-cards.product,
    .four-merch-cards.product {
        grid-template-columns: repeat(2, var(--consonant-merch-card-product-width));
    }
}

/* desktop */
@media screen and ${W} {
    .three-merch-cards.product,
    .four-merch-cards.product {
        grid-template-columns: repeat(3, var(--consonant-merch-card-product-width));
    }
}

/* Large desktop */
    @media screen and ${fe} {
    .four-merch-cards.product {
        grid-template-columns: repeat(4, var(--consonant-merch-card-product-width));
    }
}

/* grid style for twp */
.one-merch-card.twp,
.two-merch-cards.twp,
.three-merch-cards.twp {
    grid-template-columns: var(--consonant-merch-card-image-width);
}

/* Tablet */
@media screen and ${Y} {
    .one-merch-card.twp,
    .two-merch-cards.twp {
        grid-template-columns: repeat(2, var(--consonant-merch-card-twp-width));
    }
    .three-merch-cards.twp {
        grid-template-columns: repeat(3, var(--consonant-merch-card-twp-width));
    }
}

/* desktop */
@media screen and ${W} {
    .one-merch-card.twp
    .two-merch-cards.twp {
        grid-template-columns: repeat(2, var(--consonant-merch-card-twp-width));
    }
    .three-merch-cards.twp {
        grid-template-columns: repeat(3, var(--consonant-merch-card-twp-width));
    }
}

/* Large desktop */
    @media screen and ${fe} {
        .one-merch-card.twp
        .two-merch-cards.twp {
            grid-template-columns: repeat(2, var(--consonant-merch-card-twp-width));
        }
        .three-merch-cards.twp {
        grid-template-columns: repeat(3, var(--consonant-merch-card-twp-width));
    }
}

/* Mobile */
@media screen and ${vt} {
    .one-merch-card.twp,
    .two-merch-cards.twp,
    .three-merch-cards.twp {
        grid-template-columns: repeat(1, var(--consonant-merch-card-twp-mobile-width));
    }
}

/* grid style for inline-heading */
.one-merch-card.inline-heading,
.two-merch-cards.inline-heading,
.three-merch-cards.inline-heading,
.four-merch-cards.inline-heading {
    grid-template-columns: var(--consonant-merch-card-inline-heading-width);
}

/* Tablet */
@media screen and ${Y} {
    .two-merch-cards.inline-heading,
    .three-merch-cards.inline-heading,
    .four-merch-cards.inline-heading {
        grid-template-columns: repeat(2, var(--consonant-merch-card-inline-heading-width));
    }
}

/* desktop */
@media screen and ${W} {
    .three-merch-cards.inline-heading,
    .four-merch-cards.inline-heading {
        grid-template-columns: repeat(3, var(--consonant-merch-card-inline-heading-width));
    }
}

/* Large desktop */
    @media screen and ${fe} {
    .four-merch-cards.inline-heading {
        grid-template-columns: repeat(4, var(--consonant-merch-card-inline-heading-width));
    }
}

/* grid style for mini-compare-chart */
.one-merch-card.mini-compare-chart {
    grid-template-columns: var(--consonant-merch-card-mini-compare-chart-wide-width);
    gap: var(--consonant-merch-spacing-xs);
}

.two-merch-cards.mini-compare-chart,
.three-merch-cards.mini-compare-chart,
.four-merch-cards.mini-compare-chart {
    grid-template-columns: repeat(2, var(--consonant-merch-card-mini-compare-chart-width));
    gap: var(--consonant-merch-spacing-xs);
}

@media screen and ${vt} {
    .two-merch-cards.mini-compare-chart merch-card [slot="footer"] a,
    .three-merch-cards.mini-compare-chart merch-card [slot="footer"] a,
    .four-merch-cards.mini-compare-chart merch-card [slot="footer"] a {
        flex: 1;
    }
}

@media screen and ${ta} {
    .three-merch-cards.mini-compare-chart merch-card [slot="footer"] a,
    .four-merch-cards.mini-compare-chart merch-card [slot="footer"] a {
        flex: 1;
    }
}

/* Tablet */
@media screen and ${Y} {
    .two-merch-cards.mini-compare-chart {
        grid-template-columns: repeat(2, minmax(var(--consonant-merch-card-mini-compare-chart-width), var(--consonant-merch-card-mini-compare-chart-wide-width)));
        gap: var(--consonant-merch-spacing-m);
    }

    .three-merch-cards.mini-compare-chart,
    .four-merch-cards.mini-compare-chart {
        grid-template-columns: repeat(3, minmax(var(--consonant-merch-card-mini-compare-chart-width), var(--consonant-merch-card-mini-compare-chart-wide-width)));
    }
}

/* desktop */
@media screen and ${W} {
    .one-merch-card.mini-compare-chart {
        grid-template-columns: var(--consonant-merch-card-mini-compare-chart-wide-width);
    }

    .two-merch-cards.mini-compare-chart {
        grid-template-columns: repeat(2, var(--consonant-merch-card-mini-compare-chart-wide-width));
        gap: var(--consonant-merch-spacing-m);
    }

    .three-merch-cards.mini-compare-chart,
    .four-merch-cards.mini-compare-chart {
        grid-template-columns: repeat(3, var(--consonant-merch-card-mini-compare-chart-width));
        gap: var(--consonant-merch-spacing-m);
    }
}

@media screen and ${fe} {
    .four-merch-cards.mini-compare-chart {
        grid-template-columns: repeat(4, var(--consonant-merch-card-mini-compare-chart-width));
    }
}

/* mini-compare card footer rows */
merch-card .footer-row-cell:nth-child(1) {
    min-height: var(--consonant-merch-card-footer-row-1-min-height);
}

merch-card .footer-row-cell:nth-child(2) {
    min-height: var(--consonant-merch-card-footer-row-2-min-height);
}

merch-card .footer-row-cell:nth-child(3) {
    min-height: var(--consonant-merch-card-footer-row-3-min-height);
}

merch-card .footer-row-cell:nth-child(4) {
    min-height: var(--consonant-merch-card-footer-row-4-min-height);
}

merch-card .footer-row-cell:nth-child(5) {
    min-height: var(--consonant-merch-card-footer-row-5-min-height);
}

merch-card .footer-row-cell:nth-child(6) {
    min-height: var(--consonant-merch-card-footer-row-6-min-height);
}

merch-card .footer-row-cell:nth-child(7) {
    min-height: var(--consonant-merch-card-footer-row-7-min-height);
}

merch-card .footer-row-cell:nth-child(8) {
    min-height: var(--consonant-merch-card-footer-row-8-min-height);
}

span[is="inline-price"][data-template='strikethrough'] {
    text-decoration: line-through;
}

/* merch-offer-select */
merch-offer-select[variant="subscription-options"] merch-offer span[is="inline-price"][data-display-tax='true'] .price-tax-inclusivity {
    font-size: 12px;
    font-style: italic;
    font-weight: normal;
    position: absolute;
    left: 0;
    top: 20px;
}

body.merch-modal {
    overflow: hidden;
    scrollbar-gutter: stable;
    height: 100vh;
}
`;document.head.appendChild(ra);_c="merch-offer-select:ready",Sc="merch-card:ready",Zi="merch-storage:change",Ji="merch-quantity-selector:change";Qi="MERCH-CARD",Tc="merch-card",Pc=32,Xn="mini-compare-chart",Ki=e=>`--consonant-merch-card-footer-row-${e}-min-height`,Cc=(ur=class extends ne{constructor(){super();I(this,"customerSegment");I(this,"marketSegment");bt(this,ge);this.filters={},this.types="",this.selected=!1}updated(t){t.has("badgeBackgroundColor")&&this.variant!=="twp"&&(this.style.border=`1px solid ${this.badgeBackgroundColor}`),this.updateComplete.then(async()=>{let r=Array.from(this.querySelectorAll('span[is="inline-price"][data-wcs-osi]'));await Promise.all(r.map(n=>n.onceSettled())),this.adjustTitleWidth(),this.adjustMiniCompareBodySlots(),this.adjustMiniCompareFooterRows()})}get evergreen(){return this.classList.contains("intro-pricing")}get stockCheckbox(){return this.checkboxLabel?T`<label id="stock-checkbox">
                    <input type="checkbox" @change=${this.toggleStockOffer}></input>
                    <span></span>
                    ${this.checkboxLabel}
                </label>`:""}get cardImage(){return T` <div class="image">
            <slot name="bg-image"></slot>
            ${this.badge}
        </div>`}get secureLabelFooter(){let t=this.secureLabel?T`<span class="secure-transaction-label"
                  >${this.secureLabel}</span
              >`:"";return T`<footer>${t}<slot name="footer"></slot></footer>`}get miniCompareFooter(){let t=this.secureLabel?T`<slot name="secure-transaction-label">
                  <span class="secure-transaction-label"
                      >${this.secureLabel}</span
                  ></slot
              >`:T`<slot name="secure-transaction-label"></slot>`;return T`<footer>${t}<slot name="footer"></slot></footer>`}get badge(){let t;if(!(!this.badgeBackgroundColor||!this.badgeColor||!this.badgeText))return this.evergreen&&(t=`border: 1px solid ${this.badgeBackgroundColor}; border-right: none;`),T`
            <div
                id="badge"
                class="${this.variant}-badge"
                style="background-color: ${this.badgeBackgroundColor};
                    color: ${this.badgeColor};
                    ${t}"
            >
                ${this.badgeText}
            </div>
        `}get badgeElement(){return this.shadowRoot.getElementById("badge")}getContainer(){return this.closest('[class*="-merch-cards"]')??this.parentElement}get headingmMSlot(){return this.shadowRoot.querySelector('slot[name="heading-m"]').assignedElements()[0]}get footerSlot(){return this.shadowRoot.querySelector('slot[name="footer"]')?.assignedElements()[0]}get price(){return this.headingmMSlot?.querySelector('span[is="inline-price"]')}get checkoutLinks(){return[...this.footerSlot?.querySelectorAll('a[is="checkout-link"]')??[]]}get isMobileOrTablet(){return window.matchMedia("(max-width: 1024px)").matches}async toggleStockOffer({target:t}){if(!this.stockOfferOsis)return;let r=this.checkoutLinks;if(r.length!==0)for(let n of r){await n.onceSettled();let o=n.value?.[0]?.planType;if(!o)return;let i=this.stockOfferOsis[o];if(!i)return;let a=n.dataset.wcsOsi.split(",").filter(s=>s!==i);t.checked&&a.push(i),n.dataset.wcsOsi=a.join(",")}}toggleActionMenu(t){let r=t?.type==="mouseleave"?!0:void 0,n=this.shadowRoot.querySelector('slot[name="action-menu-content"]');n&&n.classList.toggle("hidden",r)}handleQuantitySelection(t){let r=this.checkoutLinks;for(let n of r)n.dataset.quantity=t.detail.option}get titleElement(){return this.variant==="special-offers"?this.querySelector('[slot="detail-m"]'):this.querySelector('[slot="heading-xs"]')}get title(){return this.titleElement?.textContent?.trim()}get description(){return this.querySelector('[slot="body-xs"]')?.textContent?.trim()}updateFilters(t){let r={...this.filters};Object.keys(r).forEach(n=>{if(t){r[n].order=Math.min(r[n].order||2,2);return}let o=r[n].order;o===1||isNaN(o)||(r[n].order=Number(o)+1)}),this.filters=r}includes(t){return this.textContent.match(new RegExp(t,"i"))!==null}render(){if(!(!this.isConnected||this.style.display==="none"))switch(this.variant){case"special-offers":return this.renderSpecialOffer();case"segment":return this.renderSegment();case"plans":return this.renderPlans();case"catalog":return this.renderCatalog();case"image":return this.renderImage();case"product":return this.renderProduct();case"inline-heading":return this.renderInlineHeading();case Xn:return this.renderMiniCompareChart();case"twp":return this.renderTwp();default:return this.renderProduct()}}renderSpecialOffer(){return T`${this.cardImage}
            <div class="body">
                <slot name="detail-m"></slot>
                <slot name="heading-xs"></slot>
                <slot name="body-xs"></slot>
            </div>
            ${this.evergreen?T`
                      <div
                          class="detail-bg-container"
                          style="background: ${this.detailBg}"
                      >
                          <slot name="detail-bg"></slot>
                      </div>
                  `:T`
                      <hr />
                      ${this.secureLabelFooter}
                  `}`}renderSegment(){return T` ${this.badge}
            <div class="body">
                <slot name="heading-xs"></slot>
                <slot name="promo-text"></slot>
                <slot name="body-xs"></slot>
            </div>
            <hr />
            ${this.secureLabelFooter}`}renderPlans(){return T` ${this.badge}
            <div class="body">
                <slot name="icons"></slot>
                <slot name="heading-xs"></slot>
                <slot name="promo-text"></slot>
                <slot name="heading-m"></slot>
                <slot name="body-xxs"></slot>
                <slot name="body-xs"></slot>
                ${this.stockCheckbox}
            </div>
            <slot name="quantity-select"></slot>
            ${this.secureLabelFooter}`}renderCatalog(){return T` <div class="body">
                <div class="top-section">
                    <slot name="icons"></slot> ${this.badge}
                    <div
                        class="action-menu
                        ${this.isMobileOrTablet&&this.actionMenu?"always-visible":""}
                        ${this.actionMenu?"invisible":"hidden"}"
                        @click="${this.toggleActionMenu}"
                    ></div>
                </div>
                <slot
                    name="action-menu-content"
                    class="action-menu-content
                    ${this.actionMenuContent?"":"hidden"}"
                    >${this.actionMenuContent}</slot
                >
                <slot name="heading-xs"></slot>
                <slot name="heading-m"></slot>
                <slot name="promo-text"></slot>
                <slot name="body-xs"></slot>
            </div>
            ${this.secureLabelFooter}`}renderImage(){return T`${this.cardImage}
            <div class="body">
                <slot name="icons"></slot>
                <slot name="heading-xs"></slot>
                <slot name="promo-text"></slot>
                <slot name="body-xxs"></slot>
                <slot name="body-xs"></slot>
            </div>
            ${this.evergreen?T`
                      <div
                          class="detail-bg-container"
                          style="background: ${this.detailBg}"
                      >
                          <slot name="detail-bg"></slot>
                      </div>
                  `:T`
                      <hr />
                      ${this.secureLabelFooter}
                  `}`}renderInlineHeading(){return T` ${this.badge}
            <div class="body">
                <div class="top-section">
                    <slot name="icons"></slot>
                    <slot name="heading-xs"></slot>
                </div>
                <slot name="body-xs"></slot>
            </div>
            ${this.customHr?"":T`<hr />`} ${this.secureLabelFooter}`}renderProduct(){return T` ${this.badge}
            <div class="body">
                <slot name="icons"></slot>
                <slot name="heading-xs"></slot>
                <slot name="promo-text"></slot>
                <slot name="body-xs"></slot>
            </div>
            ${this.secureLabelFooter}`}renderMiniCompareChart(){let{badge:t}=this;return T` <div class="top-section${t?" badge":""}">
                <slot name="icons"></slot> ${t}
            </div>
            <slot name="heading-m"></slot>
            <slot name="body-m"></slot>
            <slot name="heading-m-price"></slot>
            <slot name="price-commitment"></slot>
            <slot name="offers"></slot>
            <slot name="promo-text"></slot>
            ${this.miniCompareFooter}
            <slot name="footer-rows"><slot name="body-s"></slot></slot>`}renderTwp(){return T`${this.badge}
            <div class="top-section">
                <slot name="icons"></slot>
                <slot name="heading-xs"></slot>
                <slot name="body-xs-top"></slot>
            </div>
            <div class="body">
                <slot name="body-xs"></slot>
            </div>
            <footer><slot name="footer"></slot></footer>`}connectedCallback(){super.connectedCallback(),Qe(this,ge,this.getContainer()),this.setAttribute("tabindex",this.getAttribute("tabindex")??"0"),this.addEventListener("keydown",this.keydownHandler),this.addEventListener("mouseleave",this.toggleActionMenu),this.addEventListener(Ji,this.handleQuantitySelection),this.addEventListener(_c,this.merchCardReady,{once:!0}),this.updateComplete.then(()=>{this.merchCardReady()}),this.storageOptions?.addEventListener("change",this.handleStorageChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.keydownHandler),this.removeEventListener(Ji,this.handleQuantitySelection),this.storageOptions?.removeEventListener(Zi,this.handleStorageChange)}appendInvisibleSpacesToFooterLinks(){[...this.querySelectorAll('[slot="footer"] a')].forEach(t=>{Ac(t).forEach(r=>{let n=r.textContent.split(" ").map(o=>o.match(/.{1,7}/g)?.join("\u200B")).join(" ");r.textContent=n})})}keydownHandler(t){let r=document.activeElement?.closest(Qi);if(!r)return;function n(l,u){let d=document.elementFromPoint(l,u)?.closest(Qi);d&&(r.selected=!1,t.preventDefault(),t.stopImmediatePropagation(),d.focus(),d.selected=!0,d.scrollIntoView({behavior:"smooth",block:"center"}))}let{x:o,y:i,width:a,height:s}=r.getBoundingClientRect(),c=64,{code:h}=t;if(h==="Tab"){let l=Array.from(this.querySelectorAll('a[href], button:not([disabled]), textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select')),u=l[0],d=l[l.length-1];(!t.shiftKey&&document.activeElement===d||t.shiftKey&&document.activeElement===u)&&(t.preventDefault(),t.stopImmediatePropagation())}else switch(h){case xc:n(o-c,i);break;case yc:n(o+a+c,i);break;case bc:n(o,i-c);break;case Ec:n(o,i+s+c);break;case wc:if(this.variant==="twp")return;this.footerSlot?.querySelector("a")?.click();break}}updateMiniCompareElementMinHeight(t,r){let n=`--consonant-merch-card-mini-compare-${r}-height`,o=Math.max(0,parseInt(window.getComputedStyle(t).height)||0),i=parseInt(ce(this,ge).style.getPropertyValue(n))||0;o>i&&ce(this,ge).style.setProperty(n,`${o}px`)}async adjustTitleWidth(){if(!["segment","plans"].includes(this.variant))return;let t=this.getBoundingClientRect().width,r=this.badgeElement?.getBoundingClientRect().width||0;t===0||r===0||this.style.setProperty("--consonant-merch-card-heading-xs-max-width",`${Math.round(t-r-16)}px`)}async adjustMiniCompareBodySlots(){if(this.variant!==Xn||this.getBoundingClientRect().width===0)return;this.updateMiniCompareElementMinHeight(this.shadowRoot.querySelector(".top-section"),"top-section"),["heading-m","body-m","heading-m-price","price-commitment","offers","promo-text","secure-transaction-label"].forEach(r=>this.updateMiniCompareElementMinHeight(this.shadowRoot.querySelector(`slot[name="${r}"]`),r)),this.updateMiniCompareElementMinHeight(this.shadowRoot.querySelector("footer"),"footer");let t=this.shadowRoot.querySelector(".mini-compare-chart-badge");t&&t.textContent!==""&&ce(this,ge).style.setProperty("--consonant-merch-card-mini-compare-top-section-mobile-height","32px")}adjustMiniCompareFooterRows(){this.variant!==Xn||this.getBoundingClientRect().width===0||[...this.querySelector('[slot="footer-rows"]').children].forEach((t,r)=>{let n=Math.max(Pc,parseInt(window.getComputedStyle(t).height)||0),o=parseInt(ce(this,ge).style.getPropertyValue(Ki(r+1)))||0;n>o&&ce(this,ge).style.setProperty(Ki(r+1),`${n}px`)})}get storageOptions(){return this.querySelector("sp-radio-group#storage")}get storageSpecificOfferSelect(){let t=this.storageOptions?.selected;if(t){let r=this.querySelector(`merch-offer-select[storage="${t}"]`);if(r)return r}return this.querySelector("merch-offer-select")}get offerSelect(){return this.storageOptions?this.storageSpecificOfferSelect:this.querySelector("merch-offer-select")}get quantitySelect(){return this.querySelector("merch-quantity-select")}merchCardReady(){this.offerSelect&&!this.offerSelect.planType||this.dispatchEvent(new CustomEvent(Sc,{bubbles:!0}))}handleStorageChange(){let t=this.closest("merch-card")?.offerSelect.cloneNode(!0);t&&this.dispatchEvent(new CustomEvent(Zi,{detail:{offerSelect:t},bubbles:!0}))}get dynamicPrice(){return this.querySelector('[slot="price"]')}selectMerchOffer(t){if(t===this.merchOffer)return;this.merchOffer=t;let r=this.dynamicPrice;if(t.price&&r){let n=t.price.cloneNode(!0);r.onceSettled?r.onceSettled().then(()=>{r.replaceWith(n)}):r.replaceWith(n)}}},ge=new WeakMap,I(ur,"properties",{name:{type:String,attribute:"name",reflect:!0},variant:{type:String,reflect:!0},size:{type:String,attribute:"size",reflect:!0},badgeColor:{type:String,attribute:"badge-color"},badgeBackgroundColor:{type:String,attribute:"badge-background-color"},badgeText:{type:String,attribute:"badge-text"},actionMenu:{type:Boolean,attribute:"action-menu"},actionMenuContent:{type:String,attribute:"action-menu-content"},customHr:{type:Boolean,attribute:"custom-hr"},detailBg:{type:String,attribute:"detail-bg"},secureLabel:{type:String,attribute:"secure-label"},checkboxLabel:{type:String,attribute:"checkbox-label"},selected:{type:Boolean,attribute:"aria-selected",reflect:!0},storageOption:{type:String,attribute:"storage",reflect:!0},stockOfferOsis:{type:Object,attribute:"stock-offer-osis",converter:{fromAttribute:t=>{let[r,n,o]=t.split(",");return{PUF:r,ABM:n,M2M:o}}}},filters:{type:String,reflect:!0,converter:{fromAttribute:t=>Object.fromEntries(t.split(",").map(r=>{let[n,o,i]=r.split(":"),a=Number(o);return[n,{order:isNaN(a)?void 0:a,size:i}]})),toAttribute:t=>Object.entries(t).map(([r,{order:n,size:o}])=>[r,n,o].filter(i=>i!=null).join(":")).join(",")}},types:{type:String,attribute:"types",reflect:!0},merchOffer:{type:Object}}),I(ur,"styles",[gc,...vc()]),ur);customElements.define(Tc,Cc)});var Ke;(function(e){e.ServerError="ServerError",e.ClientError="ClientError",e.UnexpectedError="UnexpectedError"})(Ke||(Ke={}));var Qn=(e,t,r)=>({type:(o=>o>=500?Ke.ServerError:o<400?Ke.UnexpectedError:Ke.ClientError)(e),message:t,originatingRequest:r,status:e});var ca=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(a){a(i)})}return new(r||(r=Promise))(function(i,a){function s(l){try{h(n.next(l))}catch(u){a(u)}}function c(l){try{h(n.throw(l))}catch(u){a(u)}}function h(l){l.done?i(l.value):o(l.value).then(s,c)}h((n=n.apply(e,t||[])).next())})},Et;(function(e){e.AUTHORIZATION="Authorization",e.X_API_KEY="X-Api-Key"})(Et||(Et={}));var gr=class{constructor(t){this.fetchOptions=t}commonHeaders(){let t={};return this.fetchOptions.apiKey&&(t[Et.X_API_KEY]=this.fetchOptions.apiKey),this.fetchOptions.accessToken&&(t[Et.AUTHORIZATION]=`Bearer ${this.fetchOptions.accessToken}`),t}transformData(t,r){return r?t.map(n=>r(n)):t.map(n=>this.identifyTransform(n))}transformDatum(t,r){return r?r(t):this.identifyTransform(t)}identifyTransform(t){return t}failOnBadStatusOrParseBody(t,r){return ca(this,void 0,void 0,function*(){if(t.ok)return t.json().then(o=>({headers:t.headers,status:t.status,statusText:t.statusText,data:o}));let n=yield t.text();return Promise.reject(Qn(t.status,n,r))})}buildUrl(t,r,n,o,i){var a;let s=(a=this.fetchOptions.baseUrl)!==null&&a!==void 0?a:o(this.fetchOptions.env),c=i(r,n);return this.generateUrl(s,t,c)}generateUrl(t,r,n){let o=new URL(r,t);return n&&(o.search=this.convertToSearchParams(n).toString()),o.toString()}convertToSearchParams(t){return new URLSearchParams(t)}setParams(t,r,n){n!=null&&typeof n=="boolean"?t[r]=String(n):n&&(t[r]=n)}},vr=gr;var q;(function(e){e.STAGE="STAGE",e.PRODUCTION="PRODUCTION",e.LOCAL="LOCAL"})(q||(q={}));var et;(function(e){e.STAGE="STAGE",e.PRODUCTION="PROD",e.LOCAL="LOCAL"})(et||(et={}));var H;(function(e){e.DRAFT="DRAFT",e.PUBLISHED="PUBLISHED"})(H||(H={}));var _e;(function(e){e.V2="UCv2",e.V3="UCv3"})(_e||(_e={}));var X;(function(e){e.CHECKOUT="checkout",e.CHECKOUT_EMAIL="checkout/email",e.SEGMENTATION="segmentation",e.BUNDLE="bundle",e.COMMITMENT="commitment",e.RECOMMENDATION="recommendation",e.EMAIL="email",e.PAYMENT="payment",e.CHANGE_PLAN_TEAM_PLANS="change-plan/team-upgrade/plans",e.CHANGE_PLAN_TEAM_PAYMENT="change-plan/team-upgrade/payment"})(X||(X={}));var xr=function(e){var t;return(t=la.get(e))!==null&&t!==void 0?t:e},la=new Map([["countrySpecific","cs"],["quantity","q"],["authCode","code"],["checkoutPromoCode","apc"],["rurl","rUrl"],["curl","cUrl"],["ctxrturl","ctxRtUrl"],["country","co"],["language","lang"],["clientId","cli"],["context","ctx"],["productArrangementCode","pa"],["offerType","ot"],["marketSegment","ms"]]);var Kn=function(e){var t=typeof Symbol=="function"&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},eo=function(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n=r.call(e),o,i=[],a;try{for(;(t===void 0||t-- >0)&&!(o=n.next()).done;)i.push(o.value)}catch(s){a={error:s}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(a)throw a.error}}return i};function Ge(e,t,r){var n,o;try{for(var i=Kn(Object.entries(e)),a=i.next();!a.done;a=i.next()){var s=eo(a.value,2),c=s[0],h=s[1],l=xr(c);h!=null&&r.has(l)&&t.set(l,h)}}catch(u){n={error:u}}finally{try{a&&!a.done&&(o=i.return)&&o.call(i)}finally{if(n)throw n.error}}}function wt(e){switch(e){case q.PRODUCTION:return"https://commerce.adobe.com";default:return"https://commerce-stg.adobe.com"}}function _t(e,t){var r,n;for(var o in e){var i=e[o];try{for(var a=(r=void 0,Kn(Object.entries(i))),s=a.next();!s.done;s=a.next()){var c=eo(s.value,2),h=c[0],l=c[1];if(l!=null){var u=xr(h);t.set("items["+o+"]["+u+"]",l)}}}catch(d){r={error:d}}finally{try{s&&!s.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}}}var ha=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r},da=function(e){var t=typeof Symbol=="function"&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};function to(e){ma(e);var t=e.env,r=e.items,n=e.workflowStep,o=ha(e,["env","items","workflowStep"]),i=new URL(wt(t));return i.pathname=n+"/",_t(r,i.searchParams),Ge(o,i.searchParams,ua),i.toString()}var ua=new Set(["cli","co","lang","ctx","cUrl","mv","nglwfdata","otac","promoid","rUrl","sdid","spint","trackingid","code","campaignid","appctxid"]),pa=["env","workflowStep","clientId","country","items"];function ma(e){var t,r;try{for(var n=da(pa),o=n.next();!o.done;o=n.next()){var i=o.value;if(!e[i])throw new Error('Argument "checkoutData" is not valid, missing: '+i)}}catch(a){t={error:a}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}return!0}var fa=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r},ga=function(e){var t=typeof Symbol=="function"&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},va="p_draft_landscape",xa="/store/";function br(e){ba(e);var t=e.env,r=e.items,n=e.workflowStep,o=e.ms,i=e.marketSegment,a=e.ot,s=e.offerType,c=e.pa,h=e.productArrangementCode,l=e.landscape,u=fa(e,["env","items","workflowStep","ms","marketSegment","ot","offerType","pa","productArrangementCode","landscape"]),d={marketSegment:i??o,offerType:s??a,productArrangementCode:h??c},p=new URL(wt(t));return p.pathname=""+xa+n,n!==X.SEGMENTATION&&n!==X.CHANGE_PLAN_TEAM_PLANS&&_t(r,p.searchParams),n===X.SEGMENTATION&&Ge(d,p.searchParams,yr),Ge(u,p.searchParams,yr),l===H.DRAFT&&Ge({af:va},p.searchParams,yr),p.toString()}var yr=new Set(["af","ai","apc","appctxid","cli","co","csm","ctx","ctxRtUrl","DCWATC","dp","fr","gsp","ijt","lang","lo","mal","ms","mv","mv2","nglwfdata","ot","otac","pa","pcid","promoid","q","rf","sc","scl","sdid","sid","spint","svar","th","thm","trackingid","usid","workflowid","context.guid","so.ca","so.su","so.tr","so.va"]),ya=["env","workflowStep","clientId","country"];function ba(e){var t,r;try{for(var n=ga(ya),o=n.next();!o.done;o=n.next()){var i=o.value;if(!e[i])throw new Error('Argument "checkoutData" is not valid, missing: '+i)}}catch(a){t={error:a}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}if(e.workflowStep!==X.SEGMENTATION&&e.workflowStep!==X.CHANGE_PLAN_TEAM_PLANS&&!e.items)throw new Error('Argument "checkoutData" is not valid, missing: items');return!0}function Er(e,t){switch(e){case _e.V2:return to(t);case _e.V3:return br(t);default:return console.warn("Unsupported CheckoutType, will use UCv3 as default. Given type: "+e),br(t)}}var wr;(function(e){e.BASE="BASE",e.TRIAL="TRIAL",e.PROMOTION="PROMOTION"})(wr||(wr={}));var $;(function(e){e.MONTH="MONTH",e.YEAR="YEAR",e.TWO_YEARS="TWO_YEARS",e.THREE_YEARS="THREE_YEARS",e.PERPETUAL="PERPETUAL",e.TERM_LICENSE="TERM_LICENSE",e.ACCESS_PASS="ACCESS_PASS",e.THREE_MONTHS="THREE_MONTHS",e.SIX_MONTHS="SIX_MONTHS"})($||($={}));var O;(function(e){e.ANNUAL="ANNUAL",e.MONTHLY="MONTHLY",e.TWO_YEARS="TWO_YEARS",e.THREE_YEARS="THREE_YEARS",e.P1D="P1D",e.P1Y="P1Y",e.P3Y="P3Y",e.P10Y="P10Y",e.P15Y="P15Y",e.P3D="P3D",e.P7D="P7D",e.P30D="P30D",e.HALF_YEARLY="HALF_YEARLY",e.QUARTERLY="QUARTERLY"})(O||(O={}));var _r;(function(e){e.INDIVIDUAL="INDIVIDUAL",e.TEAM="TEAM",e.ENTERPRISE="ENTERPRISE"})(_r||(_r={}));var Sr;(function(e){e.COM="COM",e.EDU="EDU",e.GOV="GOV"})(Sr||(Sr={}));var Ar;(function(e){e.DIRECT="DIRECT",e.INDIRECT="INDIRECT"})(Ar||(Ar={}));var Tr;(function(e){e.ENTERPRISE_PRODUCT="ENTERPRISE_PRODUCT",e.ETLA="ETLA",e.RETAIL="RETAIL",e.VIP="VIP",e.VIPMP="VIPMP",e.FREE="FREE"})(Tr||(Tr={}));var Ea=H.PUBLISHED,ro=e=>{switch(e){case q.PRODUCTION:return"https://wcs.adobe.io";case q.STAGE:return"https://wcs-stage.adobe.io";case q.LOCAL:return"http://localhost:3002";default:return"https://wcs-stage.adobe.io"}},no=(e,t)=>{var r;return e.api_key=t.apiKey,e.landscape=(r=t.landscape)!==null&&r!==void 0?r:Ea,e};var wa=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(a){a(i)})}return new(r||(r=Promise))(function(i,a){function s(l){try{h(n.next(l))}catch(u){a(u)}}function c(l){try{h(n.throw(l))}catch(u){a(u)}}function h(l){l.done?i(l.value):o(l.value).then(s,c)}h((n=n.apply(e,t||[])).next())})},Pr=class extends vr{constructor(t){super(t),this.apiPaths={getWebCommerceArtifact:"web_commerce_artifact"},this.getWebCommerceArtifact=(r,n,o,i)=>wa(this,void 0,void 0,function*(){let a=this.buildUrl(this.apiPaths.getWebCommerceArtifact,n,r,s=>ro(s),(s,c)=>this.evaluateGetWebCommerceArtifactParams(s,c));return this.fetchOptions.fetch(a,{signal:i,headers:Object.assign({},this.commonHeaders()),mode:"cors"}).then(s=>this.failOnBadStatusOrParseBody(s,`GET ${a}`)).then(s=>{let h=s.data;return{data:this.transformDatum(h,o)}})})}evaluateGetWebCommerceArtifactParams(t,r){let n={};return this.setParams(n,"offer_selector_ids",r.offerSelectorIds.join(",")),this.setParams(n,"country",r.country),this.setParams(n,"language",r.language),this.setParams(n,"currency",r.currency),this.setParams(n,"locale",r.locale),this.setParams(n,"promotion_code",r.promotionCode),no(n,t)}},oo=Pr;var St=e=>new oo(e).getWebCommerceArtifact;var io="tacocat.js";var At=(e,t)=>String(e??"").toLowerCase()==String(t??"").toLowerCase(),ao=e=>`${e??""}`.replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]??t)??"";function C(e,t={},{metadata:r=!0,search:n=!0,storage:o=!0}={}){let i;if(n&&i==null){let a=new URLSearchParams(window.location.search),s=ze(n)?n:e;i=a.get(s)}if(o&&i==null){let a=ze(o)?o:e;i=window.sessionStorage.getItem(a)??window.localStorage.getItem(a)}if(r&&i==null){let a=lo(ze(r)?r:e);i=document.documentElement.querySelector(`meta[name="${a}"]`)?.content}return i??t[e]}var Fe=()=>{};var so=e=>typeof e=="boolean",ve=e=>typeof e=="function",Tt=e=>typeof e=="number",co=e=>e!=null&&typeof e=="object";var ze=e=>typeof e=="string",Cr=e=>ze(e)&&e,je=e=>Tt(e)&&Number.isFinite(e)&&e>0;function He(e,t=r=>r==null||r===""){return e!=null&&Object.entries(e).forEach(([r,n])=>{t(n)&&delete e[r]}),e}function _(e,t){if(so(e))return e;let r=String(e);return r==="1"||r==="true"?!0:r==="0"||r==="false"?!1:t}function le(e,t,r){let n=Object.values(t);return n.find(o=>At(o,e))??r??n[0]}function lo(e=""){return String(e).replace(/(\p{Lowercase_Letter})(\p{Uppercase_Letter})/gu,(t,r,n)=>`${r}-${n}`).replace(/\W+/gu,"-").toLowerCase()}function Ve(e,t=1){return Tt(e)||(e=Number.parseInt(e,10)),!Number.isNaN(e)&&e>0&&Number.isFinite(e)?e:t}var _a=Date.now(),Or=()=>`(+${Date.now()-_a}ms)`,Pt=new Set,Sa=_(C("tacocat.debug",{},{metadata:!1}),typeof process<"u"&&process.env?.DEBUG);function ho(e){let t=`[${io}/${e}]`,r=(a,s,...c)=>a?!0:(o(s,...c),!1),n=Sa?(a,...s)=>{console.debug(`${t} ${a}`,...s,Or())}:()=>{},o=(a,...s)=>{let c=`${t} ${a}`;Pt.forEach(([h])=>h(c,...s))};return{assert:r,debug:n,error:o,warn:(a,...s)=>{let c=`${t} ${a}`;Pt.forEach(([,h])=>h(c,...s))}}}function Aa(e,t){let r=[e,t];return Pt.add(r),()=>{Pt.delete(r)}}Aa((e,...t)=>{console.error(e,...t,Or())},(e,...t)=>{console.warn(e,...t,Or())});var Ta="no promo",uo="promo-tag",Pa="yellow",Ca="neutral",Oa=(e,t,r)=>{let n=i=>i||Ta,o=r?` (was "${n(t)}")`:"";return`${n(e)}${o}`},La="cancel-context",tt=(e,t)=>{let r=e===La,n=!r&&e?.length>0,o=(n||r)&&(t&&t!=e||!t&&!r),i=o&&n||!o&&!!t,a=i?e||t:void 0;return{effectivePromoCode:a,overridenPromoCode:e,className:i?uo:`${uo} no-promo`,text:Oa(a,t,o),variant:i?Pa:Ca,isOverriden:o}};var Lr=function(e,t){return Lr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(r[o]=n[o])},Lr(e,t)};function rt(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Lr(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var E=function(){return E=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},E.apply(this,arguments)};function Ct(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}var v;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(v||(v={}));var P;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(P||(P={}));var Se;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(Se||(Se={}));function Nr(e){return e.type===P.literal}function po(e){return e.type===P.argument}function Ot(e){return e.type===P.number}function Lt(e){return e.type===P.date}function Nt(e){return e.type===P.time}function Rt(e){return e.type===P.select}function $t(e){return e.type===P.plural}function mo(e){return e.type===P.pound}function kt(e){return e.type===P.tag}function It(e){return!!(e&&typeof e=="object"&&e.type===Se.number)}function nt(e){return!!(e&&typeof e=="object"&&e.type===Se.dateTime)}var Rr=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;var Na=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function fo(e){var t={};return e.replace(Na,function(r){var n=r.length;switch(r[0]){case"G":t.era=n===4?"long":n===5?"narrow":"short";break;case"y":t.year=n===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":t.month=["numeric","2-digit","short","long","narrow"][n-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":t.day=["numeric","2-digit"][n-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":t.weekday=n===4?"short":n===5?"narrow":"short";break;case"e":if(n<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][n-4];break;case"c":if(n<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][n-4];break;case"a":t.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":t.hourCycle="h12",t.hour=["numeric","2-digit"][n-1];break;case"H":t.hourCycle="h23",t.hour=["numeric","2-digit"][n-1];break;case"K":t.hourCycle="h11",t.hour=["numeric","2-digit"][n-1];break;case"k":t.hourCycle="h24",t.hour=["numeric","2-digit"][n-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":t.minute=["numeric","2-digit"][n-1];break;case"s":t.second=["numeric","2-digit"][n-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":t.timeZoneName=n<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),t}var go=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function bo(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var t=e.split(go).filter(function(d){return d.length>0}),r=[],n=0,o=t;n<o.length;n++){var i=o[n],a=i.split("/");if(a.length===0)throw new Error("Invalid number skeleton");for(var s=a[0],c=a.slice(1),h=0,l=c;h<l.length;h++){var u=l[h];if(u.length===0)throw new Error("Invalid number skeleton")}r.push({stem:s,options:c})}return r}function Ra(e){return e.replace(/^(.*?)-/,"")}var vo=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Eo=/^(@+)?(\+|#+)?$/g,$a=/(\*)(0+)|(#+)(0+)|(0+)/g,wo=/^(0+)$/;function xo(e){var t={};return e.replace(Eo,function(r,n,o){return typeof o!="string"?(t.minimumSignificantDigits=n.length,t.maximumSignificantDigits=n.length):o==="+"?t.minimumSignificantDigits=n.length:n[0]==="#"?t.maximumSignificantDigits=n.length:(t.minimumSignificantDigits=n.length,t.maximumSignificantDigits=n.length+(typeof o=="string"?o.length:0)),""}),t}function _o(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function ka(e){var t;if(e[0]==="E"&&e[1]==="E"?(t={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(t={notation:"scientific"},e=e.slice(1)),t){var r=e.slice(0,2);if(r==="+!"?(t.signDisplay="always",e=e.slice(2)):r==="+?"&&(t.signDisplay="exceptZero",e=e.slice(2)),!wo.test(e))throw new Error("Malformed concise eng/scientific notation");t.minimumIntegerDigits=e.length}return t}function yo(e){var t={},r=_o(e);return r||t}function So(e){for(var t={},r=0,n=e;r<n.length;r++){var o=n[r];switch(o.stem){case"percent":case"%":t.style="percent";continue;case"%x100":t.style="percent",t.scale=100;continue;case"currency":t.style="currency",t.currency=o.options[0];continue;case"group-off":case",_":t.useGrouping=!1;continue;case"precision-integer":case".":t.maximumFractionDigits=0;continue;case"measure-unit":case"unit":t.style="unit",t.unit=Ra(o.options[0]);continue;case"compact-short":case"K":t.notation="compact",t.compactDisplay="short";continue;case"compact-long":case"KK":t.notation="compact",t.compactDisplay="long";continue;case"scientific":t=E(E(E({},t),{notation:"scientific"}),o.options.reduce(function(s,c){return E(E({},s),yo(c))},{}));continue;case"engineering":t=E(E(E({},t),{notation:"engineering"}),o.options.reduce(function(s,c){return E(E({},s),yo(c))},{}));continue;case"notation-simple":t.notation="standard";continue;case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow";continue;case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short";continue;case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long";continue;case"unit-width-iso-code":t.currencyDisplay="symbol";continue;case"scale":t.scale=parseFloat(o.options[0]);continue;case"integer-width":if(o.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");o.options[0].replace($a,function(s,c,h,l,u,d){if(c)t.minimumIntegerDigits=h.length;else{if(l&&u)throw new Error("We currently do not support maximum integer digits");if(d)throw new Error("We currently do not support exact integer digits")}return""});continue}if(wo.test(o.stem)){t.minimumIntegerDigits=o.stem.length;continue}if(vo.test(o.stem)){if(o.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");o.stem.replace(vo,function(s,c,h,l,u,d){return h==="*"?t.minimumFractionDigits=c.length:l&&l[0]==="#"?t.maximumFractionDigits=l.length:u&&d?(t.minimumFractionDigits=u.length,t.maximumFractionDigits=u.length+d.length):(t.minimumFractionDigits=c.length,t.maximumFractionDigits=c.length),""}),o.options.length&&(t=E(E({},t),xo(o.options[0])));continue}if(Eo.test(o.stem)){t=E(E({},t),xo(o.stem));continue}var i=_o(o.stem);i&&(t=E(E({},t),i));var a=ka(o.stem);a&&(t=E(E({},t),a))}return t}var $r,Ia=new RegExp("^"+Rr.source+"*"),Ma=new RegExp(Rr.source+"*$");function x(e,t){return{start:e,end:t}}var Ua=!!String.prototype.startsWith,Da=!!String.fromCodePoint,Ga=!!Object.fromEntries,za=!!String.prototype.codePointAt,Fa=!!String.prototype.trimStart,ja=!!String.prototype.trimEnd,Ha=!!Number.isSafeInteger,Va=Ha?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},Ir=!0;try{Ao=Oo("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu"),Ir=(($r=Ao.exec("a"))===null||$r===void 0?void 0:$r[0])==="a"}catch{Ir=!1}var Ao,To=Ua?function(t,r,n){return t.startsWith(r,n)}:function(t,r,n){return t.slice(n,n+r.length)===r},Mr=Da?String.fromCodePoint:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var n="",o=t.length,i=0,a;o>i;){if(a=t[i++],a>1114111)throw RangeError(a+" is not a valid code point");n+=a<65536?String.fromCharCode(a):String.fromCharCode(((a-=65536)>>10)+55296,a%1024+56320)}return n},Po=Ga?Object.fromEntries:function(t){for(var r={},n=0,o=t;n<o.length;n++){var i=o[n],a=i[0],s=i[1];r[a]=s}return r},Co=za?function(t,r){return t.codePointAt(r)}:function(t,r){var n=t.length;if(!(r<0||r>=n)){var o=t.charCodeAt(r),i;return o<55296||o>56319||r+1===n||(i=t.charCodeAt(r+1))<56320||i>57343?o:(o-55296<<10)+(i-56320)+65536}},Ba=Fa?function(t){return t.trimStart()}:function(t){return t.replace(Ia,"")},Wa=ja?function(t){return t.trimEnd()}:function(t){return t.replace(Ma,"")};function Oo(e,t){return new RegExp(e,t)}var Ur;Ir?(kr=Oo("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu"),Ur=function(t,r){var n;kr.lastIndex=r;var o=kr.exec(t);return(n=o[1])!==null&&n!==void 0?n:""}):Ur=function(t,r){for(var n=[];;){var o=Co(t,r);if(o===void 0||No(o)||Ya(o))break;n.push(o),r+=o>=65536?2:1}return Mr.apply(void 0,n)};var kr,Lo=function(){function e(t,r){r===void 0&&(r={}),this.message=t,this.position={offset:0,line:1,column:1},this.ignoreTag=!!r.ignoreTag,this.requiresOtherClause=!!r.requiresOtherClause,this.shouldParseSkeletons=!!r.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(t,r,n){for(var o=[];!this.isEOF();){var i=this.char();if(i===123){var a=this.parseArgument(t,n);if(a.err)return a;o.push(a.val)}else{if(i===125&&t>0)break;if(i===35&&(r==="plural"||r==="selectordinal")){var s=this.clonePosition();this.bump(),o.push({type:P.pound,location:x(s,this.clonePosition())})}else if(i===60&&!this.ignoreTag&&this.peek()===47){if(n)break;return this.error(v.UNMATCHED_CLOSING_TAG,x(this.clonePosition(),this.clonePosition()))}else if(i===60&&!this.ignoreTag&&Dr(this.peek()||0)){var a=this.parseTag(t,r);if(a.err)return a;o.push(a.val)}else{var a=this.parseLiteral(t,r);if(a.err)return a;o.push(a.val)}}}return{val:o,err:null}},e.prototype.parseTag=function(t,r){var n=this.clonePosition();this.bump();var o=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:P.literal,value:"<"+o+"/>",location:x(n,this.clonePosition())},err:null};if(this.bumpIf(">")){var i=this.parseMessage(t+1,r,!0);if(i.err)return i;var a=i.val,s=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Dr(this.char()))return this.error(v.INVALID_TAG,x(s,this.clonePosition()));var c=this.clonePosition(),h=this.parseTagName();return o!==h?this.error(v.UNMATCHED_CLOSING_TAG,x(c,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:P.tag,value:o,children:a,location:x(n,this.clonePosition())},err:null}:this.error(v.INVALID_TAG,x(s,this.clonePosition())))}else return this.error(v.UNCLOSED_TAG,x(n,this.clonePosition()))}else return this.error(v.INVALID_TAG,x(n,this.clonePosition()))},e.prototype.parseTagName=function(){var t=this.offset();for(this.bump();!this.isEOF()&&Xa(this.char());)this.bump();return this.message.slice(t,this.offset())},e.prototype.parseLiteral=function(t,r){for(var n=this.clonePosition(),o="";;){var i=this.tryParseQuote(r);if(i){o+=i;continue}var a=this.tryParseUnquoted(t,r);if(a){o+=a;continue}var s=this.tryParseLeftAngleBracket();if(s){o+=s;continue}break}var c=x(n,this.clonePosition());return{val:{type:P.literal,value:o,location:c},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!qa(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(t){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(t==="plural"||t==="selectordinal")break;return null;default:return null}this.bump();var r=[this.char()];for(this.bump();!this.isEOF();){var n=this.char();if(n===39)if(this.peek()===39)r.push(39),this.bump();else{this.bump();break}else r.push(n);this.bump()}return Mr.apply(void 0,r)},e.prototype.tryParseUnquoted=function(t,r){if(this.isEOF())return null;var n=this.char();return n===60||n===123||n===35&&(r==="plural"||r==="selectordinal")||n===125&&t>0?null:(this.bump(),Mr(n))},e.prototype.parseArgument=function(t,r){var n=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(v.EXPECT_ARGUMENT_CLOSING_BRACE,x(n,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(v.EMPTY_ARGUMENT,x(n,this.clonePosition()));var o=this.parseIdentifierIfPossible().value;if(!o)return this.error(v.MALFORMED_ARGUMENT,x(n,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(v.EXPECT_ARGUMENT_CLOSING_BRACE,x(n,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:P.argument,value:o,location:x(n,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(v.EXPECT_ARGUMENT_CLOSING_BRACE,x(n,this.clonePosition())):this.parseArgumentOptions(t,r,o,n);default:return this.error(v.MALFORMED_ARGUMENT,x(n,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var t=this.clonePosition(),r=this.offset(),n=Ur(this.message,r),o=r+n.length;this.bumpTo(o);var i=this.clonePosition(),a=x(t,i);return{value:n,location:a}},e.prototype.parseArgumentOptions=function(t,r,n,o){var i,a=this.clonePosition(),s=this.parseIdentifierIfPossible().value,c=this.clonePosition();switch(s){case"":return this.error(v.EXPECT_ARGUMENT_TYPE,x(a,c));case"number":case"date":case"time":{this.bumpSpace();var h=null;if(this.bumpIf(",")){this.bumpSpace();var l=this.clonePosition(),u=this.parseSimpleArgStyleIfPossible();if(u.err)return u;var d=Wa(u.val);if(d.length===0)return this.error(v.EXPECT_ARGUMENT_STYLE,x(this.clonePosition(),this.clonePosition()));var p=x(l,this.clonePosition());h={style:d,styleLocation:p}}var f=this.tryParseArgumentClose(o);if(f.err)return f;var g=x(o,this.clonePosition());if(h&&To(h?.style,"::",0)){var y=Ba(h.style.slice(2));if(s==="number"){var u=this.parseNumberSkeletonFromString(y,h.styleLocation);return u.err?u:{val:{type:P.number,value:n,location:g,style:u.val},err:null}}else{if(y.length===0)return this.error(v.EXPECT_DATE_TIME_SKELETON,g);var d={type:Se.dateTime,pattern:y,location:h.styleLocation,parsedOptions:this.shouldParseSkeletons?fo(y):{}},N=s==="date"?P.date:P.time;return{val:{type:N,value:n,location:g,style:d},err:null}}}return{val:{type:s==="number"?P.number:s==="date"?P.date:P.time,value:n,location:g,style:(i=h?.style)!==null&&i!==void 0?i:null},err:null}}case"plural":case"selectordinal":case"select":{var S=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(v.EXPECT_SELECT_ARGUMENT_OPTIONS,x(S,E({},S)));this.bumpSpace();var b=this.parseIdentifierIfPossible(),L=0;if(s!=="select"&&b.value==="offset"){if(!this.bumpIf(":"))return this.error(v.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,x(this.clonePosition(),this.clonePosition()));this.bumpSpace();var u=this.tryParseDecimalInteger(v.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,v.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(u.err)return u;this.bumpSpace(),b=this.parseIdentifierIfPossible(),L=u.val}var A=this.tryParsePluralOrSelectOptions(t,s,r,b);if(A.err)return A;var f=this.tryParseArgumentClose(o);if(f.err)return f;var U=x(o,this.clonePosition());return s==="select"?{val:{type:P.select,value:n,options:Po(A.val),location:U},err:null}:{val:{type:P.plural,value:n,options:Po(A.val),offset:L,pluralType:s==="plural"?"cardinal":"ordinal",location:U},err:null}}default:return this.error(v.INVALID_ARGUMENT_TYPE,x(a,c))}},e.prototype.tryParseArgumentClose=function(t){return this.isEOF()||this.char()!==125?this.error(v.EXPECT_ARGUMENT_CLOSING_BRACE,x(t,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var t=0,r=this.clonePosition();!this.isEOF();){var n=this.char();switch(n){case 39:{this.bump();var o=this.clonePosition();if(!this.bumpUntil("'"))return this.error(v.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,x(o,this.clonePosition()));this.bump();break}case 123:{t+=1,this.bump();break}case 125:{if(t>0)t-=1;else return{val:this.message.slice(r.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(r.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(t,r){var n=[];try{n=bo(t)}catch{return this.error(v.INVALID_NUMBER_SKELETON,r)}return{val:{type:Se.number,tokens:n,location:r,parsedOptions:this.shouldParseSkeletons?So(n):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(t,r,n,o){for(var i,a=!1,s=[],c=new Set,h=o.value,l=o.location;;){if(h.length===0){var u=this.clonePosition();if(r!=="select"&&this.bumpIf("=")){var d=this.tryParseDecimalInteger(v.EXPECT_PLURAL_ARGUMENT_SELECTOR,v.INVALID_PLURAL_ARGUMENT_SELECTOR);if(d.err)return d;l=x(u,this.clonePosition()),h=this.message.slice(u.offset,this.offset())}else break}if(c.has(h))return this.error(r==="select"?v.DUPLICATE_SELECT_ARGUMENT_SELECTOR:v.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,l);h==="other"&&(a=!0),this.bumpSpace();var p=this.clonePosition();if(!this.bumpIf("{"))return this.error(r==="select"?v.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:v.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,x(this.clonePosition(),this.clonePosition()));var f=this.parseMessage(t+1,r,n);if(f.err)return f;var g=this.tryParseArgumentClose(p);if(g.err)return g;s.push([h,{value:f.val,location:x(p,this.clonePosition())}]),c.add(h),this.bumpSpace(),i=this.parseIdentifierIfPossible(),h=i.value,l=i.location}return s.length===0?this.error(r==="select"?v.EXPECT_SELECT_ARGUMENT_SELECTOR:v.EXPECT_PLURAL_ARGUMENT_SELECTOR,x(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!a?this.error(v.MISSING_OTHER_CLAUSE,x(this.clonePosition(),this.clonePosition())):{val:s,err:null}},e.prototype.tryParseDecimalInteger=function(t,r){var n=1,o=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(n=-1);for(var i=!1,a=0;!this.isEOF();){var s=this.char();if(s>=48&&s<=57)i=!0,a=a*10+(s-48),this.bump();else break}var c=x(o,this.clonePosition());return i?(a*=n,Va(a)?{val:a,err:null}:this.error(r,c)):this.error(t,c)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var t=this.position.offset;if(t>=this.message.length)throw Error("out of bound");var r=Co(this.message,t);if(r===void 0)throw Error("Offset "+t+" is at invalid UTF-16 code unit boundary");return r},e.prototype.error=function(t,r){return{val:null,err:{kind:t,message:this.message,location:r}}},e.prototype.bump=function(){if(!this.isEOF()){var t=this.char();t===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=t<65536?1:2)}},e.prototype.bumpIf=function(t){if(To(this.message,t,this.offset())){for(var r=0;r<t.length;r++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(t){var r=this.offset(),n=this.message.indexOf(t,r);return n>=0?(this.bumpTo(n),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(t){if(this.offset()>t)throw Error("targetOffset "+t+" must be greater than or equal to the current offset "+this.offset());for(t=Math.min(t,this.message.length);;){var r=this.offset();if(r===t)break;if(r>t)throw Error("targetOffset "+t+" is at invalid UTF-16 code unit boundary");if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&No(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var t=this.char(),r=this.offset(),n=this.message.charCodeAt(r+(t>=65536?2:1));return n??null},e}();function Dr(e){return e>=97&&e<=122||e>=65&&e<=90}function qa(e){return Dr(e)||e===47}function Xa(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function No(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function Ya(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function Gr(e){e.forEach(function(t){if(delete t.location,Rt(t)||$t(t))for(var r in t.options)delete t.options[r].location,Gr(t.options[r].value);else Ot(t)&&It(t.style)||(Lt(t)||Nt(t))&&nt(t.style)?delete t.style.location:kt(t)&&Gr(t.children)})}function Ro(e,t){t===void 0&&(t={}),t=E({shouldParseSkeletons:!0,requiresOtherClause:!0},t);var r=new Lo(e,t).parse();if(r.err){var n=SyntaxError(v[r.err.kind]);throw n.location=r.err.location,n.originalMessage=r.err.message,n}return t?.captureLocation||Gr(r.val),r.val}function ot(e,t){var r=t&&t.cache?t.cache:ts,n=t&&t.serializer?t.serializer:es,o=t&&t.strategy?t.strategy:Ja;return o(e,{cache:r,serializer:n})}function Za(e){return e==null||typeof e=="number"||typeof e=="boolean"}function $o(e,t,r,n){var o=Za(n)?n:r(n),i=t.get(o);return typeof i>"u"&&(i=e.call(this,n),t.set(o,i)),i}function ko(e,t,r){var n=Array.prototype.slice.call(arguments,3),o=r(n),i=t.get(o);return typeof i>"u"&&(i=e.apply(this,n),t.set(o,i)),i}function zr(e,t,r,n,o){return r.bind(t,e,n,o)}function Ja(e,t){var r=e.length===1?$o:ko;return zr(e,this,r,t.cache.create(),t.serializer)}function Qa(e,t){return zr(e,this,ko,t.cache.create(),t.serializer)}function Ka(e,t){return zr(e,this,$o,t.cache.create(),t.serializer)}var es=function(){return JSON.stringify(arguments)};function Fr(){this.cache=Object.create(null)}Fr.prototype.get=function(e){return this.cache[e]};Fr.prototype.set=function(e,t){this.cache[e]=t};var ts={create:function(){return new Fr}},Mt={variadic:Qa,monadic:Ka};var Ae;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(Ae||(Ae={}));var it=function(e){rt(t,e);function t(r,n,o){var i=e.call(this,r)||this;return i.code=n,i.originalMessage=o,i}return t.prototype.toString=function(){return"[formatjs Error: "+this.code+"] "+this.message},t}(Error);var jr=function(e){rt(t,e);function t(r,n,o,i){return e.call(this,'Invalid values for "'+r+'": "'+n+'". Options are "'+Object.keys(o).join('", "')+'"',Ae.INVALID_VALUE,i)||this}return t}(it);var Io=function(e){rt(t,e);function t(r,n,o){return e.call(this,'Value for "'+r+'" must be of type '+n,Ae.INVALID_VALUE,o)||this}return t}(it);var Mo=function(e){rt(t,e);function t(r,n){return e.call(this,'The intl string context variable "'+r+'" was not provided to the string "'+n+'"',Ae.MISSING_VALUE,n)||this}return t}(it);var M;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(M||(M={}));function rs(e){return e.length<2?e:e.reduce(function(t,r){var n=t[t.length-1];return!n||n.type!==M.literal||r.type!==M.literal?t.push(r):n.value+=r.value,t},[])}function ns(e){return typeof e=="function"}function at(e,t,r,n,o,i,a){if(e.length===1&&Nr(e[0]))return[{type:M.literal,value:e[0].value}];for(var s=[],c=0,h=e;c<h.length;c++){var l=h[c];if(Nr(l)){s.push({type:M.literal,value:l.value});continue}if(mo(l)){typeof i=="number"&&s.push({type:M.literal,value:r.getNumberFormat(t).format(i)});continue}var u=l.value;if(!(o&&u in o))throw new Mo(u,a);var d=o[u];if(po(l)){(!d||typeof d=="string"||typeof d=="number")&&(d=typeof d=="string"||typeof d=="number"?String(d):""),s.push({type:typeof d=="string"?M.literal:M.object,value:d});continue}if(Lt(l)){var p=typeof l.style=="string"?n.date[l.style]:nt(l.style)?l.style.parsedOptions:void 0;s.push({type:M.literal,value:r.getDateTimeFormat(t,p).format(d)});continue}if(Nt(l)){var p=typeof l.style=="string"?n.time[l.style]:nt(l.style)?l.style.parsedOptions:void 0;s.push({type:M.literal,value:r.getDateTimeFormat(t,p).format(d)});continue}if(Ot(l)){var p=typeof l.style=="string"?n.number[l.style]:It(l.style)?l.style.parsedOptions:void 0;p&&p.scale&&(d=d*(p.scale||1)),s.push({type:M.literal,value:r.getNumberFormat(t,p).format(d)});continue}if(kt(l)){var f=l.children,g=l.value,y=o[g];if(!ns(y))throw new Io(g,"function",a);var N=at(f,t,r,n,o,i),S=y(N.map(function(A){return A.value}));Array.isArray(S)||(S=[S]),s.push.apply(s,S.map(function(A){return{type:typeof A=="string"?M.literal:M.object,value:A}}))}if(Rt(l)){var b=l.options[d]||l.options.other;if(!b)throw new jr(l.value,d,Object.keys(l.options),a);s.push.apply(s,at(b.value,t,r,n,o));continue}if($t(l)){var b=l.options["="+d];if(!b){if(!Intl.PluralRules)throw new it(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Ae.MISSING_INTL_API,a);var L=r.getPluralRules(t,{type:l.pluralType}).select(d-(l.offset||0));b=l.options[L]||l.options.other}if(!b)throw new jr(l.value,d,Object.keys(l.options),a);s.push.apply(s,at(b.value,t,r,n,o,d-(l.offset||0)));continue}}return rs(s)}function os(e,t){return t?E(E(E({},e||{}),t||{}),Object.keys(e).reduce(function(r,n){return r[n]=E(E({},e[n]),t[n]||{}),r},{})):e}function is(e,t){return t?Object.keys(e).reduce(function(r,n){return r[n]=os(e[n],t[n]),r},E({},e)):e}function Hr(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,r){e[t]=r}}}}}function as(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:ot(function(){for(var t,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return new((t=Intl.NumberFormat).bind.apply(t,Ct([void 0],r)))},{cache:Hr(e.number),strategy:Mt.variadic}),getDateTimeFormat:ot(function(){for(var t,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return new((t=Intl.DateTimeFormat).bind.apply(t,Ct([void 0],r)))},{cache:Hr(e.dateTime),strategy:Mt.variadic}),getPluralRules:ot(function(){for(var t,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return new((t=Intl.PluralRules).bind.apply(t,Ct([void 0],r)))},{cache:Hr(e.pluralRules),strategy:Mt.variadic})}}var Uo=function(){function e(t,r,n,o){var i=this;if(r===void 0&&(r=e.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(a){var s=i.formatToParts(a);if(s.length===1)return s[0].value;var c=s.reduce(function(h,l){return!h.length||l.type!==M.literal||typeof h[h.length-1]!="string"?h.push(l.value):h[h.length-1]+=l.value,h},[]);return c.length<=1?c[0]||"":c},this.formatToParts=function(a){return at(i.ast,i.locales,i.formatters,i.formats,a,void 0,i.message)},this.resolvedOptions=function(){return{locale:Intl.NumberFormat.supportedLocalesOf(i.locales)[0]}},this.getAst=function(){return i.ast},typeof t=="string"){if(this.message=t,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");this.ast=e.__parse(t,{ignoreTag:o?.ignoreTag})}else this.ast=t;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=is(e.formats,n),this.locales=r,this.formatters=o&&o.formatters||as(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.__parse=Ro,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}();var Do=Uo;var ss=/[0-9\-+#]/,cs=/[^\d\-+#]/g;function Go(e){return e.search(ss)}function ls(e="#.##"){let t={},r=e.length,n=Go(e);t.prefix=n>0?e.substring(0,n):"";let o=Go(e.split("").reverse().join("")),i=r-o,a=e.substring(i,i+1),s=i+(a==="."||a===","?1:0);t.suffix=o>0?e.substring(s,r):"",t.mask=e.substring(n,s),t.maskHasNegativeSign=t.mask.charAt(0)==="-",t.maskHasPositiveSign=t.mask.charAt(0)==="+";let c=t.mask.match(cs);return t.decimal=c&&c[c.length-1]||".",t.separator=c&&c[1]&&c[0]||",",c=t.mask.split(t.decimal),t.integer=c[0],t.fraction=c[1],t}function hs(e,t,r){let n=!1,o={value:e};e<0&&(n=!0,o.value=-o.value),o.sign=n?"-":"",o.value=Number(o.value).toFixed(t.fraction&&t.fraction.length),o.value=Number(o.value).toString();let i=t.fraction&&t.fraction.lastIndexOf("0"),[a="0",s=""]=o.value.split(".");return(!s||s&&s.length<=i)&&(s=i<0?"":(+("0."+s)).toFixed(i+1).replace("0.","")),o.integer=a,o.fraction=s,ds(o,t),(o.result==="0"||o.result==="")&&(n=!1,o.sign=""),!n&&t.maskHasPositiveSign?o.sign="+":n&&t.maskHasPositiveSign?o.sign="-":n&&(o.sign=r&&r.enforceMaskSign&&!t.maskHasNegativeSign?"":"-"),o}function ds(e,t){e.result="";let r=t.integer.split(t.separator),n=r.join(""),o=n&&n.indexOf("0");if(o>-1)for(;e.integer.length<n.length-o;)e.integer="0"+e.integer;else Number(e.integer)===0&&(e.integer="");let i=r[1]&&r[r.length-1].length;if(i){let a=e.integer.length,s=a%i;for(let c=0;c<a;c++)e.result+=e.integer.charAt(c),!((c-s+1)%i)&&c<a-i&&(e.result+=t.separator)}else e.result=e.integer;return e.result+=t.fraction&&e.fraction?t.decimal+e.fraction:"",e}function us(e,t,r={}){if(!e||isNaN(Number(t)))return t;let n=ls(e),o=hs(t,n,r);return n.prefix+o.sign+o.result+n.suffix}var zo=us;var Fo=".",ps=",",Ho=/^\s+/,Vo=/\s+$/,jo="&nbsp;",st={MONTH:"MONTH",YEAR:"YEAR"},ms={[O.ANNUAL]:12,[O.MONTHLY]:1,[O.THREE_YEARS]:36,[O.TWO_YEARS]:24},fs={CHF:e=>Math.round(e*20)/20},Vr=(e,t)=>({accept:e,round:t}),gs=[Vr(({divisor:e,price:t})=>t%e==0,({divisor:e,price:t})=>t/e),Vr(({usePrecision:e})=>e,({divisor:e,price:t})=>Math.ceil(Math.floor(t*1e4/e)/100)/100),Vr(()=>!0,({divisor:e,price:t})=>Math.ceil(Math.floor(t*100/e)/100))],Br={[$.YEAR]:{[O.MONTHLY]:st.MONTH,[O.ANNUAL]:st.YEAR},[$.MONTH]:{[O.MONTHLY]:st.MONTH}},vs=(e,t)=>e.indexOf(`'${t}'`)===0,xs=(e,t=!0)=>{let r=e.replace(/'.*?'/,"").trim(),n=Wo(r);return!!n?t||(r=r.replace(/[,\.]0+/,n)):r=r.replace(/\s?(#.*0)(?!\s)?/,"$&"+bs(e)),r},ys=e=>{let t=Es(e),r=vs(e,t),n=e.replace(/'.*?'/,""),o=Ho.test(n)||Vo.test(n);return{currencySymbol:t,isCurrencyFirst:r,hasCurrencySpace:o}},Bo=e=>e.replace(Ho,jo).replace(Vo,jo),bs=e=>e.match(/#(.?)#/)?.[1]===Fo?ps:Fo,Es=e=>e.match(/'(.*?)'/)?.[1]??"",Wo=e=>e.match(/0(.?)0/)?.[1]??"";function Ut({formatString:e,price:t,usePrecision:r,isIndianPrice:n=!1},o,i=a=>a){let{currencySymbol:a,isCurrencyFirst:s,hasCurrencySpace:c}=ys(e),h=r?Wo(e):"",l=xs(e,r),u=r?2:0,d=i(t,{currencySymbol:a}),p=n?d.toLocaleString("hi-IN",{minimumFractionDigits:u,maximumFractionDigits:u}):zo(l,d),f=r?p.lastIndexOf(h):p.length,g=p.substring(0,f),y=p.substring(f+1);return{accessiblePrice:e.replace(/'.*?'/,"SYMBOL").replace(/#.*0/,p).replace(/SYMBOL/,a),currencySymbol:a,decimals:y,decimalsDelimiter:h,hasCurrencySpace:c,integer:g,isCurrencyFirst:s,recurrenceTerm:o}}var qo=e=>{let{commitment:t,term:r,usePrecision:n}=e,o=ms[r]??1;return Ut(e,o>1?st.MONTH:Br[t]?.[r],(i,{currencySymbol:a})=>{let s={divisor:o,price:i,usePrecision:n},{round:c}=gs.find(({accept:l})=>l(s));if(!c)throw new Error(`Missing rounding rule for: ${JSON.stringify(s)}`);return(fs[a]??(l=>l))(c(s))})},Xo=({commitment:e,term:t,...r})=>Ut(r,Br[e]?.[t]),Yo=e=>{let{commitment:t,term:r}=e;return t===$.YEAR&&r===O.MONTHLY?Ut(e,st.YEAR,n=>n*12):Ut(e,Br[t]?.[r])};var ws={recurrenceLabel:"{recurrenceTerm, select, MONTH {/mo} YEAR {/yr} other {}}",recurrenceAriaLabel:"{recurrenceTerm, select, MONTH {per month} YEAR {per year} other {}}",perUnitLabel:"{perUnit, select, LICENSE {per license} other {}}",perUnitAriaLabel:"{perUnit, select, LICENSE {per license} other {}}",freeLabel:"Free",freeAriaLabel:"Free",taxExclusiveLabel:"{taxTerm, select, GST {excl. GST} VAT {excl. VAT} TAX {excl. tax} IVA {excl. IVA} SST {excl. SST} KDV {excl. KDV} other {}}",taxInclusiveLabel:"{taxTerm, select, GST {incl. GST} VAT {incl. VAT} TAX {incl. tax} IVA {incl. IVA} SST {incl. SST} KDV {incl. KDV} other {}}",alternativePriceAriaLabel:"Alternatively at {alternativePrice}",strikethroughAriaLabel:"Regularly at {strikethroughPrice}"},_s=ho("ConsonantTemplates/price"),Ss=/<.+?>/g,V={container:"price",containerOptical:"price-optical",containerStrikethrough:"price-strikethrough",containerAnnual:"price-annual",disabled:"disabled",currencySpace:"price-currency-space",currencySymbol:"price-currency-symbol",decimals:"price-decimals",decimalsDelimiter:"price-decimals-delimiter",integer:"price-integer",recurrence:"price-recurrence",taxInclusivity:"price-tax-inclusivity",unitType:"price-unit-type"},Te={perUnitLabel:"perUnitLabel",perUnitAriaLabel:"perUnitAriaLabel",recurrenceLabel:"recurrenceLabel",recurrenceAriaLabel:"recurrenceAriaLabel",taxExclusiveLabel:"taxExclusiveLabel",taxInclusiveLabel:"taxInclusiveLabel",strikethroughAriaLabel:"strikethroughAriaLabel"},As="TAX_EXCLUSIVE",Ts=e=>co(e)?Object.entries(e).filter(([,t])=>ze(t)||Tt(t)||t===!0).reduce((t,[r,n])=>t+` ${r}${n===!0?"":'="'+ao(n)+'"'}`,""):"",Q=(e,t,r,n=!1)=>`<span class="${e}${t?"":" "+V.disabled}"${Ts(r)}>${n?Bo(t):t??""}</span>`;function Ps(e,{accessibleLabel:t,currencySymbol:r,decimals:n,decimalsDelimiter:o,hasCurrencySpace:i,integer:a,isCurrencyFirst:s,recurrenceLabel:c,perUnitLabel:h,taxInclusivityLabel:l},u={}){let d=Q(V.currencySymbol,r),p=Q(V.currencySpace,i?"&nbsp;":""),f="";return s&&(f+=d+p),f+=Q(V.integer,a),f+=Q(V.decimalsDelimiter,o),f+=Q(V.decimals,n),s||(f+=p+d),f+=Q(V.recurrence,c,null,!0),f+=Q(V.unitType,h,null,!0),f+=Q(V.taxInclusivity,l,!0),Q(e,f,{...u,"aria-label":t})}var Pe=({displayOptical:e=!1,displayStrikethrough:t=!1,displayAnnual:r=!1}={})=>({country:n,displayFormatted:o=!0,displayRecurrence:i=!0,displayPerUnit:a=!1,displayTax:s=!1,language:c,literals:h={}}={},{commitment:l,formatString:u,price:d,priceWithoutDiscount:p,taxDisplay:f,taxTerm:g,term:y,usePrecision:N}={},S={})=>{Object.entries({country:n,formatString:u,language:c,price:d}).forEach(([ae,mr])=>{if(mr==null)throw new Error(`Argument "${ae}" is missing`)});let b={...ws,...h},L=`${c.toLowerCase()}-${n.toUpperCase()}`;function A(ae,mr){let fr=b[ae];if(fr==null)return"";try{return new Do(fr.replace(Ss,""),L).format(mr)}catch{return _s.error("Failed to format literal:",fr),""}}let U=t&&p?p:d,j=e?qo:Xo;r&&(j=Yo);let{accessiblePrice:R,recurrenceTerm:B,...oe}=j({commitment:l,formatString:u,term:y,price:e?d:U,usePrecision:N,isIndianPrice:n==="IN"}),Z=R,Ee="";if(_(i)&&B){let ae=A(Te.recurrenceAriaLabel,{recurrenceTerm:B});ae&&(Z+=" "+ae),Ee=A(Te.recurrenceLabel,{recurrenceTerm:B})}let we="";if(_(a)){we=A(Te.perUnitLabel,{perUnit:"LICENSE"});let ae=A(Te.perUnitAriaLabel,{perUnit:"LICENSE"});ae&&(Z+=" "+ae)}let ie="";_(s)&&g&&(ie=A(f===As?Te.taxExclusiveLabel:Te.taxInclusiveLabel,{taxTerm:g}),ie&&(Z+=" "+ie)),t&&(Z=A(Te.strikethroughAriaLabel,{strikethroughPrice:Z}));let J=V.container;if(e&&(J+=" "+V.containerOptical),t&&(J+=" "+V.containerStrikethrough),r&&(J+=" "+V.containerAnnual),_(o))return Ps(J,{...oe,accessibleLabel:Z,recurrenceLabel:Ee,perUnitLabel:we,taxInclusivityLabel:ie},S);let{currencySymbol:Ue,decimals:xt,decimalsDelimiter:yt,hasCurrencySpace:Je,integer:pr,isCurrencyFirst:oa}=oe,De=[pr,yt,xt];oa?(De.unshift(Je?"\xA0":""),De.unshift(Ue)):(De.push(Je?"\xA0":""),De.push(Ue)),De.push(Ee,we,ie);let ia=De.join("");return Q(J,ia,S)},Zo=()=>(e,t,r)=>{let o=(e.displayOldPrice===void 0||_(e.displayOldPrice))&&t.priceWithoutDiscount&&t.priceWithoutDiscount!=t.price;return`${Pe()(e,t,r)}${o?"&nbsp;"+Pe({displayStrikethrough:!0})(e,t,r):""}`};var Wr=Pe(),qr=Zo(),Xr=Pe({displayOptical:!0}),Yr=Pe({displayStrikethrough:!0}),Zr=Pe({displayAnnual:!0});var Cs=(e,t)=>{if(!(!je(e)||!je(t)))return Math.floor((t-e)/t*100)},Jo=()=>(e,t,r)=>{let{price:n,priceWithoutDiscount:o}=t,i=Cs(n,o);return i===void 0?'<span class="no-discount"></span>':`<span class="discount">${i}%</span>`};var Jr=Jo();var Qr="ABM",Kr="PUF",en="M2M",tn="PERPETUAL",Qo="P3Y",Os="TAX_INCLUSIVE_DETAILS",Ls="TAX_EXCLUSIVE",Ko={ABM:Qr,PUF:Kr,M2M:en,PERPETUAL:tn,P3Y:Qo},Ah={[Qr]:{commitment:$.YEAR,term:O.MONTHLY},[Kr]:{commitment:$.YEAR,term:O.ANNUAL},[en]:{commitment:$.MONTH,term:O.MONTHLY},[tn]:{commitment:$.PERPETUAL,term:void 0},[Qo]:{commitment:$.THREE_MONTHS,term:O.P3Y}},ei="Value is not an offer",rn=e=>{if(typeof e!="object")return ei;let{commitment:t,term:r}=e,n=Ns(t,r);return{...e,planType:n}};var Ns=(e,t)=>{if(e===void 0)return ei;if(e===""&&t==="")return"";let r="";return e===$.YEAR?t===O.MONTHLY?r=Qr:t===O.ANNUAL&&(r=Kr):e===$.MONTH?t===O.MONTHLY&&(r=en):e===$.PERPETUAL&&(r=tn),r};function nn(e){let{priceDetails:t}=e,{price:r,priceWithoutDiscount:n,priceWithoutTax:o,priceWithoutDiscountAndTax:i,taxDisplay:a}=t;if(a!==Os)return e;let s={...e,priceDetails:{...t,price:o??r,priceWithoutDiscount:i??n,taxDisplay:Ls}};return s.offerType==="TRIAL"&&s.priceDetails.price===0&&(s.priceDetails.price=s.priceDetails.priceWithoutDiscount),s}var{freeze:Ce}=Object,he=Ce({..._e}),de=Ce({...X}),K=Ce({...q}),ti=Ce({...$}),ct=Ce({...et}),ri=Ce({...Ko}),ni=Ce({...O});var dn={};sa(dn,{CLASS_NAME_FAILED:()=>Dt,CLASS_NAME_PENDING:()=>Gt,CLASS_NAME_RESOLVED:()=>zt,ERROR_MESSAGE_BAD_REQUEST:()=>on,ERROR_MESSAGE_MISSING_LITERALS_URL:()=>sn,ERROR_MESSAGE_OFFER_NOT_FOUND:()=>an,EVENT_TYPE_ERROR:()=>Rs,EVENT_TYPE_FAILED:()=>Ft,EVENT_TYPE_PENDING:()=>jt,EVENT_TYPE_READY:()=>Oe,EVENT_TYPE_RESOLVED:()=>Ht,LOG_NAMESPACE:()=>cn,PARAM_AOS_API_KEY:()=>$s,PARAM_ENV:()=>ln,PARAM_LANDSCAPE:()=>hn,PARAM_WCS_API_KEY:()=>ks,STATE_FAILED:()=>ee,STATE_PENDING:()=>te,STATE_RESOLVED:()=>re,TAG_NAME_SERVICE:()=>xe});var Dt="placeholder-failed",Gt="placeholder-pending",zt="placeholder-resolved",on="Bad WCS request",an="Commerce offer not found",sn="Literals URL not provided",Rs="wcms:commerce:error",Ft="wcms:placeholder:failed",jt="wcms:placeholder:pending",Oe="wcms:commerce:ready",Ht="wcms:placeholder:resolved",cn="wcms/commerce",ln="commerce.env",hn="commerce.landscape",$s="commerce.aosKey",ks="commerce.wcsKey",ee="failed",te="pending",re="resolved",xe="wcms-commerce";var un={clientId:"merch-at-scale",delimiter:"\xB6",ignoredProperties:["analytics","literals"],serializableTypes:["Array","Object"],sampleRate:30,tags:"consumer=milo/commerce"},oi=new Set,Is=e=>e instanceof Error||typeof e.originatingRequest=="string";function ii(e){if(e==null)return;let t=typeof e;if(t==="function"){let{name:r}=e;return r?`${t} ${r}`:t}if(t==="object"){if(e instanceof Error)return e.message;if(typeof e.originatingRequest=="string"){let{message:n,originatingRequest:o,status:i}=e;return[n,i,o].filter(a=>a).join(" ")}let r=e[Symbol.toStringTag]??Object.getPrototypeOf(e).constructor.name;if(!un.serializableTypes.includes(r))return r}return e}function Ms(e,t){if(!un.ignoredProperties.includes(e))return ii(t)}var pn={append(e){let{delimiter:t,sampleRate:r,tags:n,clientId:o}=un,{message:i,params:a}=e,s=[],c=i,h=[];a.forEach(d=>{d!=null&&(Is(d)?s:h).push(d)}),s.length&&(c+=" ",c+=s.map(ii).join(" "));let{pathname:l,search:u}=window.location;c+=`${t}page=`,c+=l+u,h.length&&(c+=`${t}facts=`,c+=JSON.stringify(h,Ms)),oi.has(c)||(oi.add(c),window.lana.log(c,{sampleRate:r,tags:n,clientId:o}))}};var w=Object.freeze({checkoutClientId:"adobe_com",checkoutWorkflow:he.V3,checkoutWorkflowStep:de.EMAIL,country:"US",displayOldPrice:!0,displayPerUnit:!1,displayRecurrence:!0,displayTax:!1,env:K.PRODUCTION,forceTaxExclusive:!1,language:"en",entitlement:!1,extraOptions:{},modal:!1,promotionCode:"",quantity:1,wcsApiKey:"wcms-commerce-ims-ro-user-milo",wcsBufferDelay:1,wcsEnv:ct.PRODUCTION,landscape:H.PUBLISHED,wcsBufferLimit:1});function ai(e,{once:t=!1}={}){let r=null;function n(){let o=document.querySelector(xe);o!==r&&(r=o,o&&e(o))}return document.addEventListener(Oe,n,{once:t}),ye(n),()=>document.removeEventListener(Oe,n)}function lt(e,{country:t,forceTaxExclusive:r,perpetual:n}){let o;if(e.length<2)o=e;else{let i=t==="GB"||n?"EN":"MULT",[a,s]=e;o=[a.language===i?a:s]}return r&&(o=o.map(nn)),o}var ye=e=>window.setTimeout(e);function Be(e,t=1){if(e==null)return[t];let r=(Array.isArray(e)?e:String(e).split(",")).map(Ve).filter(je);return r.length||(r=[t]),r}function Vt(e){return e==null?[]:(Array.isArray(e)?e:String(e).split(",")).filter(Cr)}function z(){return window.customElements.get(xe)?.instance}var Us="en_US",m={ar:"AR_es",be_en:"BE_en",be_fr:"BE_fr",be_nl:"BE_nl",br:"BR_pt",ca:"CA_en",ch_de:"CH_de",ch_fr:"CH_fr",ch_it:"CH_it",cl:"CL_es",co:"CO_es",la:"DO_es",mx:"MX_es",pe:"PE_es",africa:"ZA_en",dk:"DK_da",de:"DE_de",ee:"EE_et",eg_ar:"EG_ar",eg_en:"EG_en",es:"ES_es",fr:"FR_fr",gr_el:"GR_el",gr_en:"GR_en",ie:"IE_en",il_he:"IL_iw",it:"IT_it",lv:"LV_lv",lt:"LT_lt",lu_de:"LU_de",lu_en:"LU_en",lu_fr:"LU_fr",my_en:"MY_en",my_ms:"MY_ms",hu:"HU_hu",mt:"MT_en",mena_en:"DZ_en",mena_ar:"DZ_ar",nl:"NL_nl",no:"NO_nb",pl:"PL_pl",pt:"PT_pt",ro:"RO_ro",si:"SI_sl",sk:"SK_sk",fi:"FI_fi",se:"SE_sv",tr:"TR_tr",uk:"GB_en",at:"AT_de",cz:"CZ_cs",bg:"BG_bg",ru:"RU_ru",ua:"UA_uk",au:"AU_en",in_en:"IN_en",in_hi:"IN_hi",id_en:"ID_en",id_id:"ID_in",nz:"NZ_en",sa_ar:"SA_ar",sa_en:"SA_en",sg:"SG_en",cn:"CN_zh-Hans",tw:"TW_zh-Hant",hk_zh:"HK_zh-hant",jp:"JP_ja",kr:"KR_ko",za:"ZA_en",ng:"NG_en",cr:"CR_es",ec:"EC_es",pr:"US_es",gt:"GT_es",cis_en:"AZ_en",cis_ru:"AZ_ru",sea:"SG_en",th_en:"TH_en",th_th:"TH_th"},ue=Object.freeze({LOCAL:"local",PROD:"prod",STAGE:"stage"});function Ds({locale:e={}}={}){if(!e.prefix)return{country:w.country,language:w.language,locale:Us};let t=e.prefix.replace("/","")??"",[r=w.country,n=w.language]=(m[t]??t).split("_",2);return r=r.toUpperCase(),n=n.toLowerCase(),{country:r,language:n,locale:`${n}_${r}`}}function si(e={}){let{commerce:t={},locale:r=void 0}=e,o=(e.env?.name===ue.PROD?ue.PROD:le(C(ln,t,{metadata:!1}),ue,ue.PROD))===ue.STAGE?K.STAGE:K.PRODUCTION,i=C("checkoutClientId",t)??w.checkoutClientId,a=le(C("checkoutWorkflow",t),he,w.checkoutWorkflow),s=de.CHECKOUT;a===he.V3&&(s=le(C("checkoutWorkflowStep",t),de,w.checkoutWorkflowStep));let c=_(C("displayOldPrice",t),w.displayOldPrice),h=_(C("displayPerUnit",t),w.displayPerUnit),l=_(C("displayRecurrence",t),w.displayRecurrence),u=_(C("displayTax",t),w.displayTax),d=_(C("entitlement",t),w.entitlement),p=_(C("modal",t),w.modal),f=_(C("forceTaxExclusive",t),w.forceTaxExclusive),g=C("promotionCode",t)??w.promotionCode,y=Be(C("quantity",t)),N=C("wcsApiKey",t)??w.wcsApiKey,S=e.env?.name===ue.PROD?H.PUBLISHED:le(C(hn,t),H,w.landscape),b=Ve(C("wcsBufferDelay",t),w.wcsBufferDelay),L=Ve(C("wcsBufferLimit",t),w.wcsBufferLimit);return{...Ds({locale:r}),displayOldPrice:c,checkoutClientId:i,checkoutWorkflow:a,checkoutWorkflowStep:s,displayPerUnit:h,displayRecurrence:l,displayTax:u,entitlement:d,extraOptions:w.extraOptions,modal:p,env:o,forceTaxExclusive:f,priceLiteralsURL:t.priceLiteralsURL,priceLiteralsPromise:t.priceLiteralsPromise,promotionCode:g,quantity:y,wcsApiKey:N,wcsBufferDelay:b,wcsBufferLimit:L,wcsEnv:o===K.STAGE?ct.STAGE:ct.PRODUCTION,landscape:S}}var li="debug",Gs="error",zs="info",Fs="warn",js=Date.now(),mn=new Set,fn=new Set,ci=new Map,ht=Object.freeze({DEBUG:li,ERROR:Gs,INFO:zs,WARN:Fs}),hi={append({level:e,message:t,params:r,timestamp:n,source:o}){console[e](`${n}ms [${o}] %c${t}`,"font-weight: bold;",...r)}},di={filter:({level:e})=>e!==li},Hs={filter:()=>!1};function Vs(e,t,r,n,o){return{level:e,message:t,namespace:r,get params(){if(n.length===1){let[i]=n;ve(i)&&(n=i(),Array.isArray(n)||(n=[n]))}return n},source:o,timestamp:Date.now()-js}}function Bs(e){[...fn].every(t=>t(e))&&mn.forEach(t=>t(e))}function ui(e){let t=(ci.get(e)??0)+1;ci.set(e,t);let r=`${e} #${t}`,n=i=>(a,...s)=>Bs(Vs(i,a,e,s,r)),o=Object.seal({id:r,namespace:e,module(i){return ui(`${o.namespace}/${i}`)},debug:n(ht.DEBUG),error:n(ht.ERROR),info:n(ht.INFO),warn:n(ht.WARN)});return o}function Bt(...e){e.forEach(t=>{let{append:r,filter:n}=t;ve(n)?fn.add(n):ve(r)&&mn.add(r)})}function Ws(e={}){let{name:t}=e,r=_(C("commerce.debug",{search:!0,storage:!0}),t===ue.LOCAL);return Bt(r?hi:di),t===ue.PROD&&Bt(pn),D}function qs(){mn.clear(),fn.clear()}var D={...ui(cn),Level:ht,Plugins:{consoleAppender:hi,debugFilter:di,quietFilter:Hs,lanaAppender:pn},init:Ws,reset:qs,use:Bt};var Xs={CLASS_NAME_FAILED:Dt,CLASS_NAME_PENDING:Gt,CLASS_NAME_RESOLVED:zt,EVENT_TYPE_FAILED:Ft,EVENT_TYPE_PENDING:jt,EVENT_TYPE_RESOLVED:Ht,STATE_FAILED:ee,STATE_PENDING:te,STATE_RESOLVED:re},Ys={[ee]:Dt,[te]:Gt,[re]:zt},Zs={[ee]:Ft,[te]:jt,[re]:Ht},Xt=new WeakMap;function F(e){if(!Xt.has(e)){let t=D.module(e.constructor.is);Xt.set(e,{changes:new Map,connected:!1,dispose:Fe,error:void 0,log:t,options:void 0,promises:[],state:te,timer:null,value:void 0,version:0})}return Xt.get(e)}function Wt(e){let t=F(e),{error:r,promises:n,state:o}=t;(o===re||o===ee)&&(t.promises=[],o===re?n.forEach(({resolve:i})=>i(e)):o===ee&&n.forEach(({reject:i})=>i(r))),e.dispatchEvent(new CustomEvent(Zs[o],{bubbles:!0}))}function qt(e){let t=Xt.get(e);[ee,te,re].forEach(r=>{e.classList.toggle(Ys[r],r===t.state)})}var Js={get error(){return F(this).error},get log(){return F(this).log},get options(){return F(this).options},get state(){return F(this).state},get value(){return F(this).value},attributeChangedCallback(e,t,r){F(this).changes.set(e,r),this.requestUpdate()},connectedCallback(){F(this).dispose=ai(()=>this.requestUpdate(!0))},disconnectedCallback(){let e=F(this);e.connected&&(e.connected=!1,e.log.debug("Disconnected:",{element:this})),e.dispose(),e.dispose=Fe},onceSettled(){let{error:e,promises:t,state:r}=F(this);return re===r?Promise.resolve(this):ee===r?Promise.reject(e):new Promise((n,o)=>{t.push({resolve:n,reject:o})})},toggleResolved(e,t,r){let n=F(this);return e!==n.version?!1:(r!==void 0&&(n.options=r),n.state=re,n.value=t,qt(this),this.log.debug("Resolved:",{element:this,value:t}),ye(()=>Wt(this)),!0)},toggleFailed(e,t,r){let n=F(this);return e!==n.version?!1:(r!==void 0&&(n.options=r),n.error=t,n.state=ee,qt(this),n.log.error("Failed:",{element:this,error:t}),ye(()=>Wt(this)),!0)},togglePending(e){let t=F(this);return t.version++,e&&(t.options=e),t.state=te,qt(this),ye(()=>Wt(this)),t.version},requestUpdate(e=!1){if(!this.isConnected||!z())return;let t=F(this);if(t.timer)return;let{error:r,options:n,state:o,value:i,version:a}=t;t.state=te,t.timer=ye(async()=>{t.timer=null;let s=null;if(t.changes.size&&(s=Object.fromEntries(t.changes.entries()),t.changes.clear()),t.connected?t.log.debug("Updated:",{element:this,changes:s}):(t.connected=!0,t.log.debug("Connected:",{element:this,changes:s})),s||e)try{await this.render?.()===!1&&t.state===te&&t.version===a&&(t.state=o,t.error=r,t.value=i,qt(this),Wt(this))}catch(c){this.toggleFailed(t.version,c,n)}})}};function pi(e={}){return Object.entries(e).forEach(([t,r])=>{(r==null||r===""||r?.length===0)&&delete e[t]}),e}function Yt(e,t={}){let{tag:r,is:n}=e,o=document.createElement(r,{is:n});return o.setAttribute("is",n),Object.assign(o.dataset,pi(t)),o}function Zt(e){let{tag:t,is:r,prototype:n}=e,o=window.customElements.get(r);return o||(Object.defineProperties(n,Object.getOwnPropertyDescriptors(Js)),o=Object.defineProperties(e,Object.getOwnPropertyDescriptors(Xs)),window.customElements.define(r,o,{extends:t})),o}function Jt(e,t=document.body){return Array.from(t?.querySelectorAll(`${e.tag}[is="${e.is}"]`)??[])}function Qt(e,t={}){return e instanceof HTMLElement?(Object.assign(e.dataset,pi(t)),e):null}var Qs="download",Ks="upgrade",Le,We=class We extends HTMLAnchorElement{constructor(){super();bt(this,Le);this.addEventListener("click",this.clickHandler)}static get observedAttributes(){return["data-checkout-workflow","data-checkout-workflow-step","data-extra-options","data-ims-country","data-perpetual","data-promotion-code","data-quantity","data-template","data-wcs-osi","data-entitlement","data-upgrade","data-modal"]}static createCheckoutLink(r={},n=""){let o=z();if(!o)return null;let{checkoutMarketSegment:i,checkoutWorkflow:a,checkoutWorkflowStep:s,entitlement:c,upgrade:h,modal:l,perpetual:u,promotionCode:d,quantity:p,wcsOsi:f,extraOptions:g}=o.collectCheckoutOptions(r),y=Yt(We,{checkoutMarketSegment:i,checkoutWorkflow:a,checkoutWorkflowStep:s,entitlement:c,upgrade:h,modal:l,perpetual:u,promotionCode:d,quantity:p,wcsOsi:f,extraOptions:g});return n&&(y.innerHTML=`<span>${n}</span>`),y}static getCheckoutLinks(r){return Jt(We,r)}get isCheckoutLink(){return!0}get placeholder(){return this}clickHandler(r){var n;(n=ce(this,Le))==null||n.call(this,r)}async render(r={}){if(!this.isConnected)return!1;let n=z();if(!n)return!1;this.dataset.imsCountry||n.imsCountryPromise.then(l=>{l&&(this.dataset.imsCountry=l)},Fe);let o=n.collectCheckoutOptions(r,this.placeholder);if(!o.wcsOsi.length)return!1;let i;try{i=JSON.parse(o.extraOptions??"{}")}catch(l){this.placeholder.log.error("cannot parse exta checkout options",l)}let a=this.placeholder.togglePending(o);this.href="";let s=n.resolveOfferSelectors(o),c=await Promise.all(s);c=c.map(l=>lt(l,o));let h=await n.buildCheckoutAction(c.flat(),{...i,...o});return this.renderOffers(c.flat(),o,{},h,a)}renderOffers(r,n,o={},i=void 0,a=void 0){if(!this.isConnected)return!1;let s=z();if(!s)return!1;if(n={...JSON.parse(this.placeholder.dataset.extraOptions??"null"),...n,...o},a??(a=this.placeholder.togglePending(n)),ce(this,Le)&&Qe(this,Le,void 0),i){this.classList.remove(Qs,Ks),this.placeholder.toggleResolved(a,r,n);let{url:h,text:l,className:u,handler:d}=i;return h&&(this.href=h),l&&(this.firstElementChild.innerHTML=l),u&&this.classList.add(...u.split(" ")),d&&(this.setAttribute("href","#"),Qe(this,Le,d.bind(this))),!0}else if(r.length){if(this.placeholder.toggleResolved(a,r,n)){let h=s.buildCheckoutURL(r,n);return this.setAttribute("href",h),!0}}else{let h=new Error(`Not provided: ${n?.wcsOsi??"-"}`);if(this.placeholder.toggleFailed(a,h,n))return this.setAttribute("href","#"),!0}return!1}updateOptions(r={}){let n=z();if(!n)return!1;let{checkoutMarketSegment:o,checkoutWorkflow:i,checkoutWorkflowStep:a,entitlement:s,upgrade:c,modal:h,perpetual:l,promotionCode:u,quantity:d,wcsOsi:p}=n.collectCheckoutOptions(r);return Qt(this,{checkoutMarketSegment:o,checkoutWorkflow:i,checkoutWorkflowStep:a,entitlement:s,upgrade:c,modal:h,perpetual:l,promotionCode:u,quantity:d,wcsOsi:p}),!0}};Le=new WeakMap,I(We,"is","checkout-link"),I(We,"tag","a");var gn=We,vn=Zt(gn);var mi=[m.uk,m.au,m.fr,m.at,m.be_en,m.be_fr,m.be_nl,m.bg,m.ch_de,m.ch_fr,m.ch_it,m.cz,m.de,m.dk,m.ee,m.eg_ar,m.eg_en,m.es,m.fi,m.fr,m.gr_el,m.gr_en,m.hu,m.ie,m.it,m.lu_de,m.lu_en,m.lu_fr,m.nl,m.no,m.pl,m.pt,m.ro,m.se,m.si,m.sk,m.tr,m.ua,m.id_en,m.id_id,m.in_en,m.in_hi,m.jp,m.my_en,m.my_ms,m.nz,m.th_en,m.th_th],ec={INDIVIDUAL_COM:[m.za,m.lt,m.lv,m.ng,m.sa_ar,m.sa_en,m.za,m.sg,m.kr],TEAM_COM:[m.za,m.lt,m.lv,m.ng,m.za,m.co,m.kr],INDIVIDUAL_EDU:[m.lt,m.lv,m.sa_en,m.sea],TEAM_EDU:[m.sea,m.kr]},qe=class qe extends HTMLSpanElement{static get observedAttributes(){return["data-display-old-price","data-display-per-unit","data-display-recurrence","data-display-tax","data-perpetual","data-promotion-code","data-tax-exclusive","data-template","data-wcs-osi"]}static createInlinePrice(t){let r=z();if(!r)return null;let{displayOldPrice:n,displayPerUnit:o,displayRecurrence:i,displayTax:a,forceTaxExclusive:s,perpetual:c,promotionCode:h,quantity:l,template:u,wcsOsi:d}=r.collectPriceOptions(t);return Yt(qe,{displayOldPrice:n,displayPerUnit:o,displayRecurrence:i,displayTax:a,forceTaxExclusive:s,perpetual:c,promotionCode:h,quantity:l,template:u,wcsOsi:d})}static getInlinePrices(t){return Jt(qe,t)}get isInlinePrice(){return!0}get placeholder(){return this}resolveDisplayTaxForGeoAndSegment(t,r,n,o){let i=`${t}_${r}`;if(mi.includes(t)||mi.includes(i))return!0;let a=ec[`${n}_${o}`];return a?!!(a.includes(t)||a.includes(i)):!1}async resolveDisplayTax(t,r){let[n]=await t.resolveOfferSelectors(r),o=lt(await n,r);if(o?.length){let{country:i,language:a}=r,s=o[0],[c=""]=s.marketSegments;return this.resolveDisplayTaxForGeoAndSegment(i,a,s.customerSegment,c)}}async render(t={}){if(!this.isConnected)return!1;let r=z();if(!r)return!1;let n=r.collectPriceOptions(t,this.placeholder);if(!n.wcsOsi.length)return!1;this.placeholder.dataset.displayTax||(n.displayTax=await this.resolveDisplayTax(r,n)||!1);let o=this.placeholder.togglePending(n);this.innerHTML="";let[i]=r.resolveOfferSelectors(n);return this.renderOffers(lt(await i,n),n,o)}renderOffers(t,r={},n=void 0){if(!this.isConnected)return;let o=z();if(!o)return!1;let i=o.collectPriceOptions({...this.dataset,...r});if(n??(n=this.placeholder.togglePending(i)),t.length){if(this.placeholder.toggleResolved(n,t,i))return this.innerHTML=o.buildPriceHTML(t,i),!0}else{let a=new Error(`Not provided: ${i?.wcsOsi??"-"}`);if(this.placeholder.toggleFailed(n,a,i))return this.innerHTML="",!0}return!1}updateOptions(t){let r=z();if(!r)return!1;let{displayOldPrice:n,displayPerUnit:o,displayRecurrence:i,displayTax:a,forceTaxExclusive:s,perpetual:c,promotionCode:h,quantity:l,template:u,wcsOsi:d}=r.collectPriceOptions(t);return Qt(this,{displayOldPrice:n,displayPerUnit:o,displayRecurrence:i,displayTax:a,forceTaxExclusive:s,perpetual:c,promotionCode:h,quantity:l,template:u,wcsOsi:d}),!0}};I(qe,"is","inline-price"),I(qe,"tag","span");var xn=qe,yn=Zt(xn);function fi({providers:e,settings:t},r){let n=D.module("checkout");function o(h,l){let{checkoutClientId:u,checkoutWorkflow:d,checkoutWorkflowStep:p,country:f,language:g,promotionCode:y,quantity:N}=t,{checkoutMarketSegment:S,checkoutWorkflow:b=d,checkoutWorkflowStep:L=p,imsCountry:A,country:U=A??f,language:j=g,quantity:R=N,entitlement:B,upgrade:oe,modal:Z,perpetual:Ee,promotionCode:we=y,wcsOsi:ie,extraOptions:J,...Ue}=Object.assign({},l?.dataset??{},h??{}),xt=le(b,he,w.checkoutWorkflow),yt=de.CHECKOUT;xt===he.V3&&(yt=le(L,de,w.checkoutWorkflowStep));let Je=He({...Ue,extraOptions:J,checkoutClientId:u,checkoutMarketSegment:S,country:U,quantity:Be(R,w.quantity),checkoutWorkflow:xt,checkoutWorkflowStep:yt,language:j,entitlement:_(B),upgrade:_(oe),modal:_(Z),perpetual:_(Ee),promotionCode:tt(we).effectivePromoCode,wcsOsi:Vt(ie)});if(l)for(let pr of e.checkout)pr(l,Je);return Je}async function i(h,l){let u=z(),d=await r.getCheckoutAction?.(h,l,u.imsSignedInPromise);return d||null}function a(h,l){if(!Array.isArray(h)||!h.length||!l)return"";let{env:u,landscape:d}=t,{checkoutClientId:p,checkoutMarketSegment:f,checkoutWorkflow:g,checkoutWorkflowStep:y,country:N,promotionCode:S,quantity:b,...L}=o(l),A=window.frameElement?"if":"fp",U={checkoutPromoCode:S,clientId:p,context:A,country:N,env:u,items:[],marketSegment:f,workflowStep:y,landscape:d,...L};if(h.length===1){let[{offerId:j,offerType:R,productArrangementCode:B}]=h,{marketSegments:[oe]}=h[0];Object.assign(U,{marketSegment:oe,offerType:R,productArrangementCode:B}),U.items.push(b[0]===1?{id:j}:{id:j,quantity:b[0]})}else U.items.push(...h.map(({offerId:j},R)=>({id:j,quantity:b[R]??w.quantity})));return Er(g,U)}let{createCheckoutLink:s,getCheckoutLinks:c}=vn;return{CheckoutLink:vn,CheckoutWorkflow:he,CheckoutWorkflowStep:de,buildCheckoutAction:i,buildCheckoutURL:a,collectCheckoutOptions:o,createCheckoutLink:s,getCheckoutLinks:c}}function tc({interval:e=200,maxAttempts:t=25}={}){let r=D.module("ims");return new Promise(n=>{r.debug("Waing for IMS to be ready");let o=0;function i(){window.adobeIMS?.initialized?n():++o>t?(r.debug("Timeout"),n()):setTimeout(i,e)}i()})}function rc(e){return e.then(()=>window.adobeIMS.isSignedInUser())}function nc(e){let t=D.module("ims");return e.then(r=>r?window.adobeIMS.getProfile().then(({countryCode:n})=>(t.debug("Got user country:",n),n),n=>{t.error("Unable to get user country:",n)}):null)}function gi({}){let e=tc(),t=rc(e),r=nc(t);return{imsReadyPromise:e,imsSignedInPromise:t,imsCountryPromise:r}}function oc(e){if(!e.priceLiteralsURL)throw new Error(sn);return new Promise(t=>{window.fetch(e.priceLiteralsURL).then(r=>{r.json().then(({data:n})=>{t(n)})})})}async function vi(e){let r=await(e.priceLiteralsPromise||oc(e));if(Array.isArray(r)){let n=i=>r.find(a=>At(a.lang,i)),o=n(e.language)??n(w.language);if(o)return Object.freeze(o)}return{}}function xi({literals:e,providers:t,settings:r}){function n(s,c){let{country:h,displayOldPrice:l,displayPerUnit:u,displayRecurrence:d,displayTax:p,forceTaxExclusive:f,language:g,promotionCode:y,quantity:N}=r,{displayOldPrice:S=l,displayPerUnit:b=u,displayRecurrence:L=d,displayTax:A=p,forceTaxExclusive:U=f,country:j=h,language:R=g,perpetual:B,promotionCode:oe=y,quantity:Z=N,template:Ee,wcsOsi:we,...ie}=Object.assign({},c?.dataset??{},s??{}),J=He({...ie,country:j,displayOldPrice:_(S),displayPerUnit:_(b),displayRecurrence:_(L),displayTax:_(A),forceTaxExclusive:_(U),language:R,perpetual:_(B),promotionCode:tt(oe).effectivePromoCode,quantity:Be(Z,w.quantity),template:Ee,wcsOsi:Vt(we)});if(c)for(let Ue of t.price)Ue(c,J);return J}function o(s,c){if(!Array.isArray(s)||!s.length||!c)return"";let{template:h}=c,l;switch(h){case"discount":l=Jr;break;case"strikethrough":l=Yr;break;case"optical":l=Xr;break;case"annual":l=Zr;break;default:l=c.promotionCode?qr:Wr}let u=n(c);u.literals=Object.assign({},e.price,He(c.literals??{}));let[d]=s;return d={...d,...d.priceDetails},l(u,d)}let{createInlinePrice:i,getInlinePrices:a}=yn;return{InlinePrice:yn,buildPriceHTML:o,collectPriceOptions:n,createInlinePrice:i,getInlinePrices:a}}var ic={[K.PRODUCTION]:"https://wcs.adobe.com",[K.STAGE]:"https://wcs.stage.adobe.com"};function yi({settings:e}){let t=D.module("wcs"),{env:r,wcsApiKey:n}=e,o={apiKey:n,baseUrl:ic[r],fetch:window.fetch.bind(window)},i=St(o),a=new Map,s=new Map,c;async function h(d,p,f=!0){let g=an;try{t.debug("Fetching:",d),d.offerSelectorIds=d.offerSelectorIds.sort();let{data:y}=await i(d,{apiKey:n,environment:e.wcsEnv,landscape:r===K.STAGE?"ALL":e.landscape},({resolvedOffers:S})=>({offers:S.map(rn)}));t.debug("Fetched:",d,y);let{offers:N}=y??{};p.forEach(({resolve:S},b)=>{let L=N.filter(({offerSelectorIds:A})=>A.includes(b)).flat();L.length&&(p.delete(b),S(L))})}catch(y){y.status===404&&d.offerSelectorIds.length>1?(t.debug("Multi-osi 404, fallback to fetch-by-one strategy"),await Promise.allSettled(d.offerSelectorIds.map(N=>h({...d,offerSelectorIds:[N]},p,!1)))):(t.error("Failed:",d,y),g=on)}f&&p.size&&(t.debug("Missing:",{offerSelectorIds:[...p.keys()]}),p.forEach(y=>{y.reject(new Error(g))}))}function l(){clearTimeout(c);let d=[...s.values()];s.clear(),d.forEach(({options:p,promises:f})=>h(p,f))}function u({country:d,language:p,perpetual:f=!1,promotionCode:g="",wcsOsi:y=[]}){let N=`${p}_${d}`;d!=="GB"&&(p=f?"EN":"MULT");let S=[d,p,g].filter(b=>b).join("-").toLowerCase();return y.map(b=>{let L=`${b}-${S}`;if(!a.has(L)){let A=new Promise((U,j)=>{let R=s.get(S);if(!R){let B={country:d,locale:N,offerSelectorIds:[]};d!=="GB"&&(B.language=p),R={options:B,promises:new Map},s.set(S,R)}g&&(R.options.promotionCode=g),R.options.offerSelectorIds.push(b),R.promises.set(b,{resolve:U,reject:j}),R.options.offerSelectorIds.length>=e.wcsBufferLimit?l():(t.debug("Queued:",R.options),c||(c=setTimeout(l,e.wcsBufferDelay)))});a.set(L,A)}return a.get(L)})}return{WcsCommitment:ti,WcsPlanType:ri,WcsTerm:ni,resolveOfferSelectors:u}}var G=class extends HTMLElement{get isWcmsCommerce(){return!0}};I(G,"instance"),I(G,"promise",null);window.customElements.define(xe,G);async function ac(e,t){let r=D.init(e.env).module("service");r.debug("Activating:",e);let n={price:{}},o=Object.freeze(si(e));try{n.price=await vi(o)}catch(c){r.warn("Price literals were not fetched:",c)}let i={checkout:new Set,price:new Set},a=document.createElement(xe),s={literals:n,providers:i,settings:o};return G.instance=Object.defineProperties(a,Object.getOwnPropertyDescriptors({...fi(s,t),...gi(s),...xi(s),...yi(s),...dn,Log:D,get defaults(){return w},get literals(){return n},get log(){return D},get providers(){return{checkout(c){return i.checkout.add(c),()=>i.checkout.delete(c)},price(c){return i.price.add(c),()=>i.price.delete(c)}}},get settings(){return o}})),r.debug("Activated:",{literals:n,settings:o,element:a}),document.head.append(a),ye(()=>{let c=new CustomEvent(Oe,{bubbles:!0,cancelable:!1,detail:G.instance});G.instance.dispatchEvent(c)}),G.instance}function bi(){document.head.querySelector(xe)?.remove(),G.promise=null,D.reset()}function bn(e,t){if(ve(e)){let r=ve(t)?t():{};return r.force&&bi(),G.promise??(G.promise=ac(e(),r))}return G.promise?G.promise:new Promise(r=>{let n=o=>{r(o.detail)};document.head.addEventListener(Oe,n,{once:!0})})}var Lc=document.querySelector('meta[name="mas-locale"]').getAttribute("content")??"US_en",Tu=document.querySelector('meta[name="mas-lang"]')?.getAttribute("content"),Nc=()=>({env:{name:"stage"},commerce:{"commerce.env":"STAGE"},locale:{prefix:Lc}}),Rc=document.querySelector('meta[name="mas-features"]')?.getAttribute("content")?.split(",");bn(Nc);Rc.includes("merch-card")&&Promise.resolve().then(()=>(na(),Oc));
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
