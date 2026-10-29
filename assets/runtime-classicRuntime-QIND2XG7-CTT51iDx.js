import{s as qs,u as Ys,h as Le,a as Ks}from"./runtime-chunk-VTESKRFG-Dh4-KPLI.js";import{n as Zs}from"./runtime-chunk-CVUJ3GMH-z0EVCgfT.js";import{i as Js}from"./runtime-chunk-GFTBNL2W-Dz-r1c36.js";import{$ as _t,Q as yi,ba as ca,S as se,aH as Re,f as jt,aj as Pn,P as Se,a5 as vn,o as Ye,ai as ze,ag as Ja,a6 as Qs,a7 as tl,U as si,J as zi,L as rt,ah as Sn,dI as Co,dJ as Kn,e as an,c1 as el,V as mn,a as tn,n as oe,T as En,j as nl,b3 as re,c as Ro,bI as Qa,a_ as ne,M as ie,k as Mt,N as Pi,ax as $n,bl as Ao,bf as tr,b as ce,dK as il,K as al,d as Po,dL as rl,O as ii,a2 as rn,a3 as We,a4 as ci,l as ya,bu as Di,dM as ol,G as Xn,b1 as Do,b2 as Zt,bP as kn,bV as ui,bz as Dn,dN as sl,i as _e,h as wn,B as Bi,aZ as ll,b9 as Bn,bT as Lo,bU as Uo,bW as cl,bX as ul,bJ as dl,bK as fl,bL as Li,bA as No,bM as pl,bR as hl,aQ as bn,bO as di,aq as ml,bN as Io,bQ as Oo,cy as Fo,cz as Zi,cA as Ji,cB as Qi,cC as ta,cD as er,cE as nr,cF as ir,cG as ar,cH as rr,cI as or,cJ as sr,cK as lr,cL as cr,bw as ua,cM as ur,cN as dr,cO as fr,cP as pr,cQ as hr,cR as mr,cS as vr,cT as gr,cU as _r,cV as xr,cW as Sr,cX as Tr,cY as br,cZ as wr,c_ as Er,c$ as Mr,d0 as yr,d1 as Cr,d2 as Rr,d3 as Ar,bv as da,d4 as Pr,cu as Dr,cc as vl,cd as gl,au as ti,dO as _l,dP as xl,dQ as Sl,dR as Tl,ce as bl,cf as wl,aw as El,cg as Ml,ch as yl,ci as Cl,cj as Rl,bH as Al,ck as Pl,av as Dl,cl as Ll,aL as Ci,aG as Ul,c3 as ea,c4 as bi,c5 as Nl,c6 as Il,bC as Ol,b4 as Ca,c7 as Fl,b5 as Ra,bB as zl,c8 as Bl,c9 as Vl,bZ as na,b_ as ia,dH as zo,ap as Pt,dS as Zn,dT as Hl,b$ as Vi,dD as Lr,dG as Gl,dU as Bo,dB as Vo,dV as fa,dW as kl,dX as Wl,dY as $l,Y as Xl,b7 as jl,b8 as ai,bb as ql,cq as Yl,cr as Kl,cs as Zl,ct as Jl,cv as Ql,cw as tc,cx as ec,cm as nc,cn as Ur,co as ic,at as ac,aJ as Nr,aI as Ir,aK as Or,cb as Fr,W as rc,ca as Ho,bd as Ui,be as fi,aX as Aa,df as oc,dg as sc,ar as lc,dZ as zr,d_ as Ne,d$ as Go,af as ko,ae as Wo,ad as $o,bs as Xo,br as jo,bq as qo,bh as cc,bi as uc,bj as dc,e0 as fc,cp as pc,dz as hc,dy as mc,e1 as vc,e2 as gc,H as Ln,an as ft,A as Pa,e3 as _c,e4 as xc,e5 as Sc,ao as jn,z as Ke,e6 as Br,e7 as Tc,aA as pa,C as bc,F as wc,de as Ec,s as Mc,x as wi,v as ha,y as Vr,I as yc}from"./runtime-updater-QAQQJKLZ-BzyqC96j.js";import{t as Ni,L as ma,o as Cc,n as Rc,H as Ac,z as hi,Y as Hr,d as Yo,I as Ko,c as Zo,s as mi,i as Pc,l as Dc,j as Gr}from"./runtime-chunk-3HKB5WZH-BGSiwS5w.js";import{e as Lc,a as Uc,f as Nc}from"./runtime-chunk-UIRA2CWJ-BOAtg-Ug.js";import"./index-aXHuRy4v.js";var Tn=class{constructor(t){if(this.hashProperties=void 0,this.isNode=!0,this.shortcuts={},Tn.uuidContext===null)throw new Error("plz startContext");Tn.uuidContext===Tn.globalContext?this.uuid="_gid"+Tn.uuidContext.nodeContextUuid++:this.uuid="_uid"+Tn.uuidContext.nodeContextUuid++,this.type=t,this.name=""}static startContext(t){this.uuidContext===null||this.uuidContext===Tn.globalContext?this.uuidContext=t:console.error("Can't start context twice")}static endContext(t){this.uuidContext!==t&&console.error("Can't end context twice"),this.uuidContext=null}analyze(t,n){n=n??{},t.analyzing=!0,this.build(t.addFlow(n.slot,n.cache,n.context),"v4"),t.clearVertexNodeCode(),t.clearFragmentNodeCode(),t.removeFlow(),t.analyzing=!1}analyzeAndFlow(t,n,e){return e=e??{},this.analyze(t,e),this.flow(t,n,e)}flow(t,n,e){e=e??{},t.addFlow(e.slot,e.cache,e.context);let i={result:this.build(t,n),code:t.clearNodeCode(),extra:t.context.extra};return t.removeFlow(),i}build(t,n,e){n=n??this.getType(t,n);let i=t.getNodeData(e??this);return t.analyzing&&this.appendDepsNode(t,i,n),t.nodes.indexOf(this)===-1&&t.nodes.push(this),this.updateFrame!==void 0&&t.updaters.indexOf(this)===-1&&t.updaters.push(this),this.generate(t,n,e)}updateFrame(t){}generateReadonly(t,n,e,i,a,r){return""}generate(t,n,e,i,a){return""}parse(t,n,e,i){}appendDepsNode(t,n,e){n.deps=(n.deps||0)+1;let i=t.getTypeLength(e);(i>(n.outputMax||0)||this.getType(t,e))&&(n.outputMax=i,n.output=e)}setName(t){this.name=t}getName(){return this.name}getType(t,n){return n==="sampler2D"||n==="samplerCube"?n:this.type}},he=Tn;he.globalContext={nodeContextUuid:0},he.uuidContext=Tn.globalContext;var Ri=3e3,va=3001,kr=class{constructor(t){t=t??{},this.name=t.name,this.type=t.type,this.node=t.node,this.size=t.size,this.needsUpdate=t.needsUpdate}get value(){return this.node.value}set value(t){this.node.value=t}},Fe=new class{constructor(){this.nodes={},this.keywords={}}add(t){this.nodes[t.name]=t}addKeyword(t,n,e){e=e===void 0||e,this.keywords[t]={callback:n,cache:e}}remove(t){delete this.nodes[t.name]}removeKeyword(t){delete this.keywords[t]}get(t){return this.nodes[t]}getKeyword(t,n){return this.keywords[t].callback(n)}getKeywordData(t){return this.keywords[t]}contains(t){return this.nodes[t]!==void 0}containsKeyword(t){return this.keywords[t]!==void 0}},Ot=class extends he{constructor(t,n){super(t),this.scope="",n=n??{},this.shared=n.shared===void 0||n.shared,this.unique=n.unique!==void 0&&n.unique}build(t,n,e,i){if(n=n??this.getType(t),this.getShared(t,n)){let a=this.getUnique(t,n);a&&this.uuid===void 0&&(this.uuid=Bi.generateUUID()),e=t.getUUID(e??this.getUUID(),!a);let r=t.getNodeData(e),o=r.output||this.getType(t);if(t.analyzing)return(r.deps||0)>0||this.getLabel()?(this.appendDepsNode(t,r,n),this.generate(t,n,e)):super.build(t,n,e);if(a)return r.name=r.name||super.build(t,n,e),r.name;if(!this.getLabel()&&(!this.getShared(t,o)||t.context.ignoreCache||r.deps===1))return super.build(t,n,e);e=this.getUUID(!1);let l=this.getTemp(t,e);if(l)return t.format(l,o,n);{l=super.generate(t,n,e,r.output,i);let u=this.generate(t,o,e);return t.addNodeCode(l+" = "+u+";"),t.format(l,o,n)}}return super.build(t,n,e)}getShared(t,n){return n!=="sampler2D"&&n!=="samplerCube"&&this.shared}getUnique(t,n){return this.unique}setLabel(t){return this.label=t,this}getLabel(){return this.label}getUUID(t){let n=this.uuid;return typeof this.scope=="string"&&(n=this.scope+"-"+n),n}getTemp(t,n){n=n||this.uuid;let e=t.getVars()[n];return e?e.name:void 0}generate(t,n,e,i,a){return this.getShared(t,n)||console.error("TempNode is not shared"),e=e??this.uuid,t.getTempVar(e,i??this.getType(t),a,this.getLabel()).name}},Be=class extends Ot{constructor(t,n){(n=n??{}).shared=n.shared!==void 0&&n.shared,super(t,n),this.readonly=!1}setReadonly(t){return this.readonly=t,this.hashProperties=this.readonly?["value"]:void 0,this}getReadonly(){return this.readonly}generate(t,n,e,i,a,r){e=t.getUUID(e??this.getUUID()),i=i??this.getType(t);let o=t.getNodeData(e);return this.getReadonly()&&this.generateReadonly!==void 0?this.generateReadonly(t,n,e,i,a,r):t.isShader("vertex")?(o.vertex||(o.vertex=t.createVertexUniform(i,this,a,r,this.getLabel())),t.format(o.vertex.name,i,n)):(o.fragment||(o.fragment=t.createFragmentUniform(i,this,a,r,this.getLabel())),t.format(o.fragment.name,i,n))}},Ce=class extends Be{constructor(t=0,n){super("v2"),this.nodeType="Vector2",this.value=t instanceof _t?t:new _t(t,n)}get x(){return this.value.x}set x(t){this.value.x=t}get y(){return this.value.y}set y(t){this.value.y=t}generateReadonly(t,n,e,i,a,r){return t.format("vec2("+this.value.x+", "+this.value.y+")",i,n)}},ke=class extends Be{constructor(t=0,n,e){super("v3"),this.nodeType="Vector3",this.value=t instanceof Mt?t:new Mt(t,n,e)}get x(){return this.value.x}set x(t){this.value.x=t}get y(){return this.value.y}set y(t){this.value.y=t}get z(){return this.value.z}set z(t){this.value.z=t}generateReadonly(t,n,e,i,a,r){return t.format("vec3("+this.value.x+", "+this.value.y+", "+this.value.z+")",i,n)}},pn=class extends Be{constructor(t){super("v4"),this.nodeType="Vector4",this.value=t instanceof jn?t:new jn(t.r,t.g,t.b,t.a)}generateReadonly(t,n,e,i,a,r){return t.format("vec4("+this.value.r+", "+this.value.g+", "+this.value.b+", "+this.value.a+")",i,n)}},K=class extends Be{constructor(t){super("f"),this.nodeType="Float",this.value=t??0}generateReadonly(t,n,e,i,a,r){return t.format(this.value+(this.value%1?"":".0"),i,n)}},Ic=/^\s*([a-z_0-9]+)\s([a-z_0-9]+)\s*\((.*?)\)/i,Wr=/[a-z_0-9]+/gi,$=class extends Ot{constructor(t,n,e,i,a){super(a),this.src="",this.nodeType="Function",this.useKeywords=!0,this.includes=[],this.extensions={},this.keywords={},this.isMethod=a===void 0,this.isInterface=!1,this.parse(t,n,e,i)}getShared(t,n){return!this.isMethod}getType(t){return t.getTypeByFormat(this.type)}getInputByName(t){if(this.inputs){let n=this.inputs.length;for(;n--;)if(this.inputs[n].name===t)return this.inputs[n]}}getIncludeByName(t){if(this.includes){let n=this.includes.length;for(;n--;)if(this.includes[n].name===t)return this.includes[n]}}generate(t,n,e,i,a){let r,o=0,l=this.src;if(this.includes)for(let c=0;c<this.includes.length;c++)t.include(this.includes[c],this);for(let c in this.extensions)t.extensions[c]=!0;let u=[];for(;r=Wr.exec(this.src);)u.push(r);for(let c=0;c<u.length;c++){let s=u[c],p=s[0],S=!this.isMethod||!this.getInputByName(p),g=p;if(this.keywords[p]||this.useKeywords&&S&&Fe.containsKeyword(p)){let b=this.keywords[p];if(!b){let f=Fe.getKeywordData(p);f.cache&&(b=t.keywords[p]),b=b||Fe.getKeyword(p,t),f.cache&&(t.keywords[p]=b)}g=b.build(t)}p!==g&&l[s.index+o-1]!=="."&&(l=l.substring(0,s.index+o)+g+l.substring(s.index+p.length+o),o+=g.length-p.length),this.getIncludeByName(g)===void 0&&Fe.contains(g)&&t.include(Fe.get(g))}return n==="source"?l:this.isMethod?(this.isInterface||t.include(this,void 0,l),this.name):t.format("( "+l+" )",this.getType(t),n)}parse(t,n,e,i){if(this.src=t||"",this.includes=n??[],this.extensions=e??{},this.keywords=i??{},this.isMethod){let a=Ic.exec(this.src);if(this.inputs=[],a&&a.length==4){this.type=a[1],this.name=a[2];let r=a[3].match(Wr);if(r){let o=0;for(;o<r.length;){let l,u=r[o++];u==="in"||u==="out"||u==="inout"?l=r[o++]:(l=u,u="");let c=r[o++];this.inputs.push({name:c,type:l,qualifier:u})}}this.isInterface=this.src.indexOf("{")===-1}else this.type="",this.name=""}}},Oc=/^([a-z_0-9]+)\s([a-z_0-9]+)\s?=?\s?(.*?)(;|$)/i,Jo=class extends Ot{constructor(t="",n){super(),this.src="",this.useDefine=!1,this.nodeType="Const",this.parse(t||Jo.PI,void 0,void 0,void 0,n)}getType(t){return t.getTypeByFormat(this.type)}parse(t,n,e,i,a){this.src=t||"";let r,o,l="",u=Oc.exec(t);this.useDefine=a??this.src.charAt(0)==="#",u&&u.length>1?(o=u[1],r=u[2],l=u[3]):(r=this.src,o="f"),this.name=r,this.type=o,this.value=l}build(t,n){if(n==="source"){if(this.value)return this.useDefine?"#define "+this.name+" "+this.value:"const "+this.type+" "+this.name+" = "+this.value+";";if(this.useDefine)return this.src}return t.include(this),t.format(this.name,this.getType(t),n)}generate(t,n,e,i,a){return t.format(this.name,this.getType(t),n)}},Bt=Jo;Bt.PI="PI",Bt.PI2="PI2",Bt.RECIPROCAL_PI="RECIPROCAL_PI",Bt.RECIPROCAL_PI2="RECIPROCAL_PI2",Bt.LOG2="LOG2",Bt.EPSILON="EPSILON";var Fc=new RegExp(`^structs*([a-z_0-9]+)s*{s*((.|
)*?)}`,"gim"),zc=new RegExp("s*(w*?)s*(w*?)(=|;)","gim"),Qo=class extends Ot{constructor(t=""){super(),this.inputs=[],this.src="",this.nodeType="Struct",this.parse(t)}getType(t){return t.getTypeByFormat(this.name)}getInputByName(t){let n=this.inputs.length;for(;n--;)if(this.inputs[n].name===t)return this.inputs[n]}generate(t,n,e,i,a){return n==="source"?this.src+";":t.format("( "+this.src+" )",this.getType(t),n)}parse(t=""){this.src=t,this.inputs=[];let n=Fc.exec(t);if(n){let e,i=n[2];for(;e=zc.exec(i);)this.inputs.push({type:e[1],name:e[2]});this.name=n[1]}else this.name="";this.type=this.name}},ga=class extends Ot{constructor(t){super("v2",{shared:!1}),this.nodeType="UV",this.index=t??0}generate(t,n){t.requires.uv[this.index]=!0;let e=this.index>0?this.index+1:"",i=t.isShader("vertex")?"uv"+e:"vUv"+e;return t.format(i,this.getType(t),n)}};Fe.addKeyword("uv",function(){return new ga}),Fe.addKeyword("uv2",function(){return new ga(1)});var Vn=class extends Ot{constructor(t,n){super("v4"),this.nodeType="ColorSpace",this.input=t,this.method=n??Vn.LINEAR_TO_LINEAR,this.hashProperties=["method"]}static getEncodingComponents(t){switch(t){case Ri:return["Linear"];case va:return["sRGB"];default:return[]}}generate(t,n){let e=this.input.build(t,"v4"),i=this.getType(t),a=Vn.Nodes[this.method],r=t.include(a);if(r===Vn.LINEAR_TO_LINEAR)return t.format(e,i,n);if(a.inputs?.length===2){let o=this.factor.build(t,"f");return t.format(r+"( "+e+", "+o+" )",i,n)}return t.format(r+"( "+e+" )",i,n)}fromEncoding(t){let n=Vn.getEncodingComponents(t);this.method="LinearTo"+n[0],this.factor=n[1]}fromDecoding(t){let n=Vn.getEncodingComponents(t);this.method=n[0]+"ToLinear",this.factor=n[1]}},on=Vn;on.Nodes={LinearToLinear:new $(["vec4 LinearToLinear( in vec4 value ) {","	return value;","}"].join(`
`)),sRGBToLinear:new $(["vec4 sRGBToLinear( in vec4 value ) {","	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );","}"].join(`
`)),LinearTosRGB:new $(["vec4 LinearTosRGB( in vec4 value ) {","	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );","}"].join(`
`))},on.LINEAR_TO_LINEAR="LinearToLinear",on.SRGB_TO_LINEAR="sRGBToLinear",on.LINEAR_TO_SRGB="LinearTosRGB";var Gt=class extends ${constructor(t="",n,e,i,a){super(t,a,i,e,n),this.nodeType="Expression"}},en=class extends Be{constructor(t=new zi,n,e,i){super("v4",{shared:!0}),this.nodeType="Texture",this.value=t,this.uv=n??new ga,this.bias=e,this.project=i!==void 0&&i}getTexture(t,n){return super.generate(t,n,this.value.uuid,"t")}generate(t,n){if(n==="sampler2D")return this.getTexture(t,n);let e,i,a=this.getTexture(t,n),r=this.uv.build(t,this.project?"v4":"v2"),o=this.bias?this.bias.build(t,"f"):void 0;o===void 0&&t.context.bias&&(o=t.context.bias.setTexture(this).build(t,"f")),e=this.project?"texture2DProj":o?"tex2DBias":"tex2D",i=o?e+"( "+a+", "+r+", "+o+" )":e+"( "+a+", "+r+" )";let l={include:t.isShader("vertex"),ignoreCache:!0},u=this.getType(t);return t.addContext(l),this.colorSpace=this.colorSpace??new on(new Gt("",u)),this.colorSpace.fromDecoding(t.getTextureEncodingFromMap(this.value)),this.colorSpace.input.parse(i),i=this.colorSpace.build(t,u),t.removeContext(),t.format(i,u,n)}},$r=class extends Ot{constructor(t,n){super(),this.inputs=[],this.nodeType="FunctionCall",this.value=t,this.inputs=n??[]}getFunction(){return this.value}getType(t){return this.value.getType(t)}generate(t,n,e,i,a){i=this.getType(t);let r=this.value,o=r.build(t,n)+"( ",l=[];if(r.inputs){for(let u=0;u<r.inputs.length;u++){let c=r.inputs[u],s=this.inputs[u]||this.inputs[c.name];l.push(s.build(t,t.getTypeByFormat(c.type)))}o+=l.join(", ")+" )"}return t.format(o,i,n)}},ts=class extends Ot{constructor(t,n,e=ts.ADD){super(),this.nodeType="Operator",this.type=t.type,this.a=t,this.b=n,this.op=e}getType(t){let n=this.a.getType(t),e=this.b.getType(t);return t.isTypeMatrix(n)?"v4":t.getTypeLength(e)>t.getTypeLength(n)?e:n}generate(t,n){let e=this.getType(t);this.type=e;let i=this.a.build(t,e),a=this.b.build(t,e);return t.format("( "+i+" "+this.op+" "+a+" )",e,n)}},Oe=ts;Oe.ADD="+",Oe.SUB="-",Oe.MUL="*",Oe.DIV="/";var Wt=class extends Ot{constructor(t,n=Wt.ABS,e,i){super(),this.nodeType="Math",this.a=t,typeof n!="string"?this.b=n:i=n,typeof e!="string"?this.c=e:i=e,this.method=i,this.hashProperties=["method"]}getNumInputs(t){switch(this.method){case Wt.MIX:case Wt.CLAMP:case Wt.REFRACT:case Wt.SMOOTHSTEP:case Wt.FACEFORWARD:return 3;case Wt.MIN:case Wt.MAX:case Wt.MOD:case Wt.STEP:case Wt.REFLECT:case Wt.DISTANCE:case Wt.DOT:case Wt.CROSS:case Wt.POW:return 2;default:return 1}}getInputType(t){let n=t.getTypeLength(this.a.getType(t)),e=this.b?t.getTypeLength(this.b.getType(t)):0,i=this.c?t.getTypeLength(this.c.getType(t)):0;return n>e&&n>i?this.a.getType(t):e>i?this.b.getType(t):this.c.getType(t)}getType(t){switch(this.method){case Wt.LENGTH:case Wt.DISTANCE:case Wt.DOT:return"f";case Wt.CROSS:return"v3"}return this.getInputType(t)}generate(t,n){let e,i,a,r=this.a?t.getTypeLength(this.a.getType(t)):0,o=this.b?t.getTypeLength(this.b.getType(t)):0,l=this.c?t.getTypeLength(this.c.getType(t)):0,u=this.getInputType(t),c=this.getType(t);switch(this.type=c,this.method){case Wt.NEGATE:return t.format("( -"+this.a.build(t,u)+" )",u,n);case Wt.INVERT:return t.format("( 1.0 - "+this.a.build(t,u)+" )",u,n);case Wt.CROSS:e=this.a.build(t,"v3"),i=this.b.build(t,"v3");break;case Wt.STEP:e=this.a.build(t,r===1?"f":u),i=this.b.build(t,u);break;case Wt.MIN:case Wt.MAX:case Wt.MOD:e=this.a.build(t,u),i=this.b.build(t,o===1?"f":u);break;case Wt.REFRACT:e=this.a.build(t,u),i=this.b.build(t,u),a=this.c.build(t,"f");break;case Wt.MIX:e=this.a.build(t,u),i=this.b.build(t,u),a=this.c.build(t,l===1?"f":u);break;default:e=this.a.build(t,u),this.b&&(i=this.b.build(t,u)),this.c&&(a=this.c.build(t,u))}let s=[];s.push(e),i&&s.push(i),a&&s.push(a);let p=this.getNumInputs(t);if(s.length!==p)throw Error(`Arguments not match used in "${this.method}". Require ${p}, currently ${s.length}.`);return t.format(this.method+"( "+s.join(", ")+" )",c,n)}},bt=Wt;bt.RAD="radians",bt.DEG="degrees",bt.EXP="exp",bt.EXP2="exp2",bt.LOG="log",bt.LOG2="log2",bt.SQRT="sqrt",bt.INV_SQRT="inversesqrt",bt.FLOOR="floor",bt.CEIL="ceil",bt.NORMALIZE="normalize",bt.FRACT="fract",bt.SATURATE="saturate",bt.SIN="sin",bt.COS="cos",bt.TAN="tan",bt.ASIN="asin",bt.ACOS="acos",bt.ARCTAN="atan",bt.ABS="abs",bt.SIGN="sign",bt.LENGTH="length",bt.NEGATE="negate",bt.INVERT="invert",bt.MIN="min",bt.MAX="max",bt.MOD="mod",bt.STEP="step",bt.REFLECT="reflect",bt.DISTANCE="distance",bt.DOT="dot",bt.CROSS="cross",bt.POW="pow",bt.MIX="mix",bt.CLAMP="clamp",bt.REFRACT="refract",bt.SMOOTHSTEP="smoothstep",bt.FACEFORWARD="faceforward";var ri=class extends Ot{constructor(t,n,e){super("v4"),this.nodeType="TextureCubeUV",this.value=t,this.uv=n,this.bias=e}bilinearCubeUV(t,n,e,i){let a=new $r(ri.Nodes.bilinearCubeUV,[n,e,i]);this.colorSpaceTL=this.colorSpaceTL??new on(new Gt("","v4")),this.colorSpaceTL.fromDecoding(t.getTextureEncodingFromMap(this.value.value)),this.colorSpaceTL.input.parse(a.build(t)+".tl"),this.colorSpaceTR=this.colorSpaceTR??new on(new Gt("","v4")),this.colorSpaceTR.fromDecoding(t.getTextureEncodingFromMap(this.value.value)),this.colorSpaceTR.input.parse(a.build(t)+".tr"),this.colorSpaceBL=this.colorSpaceBL??new on(new Gt("","v4")),this.colorSpaceBL.fromDecoding(t.getTextureEncodingFromMap(this.value.value)),this.colorSpaceBL.input.parse(a.build(t)+".bl"),this.colorSpaceBR=this.colorSpaceBR??new on(new Gt("","v4")),this.colorSpaceBR.fromDecoding(t.getTextureEncodingFromMap(this.value.value)),this.colorSpaceBR.input.parse(a.build(t)+".br");let r={include:t.isShader("vertex"),ignoreCache:!0};t.addContext(r),this.colorSpaceTLExp=new Gt(this.colorSpaceTL.build(t,"v4"),"v4"),this.colorSpaceTRExp=new Gt(this.colorSpaceTR.build(t,"v4"),"v4"),this.colorSpaceBLExp=new Gt(this.colorSpaceBL.build(t,"v4"),"v4"),this.colorSpaceBRExp=new Gt(this.colorSpaceBR.build(t,"v4"),"v4"),t.removeContext();let o=new Gt("mix( mix( cubeUV_TL, cubeUV_TR, cubeUV.f.x ), mix( cubeUV_BL, cubeUV_BR, cubeUV.f.x ), cubeUV.f.y )","v4");return o.keywords.cubeUV_TL=this.colorSpaceTLExp,o.keywords.cubeUV_TR=this.colorSpaceTRExp,o.keywords.cubeUV_BL=this.colorSpaceBLExp,o.keywords.cubeUV_BR=this.colorSpaceBRExp,o.keywords.cubeUV=a,o}generate(t,n){if(t.isShader("fragment")){let e=this.uv,i=this.bias||t.context.roughness,a=new $r(ri.Nodes.roughnessToMip,[i]),r=new bt(a,ri.Nodes.m0,ri.Nodes.cubeUV_maxMipLevel,bt.CLAMP),o=new bt(r,bt.FLOOR),l=new bt(r,bt.FRACT),u=this.bilinearCubeUV(t,this.value,e,o),c=this.bilinearCubeUV(t,this.value,e,new Oe(o,new K(1).setReadonly(!0),Oe.ADD)),s=new bt(u,c,l,bt.MIX);return t.format(s.build(t),"v4",n)}return console.warn("TextureCubeUVNode is not compatible with "+t.shader+" shader."),t.format("vec4( 0.0 )",this.getType(t),n)}},_a=ri;_a.Nodes=(function(){let t=new Qo(`struct TextureCubeUVData {
			vec4 tl;
			vec4 tr;
			vec4 br;
			vec4 bl;
			vec2 f;
		}`),n=new Bt("float cubeUV_maxMipLevel 8.0",!0),e=new Bt("float cubeUV_minMipLevel 4.0",!0),i=new Bt("float cubeUV_maxTileSize 256.0",!0),a=new Bt("float cubeUV_minTileSize 16.0",!0),r=new $(`float getFace(vec3 direction) {
				vec3 absDirection = abs(direction);
				float face = -1.0;
				if (absDirection.x > absDirection.z) {
					if (absDirection.x > absDirection.y)
						face = direction.x > 0.0 ? 0.0 : 3.0;
					else
						face = direction.y > 0.0 ? 1.0 : 4.0;
				} else {
					if (absDirection.z > absDirection.y)
						face = direction.z > 0.0 ? 2.0 : 5.0;
					else
						face = direction.y > 0.0 ? 1.0 : 4.0;
				}
				return face;
		}`);r.useKeywords=!1;let o=new $(`vec2 getUV(vec3 direction, float face) {
				vec2 uv;
				if (face == 0.0) {
					uv = vec2(direction.z, direction.y) / abs(direction.x); 
				} else if (face == 1.0) {
					uv = vec2(-direction.x, -direction.z) / abs(direction.y); 
				} else if (face == 2.0) {
					uv = vec2(-direction.x, direction.y) / abs(direction.z); 
				} else if (face == 3.0) {
					uv = vec2(-direction.z, direction.y) / abs(direction.x); 
				} else if (face == 4.0) {
					uv = vec2(-direction.x, direction.z) / abs(direction.y); 
				} else {
					uv = vec2(direction.x, direction.y) / abs(direction.z); 
				}
				return 0.5 * (uv + 1.0);
		}`);o.useKeywords=!1;let l=new $(`TextureCubeUVData bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {
			float face = getFace(direction);
			float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);
			mipInt = max(mipInt, cubeUV_minMipLevel);
			float faceSize = exp2(mipInt);
			float texelSize = 1.0 / (3.0 * cubeUV_maxTileSize);
			vec2 uv = getUV(direction, face) * (faceSize - 1.0);
			vec2 f = fract(uv);
			uv += 0.5 - f;
			if (face > 2.0) {
				uv.y += faceSize;
				face -= 3.0;
			}
			uv.x += face * faceSize;
			if(mipInt < cubeUV_maxMipLevel){
				uv.y += 2.0 * cubeUV_maxTileSize;
			}
			uv.y += filterInt * 2.0 * cubeUV_minTileSize;
			uv.x += 3.0 * max(0.0, cubeUV_maxTileSize - 2.0 * faceSize);
			uv *= texelSize;
			vec4 tl = texture2D(envMap, uv);
			uv.x += texelSize;
			vec4 tr = texture2D(envMap, uv);
			uv.y += texelSize;
			vec4 br = texture2D(envMap, uv);
			uv.x -= texelSize;
			vec4 bl = texture2D(envMap, uv);
			return TextureCubeUVData( tl, tr, br, bl, f );
		}`,[t,r,o,n,e,i,a]);l.useKeywords=!1;let u=new Bt("float r0 1.0",!0),c=new Bt("float v0 0.339",!0),s=new Bt("float m0 -2.0",!0),p=new Bt("float r1 0.8",!0),S=new Bt("float v1 0.276",!0),g=new Bt("float m1 -1.0",!0),b=new Bt("float r4 0.4",!0),f=new Bt("float v4 0.046",!0),w=new Bt("float m4 2.0",!0),v=new Bt("float r5 0.305",!0),x=new Bt("float v5 0.016",!0),N=new Bt("float m5 3.0",!0),F=new Bt("float r6 0.21",!0),U=new Bt("float v6 0.0038",!0),M=new Bt("float m6 4.0",!0);return{bilinearCubeUV:l,roughnessToMip:new $(`float roughnessToMip(float roughness) {
			float mip = 0.0;
			if (roughness >= r1) {
				mip = (r0 - roughness) * (m1 - m0) / (r0 - r1) + m0;
			} else if (roughness >= r4) {
				mip = (r1 - roughness) * (m4 - m1) / (r1 - r4) + m1;
			} else if (roughness >= r5) {
				mip = (r4 - roughness) * (m5 - m4) / (r4 - r5) + m4;
			} else if (roughness >= r6) {
				mip = (r5 - roughness) * (m6 - m5) / (r5 - r6) + m5;
			} else {
				mip = -2.0 * log2(1.16 * roughness);// 1.16 = 1.79^0.25
			}
			return mip;
		}`,[u,c,s,p,S,g,b,f,w,v,x,N,F,U,M]),m0:s,cubeUV_maxMipLevel:n}})();var Hn=class extends Ot{constructor(t){super("v3"),this.nodeType="Normal",this.scope=t??Hn.VIEW}getShared(){return this.scope===Hn.WORLD}build(t,n,e,i){let a=t.context[this.scope+"Normal"];return a?a.build(t,n,e,i):super.build(t,n,e)}generate(t,n,e,i,a){let r;switch(this.scope){case Hn.VIEW:r=t.isShader("vertex")?"transformedNormal":"geometryNormal";break;case Hn.LOCAL:t.isShader("vertex")?r="objectNormal":(t.requires.normal=!0,r="vObjectNormal");break;case Hn.WORLD:t.isShader("vertex")?r="inverseTransformDirection( transformedNormal, viewMatrix ).xyz":(t.requires.worldNormal=!0,r="vWNormal")}return t.format(r,this.getType(t),n)}},Ie=Hn;Ie.LOCAL="local",Ie.WORLD="world",Ie.VIEW="view",Ie.NORMAL="normal",Fe.addKeyword("viewNormal",function(){return new Ie(Ie.VIEW)}),Fe.addKeyword("localNormal",function(){return new Ie(Ie.NORMAL)}),Fe.addKeyword("worldNormal",function(){return new Ie(Ie.WORLD)});var dn=class extends Ot{constructor(t){super("v3"),this.nodeType="Position",this.scope=t??dn.LOCAL}getType(){return this.scope===dn.PROJECTION?"v4":this.type}getShader(){switch(this.scope){case dn.LOCAL:case dn.WORLD:return!1}return!0}generate(t,n,e,i,a){let r;switch(this.scope){case dn.LOCAL:t.isShader("vertex")?r="transformed":(t.requires.position=!0,r="vPosition");break;case dn.WORLD:if(t.isShader("vertex"))return"( modelMatrix * vec4( transformed, 1.0 ) ).xyz";t.requires.worldPosition=!0,r="vWPosition";break;case dn.VIEW:r=t.isShader("vertex")?"-mvPosition.xyz":"vViewPosition";break;case dn.PROJECTION:r=t.isShader("vertex")?"( projectionMatrix * modelViewMatrix * vec4( position, 1.0 ) )":"vec4( 0.0 )"}return t.format(r,this.getType(),n)}},qe=dn;qe.LOCAL="local",qe.WORLD="world",qe.VIEW="view",qe.PROJECTION="projection",Fe.addKeyword("position",function(){return new qe}),Fe.addKeyword("worldPosition",function(){return new qe(qe.WORLD)}),Fe.addKeyword("viewPosition",function(){return new qe(qe.VIEW)});var Je=class extends Ot{constructor(t){super("v3"),this.nodeType="Reflect",this.scope=t??Je.CUBE}getUnique(t){return!t.context.viewNormal}getType(){return this.scope===Je.SPHERE?"v2":this.type}generate(t,n){let e=this.getUnique(t);if(t.isShader("fragment")){let i;switch(this.scope){case Je.VECTOR:{let a=new Ie(Ie.VIEW),r=t.context.roughness,o=a.build(t,"v3"),l=new qe(qe.VIEW).build(t,"v3"),u=r?r.build(t,"f"):void 0,c=`reflect( -normalize( ${l} ), ${o} )`;u&&(c=`normalize( mix( ${c}, ${o}, ${u} * ${u} ) )`);let s=`inverseTransformDirection( ${c}, viewMatrix )`;e?(t.addNodeCode(`vec3 reflectVec = ${s};`),i="reflectVec"):i=s;break}case Je.CUBE:{let a=new Je(Je.VECTOR).build(t,"v3"),r="vec3( -"+a+".x, "+a+".yz )";e?(t.addNodeCode(`vec3 reflectCubeVec = ${r};`),i="reflectCubeVec"):i=r;break}case Je.SPHERE:{let a="normalize( ( viewMatrix * vec4( "+new Je(Je.VECTOR).build(t,"v3")+", 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) ).xy * 0.5 + 0.5";e?(t.addNodeCode(`vec2 reflectSphereVec = ${a};`),i="reflectSphereVec"):i=a;break}}return t.format(i,this.getType(),n)}return console.warn("ReflectNode is not compatible with "+t.shader+" shader."),t.format("vec3( 0.0 )",this.type,n)}},Wn=Je;Wn.CUBE="cube",Wn.SPHERE="sphere",Wn.VECTOR="vector";var Bc=class extends Ot{constructor(t=new en,n,e){super("v4"),this.nodeType="TextureCube",this.value=t,this.radianceNode=new _a(this.value,n??new Wn(Wn.VECTOR),e),this.irradianceNode=new _a(this.value,new Ie(Ie.WORLD),new K(1).setReadonly(!0))}generate(t,n){return t.isShader("fragment")?(t.require("irradiance"),t.context.bias&&t.context.bias.setTexture(this.value),(t.slot==="irradiance"?this.irradianceNode:this.radianceNode).build(t,n)):(console.warn("TextureCubeNode is not compatible with "+t.shader+" shader."),t.format("vec4( 0.0 )",this.getType(t),n))}},Vc=class extends Be{constructor(t=new Aa,n,e){super("v4",{shared:!0}),this.nodeType="CubeTexture",this.value=t,this.uv=n??new Wn,this.bias=e}getTexture(t,n){return super.generate(t,n,this.value.uuid,"tc")}generate(t,n){if(n==="samplerCube")return this.getTexture(t,n);let e,i=this.getTexture(t,n),a=this.uv?.build(t,"v3"),r=this.bias?this.bias.build(t,"f"):void 0;r===void 0&&t.context.bias&&(r=t.context.bias.setTexture(this).build(t,"f")),e=r?"texCubeBias( "+i+", "+a+", "+r+" )":"texCube( "+i+", "+a+" )";let o={include:t.isShader("vertex"),ignoreCache:!0},l=this.getType(t);return t.addContext(o),this.colorSpace=this.colorSpace??new on(new Gt("",l)),this.colorSpace.fromDecoding(t.getTextureEncodingFromMap(this.value)),this.colorSpace.input.parse(e),e=this.colorSpace.build(t,l),t.removeContext(),t.format(e,l,n)}},Xr=["x","y","z","w"],Hc=["float","vec2","vec3","vec4"],Gc={float:"f",vec2:"v2",vec3:"v3",vec4:"v4",mat4:"v4",int:"i",bool:"b","float[]":"f[]","vec4[]":"v4[]"},kc={t:"sampler2D",tc:"samplerCube",b:"bool",i:"int",f:"float",c:"vec3",v2:"vec2",v3:"vec3",v4:"vec4",m3:"mat3",m4:"mat4","f[]":"float[]","v4[]":"vec4[]"},es=class{constructor(){this.includes={consts:{},functions:{},structs:{}},this.cache="",this.slot="",this.shader="",this.context={},this.needsJitter=!0,this.getIncludesCode=(function(){function t(n,e){return n.deps.length-e.deps.length}return function(n,e){let i=this.getIncludes(n,e);if(!i)return"";let a="";i=i.sort(t);for(let r=0;r<i.length;r++)i[r].src&&(a+=i[r].src+`
`);return a}})(),this.slots=[],this.caches=[],this.contexts=[],this.keywords={},this.nodeData={},this.fragmentVariables={},this.fragmentParsVariables={},this.vertexParsVariables={},this.requires={uv:[],color:[],transparent:!1,irradiance:!1,position:!1,worldPosition:!1,normal:!1,worldNormal:!1,vWorldViewDir:!1,modelMatrix:!1,viewMatrix:!1,projectionMatrix:!1},this.includes={consts:[],functions:[],structs:[]},this.attributes={},this.prefixCode=["#ifdef TEXTURE_LOD_EXT","	#define texCube(a, b) textureCube(a, b)","	#define texCubeBias(a, b, c) textureCubeLodEXT(a, b, c)","	#define tex2D(a, b) texture2D(a, b)","	#define tex2DBias(a, b, c) texture2DLodEXT(a, b, c)","#else","	#define texCube(a, b) textureCube(a, b)","	#define texCubeBias(a, b, c) textureCube(a, b, c)","	#define tex2D(a, b) texture2D(a, b)","	#define tex2DBias(a, b, c) texture2D(a, b, c)","#endif",`
			
			#define SPE_BLENDING_NORMAL 0
			#define SPE_BLENDING_MULTIPLY 1
			#define SPE_BLENDING_SCREEN 2
			#define SPE_BLENDING_OVERLAY 3

			vec3 spe_normalBlend( vec3 a, vec3 b, float alpha ) {
				return mix( a, b, alpha );
			}

			vec3 spe_multiplyBlend( vec3 a, vec3 b, float alpha ) {
				return mix( a, a * b, alpha );
			}

			vec3 spe_screenBlend( vec3 a, vec3 b, float alpha ) {
				vec3 tmp = 1.0 - ( 1.0 - a ) * ( 1.0 - b );
				return mix( a, tmp, alpha );
			}

			vec3 spe_overlayBlend( vec3 a, vec3 b, float alpha ) {
				vec3 tmp = mix( 1. - 2. * (1. - a) * (1. - b), 2. * a * b, step( a, vec3(.5) ) );
				return clamp( mix( a, tmp, alpha ), 0.0, 1.0 );
			}

			vec3 spe_blend( vec3 a, vec3 b, float alpha, int mode ) {
				if ( mode == SPE_BLENDING_NORMAL ) return spe_normalBlend( a, b, alpha );
				else if ( mode == SPE_BLENDING_MULTIPLY ) return spe_multiplyBlend( a, b, alpha );
				else if ( mode == SPE_BLENDING_SCREEN ) return spe_screenBlend( a, b, alpha );
				else if ( mode == SPE_BLENDING_OVERLAY ) return spe_overlayBlend( a, b, alpha );
				return vec3( 1.0 );
			}
			`,"#include <packing>","#include <common>"].join(`
`),this.parsCode={vertex:["float neighbor_offset = 0.0001;",""].join(`
`),fragment:["float accumAlpha = 0.0;",`void accumulateAlpha(float alpha) {
					accumAlpha += (1.0 - accumAlpha) * alpha;
				}`,""].join(`
`)},this.code={vertex:"",fragment:""},this.nodeCode={vertex:"",fragment:""},this.resultCode={vertex:"",fragment:""},this.finalCode={vertex:"",fragment:""},this.inputs={uniforms:{list:[],vertex:[],fragment:[]},arrayUniforms:{list:[],vertex:[],fragment:[]},vars:{varying:[],vertex:[],fragment:[]}},this.defines={},this.uniforms={},this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.updaters=[],this.nodes=[],this.analyzing=!1}build(t,n){this.addVertexParsCode(`
uniform int frameIndex;
uniform vec2 resolution;
uniform mat4 previousModelViewMatrix;
uniform mat4 previousProjectionMatrix;

varying vec4 vCurrentPosition;
varying vec4 vPreviousPosition;
`),this.addFragmentParsCode(`
layout(location = 1) out vec4 gVelocity;

uniform int frameIndex;
uniform vec2 resolution;
// Transparent depth ordering (COM-1866): 0 for the color draw (the legacy
// "discard fully transparent pixels"), TRANSPARENT_DEPTH_ALPHA_CUTOFF on a
// material's depth twin — see materials/depthPrepass.ts.
uniform float alphaDiscardCutoff;

varying vec4 vCurrentPosition;
varying vec4 vPreviousPosition;

const vec2 haltonSequence[16] = vec2[16](
vec2( 0.000000,-0.333334),
vec2(-0.500000, 0.333334),
vec2( 0.500000,-0.777778),
vec2(-0.750000,-0.111112),
vec2( 0.250000, 0.555556),
vec2(-0.250000,-0.555556),
vec2( 0.750000, 0.111112),
vec2(-0.875000, 0.777778),
vec2(0.125000, -0.925926),
vec2(-0.375000, -0.259260),
vec2(0.625000, 0.407408),
vec2(-0.625000, -0.703704),
vec2(0.375000, -0.037038),
vec2(-0.125000, 0.629630),
vec2(0.875000, -0.481482),
vec2(-0.937500, 0.185186));

vec2 vogelDiskSample(int sampleIndex, int sampleCount, float angle) {
  const float goldenAngle = 2.399963f; // radians
  float r = sqrt(float(sampleIndex) + 0.5f) / sqrt(float(sampleCount));
  float theta = float(sampleIndex) * goldenAngle + angle;
  float sine = sin(theta);
  float cosine = cos(theta);
  return vec2(cosine, sine) * r;
}

// Derived from the interleaved gradient function from Jimenez 2014 http:goo.gl/eomGso
float getNoiseInterleavedGradient(vec2 screenPos) {
    vec3 magic = vec3(0.06711056f, 0.00583715f, 52.9829189f);
    return fract(magic.z * fract(dot(screenPos, magic.xy)));
}

`),this.mergeUniform({alphaDiscardCutoff:new K(0)}),this.buildShader("vertex",t),this.buildShader("fragment",n);for(let e=0;e<this.requires.uv.length;e++)if(this.requires.uv[e]){let i=e>0?e+1:"";this.addVaryCode("varying vec2 vUv"+i+";"),e>0&&this.addVertexParsCode("attribute vec2 uv"+i+";"),this.addVertexFinalCode("vUv"+i+" = uv"+i+";")}return this.requires.color[0]&&(this.addVaryCode("varying vec4 vColor;"),this.addVertexFinalCode(`
				#if defined( USE_COLOR_ALPHA )
					vColor = color;
				#elif defined( USE_COLOR )
					vColor = vec4( color, 1.0 );
				#else
					vColor = vec4( 1.0 );
				#endif
			`)),this.requires.color[1]&&(this.addVaryCode("varying vec4 vColor2;"),this.addVertexParsCode("attribute vec4 color2;"),this.addVertexFinalCode("vColor2 = color2;")),this.requires.position&&(this.addVaryCode("varying vec3 vPosition;"),this.addVertexFinalCode("vPosition = transformed;")),this.requires.worldPosition,this.requires.normal&&(this.addVaryCode("varying vec3 vObjectNormal;"),this.addVertexFinalCode(`
				#ifndef SHAPEBLEND 
					vObjectNormal = normal;
				#else
					vObjectNormal = objectNormal;
				#endif
			`)),this.requires.modelMatrix&&this.addFragmentParsCode("uniform mat4 modelMatrix;"),this.requires.viewMatrix&&this.addFragmentParsCode("uniform mat4 viewMatrix;"),this.requires.projectionMatrix&&this.addFragmentParsCode("uniform mat4 projectionMatrix;"),this.requires.worldNormal&&(this.addVaryCode("varying vec3 vWNormal;"),this.addVertexFinalCode("vWNormal = inverseTransformDirection( transformedNormal, viewMatrix ).xyz;")),this.requires.vWorldViewDir&&(this.addVaryCode("varying vec3 vWorldViewDir;"),this.addVertexFinalCode("vWorldViewDir = isPerspectiveMatrix( projectionMatrix ) ?  ( (modelMatrix * vec4(position, 1.0)).xyz - cameraPosition ) : vec3( -viewMatrix[0][2], -viewMatrix[1][2], -viewMatrix[2][2] );")),this.needsJitter&&(this.addVertexFinalCode(`

const vec2 haltonSequence[16] = vec2[16](
vec2( 0.000000,-0.333334),
vec2(-0.500000, 0.333334),
vec2( 0.500000,-0.777778),
vec2(-0.750000,-0.111112),
vec2( 0.250000, 0.555556),
vec2(-0.250000,-0.555556),
vec2( 0.750000, 0.111112),
vec2(-0.875000, 0.777778),
vec2(0.125000, -0.925926),
vec2(-0.375000, -0.259260),
vec2(0.625000, 0.407408),
vec2(-0.625000, -0.703704),
vec2(0.375000, -0.037038),
vec2(-0.125000, 0.629630),
vec2(0.875000, -0.481482),
vec2(-0.937500, 0.185186));


vec2 offset = haltonSequence[frameIndex];
offset.x /= resolution.x;
offset.y /= resolution.y;

vec4 currentPosition = gl_Position;
vec4 currentPositionJittered = currentPosition + (vec4(offset.x, offset.y, 0.0, 0.0) * currentPosition.w);



vCurrentPosition = currentPosition;
vec4 previousLocalPosition = vec4(transformed, 1.0);
#ifdef USE_INSTANCING



previousLocalPosition = instanceMatrix * previousLocalPosition;
#endif
vPreviousPosition = previousProjectionMatrix * previousModelViewMatrix * previousLocalPosition;
#ifdef OUTLINE_COMPENSATION
vPreviousPosition.xy += OUTLINE_COMPENSATION;
#endif
gl_Position = currentPositionJittered;

`),this.addFragmentFinalCode(`
vec2 oldPos = vPreviousPosition.xy;
    oldPos /= vPreviousPosition.w;
    oldPos.xy = (oldPos.xy+1.)/2.0;

vec2 newPos = vCurrentPosition.xy;
    newPos /= vCurrentPosition.w;
    newPos.xy = (newPos.xy+1.)/2.0;

vec2 velocity = (newPos - oldPos);



if (gl_FragColor.a <= alphaDiscardCutoff) discard;

gVelocity = vec4(velocity, 0.0, 1.0);
`)),this}buildShader(t,n){this.resultCode[t]=n.build(this.setShader(t),"v4")}setMaterial(t,n){return this.defines={},this}addFlow(t,n,e){return this.addSlot(t).addCache(n).addContext(e)}removeFlow(){return this.removeSlot().removeCache().removeContext()}addCache(t){return this.cache=t??"",this.caches.push(this.cache),this}removeCache(){return this.caches.pop(),this.cache=this.caches[this.caches.length-1]||"",this}addContext(t){return this.context=Object.assign({},this.context,t),this.context.extra=this.context.extra||{},this.contexts.push(this.context),this}removeContext(){return this.contexts.pop(),this.context=this.contexts[this.contexts.length-1]||{},this}addSlot(t){return this.slot=t||"",this.slots.push(this.slot),this}removeSlot(){return this.slots.pop(),this.slot=this.slots[this.slots.length-1]||"",this}addFragmentVariable(t,n){this.fragmentVariables[t]===void 0&&(this.addFragmentCode(`${n} ${t};`),this.fragmentVariables[t]="")}addFragmentParsVariable(t,n){this.fragmentParsVariables[t]===void 0&&(this.addFragmentParsCode(`${n} ${t};`),this.fragmentParsVariables[t]="")}addVertexParsVariable(t,n){this.vertexParsVariables[t]===void 0&&(this.addVertexParsCode(`${n} ${t};`),this.vertexParsVariables[t]="")}addVertexCode(t){this.addCode(t,"vertex")}addFragmentCode(t){this.addCode(t,"fragment")}addCode(t,n){this.code[n??this.shader]+=t+`
`}addVertexNodeCode(t){this.addNodeCode(t,"vertex")}addFragmentNodeCode(t){this.addNodeCode(t,"fragment")}addNodeCode(t,n){this.nodeCode[n??this.shader]+=t+`
`}clearNodeCode(t){t=t??this.shader;let n=this.nodeCode[t];return this.nodeCode[t]="",n}clearVertexNodeCode(){return this.clearNodeCode("vertex")}clearFragmentNodeCode(){return this.clearNodeCode("fragment")}addVertexFinalCode(t){this.addFinalCode(t,"vertex")}addFragmentFinalCode(t){this.addFinalCode(t,"fragment")}addFinalCode(t,n){this.finalCode[n??this.shader]+=t+`
`}addVertexParsCode(t){this.addParsCode(t,"vertex")}addFragmentParsCode(t){this.addParsCode(t,"fragment")}addParsCode(t,n){this.parsCode[n??this.shader]+=t+`
`}addVaryCode(t){this.addVertexParsCode(t),this.addFragmentParsCode(t)}isCache(t){return this.caches.indexOf(t)!==-1}isSlot(t){return this.slots.indexOf(t)!==-1}define(t,n){this.defines[t]=n===void 0?1:n}require(t){this.requires[t]=!0}isDefined(t){return this.defines[t]!==void 0}getVar(t,n,e,i="varying",a="V",r=""){let o=this.getVars(i),l=o[t];if(!l){let u=o.length;l={name:e||"node"+a+u+(r?"_"+r:""),type:n},o.push(l),o[t]=l}return l}getTempVar(t,n,e,i){return this.getVar(t,n,e,this.shader,"T",i)}getAttribute(t,n){if(!this.attributes[t]){let e=this.getVar(t,n);this.addVertexParsCode("attribute "+n+" "+t+";"),this.addVertexFinalCode(e.name+" = "+t+";"),this.attributes[t]={varying:e,name:t,type:n}}return this.attributes[t]}getCode(t){return[this.prefixCode,this.parsCode[t],this.getVarListCode(this.getVars("varying"),"varying"),this.getVarListCode(this.inputs.uniforms[t],"uniform"),this.getVarListCode(this.inputs.arrayUniforms[t],"uniform"),this.getIncludesCode("consts",t),this.getIncludesCode("structs",t),this.getIncludesCode("functions",t),"void main() {",this.getVarListCode(this.getVars(t)),this.code[t],this.resultCode[t],this.finalCode[t],"}"].join(`
`)}getVarListCode(t,n){n=n??"";let e="";for(let i=0,a=t.length;i<a;++i){let r=t[i],o=r.type,l=r.name,u=r.size,c=this.getFormatByType(o);if(c===void 0)throw new Error("Node pars "+c+" not found.");c.includes("[]")?e+=n+" "+c.substring(0,c.length-2)+" "+l+`[${u}];
`:e+=n+" "+c+" "+l+`;
`}return e}getVars(t){return this.inputs.vars[t??this.shader]}getNodeData(t){let n=t instanceof he?t.uuid:t;return this.nodeData[n]=this.nodeData[n]||{}}createUniform(t,n,e,i,a,r){if(n.includes("[]")){let o=this.inputs.arrayUniforms,l=o.list.length,u=new kr({type:n,size:e.size,name:i||"nodeUA"+l+(r?"_"+r:""),node:e,needsUpdate:a});return o.list.push(u),o[t].push(u),o[t][u.name]=u,this.uniforms[u.name]=u,u}{let o=this.inputs.uniforms,l=o.list.length,u=new kr({type:n,name:i||"nodeU"+l+(r?"_"+r:""),node:e,needsUpdate:a});return o.list.push(u),o[t].push(u),o[t][u.name]=u,this.uniforms[u.name]=u,u}}createVertexUniform(t,n,e,i,a){return this.createUniform("vertex",t,n,e,i,a)}createFragmentUniform(t,n,e,i,a){return this.createUniform("fragment",t,n,e,i,a)}include(t,n,e){let i;if(t=typeof t=="string"?Fe.get(t):t,this.context.include===!1)return t.name;t instanceof $?i=this.includes.functions:t instanceof Bt?i=this.includes.consts:t instanceof Qo&&(i=this.includes.structs);let a=i[this.shader]=i[this.shader]||[];if(t){let r=a[t.name];if(r||(r=a[t.name]={node:t,deps:[]},a.push(r),r.src=t.build(this,"source")),t instanceof $&&n&&a[n.name]&&a[n.name].deps.indexOf(t)===-1&&(a[n.name].deps.push(t),t.includes?.length)){let o=0;do this.include(t.includes[o++],n);while(o<t.includes.length)}return e&&(r.src=e),t.name}throw new Error("Include not found.")}colorToVectorProperties(t){return t.replace("r","x").replace("g","y").replace("b","z").replace("a","w")}colorToVector(t){return t.replace(/c/g,"v3")}getIncludes(t,n){return this.includes[t][n||this.shader]}getConstructorFromLength(t){return Hc[t-1]}isTypeMatrix(t){return/^m/.test(t)}getTypeLength(t){return t==="f"?1:parseInt(this.colorToVector(t).substr(1))}getTypeFromLength(t){return t===1?"f":"v"+t}findNode(...t){for(let n=0;n<arguments.length;n++){let e=t[n];if(e?.isNode)return e}}resolve(...t){for(let n=0;n<arguments.length;n++){let e=t[n];if(e!==void 0){if(e.isNode)return e;if(e.isTexture)switch(e.mapping){case Ui:case fi:return new Vc(e);case Vi:return new Bc(new en(e));default:return new en(e)}else{if(e.isVector2)return new Ce(e);if(e.isVector3)return new ke(e);if(e.isVector4)return new pn(e)}}}}format(t,n,e){switch(this.colorToVector(e+" <- "+n)){case"f <- v2":case"f <- v3":case"f <- v4":return t+".x";case"f <- i":case"f <- b":return"float( "+t+" )";case"v2 <- f":return"vec2( "+t+" )";case"v2 <- v3":case"v2 <- v4":return t+".xy";case"v2 <- i":case"v2 <- b":case"v3 <- i":case"v3 <- b":return"vec2( float( "+t+" ) )";case"v3 <- f":return"vec3( "+t+" )";case"v3 <- v2":return"vec3( "+t+", 0.0 )";case"v3 <- v4":return t+".xyz";case"v4 <- f":return"vec4( "+t+" )";case"v4 <- v2":return"vec4( "+t+", 0.0, 1.0 )";case"v4 <- v3":return"vec4( "+t+", 1.0 )";case"v4 <- i":case"v4 <- b":return"vec4( float( "+t+" ) )";case"i <- f":case"i <- b":return"int( "+t+" )";case"i <- v2":case"i <- v3":case"i <- v4":return"int( "+t+".x )";case"b <- f":return"( "+t+" != 0.0 )";case"b <- v2":return"( "+t+" != vec2( 0.0 ) )";case"b <- v3":return"( "+t+" != vec3( 0.0 ) )";case"b <- v4":return"( "+t+" != vec4( 0.0 ) )";case"b <- i":return"( "+t+" != 0 )"}return t}getTypeByFormat(t){return Gc[t]||t}getFormatByType(t){return kc[t]||t}getUUID(t,n){return(n=n===void 0||n)&&this.cache&&(t=this.cache+"-"+t),t}getElementByIndex(t){return Xr[t]}getIndexByElement(t){return Xr.indexOf(t)}isShader(t){return this.shader===t}setShader(t){return this.shader=t,this}mergeDefines(t){for(let n in t)this.defines[n]=t[n];return this.defines}mergeUniform(t){for(let n in t)this.uniforms[n]=t[n];return this.uniforms}getTextureEncodingFromMap(t){let n;return t?t.isTexture&&(n=t.colorSpace===tn?va:Ri):n=Ri,n===Ri&&this.context.gamma&&(n=va),n}},le=class extends Be{constructor(t=0,n,e,i){super("c"),this.nodeType="Color",this.value=t instanceof jn?t:new jn(t||0,n,e,i)}setRGBA(t){this.value.setRGBA(t.r,t.g,t.b,t.a)}generate(t,n,e,i,a,r){e=t.getUUID(e??this.getUUID()),i=i??this.getType(t);let o=t.getNodeData(e),l=this.getReadonly()&&this.generateReadonly!==void 0;if(this.alpha){let u=this.alpha.build(t,"f");t.addFragmentNodeCode(`accumAlpha += ( 1.0 - accumAlpha ) * ${u};`)}return l?this.generateReadonly(t,n,e,i,a,r):t.isShader("vertex")?(o.vertex||(o.vertex=t.createVertexUniform(i,this,a,r,this.getLabel())),t.format(o.vertex.name,i,n)):(o.fragment||(o.fragment=t.createFragmentUniform(i,this,a,r,this.getLabel())),t.format(o.fragment.name,i,n))}generateReadonly(t,n,e,i,a,r){return t.format("vec3("+this.value.r+", "+this.value.g+", "+this.value.b+")",i,n)}},kt=class extends Be{constructor(t){super("i"),this.nodeType="Int",this.value=Math.floor(t??0)}generateReadonly(t,n,e,i,a,r){return t.format(this.value.toString(),i,n)}};function Wc(){let t=null,n=!1,e=null,i=null;function a(r,o){e(r,o),i=t.requestAnimationFrame(a)}return{start:function(){n!==!0&&e!==null&&t!==null&&(i=t.requestAnimationFrame(a),n=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(r){e=r},setContext:function(r){t=r}}}function $c(t){let n=new WeakMap;return{get:function(e){return e.isInterleavedBufferAttribute&&(e=e.data),n.get(e)},remove:function(e){e.isInterleavedBufferAttribute&&(e=e.data);let i=n.get(e);i&&(t.deleteBuffer(i.buffer),n.delete(e))},update:function(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let r=n.get(e);return void((!r||r.version<e.version)&&n.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version}))}let a=n.get(e);if(a===void 0)n.set(e,(function(r,o){let l,u=r.array,c=r.usage,s=u.byteLength,p=t.createBuffer();if(t.bindBuffer(o,p),t.bufferData(o,u,c),r.onUploadCallback(),u instanceof Float32Array)l=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)l=t.HALF_FLOAT;else if(u instanceof Uint16Array)l=r.isFloat16BufferAttribute?t.HALF_FLOAT:t.UNSIGNED_SHORT;else if(u instanceof Int16Array)l=t.SHORT;else if(u instanceof Uint32Array)l=t.UNSIGNED_INT;else if(u instanceof Int32Array)l=t.INT;else if(u instanceof Int8Array)l=t.BYTE;else if(u instanceof Uint8Array)l=t.UNSIGNED_BYTE;else{if(!(u instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);l=t.UNSIGNED_BYTE}return{buffer:p,type:l,bytesPerElement:u.BYTES_PER_ELEMENT,version:r.version,size:s}})(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(r,o,l){let u=o.array,c=o.updateRanges;if(t.bindBuffer(l,r),c.length===0)t.bufferSubData(l,0,u);else{c.sort((p,S)=>p.start-S.start);let s=0;for(let p=1;p<c.length;p++){let S=c[s],g=c[p];g.start<=S.start+S.count+1?S.count=Math.max(S.count,g.start+g.count-S.start):(++s,c[s]=g)}c.length=s+1;for(let p=0,S=c.length;p<S;p++){let g=c[p];t.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}o.clearUpdateRanges()}o.onUploadCallback()})(a.buffer,e,i),a.version=e.version}}}}var pt={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} `,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} `,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Y={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Mt},probesMax:{value:new Mt},probesResolution:{value:new Mt}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},nn={basic:{uniforms:Ne([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Ne([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new oe(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Ne([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Ne([Y.common,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.roughnessmap,Y.metalnessmap,Y.fog,Y.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Ne([Y.common,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.gradientmap,Y.fog,Y.lights,{emissive:{value:new oe(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Ne([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Ne([Y.points,Y.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Ne([Y.common,Y.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Ne([Y.common,Y.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Ne([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Ne([Y.sprite,Y.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Ne([Y.common,Y.displacementmap,{referencePosition:{value:new Mt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Ne([Y.lights,Y.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};nn.physical={uniforms:Ne([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var Ei={r:0,b:0,g:0},Xc=new En,ns=new Pt;function jc(t,n,e,i,a,r){let o,l,u=new oe(0),c=a===!0?0:1,s=null,p=0,S=null;function g(f){let w=f.isScene===!0?f.background:null;if(w&&w.isTexture){let v=f.backgroundBlurriness>0;w=n.get(w,v)}return w}function b(f,w){f.getRGB(Ei,Bo(t)),e.buffers.color.setClear(Ei.r,Ei.g,Ei.b,w,r)}return{getClearColor:function(){return u},setClearColor:function(f,w=1){u.set(f),c=w,b(u,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,b(u,c)},render:function(f){let w=!1,v=g(f);v===null?b(u,c):v&&v.isColor&&(b(v,1),w=!0);let x=t.xr.getEnvironmentBlendMode();x==="additive"?e.buffers.color.setClear(0,0,0,1,r):x==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(t.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))},addToRenderList:function(f,w){let v=g(w);v&&(v.isCubeTexture||v.mapping===Vi)?(l===void 0&&(l=new Xn(new Vo(1,1,1),new _e({name:"BackgroundCubeMaterial",uniforms:fa(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(x,N,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Xc.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ns),l.material.toneMapped=ce.getTransfer(v.colorSpace)!==Zt,(s!==v||p!==v.version||S!==t.toneMapping)&&(l.material.needsUpdate=!0,s=v,p=v.version,S=t.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(o===void 0&&(o=new Xn(new kl(2,2),new _e({name:"BackgroundMaterial",uniforms:fa(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=v,o.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,o.material.toneMapped=ce.getTransfer(v.colorSpace)!==Zt,v.matrixAutoUpdate===!0&&v.updateMatrix(),o.material.uniforms.uvTransform.value.copy(v.matrix),(s!==v||p!==v.version||S!==t.toneMapping)&&(o.material.needsUpdate=!0,s=v,p=v.version,S=t.toneMapping),o.layers.enableAll(),f.unshift(o,o.geometry,o.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}}}function qc(t,n){let e=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},a=c(null),r=a,o=!1;function l(v){return t.bindVertexArray(v)}function u(v){return t.deleteVertexArray(v)}function c(v){let x=[],N=[],F=[];for(let U=0;U<e;U++)x[U]=0,N[U]=0,F[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:N,attributeDivisors:F,object:v,attributes:{},index:null}}function s(){let v=r.newAttributes;for(let x=0,N=v.length;x<N;x++)v[x]=0}function p(v){S(v,0)}function S(v,x){let N=r.newAttributes,F=r.enabledAttributes,U=r.attributeDivisors;N[v]=1,F[v]===0&&(t.enableVertexAttribArray(v),F[v]=1),U[v]!==x&&(t.vertexAttribDivisor(v,x),U[v]=x)}function g(){let v=r.newAttributes,x=r.enabledAttributes;for(let N=0,F=x.length;N<F;N++)x[N]!==v[N]&&(t.disableVertexAttribArray(N),x[N]=0)}function b(v,x,N,F,U,M,I){I===!0?t.vertexAttribIPointer(v,x,N,U,M):t.vertexAttribPointer(v,x,N,F,U,M)}function f(){w(),o=!0,r!==a&&(r=a,l(r.object))}function w(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:function(v,x,N,F,U){let M=!1,I=(function(Z,P,ot,tt){let it=tt.wireframe===!0,at=i[P.id];at===void 0&&(at={},i[P.id]=at);let X=Z.isInstancedMesh===!0?Z.id:0,j=at[X];j===void 0&&(j={},at[X]=j);let k=j[ot.id];k===void 0&&(k={},j[ot.id]=k);let D=k[it];return D===void 0&&(D=c(t.createVertexArray()),k[it]=D),D})(v,F,N,x);r!==I&&(r=I,l(r.object)),M=(function(Z,P,ot,tt){let it=r.attributes,at=P.attributes,X=0,j=ot.getAttributes();for(let k in j)if(j[k].location>=0){let D=it[k],dt=at[k];if(dt===void 0&&(k==="instanceMatrix"&&Z.instanceMatrix&&(dt=Z.instanceMatrix),k==="instanceColor"&&Z.instanceColor&&(dt=Z.instanceColor)),D===void 0||D.attribute!==dt||dt&&D.data!==dt.data)return!0;X++}return r.attributesNum!==X||r.index!==tt})(v,F,N,U),M&&(function(Z,P,ot,tt){let it={},at=P.attributes,X=0,j=ot.getAttributes();for(let k in j)if(j[k].location>=0){let D=at[k];D===void 0&&(k==="instanceMatrix"&&Z.instanceMatrix&&(D=Z.instanceMatrix),k==="instanceColor"&&Z.instanceColor&&(D=Z.instanceColor));let dt={};dt.attribute=D,D&&D.data&&(dt.data=D.data),it[k]=dt,X++}r.attributes=it,r.attributesNum=X,r.index=tt})(v,F,N,U),U!==null&&n.update(U,t.ELEMENT_ARRAY_BUFFER),(M||o)&&(o=!1,(function(Z,P,ot,tt){s();let it=tt.attributes,at=ot.getAttributes(),X=P.defaultAttributeValues;for(let j in at){let k=at[j];if(k.location>=0){let D=it[j];if(D===void 0&&(j==="instanceMatrix"&&Z.instanceMatrix&&(D=Z.instanceMatrix),j==="instanceColor"&&Z.instanceColor&&(D=Z.instanceColor)),D!==void 0){let dt=D.normalized,yt=D.itemSize,qt=n.get(D);if(qt===void 0)continue;let Ft=qt.buffer,Ct=qt.type,ae=qt.bytesPerElement,ue=Ct===t.INT||Ct===t.UNSIGNED_INT||D.gpuType===No;if(D.isInterleavedBufferAttribute){let mt=D.data,Nt=mt.stride,Yt=D.offset;if(mt.isInstancedInterleavedBuffer){for(let $t=0;$t<k.locationSize;$t++)S(k.location+$t,mt.meshPerAttribute);Z.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let $t=0;$t<k.locationSize;$t++)p(k.location+$t);t.bindBuffer(t.ARRAY_BUFFER,Ft);for(let $t=0;$t<k.locationSize;$t++)b(k.location+$t,yt/k.locationSize,Ct,dt,Nt*ae,(Yt+yt/k.locationSize*$t)*ae,ue)}else{if(D.isInstancedBufferAttribute){for(let mt=0;mt<k.locationSize;mt++)S(k.location+mt,D.meshPerAttribute);Z.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let mt=0;mt<k.locationSize;mt++)p(k.location+mt);t.bindBuffer(t.ARRAY_BUFFER,Ft);for(let mt=0;mt<k.locationSize;mt++)b(k.location+mt,yt/k.locationSize,Ct,dt,yt*ae,yt/k.locationSize*mt*ae,ue)}}else if(X!==void 0){let dt=X[j];if(dt!==void 0)switch(dt.length){case 2:t.vertexAttrib2fv(k.location,dt);break;case 3:t.vertexAttrib3fv(k.location,dt);break;case 4:t.vertexAttrib4fv(k.location,dt);break;default:t.vertexAttrib1fv(k.location,dt)}}}}g()})(v,x,N,F),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(U).buffer))},reset:f,resetDefaultState:w,dispose:function(){f();for(let v in i){let x=i[v];for(let N in x){let F=x[N];for(let U in F){let M=F[U];for(let I in M)u(M[I].object),delete M[I];delete F[U]}}delete i[v]}},releaseStatesOfGeometry:function(v){if(i[v.id]===void 0)return;let x=i[v.id];for(let N in x){let F=x[N];for(let U in F){let M=F[U];for(let I in M)u(M[I].object),delete M[I];delete F[U]}}delete i[v.id]},releaseStatesOfObject:function(v){for(let x in i){let N=i[x],F=v.isInstancedMesh===!0?v.id:0,U=N[F];if(U!==void 0){for(let M in U){let I=U[M];for(let Z in I)u(I[Z].object),delete I[Z];delete U[M]}delete N[F],Object.keys(N).length===0&&delete i[x]}}},releaseStatesOfProgram:function(v){for(let x in i){let N=i[x];for(let F in N){let U=N[F];if(U[v.id]===void 0)continue;let M=U[v.id];for(let I in M)u(M[I].object),delete M[I];delete U[v.id]}}},initAttributes:s,enableAttribute:p,disableUnusedAttributes:g}}function Yc(t,n,e){let i;this.setMode=function(a){i=a},this.render=function(a,r){t.drawArrays(i,a,r),e.update(r,i,1)},this.renderInstances=function(a,r,o){o!==0&&(t.drawArraysInstanced(i,a,r,o),e.update(r,i,o))},this.renderMultiDraw=function(a,r,o){if(o===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,a,0,r,0,o);let l=0;for(let u=0;u<o;u++)l+=r[u];e.update(l,i,1)}}function Kc(t,n,e,i){let a;function r(s){if(s==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";s="mediump"}return s==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=e.precision!==void 0?e.precision:"highp",l=r(o);l!==o&&(ne("WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let u=e.logarithmicDepthBuffer===!0,c=e.reversedDepthBuffer===!0&&n.has("EXT_clip_control");return e.reversedDepthBuffer===!0&&c===!1&&ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),{isWebGL2:!0,getMaxAnisotropy:function(){if(a!==void 0)return a;if(n.has("EXT_texture_filter_anisotropic")===!0){let s=n.get("EXT_texture_filter_anisotropic");a=t.getParameter(s.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a},getMaxPrecision:r,textureFormatReadable:function(s){return!(s!==bn&&i.convert(s)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))},textureTypeReadable:function(s){let p=s===Ye&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(s!==an&&i.convert(s)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&s!==ze&&!p)},precision:o,logarithmicDepthBuffer:u,reversedDepthBuffer:c,maxTextures:t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextures:t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize:t.getParameter(t.MAX_TEXTURE_SIZE),maxCubemapSize:t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:t.getParameter(t.MAX_VERTEX_ATTRIBS),maxVertexUniforms:t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:t.getParameter(t.MAX_VARYING_VECTORS),maxFragmentUniforms:t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),maxSamples:t.getParameter(t.MAX_SAMPLES),samples:t.getParameter(t.SAMPLES)}}function Zc(t){let n=this,e=null,i=0,a=!1,r=!1,o=new lc,l=new Pt,u={value:null,needsUpdate:!1};function c(s,p,S,g){let b=s!==null?s.length:0,f=null;if(b!==0){if(f=u.value,g!==!0||f===null){let w=S+4*b,v=p.matrixWorldInverse;l.getNormalMatrix(v),(f===null||f.length<w)&&(f=new Float32Array(w));for(let x=0,N=S;x!==b;++x,N+=4)o.copy(s[x]).applyMatrix4(v,l),o.normal.toArray(f,N),f[N+3]=o.constant}u.value=f,u.needsUpdate=!0}return n.numPlanes=b,n.numIntersection=0,f}this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(s,p){let S=s.length!==0||p||i!==0||a;return a=p,i=s.length,S},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(s,p){e=c(s,p,0)},this.setState=function(s,p,S){let g=s.clippingPlanes,b=s.clipIntersection,f=s.clipShadows,w=t.get(s);if(!a||g===null||g.length===0||r&&!f)r?c(null):(u.value!==e&&(u.value=e,u.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0);else{let v=r?0:i,x=4*v,N=w.clippingState||null;u.value=N,N=c(g,p,x,S);for(let F=0;F!==x;++F)N[F]=e[F];w.clippingState=N,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}}}ns.set(-1,0,0,0,1,0,0,0,1);var is=class extends se{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let e={width:t,height:t,depth:1},i=[e,e,e,e,e,e];this.texture=new Aa(i),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let e={tEquirect:{value:null}},i=`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,a=`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,r=new Vo(5,5,5),o=new _e({name:"CubemapFromEquirect",uniforms:fa(e),vertexShader:i,fragmentShader:a,side:We,blending:wn});o.uniforms.tEquirect.value=n;let l=new Xn(r,o),u=n.minFilter;return n.minFilter===Pn&&(n.minFilter=jt),(()=>{throw new Error("fromEquirectangularTexture is not supported by the Spline runtime")})().update(t,l),n.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(t,n=!0,e=!0,i=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,e,i);t.setRenderTarget(a)}};function Jc(t){let n=new WeakMap,e=new WeakMap;function i(r,o){return o===na?r.mapping=Ui:o===ia&&(r.mapping=fi),r}function a(r){let o=r.target;o.removeEventListener("dispose",a);let l=n.get(o);l!==void 0&&(n.delete(o),l.dispose())}return{get:function(r,o=!1){return r==null?null:o?(function(l){if(l&&l.isTexture){let u=l.mapping,c=u===na||u===ia,s=u===Ui||u===fi;if(c||s){let p=e.get(l),S=p!==void 0?p.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==S)throw new Error("PMREM environment-map conversion is not supported by the Spline runtime");if(p!==void 0)return p.texture;{let g=l.image;if(c&&g&&g.height>0||s&&g&&(function(b){let f=0;for(let w=0;w<6;w++)b[w]!==void 0&&f++;return f===6})(g))throw new Error("PMREM environment-map conversion is not supported by the Spline runtime");return null}}}return l})(r):(function(l){if(l&&l.isTexture){let u=l.mapping;if(u===na||u===ia){if(n.has(l))return i(n.get(l).texture,l.mapping);{let c=l.image;if(c&&c.height>0){let s=new is(c.height);return s.fromEquirectangularTexture(t,l),n.set(l,s),l.addEventListener("dispose",a),i(s.texture,l.mapping)}return null}}}return l})(r)},dispose:function(){n=new WeakMap,e=new WeakMap}}}function Qc(t){let n={};function e(i){if(n[i]!==void 0)return n[i];let a=t.getExtension(i);return n[i]=a,a}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let a=e(i);return a===null&&ll("WebGLRenderer: "+i+" extension not supported."),a}}}function tu(t,n,e,i){let a={},r=new WeakMap;function o(u){let c=u.target;c.index!==null&&n.remove(c.index);for(let p in c.attributes)n.remove(c.attributes[p]);c.removeEventListener("dispose",o),delete a[c.id];let s=r.get(c);s&&(n.remove(s),r.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,e.memory.geometries--}function l(u){let c=[],s=u.index,p=u.attributes.position,S=0;if(p===void 0)return;if(s!==null){let f=s.array;S=s.version;for(let w=0,v=f.length;w<v;w+=3){let x=f[w+0],N=f[w+1],F=f[w+2];c.push(x,N,N,F,F,x)}}else{let f=p.array;S=p.version;for(let w=0,v=f.length/3-1;w<v;w+=3){let x=w+0,N=w+1,F=w+2;c.push(x,N,N,F,F,x)}}let g=new(p.count>=65535?oc:sc)(c,1);g.version=S;let b=r.get(u);b&&n.remove(b),r.set(u,g)}return{get:function(u,c){return a[c.id]===!0||(c.addEventListener("dispose",o),a[c.id]=!0,e.memory.geometries++),c},update:function(u){let c=u.attributes;for(let s in c)n.update(c[s],t.ARRAY_BUFFER)},getWireframeAttribute:function(u){let c=r.get(u);if(c){let s=u.index;s!==null&&c.version<s.version&&l(u)}else l(u);return r.get(u)}}}function eu(t,n,e){let i,a,r;this.setMode=function(o){i=o},this.setIndex=function(o){a=o.type,r=o.bytesPerElement},this.render=function(o,l){t.drawElements(i,l,a,o*r),e.update(l,i,1)},this.renderInstances=function(o,l,u){u!==0&&(t.drawElementsInstanced(i,l,a,o*r,u),e.update(l,i,u))},this.renderMultiDraw=function(o,l,u){if(u===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,l,0,a,o,0,u);let c=0;for(let s=0;s<u;s++)c+=l[s];e.update(c,i,1)}}function nu(t){let n={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:n,programs:null,autoReset:!0,reset:function(){n.calls=0,n.triangles=0,n.points=0,n.lines=0},update:function(e,i,a){switch(n.calls++,i){case t.TRIANGLES:n.triangles+=a*(e/3);break;case t.LINES:n.lines+=a*(e/2);break;case t.LINE_STRIP:n.lines+=a*(e-1);break;case t.LINE_LOOP:n.lines+=a*e;break;case t.POINTS:n.points+=a*e;break;default:re("WebGLInfo: Unknown draw mode:",i)}}}}function iu(t,n,e){let i=new WeakMap,a=new ie;return{update:function(r,o,l){let u=r.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,s=c!==void 0?c.length:0,p=i.get(o);if(p===void 0||p.count!==s){let S=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",S)};p!==void 0&&p.texture.dispose();let g=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,w=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],N=0;g===!0&&(N=1),b===!0&&(N=2),f===!0&&(N=3);let F=o.attributes.position.count*N,U=1;F>n.maxTextureSize&&(U=Math.ceil(F/n.maxTextureSize),F=n.maxTextureSize);let M=new Float32Array(F*U*4*s),I=new zo(M,F,U,s);I.type=ze,I.needsUpdate=!0;let Z=4*N;for(let P=0;P<s;P++){let ot=w[P],tt=v[P],it=x[P],at=F*U*4*P;for(let X=0;X<ot.count;X++){let j=X*Z;g===!0&&(a.fromBufferAttribute(ot,X),M[at+j+0]=a.x,M[at+j+1]=a.y,M[at+j+2]=a.z,M[at+j+3]=0),b===!0&&(a.fromBufferAttribute(tt,X),M[at+j+4]=a.x,M[at+j+5]=a.y,M[at+j+6]=a.z,M[at+j+7]=0),f===!0&&(a.fromBufferAttribute(it,X),M[at+j+8]=a.x,M[at+j+9]=a.y,M[at+j+10]=a.z,M[at+j+11]=it.itemSize===4?a.w:1)}}p={count:s,texture:I,size:new _t(F,U)},i.set(o,p),o.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",r.morphTexture,e);else{let S=0;for(let b=0;b<u.length;b++)S+=u[b];let g=o.morphTargetsRelative?1:1-S;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}}}function au(t,n,e,i,a){let r=new WeakMap;function o(l){let u=l.target;u.removeEventListener("dispose",o),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:function(l){let u=a.render.frame,c=l.geometry,s=n.get(l,c);if(r.get(s)!==u&&(n.update(s),r.set(s,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(e.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return s},dispose:function(){r=new WeakMap}}}var ru={[qo]:"LINEAR_TONE_MAPPING",[jo]:"REINHARD_TONE_MAPPING",[Xo]:"CINEON_TONE_MAPPING",[$o]:"ACES_FILMIC_TONE_MAPPING",[Wo]:"AGX_TONE_MAPPING",[ko]:"NEUTRAL_TONE_MAPPING",[Go]:"CUSTOM_TONE_MAPPING"};function ou(t,n,e,i,a,r){let o=new se(n,e,{type:t,depthBuffer:a,stencilBuffer:r,samples:i?4:0,depthTexture:a?new vn(n,e):void 0}),l=new se(n,e,{type:Ye,depthBuffer:!1,stencilBuffer:!1}),u=new ya;u.setAttribute("position",new Di([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Di([0,2,0,0,2,0],2));let c,s=new ol({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Xn(u,s),S=new Do(-1,1,1,-1,0,1),g=null,b=null,f=!1,w=null,v=[],x=!1;this.setSize=function(N,F){o.setSize(N,F),l.setSize(N,F);for(let U=0;U<v.length;U++){let M=v[U];M.setSize&&M.setSize(N,F)}},this.setEffects=function(N){v=N,x=v.length>0&&v[0].isRenderPass===!0;let F=o.width,U=o.height;for(let M=0;M<v.length;M++){let I=v[M];I.setSize&&I.setSize(F,U)}},this.begin=function(N,F){if(f||N.toneMapping===mn&&v.length===0)return!1;if(w=F,F!==null){let U=F.width,M=F.height;(o.width!==U||o.height!==M)&&this.setSize(U,M)}return x===!1&&N.setRenderTarget(o),c=N.toneMapping,N.toneMapping=mn,!0},this.hasRenderPass=function(){return x},this.end=function(N,F){N.toneMapping=c,f=!0;let U=o,M=l;for(let I=0;I<v.length;I++){let Z=v[I];if(Z.enabled!==!1&&(Z.render(N,M,U,F),Z.needsSwap!==!1)){let P=U;U=M,M=P}}if(g!==N.outputColorSpace||b!==N.toneMapping){g=N.outputColorSpace,b=N.toneMapping,s.defines={},ce.getTransfer(g)===Zt&&(s.defines.SRGB_TRANSFER="");let I=ru[b];I&&(s.defines[I]=""),s.needsUpdate=!0}s.uniforms.tDiffuse.value=U.texture,N.setRenderTarget(w),N.render(p,S),w=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),l.dispose(),u.dispose(),s.dispose()}}var as=new zi,xa=new vn(1,1),rs=new zo,os=new fc,ss=new Aa,jr=[],qr=[],Yr=new Float32Array(16),Kr=new Float32Array(9),Zr=new Float32Array(4);function Jn(t,n,e){let i=t[0];if(i==null||i<=0||i>0)return t;let a=n*e,r=jr[a];if(r===void 0&&(r=new Float32Array(a),jr[a]=r),n!==0){i.toArray(r,0);for(let o=1,l=0;o!==n;++o)l+=e,t[o].toArray(r,l)}return r}function Te(t,n){if(t.length!==n.length)return!1;for(let e=0,i=t.length;e<i;e++)if(t[e]!==n[e])return!1;return!0}function be(t,n){for(let e=0,i=n.length;e<i;e++)t[e]=n[e]}function Hi(t,n){let e=qr[n];e===void 0&&(e=new Int32Array(n),qr[n]=e);for(let i=0;i!==n;++i)e[i]=t.allocateTextureUnit();return e}function su(t,n){let e=this.cache;e[0]!==n&&(t.uniform1f(this.addr,n),e[0]=n)}function lu(t,n){let e=this.cache;if(n.x!==void 0)(e[0]!==n.x||e[1]!==n.y)&&(t.uniform2f(this.addr,n.x,n.y),e[0]=n.x,e[1]=n.y);else{if(Te(e,n))return;t.uniform2fv(this.addr,n),be(e,n)}}function cu(t,n){let e=this.cache;if(n.x!==void 0)(e[0]!==n.x||e[1]!==n.y||e[2]!==n.z)&&(t.uniform3f(this.addr,n.x,n.y,n.z),e[0]=n.x,e[1]=n.y,e[2]=n.z);else if(n.r!==void 0)(e[0]!==n.r||e[1]!==n.g||e[2]!==n.b)&&(t.uniform3f(this.addr,n.r,n.g,n.b),e[0]=n.r,e[1]=n.g,e[2]=n.b);else{if(Te(e,n))return;t.uniform3fv(this.addr,n),be(e,n)}}function uu(t,n){let e=this.cache;if(n.x!==void 0)(e[0]!==n.x||e[1]!==n.y||e[2]!==n.z||e[3]!==n.w)&&(t.uniform4f(this.addr,n.x,n.y,n.z,n.w),e[0]=n.x,e[1]=n.y,e[2]=n.z,e[3]=n.w);else{if(Te(e,n))return;t.uniform4fv(this.addr,n),be(e,n)}}function du(t,n){let e=this.cache,i=n.elements;if(i===void 0){if(Te(e,n))return;t.uniformMatrix2fv(this.addr,!1,n),be(e,n)}else{if(Te(e,i))return;Zr.set(i),t.uniformMatrix2fv(this.addr,!1,Zr),be(e,i)}}function fu(t,n){let e=this.cache,i=n.elements;if(i===void 0){if(Te(e,n))return;t.uniformMatrix3fv(this.addr,!1,n),be(e,n)}else{if(Te(e,i))return;Kr.set(i),t.uniformMatrix3fv(this.addr,!1,Kr),be(e,i)}}function pu(t,n){let e=this.cache,i=n.elements;if(i===void 0){if(Te(e,n))return;t.uniformMatrix4fv(this.addr,!1,n),be(e,n)}else{if(Te(e,i))return;Yr.set(i),t.uniformMatrix4fv(this.addr,!1,Yr),be(e,i)}}function hu(t,n){let e=this.cache;e[0]!==n&&(t.uniform1i(this.addr,n),e[0]=n)}function mu(t,n){let e=this.cache;if(n.x!==void 0)(e[0]!==n.x||e[1]!==n.y)&&(t.uniform2i(this.addr,n.x,n.y),e[0]=n.x,e[1]=n.y);else{if(Te(e,n))return;t.uniform2iv(this.addr,n),be(e,n)}}function vu(t,n){let e=this.cache;if(n.x!==void 0)(e[0]!==n.x||e[1]!==n.y||e[2]!==n.z)&&(t.uniform3i(this.addr,n.x,n.y,n.z),e[0]=n.x,e[1]=n.y,e[2]=n.z);else{if(Te(e,n))return;t.uniform3iv(this.addr,n),be(e,n)}}function gu(t,n){let e=this.cache;if(n.x!==void 0)(e[0]!==n.x||e[1]!==n.y||e[2]!==n.z||e[3]!==n.w)&&(t.uniform4i(this.addr,n.x,n.y,n.z,n.w),e[0]=n.x,e[1]=n.y,e[2]=n.z,e[3]=n.w);else{if(Te(e,n))return;t.uniform4iv(this.addr,n),be(e,n)}}function _u(t,n){let e=this.cache;e[0]!==n&&(t.uniform1ui(this.addr,n),e[0]=n)}function xu(t,n){let e=this.cache;if(n.x!==void 0)(e[0]!==n.x||e[1]!==n.y)&&(t.uniform2ui(this.addr,n.x,n.y),e[0]=n.x,e[1]=n.y);else{if(Te(e,n))return;t.uniform2uiv(this.addr,n),be(e,n)}}function Su(t,n){let e=this.cache;if(n.x!==void 0)(e[0]!==n.x||e[1]!==n.y||e[2]!==n.z)&&(t.uniform3ui(this.addr,n.x,n.y,n.z),e[0]=n.x,e[1]=n.y,e[2]=n.z);else{if(Te(e,n))return;t.uniform3uiv(this.addr,n),be(e,n)}}function Tu(t,n){let e=this.cache;if(n.x!==void 0)(e[0]!==n.x||e[1]!==n.y||e[2]!==n.z||e[3]!==n.w)&&(t.uniform4ui(this.addr,n.x,n.y,n.z,n.w),e[0]=n.x,e[1]=n.y,e[2]=n.z,e[3]=n.w);else{if(Te(e,n))return;t.uniform4uiv(this.addr,n),be(e,n)}}function bu(t,n,e){let i,a=this.cache,r=e.allocateTextureUnit();a[0]!==r&&(t.uniform1i(this.addr,r),a[0]=r),this.type===t.SAMPLER_2D_SHADOW?(xa.compareFunction=e.isReversedDepthBuffer()?Ca:Ra,i=xa):i=as,e.setTexture2D(n||i,r)}function wu(t,n,e){let i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),e.setTexture3D(n||os,a)}function Eu(t,n,e){let i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),e.setTextureCube(n||ss,a)}function Mu(t,n,e){let i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),e.setTexture2DArray(n||rs,a)}function yu(t,n){t.uniform1fv(this.addr,n)}function Cu(t,n){let e=Jn(n,this.size,2);t.uniform2fv(this.addr,e)}function Ru(t,n){let e=Jn(n,this.size,3);t.uniform3fv(this.addr,e)}function Au(t,n){let e=Jn(n,this.size,4);t.uniform4fv(this.addr,e)}function Pu(t,n){let e=Jn(n,this.size,4);t.uniformMatrix2fv(this.addr,!1,e)}function Du(t,n){let e=Jn(n,this.size,9);t.uniformMatrix3fv(this.addr,!1,e)}function Lu(t,n){let e=Jn(n,this.size,16);t.uniformMatrix4fv(this.addr,!1,e)}function Uu(t,n){t.uniform1iv(this.addr,n)}function Nu(t,n){t.uniform2iv(this.addr,n)}function Iu(t,n){t.uniform3iv(this.addr,n)}function Ou(t,n){t.uniform4iv(this.addr,n)}function Fu(t,n){t.uniform1uiv(this.addr,n)}function zu(t,n){t.uniform2uiv(this.addr,n)}function Bu(t,n){t.uniform3uiv(this.addr,n)}function Vu(t,n){t.uniform4uiv(this.addr,n)}function Hu(t,n,e){let i,a=this.cache,r=n.length,o=Hi(e,r);Te(a,o)||(t.uniform1iv(this.addr,o),be(a,o)),i=this.type===t.SAMPLER_2D_SHADOW?xa:as;for(let l=0;l!==r;++l)e.setTexture2D(n[l]||i,o[l])}function Gu(t,n,e){let i=this.cache,a=n.length,r=Hi(e,a);Te(i,r)||(t.uniform1iv(this.addr,r),be(i,r));for(let o=0;o!==a;++o)e.setTexture3D(n[o]||os,r[o])}function ku(t,n,e){let i=this.cache,a=n.length,r=Hi(e,a);Te(i,r)||(t.uniform1iv(this.addr,r),be(i,r));for(let o=0;o!==a;++o)e.setTextureCube(n[o]||ss,r[o])}function Wu(t,n,e){let i=this.cache,a=n.length,r=Hi(e,a);Te(i,r)||(t.uniform1iv(this.addr,r),be(i,r));for(let o=0;o!==a;++o)e.setTexture2DArray(n[o]||rs,r[o])}var $u=class{constructor(t,n,e){this.id=t,this.addr=e,this.cache=[],this.type=n.type,this.setValue=(function(i){switch(i){case 5126:return su;case 35664:return lu;case 35665:return cu;case 35666:return uu;case 35674:return du;case 35675:return fu;case 35676:return pu;case 5124:case 35670:return hu;case 35667:case 35671:return mu;case 35668:case 35672:return vu;case 35669:case 35673:return gu;case 5125:return _u;case 36294:return xu;case 36295:return Su;case 36296:return Tu;case 35678:case 36198:case 36298:case 36306:case 35682:return bu;case 35679:case 36299:case 36307:return wu;case 35680:case 36300:case 36308:case 36293:return Eu;case 36289:case 36303:case 36311:case 36292:return Mu}})(n.type)}},Xu=class{constructor(t,n,e){this.id=t,this.addr=e,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=(function(i){switch(i){case 5126:return yu;case 35664:return Cu;case 35665:return Ru;case 35666:return Au;case 35674:return Pu;case 35675:return Du;case 35676:return Lu;case 5124:case 35670:return Uu;case 35667:case 35671:return Nu;case 35668:case 35672:return Iu;case 35669:case 35673:return Ou;case 5125:return Fu;case 36294:return zu;case 36295:return Bu;case 36296:return Vu;case 35678:case 36198:case 36298:case 36306:case 35682:return Hu;case 35679:case 36299:case 36307:return Gu;case 35680:case 36300:case 36308:case 36293:return ku;case 36289:case 36303:case 36311:case 36292:return Wu}})(n.type)}},ju=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,e){if(n===void 0)return;let i=this.seq;for(let a=0,r=i.length;a!==r;++a){let o=i[a];o.setValue(t,n[o.id],e)}}},aa=/(\w+)(\])?(\[|\.)?/g;function Jr(t,n){t.seq.push(n),t.map[n.id]=n}function qu(t,n,e){let i=t.name,a=i.length;for(aa.lastIndex=0;;){let r=aa.exec(i),o=aa.lastIndex,l=r[1],u=r[2]==="]",c=r[3];if(u&&(l|=0),c===void 0||c==="["&&o+2===a){Jr(e,c===void 0?new $u(l,t,n):new Xu(l,t,n));break}{let s=e.map[l];s===void 0&&(s=new ju(l),Jr(e,s)),e=s}}}var Ai=class{constructor(t,n){this.seq=[],this.map={};let e=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<e;++r){let o=t.getActiveUniform(n,r);qu(o,t.getUniformLocation(n,o.name),this)}let i=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(r):a.push(r);i.length>0&&(this.seq=i.concat(a))}setValue(t,n,e,i){let a=this.map[n];a!==void 0&&a.setValue(t,e,i)}setOptional(t,n,e){let i=n[e];i!==void 0&&this.setValue(t,e,i)}static upload(t,n,e,i){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=e[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,n){let e=[];for(let i=0,a=t.length;i!==a;++i){let r=t[i];r.id in n&&e.push(r)}return e}};function Qr(t,n,e){let i=t.createShader(n);return t.shaderSource(i,e),t.compileShader(i),i}var Yu=0,to=new Pt;function eo(t,n,e){let i=t.getShaderParameter(n,t.COMPILE_STATUS),a=(t.getShaderInfoLog(n)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+a+`

`+(function(l,u){let c=l.split(`
`),s=[],p=Math.max(u-6,0),S=Math.min(u+6,c.length);for(let g=p;g<S;g++){let b=g+1;s.push(`${b===u?">":" "} ${b}: ${c[g]}`)}return s.join(`
`)})(t.getShaderSource(n),o)}return a}function Ku(t,n){let e=(function(i){ce._getMatrix(to,ce.workingColorSpace,i);let a=`mat3( ${to.elements.map(r=>r.toFixed(4))} )`;switch(ce.getTransfer(i)){case Ho:return[a,"LinearTransferOETF"];case Zt:return[a,"sRGBTransferOETF"];default:return ne("WebGLProgram: Unsupported color space: ",i),[a,"LinearTransferOETF"]}})(n);return[`vec4 ${t}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Zu={[qo]:"Linear",[jo]:"Reinhard",[Xo]:"Cineon",[$o]:"ACESFilmic",[Wo]:"AgX",[ko]:"Neutral",[Go]:"Custom"};function Ju(t,n){let e=Zu[n];return e===void 0?(ne("WebGLProgram: Unsupported toneMapping:",n),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Mi=new Mt;function ei(t){return t!==""}function no(t,n){let e=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function io(t,n){return t.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}var Qu=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sa(t){return t.replace(Qu,ed)}var td=new Map;function ed(t,n){let e=pt[n];if(e===void 0){let i=td.get(n);if(i===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+n+">");e=pt[i],ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i)}return Sa(e)}var nd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ao(t){return t.replace(nd,id)}function id(t,n,e,i){let a="";for(let r=parseInt(n);r<parseInt(e);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function ro(t){let n=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?n+=`
#define HIGH_PRECISION`:t.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}var ad={[si]:"SHADOWMAP_TYPE_PCF",[ai]:"SHADOWMAP_TYPE_VSM"},rd={[Ui]:"ENVMAP_TYPE_CUBE",[fi]:"ENVMAP_TYPE_CUBE",[Vi]:"ENVMAP_TYPE_CUBE_UV"},od={[fi]:"ENVMAP_MODE_REFRACTION"},sd={[dc]:"ENVMAP_BLENDING_MULTIPLY",[uc]:"ENVMAP_BLENDING_MIX",[cc]:"ENVMAP_BLENDING_ADD"};function ld(t,n,e,i){let a,r,o=t.getContext(),l=e.defines,u=e.vertexShader,c=e.fragmentShader,s=(function(tt){return ad[tt.shadowMapType]||"SHADOWMAP_TYPE_BASIC"})(e),p=(function(tt){return tt.envMap===!1?"ENVMAP_TYPE_CUBE":rd[tt.envMapMode]||"ENVMAP_TYPE_CUBE"})(e),S=(function(tt){return tt.envMap===!1?"ENVMAP_MODE_REFLECTION":od[tt.envMapMode]||"ENVMAP_MODE_REFLECTION"})(e),g=(function(tt){return tt.envMap===!1?"ENVMAP_BLENDING_NONE":sd[tt.combine]||"ENVMAP_BLENDING_NONE"})(e),b=(function(tt){let it=tt.envMapCubeUVHeight;if(it===null)return null;let at=Math.log2(it)-2,X=1/it;return{texelWidth:1/(3*Math.max(Math.pow(2,at),112)),texelHeight:X,maxMip:at}})(e),f=(function(tt){return[tt.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",tt.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ei).join(`
`)})(e),w=(function(tt){let it=[];for(let at in tt){let X=tt[at];X!==!1&&it.push("#define "+at+" "+X)}return it.join(`
`)})(l),v=o.createProgram(),x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(a=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(ei).join(`
`),a.length>0&&(a+=`
`),r=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(ei).join(`
`),r.length>0&&(r+=`
`)):(a=[ro(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+S:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+s:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ei).join(`
`),r=[ro(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.envMap?"#define "+S:"",e.envMap?"#define "+g:"",b?"#define CUBEUV_TEXEL_WIDTH "+b.texelWidth:"",b?"#define CUBEUV_TEXEL_HEIGHT "+b.texelHeight:"",b?"#define CUBEUV_MAX_MIP "+b.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+s:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mn?"#define TONE_MAPPING":"",e.toneMapping!==mn?pt.tonemapping_pars_fragment:"",e.toneMapping!==mn?Ju("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,Ku("linearToOutputTexel",e.outputColorSpace),(ce.getLuminanceCoefficients(Mi),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Mi.x.toFixed(4)}, ${Mi.y.toFixed(4)}, ${Mi.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ei).join(`
`)),u=Sa(u),u=no(u,e),u=io(u,e),c=Sa(c),c=no(c,e),c=io(c,e),u=ao(u),c=ao(c),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,a=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+a,r=["#define varying in",e.glslVersion===zr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+r);let N,F,U=x+a+u,M=x+r+c,I=Qr(o,o.VERTEX_SHADER,U),Z=Qr(o,o.FRAGMENT_SHADER,M);function P(tt){if(t.debug.checkShaderErrors){let it=o.getProgramInfoLog(v)||"",at=o.getShaderInfoLog(I)||"",X=o.getShaderInfoLog(Z)||"",j=it.trim(),k=at.trim(),D=X.trim(),dt=!0,yt=!0;if(o.getProgramParameter(v,o.LINK_STATUS)===!1)if(dt=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(o,v,I,Z);else{let qt=eo(o,I,"vertex"),Ft=eo(o,Z,"fragment");re("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(v,o.VALIDATE_STATUS)+`

Material Name: `+tt.name+`
Material Type: `+tt.type+`

Program Info Log: `+j+`
`+qt+`
`+Ft)}else j!==""?ne("WebGLProgram: Program Info Log:",j):(k===""||D==="")&&(yt=!1);yt&&(tt.diagnostics={runnable:dt,programLog:j,vertexShader:{log:k,prefix:a},fragmentShader:{log:D,prefix:r}})}o.deleteShader(I),o.deleteShader(Z),N=new Ai(o,v),F=(function(it,at){let X={},j=it.getProgramParameter(at,it.ACTIVE_ATTRIBUTES);for(let k=0;k<j;k++){let D=it.getActiveAttrib(at,k),dt=D.name,yt=1;D.type===it.FLOAT_MAT2&&(yt=2),D.type===it.FLOAT_MAT3&&(yt=3),D.type===it.FLOAT_MAT4&&(yt=4),X[dt]={type:D.type,location:it.getAttribLocation(at,dt),locationSize:yt}}return X})(o,v)}o.attachShader(v,I),o.attachShader(v,Z),e.index0AttributeName!==void 0?o.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&o.bindAttribLocation(v,0,"position"),o.linkProgram(v),this.getUniforms=function(){return N===void 0&&P(this),N},this.getAttributes=function(){return F===void 0&&P(this),F};let ot=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ot===!1&&(ot=o.getProgramParameter(v,37297)),ot},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Yu++,this.cacheKey=n,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=Z,this}var cd=0,ud=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,e){let i=this._getShaderCacheForMaterial(t);return i.has(n)===!1&&(i.add(n),n.usedTimes++),i.has(e)===!1&&(i.add(e),e.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let e of n)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,e=n.get(t);return e===void 0&&(e=new Set,n.set(t,e)),e}_getShaderStage(t){let n=this.shaderCache,e=n.get(t);return e===void 0&&(e=new dd(t),n.set(t,e)),e}},dd=class{constructor(t){this.id=cd++,this.code=t,this.usedTimes=0}};function fd(t){return t===$n||t===ua||t===da}function pd(t,n,e,i,a,r){let o=new Hl,l=new ud,u=new Set,c=[],s=new Map,p=i.logarithmicDepthBuffer,S=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(f){return u.add(f),f===0?"uv":`uv${f}`}return{getParameters:function(f,w,v,x,N,F){let U=x.fog,M=N.geometry,I=f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial?x.environment:null,Z=f.isMeshStandardMaterial||f.isMeshLambertMaterial&&!f.envMap||f.isMeshPhongMaterial&&!f.envMap,P=n.get(f.envMap||I,Z),ot=P&&P.mapping===Vi?P.image.height:null,tt=g[f.type];f.precision!==null&&(S=i.getMaxPrecision(f.precision),S!==f.precision&&ne("WebGLProgram.getParameters:",f.precision,"not supported, using",S,"instead."));let it,at,X,j,k=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,D=k!==void 0?k.length:0,dt=0;if(M.morphAttributes.position!==void 0&&(dt=1),M.morphAttributes.normal!==void 0&&(dt=2),M.morphAttributes.color!==void 0&&(dt=3),tt){let Ve=nn[tt];it=Ve.vertexShader,at=Ve.fragmentShader}else{it=f.vertexShader,at=f.fragmentShader;let Ve=l.getVertexShaderStage(f),gn=l.getFragmentShaderStage(f);l.update(f,Ve,gn),X=Ve.id,j=gn.id}let yt=t.getRenderTarget(),qt=t.state.buffers.depth.getReversed(),Ft=N.isInstancedMesh===!0,Ct=N.isBatchedMesh===!0,ae=!!f.map,ue=!!f.matcap,mt=!!P,Nt=!!f.aoMap,Yt=!!f.lightMap,$t=!!f.bumpMap&&f.wireframe===!1,T=!!f.normalMap,m=!!f.displacementMap,y=!!f.emissiveMap,V=!!f.metalnessMap,h=!!f.roughnessMap,R=f.anisotropy>0,A=f.clearcoat>0,_=f.dispersion>0,B=f.iridescence>0,z=f.sheen>0,et=f.transmission>0,q=R&&!!f.anisotropyMap,wt=A&&!!f.clearcoatMap,st=A&&!!f.clearcoatNormalMap,ht=A&&!!f.clearcoatRoughnessMap,W=B&&!!f.iridescenceMap,Xt=B&&!!f.iridescenceThicknessMap,G=z&&!!f.sheenColorMap,Q=z&&!!f.sheenRoughnessMap,Dt=!!f.specularMap,Vt=!!f.specularColorMap,de=!!f.specularIntensityMap,fe=et&&!!f.transmissionMap,we=et&&!!f.thicknessMap,vt=!!f.gradientMap,Ht=!!f.alphaMap,At=f.alphaTest>0,Qt=!!f.alphaHash,te=!!f.extensions,me=mn;f.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(me=t.toneMapping);let He={shaderID:tt,shaderType:f.type,shaderName:f.name,vertexShader:it,fragmentShader:at,defines:f.defines,customVertexShaderID:X,customFragmentShaderID:j,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:S,batching:Ct,batchingColor:Ct&&N._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&N.instanceColor!==null,instancingMorph:Ft&&N.morphTexture!==null,outputColorSpace:yt===null?t.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:ce.workingColorSpace,alphaToCoverage:!!f.alphaToCoverage,map:ae,matcap:ue,envMap:mt,envMapMode:mt&&P.mapping,envMapCubeUVHeight:ot,aoMap:Nt,lightMap:Yt,bumpMap:$t,normalMap:T,displacementMap:m,emissiveMap:y,normalMapObjectSpace:T&&f.normalMapType===Gl,normalMapTangentSpace:T&&f.normalMapType===Lr,packedNormalMap:T&&f.normalMapType===Lr&&fd(f.normalMap.format),metalnessMap:V,roughnessMap:h,anisotropy:R,anisotropyMap:q,clearcoat:A,clearcoatMap:wt,clearcoatNormalMap:st,clearcoatRoughnessMap:ht,dispersion:_,iridescence:B,iridescenceMap:W,iridescenceThicknessMap:Xt,sheen:z,sheenColorMap:G,sheenRoughnessMap:Q,specularMap:Dt,specularColorMap:Vt,specularIntensityMap:de,transmission:et,transmissionMap:fe,thicknessMap:we,gradientMap:vt,opaque:f.transparent===!1&&f.blending===Ci&&f.alphaToCoverage===!1,alphaMap:Ht,alphaTest:At,alphaHash:Qt,combine:f.combine,mapUv:ae&&b(f.map.channel),aoMapUv:Nt&&b(f.aoMap.channel),lightMapUv:Yt&&b(f.lightMap.channel),bumpMapUv:$t&&b(f.bumpMap.channel),normalMapUv:T&&b(f.normalMap.channel),displacementMapUv:m&&b(f.displacementMap.channel),emissiveMapUv:y&&b(f.emissiveMap.channel),metalnessMapUv:V&&b(f.metalnessMap.channel),roughnessMapUv:h&&b(f.roughnessMap.channel),anisotropyMapUv:q&&b(f.anisotropyMap.channel),clearcoatMapUv:wt&&b(f.clearcoatMap.channel),clearcoatNormalMapUv:st&&b(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&b(f.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&b(f.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&b(f.iridescenceThicknessMap.channel),sheenColorMapUv:G&&b(f.sheenColorMap.channel),sheenRoughnessMapUv:Q&&b(f.sheenRoughnessMap.channel),specularMapUv:Dt&&b(f.specularMap.channel),specularColorMapUv:Vt&&b(f.specularColorMap.channel),specularIntensityMapUv:de&&b(f.specularIntensityMap.channel),transmissionMapUv:fe&&b(f.transmissionMap.channel),thicknessMapUv:we&&b(f.thicknessMap.channel),alphaMapUv:Ht&&b(f.alphaMap.channel),vertexTangents:!!M.attributes.tangent&&(T||R),vertexNormals:!!M.attributes.normal,vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!M.attributes.color&&M.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!M.attributes.uv&&(ae||Ht),fog:!!U,useFog:f.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:f.wireframe===!1&&(f.flatShading===!0||M.attributes.normal===void 0&&T===!1&&(f.isMeshLambertMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isMeshPhysicalMaterial)),sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:qt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:M.attributes.position!==void 0,morphTargets:M.morphAttributes.position!==void 0,morphNormals:M.morphAttributes.normal!==void 0,morphColors:M.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:dt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:f.dithering,shadowMapEnabled:t.shadowMap.enabled&&v.length>0,shadowMapType:t.shadowMap.type,toneMapping:me,decodeVideoTexture:ae&&f.map.isVideoTexture===!0&&ce.getTransfer(f.map.colorSpace)===Zt,decodeVideoTextureEmissive:y&&f.emissiveMap.isVideoTexture===!0&&ce.getTransfer(f.emissiveMap.colorSpace)===Zt,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===rn,flipSided:f.side===We,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:te&&f.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&f.extensions.multiDraw===!0||Ct)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return He.vertexUv1s=u.has(1),He.vertexUv2s=u.has(2),He.vertexUv3s=u.has(3),u.clear(),He},getProgramCacheKey:function(f){let w=[];if(f.shaderID?w.push(f.shaderID):(w.push(f.customVertexShaderID),w.push(f.customFragmentShaderID)),f.defines!==void 0)for(let v in f.defines)w.push(v),w.push(f.defines[v]);return f.isRawShaderMaterial===!1&&((function(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)})(w,f),(function(v,x){o.disableAll(),x.instancing&&o.enable(0),x.instancingColor&&o.enable(1),x.instancingMorph&&o.enable(2),x.matcap&&o.enable(3),x.envMap&&o.enable(4),x.normalMapObjectSpace&&o.enable(5),x.normalMapTangentSpace&&o.enable(6),x.clearcoat&&o.enable(7),x.iridescence&&o.enable(8),x.alphaTest&&o.enable(9),x.vertexColors&&o.enable(10),x.vertexAlphas&&o.enable(11),x.vertexUv1s&&o.enable(12),x.vertexUv2s&&o.enable(13),x.vertexUv3s&&o.enable(14),x.vertexTangents&&o.enable(15),x.anisotropy&&o.enable(16),x.alphaHash&&o.enable(17),x.batching&&o.enable(18),x.dispersion&&o.enable(19),x.batchingColor&&o.enable(20),x.gradientMap&&o.enable(21),x.packedNormalMap&&o.enable(22),x.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),x.numLightProbeGrids>0&&o.enable(22),x.hasPositionAttribute&&o.enable(23),v.push(o.mask)})(w,f),w.push(t.outputColorSpace)),w.push(f.customProgramCacheKey),w.join()},getUniforms:function(f){let w,v=g[f.type];if(v){let x=nn[v];w=Zn.clone(x.uniforms)}else w=f.uniforms;return w},acquireProgram:function(f,w){let v=s.get(w);return v!==void 0?++v.usedTimes:(v=new ld(t,w,f,a),c.push(v),s.set(w,v)),v},releaseProgram:function(f){if(--f.usedTimes===0){let w=c.indexOf(f);c[w]=c[c.length-1],c.pop(),s.delete(f.cacheKey),f.destroy()}},releaseShaderCache:function(f){l.remove(f)},programs:c,dispose:function(){l.dispose()}}}function hd(){let t=new WeakMap;return{has:function(n){return t.has(n)},get:function(n){let e=t.get(n);return e===void 0&&(e={},t.set(n,e)),e},remove:function(n){t.delete(n)},update:function(n,e,i){t.get(n)[e]=i},dispose:function(){t=new WeakMap}}}function md(t,n){return t.groupOrder!==n.groupOrder?t.groupOrder-n.groupOrder:t.renderOrder!==n.renderOrder?t.renderOrder-n.renderOrder:t.material.id!==n.material.id?t.material.id-n.material.id:t.materialVariant!==n.materialVariant?t.materialVariant-n.materialVariant:t.z!==n.z?t.z-n.z:t.id-n.id}function oo(t,n){return t.groupOrder!==n.groupOrder?t.groupOrder-n.groupOrder:t.renderOrder!==n.renderOrder?t.renderOrder-n.renderOrder:t.z!==n.z?n.z-t.z:t.id-n.id}function so(){let t=[],n=0,e=[],i=[],a=[];function r(l){let u=0;return l.isInstancedMesh&&(u+=2),l.isSkinnedMesh&&(u+=1),u}function o(l,u,c,s,p,S){let g=t[n];return g===void 0?(g={id:l.id,object:l,geometry:u,material:c,materialVariant:r(l),groupOrder:s,renderOrder:l.renderOrder,z:p,group:S},t[n]=g):(g.id=l.id,g.object=l,g.geometry=u,g.material=c,g.materialVariant=r(l),g.groupOrder=s,g.renderOrder=l.renderOrder,g.z=p,g.group=S),n++,g}return{opaque:e,transmissive:i,transparent:a,init:function(){n=0,e.length=0,i.length=0,a.length=0},push:function(l,u,c,s,p,S){let g=o(l,u,c,s,p,S);c.transmission>0?i.push(g):c.transparent===!0?a.push(g):e.push(g)},unshift:function(l,u,c,s,p,S){let g=o(l,u,c,s,p,S);c.transmission>0?i.unshift(g):c.transparent===!0?a.unshift(g):e.unshift(g)},finish:function(){for(let l=n,u=t.length;l<u;l++){let c=t[l];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(l,u,c){e.length>1&&e.sort(l||md),i.length>1&&i.sort(u||oo),a.length>1&&a.sort(u||oo),c&&(e.reverse(),i.reverse(),a.reverse())}}}function vd(){let t=new WeakMap;return{get:function(n,e){let i,a=t.get(n);return a===void 0?(i=new so,t.set(n,[i])):e>=a.length?(i=new so,a.push(i)):i=a[e],i},dispose:function(){t=new WeakMap}}}function gd(){let t={};return{get:function(n){if(t[n.id]!==void 0)return t[n.id];let e;switch(n.type){case"DirectionalLight":e={direction:new Mt,color:new oe};break;case"SpotLight":e={position:new Mt,direction:new Mt,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Mt,color:new oe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Mt,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":e={color:new oe,position:new Mt,halfWidth:new Mt,halfHeight:new Mt}}return t[n.id]=e,e}}}var _d=0;function xd(t,n){return(n.castShadow?2:0)-(t.castShadow?2:0)+(n.map?1:0)-(t.map?1:0)}function Sd(t){let n=new gd,e=(function(){let l={};return{get:function(u){if(l[u.id]!==void 0)return l[u.id];let c;switch(u.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3}}return l[u.id]=c,c}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new Mt);let a=new Mt,r=new En,o=new En;return{setup:function(l){let u=0,c=0,s=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let p=0,S=0,g=0,b=0,f=0,w=0,v=0,x=0,N=0,F=0,U=0;l.sort(xd);for(let I=0,Z=l.length;I<Z;I++){let P=l[I],ot=P.color,tt=P.intensity,it=P.distance,at=null;if(P.shadow&&P.shadow.map&&(at=P.shadow.map.texture.format===$n?P.shadow.map.texture:P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=ot.r*tt,c+=ot.g*tt,s+=ot.b*tt;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],tt);U++}else if(P.isDirectionalLight){let X=n.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,k=e.get(P);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=at,i.directionalShadowMatrix[p]=P.shadow.matrix,w++}i.directional[p]=X,p++}else if(P.isSpotLight){let X=n.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(ot).multiplyScalar(tt),X.distance=it,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[g]=X;let j=P.shadow;if(P.map&&(i.spotLightMap[N]=P.map,N++,j.updateMatrices(P),P.castShadow&&F++),i.spotLightMatrix[g]=j.matrix,P.castShadow){let k=e.get(P);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,i.spotShadow[g]=k,i.spotShadowMap[g]=at,x++}g++}else if(P.isRectAreaLight){let X=n.get(P);X.color.copy(ot).multiplyScalar(tt),X.halfWidth.set(.5*P.width,0,0),X.halfHeight.set(0,.5*P.height,0),i.rectArea[b]=X,b++}else if(P.isPointLight){let X=n.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let j=P.shadow,k=e.get(P);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,k.shadowCameraNear=j.camera.near,k.shadowCameraFar=j.camera.far,i.pointShadow[S]=k,i.pointShadowMap[S]=at,i.pointShadowMatrix[S]=P.shadow.matrix,v++}i.point[S]=X,S++}else if(P.isHemisphereLight){let X=n.get(P);X.skyColor.copy(P.color).multiplyScalar(tt),X.groundColor.copy(P.groundColor).multiplyScalar(tt),i.hemi[f]=X,f++}}b>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Y.LTC_FLOAT_1,i.rectAreaLTC2=Y.LTC_FLOAT_2):(i.rectAreaLTC1=Y.LTC_HALF_1,i.rectAreaLTC2=Y.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=c,i.ambient[2]=s;let M=i.hash;(M.directionalLength!==p||M.pointLength!==S||M.spotLength!==g||M.rectAreaLength!==b||M.hemiLength!==f||M.numDirectionalShadows!==w||M.numPointShadows!==v||M.numSpotShadows!==x||M.numSpotMaps!==N||M.numLightProbes!==U)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=b,i.point.length=S,i.hemi.length=f,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+N-F,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=U,M.directionalLength=p,M.pointLength=S,M.spotLength=g,M.rectAreaLength=b,M.hemiLength=f,M.numDirectionalShadows=w,M.numPointShadows=v,M.numSpotShadows=x,M.numSpotMaps=N,M.numLightProbes=U,i.version=_d++)},setupView:function(l,u){let c=0,s=0,p=0,S=0,g=0,b=u.matrixWorldInverse;for(let f=0,w=l.length;f<w;f++){let v=l[f];if(v.isDirectionalLight){let x=i.directional[c];x.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(a),x.direction.transformDirection(b),c++}else if(v.isSpotLight){let x=i.spot[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(b),x.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(a),x.direction.transformDirection(b),p++}else if(v.isRectAreaLight){let x=i.rectArea[S];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(b),o.identity(),r.copy(v.matrixWorld),r.premultiply(b),o.extractRotation(r),x.halfWidth.set(.5*v.width,0,0),x.halfHeight.set(0,.5*v.height,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),S++}else if(v.isPointLight){let x=i.point[s];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(b),s++}else if(v.isHemisphereLight){let x=i.hemi[g];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(b),g++}}},state:i}}function lo(t){let n=new Sd(t),e=[],i=[],a=[],r={lightsArray:e,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:n,transmissionRenderTarget:{},textureUnits:0};return{init:function(o){r.camera=o,e.length=0,i.length=0,a.length=0},state:r,setupLights:function(){n.setup(e)},setupLightsView:function(o){n.setupView(e,o)},pushLight:function(o){e.push(o)},pushShadow:function(o){i.push(o)},pushLightProbeGrid:function(o){a.push(o)}}}function Td(t){let n=new WeakMap;return{get:function(e,i=0){let a,r=n.get(e);return r===void 0?(a=new lo(t),n.set(e,[a])):i>=r.length?(a=new lo(t),r.push(a)):a=r[i],a},dispose:function(){n=new WeakMap}}}var bd=[new Mt(1,0,0),new Mt(-1,0,0),new Mt(0,1,0),new Mt(0,-1,0),new Mt(0,0,1),new Mt(0,0,-1)],wd=[new Mt(0,-1,0),new Mt(0,-1,0),new Mt(0,0,1),new Mt(0,0,-1),new Mt(0,-1,0),new Mt(0,-1,0)],co=new En,ni=new Mt,ra=new Mt;function Ed(t,n,e){let i=new Ao,a=new _t,r=new _t,o=new ie,l=new Wl,u=new $l,c={},s=e.maxTextureSize,p={[ci]:We,[We]:ci,[rn]:rn},S=new _e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`}),g=S.clone();g.defines.HORIZONTAL_PASS=1;let b=new ya;b.setAttribute("position",new Xl(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let f=new Xn(b,S),w=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=si;let v=this.type;function x(M,I){let Z=n.update(f);S.defines.VSM_SAMPLES!==M.blurSamples&&(S.defines.VSM_SAMPLES=M.blurSamples,g.defines.VSM_SAMPLES=M.blurSamples,S.needsUpdate=!0,g.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new se(a.x,a.y,{format:$n,type:Ye})),S.uniforms.shadow_pass.value=M.map.depthTexture,S.uniforms.resolution.value=M.mapSize,S.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(I,null,Z,S,f,null),g.uniforms.shadow_pass.value=M.mapPass.texture,g.uniforms.resolution.value=M.mapSize,g.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(I,null,Z,g,f,null)}function N(M,I,Z,P){let ot=null,tt=Z.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(tt!==void 0)ot=tt;else if(ot=Z.isPointLight===!0?u:l,t.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let it=ot.uuid,at=I.uuid,X=c[it];X===void 0&&(X={},c[it]=X);let j=X[at];j===void 0&&(j=ot.clone(),X[at]=j,I.addEventListener("dispose",U)),ot=j}return ot.visible=I.visible,ot.wireframe=I.wireframe,ot.side=P===ai?I.shadowSide!==null?I.shadowSide:I.side:I.shadowSide!==null?I.shadowSide:p[I.side],ot.alphaMap=I.alphaMap,ot.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,ot.map=I.map,ot.clipShadows=I.clipShadows,ot.clippingPlanes=I.clippingPlanes,ot.clipIntersection=I.clipIntersection,ot.displacementMap=I.displacementMap,ot.displacementScale=I.displacementScale,ot.displacementBias=I.displacementBias,ot.wireframeLinewidth=I.wireframeLinewidth,ot.linewidth=I.linewidth,Z.isPointLight===!0&&ot.isMeshDistanceMaterial===!0&&(t.properties.get(ot).light=Z),ot}function F(M,I,Z,P,ot){if(M.visible===!1)return;if(M.layers.test(I.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&ot===ai)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,M.matrixWorld);let it=n.update(M),at=M.material;if(Array.isArray(at)){let X=it.groups;for(let j=0,k=X.length;j<k;j++){let D=X[j],dt=at[D.materialIndex];if(dt&&dt.visible){let yt=N(M,dt,P,ot);M.onBeforeShadow(t,M,I,Z,it,yt,D),t.renderBufferDirect(Z,null,it,yt,M,D),M.onAfterShadow(t,M,I,Z,it,yt,D)}}}else if(at.visible){let X=N(M,at,P,ot);M.onBeforeShadow(t,M,I,Z,it,X,null),t.renderBufferDirect(Z,null,it,X,M,null),M.onAfterShadow(t,M,I,Z,it,X,null)}}let tt=M.children;for(let it=0,at=tt.length;it<at;it++)F(tt[it],I,Z,P,ot)}function U(M){M.target.removeEventListener("dispose",U);for(let I in c){let Z=c[I],P=M.target.uuid;P in Z&&(Z[P].dispose(),delete Z[P])}}this.render=function(M,I,Z){if(w.enabled===!1||w.autoUpdate===!1&&w.needsUpdate===!1||M.length===0)return;this.type===jl&&(ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=si);let P=t.getRenderTarget(),ot=t.getActiveCubeFace(),tt=t.getActiveMipmapLevel(),it=t.state;it.setBlending(wn),it.buffers.depth.getReversed()===!0?it.buffers.color.setClear(0,0,0,0):it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);let at=v!==this.type;at&&I.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(j=>j.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,j=M.length;X<j;X++){let k=M[X],D=k.shadow;if(D===void 0){ne("WebGLShadowMap:",k,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;a.copy(D.mapSize);let dt=D.getFrameExtents();a.multiply(dt),r.copy(D.mapSize),(a.x>s||a.y>s)&&(a.x>s&&(r.x=Math.floor(s/dt.x),a.x=r.x*dt.x,D.mapSize.x=r.x),a.y>s&&(r.y=Math.floor(s/dt.y),a.y=r.y*dt.y,D.mapSize.y=r.y));let yt=t.state.buffers.depth.getReversed();if(D.camera._reversedDepth=yt,D.map===null||at===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===ai){if(k.isPointLight){ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new se(a.x,a.y,{format:$n,type:Ye,minFilter:jt,magFilter:jt,generateMipmaps:!1}),D.map.texture.name=k.name+".shadowMap",D.map.depthTexture=new vn(a.x,a.y,ze),D.map.depthTexture.name=k.name+".shadowMapDepth",D.map.depthTexture.format=di,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Se,D.map.depthTexture.magFilter=Se}else k.isPointLight?(D.map=new is(a.x),D.map.depthTexture=new ql(a.x,Dn)):(D.map=new se(a.x,a.y),D.map.depthTexture=new vn(a.x,a.y,Dn)),D.map.depthTexture.name=k.name+".shadowMap",D.map.depthTexture.format=di,this.type===si?(D.map.depthTexture.compareFunction=yt?Ca:Ra,D.map.depthTexture.minFilter=jt,D.map.depthTexture.magFilter=jt):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Se,D.map.depthTexture.magFilter=Se);D.camera.updateProjectionMatrix()}let qt=D.map.isWebGLCubeRenderTarget?6:1;for(let Ft=0;Ft<qt;Ft++){if(D.map.isWebGLCubeRenderTarget)t.setRenderTarget(D.map,Ft),t.clear();else{Ft===0&&(t.setRenderTarget(D.map),t.clear());let Ct=D.getViewport(Ft);o.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),it.viewport(o)}if(k.isPointLight){let Ct=D.camera,ae=D.matrix,ue=k.distance||Ct.far;ue!==Ct.far&&(Ct.far=ue,Ct.updateProjectionMatrix()),ni.setFromMatrixPosition(k.matrixWorld),Ct.position.copy(ni),ra.copy(Ct.position),ra.add(bd[Ft]),Ct.up.copy(wd[Ft]),Ct.lookAt(ra),Ct.updateMatrixWorld(),ae.makeTranslation(-ni.x,-ni.y,-ni.z),co.multiplyMatrices(Ct.projectionMatrix,Ct.matrixWorldInverse),D._frustum.setFromProjectionMatrix(co,Ct.coordinateSystem,Ct.reversedDepth)}else D.updateMatrices(k);i=D.getFrustum(),F(I,Z,D.camera,k,this.type)}D.isPointLightShadow!==!0&&this.type===ai&&x(D,Z),D.needsUpdate=!1}v=this.type,w.needsUpdate=!1,t.setRenderTarget(P,ot,tt)}}function Md(t,n){let e=new function(){let h=!1,R=new ie,A=null,_=new ie(0,0,0,0);return{setMask:function(B){A!==B&&!h&&(t.colorMask(B,B,B,B),A=B)},setLocked:function(B){h=B},setClear:function(B,z,et,q,wt){wt===!0&&(B*=q,z*=q,et*=q),R.set(B,z,et,q),_.equals(R)===!1&&(t.clearColor(B,z,et,q),_.copy(R))},reset:function(){h=!1,A=null,_.set(-1,0,0,0)}}},i=new function(){let h=!1,R=!1,A=null,_=null,B=null;return{setReversed:function(z){if(R!==z){let et=n.get("EXT_clip_control");z?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),R=z;let q=B;B=null,this.setClear(q)}},getReversed:function(){return R},setTest:function(z){z?mt(t.DEPTH_TEST):Nt(t.DEPTH_TEST)},setMask:function(z){A!==z&&!h&&(t.depthMask(z),A=z)},setFunc:function(z){if(R&&(z=pc[z]),_!==z){switch(z){case ec:t.depthFunc(t.NEVER);break;case tc:t.depthFunc(t.ALWAYS);break;case Ql:t.depthFunc(t.LESS);break;case Dr:t.depthFunc(t.LEQUAL);break;case Jl:t.depthFunc(t.EQUAL);break;case Zl:t.depthFunc(t.GEQUAL);break;case Kl:t.depthFunc(t.GREATER);break;case Yl:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}_=z}},setLocked:function(z){h=z},setClear:function(z){B!==z&&(B=z,R&&(z=1-z),t.clearDepth(z))},reset:function(){h=!1,A=null,_=null,B=null,R=!1}}},a=new function(){let h=!1,R=null,A=null,_=null,B=null,z=null,et=null,q=null,wt=null;return{setTest:function(st){h||(st?mt(t.STENCIL_TEST):Nt(t.STENCIL_TEST))},setMask:function(st){R!==st&&!h&&(t.stencilMask(st),R=st)},setFunc:function(st,ht,W){(A!==st||_!==ht||B!==W)&&(t.stencilFunc(st,ht,W),A=st,_=ht,B=W)},setOp:function(st,ht,W){(z!==st||et!==ht||q!==W)&&(t.stencilOp(st,ht,W),z=st,et=ht,q=W)},setLocked:function(st){h=st},setClear:function(st){wt!==st&&(t.clearStencil(st),wt=st)},reset:function(){h=!1,R=null,A=null,_=null,B=null,z=null,et=null,q=null,wt=null}}},r=new WeakMap,o=new WeakMap,l={},u={},c={},s=new WeakMap,p=[],S=null,g=!1,b=null,f=null,w=null,v=null,x=null,N=null,F=null,U=new oe(0,0,0),M=0,I=!1,Z=null,P=null,ot=null,tt=null,it=null,at=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,j=0,k=t.getParameter(t.VERSION);k.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(k)[1]),X=j>=1):k.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),X=j>=2);let D=null,dt={},yt=t.getParameter(t.SCISSOR_BOX),qt=t.getParameter(t.VIEWPORT),Ft=new ie().fromArray(yt),Ct=new ie().fromArray(qt);function ae(h,R,A,_){let B=new Uint8Array(4),z=t.createTexture();t.bindTexture(h,z),t.texParameteri(h,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(h,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let et=0;et<A;et++)h===t.TEXTURE_3D||h===t.TEXTURE_2D_ARRAY?t.texImage3D(R,0,t.RGBA,1,1,_,0,t.RGBA,t.UNSIGNED_BYTE,B):t.texImage2D(R+et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,B);return z}let ue={};function mt(h){l[h]!==!0&&(t.enable(h),l[h]=!0)}function Nt(h){l[h]!==!1&&(t.disable(h),l[h]=!1)}ue[t.TEXTURE_2D]=ae(t.TEXTURE_2D,t.TEXTURE_2D,1),ue[t.TEXTURE_CUBE_MAP]=ae(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[t.TEXTURE_2D_ARRAY]=ae(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ue[t.TEXTURE_3D]=ae(t.TEXTURE_3D,t.TEXTURE_3D,1,1),e.setClear(0,0,0,1),i.setClear(1),a.setClear(0),mt(t.DEPTH_TEST),i.setFunc(Dr),m(!1),y(Ur),mt(t.CULL_FACE),T(wn);let Yt={[ti]:t.FUNC_ADD,[gl]:t.FUNC_SUBTRACT,[vl]:t.FUNC_REVERSE_SUBTRACT};Yt[hc]=t.MIN,Yt[mc]=t.MAX;let $t={[Ll]:t.ZERO,[Dl]:t.ONE,[Pl]:t.SRC_COLOR,[Al]:t.SRC_ALPHA,[Rl]:t.SRC_ALPHA_SATURATE,[Cl]:t.DST_COLOR,[yl]:t.DST_ALPHA,[Ml]:t.ONE_MINUS_SRC_COLOR,[El]:t.ONE_MINUS_SRC_ALPHA,[wl]:t.ONE_MINUS_DST_COLOR,[bl]:t.ONE_MINUS_DST_ALPHA,[Tl]:t.CONSTANT_COLOR,[Sl]:t.ONE_MINUS_CONSTANT_COLOR,[xl]:t.CONSTANT_ALPHA,[_l]:t.ONE_MINUS_CONSTANT_ALPHA};function T(h,R,A,_,B,z,et,q,wt,st){if(h!==wn){if(g===!1&&(mt(t.BLEND),g=!0),h===ac)B=B||R,z=z||A,et=et||_,(R!==f||B!==x)&&(t.blendEquationSeparate(Yt[R],Yt[B]),f=R,x=B),(A!==w||_!==v||z!==N||et!==F)&&(t.blendFuncSeparate($t[A],$t[_],$t[z],$t[et]),w=A,v=_,N=z,F=et),(q.equals(U)===!1||wt!==M)&&(t.blendColor(q.r,q.g,q.b,wt),U.copy(q),M=wt),b=h,I=!1;else if(h!==b||st!==I){if((f!==ti||x!==ti)&&(t.blendEquation(t.FUNC_ADD),f=ti,x=ti),st)switch(h){case Ci:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Or:t.blendFunc(t.ONE,t.ONE);break;case Ir:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Nr:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:re("WebGLState: Invalid blending: ",h)}else switch(h){case Ci:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Or:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Ir:re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nr:re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:re("WebGLState: Invalid blending: ",h)}w=null,v=null,N=null,F=null,U.set(0,0,0),M=0,b=h,I=st}}else g===!0&&(Nt(t.BLEND),g=!1)}function m(h){Z!==h&&(h?t.frontFace(t.CW):t.frontFace(t.CCW),Z=h)}function y(h){h!==nc?(mt(t.CULL_FACE),h!==P&&(h===Ur?t.cullFace(t.BACK):h===ic?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Nt(t.CULL_FACE),P=h}function V(h,R,A){h?(mt(t.POLYGON_OFFSET_FILL),(tt!==R||it!==A)&&(tt=R,it=A,i.getReversed()&&(R=-R),t.polygonOffset(R,A))):Nt(t.POLYGON_OFFSET_FILL)}return{buffers:{color:e,depth:i,stencil:a},enable:mt,disable:Nt,bindFramebuffer:function(h,R){return c[h]!==R&&(t.bindFramebuffer(h,R),c[h]=R,h===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=R),h===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=R),!0)},drawBuffers:function(h,R){let A=p,_=!1;if(h){A=s.get(R),A===void 0&&(A=[],s.set(R,A));let B=h.textures;if(A.length!==B.length||A[0]!==t.COLOR_ATTACHMENT0){for(let z=0,et=B.length;z<et;z++)A[z]=t.COLOR_ATTACHMENT0+z;A.length=B.length,_=!0}}else A[0]!==t.BACK&&(A[0]=t.BACK,_=!0);_&&t.drawBuffers(A)},useProgram:function(h){return S!==h&&(t.useProgram(h),S=h,!0)},setBlending:T,setMaterial:function(h,R){h.side===rn?Nt(t.CULL_FACE):mt(t.CULL_FACE);let A=h.side===We;R&&(A=!A),m(A),h.blending===Ci&&h.transparent===!1?T(wn):T(h.blending,h.blendEquation,h.blendSrc,h.blendDst,h.blendEquationAlpha,h.blendSrcAlpha,h.blendDstAlpha,h.blendColor,h.blendAlpha,h.premultipliedAlpha),i.setFunc(h.depthFunc),i.setTest(h.depthTest),i.setMask(h.depthWrite),e.setMask(h.colorWrite);let _=h.stencilWrite;a.setTest(_),_&&(a.setMask(h.stencilWriteMask),a.setFunc(h.stencilFunc,h.stencilRef,h.stencilFuncMask),a.setOp(h.stencilFail,h.stencilZFail,h.stencilZPass)),V(h.polygonOffset,h.polygonOffsetFactor,h.polygonOffsetUnits),h.alphaToCoverage===!0?mt(t.SAMPLE_ALPHA_TO_COVERAGE):Nt(t.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:m,setCullFace:y,setLineWidth:function(h){h!==ot&&(X&&t.lineWidth(h),ot=h)},setPolygonOffset:V,setScissorTest:function(h){h?mt(t.SCISSOR_TEST):Nt(t.SCISSOR_TEST)},activeTexture:function(h){h===void 0&&(h=t.TEXTURE0+at-1),D!==h&&(t.activeTexture(h),D=h)},bindTexture:function(h,R,A){A===void 0&&(A=D===null?t.TEXTURE0+at-1:D);let _=dt[A];_===void 0&&(_={type:void 0,texture:void 0},dt[A]=_),(_.type!==h||_.texture!==R)&&(D!==A&&(t.activeTexture(A),D=A),t.bindTexture(h,R||ue[h]),_.type=h,_.texture=R)},unbindTexture:function(){let h=dt[D];h!==void 0&&h.type!==void 0&&(t.bindTexture(h.type,null),h.type=void 0,h.texture=void 0)},compressedTexImage2D:function(){try{t.compressedTexImage2D(...arguments)}catch(h){re("WebGLState:",h)}},compressedTexImage3D:function(){try{t.compressedTexImage3D(...arguments)}catch(h){re("WebGLState:",h)}},texImage2D:function(){try{t.texImage2D(...arguments)}catch(h){re("WebGLState:",h)}},texImage3D:function(){try{t.texImage3D(...arguments)}catch(h){re("WebGLState:",h)}},pixelStorei:function(h,R){u[h]!==R&&(t.pixelStorei(h,R),u[h]=R)},getParameter:function(h){return u[h]!==void 0?u[h]:t.getParameter(h)},updateUBOMapping:function(h,R){let A=o.get(R);A===void 0&&(A=new WeakMap,o.set(R,A));let _=A.get(h);_===void 0&&(_=t.getUniformBlockIndex(R,h.name),A.set(h,_))},uniformBlockBinding:function(h,R){let A=o.get(R).get(h);r.get(R)!==A&&(t.uniformBlockBinding(R,A,h.__bindingPointIndex),r.set(R,A))},texStorage2D:function(){try{t.texStorage2D(...arguments)}catch(h){re("WebGLState:",h)}},texStorage3D:function(){try{t.texStorage3D(...arguments)}catch(h){re("WebGLState:",h)}},texSubImage2D:function(){try{t.texSubImage2D(...arguments)}catch(h){re("WebGLState:",h)}},texSubImage3D:function(){try{t.texSubImage3D(...arguments)}catch(h){re("WebGLState:",h)}},compressedTexSubImage2D:function(){try{t.compressedTexSubImage2D(...arguments)}catch(h){re("WebGLState:",h)}},compressedTexSubImage3D:function(){try{t.compressedTexSubImage3D(...arguments)}catch(h){re("WebGLState:",h)}},scissor:function(h){Ft.equals(h)===!1&&(t.scissor(h.x,h.y,h.z,h.w),Ft.copy(h))},viewport:function(h){Ct.equals(h)===!1&&(t.viewport(h.x,h.y,h.z,h.w),Ct.copy(h))},reset:function(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),i.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),l={},u={},D=null,dt={},c={},s=new WeakMap,p=[],S=null,g=!1,b=null,f=null,w=null,v=null,x=null,N=null,F=null,U=new oe(0,0,0),M=0,I=!1,Z=null,P=null,ot=null,tt=null,it=null,Ft.set(0,0,t.canvas.width,t.canvas.height),Ct.set(0,0,t.canvas.width,t.canvas.height),e.reset(),i.reset(),a.reset()}}}function yd(t,n,e,i,a,r,o){let l,u=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,c=!(typeof navigator>"u")&&/OculusBrowser/g.test(navigator.userAgent),s=new _t,p=new WeakMap,S=new Set,g=new WeakMap,b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(T,m){return b?new OffscreenCanvas(T,m):gc("canvas")}function w(T,m,y){let V=1,h=$t(T);if((h.width>y||h.height>y)&&(V=y/Math.max(h.width,h.height)),V<1){if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let R=Math.floor(V*h.width),A=Math.floor(V*h.height);l===void 0&&(l=f(R,A));let _=m?f(R,A):l;return _.width=R,_.height=A,_.getContext("2d").drawImage(T,0,0,R,A),ne("WebGLRenderer: Texture has been resized from ("+h.width+"x"+h.height+") to ("+R+"x"+A+")."),_}return"data"in T&&ne("WebGLRenderer: Image in DataTexture is too big ("+h.width+"x"+h.height+")."),T}return T}function v(T){return T.generateMipmaps}function x(T){t.generateMipmap(T)}function N(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function F(T,m,y,V,h,R=!1){if(T!==null){if(t[T]!==void 0)return t[T];ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let A;V&&(A=n.get("EXT_texture_norm16"),A||ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _=m;if(m===t.RED&&(y===t.FLOAT&&(_=t.R32F),y===t.HALF_FLOAT&&(_=t.R16F),y===t.UNSIGNED_BYTE&&(_=t.R8),y===t.UNSIGNED_SHORT&&A&&(_=A.R16_EXT),y===t.SHORT&&A&&(_=A.R16_SNORM_EXT)),m===t.RED_INTEGER&&(y===t.UNSIGNED_BYTE&&(_=t.R8UI),y===t.UNSIGNED_SHORT&&(_=t.R16UI),y===t.UNSIGNED_INT&&(_=t.R32UI),y===t.BYTE&&(_=t.R8I),y===t.SHORT&&(_=t.R16I),y===t.INT&&(_=t.R32I)),m===t.RG&&(y===t.FLOAT&&(_=t.RG32F),y===t.HALF_FLOAT&&(_=t.RG16F),y===t.UNSIGNED_BYTE&&(_=t.RG8),y===t.UNSIGNED_SHORT&&A&&(_=A.RG16_EXT),y===t.SHORT&&A&&(_=A.RG16_SNORM_EXT)),m===t.RG_INTEGER&&(y===t.UNSIGNED_BYTE&&(_=t.RG8UI),y===t.UNSIGNED_SHORT&&(_=t.RG16UI),y===t.UNSIGNED_INT&&(_=t.RG32UI),y===t.BYTE&&(_=t.RG8I),y===t.SHORT&&(_=t.RG16I),y===t.INT&&(_=t.RG32I)),m===t.RGB_INTEGER&&(y===t.UNSIGNED_BYTE&&(_=t.RGB8UI),y===t.UNSIGNED_SHORT&&(_=t.RGB16UI),y===t.UNSIGNED_INT&&(_=t.RGB32UI),y===t.BYTE&&(_=t.RGB8I),y===t.SHORT&&(_=t.RGB16I),y===t.INT&&(_=t.RGB32I)),m===t.RGBA_INTEGER&&(y===t.UNSIGNED_BYTE&&(_=t.RGBA8UI),y===t.UNSIGNED_SHORT&&(_=t.RGBA16UI),y===t.UNSIGNED_INT&&(_=t.RGBA32UI),y===t.BYTE&&(_=t.RGBA8I),y===t.SHORT&&(_=t.RGBA16I),y===t.INT&&(_=t.RGBA32I)),m===t.RGB&&(y===t.UNSIGNED_SHORT&&A&&(_=A.RGB16_EXT),y===t.SHORT&&A&&(_=A.RGB16_SNORM_EXT),y===t.UNSIGNED_INT_5_9_9_9_REV&&(_=t.RGB9_E5),y===t.UNSIGNED_INT_10F_11F_11F_REV&&(_=t.R11F_G11F_B10F)),m===t.RGBA){let B=R?Ho:ce.getTransfer(h);y===t.FLOAT&&(_=t.RGBA32F),y===t.HALF_FLOAT&&(_=t.RGBA16F),y===t.UNSIGNED_BYTE&&(_=B===Zt?t.SRGB8_ALPHA8:t.RGBA8),y===t.UNSIGNED_SHORT&&A&&(_=A.RGBA16_EXT),y===t.SHORT&&A&&(_=A.RGBA16_SNORM_EXT),y===t.UNSIGNED_SHORT_4_4_4_4&&(_=t.RGBA4),y===t.UNSIGNED_SHORT_5_5_5_1&&(_=t.RGB5_A1)}return(_===t.R16F||_===t.R32F||_===t.RG16F||_===t.RG32F||_===t.RGBA16F||_===t.RGBA32F)&&n.get("EXT_color_buffer_float"),_}function U(T,m){let y;return T?m===null||m===Dn||m===ui?y=t.DEPTH24_STENCIL8:m===ze?y=t.DEPTH32F_STENCIL8:m===Li&&(y=t.DEPTH24_STENCIL8,ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Dn||m===ui?y=t.DEPTH_COMPONENT24:m===ze?y=t.DEPTH_COMPONENT32F:m===Li&&(y=t.DEPTH_COMPONENT16),y}function M(T,m){return v(T)===!0||T.isFramebufferTexture&&T.minFilter!==Se&&T.minFilter!==jt?Math.log2(Math.max(m.width,m.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?m.mipmaps.length:1}function I(T){let m=T.target;m.removeEventListener("dispose",I),(function(y){let V=i.get(y);if(V.__webglInit===void 0)return;let h=y.source,R=g.get(h);if(R){let A=R[V.__cacheKey];A.usedTimes--,A.usedTimes===0&&P(y),Object.keys(R).length===0&&g.delete(h)}i.remove(y)})(m),m.isVideoTexture&&p.delete(m),m.isHTMLTexture&&S.delete(m)}function Z(T){let m=T.target;m.removeEventListener("dispose",Z),(function(y){let V=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let R=0;R<6;R++){if(Array.isArray(V.__webglFramebuffer[R]))for(let A=0;A<V.__webglFramebuffer[R].length;A++)t.deleteFramebuffer(V.__webglFramebuffer[R][A]);else t.deleteFramebuffer(V.__webglFramebuffer[R]);V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer[R])}else{if(Array.isArray(V.__webglFramebuffer))for(let R=0;R<V.__webglFramebuffer.length;R++)t.deleteFramebuffer(V.__webglFramebuffer[R]);else t.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&t.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let R=0;R<V.__webglColorRenderbuffer.length;R++)V.__webglColorRenderbuffer[R]&&t.deleteRenderbuffer(V.__webglColorRenderbuffer[R]);V.__webglDepthRenderbuffer&&t.deleteRenderbuffer(V.__webglDepthRenderbuffer)}let h=y.textures;for(let R=0,A=h.length;R<A;R++){let _=i.get(h[R]);_.__webglTexture&&(t.deleteTexture(_.__webglTexture),o.memory.textures--),i.remove(h[R])}i.remove(y)})(m)}function P(T){let m=i.get(T);t.deleteTexture(m.__webglTexture);let y=T.source;delete g.get(y)[m.__cacheKey],o.memory.textures--}let ot=0;function tt(T,m){let y=i.get(T);if(T.isVideoTexture&&(function(V){let h=o.render.frame;p.get(V)!==h&&(p.set(V,h),V.update())})(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&y.__version!==T.version){let V=T.image;if(V===null)ne("WebGLRenderer: Texture marked for update but no image data found.");else{if(V.complete!==!1)return void dt(y,T,m);ne("WebGLRenderer: Texture marked for update but image is incomplete")}}else T.isExternalTexture&&(y.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(t.TEXTURE_2D,y.__webglTexture,t.TEXTURE0+m)}let it={[ii]:t.REPEAT,[Re]:t.CLAMP_TO_EDGE,[Ul]:t.MIRRORED_REPEAT},at={[Se]:t.NEAREST,[Nl]:t.NEAREST_MIPMAP_NEAREST,[bi]:t.NEAREST_MIPMAP_LINEAR,[jt]:t.LINEAR,[ea]:t.LINEAR_MIPMAP_NEAREST,[Pn]:t.LINEAR_MIPMAP_LINEAR},X={[Vl]:t.NEVER,[Bl]:t.ALWAYS,[zl]:t.LESS,[Ra]:t.LEQUAL,[Fl]:t.EQUAL,[Ca]:t.GEQUAL,[Ol]:t.GREATER,[Il]:t.NOTEQUAL};function j(T,m){if(m.type===ze&&n.has("OES_texture_float_linear")===!1&&(m.magFilter===jt||m.magFilter===ea||m.magFilter===bi||m.magFilter===Pn||m.minFilter===jt||m.minFilter===ea||m.minFilter===bi||m.minFilter===Pn)&&ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,it[m.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,it[m.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,it[m.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,at[m.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,at[m.minFilter]),m.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,X[m.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Se||m.minFilter!==bi&&m.minFilter!==Pn||m.type===ze&&n.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){let y=n.get("EXT_texture_filter_anisotropic");t.texParameterf(T,y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,a.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function k(T,m){let y=!1;T.__webglInit===void 0&&(T.__webglInit=!0,m.addEventListener("dispose",I));let V=m.source,h=g.get(V);h===void 0&&(h={},g.set(V,h));let R=(function(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()})(m);if(R!==T.__cacheKey){h[R]===void 0&&(h[R]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,y=!0),h[R].usedTimes++;let A=h[T.__cacheKey];A!==void 0&&(h[T.__cacheKey].usedTimes--,A.usedTimes===0&&P(m)),T.__cacheKey=R,T.__webglTexture=h[R].texture}return y}function D(T,m,y){return Math.floor(Math.floor(T/y)/m)}function dt(T,m,y){let V=t.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(V=t.TEXTURE_2D_ARRAY),m.isData3DTexture&&(V=t.TEXTURE_3D);let h=k(T,m),R=m.source;e.bindTexture(V,T.__webglTexture,t.TEXTURE0+y);let A=i.get(R);if(R.version!==A.__version||h===!0){if(e.activeTexture(t.TEXTURE0+y),(typeof ImageBitmap<"u"&&m.image instanceof ImageBitmap)==0){let G=ce.getPrimaries(ce.workingColorSpace),Q=m.colorSpace===Bn?null:ce.getPrimaries(m.colorSpace),Dt=m.colorSpace===Bn||G===Q?t.NONE:t.BROWSER_DEFAULT_WEBGL;e.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,m.flipY),e.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),e.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt)}e.pixelStorei(t.UNPACK_ALIGNMENT,m.unpackAlignment);let _=w(m.image,!1,a.maxTextureSize);_=Yt(m,_);let B=r.convert(m.format,m.colorSpace),z=r.convert(m.type),et=F(m.internalFormat,B,z,m.normalized,m.colorSpace,m.isVideoTexture);j(V,m);let q,wt=m.mipmaps,st=m.isVideoTexture!==!0,ht=A.__version===void 0||h===!0,W=R.dataReady,Xt=M(m,_);if(m.isDepthTexture)et=U(m.format===kn,m.type),ht&&(st?e.texStorage2D(t.TEXTURE_2D,1,et,_.width,_.height):e.texImage2D(t.TEXTURE_2D,0,et,_.width,_.height,0,B,z,null));else if(m.isDataTexture)if(wt.length>0){st&&ht&&e.texStorage2D(t.TEXTURE_2D,Xt,et,wt[0].width,wt[0].height);for(let G=0,Q=wt.length;G<Q;G++)q=wt[G],st?W&&e.texSubImage2D(t.TEXTURE_2D,G,0,0,q.width,q.height,B,z,q.data):e.texImage2D(t.TEXTURE_2D,G,et,q.width,q.height,0,B,z,q.data);m.generateMipmaps=!1}else st?(ht&&e.texStorage2D(t.TEXTURE_2D,Xt,et,_.width,_.height),W&&(function(G,Q,Dt,Vt){let de=G.updateRanges;if(de.length===0)e.texSubImage2D(t.TEXTURE_2D,0,0,0,Q.width,Q.height,Dt,Vt,Q.data);else{de.sort((At,Qt)=>At.start-Qt.start);let fe=0;for(let At=1;At<de.length;At++){let Qt=de[fe],te=de[At],me=Qt.start+Qt.count,He=D(te.start,Q.width,4),Ve=D(Qt.start,Q.width,4);te.start<=me+1&&He===Ve&&D(te.start+te.count-1,Q.width,4)===He?Qt.count=Math.max(Qt.count,te.start+te.count-Qt.start):(++fe,de[fe]=te)}de.length=fe+1;let we=e.getParameter(t.UNPACK_ROW_LENGTH),vt=e.getParameter(t.UNPACK_SKIP_PIXELS),Ht=e.getParameter(t.UNPACK_SKIP_ROWS);e.pixelStorei(t.UNPACK_ROW_LENGTH,Q.width);for(let At=0,Qt=de.length;At<Qt;At++){let te=de[At],me=Math.floor(te.start/4),He=Math.ceil(te.count/4),Ve=me%Q.width,gn=Math.floor(me/Q.width),$e=He;e.pixelStorei(t.UNPACK_SKIP_PIXELS,Ve),e.pixelStorei(t.UNPACK_SKIP_ROWS,gn),e.texSubImage2D(t.TEXTURE_2D,0,Ve,gn,$e,1,Dt,Vt,Q.data)}G.clearUpdateRanges(),e.pixelStorei(t.UNPACK_ROW_LENGTH,we),e.pixelStorei(t.UNPACK_SKIP_PIXELS,vt),e.pixelStorei(t.UNPACK_SKIP_ROWS,Ht)}})(m,_,B,z)):e.texImage2D(t.TEXTURE_2D,0,et,_.width,_.height,0,B,z,_.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){st&&ht&&e.texStorage3D(t.TEXTURE_2D_ARRAY,Xt,et,wt[0].width,wt[0].height,_.depth);for(let G=0,Q=wt.length;G<Q;G++)if(q=wt[G],m.format!==bn)if(B!==null)if(st){if(W)if(m.layerUpdates.size>0){let Dt=Fr(q.width,q.height,m.format,m.type);for(let Vt of m.layerUpdates){let de=q.data.subarray(Vt*Dt/q.data.BYTES_PER_ELEMENT,(Vt+1)*Dt/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,Vt,q.width,q.height,1,B,de)}m.clearLayerUpdates()}else e.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,q.width,q.height,_.depth,B,q.data)}else e.compressedTexImage3D(t.TEXTURE_2D_ARRAY,G,et,q.width,q.height,_.depth,0,q.data,0,0);else ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?W&&e.texSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,q.width,q.height,_.depth,B,z,q.data):e.texImage3D(t.TEXTURE_2D_ARRAY,G,et,q.width,q.height,_.depth,0,B,z,q.data)}else{st&&ht&&e.texStorage2D(t.TEXTURE_2D,Xt,et,wt[0].width,wt[0].height);for(let G=0,Q=wt.length;G<Q;G++)q=wt[G],m.format!==bn?B!==null?st?W&&e.compressedTexSubImage2D(t.TEXTURE_2D,G,0,0,q.width,q.height,B,q.data):e.compressedTexImage2D(t.TEXTURE_2D,G,et,q.width,q.height,0,q.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?W&&e.texSubImage2D(t.TEXTURE_2D,G,0,0,q.width,q.height,B,z,q.data):e.texImage2D(t.TEXTURE_2D,G,et,q.width,q.height,0,B,z,q.data)}else if(m.isDataArrayTexture)if(st){if(ht&&e.texStorage3D(t.TEXTURE_2D_ARRAY,Xt,et,_.width,_.height,_.depth),W)if(m.layerUpdates.size>0){let G=Fr(_.width,_.height,m.format,m.type);for(let Q of m.layerUpdates){let Dt=_.data.subarray(Q*G/_.data.BYTES_PER_ELEMENT,(Q+1)*G/_.data.BYTES_PER_ELEMENT);e.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Q,_.width,_.height,1,B,z,Dt)}m.clearLayerUpdates()}else e.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,_.width,_.height,_.depth,B,z,_.data)}else e.texImage3D(t.TEXTURE_2D_ARRAY,0,et,_.width,_.height,_.depth,0,B,z,_.data);else if(m.isData3DTexture)st?(ht&&e.texStorage3D(t.TEXTURE_3D,Xt,et,_.width,_.height,_.depth),W&&e.texSubImage3D(t.TEXTURE_3D,0,0,0,0,_.width,_.height,_.depth,B,z,_.data)):e.texImage3D(t.TEXTURE_3D,0,et,_.width,_.height,_.depth,0,B,z,_.data);else if(m.isFramebufferTexture){if(ht)if(st)e.texStorage2D(t.TEXTURE_2D,Xt,et,_.width,_.height);else{let G=_.width,Q=_.height;for(let Dt=0;Dt<Xt;Dt++)e.texImage2D(t.TEXTURE_2D,Dt,et,G,Q,0,B,z,null),G>>=1,Q>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in t){let G=t.canvas;if(G.hasAttribute("layoutsubtree")||G.setAttribute("layoutsubtree","true"),_.parentNode!==G)return G.appendChild(_),S.add(m),G.onpaint=Q=>{let Dt=Q.changedElements;for(let Vt of S)Dt.includes(Vt.image)&&(Vt.needsUpdate=!0)},void G.requestPaint();if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,_);else{let Q=t.RGBA,Dt=t.RGBA,Vt=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Q,Dt,Vt,_)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(wt.length>0){if(st&&ht){let G=$t(wt[0]);e.texStorage2D(t.TEXTURE_2D,Xt,et,G.width,G.height)}for(let G=0,Q=wt.length;G<Q;G++)q=wt[G],st?W&&e.texSubImage2D(t.TEXTURE_2D,G,0,0,B,z,q):e.texImage2D(t.TEXTURE_2D,G,et,B,z,q);m.generateMipmaps=!1}else if(st){if(ht){let G=$t(_);e.texStorage2D(t.TEXTURE_2D,Xt,et,G.width,G.height)}W&&e.texSubImage2D(t.TEXTURE_2D,0,0,0,B,z,_)}else e.texImage2D(t.TEXTURE_2D,0,et,B,z,_);v(m)&&x(V),A.__version=R.version,m.onUpdate&&m.onUpdate(m)}T.__version=m.version}function yt(T,m,y,V,h,R){let A=r.convert(y.format,y.colorSpace),_=r.convert(y.type),B=F(y.internalFormat,A,_,y.normalized,y.colorSpace),z=i.get(m),et=i.get(y);if(et.__renderTarget=m,!z.__hasExternalTextures){let q=Math.max(1,m.width>>R),wt=Math.max(1,m.height>>R);h===t.TEXTURE_3D||h===t.TEXTURE_2D_ARRAY?e.texImage3D(h,R,B,q,wt,m.depth,0,A,_,null):e.texImage2D(h,R,B,q,wt,0,A,_,null)}e.bindFramebuffer(t.FRAMEBUFFER,T),Nt(m)?u.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,V,h,et.__webglTexture,0,mt(m)):(h===t.TEXTURE_2D||h>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&h<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,V,h,et.__webglTexture,R),e.bindFramebuffer(t.FRAMEBUFFER,null)}function qt(T,m,y){if(t.bindRenderbuffer(t.RENDERBUFFER,T),m.depthBuffer){let V=m.depthTexture,h=V&&V.isDepthTexture?V.type:null,R=U(m.stencilBuffer,h),A=m.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Nt(m)?u.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,mt(m),R,m.width,m.height):y?t.renderbufferStorageMultisample(t.RENDERBUFFER,mt(m),R,m.width,m.height):t.renderbufferStorage(t.RENDERBUFFER,R,m.width,m.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,A,t.RENDERBUFFER,T)}else{let V=m.textures;for(let h=0;h<V.length;h++){let R=V[h],A=r.convert(R.format,R.colorSpace),_=r.convert(R.type),B=F(R.internalFormat,A,_,R.normalized,R.colorSpace);Nt(m)?u.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,mt(m),B,m.width,m.height):y?t.renderbufferStorageMultisample(t.RENDERBUFFER,mt(m),B,m.width,m.height):t.renderbufferStorage(t.RENDERBUFFER,B,m.width,m.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ft(T,m,y){let V=m.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(t.FRAMEBUFFER,T),!m.depthTexture||!m.depthTexture.isDepthTexture)throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let h=i.get(m.depthTexture);if(h.__renderTarget=m,(!h.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),V){if(h.__webglInit===void 0&&(h.__webglInit=!0,m.depthTexture.addEventListener("dispose",I)),h.__webglTexture===void 0){h.__webglTexture=t.createTexture(),e.bindTexture(t.TEXTURE_CUBE_MAP,h.__webglTexture),j(t.TEXTURE_CUBE_MAP,m.depthTexture);let z,et=r.convert(m.depthTexture.format),q=r.convert(m.depthTexture.type);m.depthTexture.format===di?z=t.DEPTH_COMPONENT24:m.depthTexture.format===kn&&(z=t.DEPTH24_STENCIL8);for(let wt=0;wt<6;wt++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,z,m.width,m.height,0,et,q,null)}}else tt(m.depthTexture,0);let R=h.__webglTexture,A=mt(m),_=V?t.TEXTURE_CUBE_MAP_POSITIVE_X+y:t.TEXTURE_2D,B=m.depthTexture.format===kn?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(m.depthTexture.format===di)Nt(m)?u.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,B,_,R,0,A):t.framebufferTexture2D(t.FRAMEBUFFER,B,_,R,0);else{if(m.depthTexture.format!==kn)throw new Error("THREE.WebGLTextures: Unknown depthTexture format.");Nt(m)?u.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,B,_,R,0,A):t.framebufferTexture2D(t.FRAMEBUFFER,B,_,R,0)}}function Ct(T){let m=i.get(T),y=T.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==T.depthTexture){let V=T.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),V){let h=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,V.removeEventListener("dispose",h)};V.addEventListener("dispose",h),m.__depthDisposeCallback=h}m.__boundDepthTexture=V}if(T.depthTexture&&!m.__autoAllocateDepthBuffer)if(y)for(let V=0;V<6;V++)Ft(m.__webglFramebuffer[V],T,V);else{let V=T.texture.mipmaps;V&&V.length>0?Ft(m.__webglFramebuffer[0],T,0):Ft(m.__webglFramebuffer,T,0)}else if(y){m.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(t.FRAMEBUFFER,m.__webglFramebuffer[V]),m.__webglDepthbuffer[V]===void 0)m.__webglDepthbuffer[V]=t.createRenderbuffer(),qt(m.__webglDepthbuffer[V],T,!1);else{let h=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,R=m.__webglDepthbuffer[V];t.bindRenderbuffer(t.RENDERBUFFER,R),t.framebufferRenderbuffer(t.FRAMEBUFFER,h,t.RENDERBUFFER,R)}}else{let V=T.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(t.FRAMEBUFFER,m.__webglFramebuffer[0]):e.bindFramebuffer(t.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=t.createRenderbuffer(),qt(m.__webglDepthbuffer,T,!1);else{let h=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,R=m.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,R),t.framebufferRenderbuffer(t.FRAMEBUFFER,h,t.RENDERBUFFER,R)}}e.bindFramebuffer(t.FRAMEBUFFER,null)}let ae=[],ue=[];function mt(T){return Math.min(a.maxSamples,T.samples)}function Nt(T){let m=i.get(T);return T.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function Yt(T,m){let y=T.colorSpace,V=T.format,h=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||y!==rc&&y!==Bn&&(ce.getTransfer(y)===Zt?(V!==bn||h!==an)&&ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):re("WebGLTextures: Unsupported texture color space:",y)),m}function $t(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(s.width=T.naturalWidth||T.width,s.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(s.width=T.displayWidth,s.height=T.displayHeight):(s.width=T.width,s.height=T.height),s}this.allocateTextureUnit=function(){let T=ot;return T>=a.maxTextures&&ne("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+a.maxTextures),ot+=1,T},this.resetTextureUnits=function(){ot=0},this.getTextureUnits=function(){return ot},this.setTextureUnits=function(T){ot=T},this.setTexture2D=tt,this.setTexture2DArray=function(T,m){let y=i.get(T);T.isRenderTargetTexture===!1&&T.version>0&&y.__version!==T.version?dt(y,T,m):(T.isExternalTexture&&(y.__webglTexture=T.sourceTexture?T.sourceTexture:null),e.bindTexture(t.TEXTURE_2D_ARRAY,y.__webglTexture,t.TEXTURE0+m))},this.setTexture3D=function(T,m){let y=i.get(T);T.isRenderTargetTexture===!1&&T.version>0&&y.__version!==T.version?dt(y,T,m):e.bindTexture(t.TEXTURE_3D,y.__webglTexture,t.TEXTURE0+m)},this.setTextureCube=function(T,m){let y=i.get(T);T.isCubeDepthTexture!==!0&&T.version>0&&y.__version!==T.version?(function(V,h,R){if(h.image.length!==6)return;let A=k(V,h),_=h.source;e.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+R);let B=i.get(_);if(_.version!==B.__version||A===!0){e.activeTexture(t.TEXTURE0+R);let z=ce.getPrimaries(ce.workingColorSpace),et=h.colorSpace===Bn?null:ce.getPrimaries(h.colorSpace),q=h.colorSpace===Bn||z===et?t.NONE:t.BROWSER_DEFAULT_WEBGL;e.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,h.flipY),e.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),e.pixelStorei(t.UNPACK_ALIGNMENT,h.unpackAlignment),e.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);let wt=h.isCompressedTexture||h.image[0].isCompressedTexture,st=h.image[0]&&h.image[0].isDataTexture,ht=[];for(let vt=0;vt<6;vt++)ht[vt]=wt||st?st?h.image[vt].image:h.image[vt]:w(h.image[vt],!0,a.maxCubemapSize),ht[vt]=Yt(h,ht[vt]);let W,Xt=ht[0],G=r.convert(h.format,h.colorSpace),Q=r.convert(h.type),Dt=F(h.internalFormat,G,Q,h.normalized,h.colorSpace),Vt=h.isVideoTexture!==!0,de=B.__version===void 0||A===!0,fe=_.dataReady,we=M(h,Xt);if(j(t.TEXTURE_CUBE_MAP,h),wt){Vt&&de&&e.texStorage2D(t.TEXTURE_CUBE_MAP,we,Dt,Xt.width,Xt.height);for(let vt=0;vt<6;vt++){W=ht[vt].mipmaps;for(let Ht=0;Ht<W.length;Ht++){let At=W[Ht];h.format!==bn?G!==null?Vt?fe&&e.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht,0,0,At.width,At.height,G,At.data):e.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht,Dt,At.width,At.height,0,At.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?fe&&e.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht,0,0,At.width,At.height,G,Q,At.data):e.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht,Dt,At.width,At.height,0,G,Q,At.data)}}}else{if(W=h.mipmaps,Vt&&de){W.length>0&&we++;let vt=$t(ht[0]);e.texStorage2D(t.TEXTURE_CUBE_MAP,we,Dt,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(st){Vt?fe&&e.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,ht[vt].width,ht[vt].height,G,Q,ht[vt].data):e.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Dt,ht[vt].width,ht[vt].height,0,G,Q,ht[vt].data);for(let Ht=0;Ht<W.length;Ht++){let At=W[Ht].image[vt].image;Vt?fe&&e.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht+1,0,0,At.width,At.height,G,Q,At.data):e.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht+1,Dt,At.width,At.height,0,G,Q,At.data)}}else{Vt?fe&&e.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,G,Q,ht[vt]):e.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Dt,G,Q,ht[vt]);for(let Ht=0;Ht<W.length;Ht++){let At=W[Ht];Vt?fe&&e.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht+1,0,0,G,Q,At.image[vt]):e.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht+1,Dt,G,Q,At.image[vt])}}}v(h)&&x(t.TEXTURE_CUBE_MAP),B.__version=_.version,h.onUpdate&&h.onUpdate(h)}V.__version=h.version})(y,T,m):e.bindTexture(t.TEXTURE_CUBE_MAP,y.__webglTexture,t.TEXTURE0+m)},this.rebindTextures=function(T,m,y){let V=i.get(T);m!==void 0&&yt(V.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),y!==void 0&&Ct(T)},this.setupRenderTarget=function(T){let m=T.texture,y=i.get(T),V=i.get(m);T.addEventListener("dispose",Z);let h=T.textures,R=T.isWebGLCubeRenderTarget===!0,A=h.length>1;if(A||(V.__webglTexture===void 0&&(V.__webglTexture=t.createTexture()),V.__version=m.version,o.memory.textures++),R){y.__webglFramebuffer=[];for(let _=0;_<6;_++)if(m.mipmaps&&m.mipmaps.length>0){y.__webglFramebuffer[_]=[];for(let B=0;B<m.mipmaps.length;B++)y.__webglFramebuffer[_][B]=t.createFramebuffer()}else y.__webglFramebuffer[_]=t.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){y.__webglFramebuffer=[];for(let _=0;_<m.mipmaps.length;_++)y.__webglFramebuffer[_]=t.createFramebuffer()}else y.__webglFramebuffer=t.createFramebuffer();if(A)for(let _=0,B=h.length;_<B;_++){let z=i.get(h[_]);z.__webglTexture===void 0&&(z.__webglTexture=t.createTexture(),o.memory.textures++)}if(T.samples>0&&Nt(T)===!1){y.__webglMultisampledFramebuffer=t.createFramebuffer(),y.__webglColorRenderbuffer=[],e.bindFramebuffer(t.FRAMEBUFFER,y.__webglMultisampledFramebuffer);for(let _=0;_<h.length;_++){let B=h[_];y.__webglColorRenderbuffer[_]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,y.__webglColorRenderbuffer[_]);let z=r.convert(B.format,B.colorSpace),et=r.convert(B.type),q=F(B.internalFormat,z,et,B.normalized,B.colorSpace,T.isXRRenderTarget===!0),wt=mt(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,wt,q,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_,t.RENDERBUFFER,y.__webglColorRenderbuffer[_])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(y.__webglDepthRenderbuffer=t.createRenderbuffer(),qt(y.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(t.FRAMEBUFFER,null)}}if(R){e.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture),j(t.TEXTURE_CUBE_MAP,m);for(let _=0;_<6;_++)if(m.mipmaps&&m.mipmaps.length>0)for(let B=0;B<m.mipmaps.length;B++)yt(y.__webglFramebuffer[_][B],T,m,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+_,B);else yt(y.__webglFramebuffer[_],T,m,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+_,0);v(m)&&x(t.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(A){for(let _=0,B=h.length;_<B;_++){let z=h[_],et=i.get(z),q=t.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(q=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),e.bindTexture(q,et.__webglTexture),j(q,z),yt(y.__webglFramebuffer,T,z,t.COLOR_ATTACHMENT0+_,q,0),v(z)&&x(q)}e.unbindTexture()}else{let _=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(_=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),e.bindTexture(_,V.__webglTexture),j(_,m),m.mipmaps&&m.mipmaps.length>0)for(let B=0;B<m.mipmaps.length;B++)yt(y.__webglFramebuffer[B],T,m,t.COLOR_ATTACHMENT0,_,B);else yt(y.__webglFramebuffer,T,m,t.COLOR_ATTACHMENT0,_,0);v(m)&&x(_),e.unbindTexture()}T.depthBuffer&&Ct(T)},this.updateRenderTargetMipmap=function(T){let m=T.textures;for(let y=0,V=m.length;y<V;y++){let h=m[y];if(v(h)){let R=N(T),A=i.get(h).__webglTexture;e.bindTexture(R,A),x(R),e.unbindTexture()}}},this.updateMultisampleRenderTarget=function(T){if(T.samples>0){if(Nt(T)===!1){let m=T.textures,y=T.width,V=T.height,h=t.COLOR_BUFFER_BIT,R=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,A=i.get(T),_=m.length>1;if(_)for(let z=0;z<m.length;z++)e.bindFramebuffer(t.FRAMEBUFFER,A.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+z,t.RENDERBUFFER,null),e.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+z,t.TEXTURE_2D,null,0);e.bindFramebuffer(t.READ_FRAMEBUFFER,A.__webglMultisampledFramebuffer);let B=T.texture.mipmaps;B&&B.length>0?e.bindFramebuffer(t.DRAW_FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(t.DRAW_FRAMEBUFFER,A.__webglFramebuffer);for(let z=0;z<m.length;z++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(h|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(h|=t.STENCIL_BUFFER_BIT)),_){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,A.__webglColorRenderbuffer[z]);let et=i.get(m[z]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,et,0)}t.blitFramebuffer(0,0,y,V,0,0,y,V,h,t.NEAREST),c===!0&&(ae.length=0,ue.length=0,ae.push(t.COLOR_ATTACHMENT0+z),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ae.push(R),ue.push(R),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ue)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ae))}if(e.bindFramebuffer(t.READ_FRAMEBUFFER,null),e.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),_)for(let z=0;z<m.length;z++){e.bindFramebuffer(t.FRAMEBUFFER,A.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+z,t.RENDERBUFFER,A.__webglColorRenderbuffer[z]);let et=i.get(m[z]).__webglTexture;e.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+z,t.TEXTURE_2D,et,0)}e.bindFramebuffer(t.DRAW_FRAMEBUFFER,A.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let m=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[m])}}},this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Nt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Cd(t,n){return{convert:function(e,i=Bn){let a,r=ce.getTransfer(i);if(e===an)return t.UNSIGNED_BYTE;if(e===Lo)return t.UNSIGNED_SHORT_4_4_4_4;if(e===Uo)return t.UNSIGNED_SHORT_5_5_5_1;if(e===cl)return t.UNSIGNED_INT_5_9_9_9_REV;if(e===ul)return t.UNSIGNED_INT_10F_11F_11F_REV;if(e===dl)return t.BYTE;if(e===fl)return t.SHORT;if(e===Li)return t.UNSIGNED_SHORT;if(e===No)return t.INT;if(e===Dn)return t.UNSIGNED_INT;if(e===ze)return t.FLOAT;if(e===Ye)return t.HALF_FLOAT;if(e===pl)return t.ALPHA;if(e===hl)return t.RGB;if(e===bn)return t.RGBA;if(e===di)return t.DEPTH_COMPONENT;if(e===kn)return t.DEPTH_STENCIL;if(e===ml)return t.RED;if(e===Io)return t.RED_INTEGER;if(e===$n)return t.RG;if(e===Oo)return t.RG_INTEGER;if(e===Fo)return t.RGBA_INTEGER;if(e===Zi||e===Ji||e===Qi||e===ta)if(r===Zt){if(a=n.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(e===Zi)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(e===Ji)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(e===Qi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(e===ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=n.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(e===Zi)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(e===Ji)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(e===Qi)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(e===ta)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(e===er||e===nr||e===ir||e===ar){if(a=n.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(e===er)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(e===nr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(e===ir)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(e===ar)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(e===rr||e===or||e===sr||e===lr||e===cr||e===ua||e===ur){if(a=n.get("WEBGL_compressed_texture_etc"),a===null)return null;if(e===rr||e===or)return r===Zt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(e===sr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(e===lr)return a.COMPRESSED_R11_EAC;if(e===cr)return a.COMPRESSED_SIGNED_R11_EAC;if(e===ua)return a.COMPRESSED_RG11_EAC;if(e===ur)return a.COMPRESSED_SIGNED_RG11_EAC}if(e===dr||e===fr||e===pr||e===hr||e===mr||e===vr||e===gr||e===_r||e===xr||e===Sr||e===Tr||e===br||e===wr||e===Er){if(a=n.get("WEBGL_compressed_texture_astc"),a===null)return null;if(e===dr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(e===fr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(e===pr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(e===hr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(e===mr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(e===vr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(e===gr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(e===_r)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(e===xr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(e===Sr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(e===Tr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(e===br)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(e===wr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(e===Er)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(e===Mr||e===yr||e===Cr){if(a=n.get("EXT_texture_compression_bptc"),a===null)return null;if(e===Mr)return r===Zt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(e===yr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(e===Cr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(e===Rr||e===Ar||e===da||e===Pr){if(a=n.get("EXT_texture_compression_rgtc"),a===null)return null;if(e===Rr)return a.COMPRESSED_RED_RGTC1_EXT;if(e===Ar)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(e===da)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(e===Pr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return e===ui?t.UNSIGNED_INT_24_8:t[e]!==void 0?t[e]:null}}}var Rd=new En,ls=new Pt;function Ad(t,n){function e(a,r){a.matrixAutoUpdate===!0&&a.updateMatrix(),r.value.copy(a.matrix)}function i(a,r){a.opacity.value=r.opacity,r.color&&a.diffuse.value.copy(r.color),r.emissive&&a.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(a.map.value=r.map,e(r.map,a.mapTransform)),r.alphaMap&&(a.alphaMap.value=r.alphaMap,e(r.alphaMap,a.alphaMapTransform)),r.bumpMap&&(a.bumpMap.value=r.bumpMap,e(r.bumpMap,a.bumpMapTransform),a.bumpScale.value=r.bumpScale,r.side===We&&(a.bumpScale.value*=-1)),r.normalMap&&(a.normalMap.value=r.normalMap,e(r.normalMap,a.normalMapTransform),a.normalScale.value.copy(r.normalScale),r.side===We&&a.normalScale.value.negate()),r.displacementMap&&(a.displacementMap.value=r.displacementMap,e(r.displacementMap,a.displacementMapTransform),a.displacementScale.value=r.displacementScale,a.displacementBias.value=r.displacementBias),r.emissiveMap&&(a.emissiveMap.value=r.emissiveMap,e(r.emissiveMap,a.emissiveMapTransform)),r.specularMap&&(a.specularMap.value=r.specularMap,e(r.specularMap,a.specularMapTransform)),r.alphaTest>0&&(a.alphaTest.value=r.alphaTest);let o=n.get(r),l=o.envMap,u=o.envMapRotation;l&&(a.envMap.value=l,a.envMapRotation.value.setFromMatrix4(Rd.makeRotationFromEuler(u)).transpose(),l.isCubeTexture&&l.isRenderTargetTexture===!1&&a.envMapRotation.value.premultiply(ls),a.reflectivity.value=r.reflectivity,a.ior.value=r.ior,a.refractionRatio.value=r.refractionRatio),r.lightMap&&(a.lightMap.value=r.lightMap,a.lightMapIntensity.value=r.lightMapIntensity,e(r.lightMap,a.lightMapTransform)),r.aoMap&&(a.aoMap.value=r.aoMap,a.aoMapIntensity.value=r.aoMapIntensity,e(r.aoMap,a.aoMapTransform))}return{refreshFogUniforms:function(a,r){r.color.getRGB(a.fogColor.value,Bo(t)),r.isFog?(a.fogNear.value=r.near,a.fogFar.value=r.far):r.isFogExp2&&(a.fogDensity.value=r.density)},refreshMaterialUniforms:function(a,r,o,l,u){r.isNodeMaterial?r.uniformsNeedUpdate=!1:r.isMeshBasicMaterial?i(a,r):r.isMeshLambertMaterial?(i(a,r),r.envMap&&(a.envMapIntensity.value=r.envMapIntensity)):r.isMeshToonMaterial?(i(a,r),(function(c,s){s.gradientMap&&(c.gradientMap.value=s.gradientMap)})(a,r)):r.isMeshPhongMaterial?(i(a,r),(function(c,s){c.specular.value.copy(s.specular),c.shininess.value=Math.max(s.shininess,1e-4)})(a,r),r.envMap&&(a.envMapIntensity.value=r.envMapIntensity)):r.isMeshStandardMaterial?(i(a,r),(function(c,s){c.metalness.value=s.metalness,s.metalnessMap&&(c.metalnessMap.value=s.metalnessMap,e(s.metalnessMap,c.metalnessMapTransform)),c.roughness.value=s.roughness,s.roughnessMap&&(c.roughnessMap.value=s.roughnessMap,e(s.roughnessMap,c.roughnessMapTransform)),s.envMap&&(c.envMapIntensity.value=s.envMapIntensity)})(a,r),r.isMeshPhysicalMaterial&&(function(c,s,p){c.ior.value=s.ior,s.sheen>0&&(c.sheenColor.value.copy(s.sheenColor).multiplyScalar(s.sheen),c.sheenRoughness.value=s.sheenRoughness,s.sheenColorMap&&(c.sheenColorMap.value=s.sheenColorMap,e(s.sheenColorMap,c.sheenColorMapTransform)),s.sheenRoughnessMap&&(c.sheenRoughnessMap.value=s.sheenRoughnessMap,e(s.sheenRoughnessMap,c.sheenRoughnessMapTransform))),s.clearcoat>0&&(c.clearcoat.value=s.clearcoat,c.clearcoatRoughness.value=s.clearcoatRoughness,s.clearcoatMap&&(c.clearcoatMap.value=s.clearcoatMap,e(s.clearcoatMap,c.clearcoatMapTransform)),s.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=s.clearcoatRoughnessMap,e(s.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),s.clearcoatNormalMap&&(c.clearcoatNormalMap.value=s.clearcoatNormalMap,e(s.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(s.clearcoatNormalScale),s.side===We&&c.clearcoatNormalScale.value.negate())),s.dispersion>0&&(c.dispersion.value=s.dispersion),s.iridescence>0&&(c.iridescence.value=s.iridescence,c.iridescenceIOR.value=s.iridescenceIOR,c.iridescenceThicknessMinimum.value=s.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=s.iridescenceThicknessRange[1],s.iridescenceMap&&(c.iridescenceMap.value=s.iridescenceMap,e(s.iridescenceMap,c.iridescenceMapTransform)),s.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=s.iridescenceThicknessMap,e(s.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),s.transmission>0&&(c.transmission.value=s.transmission,c.transmissionSamplerMap.value=p.texture,c.transmissionSamplerSize.value.set(p.width,p.height),s.transmissionMap&&(c.transmissionMap.value=s.transmissionMap,e(s.transmissionMap,c.transmissionMapTransform)),c.thickness.value=s.thickness,s.thicknessMap&&(c.thicknessMap.value=s.thicknessMap,e(s.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=s.attenuationDistance,c.attenuationColor.value.copy(s.attenuationColor)),s.anisotropy>0&&(c.anisotropyVector.value.set(s.anisotropy*Math.cos(s.anisotropyRotation),s.anisotropy*Math.sin(s.anisotropyRotation)),s.anisotropyMap&&(c.anisotropyMap.value=s.anisotropyMap,e(s.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=s.specularIntensity,c.specularColor.value.copy(s.specularColor),s.specularColorMap&&(c.specularColorMap.value=s.specularColorMap,e(s.specularColorMap,c.specularColorMapTransform)),s.specularIntensityMap&&(c.specularIntensityMap.value=s.specularIntensityMap,e(s.specularIntensityMap,c.specularIntensityMapTransform))})(a,r,u)):r.isMeshMatcapMaterial?(i(a,r),(function(c,s){s.matcap&&(c.matcap.value=s.matcap)})(a,r)):r.isMeshDepthMaterial?i(a,r):r.isMeshDistanceMaterial?(i(a,r),(function(c,s){let p=n.get(s).light;c.referencePosition.value.setFromMatrixPosition(p.matrixWorld),c.nearDistance.value=p.shadow.camera.near,c.farDistance.value=p.shadow.camera.far})(a,r)):r.isMeshNormalMaterial?i(a,r):r.isLineBasicMaterial?((function(c,s){c.diffuse.value.copy(s.color),c.opacity.value=s.opacity,s.map&&(c.map.value=s.map,e(s.map,c.mapTransform))})(a,r),r.isLineDashedMaterial&&(function(c,s){c.dashSize.value=s.dashSize,c.totalSize.value=s.dashSize+s.gapSize,c.scale.value=s.scale})(a,r)):r.isPointsMaterial?(function(c,s,p,S){c.diffuse.value.copy(s.color),c.opacity.value=s.opacity,c.size.value=s.size*p,c.scale.value=.5*S,s.map&&(c.map.value=s.map,e(s.map,c.uvTransform)),s.alphaMap&&(c.alphaMap.value=s.alphaMap,e(s.alphaMap,c.alphaMapTransform)),s.alphaTest>0&&(c.alphaTest.value=s.alphaTest)})(a,r,o,l):r.isSpriteMaterial?(function(c,s){c.diffuse.value.copy(s.color),c.opacity.value=s.opacity,c.rotation.value=s.rotation,s.map&&(c.map.value=s.map,e(s.map,c.mapTransform)),s.alphaMap&&(c.alphaMap.value=s.alphaMap,e(s.alphaMap,c.alphaMapTransform)),s.alphaTest>0&&(c.alphaTest.value=s.alphaTest)})(a,r):r.isShadowMaterial?(a.color.value.copy(r.color),a.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}}}ls.set(-1,0,0,0,1,0,0,0,1);var Pd=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),un=null,Dd=class{constructor(t={}){let n,{canvas:e=el(),context:i=null,depth:a=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:c=!1,powerPreference:s="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:S=!1,outputBufferType:g=an}=t;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");n=i.getContextAttributes().alpha}else n=o;let b=g,f=new Set([Fo,Oo,Io]),w=new Set([an,Dn,Li,ui,Lo,Uo]),v=new Uint32Array(4),x=new Int32Array(4),N=new Mt,F=null,U=null,M=[],I=[],Z=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,ot=!1,tt=null,it=null,at=null,X=null;this._outputColorSpace=tn;let j=0,k=0,D=null,dt=-1,yt=null,qt=new ie,Ft=new ie,Ct=null,ae=new oe(0),ue=0,mt=e.width,Nt=e.height,Yt=1,$t=null,T=null,m=new ie(0,0,mt,Nt),y=new ie(0,0,mt,Nt),V=!1,h=new Ao,R=!1,A=!1,_=new En,B=new Mt,z=new ie,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},q=!1;function wt(){return D===null?Yt:1}let st,ht,W,Xt,G,Q,Dt,Vt,de,fe,we,vt,Ht,At,Qt,te,me,He,Ve,gn,$e,ln,_i,E=i;function Ia(d,C){return e.getContext(d,C)}try{let d={alpha:!0,depth:a,stencil:r,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:c,powerPreference:s,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nl}`),e.addEventListener("webglcontextlost",Fa,!1),e.addEventListener("webglcontextrestored",za,!1),e.addEventListener("webglcontextcreationerror",Ba,!1),E===null){let C="webgl2";if(E=Ia(C,d),E===null)throw Ia(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(d){throw re("WebGLRenderer: "+d.message),d}function Oa(){st=new Qc(E),st.init(),$e=new Cd(E,st),ht=new Kc(E,st,t,$e),W=new Md(E,st),ht.reversedDepthBuffer&&S&&W.buffers.depth.setReversed(!0),it=E.createFramebuffer(),at=E.createFramebuffer(),X=E.createFramebuffer(),Xt=new nu(E),G=new hd,Q=new yd(E,st,W,G,ht,$e,Xt),Dt=new Jc(P),Vt=new $c(E),ln=new qc(E,Vt),de=new tu(E,Vt,Xt,ln),fe=new au(E,de,Vt,ln,Xt),He=new iu(E,ht,Q),Qt=new Zc(G),we=new pd(P,Dt,st,ht,ln,Qt),vt=new Ad(P,G),Ht=new vd,At=new Td(st),me=new jc(P,Dt,W,fe,n,u),te=new Ed(P,fe,ht),_i={update(){throw new Error("UniformsGroups are not supported by the Spline runtime")},bind(){throw new Error("UniformsGroups are not supported by the Spline runtime")},dispose(){}},Ve=new Yc(E,st,Xt),gn=new eu(E,st,Xt),Xt.programs=we.programs,P.capabilities=ht,P.extensions=st,P.properties=G,P.renderLists=Ht,P.shadowMap=te,P.state=W,P.info=Xt}Oa(),b!==an&&(Z=new ou(b,e.width,e.height,l,a,r));let ve=Object.assign(new Ro,{enabled:!1,isPresenting:!1,cameraAutoUpdate:!0,setFramebufferScaleFactor(){},setReferenceSpaceType(){},getReferenceSpace:()=>null,setReferenceSpace(){},getBaseLayer:()=>null,getBinding:()=>null,getFrame:()=>null,getSession:()=>null,async setSession(){throw new Error("WebXR is not supported by the Spline runtime")},getEnvironmentBlendMode(){},getDepthTexture:()=>null,updateCamera(){},getCamera:()=>null,getFoveation(){},setFoveation(){},hasDepthSensing:()=>!1,getDepthSensingMesh:()=>null,setAnimationLoop(){},getController:()=>null,getControllerGrip:()=>null,getHand:()=>null,dispose(){}});function Fa(d){d.preventDefault(),Qa("WebGLRenderer: Context Lost."),ot=!0}function za(){Qa("WebGLRenderer: Context Restored."),ot=!1;let d=Xt.autoReset,C=te.enabled,L=te.autoUpdate,H=te.needsUpdate,O=te.type;Oa(),Xt.autoReset=d,te.enabled=C,te.autoUpdate=L,te.needsUpdate=H,te.type=O}function Ba(d){re("WebGLRenderer: A WebGL context could not be created. Reason: ",d.statusMessage)}function Va(d){let C=d.target;C.removeEventListener("dispose",Va),(function(L){(function(H){let O=G.get(H).programs;O!==void 0&&(O.forEach(function(J){we.releaseProgram(J)}),H.isShaderMaterial&&we.releaseShaderCache(H))})(L),G.remove(L)})(C)}function Ha(d,C,L){d.transparent===!0&&d.side===rn&&d.forceSinglePass===!1?(d.side=We,d.needsUpdate=!0,Si(d,C,L),d.side=ci,d.needsUpdate=!0,Si(d,C,L),d.side=rn):Si(d,C,L)}this.xr=ve,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let d=st.get("WEBGL_lose_context");d&&d.loseContext()},this.forceContextRestore=function(){let d=st.get("WEBGL_lose_context");d&&d.restoreContext()},this.getPixelRatio=function(){return Yt},this.setPixelRatio=function(d){d!==void 0&&(Yt=d,this.setSize(mt,Nt,!1))},this.getSize=function(d){return d.set(mt,Nt)},this.setSize=function(d,C,L=!0){ve.isPresenting?ne("WebGLRenderer: Can't change size while VR device is presenting."):(mt=d,Nt=C,e.width=Math.floor(d*Yt),e.height=Math.floor(C*Yt),L===!0&&(e.style.width=d+"px",e.style.height=C+"px"),Z!==null&&Z.setSize(e.width,e.height),this.setViewport(0,0,d,C))},this.getDrawingBufferSize=function(d){return d.set(mt*Yt,Nt*Yt).floor()},this.setDrawingBufferSize=function(d,C,L){mt=d,Nt=C,Yt=L,e.width=Math.floor(d*L),e.height=Math.floor(C*L),this.setViewport(0,0,d,C)},this.setEffects=function(d){if(b!==an){if(d){for(let C=0;C<d.length;C++)if(d[C].isOutputPass===!0){ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Z.setEffects(d||[])}else re("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.")},this.getCurrentViewport=function(d){return d.copy(qt)},this.getViewport=function(d){return d.copy(m)},this.setViewport=function(d,C,L,H){d.isVector4?m.set(d.x,d.y,d.z,d.w):m.set(d,C,L,H),W.viewport(qt.copy(m).multiplyScalar(Yt).round())},this.getScissor=function(d){return d.copy(y)},this.setScissor=function(d,C,L,H){d.isVector4?y.set(d.x,d.y,d.z,d.w):y.set(d,C,L,H),W.scissor(Ft.copy(y).multiplyScalar(Yt).round())},this.getScissorTest=function(){return V},this.setScissorTest=function(d){W.setScissorTest(V=d)},this.setOpaqueSort=function(d){$t=d},this.setTransparentSort=function(d){T=d},this.getClearColor=function(d){return d.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(d=!0,C=!0,L=!0){let H=0;if(d){let O=!1;if(D!==null){let J=D.texture.format;O=f.has(J)}if(O){let J=D.texture.type,nt=w.has(J),ct=me.getClearColor(),ut=me.getClearAlpha(),xt=ct.r,Lt=ct.g,Ut=ct.b;nt?(v[0]=xt,v[1]=Lt,v[2]=Ut,v[3]=ut,E.clearBufferuiv(E.COLOR,0,v)):(x[0]=xt,x[1]=Lt,x[2]=Ut,x[3]=ut,E.clearBufferiv(E.COLOR,0,x))}else H|=E.COLOR_BUFFER_BIT}C&&(H|=E.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),L&&(H|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&E.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(d){d.setRenderer(this),tt=d},this.dispose=function(){e.removeEventListener("webglcontextlost",Fa,!1),e.removeEventListener("webglcontextrestored",za,!1),e.removeEventListener("webglcontextcreationerror",Ba,!1),me.dispose(),Ht.dispose(),At.dispose(),G.dispose(),Dt.dispose(),fe.dispose(),ln.dispose(),_i.dispose(),we.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",Ga),ve.removeEventListener("sessionend",ka),Mn.stop()},this.renderBufferDirect=function(d,C,L,H,O,J){C===null&&(C=et);let nt=O.isMesh&&O.matrixWorld.determinantAffine()<0,ct=(function(Rt,Ee,ye,St,Tt){Ee.isScene!==!0&&(Ee=et),Q.resetTextureUnits();let Xe=Ee.fog,Wi=St.isMeshStandardMaterial||St.isMeshLambertMaterial||St.isMeshPhongMaterial?Ee.environment:null,Ti=D===null?P.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ce.workingColorSpace,Qn=St.isMeshStandardMaterial||St.isMeshLambertMaterial&&!St.envMap||St.isMeshPhongMaterial&&!St.envMap,Ze=Dt.get(St.envMap||Wi,Qn),Nn=St.vertexColors===!0&&!!ye.attributes.color&&ye.attributes.color.itemSize===4,cn=!!ye.attributes.tangent&&(!!St.normalMap||St.anisotropy>0),$i=!!ye.morphAttributes.position,In=!!ye.morphAttributes.normal,$s=!!ye.morphAttributes.color,Ya=mn;St.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ya=P.toneMapping);let Ka=ye.morphAttributes.position||ye.morphAttributes.normal||ye.morphAttributes.color,Xs=Ka!==void 0?Ka.length:0,Et=G.get(St),yn=U.state.lights;if(R===!0&&(A===!0||Rt!==yt)){let zt=Rt===yt&&St.id===dt;Qt.setState(St,Rt,zt)}let Xi=!1;St.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==yn.state.version||Et.outputColorSpace!==Ti||Tt.isBatchedMesh&&Et.batching===!1||!Tt.isBatchedMesh&&Et.batching===!0||Tt.isBatchedMesh&&Et.batchingColor===!0&&Tt.colorTexture===null||Tt.isBatchedMesh&&Et.batchingColor===!1&&Tt.colorTexture!==null||Tt.isInstancedMesh&&Et.instancing===!1||!Tt.isInstancedMesh&&Et.instancing===!0||Tt.isSkinnedMesh&&Et.skinning===!1||!Tt.isSkinnedMesh&&Et.skinning===!0||Tt.isInstancedMesh&&Et.instancingColor===!0&&Tt.instanceColor===null||Tt.isInstancedMesh&&Et.instancingColor===!1&&Tt.instanceColor!==null||Tt.isInstancedMesh&&Et.instancingMorph===!0&&Tt.morphTexture===null||Tt.isInstancedMesh&&Et.instancingMorph===!1&&Tt.morphTexture!==null||Et.envMap!==Ze||St.fog===!0&&Et.fog!==Xe||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Qt.numPlanes||Et.numIntersection!==Qt.numIntersection)||Et.vertexAlphas!==Nn||Et.vertexTangents!==cn||Et.morphTargets!==$i||Et.morphNormals!==In||Et.morphColors!==$s||Et.toneMapping!==Ya||Et.morphTargetsCount!==Xs||!!Et.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(Xi=!0):(Xi=!0,Et.__version=St.version);let _n=Et.currentProgram;Xi===!0&&(_n=Si(St,Ee,Tt),tt&&St.isNodeMaterial&&tt.onUpdateProgram(St,_n,Et));let Za=!1,On=!1,ji=!1,ee=_n.getUniforms(),Ge=Et.uniforms;if(W.useProgram(_n.program)&&(Za=!0,On=!0,ji=!0),St.id!==dt&&(dt=St.id,On=!0),Et.needsLights){let zt=(function(pe,Yi){if(pe.length===0)return null;if(pe.length===1)return pe[0].texture!==null?pe[0]:null;N.setFromMatrixPosition(Yi.matrixWorld);for(let Fn=0,js=pe.length;Fn<js;Fn++){let Ki=pe[Fn];if(Ki.texture!==null&&Ki.boundingBox.containsPoint(N))return Ki}return null})(U.state.lightProbeGridArray,Tt);Et.lightProbeGrid!==zt&&(Et.lightProbeGrid=zt,On=!0)}if(Za||yt!==Rt){W.buffers.depth.getReversed()&&Rt.reversedDepth!==!0&&(Rt._reversedDepth=!0,Rt.updateProjectionMatrix()),ee.setValue(E,"projectionMatrix",Rt.projectionMatrix),ee.setValue(E,"viewMatrix",Rt.matrixWorldInverse);let zt=ee.map.cameraPosition;zt!==void 0&&zt.setValue(E,B.setFromMatrixPosition(Rt.matrixWorld)),ht.logarithmicDepthBuffer&&ee.setValue(E,"logDepthBufFC",2/(Math.log(Rt.far+1)/Math.LN2)),(St.isMeshPhongMaterial||St.isMeshToonMaterial||St.isMeshLambertMaterial||St.isMeshBasicMaterial||St.isMeshStandardMaterial||St.isShaderMaterial)&&ee.setValue(E,"isOrthographic",Rt.isOrthographicCamera===!0),yt!==Rt&&(yt=Rt,On=!0,ji=!0)}if(Et.needsLights&&(yn.state.directionalShadowMap.length>0&&ee.setValue(E,"directionalShadowMap",yn.state.directionalShadowMap,Q),yn.state.spotShadowMap.length>0&&ee.setValue(E,"spotShadowMap",yn.state.spotShadowMap,Q),yn.state.pointShadowMap.length>0&&ee.setValue(E,"pointShadowMap",yn.state.pointShadowMap,Q)),Tt.isSkinnedMesh){ee.setOptional(E,Tt,"bindMatrix"),ee.setOptional(E,Tt,"bindMatrixInverse");let zt=Tt.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),ee.setValue(E,"boneTexture",zt.boneTexture,Q))}Tt.isBatchedMesh&&(ee.setOptional(E,Tt,"batchingTexture"),ee.setValue(E,"batchingTexture",Tt._matricesTexture,Q),ee.setOptional(E,Tt,"batchingIdTexture"),ee.setValue(E,"batchingIdTexture",Tt._indirectTexture,Q),ee.setOptional(E,Tt,"batchingColorTexture"),Tt._colorsTexture!==null&&ee.setValue(E,"batchingColorTexture",Tt._colorsTexture,Q));let qi=ye.morphAttributes;if((qi.position!==void 0||qi.normal!==void 0||qi.color!==void 0)&&He.update(Tt,ye,_n),(On||Et.receiveShadow!==Tt.receiveShadow)&&(Et.receiveShadow=Tt.receiveShadow,ee.setValue(E,"receiveShadow",Tt.receiveShadow)),(St.isMeshStandardMaterial||St.isMeshLambertMaterial||St.isMeshPhongMaterial)&&St.envMap===null&&Ee.environment!==null&&(Ge.envMapIntensity.value=Ee.environmentIntensity),Ge.dfgLUT!==void 0&&(Ge.dfgLUT.value=(un===null&&((un=new Pi(Pd,16,16,$n,Ye)).name="DFG_LUT",un.minFilter=jt,un.magFilter=jt,un.wrapS=Re,un.wrapT=Re,un.generateMipmaps=!1,un.needsUpdate=!0),un)),On){if(ee.setValue(E,"toneMappingExposure",P.toneMappingExposure),Et.needsLights&&(function(zt,pe){zt.ambientLightColor.needsUpdate=pe,zt.lightProbe.needsUpdate=pe,zt.directionalLights.needsUpdate=pe,zt.directionalLightShadows.needsUpdate=pe,zt.pointLights.needsUpdate=pe,zt.pointLightShadows.needsUpdate=pe,zt.spotLights.needsUpdate=pe,zt.spotLightShadows.needsUpdate=pe,zt.rectAreaLights.needsUpdate=pe,zt.hemisphereLights.needsUpdate=pe})(Ge,ji),Xe&&St.fog===!0&&vt.refreshFogUniforms(Ge,Xe),vt.refreshMaterialUniforms(Ge,St,Yt,Nt,U.state.transmissionRenderTarget[Rt.id]),Et.needsLights&&Et.lightProbeGrid){let zt=Et.lightProbeGrid;Ge.probesSH.value=zt.texture,Ge.probesMin.value.copy(zt.boundingBox.min),Ge.probesMax.value.copy(zt.boundingBox.max),Ge.probesResolution.value.copy(zt.resolution)}Ai.upload(E,ja(Et),Ge,Q)}if(St.isShaderMaterial&&St.uniformsNeedUpdate===!0&&(Ai.upload(E,ja(Et),Ge,Q),St.uniformsNeedUpdate=!1),St.isSpriteMaterial&&ee.setValue(E,"center",Tt.center),ee.setValue(E,"modelViewMatrix",Tt.modelViewMatrix),ee.setValue(E,"normalMatrix",Tt.normalMatrix),ee.setValue(E,"modelMatrix",Tt.matrixWorld),Tt.previousModelViewMatrix&&ee.setValue(E,"previousModelViewMatrix",Tt.previousModelViewMatrix),Rt.previousProjectionMatrix&&ee.setValue(E,"previousProjectionMatrix",Rt.previousProjectionMatrix),St.uniformsGroups!==void 0){let zt=St.uniformsGroups;for(let pe=0,Yi=zt.length;pe<Yi;pe++){let Fn=zt[pe];_i.update(Fn,_n),_i.bind(Fn,_n)}}return _n})(d,C,L,H,O);W.setMaterial(H,nt);let ut=L.index,xt=1;if(H.wireframe===!0){if(ut=de.getWireframeAttribute(L),ut===void 0)return;xt=2}let Lt=L.drawRange,Ut=L.attributes.position,gt=Lt.start*xt,It=(Lt.start+Lt.count)*xt;J!==null&&(gt=Math.max(gt,J.start*xt),It=Math.min(It,(J.start+J.count)*xt)),ut!==null?(gt=Math.max(gt,0),It=Math.min(It,ut.count)):Ut!=null&&(gt=Math.max(gt,0),It=Math.min(It,Ut.count));let xe=It-gt;if(xe<0||xe===1/0)return;ln.setup(O,H,ct,L,ut);let ge,Kt=Ve;if(ut!==null&&(ge=Vt.get(ut),Kt=gn,Kt.setIndex(ge)),O.isMesh)H.wireframe===!0?(W.setLineWidth(H.wireframeLinewidth*wt()),Kt.setMode(E.LINES)):Kt.setMode(E.TRIANGLES);else if(O.isLine){let Rt=H.linewidth;Rt===void 0&&(Rt=1),W.setLineWidth(Rt*wt()),O.isLineSegments?Kt.setMode(E.LINES):O.isLineLoop?Kt.setMode(E.LINE_LOOP):Kt.setMode(E.LINE_STRIP)}else O.isPoints?Kt.setMode(E.POINTS):O.isSprite&&Kt.setMode(E.TRIANGLES);if(O.isBatchedMesh)if(st.get("WEBGL_multi_draw"))Kt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Rt=O._multiDrawStarts,Ee=O._multiDrawCounts,ye=O._multiDrawCount,St=ut?Vt.get(ut).bytesPerElement:1,Tt=G.get(H).currentProgram.getUniforms();for(let Xe=0;Xe<ye;Xe++)Tt.setValue(E,"_gl_DrawID",Xe),Kt.render(Rt[Xe]/St,Ee[Xe])}else if(O.isInstancedMesh)Kt.renderInstances(gt,xe,O.count);else if(L.isInstancedBufferGeometry){let Rt=L._maxInstanceCount!==void 0?L._maxInstanceCount:1/0,Ee=Math.min(L.instanceCount,Rt);Kt.renderInstances(gt,xe,Ee)}else Kt.render(gt,xe)},this.compile=function(d,C,L=null){L===null&&(L=d),U=At.get(L),U.init(C),I.push(U),L.traverseVisible(function(O){O.isLight&&O.layers.test(C.layers)&&(U.pushLight(O),O.castShadow&&U.pushShadow(O))}),d!==L&&d.traverseVisible(function(O){O.isLight&&O.layers.test(C.layers)&&(U.pushLight(O),O.castShadow&&U.pushShadow(O))}),U.setupLights();let H=new Set;return d.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let J=O.material;if(J)if(Array.isArray(J))for(let nt=0;nt<J.length;nt++){let ct=J[nt];Ha(ct,L,O),H.add(ct)}else Ha(J,L,O),H.add(J)}),U=I.pop(),H},this.compileAsync=function(d,C,L=null){let H=this.compile(d,C,L);return new Promise(O=>{function J(){H.forEach(function(nt){G.get(nt).currentProgram.isReady()&&H.delete(nt)}),H.size!==0?setTimeout(J,10):O(d)}st.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Gi=null;function Ga(){Mn.stop()}function ka(){Mn.start()}let Mn=new Wc;function ki(d,C,L,H){if(d.visible===!1)return;if(d.layers.test(C.layers)){if(d.isGroup)L=d.renderOrder;else if(d.isLOD)d.autoUpdate===!0&&d.update(C);else if(d.isLightProbeGrid)U.pushLightProbeGrid(d);else if(d.isLight)U.pushLight(d),d.castShadow&&U.pushShadow(d);else if(d.isSprite){if(!d.frustumCulled||h.intersectsSprite(d)){H&&z.setFromMatrixPosition(d.matrixWorld).applyMatrix4(_);let J=fe.update(d),nt=d.material;nt.visible&&F.push(d,J,nt,L,z.z,null)}}else if((d.isMesh||d.isLine||d.isPoints)&&(!d.frustumCulled||h.intersectsObject(d))){let J=fe.update(d),nt=d.material;if(H&&(d.boundingSphere!==void 0?(d.boundingSphere===null&&d.computeBoundingSphere(),z.copy(d.boundingSphere.center)):(J.boundingSphere===null&&J.computeBoundingSphere(),z.copy(J.boundingSphere.center)),z.applyMatrix4(d.matrixWorld).applyMatrix4(_)),Array.isArray(nt)){let ct=J.groups;for(let ut=0,xt=ct.length;ut<xt;ut++){let Lt=ct[ut],Ut=nt[Lt.materialIndex];Ut&&Ut.visible&&F.push(d,J,Ut,L,z.z,Lt)}}else nt.visible&&F.push(d,J,nt,L,z.z,null)}}let O=d.children;for(let J=0,nt=O.length;J<nt;J++)ki(O[J],C,L,H)}function Wa(d,C,L,H){let{opaque:O,transmissive:J,transparent:nt}=d;U.setupLightsView(L),R===!0&&Qt.setGlobalState(P.clippingPlanes,L),H&&W.viewport(qt.copy(H)),O.length>0&&xi(O,C,L),J.length>0&&xi(J,C,L),nt.length>0&&xi(nt,C,L),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function $a(d,C,L,H){if((L.isScene===!0?L.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[H.id]===void 0){let Ut=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[H.id]=new se(1,1,{generateMipmaps:!0,type:Ut?Ye:an,minFilter:Pn,samples:Math.max(4,ht.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace})}let O=U.state.transmissionRenderTarget[H.id],J=H.viewport||qt;O.setSize(J.z*P.transmissionResolutionScale,J.w*P.transmissionResolutionScale);let nt=P.getRenderTarget(),ct=P.getActiveCubeFace(),ut=P.getActiveMipmapLevel();P.setRenderTarget(O),P.getClearColor(ae),ue=P.getClearAlpha(),ue<1&&P.setClearColor(16777215,.5),P.clear(),q&&me.render(L);let xt=P.toneMapping;P.toneMapping=mn;let Lt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),U.setupLightsView(H),R===!0&&Qt.setGlobalState(P.clippingPlanes,H),xi(d,L,H),Q.updateMultisampleRenderTarget(O),Q.updateRenderTargetMipmap(O),st.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let gt=0,It=C.length;gt<It;gt++){let xe=C[gt],{object:ge,geometry:Kt,material:Rt,group:Ee}=xe;if(Rt.side===rn&&ge.layers.test(H.layers)){let ye=Rt.side;Rt.side=We,Rt.needsUpdate=!0,Xa(ge,L,H,Kt,Rt,Ee),Rt.side=ye,Rt.needsUpdate=!0,Ut=!0}}Ut===!0&&(Q.updateMultisampleRenderTarget(O),Q.updateRenderTargetMipmap(O))}P.setRenderTarget(nt,ct,ut),P.setClearColor(ae,ue),Lt!==void 0&&(H.viewport=Lt),P.toneMapping=xt}function xi(d,C,L){let H=C.isScene===!0?C.overrideMaterial:null;for(let O=0,J=d.length;O<J;O++){let nt=d[O],{object:ct,geometry:ut,group:xt}=nt,Lt=nt.material;Lt.allowOverride===!0&&H!==null&&(Lt=H),ct.layers.test(L.layers)&&Xa(ct,C,L,ut,Lt,xt)}}function Xa(d,C,L,H,O,J){d.onBeforeRender(P,C,L,H,O,J),d.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,d.matrixWorld),d.normalMatrix.getNormalMatrix(d.modelViewMatrix),O.onBeforeRender(P,C,L,H,d,J),O.transparent===!0&&O.side===rn&&O.forceSinglePass===!1?(O.side=We,O.needsUpdate=!0,P.renderBufferDirect(L,C,H,O,d,J),O.side=ci,O.needsUpdate=!0,P.renderBufferDirect(L,C,H,O,d,J),O.side=rn):P.renderBufferDirect(L,C,H,O,d,J),d.onAfterRender(P,C,L,H,O,J)}function Si(d,C,L){C.isScene!==!0&&(C=et);let H=G.get(d),O=U.state.lights,J=U.state.shadowsArray,nt=O.state.version,ct=we.getParameters(d,O.state,J,C,L,U.state.lightProbeGridArray),ut=we.getProgramCacheKey(ct),xt=H.programs;H.environment=d.isMeshStandardMaterial||d.isMeshLambertMaterial||d.isMeshPhongMaterial?C.environment:null,H.fog=C.fog;let Lt=d.isMeshStandardMaterial||d.isMeshLambertMaterial&&!d.envMap||d.isMeshPhongMaterial&&!d.envMap;H.envMap=Dt.get(d.envMap||H.environment,Lt),H.envMapRotation=H.environment!==null&&d.envMap===null?C.environmentRotation:d.envMapRotation,xt===void 0&&(d.addEventListener("dispose",Va),xt=new Map,H.programs=xt);let Ut=xt.get(ut);if(Ut!==void 0){if(H.currentProgram===Ut&&H.lightsStateVersion===nt)return qa(d,ct),Ut}else ct.uniforms=we.getUniforms(d),tt!==null&&d.isNodeMaterial&&tt.build(d,L,ct),d.onBeforeCompile(ct,P),Ut=we.acquireProgram(ct,ut),xt.set(ut,Ut),H.uniforms=ct.uniforms;let gt=H.uniforms;return(!d.isShaderMaterial&&!d.isRawShaderMaterial||d.clipping===!0)&&(gt.clippingPlanes=Qt.uniform),qa(d,ct),H.needsLights=(function(It){return It.isMeshLambertMaterial||It.isMeshToonMaterial||It.isMeshPhongMaterial||It.isMeshStandardMaterial||It.isShadowMaterial||It.isShaderMaterial&&It.lights===!0})(d),H.lightsStateVersion=nt,H.needsLights&&(gt.ambientLightColor.value=O.state.ambient,gt.lightProbe.value=O.state.probe,gt.directionalLights.value=O.state.directional,gt.directionalLightShadows.value=O.state.directionalShadow,gt.spotLights.value=O.state.spot,gt.spotLightShadows.value=O.state.spotShadow,gt.rectAreaLights.value=O.state.rectArea,gt.ltc_1.value=O.state.rectAreaLTC1,gt.ltc_2.value=O.state.rectAreaLTC2,gt.pointLights.value=O.state.point,gt.pointLightShadows.value=O.state.pointShadow,gt.hemisphereLights.value=O.state.hemi,gt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,gt.spotLightMatrix.value=O.state.spotLightMatrix,gt.spotLightMap.value=O.state.spotLightMap,gt.pointShadowMatrix.value=O.state.pointShadowMatrix),H.lightProbeGrid=U.state.lightProbeGridArray.length>0,H.currentProgram=Ut,H.uniformsList=null,Ut}function ja(d){if(d.uniformsList===null){let C=d.currentProgram.getUniforms();d.uniformsList=Ai.seqWithValue(C.seq,d.uniforms)}return d.uniformsList}function qa(d,C){let L=G.get(d);L.outputColorSpace=C.outputColorSpace,L.batching=C.batching,L.batchingColor=C.batchingColor,L.instancing=C.instancing,L.instancingColor=C.instancingColor,L.instancingMorph=C.instancingMorph,L.skinning=C.skinning,L.morphTargets=C.morphTargets,L.morphNormals=C.morphNormals,L.morphColors=C.morphColors,L.morphTargetsCount=C.morphTargetsCount,L.numClippingPlanes=C.numClippingPlanes,L.numIntersection=C.numClipIntersection,L.vertexAlphas=C.vertexAlphas,L.vertexTangents=C.vertexTangents,L.toneMapping=C.toneMapping}Mn.setAnimationLoop(function(d){Gi&&Gi(d)}),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(d){Gi=d,ve.setAnimationLoop(d),d===null?Mn.stop():Mn.start()},ve.addEventListener("sessionstart",Ga),ve.addEventListener("sessionend",ka),this.render=function(d,C){if(C!==void 0&&C.isCamera!==!0)return void re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(ot===!0)return;tt!==null&&tt.renderStart(d,C);let L=ve.enabled===!0&&ve.isPresenting===!0,H=Z!==null&&(D===null||L)&&Z.begin(P,D);if(d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(Z===null||Z.isCompositing()===!1)&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(C),C=ve.getCamera()),d.isScene===!0&&d.onBeforeRender(P,d,C,D),U=At.get(d,I.length),U.init(C),U.state.textureUnits=Q.getTextureUnits(),I.push(U),_.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),h.setFromProjectionMatrix(_,tr,C.reversedDepth),A=this.localClippingEnabled,R=Qt.init(this.clippingPlanes,A),F=Ht.get(d,M.length),F.init(),M.push(F),ve.enabled===!0&&ve.isPresenting===!0){let J=P.xr.getDepthSensingMesh();J!==null&&ki(J,C,-1/0,P.sortObjects)}ki(d,C,0,P.sortObjects),F.finish(),P.sortObjects===!0&&F.sort($t,T,C.reversedDepth),q=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,q&&me.addToRenderList(F,d),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),R===!0&&Qt.beginShadows();let O=U.state.shadowsArray;if(te.render(O,d,C),R===!0&&Qt.endShadows(),(H&&Z.hasRenderPass())===!1){let J=F.opaque,nt=F.transmissive;if(U.setupLights(),C.isArrayCamera){let ct=C.cameras;if(nt.length>0)for(let ut=0,xt=ct.length;ut<xt;ut++)$a(J,nt,d,ct[ut]);q&&me.render(d);for(let ut=0,xt=ct.length;ut<xt;ut++){let Lt=ct[ut];Wa(F,d,Lt,Lt.viewport)}}else nt.length>0&&$a(J,nt,d,C),q&&me.render(d),Wa(F,d,C)}D!==null&&k===0&&(Q.updateMultisampleRenderTarget(D),Q.updateRenderTargetMipmap(D)),H&&Z.end(P),d.isScene===!0&&d.onAfterRender(P,d,C),ln.resetDefaultState(),dt=-1,yt=null,I.pop(),I.length>0?(U=I[I.length-1],Q.setTextureUnits(U.state.textureUnits),R===!0&&Qt.setGlobalState(P.clippingPlanes,U.state.camera)):U=null,M.pop(),F=M.length>0?M[M.length-1]:null,tt!==null&&tt.renderEnd()},this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(d,C,L){let H=G.get(d);H.__autoAllocateDepthBuffer=d.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),G.get(d.texture).__webglTexture=C,G.get(d.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:L,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(d,C){let L=G.get(d);L.__webglFramebuffer=C,L.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(d,C=0,L=0){D=d,j=C,k=L;let H=null,O=!1,J=!1;if(d){let nt=G.get(d);if(nt.__useDefaultFramebuffer!==void 0)return W.bindFramebuffer(E.FRAMEBUFFER,nt.__webglFramebuffer),qt.copy(d.viewport),Ft.copy(d.scissor),Ct=d.scissorTest,W.viewport(qt),W.scissor(Ft),W.setScissorTest(Ct),void(dt=-1);if(nt.__webglFramebuffer===void 0)Q.setupRenderTarget(d);else if(nt.__hasExternalTextures)Q.rebindTextures(d,G.get(d.texture).__webglTexture,G.get(d.depthTexture).__webglTexture);else if(d.depthBuffer){let xt=d.depthTexture;if(nt.__boundDepthTexture!==xt){if(xt!==null&&G.has(xt)&&(d.width!==xt.image.width||d.height!==xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(d)}}let ct=d.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(J=!0);let ut=G.get(d).__webglFramebuffer;d.isWebGLCubeRenderTarget?(H=Array.isArray(ut[C])?ut[C][L]:ut[C],O=!0):H=d.samples>0&&Q.useMultisampledRTT(d)===!1?G.get(d).__webglMultisampledFramebuffer:Array.isArray(ut)?ut[L]:ut,qt.copy(d.viewport),Ft.copy(d.scissor),Ct=d.scissorTest}else qt.copy(m).multiplyScalar(Yt).floor(),Ft.copy(y).multiplyScalar(Yt).floor(),Ct=V;if(L!==0&&(H=it),W.bindFramebuffer(E.FRAMEBUFFER,H)&&W.drawBuffers(d,H),W.viewport(qt),W.scissor(Ft),W.setScissorTest(Ct),O){let nt=G.get(d.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+C,nt.__webglTexture,L)}else if(J){let nt=C;for(let ct=0;ct<d.textures.length;ct++){let ut=G.get(d.textures[ct]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+ct,ut.__webglTexture,L,nt)}}else if(d!==null&&L!==0){let nt=G.get(d.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,nt.__webglTexture,L)}dt=-1},this.readRenderTargetPixels=function(d,C,L,H,O,J,nt,ct=0){if(!d||!d.isWebGLRenderTarget)return void re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ut=G.get(d).__webglFramebuffer;if(d.isWebGLCubeRenderTarget&&nt!==void 0&&(ut=ut[nt]),ut){W.bindFramebuffer(E.FRAMEBUFFER,ut);try{let xt=d.textures[ct],Lt=xt.format,Ut=xt.type;if(d.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+ct),!ht.textureFormatReadable(Lt))return void re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Ut))return void re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");C>=0&&C<=d.width-H&&L>=0&&L<=d.height-O&&E.readPixels(C,L,H,O,$e.convert(Lt),$e.convert(Ut),J)}finally{let xt=D!==null?G.get(D).__webglFramebuffer:null;W.bindFramebuffer(E.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(d,C,L,H,O,J,nt,ct=0){if(!d||!d.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ut=G.get(d).__webglFramebuffer;if(d.isWebGLCubeRenderTarget&&nt!==void 0&&(ut=ut[nt]),ut){if(C>=0&&C<=d.width-H&&L>=0&&L<=d.height-O){W.bindFramebuffer(E.FRAMEBUFFER,ut);let xt=d.textures[ct],Lt=xt.format,Ut=xt.type;if(d.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+ct),!ht.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,gt),E.bufferData(E.PIXEL_PACK_BUFFER,J.byteLength,E.STREAM_READ),E.readPixels(C,L,H,O,$e.convert(Lt),$e.convert(Ut),0);let It=D!==null?G.get(D).__webglFramebuffer:null;W.bindFramebuffer(E.FRAMEBUFFER,It);let xe=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await il(E,xe,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,gt),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,J),E.deleteBuffer(gt),E.deleteSync(xe),J}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(d,C=null,L=0){let H=Math.pow(2,-L),O=Math.floor(d.image.width*H),J=Math.floor(d.image.height*H),nt=C!==null?C.x:0,ct=C!==null?C.y:0;Q.setTexture2D(d,0),E.copyTexSubImage2D(E.TEXTURE_2D,L,0,0,nt,ct,O,J),W.unbindTexture()},this.copyTextureToTexture=function(d,C,L=null,H=null,O=0,J=0){let nt,ct,ut,xt,Lt,Ut,gt,It,xe,ge=d.isCompressedTexture?d.mipmaps[J]:d.image;if(L!==null)nt=L.max.x-L.min.x,ct=L.max.y-L.min.y,ut=L.isBox3?L.max.z-L.min.z:1,xt=L.min.x,Lt=L.min.y,Ut=L.isBox3?L.min.z:0;else{let Ze=Math.pow(2,-O);nt=Math.floor(ge.width*Ze),ct=Math.floor(ge.height*Ze),ut=d.isDataArrayTexture?ge.depth:d.isData3DTexture?Math.floor(ge.depth*Ze):1,xt=0,Lt=0,Ut=0}H!==null?(gt=H.x,It=H.y,xe=H.z):(gt=0,It=0,xe=0);let Kt,Rt=$e.convert(C.format),Ee=$e.convert(C.type);C.isData3DTexture?(Q.setTexture3D(C,0),Kt=E.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(Q.setTexture2DArray(C,0),Kt=E.TEXTURE_2D_ARRAY):(Q.setTexture2D(C,0),Kt=E.TEXTURE_2D),W.activeTexture(E.TEXTURE0),W.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,C.flipY),W.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),W.pixelStorei(E.UNPACK_ALIGNMENT,C.unpackAlignment);let ye=W.getParameter(E.UNPACK_ROW_LENGTH),St=W.getParameter(E.UNPACK_IMAGE_HEIGHT),Tt=W.getParameter(E.UNPACK_SKIP_PIXELS),Xe=W.getParameter(E.UNPACK_SKIP_ROWS),Wi=W.getParameter(E.UNPACK_SKIP_IMAGES);W.pixelStorei(E.UNPACK_ROW_LENGTH,ge.width),W.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ge.height),W.pixelStorei(E.UNPACK_SKIP_PIXELS,xt),W.pixelStorei(E.UNPACK_SKIP_ROWS,Lt),W.pixelStorei(E.UNPACK_SKIP_IMAGES,Ut);let Ti=d.isDataArrayTexture||d.isData3DTexture,Qn=C.isDataArrayTexture||C.isData3DTexture;if(d.isDepthTexture){let Ze=G.get(d),Nn=G.get(C),cn=G.get(Ze.__renderTarget),$i=G.get(Nn.__renderTarget);W.bindFramebuffer(E.READ_FRAMEBUFFER,cn.__webglFramebuffer),W.bindFramebuffer(E.DRAW_FRAMEBUFFER,$i.__webglFramebuffer);for(let In=0;In<ut;In++)Ti&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,G.get(d).__webglTexture,O,Ut+In),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,G.get(C).__webglTexture,J,xe+In)),E.blitFramebuffer(xt,Lt,nt,ct,gt,It,nt,ct,E.DEPTH_BUFFER_BIT,E.NEAREST);W.bindFramebuffer(E.READ_FRAMEBUFFER,null),W.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(O!==0||d.isRenderTargetTexture||G.has(d)){let Ze=G.get(d),Nn=G.get(C);W.bindFramebuffer(E.READ_FRAMEBUFFER,at),W.bindFramebuffer(E.DRAW_FRAMEBUFFER,X);for(let cn=0;cn<ut;cn++)Ti?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ze.__webglTexture,O,Ut+cn):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Ze.__webglTexture,O),Qn?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Nn.__webglTexture,J,xe+cn):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Nn.__webglTexture,J),O!==0?E.blitFramebuffer(xt,Lt,nt,ct,gt,It,nt,ct,E.COLOR_BUFFER_BIT,E.NEAREST):Qn?E.copyTexSubImage3D(Kt,J,gt,It,xe+cn,xt,Lt,nt,ct):E.copyTexSubImage2D(Kt,J,gt,It,xt,Lt,nt,ct);W.bindFramebuffer(E.READ_FRAMEBUFFER,null),W.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Qn?d.isDataTexture||d.isData3DTexture?E.texSubImage3D(Kt,J,gt,It,xe,nt,ct,ut,Rt,Ee,ge.data):C.isCompressedArrayTexture?E.compressedTexSubImage3D(Kt,J,gt,It,xe,nt,ct,ut,Rt,ge.data):E.texSubImage3D(Kt,J,gt,It,xe,nt,ct,ut,Rt,Ee,ge):d.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,J,gt,It,nt,ct,Rt,Ee,ge.data):d.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,J,gt,It,ge.width,ge.height,Rt,ge.data):E.texSubImage2D(E.TEXTURE_2D,J,gt,It,nt,ct,Rt,Ee,ge);W.pixelStorei(E.UNPACK_ROW_LENGTH,ye),W.pixelStorei(E.UNPACK_IMAGE_HEIGHT,St),W.pixelStorei(E.UNPACK_SKIP_PIXELS,Tt),W.pixelStorei(E.UNPACK_SKIP_ROWS,Xe),W.pixelStorei(E.UNPACK_SKIP_IMAGES,Wi),J===0&&C.generateMipmaps&&E.generateMipmap(Kt),W.unbindTexture()},this.initRenderTarget=function(d){G.get(d).__webglFramebuffer===void 0&&Q.setupRenderTarget(d)},this.initTexture=function(d){d.isCubeTexture?Q.setTextureCube(d,0):d.isData3DTexture?Q.setTexture3D(d,0):d.isDataArrayTexture||d.isCompressedArrayTexture?Q.setTexture2DArray(d,0):Q.setTexture2D(d,0),W.unbindTexture()},this.resetState=function(){j=0,k=0,D=null,W.reset(),ln.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),n.unpackColorSpace=ce._getUnpackColorSpace()}},De=class extends Be{constructor(t){super("b"),this.nodeType="Bool",this.value=t??!1}generateReadonly(t,n,e,i){return t.format(this.value?"true":"false",i,n)}},Rn=class extends Be{constructor(t=1,n){super("f[]"),this.nodeType="FloatArray",this.size=t,this.value=Array.isArray(n)?n:typeof n=="number"?new Array(t).fill(n):new Array(t).fill(0)}},Da=class extends Be{},Ld=class extends Da{constructor(t){super("v3"),this.image=t,this._value=new Mt}get value(){return this._value.x=this.image.isVideo?this.image.img.videoWidth??0:this.image.img.width,this._value.y=this.image.isVideo?this.image.img.videoHeight??0:this.image.img.height,this._value}},Ii=class extends Da{constructor(t,n,e=1008,i=1006){super("t"),this.image=t,this.wrap=n,this.minFilter=e,this.magFilter=i}get value(){return this.image.getTexture(this.wrap,this.minFilter,this.magFilter)}},cs=class extends Be{constructor(t){super("m3"),this.nodeType="Matrix3",this.value=t??new Pt}generateReadonly(t,n,e,i,a,r){return t.format("mat3("+this.value.elements.join(", ")+")",i,n)}get elements(){return this.value.elements}set elements(t){this.value.fromArray(t)}},sn=class extends Be{constructor(t){super("m4"),this.nodeType="Matrix4",this.value=t??new En}generateReadonly(t,n,e,i,a,r){return t.format("mat4("+this.value.elements.join(", ")+")",i,n)}get elements(){return this.value.elements}set elements(t){this.value.fromArray(t)}};function uo(t,n,e,i=0){t.setUvTransform(e[0],e[1],n[0],n[1],0,0,0).premultiply(new Pt().makeRotation(i*Bi.DEG2RAD))}var Ud=class extends cs{constructor(t,n,e=0){super(new Pt),this.repeat=t,this.offset=n,this.rotation=e,uo(this.value,t,n,e)}updateMatrix(){uo(this.value,this.repeat,this.offset,this.rotation)}},An=class extends Be{constructor(t=1,n){super("v4[]"),this.nodeType="Vector4Array",this.size=t,this.value=Array.isArray(n)?n:n instanceof ie?new Array(t).fill(n):new Array(t).fill(new ie(0))}},fo=class extends Ot{constructor(t,n,e,i){super("v3"),this.nodeType="Blend",this.a=t,this.b=n,this.alpha=e,this.mode=i}generate(t,n){if(t.isShader("fragment")){let e=[];return e.push(this.a.build(t,"c")),e.push(this.b.build(t,"c")),e.push(this.alpha.build(t,"f")),e.push(this.mode.build(t,"i")),t.format("spe_blend("+e.join(",")+")",this.getType(t),n)}return console.warn("BlendNode is not compatible with "+t.shader+" shader."),t.format("vec3( 0.0 )",this.getType(t),n)}},us=class extends Ot{constructor(t,n){super("v3"),this.nodeType="CustomColor",this.color=t,this.alpha=n,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(t,n){if(t.isShader("fragment")){let e=t.include(us.Nodes.customColor);t.addFragmentVariable(this.calpha,"float");let i=[];return i.push(this.color.build(t,"v3")),i.push(this.mask?`luminance(${this.mask.build(t,"v3")})`:"1.0"),i.push(this.alpha.build(t,"f")),i.push(this.calpha),t.format(e+"("+i.join(",")+")",this.getType(t),n)}return console.warn("CustomColorNode is not compatible with "+t.shader+" shader."),t.format("vec3( 0.0 )",this.getType(t),n)}},Oi=us;Oi.Nodes={customColor:new $(`vec3 customColor(vec3 color, float mask, float alpha, out float calpha) {
				float lalpha = alpha * mask;
				calpha =  lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0);
				accumAlpha += (1.0 - accumAlpha) * lalpha;

				return color;
			}`)};var ds=class extends Ot{constructor(t,n){super("v3"),this.nodeType="CustomNormal",this.cnormal=t,this.alpha=n,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(t,n){if(t.isShader("fragment")){let e=t.include(ds.Nodes.customNormal);t.addFragmentVariable(this.calpha,"float");let i=[];return i.push(this.cnormal.build(t,"v3")),i.push("normal"),i.push(this.mask?`luminance(${this.mask.flow(t,"v3").result})`:"1.0"),i.push(this.alpha.build(t,"f")),i.push(this.calpha),t.format(e+"("+i.join(",")+")",this.getType(t),n)}return console.warn("CustomNormalNode is not compatible with "+t.shader+" shader."),t.format("vec3( 0.0 )",this.getType(t),n)}},fs=ds;fs.Nodes={customNormal:new $(`vec3 customNormal(vec3 cnormal, vec3 norm, float mask, float alpha, out float calpha) {
				vec3 normal = packNormalToRGB( norm ).rgb;
				normal *= step( vec3(0.5), cnormal );

				float lalpha = alpha * mask;
				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * lalpha;

				return normal;
			}`)};var po=[{a:"y",b:"z",pole:"x"},{a:"z",b:"x",pole:"y"},{a:"x",b:"y",pole:"z"}],Gn=class extends Ot{constructor(t,n,e,i,a,r,o,l,u,c,s,p,S=-1){super("v3"),this.nodeType="CustomTexture",this.texture=t,this.textureSize=n,this.crop=e,this.projection=i,this.axis=a,this.projectionAxis=S,this.side=r,this.size=o,this.blending=l,this.mat=u,this.isMask=p,this.alpha=c,this.mode=s,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(t,n){t.require("position"),t.require("normal"),t.require("uv"),t.requires.uv=[!0],t.extensions.shaderTextureLOD=!0,t.extensions.derivatives=!0;let e,i=`g${this.uuid.toString().replace(/-/g,"")}`;switch(this.projection.value){case 3:{let r=this.projectionAxis;if(r===0||r===2){let{a:o,b:l,pole:u}=po[r];e=t.include(new $(`
vec3 ${i}_cylindricalTexture(vec3 normal, sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float blending, bool isMask, float mask, float alpha, int mode, out float calpha, out vec2 writeUv) {
                vec3 posN = normalize(position);
                float u = 0.5 + atan(posN.${o}, posN.${l}) / (2.*3.1415);
                float scaledHeight = position.${u} / (size.y * 0.5);
                float v =  (scaledHeight / 2.) + .5;

                vec2 calculatedUv = vec2(u,v);
				vec2 uvs = ( mat * vec3( calculatedUv * 2. - 1., 1. ) / 2. + 0.5 ).xy;
				writeUv = uvs;

                // Seam-safe FILTERED sample: the atan()-derived u jumps a whole
                // period at the wrap seam, so implicit derivatives would smear a
                // lowest-mip column across it. Folding the u-derivatives to the
                // nearest period keeps the true footprint — and, unlike the
                // forced-LOD sample this replaces (log2(fwidth*texSize), up to a
                // full mip too low), it leaves mip selection to the sampler, so
                // the layer's Sharpness filters and anisotropy actually apply.
                vec2 uvDx = dFdx(uvs); uvDx.x -= floor(uvDx.x + 0.5);
                vec2 uvDy = dFdy(uvs); uvDy.x -= floor(uvDy.x + 0.5);
				#ifdef GL_EXT_shader_texture_lod
                vec4 tmp = texture2DGradEXT(tex, uvs, uvDx, uvDy);
				#else
                vec4 tmp = textureGrad(tex, uvs, uvDx, uvDy);
				#endif

				vec3 col = tmp.rgb;
				float lalpha = alpha * tmp.a;
				if ( crop > 0.5 ) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						lalpha = 0.0;
					}
				}

				lalpha *= mask;

				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));

				return col;
			}
`))}else e=t.include(Gn.Nodes.cylindrical);break}case 2:{let r=this.projectionAxis;if(r===0||r===2){let{a:o,b:l,pole:u}=po[r];e=t.include(new $(`
vec3 ${i}_sphericalTexture(vec3 normal, sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float blending, bool isMask, float mask, float alpha, int mode, out float calpha, out vec2 writeUv) {
                vec3 posN = normalize(vPosition);
                float u = 0.5 + atan(posN.${o}, posN.${l}) / (2.*3.1415);
                float v = 0.5 + asin(posN.${u}) / 3.1415;

                vec2 calculatedUv = vec2(u,v);
				vec2 uvs = ( mat * vec3( calculatedUv * 2. - 1., 1. ) / 2. + 0.5 ).xy;
				writeUv = uvs;

                // Seam-safe FILTERED sample: the atan()-derived u jumps a whole
                // period at the wrap seam, so implicit derivatives would smear a
                // lowest-mip column across it. Folding the u-derivatives to the
                // nearest period keeps the true footprint — and, unlike the
                // forced-LOD sample this replaces (log2(fwidth*texSize), up to a
                // full mip too low), it leaves mip selection to the sampler, so
                // the layer's Sharpness filters and anisotropy actually apply.
                vec2 uvDx = dFdx(uvs); uvDx.x -= floor(uvDx.x + 0.5);
                vec2 uvDy = dFdy(uvs); uvDy.x -= floor(uvDy.x + 0.5);
				#ifdef GL_EXT_shader_texture_lod
                vec4 tmp = texture2DGradEXT(tex, uvs, uvDx, uvDy);
				#else
                vec4 tmp = textureGrad(tex, uvs, uvDx, uvDy);
				#endif

				vec3 col = tmp.rgb;
				float lalpha = alpha * tmp.a;
				if ( crop > 0.5 ) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						lalpha = 0.0;
					}
				}

				lalpha *= mask;

				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));

				return col;
			}
`))}else e=t.include(Gn.Nodes.spherical);break}case 1:{let r=["vec3(1.0, 0.0, 0.0)","vec3(0.0, 1.0, 0.0)","vec3(0.0, 0.0, 1.0)"][this.axis.value],o=["zy","xz","xy"][this.axis.value],l=new $(`
		vec3 ${i}_planarTexture(vec3 normal, sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float blending, bool isMask, float mask, float alpha, int mode, out float calpha, out vec2 writeUv) {
				vec2 projected = (1. + (position.${o})) / 2.;
				vec2 uvs = ( mat * vec3( (projected * 2. - 1.) / (size * .5), 1. ) / 2. + 0.5 ).xy;
				writeUv = uvs;

				vec4 tmp = texture2D( tex, uvs );

				vec3 col = tmp.rgb;
				float lalpha = alpha * tmp.a;
				${this.side.value===2?"":`lalpha *= step(0.0, ${this.side.value===1?"-1.0 * ":""}dot(vObjectNormal, ${r}));`}

				if ( crop > 0.5 ) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						lalpha = 0.0;
					}
				}
				
				lalpha *= mask;

				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));

				return col;
			}`);e=t.include(l);break}case 4:e=t.include(Gn.Nodes.triplanar);break;case 0:{let r=Gn.Nodes.uv.src,o=new $(r.replace("uvTexture",`${i}_uvTexture`));e=t.include(o);break}default:e=t.include(Gn.Nodes.uv)}t.addFragmentVariable(this.calpha,"float");let a=[];if(a.push("normal"),a.push(this.texture.generate(t,"t")),a.push(this.textureSize.build(t,"v2")),a.push(this.crop.build(t,"f")),a.push(this.mat.build(t,"mat3")),a.push(this.size.build(t,"v2")),a.push(this.blending.build(t,"f")),a.push(this.isMask.build(t,"b")),a.push(this.mask?`luminance(${this.mask.flow(t,"v3").result})`:"1.0"),a.push(this.alpha.build(t,"f")),a.push(this.mode.build(t,"i")),a.push(this.calpha),this.projection.value===4){let r=`${i}_writeUvs`,o=r+"0",l=r+"1",u=r+"2",c=`${i}_triplanarWeights`;t.addFragmentVariable(o,"vec2"),t.addFragmentVariable(l,"vec2"),t.addFragmentVariable(u,"vec2"),t.addFragmentVariable(c,"vec3"),a.push(o),a.push(l),a.push(u),a.push(c)}else{let r=`${i}_writeUvs`;t.addFragmentVariable(r,"vec2"),a.push(r)}return t.format(e+"("+a.join(",")+")",this.getType(t),n)}},Fi=Gn;Fi.Nodes={cylindrical:new $(`
vec3 cylindricalTexture(vec3 normal, sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float blending, bool isMask, float mask, float alpha, int mode, out float calpha, out vec2 writeUv) {
                vec3 posN = normalize(position);
                float u = 0.5 + atan(posN.z, posN.x) / (2.*3.1415);
                float scaledHeight = position.y / (size.y * 0.5);
                float v =  (scaledHeight / 2.) + .5;

                vec2 calculatedUv = vec2(u,v);
				vec2 uvs = ( mat * vec3( calculatedUv * 2. - 1., 1. ) / 2. + 0.5 ).xy;
				writeUv = uvs;

                // Seam-safe FILTERED sample: the atan()-derived u jumps a whole
                // period at the wrap seam, so implicit derivatives would smear a
                // lowest-mip column across it. Folding the u-derivatives to the
                // nearest period keeps the true footprint — and, unlike the
                // forced-LOD sample this replaces (log2(fwidth*texSize), up to a
                // full mip too low), it leaves mip selection to the sampler, so
                // the layer's Sharpness filters and anisotropy actually apply.
                vec2 uvDx = dFdx(uvs); uvDx.x -= floor(uvDx.x + 0.5);
                vec2 uvDy = dFdy(uvs); uvDy.x -= floor(uvDy.x + 0.5);
				#ifdef GL_EXT_shader_texture_lod
                vec4 tmp = texture2DGradEXT(tex, uvs, uvDx, uvDy);
				#else
                vec4 tmp = textureGrad(tex, uvs, uvDx, uvDy);
				#endif

				vec3 col = tmp.rgb;
				float lalpha = alpha * tmp.a;
				if ( crop > 0.5 ) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						lalpha = 0.0;
					}
				}

				lalpha *= mask;
				
				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));

				return col;
			}
`),spherical:new $(`
vec3 sphericalTexture(vec3 normal, sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float blending, bool isMask, float mask, float alpha, int mode, out float calpha, out vec2 writeUv) {
                vec3 posN = normalize(vPosition);
                float u = 0.5 + atan(posN.z, posN.x) / (2.*3.1415);
                float v = 0.5 + asin(posN.y) / 3.1415;

                vec2 calculatedUv = vec2(u,v);
				vec2 uvs = ( mat * vec3( calculatedUv * 2. - 1., 1. ) / 2. + 0.5 ).xy;
				writeUv = uvs;

                // Seam-safe FILTERED sample: the atan()-derived u jumps a whole
                // period at the wrap seam, so implicit derivatives would smear a
                // lowest-mip column across it. Folding the u-derivatives to the
                // nearest period keeps the true footprint — and, unlike the
                // forced-LOD sample this replaces (log2(fwidth*texSize), up to a
                // full mip too low), it leaves mip selection to the sampler, so
                // the layer's Sharpness filters and anisotropy actually apply.
                vec2 uvDx = dFdx(uvs); uvDx.x -= floor(uvDx.x + 0.5);
                vec2 uvDy = dFdy(uvs); uvDy.x -= floor(uvDy.x + 0.5);
				#ifdef GL_EXT_shader_texture_lod
                vec4 tmp = texture2DGradEXT(tex, uvs, uvDx, uvDy);
				#else
                vec4 tmp = textureGrad(tex, uvs, uvDx, uvDy);
				#endif

				vec3 col = tmp.rgb;
				float lalpha = alpha * tmp.a;
				if ( crop > 0.5 ) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						lalpha = 0.0;
					}
				}

				lalpha *= mask;

				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));

				return col;
			}
`),uv:new $(`vec3 uvTexture(vec3 normal, sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float blending, bool isMask, float mask, float alpha, int mode, out float calpha, out vec2 writeUv) {
				vec2 uvs = ( mat * vec3( vUv * 2. - 1., 1. ) / 2. + 0.5 ).xy;
				writeUv = uvs;

				vec4 tmp = texture2D( tex, uvs );

				vec3 col = tmp.rgb;

				float lalpha = alpha * tmp.a;
				if ( crop > 0.5 ) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						lalpha = 0.0;
					}
				}
				
				lalpha *= mask;

				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));

				return col;
			}`),triplanar:new $(`vec3 triplanarTexture(vec3 normal, sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float blending, bool isMask, float mask, float alpha, int mode, out float calpha, out vec2 writeUvs0, out vec2 writeUvs1, out vec2 writeUvs2, out vec3 writeWeights) {
				vec3 p = position;
				vec2 uv0 = (1.0 + p.xy) / 2.0;     
				vec2 uv1 = (1.0 + p.zy) / 2.0;		
				vec2 uv2 = (1.0 + p.xz) / 2.0;		
	
				uv0 = (mat * vec3((uv0 * 2.0 - 1.0) / (size * 0.5), 1.0) / 2.0 + 0.5).xy;
				uv1 = (mat * vec3((uv1 * 2.0 - 1.0) / (size * 0.5), 1.0) / 2.0 + 0.5).xy;
				uv2 = (mat * vec3((uv2 * 2.0 - 1.0) / (size * 0.5), 1.0) / 2.0 + 0.5).xy;

				// Range from 3 to 128 seems to be good
				float exponent = (1.0 - blending) * 125.0 + 3.0;

				vec3 n = vObjectNormal;
				vec3 weights = abs(normalize(n));
				weights = pow(weights, vec3(exponent));
				weights /= dot(weights, vec3(1.0));

				// Write out all sets of UVs that we generated
				writeUvs0 = uv0;
				writeUvs1 = uv1;
				writeUvs2 = uv2;
				writeWeights = weights;

				// Plain filtered samples: triplanar UVs are continuous (no wrap
				// seam), so implicit derivatives are already correct — the
				// forced-LOD sample this replaces bypassed the layer's Sharpness
				// filters and over-blurred by up to a mip (fwidth overestimates
				// the footprint; see the spherical/cylindrical variants).
				vec4 tmp = 
					texture2D(tex, uv0) * weights.z + 
					texture2D(tex, uv1) * weights.x + 
					texture2D(tex, uv2) * weights.y;

				vec3 col = tmp.rgb;
				float lalpha = alpha * tmp.a;

				// Apply cropping across all 3 planes
				if ( crop > 0.5 ) {
					if ( uv0.x < 0.0 || uv0.x > 1.0 || uv0.y < 0.0 || uv0.y > 1.0 )  {
						lalpha = 0.0;
					}
					if ( uv1.x < 0.0 || uv1.x > 1.0 || uv1.y < 0.0 || uv1.y > 1.0 )  {
						lalpha = 0.0;
					}
					if ( uv2.x < 0.0 || uv2.x > 1.0 || uv2.y < 0.0 || uv2.y > 1.0 )  {
						lalpha = 0.0;
					}
				}

				lalpha *= mask;
				calpha =  lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0);
				accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));

				return col;//n * 0.5 + 0.5;
			}			
			`)};var oi=class extends Ot{constructor(t,n,e,i,a,r,o,l,u,c,s,p){super("v3"),this.nodeType="Depth",this.gradientType=t,this.smooth=n,this.near=e,this.far=i,this.isVector=a,this.isWorldSpace=r,this.origin=o,this.direction=l,this.colors=u,this.steps=c,this.isMask=p,this.alpha=s,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(t,n){let e=`g${this.uuid.toString().replace(/-/g,"")}`,i=new $(`vec3 ${e}_sdepth(float near, float far, vec3 origin, vec3 direction, vec4 colors[${e}_MAX_COLORS], float steps[${e}_MAX_COLORS], bool isMask, float mask, float alpha, out float calpha) {
               vec4 color = colors[0];
               #ifdef ${e}_IS_VECTOR
                   #ifdef ${e}_LINEAR
                       #ifdef ${e}_WORLDSPACE
                       float depth = vectorLinearWorldSpaceDepth(direction, origin, near, far);
                       #else
                       float depth = vectorLinearObjectSpaceDepth(direction, origin, near, far);
                       #endif
                   #else
                       #ifdef ${e}_WORLDSPACE
                           float depth = vectorSphericalWorldSpaceDepth(origin, near, far);
                       #else
                           float depth = vectorSphericalObjectSpaceDepth(origin, near, far);
                       #endif
                   #endif
               #else
                   float dist = length(vWPosition - cameraPosition);
			       float depth = ( dist - near ) / ( far - near );
               #endif


              float p;
              #ifdef ${e}_SMOOTH
				for ( int i = 1; i < ${e}_MAX_COLORS; i++ ) {
						p = clamp( ( depth - steps[i-1] ) / ( steps[i] - steps[i-1] ), 0.0, 1.0 );
						color = mix(color, colors[i], smoothstep(0.0, 1.0, p));
					}
              #else
                for ( int i = 1; i < ${e}_MAX_COLORS; i++ ) {
                   p = clamp(( depth - steps[i - 1] ) / ( steps[i] - steps[i - 1] ), 0.0, 1.0);
                   color = mix(color, colors[i], p);
                 }
              #endif

               float lalpha = alpha * color.a * mask;
               calpha = mix(lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0), lalpha, float(isMask));
			   accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));
			   
               return color.rgb;
			}`,[oi.Nodes.vectorLinearWorldSpaceDepth,oi.Nodes.vectorLinearObjectSpaceDepth,oi.Nodes.vectorSphericalObjectSpaceDepth,oi.Nodes.vectorSphericalWorldSpaceDepth]);if(t.isShader("fragment")){t.define(`${e}_MAX_COLORS`,this.colors.value.length),this.smooth.value&&t.define(`${e}_SMOOTH`),this.isVector.value>.5&&t.define(`${e}_IS_VECTOR`),this.gradientType.value===0&&t.define(`${e}_LINEAR`),this.isWorldSpace.value>.5&&t.define(`${e}_WORLDSPACE`),t.require("worldPosition"),t.addFragmentVariable(this.calpha,"float");let a=t.include(i),r=[];return r.push(this.near.build(t,"f")),r.push(this.far.build(t,"f")),r.push(this.origin.build(t,"v3")),r.push(this.direction.build(t,"v3")),r.push(this.colors.build(t,"v4[]")),r.push(this.steps.build(t,"f[]")),r.push(this.isMask.build(t,"b")),r.push(this.mask?`luminance(${this.mask.flow(t,"v3").result})`:"1.0"),r.push(this.alpha.build(t,"f")),r.push(this.calpha),t.format(a+"("+r.join(",")+")",this.getType(t),n)}return console.warn("DepthNode is not compatible with "+t.shader+" shader."),t.format("vec3( 0.0 )",this.getType(t),n)}},ps=oi;ps.Nodes={vectorLinearWorldSpaceDepth:new $(`float vectorLinearWorldSpaceDepth(vec3 direction, vec3 origin, float near, float far) {
               vec3 n = normalize(direction);
               float dist = (n.x*(vWPosition.x - origin.x) + n.y*(vWPosition.y - origin.y) + n.z*(vWPosition.z - origin.z));
               return ( dist - near ) / ( far - near );
            }`),vectorLinearObjectSpaceDepth:new $(`float vectorLinearObjectSpaceDepth(vec3 direction, vec3 origin, float near, float far) {
               vec3 n = normalize(direction);
               float dist = (n.x*(position.x - origin.x) + n.y*(position.y - origin.y) + n.z*(position.z - origin.z));
               return ( dist - near ) / ( far - near );
            }`),vectorSphericalWorldSpaceDepth:new $(`float vectorSphericalWorldSpaceDepth(vec3 origin, float near, float far) {
               float dist = length(vWPosition - origin);
               return ( dist - near ) / ( far - near );
            }`),vectorSphericalObjectSpaceDepth:new $(`float vectorSphericalObjectSpaceDepth(vec3 origin, float near, float far) {
               float dist = length(position - origin);
               return ( dist - near ) / ( far - near );
            }`)};var hs=class extends Ot{constructor(t,n,e,i,a,r,o){super("v3"),this.nodeType="Cavity",this.firstTime=!0,this.ridge=t,this.valley=n,this.normalViewMap=e,this.resolution=i,this.isMask=o,this.alpha=a,this.mode=r,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(t,n){if(this.firstTime&&(t.addVertexParsVariable("randomColor","attribute vec3"),t.addVertexParsVariable("vID","flat out float"),t.addFragmentParsVariable("vID","flat in float"),t.addVertexFinalCode(`
                vID = randomColor.r;
            `)),t.isShader("fragment")){t.addFragmentVariable(this.calpha,"float");let e=t.include(hs.Nodes.cavity),i=[];return i.push(this.normalViewMap.getTexture(t,"t")),i.push(this.resolution.build(t,"v2")),i.push(this.ridge.build(t,"f")),i.push(this.valley.build(t,"f")),i.push(this.isMask.build(t,"b")),i.push(this.mask?`luminance(${this.mask.flow(t,"v3").result})`:"1.0"),i.push(this.alpha.build(t,"f")),i.push(this.mode.build(t,"i")),i.push(this.calpha),this.firstTime=!this.firstTime,t.format(e+"("+i.join(",")+")",this.getType(t),n)}return console.warn("CavityNode is not compatible with "+t.shader+" shader."),t.format("vec3( 0.0 )",this.getType(t),n)}},ms=hs;ms.Nodes=(function(){let t=new $(`float cavitySoftClamp(float c, float control) {
				if (c < 0.5 / control) return c * (1.0 - c * control);
				return 0.25 / control;
			}`);return{cavity:new $(`vec3 cavity(sampler2D normalViewMap, vec2 resolution, float ridge, float valley, bool isMask, float mask, float alpha, int mode, out float calpha) {
				// The factors saturate the soft clamp by 2 — beyond that the
				// response is visually identical, so 2 is the ceiling
				// everywhere (panel, DSL, variables, old files).
				ridge = clamp(ridge, 0.0, 2.0);
				valley = clamp(valley, 0.0, 2.0);

				vec2 nuv = gl_FragCoord.xy / resolution;
				vec2 texel = vec2(1.0) / resolution;

				vec4 nUp = texture2D(normalViewMap, nuv + vec2(0.0, texel.y));
				vec4 nDown = texture2D(normalViewMap, nuv - vec2(0.0, texel.y));
				vec4 nLeft = texture2D(normalViewMap, nuv - vec2(texel.x, 0.0));
				vec4 nRight = texture2D(normalViewMap, nuv + vec2(texel.x, 0.0));

				float curv = 0.0;
				if (nUp.a == vID && nDown.a == vID && nLeft.a == vID && nRight.a == vID &&
					dot(nUp.xyz, nUp.xyz) > 0.5 && dot(nDown.xyz, nDown.xyz) > 0.5 &&
					dot(nLeft.xyz, nLeft.xyz) > 0.5 && dot(nRight.xyz, nRight.xyz) > 0.5) {
					float ndiff = (nUp.y - nDown.y) + (nRight.x - nLeft.x);
					// Blender's control mapping (workbench_data.c): a bigger
					// factor lowers the control, which raises both the linear
					// range and the clamp ceiling of the soft clamp — the
					// factors get a real O(1) signal to scale.
					float ridgeControl = 0.5 / max(ridge * ridge, 0.0001);
					float valleyControl = 0.7 / max(valley * valley, 0.0001);
					curv = ndiff > 0.0
						? 2.0 * cavitySoftClamp(ndiff, ridgeControl)
						: -2.0 * cavitySoftClamp(-ndiff, valleyControl);
					// Dead-zone: sub-visible curvature (buffer quantization
					// noise, near-zero factors) is no curvature.
					if (abs(curv) < 0.001) curv = 0.0;
				}

				// Where there is no curvature the layer says NOTHING: composite
				// with weight 0 (the outline layer's pattern) so flat pixels are
				// a bit-exact passthrough. Compositing the identity mid-grey at
				// full alpha instead perturbs the frame by float ulps
				// (1-2(1-b)(1-o) != b exactly), which downstream edge-AA
				// amplified into visible silhouette speckles. Mask mode keeps
				// the full-coverage grey — the mask IS the color output.
				// ("active" is a GLSL ES reserved word — hence cavityOn.)
				float cavityOn = curv != 0.0 ? 1.0 : 0.0;
				float lalpha = alpha * mask * mix(cavityOn, 1.0, float(isMask));
				calpha = mix(lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0), lalpha, float(isMask));
				accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));

				return vec3(clamp(0.5 + 0.5 * curv, 0.0, 1.0));
			}`,[t])}})();var Ue=(function(){let t=new $(`vec3 random3(vec3 c) {
			float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
			vec3 r;
			r.z = fract(512.0*j);
			j *= .125;
			r.x = fract(512.0*j);
			j *= .125;
			r.y = fract(512.0*j);
			return r-0.5;
		}`),n=new $(`float simplexFast(vec3 p) {
			 vec3 s = floor(p + dot(p, vec3(F3)));
			 mediump vec3 x = p - s + dot(s, vec3(G3));
			 mediump vec3 hs = s;
			 
			 mediump vec3 e = step(vec3(0.0), x - x.yzx);
			 mediump vec3 i1 = e*(1.0 - e.zxy);
			 mediump vec3 i2 = 1.0 - e.zxy*(1.0 - e);
				
			 mediump vec3 x1 = x - i1 + G3;
			 mediump vec3 x2 = x - i2 + 2.0*G3;
			 mediump vec3 x3 = x - 1.0 + 3.0*G3;
			 
			 mediump vec4 w, d;
			 
			 w.x = dot(x, x);
			 w.y = dot(x1, x1);
			 w.z = dot(x2, x2);
			 w.w = dot(x3, x3);
			 
			 w = max(0.6 - w, 0.0);
			 
			 d.x = dot(random3(hs), x);
			 d.y = dot(random3(hs + i1), x1);
			 d.z = dot(random3(hs + i2), x2);
			 d.w = dot(random3(hs + 1.0), x3);
			 
			 w *= w;
			 w *= w;
			 d *= w;
			 
			 return dot(d, vec4(52.0));
		}`,[t]);n.keywords.F3=new Bt("float F3 0.3333333"),n.keywords.G3=new Bt("float G3 0.1666667");let e=new $(`float simplexPrecise(vec3 p) {
			 vec3 s = floor(p + dot(p, vec3(F3)));
			 vec3 x = p - s + dot(s, vec3(G3));
			 
			 vec3 e = step(vec3(0.0), x - x.yzx);
			 vec3 i1 = e*(1.0 - e.zxy);
			 vec3 i2 = 1.0 - e.zxy*(1.0 - e);
				
			 vec3 x1 = x - i1 + G3;
			 vec3 x2 = x - i2 + 2.0*G3;
			 vec3 x3 = x - 1.0 + 3.0*G3;
			 
			 vec4 w, d;
			 
			 w.x = dot(x, x);
			 w.y = dot(x1, x1);
			 w.z = dot(x2, x2);
			 w.w = dot(x3, x3);
			 
			 w = max(0.6 - w, 0.0);
			 
			 d.x = dot(random3(s), x);
			 d.y = dot(random3(s + i1), x1);
			 d.z = dot(random3(s + i2), x2);
			 d.w = dot(random3(s + 1.0), x3);
			 
			 w *= w;
			 w *= w;
			 d *= w;
			 
			 return dot(d, vec4(52.0));
		}`,[t]);e.keywords.F3=new Bt("float F3 0.3333333"),e.keywords.G3=new Bt("float G3 0.1666667");let i=new $(`float simplexFractal(vec3 m) {
			mat3 rot1 = mat3(-0.37, 0.36, 0.85,-0.14,-0.93, 0.34,0.92, 0.01,0.4);
			mat3 rot2 = mat3(-0.55,-0.39, 0.74, 0.33,-0.91,-0.24,0.77, 0.12,0.63);
			mat3 rot3 = mat3(-0.71, 0.52,-0.47,-0.08,-0.72,-0.68,-0.7,-0.45,0.56);
			return 0.5333333 * simplexFast(m * rot1)
				 + 0.2666667 * simplexFast(2.0 * m * rot2)
				 + 0.1333333 * simplexFast(4.0 * m * rot3)
				 + 0.0666667 * simplexFast(8.0 * m);
		}`,[n]),a=new $("vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}"),r=new $("vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}"),o=new $(`float simplexAshima(vec3 v) {
		  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
		  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
		  vec3 i  = floor(v + dot(v, C.yyy) );
		  vec3 x0 =   v - i + dot(i, C.xxx) ;
		  vec3 g = step(x0.yzx, x0.xyz);
		  vec3 l = 1.0 - g;
		  vec3 i1 = min( g.xyz, l.zxy );
		  vec3 i2 = max( g.xyz, l.zxy );
		  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
		  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
		  vec3 x3 = x0 - 1. + 3.0 * C.xxx;
		  i = mod(i, 289.0 ); 
		  vec4 p = permute( permute( permute( 
					 i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
				   + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
				   + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
		  float n_ = 1.0/7.0; 
		  vec3  ns = n_ * D.wyz - D.xzx;
		  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  
		  vec4 x_ = floor(j * ns.z);
		  vec4 y_ = floor(j - 7.0 * x_ );    
		  vec4 x = x_ *ns.x + ns.yyyy;
		  vec4 y = y_ *ns.x + ns.yyyy;
		  vec4 h = 1.0 - abs(x) - abs(y);
		  vec4 b0 = vec4( x.xy, y.xy );
		  vec4 b1 = vec4( x.zw, y.zw );
		  vec4 s0 = floor(b0)*2.0 + 1.0;
		  vec4 s1 = floor(b1)*2.0 + 1.0;
		  vec4 sh = -step(h, vec4(0.0));
		  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
		  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
		  vec3 p0 = vec3(a0.xy,h.x);
		  vec3 p1 = vec3(a0.zw,h.y);
		  vec3 p2 = vec3(a1.xy,h.z);
		  vec3 p3 = vec3(a1.zw,h.w);
		  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
		  p0 *= norm.x;
		  p1 *= norm.y;
		  p2 *= norm.z;
		  p3 *= norm.w;
		  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
		  m = m * m;
		  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
										dot(p2,x2), dot(p3,x3) ) );
		}`,[a,r]),l=new $("vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}"),u=new $("vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}",[l]),c=new $(`float noise(vec3 p){
			vec3 a = floor(p);
			vec3 d = p - a;
			d = d * d * (3.0 - 2.0 * d);
			vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
			vec4 k1 = perm(b.xyxy);
			vec4 k2 = perm(k1.xyxy + b.zzww);
			vec4 c = k2 + a.zzzz;
			vec4 k3 = perm(c);
			vec4 k4 = perm(c + 1.0);
			vec4 o1 = fract(k3 * (1.0 / 41.0));
			vec4 o2 = fract(k4 * (1.0 / 41.0));
			vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
			vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);
			return o4.y * d.y + o4.x * (1.0 - d.y);
		}`,[u]),s=new $(`float fbm(vec3 x) {
			float v = 0.0;
			float a = 0.5;
			vec3 shift = vec3(100);
			for (int i = 0; i < NUM_OCTAVES; ++i) {
				v += a * noise(x);
				x = x * 2.0 + shift;
				a *= 0.5;
			}
			return v;
		}`,[c]);s.keywords.NUM_OCTAVES=new Bt("int NUM_OCTAVES 5");let p=new $("vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}"),S=new $(`float perlin(vec3 P){
		  vec3 Pi0 = floor(P);
		  vec3 Pi1 = Pi0 + vec3(1.0);
		  Pi0 = mod(Pi0, 289.0);
		  Pi1 = mod(Pi1, 289.0);
		  vec3 Pf0 = fract(P);
		  vec3 Pf1 = Pf0 - vec3(1.0);
		  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
		  vec4 iy = vec4(Pi0.yy, Pi1.yy);
		  vec4 iz0 = Pi0.zzzz;
		  vec4 iz1 = Pi1.zzzz;
		  vec4 ixy = permute(permute(ix) + iy);
		  vec4 ixy0 = permute(ixy + iz0);
		  vec4 ixy1 = permute(ixy + iz1);
		  vec4 gx0 = ixy0 / 7.0;
		  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
		  gx0 = fract(gx0);
		  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
		  vec4 sz0 = step(gz0, vec4(0.0));
		  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
		  gy0 -= sz0 * (step(0.0, gy0) - 0.5);
		  vec4 gx1 = ixy1 / 7.0;
		  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
		  gx1 = fract(gx1);
		  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
		  vec4 sz1 = step(gz1, vec4(0.0));
		  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
		  gy1 -= sz1 * (step(0.0, gy1) - 0.5);
		  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
		  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
		  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
		  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
		  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
		  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
		  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
		  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
		  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
		  g000 *= norm0.x;
		  g010 *= norm0.y;
		  g100 *= norm0.z;
		  g110 *= norm0.w;
		  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
		  g001 *= norm1.x;
		  g011 *= norm1.y;
		  g101 *= norm1.z;
		  g111 *= norm1.w;
		  float n000 = dot(g000, Pf0);
		  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
		  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
		  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
		  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
		  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
		  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
		  float n111 = dot(g111, Pf1);
		  vec3 fade_xyz = fade(Pf0);
		  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
		  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
		  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
		  return 2.2 * n_xyz;
		}`,[a,r,p]),g=new $(`float hashwithoutsine13(vec3 p3)
		{
			p3  = fract(p3 * .1031);
			p3 += dot(p3, p3.yzx + 33.33);
			return fract((p3.x + p3.y) * p3.z);
		}`),b=new $(`vec3 hashwithoutsine33(vec3 p3)
		{
			p3 = fract(p3 * vec3(.1031, .1030, .0973));
			p3 += dot(p3, p3.yxz+33.33);
			return fract((p3.xxy + p3.yxx)*p3.zyx);
		}`),f=new $(`float metric(in vec3 p)
		{
			
			return length(p);

			
			
			
		}`),w=new $(`float smin( float a, float b, float k )
		{
			float h = smoothstep(0.0, 1.0, 0.5 + 0.5 * (b - a) / k);
			float correction = k * h * (1.0 - h);
			return mix(b, a, h) - correction;
		}`),v=new $(`float smax( float a, float b, float k )
		{
			float h = smoothstep(1.0, 0.0, 0.5 + 0.5 * (a - b) / k);
			float correction = k * h * (1.0 - h);
			return mix(a, b, h) + correction;
		}`),x=new $(`float remap(float value, float input_min, float input_max, float output_min, float output_max) {
			// Compute width of each interval
			float input_width = input_max - input_min;
			float output_width = output_max - output_min;
		
			// Convert input range into a 0-1 range 
			float scaled = (value - input_min) / input_width;
		
			// Convert the 0-1 range into a value in output range
			return output_min + (scaled * output_width);
		}`);return{simplexFast:n,simplexPrecise:e,simplexFractal:i,simplexAshima:o,fbm:s,perlin:S,voronoi:new $(`float voronoi(in vec3 x, in int style, in float smoothness, in float seed, in int quality) 
		{
			
			ivec3 p = ivec3(floor(x));
			vec3 f = fract(x);

			
			
			
			
			
			
			
			
			float f1_smooth = 8.0;
			float f1 = 8.0;
			float f2_smooth = 8.0;
			float f2 = 8.0;
			float e_smooth = 8.0;
			float e = 8.0;

			
			ivec3 mb;
			vec3 mr; 

			int steps = quality;
			
			for (int x = -steps; x <= steps; x++) 
			for (int y = -steps; y <= steps; y++)
			for (int z = -steps; z <= steps; z++)
			{
				ivec3 b = ivec3(x, y, z);
				vec3 r = vec3(b) + hashwithoutsine33(vec3(p + b) + seed) - f;
				float d = length(r);
				
				f1_smooth = smin(d, f1_smooth, smoothness);

				
				if (d < f1) 
				{
					f2 = f1;
					f1 = d;

					mb = ivec3(x, y, z);
					mr = r;
				} 
				else if (d < f2) 
				{
					f2 = d;
				}
			}	
			
			
			
			if (style != 0 &&  style != 5 && style != 7)
			for (int x = -steps; x <= steps; x++) 
			for (int y = -steps; y <= steps; y++)
			for (int z = -steps; z <= steps; z++)
			{
				
				ivec3 b = mb + ivec3(x, y, z);
				vec3 r = vec3(b) + hashwithoutsine33(vec3(p + b) + seed) - f;
				float d1 = dot(0.5 * (mr + r), (r - mr)); 				
				float d2 = dot(0.5 * (mr + r), normalize(r - mr));

				e_smooth = smin(d1, e_smooth, smoothness);

				e = min(e, d2);

				
				{
					ivec3 b = ivec3(x, y, z);
					if (b != mb) 
					{
						vec3 r = vec3(b) + hashwithoutsine33(vec3(p + b) + seed) - f;
						float d = length(r);

						f2_smooth = smin(d, f2_smooth, smoothness);
					}
				}
			}

			
			if (style == 0) 
			{
				return f1_smooth;
			}
			if (style == 1) 
			{
				return f2_smooth;
			}
			if (style == 2) 
			{
				return f2_smooth - f1_smooth;
				
				
				
			}
			if (style == 3) 
			{
				
				float a = f1; 
				float b = f2;
				float k = 3.0;
				float h = max(k - abs(a - b), 0.0) / k;
				float final = min(a, b) - h * h * k * (1.0 / 4.0);
				return final;
			}
			if (style == 4) 
			{
				
				return exp(5.0 * e_smooth);
			}
			if (style == 5) 
			{
				return pow(f1_smooth, 3.0);
			}
			if (style == 6) 
			{				
				const float eps = 0.0125;

				
				float thickness = smoothness * 0.25 + eps;

				
				float blur = pow(smoothness, 3.0) * 0.25 + eps;

				return smoothstep(
					thickness - thickness * blur, 
					thickness + thickness * blur, 
					e
				);
			}
			if (style == 7) 
			{
				return hashwithoutsine13(vec3(p + mb) + seed);
			}
		}
	`,[g,b,f,w,v,x])}})(),vs=class extends Ot{constructor(t,n,e,i,a,r,o){super("v3"),this.nodeType="Dust",this.color=t,this.coverage=n,this.softness=e,this.noiseStrength=i,this.noiseScale=a,this.isMask=o,this.alpha=r,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(t,n){if(t.require("worldNormal"),t.isShader("fragment")){t.addFragmentVariable(this.calpha,"float");let e=t.include(vs.Nodes.dust),i=[];return i.push(this.color.build(t,"c")),i.push(this.coverage.build(t,"f")),i.push(this.softness.build(t,"f")),i.push(this.noiseStrength.build(t,"f")),i.push(this.noiseScale.build(t,"f")),i.push(this.isMask.build(t,"b")),i.push(this.mask?`luminance(${this.mask.flow(t,"v3").result})`:"1.0"),i.push(this.alpha.build(t,"f")),i.push(this.calpha),t.format(e+"("+i.join(",")+")",this.getType(t),n)}return console.warn("DustNode is not compatible with "+t.shader+" shader."),t.format("vec3( 0.0 )",this.getType(t),n)}},gs=vs;gs.Nodes={dust:new $(`vec3 dust(vec3 color, float coverage, float softness, float noiseStrength, float noiseScale, bool isMask, float mask, float alpha, out float calpha) {
				float facingUp = dot(normalize(vWNormal), vec3(0.0, 1.0, 0.0));

				float breakup = 0.0;
				if (noiseStrength != 0.0) {
					vec3 st = position / noiseScale;
					float noise = simplexFast(st + vec3(1.7, 9.2, 1.0));
					breakup = noise * noiseStrength;
				}

				float soft = max(softness, 0.0001);
				float settle = mix(1.0 + soft, -1.0 - soft, clamp(coverage, 0.0, 1.0));
				float amount = smoothstep(settle - soft, settle + soft, facingUp + breakup);

				float lalpha = amount * alpha * mask;
				calpha = mix(lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0), lalpha, float(isMask));
				accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));

				return color;
			 }`,[Ue.simplexFast])};var Nd=class extends Ot{constructor(t,n,e,i,a,r,o,l){super("v3"),this.nodeType="Fresnel",this.color=t,this.bias=n,this.scale=e,this.intensity=i,this.factor=a,this.isMask=l,this.alpha=r,this.mode=o,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(t,n){if(t.require("vWorldViewDir"),t.require("worldNormal"),t.isShader("fragment")){t.addFragmentVariable(this.calpha,"float");let e=new $(`vec3 fresnel(vec3 color, float bias, float scale, float intensity, float factor, bool isMask, float mask, float alpha, int mode, out float calpha) {
					float fresnel = bias + scale * pow( abs( factor + dot( normalize( vWorldViewDir ), normalize( vWNormal ) ) ), intensity );

					float lalpha = clamp(fresnel, 0.0, 1.0) * alpha * mask;
					calpha = mix(lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0), lalpha, float(isMask));
					accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));

					return color;
				}`),i=t.include(e),a=[];return a.push(this.color.build(t,"c")),a.push(this.bias.build(t,"f")),a.push(this.scale.build(t,"f")),a.push(this.intensity.build(t,"f")),a.push(this.factor.build(t,"f")),a.push(this.isMask.build(t,"b")),a.push(this.mask?`luminance(${this.mask.flow(t,"v3").result})`:"1.0"),a.push(this.alpha.build(t,"f")),a.push(this.mode.build(t,"i")),a.push(this.calpha),t.format(i+"("+a.join(",")+")",this.getType(t),n)}return console.warn("FresnelNode is not compatible with "+t.shader+" shader."),t.format("vec3( 0.0 )",this.getType(t),n)}},_s=class extends Ot{constructor(t,n,e,i,a,r,o,l,u){super("v3"),this.nodeType="Gradient",this.gradientType=t,this.smooth=n,this.colors=e,this.steps=i,this.offset=a,this.morph=r,this.angle=o,this.isMask=u,this.alpha=l,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(t,n){if(t.isShader("fragment")){t.define("GRAD_MAX",10),t.require("uv"),t.requires.uv=[!0],t.addFragmentVariable(this.calpha,"float");let e=t.include(_s.Nodes.gradient),i=[];return i.push(this.gradientType.build(t,"i")),i.push(this.smooth.build(t,"b")),i.push(this.colors.build(t,"v4[]")),i.push(this.steps.build(t,"f[]")),i.push(this.offset.build(t,"v2")),i.push(this.morph.build(t,"v2")),i.push(this.angle.build(t,"f")),i.push(this.isMask.build(t,"b")),i.push(this.mask?`luminance(${this.mask.flow(t,"v3").result})`:"1.0"),i.push(this.alpha.build(t,"f")),i.push(this.calpha),t.format(e+"("+i.join(",")+")",this.getType(t),n)}return console.warn("GradientNode is not compatible with "+t.shader+" shader."),t.format("vec3( 0.0 )",this.getType(t),n)}},xs=_s;xs.Nodes={gradient:new $(`vec3 gradient(int gradientType, bool smoothed, vec4 colors[GRAD_MAX], float steps[GRAD_MAX], vec2 offset, vec2 morph, float angle, bool isMask, float mask, float alpha, out float calpha) {
				vec4 color = colors[0];
				vec2 m = morph / vUv.xy;
				vec2 rot = vec2( 0.5 + m.x, m.y );
				vec2 dt = vec2(
					cos( angle ) * rot.x - sin( angle ) * rot.y,
					sin( angle ) * rot.x + cos( angle ) * rot.y
				);
				vec2 pt = ( vUv - 0.5 + offset ) / 2.0 + dt / 2.0;
				float t = dot( pt, dt ) / dot( dt, dt );
				if ( gradientType == 1 ) {
					t = distance (
						( vUv + morph ) * 3.0,
						( vUv + offset ) + 1.0
					) + angle;
				} else if ( gradientType == 2 ) {
					float polar = atan(
						vUv.x + morph.x - 0.5 + offset.x,
						vUv.y + morph.y - 0.5 + offset.y
					) * -1.0;
					t = fract( ( angle / PI / -2.0 ) + 0.5 * ( polar / PI ) );
				}

				float p;
				if (smoothed) {
					for ( int i = 1; i < GRAD_MAX; i++ ) {
						p = clamp( ( t - steps[i-1] ) / ( steps[i] - steps[i-1] ), 0.0, 1.0 );
						color = mix(color, colors[i], smoothstep(0.0, 1.0, p));
					}

				} else {
					for ( int i = 1; i < GRAD_MAX; i++ ) {
						p = clamp( ( t - steps[i-1] ) / ( steps[i] - steps[i-1] ), 0.0, 1.0 );
						color = mix(color, colors[i], p);
					}
				}

				float lalpha = alpha * color.a * mask;
				calpha = mix(lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0), lalpha, float(isMask));
				accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));
				
				return color.xyz;
			}`)};var Ss=class extends Ot{constructor(t,n,e,i,a){super("v3"),this.nodeType="Matcap",this.texture=t,this.isMask=i,this.alpha=n,this.mode=e,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`,this.rotation=a}generate(t,n){if(t.isShader("fragment")){t.addFragmentVariable(this.calpha,"float");let e=t.include(Ss.Nodes.matcap);t.require("normal"),t.requires.normal=!0;let i=[];return i.push(this.texture.generate(t,"t")),i.push("normal"),i.push(this.isMask.build(t,"b")),i.push(this.mask?`luminance(${this.mask.flow(t,"v3").result})`:"1.0"),i.push(this.alpha.build(t,"f")),i.push(this.mode.build(t,"i")),i.push(this.calpha),i.push(this.rotation.build(t,"f")),t.format(e+"("+i.join(",")+")",this.getType(t),n)}return console.warn("MatcapNode is not compatible with "+t.shader+" shader."),t.format("vec3( 0.0 )",this.getType(t),n)}},Ts=Ss;Ts.Nodes={matcap:new $(`vec3 matcap(sampler2D matcapTex, vec3 normal, bool isMask, float mask, float alpha, int mode, out float calpha, float rotation) {
					vec3 viewDir = normalize( vViewPosition );
					vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
					vec3 y = cross( viewDir, x );
					vec2 uv = vec2( dot( x, normal ), dot( y, normal ) );
					uv = mat2( cos(rotation), sin(rotation), -sin(rotation), cos(rotation) ) * uv;
					uv = uv * 0.495 + 0.5;
					vec4 matcapColor = texture2D( matcapTex, uv );

					float lalpha = alpha * mask;
					calpha = mix(lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0), lalpha, float(isMask));
					accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));
					
					return matcapColor.rgb;
            	}`)};var bs=class extends Ot{constructor(t,n,e,i,a,r,o,l,u,c,s,p,S,g,b,f,w,v,x){super("v3"),this.nodeType="Noise",this.scale=t,this.size=n,this.move=e,this.fA=i,this.fB=a,this.distortion=r,this.colorA=o,this.colorB=l,this.colorC=u,this.colorD=c,this.noiseType=p,this.voronoiStyle=g,this.highCut=b,this.lowCut=f,this.smoothness=w,this.seed=v,this.quality=x,this.isMask=S,this.alpha=s,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(t,n,e,i,a){t.require("uv"),t.requires.uv=[!0],t.addFragmentVariable(this.calpha,"float");let r=["simplexFast","simplexFractal","simplexAshima","fbm","perlin","voronoi"][this.noiseType.value],o=new $(`vec3 ${r}customNoise(float scale, vec3 size, float move, vec2 fA, vec2 fB, vec2 distortion, vec4 colorA, vec4 colorB, vec4 colorC, vec4 colorD, int voronoiStyle, float highCut, float lowCut, float smoothness, float seed, int quality, bool isMask, float mask, float alpha, out float calpha) 
			{
                
				scale = max(abs(scale), 0.001);

				vec3 st = position / size;
				st /= scale;

				${r=="voronoi"?`
		float v = ${r}(st + move, voronoiStyle, smoothness, seed, quality);

		
		v = remap(v, lowCut, highCut, 0.0, 1.0);
		v = smax(v, 0.0, smoothness * 0.25);
		v = smin(v, 1.0, smoothness * 0.25);

		
		vec4 color = mix(colorA, colorC, v); 
		`:`
		vec3 q = vec3(${r}(st),
					   ${r}(st + vec3(1.0)),
					   ${r}(st + vec3(1.0)));
		vec3 r = vec3(${r}(st + vec3(distortion, 1.0) * q + vec3(fA, 1.0) + move),
					  ${r}(st + vec3(distortion, 1.0) * q + vec3(fB, 1.0) + move), 
					  ${r}(st * q));
		float f = ${r}(st + r);
		vec4 color;
		color = mix(colorA, colorB, clamp((f * f) * 4.0, 0.0, 1.0));
		color = mix(color, colorC, clamp(length(q), 0.0, 1.0));
		color = mix(color, colorD, clamp(length(r.x), 0.0, 1.0));
		`}

				float lalpha = alpha * color.a * mask;
				calpha = mix(lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0), lalpha, float(isMask));
				accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));

				return clamp(color, 0.0, 1.0).rgb;
			}`,[Ue.simplexFast,Ue.simplexFractal,Ue.simplexAshima,Ue.fbm,Ue.perlin,Ue.voronoi]),l=t.include(o),u=[];return u.push(this.scale.build(t,"f")),u.push(this.size.build(t,"v3")),u.push(this.move.build(t,"f")),u.push(this.fA.build(t,"v2")),u.push(this.fB.build(t,"v2")),u.push(this.distortion.build(t,"v2")),u.push(this.colorA.build(t,"v4")),u.push(this.colorB.build(t,"v4")),u.push(this.colorC.build(t,"v4")),u.push(this.colorD.build(t,"v4")),u.push(this.voronoiStyle.build(t,"i")),u.push(this.highCut.build(t,"f")),u.push(this.lowCut.build(t,"f")),u.push(this.smoothness.build(t,"f")),u.push(this.seed.build(t,"f")),u.push(this.quality.build(t,"i")),u.push(this.isMask.build(t,"b")),u.push(this.mask?`luminance(${this.mask.flow(t,"v3").result})`:"1.0"),u.push(this.alpha.build(t,"f")),u.push(this.calpha),t.format(l+"("+u.join(",")+")",this.getType(t),n)}};bs.numOctaves=5;var ws=class extends Ot{constructor(t,n,e,i,a,r,o,l,u,c,s,p,S,g,b,f){super("v3"),this.nodeType="Outline",this.firstTime=!0,this.outlineColor=t,this.contourColor=n,this.outlineWidth=e,this.contourWidth=i,this.contourThreshold=a,this.outlineThreshold=r,this.contourFrequency=o,this.outlineSmoothing=l,this.contourDirection=u,this.positionalLines=c,this.compensation=s,this.resolution=p,this.normalMap=S,this.depthMap=g,this.pixelRatio=b,this.alpha=f,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(t,n){let e=`g${this.uuid.toString().replace(/-/g,"")}`;if(t.require("vWorldViewDir"),t.require("worldNormal"),t.extensions.derivatives=!0,this.compensation.value&&t.define("OUTLINE_COMPENSATION",`${e}_offset`),this.firstTime){let i=this.outlineWidth.build(t,"f"),a=this.resolution.build(t,"v2"),r=this.compensation.build(t,"b"),o=this.pixelRatio.build(t,"f");t.addVertexParsVariable("randomColor","attribute vec3"),t.addVertexParsVariable("extrudeNormal","attribute vec3"),t.addVertexParsVariable(i,"uniform float"),t.addVertexParsVariable(a,"uniform vec2"),t.addVertexParsVariable(r,"uniform bool"),t.addVertexParsVariable(o,"uniform float"),t.addVertexParsVariable("vID","flat out float"),t.addFragmentParsVariable("vID","flat in float"),t.addVertexFinalCode(`
                vID = randomColor.r;
                vec2 ${e}_offset = vec2(0.0);
                if (${r}) {
                    // Instanced draws (cloner instancing): 'transformed' is still
                    // instance-local here — three's chunks only apply instanceMatrix
                    // inside project_vertex — so apply it by hand like they do.
                    vec4 ${e}_localPosition = vec4(transformed, 1.0);
                    vec3 ${e}_extrudeNormal = extrudeNormal;
                    #ifdef USE_INSTANCING
                    ${e}_localPosition = instanceMatrix * ${e}_localPosition;
                    ${e}_extrudeNormal = mat3(instanceMatrix) * ${e}_extrudeNormal;
                    #endif
                    vec4 ${e}_clipPosition = projectionMatrix * (modelViewMatrix * ${e}_localPosition);
                    
                    
                    
                    vec3 ${e}_clipNormal = mat3(projectionMatrix) * (mat3(modelViewMatrix) * ${e}_extrudeNormal) + 0.0000001;
                    ${e}_offset = normalize(${e}_clipNormal.xy) / ${a} * (${i} / 2.0) * ${e}_clipPosition.w * 2.0 * ${o};
                    ${e}_clipPosition.xy += ${e}_offset;
                    
                    
                    gl_Position = ${e}_clipPosition;
                }
            `)}if(t.isShader("fragment")){t.require("uv"),t.requires.uv=[!0],t.addFragmentVariable(this.calpha,"float");let i=t.include(ws.Nodes.outline),a=[];return a.push(this.outlineColor.build(t,"c")),a.push(this.contourColor.build(t,"c")),a.push(this.outlineWidth.build(t,"f")),a.push(this.contourWidth.build(t,"f")),a.push(this.contourThreshold.build(t,"f")),a.push(this.outlineThreshold.build(t,"f")),a.push(this.contourFrequency.build(t,"f")),a.push(this.outlineSmoothing.build(t,"f")),a.push(this.contourDirection.build(t,"v3")),a.push(this.positionalLines.build(t,"b")),a.push(this.resolution.build(t,"v2")),a.push(this.normalMap.getTexture(t,"t")),a.push(this.depthMap.getTexture(t,"t")),a.push(this.pixelRatio.build(t,"f")),a.push(this.compensation.build(t,"b")),a.push(this.mask?`luminance(${this.mask.flow(t,"v3").result})`:"1.0"),a.push(this.alpha.build(t,"f")),a.push(this.calpha),this.firstTime=!this.firstTime,t.format(i+"("+a.join(",")+")",this.getType(t),n)}return console.warn("OutlineNode is not compatible with "+t.shader+" shader."),""}},Es=ws;Es.Nodes=(function(){let t=new $(`
float sobelSample(sampler2D t, sampler2D d, vec2 uv, vec2 resolution, float outlineWidth, float pixelRatio)
{
    vec2 halton = haltonSequence[frameIndex];
    float temporalOffset = getNoiseInterleavedGradient(gl_FragCoord.xy + halton);
    float temporalAngle  = temporalOffset * PI2;

    vec2 texelSize = (vec2(1.0) / resolution);
    vec2 offsetSize = texelSize * outlineWidth * pixelRatio;

    vec2 uvSamples[9];
    vec4 normalSamples[9];

	uvSamples[0] = uv + vec2( -offsetSize.x, -offsetSize.y) + (vogelDiskSample(0, 9, temporalAngle) * texelSize);
	uvSamples[1] = uv + vec2(0.0, -offsetSize.y) + (vogelDiskSample(1, 9, temporalAngle) * texelSize);
	uvSamples[2] = uv + vec2(  offsetSize.x, -offsetSize.y) + (vogelDiskSample(2, 9, temporalAngle) * texelSize);
	uvSamples[3] = uv + vec2( -offsetSize.x, 0.0) + (vogelDiskSample(3, 9, temporalAngle) * texelSize);
	uvSamples[4] = uv;
	uvSamples[5] = uv + vec2(  offsetSize.x, 0.0) + (vogelDiskSample(5, 9, temporalAngle) * texelSize);
	uvSamples[6] = uv + vec2( -offsetSize.x, offsetSize.y) + (vogelDiskSample(6, 9, temporalAngle) * texelSize);
	uvSamples[7] = uv + vec2(0.0, offsetSize.y) + (vogelDiskSample(7, 9, temporalAngle) * texelSize);
	uvSamples[8] = uv + vec2(  offsetSize.x, offsetSize.y) + (vogelDiskSample(8, 9, temporalAngle) * texelSize);


    normalSamples[0] = texture2D(t, uvSamples[0]);
    normalSamples[1] = texture2D(t, uvSamples[1]);
    normalSamples[2] = texture2D(t, uvSamples[2]);
    normalSamples[3] = texture2D(t, uvSamples[3]);
    normalSamples[4] = texture2D(t, uvSamples[4]);
    normalSamples[5] = texture2D(t, uvSamples[5]);
    normalSamples[6] = texture2D(t, uvSamples[6]);
    normalSamples[7] = texture2D(t, uvSamples[7]);
    normalSamples[8] = texture2D(t, uvSamples[8]);

    float depthBias = 0.0001;
    
    if (normalSamples[0].a != vID && normalSamples[0].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[0]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[1].a != vID && normalSamples[1].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[1]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[2].a != vID && normalSamples[2].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[2]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[3].a != vID && normalSamples[3].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[3]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }


    if (normalSamples[4].a != vID && normalSamples[4].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[4]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[5].a != vID && normalSamples[5].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[5]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[6].a != vID && normalSamples[6].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[6]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[7].a != vID && normalSamples[7].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[7]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[8].a != vID && normalSamples[8].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[8]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    vec3 sobel_edge_h = normalSamples[2].rgb + (2.0*normalSamples[5].rgb) + normalSamples[8].rgb - (normalSamples[0].rgb + (2.0*normalSamples[3].rgb) + normalSamples[6].rgb);
  	vec3 sobel_edge_v = normalSamples[0].rgb + (2.0*normalSamples[1].rgb) + normalSamples[2].rgb - (normalSamples[6].rgb + (2.0*normalSamples[7].rgb) + normalSamples[8].rgb);

    float edgeNormal = sqrt(dot(sobel_edge_h, sobel_edge_h) + dot(sobel_edge_v, sobel_edge_v));
    return edgeNormal;
}
`);return{outline:new $(`vec3 outline(vec3 outlineColor, vec3 contourColor, float outlineWidth, float contourWidth, float outlineThreshold, float contourThreshold, float outlineSmoothing, float contourFrequency, vec3 contourDirection, bool positionalLines, vec2 resolution, sampler2D normalMap, sampler2D depthMap, float pixelRatio, bool compensation, float mask, float alpha, out float calpha) {
                vec3 result = outlineColor;
                float resultAlpha = 0.0;

                vec3 N = normalize(vWNormal);
                vec2 nuv = (gl_FragCoord.xy / resolution);
                float sobelSample = compensation ? sobelSample(normalMap, depthMap, nuv, resolution, outlineWidth / 2., pixelRatio) : sobelSample(normalMap, depthMap, nuv, resolution, outlineWidth, pixelRatio);
                
                
                
                
                float outlineLow = outlineThreshold - outlineSmoothing;
                float outlineHigh = outlineThreshold + outlineSmoothing;
                resultAlpha = outlineHigh > outlineLow
                    ? smoothstep(outlineLow, outlineHigh, sobelSample)
                    : (sobelSample > outlineThreshold ? 1.0 : 0.0);

                
                

                float t = 1.0 - contourThreshold;
                if(positionalLines) {
                    vec3 NDir = position * contourDirection;
                    float NT = NDir.x + NDir.y + NDir.z;
                    float f  = fract(NT * contourFrequency * 0.01);
                    float df = fwidth(NT * contourFrequency);

                    float g = smoothstep(df * (contourWidth * 0.01), df * (contourWidth * 0.01 * 2.0), f);
                    if (g < 1.0 && resultAlpha == 0.0) {
                        result = contourColor;
                        resultAlpha = 1.0;
                    }
                 }
                 else {
                    vec3 NDir = N * contourDirection;
                    float NT = NDir.x + NDir.y + NDir.z;
                    float df = fwidth(NT * contourThreshold);
                    float f = sin(NT * 1.0 * contourFrequency);
                    float g = smoothstep(0.0, df * contourWidth, 1.0 - f);

                    if (df > (t * 0.5) && g < 1.0 && resultAlpha == 0.0) {
                        result = contourColor;
                        resultAlpha = 1.0 - g;
                    }
                 }

                 float lalpha = alpha * resultAlpha * mask;
                 calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
                 accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
				 
                 return result;
             }`,[t])}})();var fn=class extends Ot{constructor(t,n,e,i,a,r,o,l,u,c,s,p,S,g,b,f,w,v){super("v3"),this.nodeType="Pattern",this.style=t,this.projection=n,this.axis=e,this.blending=i,this.offset=a,this.colorA=r,this.colorB=o,this.frequency=l,this.size=u,this.variation=c,this.smoothness=s,this.zigzag=p,this.rotation=S,this.vertical=g,this.horizontal=b,this.sides=f,this.isMask=v,this.alpha=w,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(t,n){if(t.isShader("fragment")){let e;switch(t.require("position"),t.require("uv"),t.requires.uv=[!0],t.require("normal"),t.requires.normal=!0,t.addFragmentVariable(this.calpha,"float"),this.style.value){case 0:default:e="circle";break;case 1:e="ring";break;case 2:e="polygon";break;case 3:e="xcross";break;case 4:e="diamond";break;case 5:e="checkerboard";break;case 6:e="line";break;case 7:e="wave"}let i=`g${this.uuid.toString().replace(/-/g,"")}`,a=new $(`float hashwithoutsine12(vec2 p)
				{
					vec3 p3 = fract(vec3(p.xyx) * .1031);
					p3 += dot(p3, p3.yzx + 33.33);
					return fract((p3.x + p3.y) * p3.z);
				}`),r=new $(`vec2 rotate_uv(in vec2 uv, float a, bool repeat) 
				{
					const float mid = 0.5;
					float radians = a * (PI / 180.0);
					vec2 rotated = vec2(
						cos(radians) * (uv.x - mid) + sin(radians) * (uv.y - mid) + mid,
						cos(radians) * (uv.y - mid) - sin(radians) * (uv.x - mid) + mid
					);
					return repeat ? fract(rotated): rotated;
				}`),o="";if(this.projection.value===4)o=`
				vec3 p = position;
				float factor = 0.0125;
				vec2 uv0 = fract(p.xy * factor);
				vec2 uv1 = fract(p.zy * factor);
				vec2 uv2 = fract(p.xz * factor);
				
				uv0 = rotate_uv(uv0 + offset, rotation, true);
				uv1 = rotate_uv(uv1 + offset, rotation, true);
				uv2 = rotate_uv(uv2 + offset, rotation, true);
	
				float d0 = ${this.style.value===2?`${e}(uv0, frequency, size, variation, smoothness_remapped, zigzag, rotation, sides)`:`${e}(uv0, frequency, size, variation, smoothness_remapped, zigzag, rotation)`};
				float d1 = ${this.style.value===2?`${e}(uv1, frequency, size, variation, smoothness_remapped, zigzag, rotation, sides)`:`${e}(uv1, frequency, size, variation, smoothness_remapped, zigzag, rotation)`};
				float d2 = ${this.style.value===2?`${e}(uv2, frequency, size, variation, smoothness_remapped, zigzag, rotation, sides)`:`${e}(uv2, frequency, size, variation, smoothness_remapped, zigzag, rotation)`};
				
				
				float exponent = (1.0 - blending) * 125.0 + 3.0;

				vec3 n = vObjectNormal;
				vec3 weights = abs(normalize(n));
				weights = pow(weights, vec3(exponent));
				weights /= dot(weights, vec3(1.0));
				d0 *= weights.z;
				d1 *= weights.x;
				d2 *= weights.y;
				float draw = d0 + d1 + d2;
	
				vec2 custom_uv = uv0 * weights.z + uv1 * weights.x + uv2 * weights.y;
				`;else{let s=this.style.value===2?`${e}(custom_uv, frequency, size, variation, smoothness_remapped, zigzag, rotation, sides)`:`${e}(custom_uv, frequency, size, variation, smoothness_remapped, zigzag, rotation)`,p="";this.axis.value===0?p=`float radius = length(p);
					float theta = atan(p.y, p.z);
					float phi = acos(p.x / radius);`:this.axis.value===1?p=`float radius = length(p);
					float theta = atan(p.x, p.z);
					float phi = acos(p.y / radius);`:(this.axis.value,p=`float radius = length(p);
					float theta = atan(p.y, p.x);
					float phi = acos(p.z / radius);`);let S="";switch(this.projection.value){case 0:S="custom_uv = vUv.st;";break;case 1:case 3:default:break;case 2:S=`
							vec3 p = position;
							${p}
							custom_uv = vec2(theta, phi);
							custom_uv /= PI;
							`}o=`
				vec2 custom_uv;
				${S}
	
				custom_uv += offset;
				custom_uv = fract(custom_uv);
				custom_uv = rotate_uv(custom_uv, rotation, true);
	
				float draw = ${s};
				`}let l=new $(`vec3 ${i}_pattern(vec3 normal, float blending, int style, vec2 offset, vec4 colorA, vec4 colorB, vec2 frequency, float size, float variation, float smoothness, float zigzag, float rotation, vec2 vertical, vec2 horizontal, int sides, bool isMask, float mask, float alpha, out float calpha) {
					const float TWO_PI = PI * 2.0;
					float smoothness_remapped = pow(smoothness, 5.0);	

					${o}

					
					vec4 color = mix(colorA, colorB, draw);
					color.a = clamp(color.a, 0.0, 1.0);

					
					color.a *= 
						step(vertical.x, custom_uv.y) * 
						step(custom_uv.y, vertical.y);
					color.a *= 
						step(horizontal.x, abs(custom_uv.x)) * 
						step(abs(custom_uv.x), horizontal.y);

					
					float lalpha = alpha * clamp(color.a, 0.0, 1.0) * mask;
					calpha = mix(lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0), lalpha, float(isMask));
					accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));

					return clamp(color, 0.0, 1.0).rgb;
				}`,[r,a,fn.DrawFunctions.circle,fn.DrawFunctions.ring,fn.DrawFunctions.polygon,fn.DrawFunctions.cross,fn.DrawFunctions.diamond,fn.DrawFunctions.checkerboard,fn.DrawFunctions.line,fn.DrawFunctions.wave]),u=t.include(l),c=[];return c.push("normal"),c.push(this.blending.build(t,"f")),c.push(this.style.build(t,"i")),c.push(this.offset.build(t,"v2")),c.push(this.colorA.build(t,"v4")),c.push(this.colorB.build(t,"v4")),c.push(this.frequency.build(t,"v2")),c.push(this.size.build(t,"f")),c.push(this.variation.build(t,"f")),c.push(this.smoothness.build(t,"f")),c.push(this.zigzag.build(t,"f")),c.push(this.rotation.build(t,"f")),c.push(this.vertical.build(t,"v2")),c.push(this.horizontal.build(t,"v2")),c.push(this.sides.build(t,"i")),c.push(this.isMask.build(t,"b")),c.push(this.mask?`luminance(${this.mask.flow(t,"v3").result})`:"1.0"),c.push(this.alpha.build(t,"f")),c.push(this.calpha),t.format(u+"("+c.join(",")+")",this.getType(t),n)}return console.warn("PatterNode is not compatible with "+t.shader+" shader."),t.format("vec3(0.0)",this.getType(t),n)}},Ms=fn;Ms.DrawFunctions=(function(){let t=new $(`float hashwithoutsine12(vec2 p) {
				vec3 p3 = fract(vec3(p.xyx) * 0.1031);
				p3 += dot(p3, p3.yzx + 33.33);
				return fract((p3.x + p3.y) * p3.z);
			}`),n=new $(`vec2 tile_and_center(in vec2 uv, in vec2 frequency, in float variation, in float zigzag, in float rotation) {
                
                uv *= frequency;

                
                vec2 i = floor(uv);

                
                float row_offset = mod(i.y, 2.0);
                uv.x += row_offset * zigzag;
                vec2 f = fract(uv);

				
				
				
				
				
				
				

                f = f * 2.0 - 1.0;

				
				i = floor(uv);
				float rand = (hashwithoutsine12(i) * 5.0 + 1.0);
				float jitter = mix(1.0, rand, variation);
				f *= jitter;

                return f;
            }`,[t]);return{tileAndCenter:n,circle:new $(`float circle(in vec2 uv, in vec2 frequency, in float size, in float variation, in float smoothness, in float zigzag, in float rotation) {
                vec2 f = tile_and_center(uv, frequency, variation, zigzag, rotation);
                return smoothstep(
                    -smoothness, 
                     smoothness, 
                     length(f) - size
                );
            }`,[n]),ring:new $(`float ring(in vec2 uv, in vec2 frequency, in float size, in float variation, in float smoothness, in float zigzag, in float rotation) {
                vec2 f = tile_and_center(uv, frequency, variation, zigzag, rotation);

				float d = length(f);
                const float inner_width = 0.5;

                float outer = smoothstep(-smoothness, smoothness, d - size);
                float inner = smoothstep(-smoothness, smoothness, d - size * inner_width);
				return outer + (1.0 - inner);   
            }`,[n]),polygon:new $(`float sdf_ngon(in vec2 p, in float r, in int n) {
                float an = (PI * 2.0) / float(n);
                float he = r * tan(0.5 * an);
                
                
                p = -p.yx; 
                float bn = an * floor((atan(p.y, p.x) + 0.5 * an) / an);
                vec2  cs = vec2(cos(bn), sin(bn));
                p = mat2(cs.x, -cs.y, cs.y, cs.x)*p;
            
                
                return length(p - vec2(r, clamp(p.y, -he, he))) * sign(p.x - r);
            }
            
            float polygon(in vec2 uv, in vec2 frequency, in float size, in float variation, in float smoothness, in float zigzag, in float rotation, in int sides) {
                vec2 f = tile_and_center(uv, frequency, variation, zigzag, rotation);
                return smoothstep(-smoothness, smoothness, sdf_ngon(f, size, sides));
            }`,[n]),cross:new $(`float sdf_cross(in vec2 p, in vec2 b, float r ) {
                p = abs(p); 
				p = (p.y > p.x) ? p.yx : p.xy;
                vec2  q = p - b;
                float k = max(q.y, q.x);
                vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);
                return sign(k) * length(max(w, 0.0)) + r;
            }
            
            
            float xcross(in vec2 uv, in vec2 frequency, in float size, in float variation, in float smoothness, in float zigzag, in float rotation) {
                vec2 f = tile_and_center(uv, frequency, variation, zigzag, rotation);
                return smoothstep(-smoothness, smoothness, sdf_cross(f, vec2(size, size * 0.25), smoothness));
            }`,[n]),diamond:new $(`float ndot(vec2 a, vec2 b) { 
                return a.x*b.x - a.y*b.y; 
            }
            
            float sdf_diamond(in vec2 p, in vec2 b) {
                p = abs(p);
                float h = clamp(ndot(b - 2.0 * p, b) / dot(b, b), -1.0, 1.0);
                float d = length(p - 0.5 * b * vec2(1.0 - h, 1.0 + h));
                return d * sign(p.x * b.y + p.y * b.x - b.x * b.y);
            }

            float diamond(in vec2 uv, in vec2 frequency, in float size, in float variation, in float smoothness, in float zigzag, in float rotation) {
                vec2 f = tile_and_center(uv, frequency, variation, zigzag, rotation);
	            return smoothstep(-smoothness, smoothness, sdf_diamond(f, vec2(size)));
            }`,[n]),checkerboard:new $(`float checkerboard(in vec2 uv, in vec2 frequency, in float size, in float variation, in float smoothness, in float zigzag, in float rotation) {
                uv *= frequency;
                vec2 i = floor(uv);

                float offset = mod(i.y, 2.0);

                uv.x += offset + zigzag * offset;
                float x = floor(uv.x);
                
                return mod(x, 2.0);
            }`),line:new $(`float line(in vec2 uv, in vec2 frequency, in float size, in float variation, in float smoothness, in float zigzag, in float rotation) {
                vec2 f = tile_and_center(uv, frequency, 0.0, zigzag, rotation);
				
				
				float row = floor(uv * frequency).y;
				float rand = hashwithoutsine12(vec2(row));
				float s = mix(size, size * rand, variation);

				return smoothstep(
					s - smoothness, 
					s + smoothness, 
					abs(f.y)
				);
            }`,[n]),wave:new $(`
            float udf_cos(in vec2 p, in float a, in float b, in float c, in float d) {
                
                p = c * (p - vec2(d, a));
                
                const float TWO_PI = PI * 2.0;

                
                p.x = mod(p.x, TWO_PI); 
                if (p.x > PI) {
                    p.x = TWO_PI - p.x;
                }
            
                
                float xa = 0.0;
                float xb = TWO_PI;

                
                for (int i = 0; i < 24; i++) {
                    float x = 0.5 * (xa + xb);
                    float y = x - p.x + b * c * sin(x) * (p.y - b * c * cos(x));
                    if (y < 0.0) xa = x; 
                    else xb = x;
                }
                float x = 0.5 * (xa + xb);
                
                
                vec2 q = vec2(x, b * c * cos(x));
                return length(p - q) / c;
            }

            float wave(in vec2 uv, in vec2 frequency, in float size, in float variation, in float smoothness, in float zigzag, in float rotation) {
                float repeat = frequency.x;
                uv *= repeat;
                vec2 i = floor(uv);
                float row_offset = mod(i.y, 2.0);
                uv.x += row_offset * zigzag;
                vec2 f = vec2(uv.x, fract(uv.y));

                
                const float amplitude = 0.125;
                float wave_frequency = frequency.y * 0.1;
                float distance_estimate = udf_cos(f, 0.50, amplitude, wave_frequency * (2.0 * PI), 0.0);

				
				float rand = hashwithoutsine12(vec2(i.y));
				float s = mix(size, size * rand, variation);

                return smoothstep(-smoothness, smoothness, distance_estimate - s * 0.5);
            }`)}})();var Ta=class extends Ot{constructor(t,n,e,i,a,r,o,l,u=!0){super("v3"),this.nodeType="Rainbow",this.filmThickness=t,this.movement=n,this.wavelengths=e,this.noiseStrength=i,this.noiseScale=a,this.offset=r,this.isMask=l,this.alpha=o,this.noiseEnabled=u,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(t,n){if(t.require("vWorldViewDir"),t.require("worldNormal"),t.isShader("fragment")){t.require("uv"),t.requires.uv=[!0],t.addFragmentVariable(this.calpha,"float");let e=t.include(this.noiseEnabled?Ta.Nodes.rainbow:Ta.Nodes.rainbowNN),i=[];return i.push(this.filmThickness.build(t,"f")),i.push(this.movement.build(t,"f")),i.push(this.wavelengths.build(t,"v3")),i.push(this.noiseStrength.build(t,"f")),i.push(this.noiseScale.build(t,"f")),i.push(this.offset.build(t,"v3")),i.push(this.isMask.build(t,"b")),i.push(this.mask?`luminance(${this.mask.flow(t,"v3").result})`:"1.0"),i.push(this.alpha.build(t,"f")),i.push(this.calpha),t.format(e+"("+i.join(",")+")",this.getType(t),n)}return console.warn("RainbowNode is not compatible with "+t.shader+" shader."),t.format("vec3( 0.0 )",this.getType(t),n)}},ys=Ta;ys.Nodes=(function(){let t=new $(`vec3 attenuation(vec3 wavelengths, float filmThickness, float movement, float noiseStrength, float noiseScale, vec3 offset) {
				float f = 0.0;

				if (noiseStrength != 0.0) {
					vec3 st = position / noiseScale;
					float noise = simplexFast(1.6 * st + vec3(1.8, 1.5, 1.9) * simplexFast(st) + vec3(1.7, 9.2, 1.0));
					f = noise * noiseStrength;
				}

				vec3 waves = wavelengths * vec3(1.0, 0.8, 0.6) + 1.0;
				float angle = dot(normalize(vWorldViewDir + (offset * -0.001)), normalize(vWNormal));

				mediump vec3 color = cos((((filmThickness + f) / waves) * angle) + movement);
				return .5 + .5 * color;
			 }`,[Ue.simplexFast]),n=new $(`vec3 rainbow(float filmThickness, float movement, vec3 wavelengths, float noiseStrength, float noiseScale, vec3 offset, bool isMask, float mask, float alpha, out float calpha) {
				mediump vec3 res = clamp(attenuation(wavelengths, filmThickness, movement, noiseStrength, noiseScale, offset), 0.0, 2.0);

				float rainbowContribution = clamp(res.r + res.g + res.b, 0.0, 1.0);

				float lalpha = alpha * rainbowContribution * mask;
				calpha = mix(lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0), lalpha, float(isMask));
				accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));

				return res;
			 }`,[t]),e=new $(`vec3 attenuationNN(vec3 wavelengths, float filmThickness, float movement, float noiseStrength, float noiseScale, vec3 offset) {
				vec3 waves = wavelengths * vec3(1.0, 0.8, 0.6) + 1.0;
				float angle = dot(normalize(vWorldViewDir + (offset * -0.001)), normalize(vWNormal));

				mediump vec3 color = cos(((filmThickness / waves) * angle) + movement);
				return .5 + .5 * color;
			 }`);return{rainbow:n,rainbowNN:new $(`vec3 rainbowNN(float filmThickness, float movement, vec3 wavelengths, float noiseStrength, float noiseScale, vec3 offset, bool isMask, float mask, float alpha, out float calpha) {
				mediump vec3 res = clamp(attenuationNN(wavelengths, filmThickness, movement, noiseStrength, noiseScale, offset), 0.0, 2.0);

				float rainbowContribution = clamp(res.r + res.g + res.b, 0.0, 1.0);

				float lalpha = alpha * rainbowContribution * mask;
				calpha = mix(lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0), lalpha, float(isMask));
				accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));

				return res;
			 }`,[e])}})();var Cs=class extends Ot{constructor(t,n,e,i,a,r,o,l,u,c){super("v3"),this.nodeType="Toon",this.positioning=t,this.colors=n,this.steps=e,this.source=i,this.isWorldSpace=a,this.noiseStrength=r,this.noiseScale=o,this.shadowColor=l,this.offset=u,this.alpha=c,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(t,n){if(t.require("worldNormal"),t.require("worldPosition"),t.isShader("fragment")){t.define("COLORS_MAX",10),t.addFragmentVariable(this.calpha,"float");let e=t.include(Cs.Nodes.toon),i=[];return i.push(this.positioning.build(t,"i")),i.push(this.colors.build(t,"v4[]")),i.push(this.steps.build(t,"f[]")),i.push(this.source.build(t,"v3")),i.push(this.isWorldSpace.build(t,"b")),i.push(this.noiseStrength.build(t,"f")),i.push(this.noiseScale.build(t,"f")),i.push(this.shadowColor.build(t,"v4")),i.push(this.offset.build(t,"v3")),i.push(this.mask?`luminance(${this.mask.flow(t,"v3").result})`:"1.0"),i.push(this.alpha.build(t,"f")),i.push(this.calpha),t.format(e+"("+i.join(",")+")",this.getType(t),n)}return console.warn("ToonNode is not compatible with "+t.shader+" shader."),t.format("vec3( 0.0 )",this.getType(t),n)}},Rs=Cs;Rs.Nodes=(function(){let t=new $(`float rand(float n) {
				return fract(sin(n) * 43758.5453123);
			}`),n=new $(`float hash1(float p) { 
				p = fract(p * 0.011); 
				p *= p + 7.5; 
				p *= p + p; 
				return fract(p); 
			}`),e=new $(`float valueNoise(vec3 x) {
				const vec3 step = vec3(110, 241, 171);
			
				vec3 i = floor(x);
				vec3 f = fract(x);
			 
				
				
				float n = dot(i, step);
			
				vec3 u = f * f * (3.0 - 2.0 * f);
				return mix(mix(mix( hash1(n + dot(step, vec3(0, 0, 0))), hash1(n + dot(step, vec3(1, 0, 0))), u.x),
							   mix( hash1(n + dot(step, vec3(0, 1, 0))), hash1(n + dot(step, vec3(1, 1, 0))), u.x), u.y),
						   mix(mix( hash1(n + dot(step, vec3(0, 0, 1))), hash1(n + dot(step, vec3(1, 0, 1))), u.x),
							   mix( hash1(n + dot(step, vec3(0, 1, 1))), hash1(n + dot(step, vec3(1, 1, 1))), u.x), u.y), u.z);
			}`,[n]),i=new $(`vec3 hash3(vec3 x) {
				x = vec3(dot(x,vec3(127.1, 311.7, 74.7)),
						 dot(x,vec3(269.5, 183.3, 246.1)),
						 dot(x,vec3(113.5, 271.9, 124.6)));
			
				return fract(sin(x)*43758.5453123);
			}`),a=new $(`vec3 voronoiNoise(in vec3 x)
			{
				vec3 p = floor(x);
				vec3 f = fract(x);

				float id = 0.0;
				vec2 res = vec2(100.0);

				for(int k=-1; k<=1; k++)
				for(int j=-1; j<=1; j++)
				for(int i=-1; i<=1; i++)
				{
					vec3 b = vec3(float(i), float(j), float(k));

					
					vec3 r = vec3(b) - f + hash3(p + b);
					float d = dot(r, r);

					if (d < res.x)
					{
						id = dot(p + b, vec3(1.0, 57.0, 113.0));
						res = vec2(d, res.x);			
					}
					else if (d < res.y)
					{
						res.y = d;
					}
				}

				return vec3(sqrt(res), abs(id));
			}
			`,[i]);return{toon:new $(`vec3 toon(int positioning, vec4 colors[COLORS_MAX], float steps[COLORS_MAX], vec3 source, bool isWorldSpace, float noiseStrength, float noiseScale, vec4 shadowColor, vec3 offset, float mask, float alpha, out float calpha) {
				float t = 0.0;
				float shadow = 1.0;

				if (positioning == 0) {

					
					#if (defined(PHONG) || defined(LAMBERT) || defined(STANDARD))

						
						const vec3 weights = vec3(0.2125, 0.7154, 0.0721);
						vec3 lpos;
						vec3 l;
						float dproduct;

						#if (NUM_POINT_LIGHTS > 0)

							#if defined(USE_SHADOWMAP) && (NUM_POINT_LIGHT_SHADOWS > 0)
								PointLightShadow pointLightShadow;
							#endif 

							#pragma unroll_loop_start
							for (int i = 0; i < NUM_POINT_LIGHTS; i++) {
								
								lpos = (inverse(viewMatrix) * vec4(pointLights[UNROLLED_LOOP_INDEX].position, 1.0)).xyz;
								l = normalize(lpos - worldPosition);
								
								dproduct = dot(l, normalize(worldNormal)) * 0.5 + 0.5;
								
								
								

								t = max(t, dproduct);

								
								#if defined(USE_SHADOWMAP) && (UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS)
									pointLightShadow = pointLightShadows[UNROLLED_LOOP_INDEX];
									shadow *= getPointShadow( 
											pointShadowMap[UNROLLED_LOOP_INDEX], 
											pointLightShadow.shadowMapSize,
											pointLightShadow.shadowIntensity,
											pointLightShadow.shadowBias, 
											pointLightShadow.shadowRadius,
											vPointShadowCoord[UNROLLED_LOOP_INDEX], 
											pointLightShadow.shadowCameraNear, 
											pointLightShadow.shadowCameraFar);
								#endif
							}
							#pragma unroll_loop_end

						#endif

						#if NUM_DIR_LIGHTS > 0 
							
							#if defined(USE_SHADOWMAP) && (NUM_DIR_LIGHT_SHADOWS > 0)
								DirectionalLightShadow directionalLightShadow;
							#endif 

							#pragma unroll_loop_start
							for (int i = 0; i < NUM_DIR_LIGHTS; i++) {
								
								l = (inverse(viewMatrix) * vec4(directionalLights[UNROLLED_LOOP_INDEX].direction, 0.0)).xyz;
		
								dproduct = dot(l, normalize(worldNormal)) * 0.5 + 0.5;
								t = max(t, dproduct);

								
								#if defined(USE_SHADOWMAP) && (UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS)
									directionalLightShadow = directionalLightShadows[UNROLLED_LOOP_INDEX];
									shadow *= getShadow( 
										UNROLLED_LOOP_INDEX,
										directionalShadowMap[UNROLLED_LOOP_INDEX], 
										directionalLightShadow.shadowMapSize,
										directionalLightShadow.shadowIntensity,
										directionalLightShadow.shadowBias, 
										directionalLightShadow.shadowRadius, 
										vDirectionalShadowCoord[UNROLLED_LOOP_INDEX]);
								#endif
							}
							#pragma unroll_loop_end

						#endif

						#if NUM_SPOT_LIGHTS > 0 
							
							#if defined(USE_SHADOWMAP) && (NUM_SPOT_LIGHT_SHADOWS > 0)
								SpotLightShadow spotLightShadow;
							#endif 

							#pragma unroll_loop_start
							for (int i = 0; i < NUM_SPOT_LIGHTS; i++) {
								lpos = (inverse(viewMatrix) * vec4(spotLights[UNROLLED_LOOP_INDEX].position, 1.0)).xyz;
								l = normalize(lpos - worldPosition);
								
								dproduct = dot(l, normalize(worldNormal)) * 0.5 + 0.5;
								t = max(t, dproduct);

								
								#if defined(USE_SHADOWMAP) && (UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS)
									spotLightShadow = spotLightShadows[UNROLLED_LOOP_INDEX];
									shadow *= getShadow(
										UNROLLED_LOOP_INDEX,
										spotShadowMap[UNROLLED_LOOP_INDEX], 
										spotLightShadow.shadowMapSize,
										spotLightShadow.shadowIntensity,
										spotLightShadow.shadowBias, 
										spotLightShadow.shadowRadius, 
										vSpotLightCoord[UNROLLED_LOOP_INDEX]);
								#endif
							}
							#pragma unroll_loop_end

						#endif

						t = clamp(t, 0.0, 1.0);
				
					#endif

				} else if (positioning == 1) {
					
					vec3 origin = mix(position, worldPosition, float(isWorldSpace));
					vec3 direction = normalize(source - origin);
					t = dot(direction, normalize(worldNormal)) * 0.5 + 0.5;	

				} else {

					vec3 origin = worldPosition;
					vec3 source = cameraPosition - offset;
					vec3 direction = normalize(source - origin);
					t = dot(direction, normalize(worldNormal)) * 0.5 + 0.5;	
					
				}

				if (noiseStrength > 0.0) {
					
					vec3 st = position / noiseScale;
					
					
					float noise = 1.0 - voronoiNoise(st).x;

					
					

					
					
					
					
					
					
					
					

					t += noise * noiseStrength;
				}

				t = clamp(t, 0.0, 1.0);

				
				float p;
				vec4 color = colors[0];
				for (int i = 1; i < COLORS_MAX; i++) {
					p = clamp((t - steps[i-1]) / (steps[i] - steps[i-1]), 0.0, 1.0);
					color = mix(color, colors[i], smoothstep(0.0, 1.0, p));
				}

				
				if (positioning == 0) {

					vec3 blendedShadow = mix(color.rgb, shadowColor.rgb, shadowColor.a);
					color.rgb = mix(blendedShadow, color.rgb, shadow);
				
				}

				
				float lalpha = alpha * color.a * mask;
				calpha =  lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0);
				accumAlpha += (1.0 - accumAlpha) * lalpha;

				return color.xyz;

            }`,[Ue.simplexFast,t,e,a])}})();var Id={textureBicubic:new $(`float w0( float a ) {
            return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
        }
    
        float w1( float a ) {
            return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
        }
    
        float w2( float a ){
            return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
        }
    
        float w3( float a ) {
            return ( 1.0 / 6.0 ) * ( a * a * a );
        }
    
        
        float g0( float a ) {
            return w0( a ) + w1( a );
        }
    
        float g1( float a ) {
            return w2( a ) + w3( a );
        }
    
        
        float h0( float a ) {
            return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
        }
    
        float h1( float a ) {
            return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
        }
    
        vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
            uv = uv * texelSize.zw + 0.5;
    
            vec2 iuv = floor( uv );
            vec2 fuv = fract( uv );
    
            float g0x = g0( fuv.x );
            float g1x = g1( fuv.x );
            float h0x = h0( fuv.x );
            float h1x = h1( fuv.x );
            float h0y = h0( fuv.y );
            float h1y = h1( fuv.y );
    
            vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
            vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
            vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
            vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
    
            return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) + 
                   g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
        }

        vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
            vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
            vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
            vec2 fLodSizeInv = 1.0 / fLodSize;
            vec2 cLodSizeInv = 1.0 / cLodSize;
            vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
            vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
            return mix( fSample, cSample, fract( lod ) );
        }`)},As=class extends Ot{constructor(t,n,e,i,a,r,o,l){super("v3"),this.nodeType="Transmission",this.thickness=t,this.ior=n,this.roughness=e,this.transmissionSamplerSize=i,this.transmissionSamplerMap=a,this.transmissionDepthMap=r,this.aspectRatio=o,this.alpha=l,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(t,n){if(t.extensions.shaderTextureLOD=!0,t.extensions.derivatives=!0,t.isShader("fragment")){t.define("NUM_SAMPLES",6),t.define("BLUR_SLOD",Math.pow(2,lt.transmissionLod.value)),t.require("worldPosition"),t.requires.worldNormal=!0,t.requires.modelMatrix=!0,t.requires.projectionMatrix=!0,t.addFragmentVariable(this.calpha,"float");let e=t.include(As.Nodes.transmission),i=[];return i.push(this.thickness.build(t,"f")),i.push(this.ior.build(t,"f")),i.push(this.roughness.build(t,"f")),i.push(this.transmissionSamplerSize.build(t,"v2")),i.push(this.transmissionSamplerMap.getTexture(t,"t")),i.push(this.transmissionDepthMap.getTexture(t,"t")),i.push(this.aspectRatio.build(t,"v2")),i.push("normal"),i.push(this.mask?`luminance(${this.mask.flow(t,"v3").result})`:"1.0"),i.push(this.alpha.build(t,"f")),i.push(this.calpha),t.format(e+"("+i.join(",")+")",this.getType(t),n)}return console.warn("TransmissionNode is not compatible with "+t.shader+" shader."),t.format("vec3( 0.0 )",this.getType(t),n)}},Ps=As;Ps.Nodes=(function(){let t=new $(`vec3 blur(sampler2D sp, vec2 U, vec2 scale, float lod, sampler2D dm, vec2 unrefractedU, vec2 aspectRatio) {
                
                

				
				if (lod == 0.0) {
					#ifdef TEXTURE_LOD_EXT
					return texture2DLodEXT( sp, U, 0.0).rgb;
					#else
					return textureLod( sp, U, 0.0).rgb;
					#endif
				}
				
				vec2 texelSize = vec2(1.0) / resolution;
                vec2 halton = haltonSequence[frameIndex];
                float temporalOffset = getNoiseInterleavedGradient(gl_FragCoord.xy + halton);
                float temporalAngle  = temporalOffset * PI2;
				vec3 res = vec3(0.0);
                vec2 uv = vec2(0.0);
                vec2 offset = vec2(0.0);
                vec2 vogelSample = vec2(0.0);
                for (int i = 0; i < NUM_SAMPLES; i++) {
                    vogelSample =  vogelDiskSample(i, NUM_SAMPLES, temporalAngle) * texelSize;
                    offset = vogelSample * scale * (lod * 10.0); 
                    uv = U + offset;
                    float opaqueDepth = unpackRGBAToDepth(textureLod(dm, uv, lod));
                    if (opaqueDepth != 0.0 && opaqueDepth < gl_FragCoord.z) {
                        uv = unrefractedU;
                        lod = lod > 4.0 ? lod : lod / 2.0;
                    }
                    res += textureLod(sp, uv, lod).rgb;
                }
                return res / float(NUM_SAMPLES);
            }`),n=new $(`vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		        
		        vec3 refractionVector = refract( -v,  n, 1.0 / ior );
		        
				
		        vec3 modelScale;
		        modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		        modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		        modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

		        
		        return normalize( refractionVector ) * thickness * modelScale;
	        }`),e=new $(`float applyIorToRoughness( float roughness, float ior ) {
				// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
				// an IOR of 1.5 results in the default amount of microfacet refraction.
				return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
			}`),i=new $(`vec3 getTransmissionSample( vec2 fragCoord, float roughness, float ior, vec2 transmissionSamplerSize, sampler2D transmissionSamplerMap, sampler2D transmissionDepthMap, vec2 unrefractedCoords, vec2 aspectRatio) {
				
				
				#ifdef IS_THREEJS_EXPORT
					float lod = log2(transmissionSamplerSize.x) * applyIorToRoughness(roughness / 5.0, ior);
					return textureBicubic(transmissionSamplerMap, fragCoord.xy, lod).rgb;
				#else
					float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
					float lod = applyIorToRoughness(roughness, ior);
					return blur(transmissionSamplerMap, fragCoord, vec2(lod), min(framebufferLod / 5.5, 8.5), transmissionDepthMap, unrefractedCoords, aspectRatio);
				#endif
			}`,[Id.textureBicubic,e,t]),a=new $(`vec3 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness, vec2 transmissionSamplerSize, sampler2D transmissionSamplerMap, sampler2D transmissionDepthMap, vec2 aspectRatio ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;

				
				vec4 ndcPos = projMatrix * viewMatrix *  vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;

				vec4 ndcPosUnrefracted = projMatrix * viewMatrix * vec4(position, 1.0 );
				vec2 unrefractedCoords = ndcPosUnrefracted.xy / ndcPosUnrefracted.w;
				unrefractedCoords += 1.0;
				unrefractedCoords /= 2.0;

				
				return getTransmissionSample( refractionCoords, roughness, ior, transmissionSamplerSize, transmissionSamplerMap, transmissionDepthMap, unrefractedCoords, aspectRatio );
    		}`,[i,n]);return{transmission:new $(`vec3 transmission(float thickness, float ior, float roughness, vec2 transmissionSamplerSize, sampler2D transmissionSamplerMap, sampler2D transmissionDepthMap, vec2 aspectRatio, vec3 normal, float mask, float alpha, out float calpha) {
                vec3 v = vec3(0.);
                if (isOrthographic) {
                    v = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
                } else {
                    v = normalize(vWPosition - cameraPosition);
                }
                vec3 transmission = getIBLVolumeRefraction(vWNormal, -v, roughness,  vWPosition, modelMatrix, viewMatrix, projectionMatrix, ior, thickness, transmissionSamplerSize, transmissionSamplerMap, transmissionDepthMap, aspectRatio );
                
				float lalpha = alpha * mask;
				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * alpha;

				return transmission;
            }`,[a])}})();var Ds=class extends Ot{constructor(t){super("v3"),this.nodeType="VertexColor",this.alpha=t,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(t,n){if(t.isShader("fragment")){t.requires.color[0]=!0;let e=t.include(Ds.Nodes.vertexColorLayer);t.addFragmentVariable(this.calpha,"float");let i=[];return i.push("vColor"),i.push(this.mask?`luminance(${this.mask.build(t,"v3")})`:"1.0"),i.push(this.alpha.build(t,"f")),i.push(this.calpha),t.format(e+"("+i.join(",")+")",this.getType(t),n)}return console.warn("VertexColorNode is not compatible with "+t.shader+" shader."),t.format("vec3( 0.0 )",this.getType(t),n)}},Ls=Ds;Ls.Nodes={vertexColorLayer:new $(`vec3 vertexColorLayer(vec4 vcolor, float mask, float alpha, out float calpha) {
				float lalpha = alpha * mask * vcolor.a;
				calpha =  lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0);
				accumAlpha += (1.0 - accumAlpha) * lalpha;

				return vcolor.rgb;
			}`)};var oa,ba=((oa=ba||{}).NOISE="noise",oa.MAP="map",oa),Us=class extends Ot{constructor(t,n,e,i,a,r,o,l,u,c,s){super("v3"),this.displacementTypeIndex=new kt(0),this.nodeType="VertexDisplacement",this.intensity=t,this.movementOrTexture=n,Object.values(ba)[this.displacementTypeIndex.value]==="map"&&(this.mat=new cs(this.movementOrTexture.value.matrix)),this.cropOrOffset=e,this.scale=c,this.noiseFunctionIndex=s,this.voronoiStyle=i,this.smoothness=a,this.seed=r,this.highCut=o,this.lowCut=l,this.quality=u}generate(t,n){if(t.isShader("vertex")){t.define("USE_LAYER_DISPLACE");let e,i=[];switch(i.push("displaced_position"),i.push("displaced_normal"),Object.values(ba)[this.displacementTypeIndex.value]){case"map":e=t.include(Us.Nodes.map),i.push(this.movementOrTexture.getTexture(t,"t")),i.push("uv"),i.push(this.cropOrOffset.build(t,"f")),this.mat&&i.push(this.mat.build(t,"mat3"));break;case"noise":{let a=["simplexPrecise","simplexFractal","simplexAshima","fbm","perlin","voronoi"][this.noiseFunctionIndex.value],r=new $(`vec3 orthogonal(vec3 v) {
							return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0) : vec3(0.0, -v.z, v.y));
						}`),o=new $(`vec3 distorted(vec3 p, vec3 n, float scale, float intensity, vec3 offset, float neighbour_offset, float movement, int voronoiStyle, float smoothness, float seed, float highCut, float lowCut, int quality) {
							${a=="voronoi"?`
					float v = ${a}((p + offset) * scale * 0.001 + neighbour_offset + (movement * 0.1), voronoiStyle, smoothness, seed, quality);
					v = remap(v, lowCut, highCut, 0.0, 1.0);
					v = smax(v, 0.0, smoothness * 0.25);
					v = smin(v, 1.0, smoothness * 0.25);

					return p + n * v * intensity;
					`:`
					return p + n * ${a}((p + offset) * scale * 0.001 + neighbour_offset + (movement * 0.1)) * intensity;
					`}
						}`,[Ue.simplexPrecise,Ue.simplexFractal,Ue.simplexAshima,Ue.fbm,Ue.perlin,Ue.voronoi]),l=new $(`vec3 vertexDisplacementNoise(vec3 position, vec3 normal, float scale, vec3 offset, float movement, int voronoiStyle, float smoothness, float seed, float highCut, float lowCut, int quality, float intensity, out vec3 displaced_normal) {
							vec3 displaced_position = distorted(position, normal, scale, intensity, offset, neighbor_offset, movement, voronoiStyle, smoothness, seed, highCut, lowCut, quality);
							vec3 tangent1 = orthogonal(normal);
							vec3 tangent2 = normalize(cross(normal, tangent1));

                            
                            
                            
                            
                            
							vec3 nearby1 = position + tangent1;
							vec3 nearby2 = position + tangent2;
							vec3 distorted1 = distorted(nearby1, normal, scale, intensity, offset, neighbor_offset, movement, voronoiStyle, smoothness, seed, highCut, lowCut, quality);
							vec3 distorted2 = distorted(nearby2, normal, scale, intensity, offset, neighbor_offset, movement, voronoiStyle, smoothness, seed, highCut, lowCut, quality);
							displaced_normal = normalize(cross(distorted1 - displaced_position, distorted2 - displaced_position));
							return displaced_position;
						}`,[o,r]);e=t.include(l),i.push(this.scale.build(t,"f")),i.push(this.cropOrOffset.build(t,"v3")),i.push(this.movementOrTexture.build(t,"f")),i.push(this.voronoiStyle.build(t,"i")),i.push(this.smoothness.build(t,"f")),i.push(this.seed.build(t,"f")),i.push(this.highCut.build(t,"f")),i.push(this.lowCut.build(t,"f")),i.push(this.quality.build(t,"i"));break}}return i.push(this.intensity.build(t,"f")),i.push("displaced_normal"),t.format(e+"("+i.join(",")+")",this.getType(t),n)}return console.warn("VertexDisplacementNode is not compatible with "+t.shader+" shader."),t.format("vec3( 0.0 )",this.getType(t),n)}},Ns=Us;Ns.Nodes=(function(){let t=new $(`vec3 orthogonal(vec3 v) {
				return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0) : vec3(0.0, -v.z, v.y));
			}`),n=new $(`float displacementMapTexture(sampler2D tex, float crop, vec2 uv, mat3 mat, vec2 offset) {
				vec2 uvs = (mat * vec3(uv * 2.0 - 1.0, 1.0) / 2.0 + 0.5).xy + offset;
				vec4 tmp = texture2D(tex, uvs);
				vec3 col = tmp.rgb;
				if (crop > 0.5) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						return 0.0;
					}
				}
				return col.r;
			}`);return{map:new $(`vec3 vertexDisplacementMap(vec3 position, vec3 normal, sampler2D tex, vec2 uv, float crop, mat3 mat, float intensity, out vec3 displaced_normal) {
				vec3 displaced_position = position + normal * displacementMapTexture(tex, crop, uv, mat, vec2(0.0)) * intensity;
				vec3 tangent1 = normalize(orthogonal(normal));
				vec3 tangent2 = normalize(cross(normal, tangent1));
				vec3 nearby1 = position + tangent1 * 0.1;
				vec3 nearby2 = position + tangent2 * 0.1;
				vec3 distorted1 = nearby1 + normal * displacementMapTexture(tex, crop, uv, mat, vec2(neighbor_offset)) * intensity;
				vec3 distorted2 = nearby2 + normal * displacementMapTexture(tex, crop, uv, mat, vec2(neighbor_offset)) * intensity;
				displaced_normal = normalize(cross(distorted1 - displaced_position, distorted2 - displaced_position));
				return displaced_position;
			}`,[t,n])}})();var lt={normalRenderTarget:new en,normalRenderTargetDepth:new en,normalViewRenderTarget:new en,transmissionRenderTarget:new en,aspectRatio:new Ce,transmissionSize:new Ce(2048,2048),transmissionRenderTargetDepth:new en,aoRenderTarget:new en,aoEnabled:new De,pixelRatioNode:new K(1),resolution:new Ce,penumbraSize:new Rn(Kn,.5),frameIndex:new kt(0),transmissionLod:new kt(2),taaEnabled:new De(!0)};for(let t of Object.values(lt))t.isRenderGlobal=!0;var Un={spe_fogMode:new rt(0),spe_fogHeightParams:new rt(new Mt(.005,.01,0))},vi=`
#include <fog_pars_fragment>
#ifdef USE_FOG
	uniform float spe_fogMode;
	uniform vec3 spe_fogHeightParams;

	// Analytic optical depth of an exponential height-fog layer along the
	// camera->fragment ray (see FogChunk.ts). fogWorldDelta = fragment -
	// camera in WORLD space, fogDist = its length. With x = falloff *
	// fogWorldDelta.y the integral collapses to camDensity * fogDist * F(x),
	// F(x) = (1 - e^-x)/x. F is evaluated on a sign-preserving |x| >= 1e-4:
	// that keeps F's x->0 limit of 1 (horizontal rays / falloff 0 degrade to
	// classic exponential fog) without a branch — deliberate, because the
	// WGSL twins' select() evaluates BOTH sides, so a guarded division, not
	// a branch, is what actually prevents inf/NaN there, and all four
	// implementations stay line-for-line identical.
	float speHeightFogFactor(const in vec3 fogWorldDelta, const in float fogDist) {
		float density = spe_fogHeightParams.x;
		float falloff = spe_fogHeightParams.y;
		float relY = cameraPosition.y - spe_fogHeightParams.z;
		// Density at the camera's own height, overflow-clamped: far below
		// the fog base the exponent explodes; the fog factor saturates to 1
		// long before, so the clamp is invisible.
		float camDensity = density * exp(clamp(-falloff * relY, -60.0, 60.0));
		float x = clamp(falloff * fogWorldDelta.y, -60.0, 60.0);
		float xSafe = (x >= 0.0 ? 1.0 : -1.0) * max(abs(x), 1e-4);
		float opticalDepth =
			camDensity * fogDist * (1.0 - exp(-xSafe)) / xSafe;
		return 1.0 - exp(-max(opticalDepth, 0.0));
	}
#endif
`,gi=`
#ifdef USE_FOG
	float speFogLinear = smoothstep(fogNear, fogFar, vFogDepth);
	vec3 speFogViewPos = -vViewPosition;
	float speFogDist = length(speFogViewPos);
	vec3 speFogWorldDelta = speFogViewPos * mat3(viewMatrix);
	float speFogHeight = speHeightFogFactor(speFogWorldDelta, speFogDist);
	float speFogWLinear = 1.0 - step(0.5, spe_fogMode) + step(1.5, spe_fogMode);
	float speFogWHeight = step(0.5, spe_fogMode);
	float speFogFactor = 1.0 -
		(1.0 - speFogLinear * speFogWLinear) *
			(1.0 - speFogHeight * speFogWHeight);
	gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, speFogFactor);
#endif
`,La=class extends he{constructor(){super("basic"),this.nodeType="Basic",this.color=new le(Ke),this.shadingAlpha=new K(1),this.shadingBlend=new kt(0),this.previousModelViewMatrix=new sn,this.previouseProjectionMatrix=new sn}get category(){return"phong"}generate(t){let n;if(t.isShader("vertex")){let e=this.position?this.position.analyzeAndFlow(t,"v3",{cache:"position"}):void 0;t.mergeUniform({frameIndex:lt.frameIndex}),t.mergeUniform({resolution:lt.resolution}),t.mergeUniform({previousModelViewMatrix:this.previousModelViewMatrix}),t.mergeUniform({previousProjectionMatrix:this.previouseProjectionMatrix}),t.mergeUniform(Zn.merge([Y.fog])),t.mergeUniform(Un),t.addParsCode(["varying vec3 vViewPosition;","varying vec3 vWPosition;","#include <fog_pars_vertex>","#include <skinning_pars_vertex>","#include <normal_pars_vertex>","#include <morphtarget_pars_vertex>"].join(`
`));let i=["#include <beginnormal_vertex>","#include <morphnormal_vertex>",`
				#include <skinbase_vertex>
				#include <skinnormal_vertex>
				#if !defined( USE_LAYER_DISPLACE )
					#include <defaultnormal_vertex>
				#endif

				vec3 displaced_position = position;
				vec3 displaced_normal = normal;

				#if defined( USE_LAYER_DISPLACE )
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,"#include <normal_vertex>",`
				#if !defined( USE_LAYER_DISPLACE )
					#include <begin_vertex>
				#endif /* !USE_LAYER_DISPLACE */
				`];e&&i.push(e.code,e.result?"displaced_position = "+e.result+";":""),i.push("transformed = displaced_position;","#include <morphtarget_vertex>","#include <skinning_vertex>","transformedNormal = normalMatrix * displaced_normal;","#ifndef FLAT_SHADED","	vNormal = transformedNormal;","#endif"),i.push("#include <project_vertex>","#include <fog_vertex>","#include <clipping_planes_vertex>","	vViewPosition = - mvPosition.xyz;","#include <worldpos_vertex>"),i.push("vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;"),n=i.join(`
`)}else{this.color===void 0&&(this.color=new le(Ke)),this.color.analyze(t,{slot:"color"}),this.alpha&&this.alpha.analyze(t),this.afterColor&&this.afterColor.analyze(t,{slot:"afterColor"});let e=this.color.flow(t,"c",{slot:"color"}),i=this.alpha?this.alpha.flow(t,"f"):void 0,a=this.alphaOverride?this.alphaOverride.flow(t,"f"):void 0,r=this.afterColor?this.afterColor.flow(t,"c",{slot:"afterColor"}):void 0;t.requires.transparent=i!==void 0,t.addParsCode(["varying vec3 vWPosition;",vi,"#include <dithering_pars_fragment>","varying vec3 vViewPosition;","#include <normal_pars_fragment>"].join(`
`));let o=["#include <normal_fragment_begin>",e.code];i&&o.push(i.code,"#ifdef ALPHATEST"," if ( "+i.result+" <= ALPHATEST ) discard;","#endif"),r?o.push(r.code,`vec3 outgoingLight = ${e.result};`,`vec3 finalColor = spe_blend(outgoingLight, ${r.result}, 1.0, SPE_BLENDING_NORMAL);`):o.push(`vec3 finalColor = ${e.result};`);let l="1.0";this.mask&&(this.mask.analyze(t),l=`luminance(${this.mask.flow(t,"v3").result})`),i?o.push(`gl_FragColor = vec4( finalColor, accumAlpha * ${i.result} * ${l} );`):o.push("gl_FragColor = vec4("+e.result+", 1.0 );"),a&&o.push(`gl_FragColor.a *= ${a.result};`),o.push(gi,"#include <dithering_fragment>"),n=o.join(`
`)}return n}},Od=class extends he{constructor(){super("lambert"),this.nodeType="Lambert",this.color=new le(Ke),this.emissive=new le(0),this.emissiveIntensity=new K(1),this.previousModelViewMatrix=new sn,this.previouseProjectionMatrix=new sn,this.shadingAlpha=new K(1),this.shadingBlend=new kt(0),this.occlusion=new De(!0)}get category(){return"lambert"}build(t){let n;if(t.define("LAMBERT"),t.requires.lights=!0,t.extensions.derivatives=!0,t.isShader("vertex")){let e=this.position?this.position.analyzeAndFlow(t,"v3",{cache:"position"}):void 0;t.mergeUniform({frameIndex:lt.frameIndex}),t.mergeUniform({resolution:lt.resolution}),t.mergeUniform({previousModelViewMatrix:this.previousModelViewMatrix}),t.mergeUniform({previousProjectionMatrix:this.previouseProjectionMatrix}),t.mergeUniform(Zn.merge([Y.fog,Y.lights])),t.mergeUniform(Un),t.addParsCode(["varying vec3 vViewPosition;","varying vec3 vWPosition;","varying vec3 vLightFront;","varying vec3 vIndirectFront;","#ifndef DOUBLE_SIDED","   #define DOUBLE_SIDED","#endif","#ifdef DOUBLE_SIDED","	varying vec3 vLightBack;","	varying vec3 vIndirectBack;","#endif","#include <bsdfs>","#include <lights_pars_begin>","#include <color_pars_vertex>","#include <fog_pars_vertex>","#include <skinning_pars_vertex>","#include <normal_pars_vertex>","#include <morphtarget_pars_vertex>","#include <shadowmap_pars_vertex>","#include <clipping_planes_pars_vertex>"].join(`
`));let i=["#include <beginnormal_vertex>","#include <morphnormal_vertex>",`
				#include <skinbase_vertex>
				#include <skinnormal_vertex>
				#ifndef USE_LAYER_DISPLACE
					#include <defaultnormal_vertex>
				#endif

				vec3 displaced_position = position;
				vec3 displaced_normal = objectNormal;

				#ifdef USE_LAYER_DISPLACE
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,"#include <normal_vertex>",`
				#ifndef USE_LAYER_DISPLACE
					#include <begin_vertex>
				#endif
				`];e&&i.push(e.code,e.result?"displaced_position = "+e.result+";":""),i.push("transformed = displaced_position;","#include <morphtarget_vertex>","#include <skinning_vertex>","transformedNormal = normalMatrix * displaced_normal;","#ifndef FLAT_SHADED","    vNormal = transformedNormal;","#endif"),i.push("	#include <project_vertex>","	#include <clipping_planes_vertex>","	vViewPosition = - mvPosition.xyz;","	#include <worldpos_vertex>",`
					vec3 diffuse = vec3( 1.0 );
					
					
					struct GeometricContext { vec3 position; vec3 normal; vec3 viewDir; };
					GeometricContext geometry;
					geometry.position = mvPosition.xyz;
					geometry.normal = normalize( transformedNormal );
					geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
				`),i.push(`
					GeometricContext backGeometry;
					backGeometry.position = geometry.position;
					backGeometry.normal = -geometry.normal;
					backGeometry.viewDir = geometry.viewDir;
					vLightFront = vec3( 0.0 );
					vIndirectFront = vec3( 0.0 );
					#ifdef DOUBLE_SIDED
						vLightBack = vec3( 0.0 );
						vIndirectBack = vec3( 0.0 );
					#endif
					IncidentLight directLight;
					float dotNL;
					vec3 directLightColor_Diffuse;
					vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
					#if defined( USE_LIGHT_PROBES )
						vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
					#endif
					#ifdef DOUBLE_SIDED
						vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
						#if defined( USE_LIGHT_PROBES )
							vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
						#endif
					#endif
					#if NUM_POINT_LIGHTS > 0
						#pragma unroll_loop_start
						for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
							getPointLightInfo( pointLights[ i ], geometry.position, directLight );
							dotNL = dot( geometry.normal, directLight.direction );
							directLightColor_Diffuse = directLight.color;
							vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
							#ifdef DOUBLE_SIDED
								vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
							#endif
						}
						#pragma unroll_loop_end
					#endif
					#if NUM_SPOT_LIGHTS > 0
						#pragma unroll_loop_start
						for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
							getSpotLightInfo( spotLights[ i ], geometry.position, directLight );
							dotNL = dot( geometry.normal, directLight.direction );
							directLightColor_Diffuse = directLight.color;
							vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
							#ifdef DOUBLE_SIDED
								vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
							#endif
						}
						#pragma unroll_loop_end
					#endif
					#if NUM_DIR_LIGHTS > 0
						#pragma unroll_loop_start
						for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
							getDirectionalLightInfo( directionalLights[ i ], directLight );
							dotNL = dot( geometry.normal, directLight.direction );
							directLightColor_Diffuse = directLight.color;
							vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
							#ifdef DOUBLE_SIDED
								vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
							#endif
						}
						#pragma unroll_loop_end
					#endif
					#if NUM_HEMI_LIGHTS > 0
						#pragma unroll_loop_start
						for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
							vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
							#ifdef DOUBLE_SIDED
								vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
							#endif
						}
						#pragma unroll_loop_end
					#endif
				`,"	#include <shadowmap_vertex>","	#include <fog_vertex>"),i.push("vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;"),n=i.join(`
`)}else{t.mergeUniform({penumbraSize:lt.penumbraSize}),t.mergeUniform({frameIndex:lt.frameIndex}),t.mergeUniform({aoMap:lt.aoRenderTarget}),t.mergeUniform({aoEnabled:lt.aoEnabled}),this.color===void 0&&(this.color=new le(Ke)),this.color.analyze(t,{slot:"color"}),this.shadingAlpha.analyze(t),this.shadingBlend.analyze(t),this.afterColor&&this.afterColor.analyze(t,{slot:"afterColor"}),this.alpha&&this.alpha.analyze(t);let e=this.color.flow(t,"c",{slot:"color"}),i=this.emissive.flow(t,"c",{slot:"emissive"}),a=this.emissiveIntensity.flow(t,"f",{slot:"emissive"}),r=this.occlusion.flow(t,"b",{slot:"occlusion"}),o=this.shadingAlpha.flow(t,"f"),l=this.shadingBlend.flow(t,"i"),u=this.afterColor?this.afterColor.flow(t,"c",{slot:"afterColor"}):void 0,c=this.alpha?this.alpha.flow(t,"f"):void 0,s=this.alphaOverride?this.alphaOverride.flow(t,"f"):void 0;t.requires.transparent=c!==void 0,t.addParsCode([`uniform float penumbraSize[${Kn}];`,"uniform sampler2D aoMap;","uniform bool aoEnabled;","varying vec3 vViewPosition;","varying vec3 vWPosition;","varying vec3 vLightFront;","varying vec3 vIndirectFront;","#ifndef DOUBLE_SIDED","   #define DOUBLE_SIDED","#endif","#include <normal_pars_fragment>","#ifdef DOUBLE_SIDED","	varying vec3 vLightBack;","	varying vec3 vIndirectBack;","#endif","#include <bsdfs>","#include <lights_pars_begin>",vi,"#include <shadowmap_pars_fragment>","#include <shadowmask_pars_fragment>","#include <clipping_planes_pars_fragment>","#include <dithering_pars_fragment>"].join(`
`));let p=["#include <normal_fragment_begin>",`
				
				vec3 viewdx = dFdx(vViewPosition);
				vec3 viewdy = dFdy(vViewPosition);
				vec3 faceNormal = normalize(cross(viewdx, viewdy));
				bool isFrontFacing = (dot(normal, faceNormal) >= 0.0);
				`,"#include <clipping_planes_fragment>"];p.push(e.code,"vec3 diffuseColor = "+e.result+";","ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );"),c&&p.push(c.code,"#ifdef ALPHATEST","if ( "+c.result+" <= ALPHATEST ) discard;","#endif"),p.push("#ifdef DOUBLE_SIDED","	reflectedLight.indirectDiffuse += ( isFrontFacing ) ? vIndirectFront : vIndirectBack;","#else","	reflectedLight.indirectDiffuse += vIndirectFront;","#endif","#ifdef USE_LIGHTMAP","	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );","	reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity;","#endif","reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );","#ifdef DOUBLE_SIDED","	reflectedLight.directDiffuse = ( isFrontFacing ) ? vLightFront : vLightBack;","#else","	reflectedLight.directDiffuse = vLightFront;","#endif","reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();"),i&&p.push(i.code,"reflectedLight.directDiffuse += "+i.result+" * "+a.result+";"),p.push("vec3 ao = aoEnabled && "+r.result+" ? tex2D(aoMap, gl_FragCoord.xy / resolution).rgb : vec3(1.0);","vec3 outgoingLight = (reflectedLight.directDiffuse + reflectedLight.indirectDiffuse) ;");let S="1.0";this.mask&&(this.mask.analyze(t),S=`luminance(${this.mask.flow(t,"v3").result})`),p.push(`
				if (outgoingLight != diffuseColor) {
					float lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );
					accumAlpha += ( 1.0 - accumAlpha ) * ${o.result} * ${S} * lightAccu;
					outgoingLight = spe_blend( diffuseColor, outgoingLight, ${o.result} * ${S}, ${l.result} );

					outgoingLight *= ao;
				}
				`),u&&p.push(u.code,`outgoingLight = spe_blend(outgoingLight, ${u.result}, 1.0, SPE_BLENDING_NORMAL);`),c?p.push(`gl_FragColor = vec4( outgoingLight, accumAlpha * ${c.result} );`):p.push("gl_FragColor = vec4( outgoingLight, 1.0 );"),s&&p.push(`gl_FragColor.a *= ${s.result};`),p.push("#include <colorspace_fragment>",gi,"#include <dithering_fragment>"),n=p.join(`
`)}return n}},qn={dHdxy:new $(`vec2 dHdxy(sampler2D bumpMap, vec2 bumpMapUv, float bumpScale) {

            
            vec2 dSTdx = dFdx(bumpMapUv);

            
            vec2 dSTdy = dFdy(bumpMapUv);
            
            
            float Hll = bumpScale * luminance(texture(bumpMap, bumpMapUv).rgb);
            float dBx = bumpScale * luminance(texture(bumpMap, bumpMapUv + dSTdx).rgb) - Hll;
            float dBy = bumpScale * luminance(texture(bumpMap, bumpMapUv + dSTdy).rgb) - Hll;
            
            return vec2( dBx, dBy );
        }`),perturbNormalArb:new $(`vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
            vec3 vSigmaX = dFdx( surf_pos.xyz );
            vec3 vSigmaY = dFdy( surf_pos.xyz );
            vec3 vN = surf_norm; 
            
            vN = normalize(vN);

            vec3 R1 = cross( vSigmaY, vN );
            vec3 R2 = cross( vN, vSigmaX );

            R1 = normalize(R1);
            R2 = normalize(R2);
    
            float fDet = dot( vSigmaX, R1 ) * faceDirection;
    
            vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
            return normalize( abs( fDet ) * vN - vGrad );
        }`)},Fd=class extends he{constructor(){super("standard"),this.nodeType="Standard",this.color=new le(Ke),this.roughness=new K(.3),this.metalness=new K(0),this.reflectivity=new K(.5),this.previousModelViewMatrix=new sn,this.previouseProjectionMatrix=new sn,this.shadingAlpha=new K(1),this.shadingBlend=new kt(0),this.occlusion=new De(!0)}get category(){return"physical"}build(t){let n;if(t.define("STANDARD"),t.requires.lights=!0,t.extensions.derivatives=!0,t.extensions.shaderTextureLOD=!0,t.isShader("vertex")){let e=this.position?this.position.analyzeAndFlow(t,"v3",{cache:"position"}):void 0;t.mergeUniform({frameIndex:lt.frameIndex}),t.mergeUniform({resolution:lt.resolution}),t.mergeUniform({previousModelViewMatrix:this.previousModelViewMatrix}),t.mergeUniform({previousProjectionMatrix:this.previouseProjectionMatrix}),t.mergeUniform(Zn.merge([Y.fog,Y.lights])),t.mergeUniform(Un),Y.LTC_1&&(t.uniforms.ltc_1={value:void 0},t.uniforms.ltc_2={value:void 0}),t.addParsCode(["varying vec3 vViewPosition;","varying vec3 vWPosition;","#include <fog_pars_vertex>","#include <skinning_pars_vertex>","#include <normal_pars_vertex>","#include <morphtarget_pars_vertex>","#include <shadowmap_pars_vertex>","#include <clipping_planes_pars_vertex>"].join(`
`));let i=["#include <beginnormal_vertex>","#include <morphnormal_vertex>",`
				#include <skinbase_vertex>
				#include <skinnormal_vertex>
				#if !defined( USE_LAYER_DISPLACE )
					#include <defaultnormal_vertex>
				#endif

				vec3 displaced_position = position;
				vec3 displaced_normal = objectNormal;

				#if defined( USE_LAYER_DISPLACE )
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,"#include <normal_vertex>",`
				#if !defined( USE_LAYER_DISPLACE )
					#include <begin_vertex>
				#endif /* !USE_LAYER_DISPLACE */
				`];e&&i.push(e.code,e.result?"displaced_position = "+e.result+";":""),i.push("transformed = displaced_position;","#include <morphtarget_vertex>","#include <skinning_vertex>","transformedNormal = normalMatrix * displaced_normal;","#ifndef FLAT_SHADED","    vNormal = transformedNormal;","#endif"),i.push("#include <project_vertex>","#include <fog_vertex>","#include <clipping_planes_vertex>","	vViewPosition = - mvPosition.xyz;","#include <worldpos_vertex>","#include <shadowmap_vertex>"),i.push("vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;"),n=i.join(`
`)}else{t.mergeUniform({penumbraSize:lt.penumbraSize}),t.mergeUniform({frameIndex:lt.frameIndex}),t.mergeUniform({aoMap:lt.aoRenderTarget}),t.mergeUniform({aoEnabled:lt.aoEnabled}),t.mergeUniform({dfgLUT:{value:null}});let e={gamma:!0};this.color===void 0&&(this.color=new le(Ke)),this.color.analyze(t,{slot:"color",context:e}),this.roughness.analyze(t),this.metalness.analyze(t);let i=this.occlusion.flow(t,"b",{slot:"occlusion"});this.shadingAlpha.analyze(t),this.shadingBlend.analyze(t),this.afterColor&&this.afterColor.analyze(t,{slot:"afterColor"}),this.alpha&&this.alpha.analyze(t),this.reflectivity&&this.reflectivity.analyze(t);let a=this.color.flow(t,"c",{slot:"color",context:e}),r=this.roughness.flow(t,"f"),o=this.metalness.flow(t,"f"),l=this.shadingAlpha.flow(t,"f"),u=this.shadingBlend.flow(t,"i"),c=this.afterColor?this.afterColor.flow(t,"c",{slot:"afterColor"}):void 0,s=this.alpha?this.alpha.flow(t,"f"):void 0,p=this.alphaOverride?this.alphaOverride.flow(t,"f"):void 0,S=this.reflectivity?this.reflectivity.flow(t,"f"):void 0;t.requires.transparent=s!==void 0,t.addParsCode(["varying vec3 vViewPosition;","varying vec3 vWPosition;",`uniform float penumbraSize[${Kn}];`,"uniform sampler2D aoMap;","uniform bool aoEnabled;","#include <normal_pars_fragment>","#include <dithering_pars_fragment>",vi,"#include <bsdfs>","#include <lights_pars_begin>","#include <lights_physical_pars_fragment>","#include <shadowmap_pars_fragment>"].join(`
`));let g=["#include <clipping_planes_fragment>","	#include <normal_fragment_begin>",`
				
				vec3 viewdx = dFdx(vViewPosition);
				vec3 viewdy = dFdy(vViewPosition);
				vec3 faceNormal = normalize(cross(viewdx,viewdy));
				if (dot(normal, faceNormal) < 0.0) {
					normal *= -1.0;
				}
				`,"	PhysicalMaterial material;","	material.diffuseColor = vec3( 1.0 );"];if(this.bumpMap){t.include(qn.dHdxy),t.include(qn.perturbNormalArb);let f=this.bumpMap.texture.flow(t,"t"),w=this.bumpMap.flow(t,"v3"),v=this.bumpMapIntensity?this.bumpMapIntensity.flow(t,"f").result:"1.0",x="";x=this.bumpMap.projection.value===4?`
					vec3 bumpNormal = vec3(0.0);
					{
						vec2 uv0 = g${this.bumpMap.uuid.toString().replace(/-/g,"")}_writeUvs0;
						vec2 uv1 = g${this.bumpMap.uuid.toString().replace(/-/g,"")}_writeUvs1;
						vec2 uv2 = g${this.bumpMap.uuid.toString().replace(/-/g,"")}_writeUvs2;
						vec3 weights = g${this.bumpMap.uuid.toString().replace(/-/g,"")}_triplanarWeights;

						vec2 grad0 = dHdxy(${f.result}, uv0, ${v});
						vec3 n0 = perturbNormalArb(-vViewPosition, normal, grad0, faceDirection);

						vec2 grad1 = dHdxy(${f.result}, uv1, ${v});
						vec3 n1 = perturbNormalArb(-vViewPosition, normal, grad1, faceDirection);

						vec2 grad2 = dHdxy(${f.result}, uv2, ${v});
						vec3 n2 = perturbNormalArb(-vViewPosition, normal, grad2, faceDirection);
						
						bumpNormal = n0 * weights.z + n1 * weights.x + n2 * weights.y;
						bumpNormal = normalize(bumpNormal);
					}

					normal = bumpNormal;
					`:`
					vec2 bumpMapCachedUv = g${this.bumpMap.uuid.toString().replace(/-/g,"")}_writeUvs;
					vec2 grad = dHdxy(${f.result}, bumpMapCachedUv, ${v});
					normal = perturbNormalArb( - vViewPosition, normal, grad, faceDirection );
					`,g.push(`// Call the Texture Layer's function once here so that it writes out its procedural UV coordinates
					${w.result};
					${x}
					`)}if(g.push(a.code,"	vec3 diffuseColor = "+a.result+";","	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );",o.code,"	float metalnessFactor = "+o.result+";"),this.roughnessMap){let f=this.roughnessMap.texture.flow(t,"t"),w=this.roughnessMap.flow(t,"v3"),v="";v=this.roughnessMap.projection.value===4?`
					float roughnessChange = 1.0;
					{
						vec2 uv0 = g${this.roughnessMap.uuid.toString().replace(/-/g,"")}_writeUvs0;
						vec2 uv1 = g${this.roughnessMap.uuid.toString().replace(/-/g,"")}_writeUvs1;
						vec2 uv2 = g${this.roughnessMap.uuid.toString().replace(/-/g,"")}_writeUvs2;
						vec3 weights = g${this.roughnessMap.uuid.toString().replace(/-/g,"")}_triplanarWeights;

						float r0 = luminance(texture(${f.result}, uv0).rgb) * roughnessScale;
						float r1 = luminance(texture(${f.result}, uv1).rgb) * roughnessScale;
						float r2 = luminance(texture(${f.result}, uv2).rgb) * roughnessScale;

						roughnessChange = (r0 * weights.z + r1 * weights.x + r2 * weights.y);
					}
					float roughnessFactor = roughnessChange * ${r.result};
					`:`
					vec2 roughnessMapCachedUv = g${this.roughnessMap.uuid.toString().replace(/-/g,"")}_writeUvs;

					vec4 vals = texture(${f.result},  roughnessMapCachedUv);
					float roughnessFactor = luminance(vals.rgb) * ${r.result};
					`,g.push(`// Call the Texture Layer's function once here so that it writes out its procedural UV coordinates
					${w.result};

					const float roughnessScale = 1.0;

					${v}
				`)}else g.push(r.code,"	float roughnessFactor = "+r.result+";");s&&g.push(s.code,"#ifdef ALPHATEST","	if ( "+s.result+" <= ALPHATEST ) discard;","#endif"),g.push("vec3 dxy = max( abs( dFdx( normal ) ), abs( dFdy( normal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );"),g.push("material.diffuseColor = diffuseColor;","material.diffuseContribution = diffuseColor * ( 1.0 - metalnessFactor );","material.metalness = metalnessFactor;","material.specularF90 = 1.0;","material.roughness = max( roughnessFactor, 0.0525 );","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.roughness = clamp( roughnessFactor, 0.04, 1.0 );"),S?g.push(S.code,"material.specularColor = vec3( 0.16 * pow2( "+S.result+" ) );","material.specularColorBlended = mix( material.specularColor, diffuseColor, metalnessFactor );"):g.push("material.specularColor = vec3( 0.04 );","material.specularColorBlended = mix( material.specularColor, diffuseColor, metalnessFactor );"),g.push("#include <lights_fragment_begin>"),g.push("#include <lights_fragment_end>"),g.push("vec3 ao = aoEnabled && "+i.result+" ? tex2D(aoMap, gl_FragCoord.xy / resolution).rgb : vec3(1.0);","vec3 outgoingLight = ((reflectedLight.directDiffuse + reflectedLight.indirectDiffuse)) + reflectedLight.directSpecular + reflectedLight.indirectSpecular;");let b="1.0";this.mask&&(this.mask.analyze(t),b=`luminance(${this.mask.flow(t,"v3").result})`),g.push(`
				if (outgoingLight != diffuseColor) {
					float lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );
					accumAlpha += ( 1.0 - accumAlpha ) * ${l.result} * ${b} * lightAccu;
					outgoingLight = spe_blend( diffuseColor, outgoingLight, ${l.result} * ${b}, ${u.result} );
					
					outgoingLight *= ao;
				}
				`),c&&g.push(c.code,`outgoingLight = spe_blend(outgoingLight, ${c.result}, 1.0, SPE_BLENDING_NORMAL);`),s?g.push(`gl_FragColor = vec4( outgoingLight, accumAlpha * ${s.result} );`):g.push("gl_FragColor = vec4( outgoingLight, 1.0 );"),p&&g.push(`gl_FragColor.a *= ${p.result};`),g.push("#include <colorspace_fragment>",gi,"#include <dithering_fragment>"),n=g.join(`
`)}return n}},zd=class extends he{constructor(){super("toon"),this.nodeType="Toon",this.color=new le(Ke),this.specular=new le(1118481),this.shininess=new K(30),this.previousModelViewMatrix=new sn,this.previouseProjectionMatrix=new sn,this.shadingAlpha=new K(1),this.shadingBlend=new kt(0)}get category(){return"toon"}build(t){let n;if(t.define("TOON"),t.requires.lights=!0,t.extensions.derivatives=!0,t.isShader("vertex")){let e=this.position?this.position.analyzeAndFlow(t,"v3",{cache:"position"}):void 0;t.mergeUniform({frameIndex:lt.frameIndex}),t.mergeUniform({resolution:lt.resolution}),t.mergeUniform({previousModelViewMatrix:this.previousModelViewMatrix}),t.mergeUniform({previousProjectionMatrix:this.previouseProjectionMatrix}),t.mergeUniform(Zn.merge([Y.fog,Y.lights])),t.mergeUniform(Un),t.addParsCode(["varying vec3 vViewPosition;","varying vec3 vWPosition;","#include <fog_pars_vertex>","#include <skinning_pars_vertex>","#include <normal_pars_vertex>","#include <morphtarget_pars_vertex>","#include <shadowmap_pars_vertex>","#include <clipping_planes_pars_vertex>"].join(`
`));let i=["#include <beginnormal_vertex>","#include <morphnormal_vertex>",`
				#include <skinbase_vertex>
				#include <skinnormal_vertex>
				#ifndef USE_LAYER_DISPLACE
					#include <defaultnormal_vertex>
				#endif

				vec3 displaced_position = position;
				vec3 displaced_normal = objectNormal;

				#ifdef USE_LAYER_DISPLACE
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,"#include <normal_vertex>",`
				#ifndef USE_LAYER_DISPLACE
					#include <begin_vertex>
				#endif
				`];e&&i.push(e.code,e.result?"displaced_position = "+e.result+";":""),i.push("transformed = displaced_position;","#include <morphtarget_vertex>","#include <skinning_vertex>","transformedNormal = normalMatrix * displaced_normal;","#ifndef FLAT_SHADED","    vNormal = transformedNormal;","#endif"),i.push("	#include <project_vertex>","	#include <fog_vertex>","	#include <clipping_planes_vertex>","	vViewPosition = - mvPosition.xyz;","	#include <worldpos_vertex>","	#include <shadowmap_vertex>","	#include <fog_vertex>"),i.push("vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;"),n=i.join(`
`)}else{t.mergeUniform({penumbraSize:lt.penumbraSize}),t.mergeUniform({frameIndex:lt.frameIndex}),t.mergeUniform({aoMap:lt.aoRenderTarget}),t.mergeUniform({aoEnabled:lt.aoEnabled}),this.color===void 0&&(this.color=new le(Ke)),this.color.analyze(t,{slot:"color"}),this.specular.analyze(t),this.shininess.analyze(t),this.shadingAlpha.analyze(t),this.shadingBlend.analyze(t),this.afterColor&&this.afterColor.analyze(t,{slot:"afterColor"}),this.alpha&&this.alpha.analyze(t);let e=this.color.flow(t,"c",{slot:"color"}),i=this.specular.flow(t,"c"),a=this.shininess.flow(t,"f"),r=this.shadingAlpha.flow(t,"f"),o=this.shadingBlend.flow(t,"i"),l=this.afterColor?this.afterColor.flow(t,"c",{slot:"afterColor"}):void 0,u=this.alpha?this.alpha.flow(t,"f"):void 0,c=this.alphaOverride?this.alphaOverride.flow(t,"f"):void 0;t.requires.transparent=u!==void 0,t.addParsCode([`uniform float penumbraSize[${Kn}];`,"uniform sampler2D aoMap;","uniform bool aoEnabled;","varying vec3 vWPosition;","#include <normal_pars_fragment>","#include <gradientmap_pars_fragment>",vi,"#include <bsdfs>","#include <lights_pars_begin>","#include <dithering_pars_fragment>",`
					varying vec3 vViewPosition;
					struct ToonMaterial {
						vec3	diffuseColor;
						vec3	specularColor;
						float	specularShininess;
						float	specularStrength;
					};
					
					
					
					void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
						vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;

						reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
						reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
					}
					void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
						reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
					}
					#define RE_Direct				RE_Direct_Toon
					#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
					#define Material_LightProbeLOD( material )	(0)
					`,"#include <shadowmap_pars_fragment>","#include <bumpmap_pars_fragment>","#include <normalmap_pars_fragment>"].join(`
`));let s=["#include <normal_fragment_begin>",`
				
				vec3 viewdx = dFdx(vViewPosition);
				vec3 viewdy = dFdy(vViewPosition);
				vec3 faceNormal = normalize(cross(viewdx,viewdy));
				if (dot(normal, faceNormal) < 0.0) {
					normal *= -1.0;
				}
				`,"	ToonMaterial material;"];if(this.bumpMap){t.include(qn.dHdxy),t.include(qn.perturbNormalArb);let S=this.bumpMap.texture.flow(t,"t"),g=this.bumpMap.flow(t,"v3"),b=this.bumpMapIntensity?this.bumpMapIntensity.flow(t,"f").result:"1.0",f="";f=this.bumpMap.projection.value===4?`
					vec3 bumpNormal = vec3(0.0);
					{
						vec2 uv0 = g${this.bumpMap.uuid.toString().replace(/-/g,"")}_writeUvs0;
						vec2 uv1 = g${this.bumpMap.uuid.toString().replace(/-/g,"")}_writeUvs1;
						vec2 uv2 = g${this.bumpMap.uuid.toString().replace(/-/g,"")}_writeUvs2;
						vec3 weights = g${this.bumpMap.uuid.toString().replace(/-/g,"")}_triplanarWeights;

						vec2 grad0 = dHdxy(${S.result}, uv0, ${b});
						vec3 n0 = perturbNormalArb(-vViewPosition, normal, grad0, faceDirection);

						vec2 grad1 = dHdxy(${S.result}, uv1, ${b});
						vec3 n1 = perturbNormalArb(-vViewPosition, normal, grad1, faceDirection);

						vec2 grad2 = dHdxy(${S.result}, uv2, ${b});
						vec3 n2 = perturbNormalArb(-vViewPosition, normal, grad2, faceDirection);
						
						bumpNormal = n0 * weights.z + n1 * weights.x + n2 * weights.y;
						bumpNormal = normalize(bumpNormal);
					}

					normal = bumpNormal;
					`:`
					vec2 bumpMapCachedUv = g${this.bumpMap.uuid.toString().replace(/-/g,"")}_writeUvs;
					vec2 grad = dHdxy(${S.result}, bumpMapCachedUv, ${b});
					normal = perturbNormalArb( - vViewPosition, normal, grad, faceDirection );
					`,s.push(`// Call the Texture Layer's function once here so that it writes out its procedural UV coordinates
					${g.result};
					${f}
					`)}s.push(e.code,"	vec3 diffuseColor = "+e.result+";","	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );",i.code,"	vec3 specular = "+i.result+";",a.code,"	float shininess = max( 0.0001, "+a.result+" );","	float specularStrength = 1.0;"),u&&s.push(u.code,"#ifdef ALPHATEST","if ( "+u.result+" <= ALPHATEST ) discard;","#endif"),s.push("material.diffuseColor = diffuseColor;"),s.push("material.specularColor = specular;","material.specularShininess = shininess;","material.specularStrength = specularStrength;","#include <lights_fragment_begin>","#include <lights_fragment_end>"),s.push("vec3 ao = aoEnabled ? tex2D(aoMap, gl_FragCoord.xy / resolution).rgb : vec3(1.0);","vec3 outgoingLight = ((reflectedLight.directDiffuse + reflectedLight.indirectDiffuse) * ao) + reflectedLight.directSpecular;");let p="1.0";this.mask&&(this.mask.analyze(t),p=`luminance(${this.mask.flow(t,"v3").result})`),s.push(`
				if (outgoingLight != diffuseColor) {
					float lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );
					accumAlpha += ( 1.0 - accumAlpha ) * ${r.result} * ${p} * lightAccu;
					outgoingLight = spe_blend( diffuseColor, outgoingLight, ${r.result} * ${p}, ${o.result} );
				}
				`),l&&s.push(l.code,`outgoingLight = spe_blend(outgoingLight, ${l.result}, 1.0, SPE_BLENDING_NORMAL);`),u?s.push(`gl_FragColor = vec4( outgoingLight, accumAlpha * ${u.result} );`):s.push("gl_FragColor = vec4( outgoingLight, 1.0 );"),c&&s.push(`gl_FragColor.a *= ${c.result};`),s.push("#include <colorspace_fragment>",gi,"#include <dithering_fragment>"),n=s.join(`
`)}return n}},Bd=class extends he{constructor(){super("phong"),this.nodeType="Phong",this.color=new le(Ke),this.specular=new le(1118481),this.shininess=new K(30),this.previousModelViewMatrix=new sn,this.previouseProjectionMatrix=new sn,this.shadingAlpha=new K(1),this.shadingBlend=new kt(0),this.occlusion=new De(!0)}get category(){return"phong"}build(t){let n;if(t.define("PHONG"),t.requires.lights=!0,t.extensions.derivatives=!0,t.isShader("vertex")){let e=this.position?this.position.analyzeAndFlow(t,"v3",{cache:"position"}):void 0;t.mergeUniform({frameIndex:lt.frameIndex}),t.mergeUniform({resolution:lt.resolution}),t.mergeUniform({previousModelViewMatrix:this.previousModelViewMatrix}),t.mergeUniform({previousProjectionMatrix:this.previouseProjectionMatrix}),t.mergeUniform(Zn.merge([Y.fog,Y.lights])),t.mergeUniform(Un),t.addParsCode(["varying vec3 vViewPosition;","varying vec3 vWPosition;","#include <fog_pars_vertex>","#include <skinning_pars_vertex>","#include <normal_pars_vertex>","#include <morphtarget_pars_vertex>","#include <shadowmap_pars_vertex>","#include <clipping_planes_pars_vertex>"].join(`
`));let i=["#include <beginnormal_vertex>","#include <morphnormal_vertex>",`
				#include <skinbase_vertex>
				#include <skinnormal_vertex>
				#ifndef USE_LAYER_DISPLACE
					#include <defaultnormal_vertex>
				#endif

				vec3 displaced_position = position;
				vec3 displaced_normal = objectNormal;

				#ifdef USE_LAYER_DISPLACE
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,"#include <normal_vertex>",`
				#ifndef USE_LAYER_DISPLACE
					#include <begin_vertex>
				#endif
				`];e&&i.push(e.code,e.result?"displaced_position = "+e.result+";":""),i.push("transformed = displaced_position;","#include <morphtarget_vertex>","#include <skinning_vertex>","transformedNormal = normalMatrix * displaced_normal;","#ifndef FLAT_SHADED","    vNormal = transformedNormal;","#endif"),i.push("	#include <project_vertex>","	#include <clipping_planes_vertex>","	vViewPosition = - mvPosition.xyz;","	#include <worldpos_vertex>","	#include <shadowmap_vertex>","	#include <fog_vertex>"),i.push("vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;"),n=i.join(`
`)}else{t.mergeUniform({penumbraSize:lt.penumbraSize}),t.mergeUniform({frameIndex:lt.frameIndex}),t.mergeUniform({aoMap:lt.aoRenderTarget}),t.mergeUniform({aoEnabled:lt.aoEnabled}),this.color===void 0&&(this.color=new le(Ke)),this.color.analyze(t,{slot:"color"}),this.specular.analyze(t),this.shininess.analyze(t);let e=this.occlusion.flow(t,"b",{slot:"occlusion"});this.shadingAlpha.analyze(t),this.shadingBlend.analyze(t),this.afterColor&&this.afterColor.analyze(t,{slot:"afterColor"}),this.alpha&&this.alpha.analyze(t);let i=this.color.flow(t,"c",{slot:"color"}),a=this.specular.flow(t,"c"),r=this.shininess.flow(t,"f"),o=this.shadingAlpha.flow(t,"f"),l=this.shadingBlend.flow(t,"i"),u=this.afterColor?this.afterColor.flow(t,"c",{slot:"afterColor"}):void 0,c=this.alpha?this.alpha.flow(t,"f"):void 0,s=this.alphaOverride?this.alphaOverride.flow(t,"f"):void 0;t.requires.transparent=c!==void 0,t.addParsCode(["varying vec3 vWPosition;","uniform vec3 emissive;",`uniform float penumbraSize[${Kn}];`,"uniform sampler2D aoMap;","uniform bool aoEnabled;","#include <normal_pars_fragment>",vi,"#include <bsdfs>","#include <lights_pars_begin>","#include <lights_phong_pars_fragment>","#include <shadowmap_pars_fragment>","#include <dithering_pars_fragment>"].join(`
`));let p=["#include <normal_fragment_begin>",`
				
				vec3 viewdx = dFdx(vViewPosition);
				vec3 viewdy = dFdy(vViewPosition);
				vec3 faceNormal = normalize(cross(viewdx,viewdy));
				if (dot(normal, faceNormal) < 0.0) {
					normal *= -1.0;
				}
				`,"	BlinnPhongMaterial material;"];if(this.bumpMap){t.include(qn.dHdxy),t.include(qn.perturbNormalArb);let g=this.bumpMap.texture.flow(t,"t"),b=this.bumpMap.flow(t,"v3"),f=this.bumpMapIntensity?this.bumpMapIntensity.flow(t,"f").result:"1.0",w="";w=this.bumpMap.projection.value===4?`
					vec3 bumpNormal = vec3(0.0);
					{
						vec2 uv0 = g${this.bumpMap.uuid.toString().replace(/-/g,"")}_writeUvs0;
						vec2 uv1 = g${this.bumpMap.uuid.toString().replace(/-/g,"")}_writeUvs1;
						vec2 uv2 = g${this.bumpMap.uuid.toString().replace(/-/g,"")}_writeUvs2;
						vec3 weights = g${this.bumpMap.uuid.toString().replace(/-/g,"")}_triplanarWeights;

						vec2 grad0 = dHdxy(${g.result}, uv0, ${f});
						vec3 n0 = perturbNormalArb(-vViewPosition, normal, grad0, faceDirection);

						vec2 grad1 = dHdxy(${g.result}, uv1, ${f});
						vec3 n1 = perturbNormalArb(-vViewPosition, normal, grad1, faceDirection);

						vec2 grad2 = dHdxy(${g.result}, uv2, ${f});
						vec3 n2 = perturbNormalArb(-vViewPosition, normal, grad2, faceDirection);
						
						bumpNormal = n0 * weights.z + n1 * weights.x + n2 * weights.y;
						bumpNormal = normalize(bumpNormal);
					}

					normal = bumpNormal;
					`:`
					vec2 bumpMapCachedUv = g${this.bumpMap.uuid.toString().replace(/-/g,"")}_writeUvs;
					vec2 grad = dHdxy(${g.result}, bumpMapCachedUv, ${f});
					normal = perturbNormalArb( - vViewPosition, normal, grad, faceDirection );
					`,p.push(`// Call the Texture Layer's function once here so that it writes out its procedural UV coordinates
					${b.result};
					${w}
					`)}p.push(i.code,"	vec3 diffuseColor = "+i.result+";","	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );","	vec3 totalEmissiveRadiance = emissive;",a.code,"	vec3 specular = "+a.result+";",r.code,"	float shininess = max( 0.0001, "+r.result+" );","	float specularStrength = 1.0;"),c&&p.push(c.code,"#ifdef ALPHATEST","if ( "+c.result+" <= ALPHATEST ) discard;","#endif"),p.push("material.diffuseColor = diffuseColor;"),p.push("material.specularColor = specular;","material.specularShininess = shininess;","material.specularStrength = specularStrength;","#include <lights_fragment_begin>","#include <lights_fragment_end>"),p.push("vec3 ao = aoEnabled && "+e.result+" ? tex2D(aoMap, gl_FragCoord.xy / resolution).rgb : vec3(1.0);","vec3 outgoingLight = ((reflectedLight.directDiffuse + reflectedLight.indirectDiffuse)) + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;");let S="1.0";this.mask&&(this.mask.analyze(t),S=`luminance(${this.mask.flow(t,"v3").result})`),p.push(`
				if (outgoingLight != diffuseColor) {
					float lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );
					accumAlpha += ( 1.0 - accumAlpha ) * ${o.result} * ${S} * lightAccu;
					outgoingLight = spe_blend( diffuseColor, outgoingLight, ${o.result} * ${S}, ${l.result} );
					
					outgoingLight *= ao;
				}
				`),u&&p.push(u.code,`outgoingLight = spe_blend(outgoingLight, ${u.result}, 1.0, SPE_BLENDING_NORMAL);`),c?p.push(`gl_FragColor = vec4( outgoingLight, accumAlpha * ${c.result});`):p.push("gl_FragColor = vec4( outgoingLight, 1.0 );"),s&&p.push(`gl_FragColor.a *= ${s.result};`),p.push("#include <colorspace_fragment>",gi,"#include <dithering_fragment>"),n=p.join(`
`)}return n}},Is=new Map;function Me(t,n){Is.set(t,n)}var ho=new Set;function Vd(t,n,e){if(n==="isMask"||t.type==="rainbow"&&n==="noiseStrength"&&t.noiseCompiledIn!==void 0&&(t.noiseForced===!0||Pa(e))!==t.noiseCompiledIn)return!0;let i=bc[t.type],a=wc[t.type];if(a!==void 0){let r=t.color;if(a.includes(n)){let o=r[n]?.value?.length;if(o!==void 0&&o!==e.length)return!0}}return i!==void 0&&i.includes(n)}function sa(t,n){if(Array.isArray(n)){if(!Array.isArray(t)||t.length!==n.length)return!1;for(let[a,r]of n.entries()){let o=t[a];if(typeof r=="string"||typeof r=="number"&&typeof o=="string")return!0}return!1}let e=typeof t=="string",i=typeof n=="string";return e!==i||e&&i}function wa(t,n,e){let i=e.uniforms[`f${e.id}_texture`];if(!i)return!1;let a=!1,r=t;if("image"in r){let o=r.image,l=n.image(o),u=i;u.image instanceof pa||u.image.deref(),u.image=l}if("video"in r){let o=r.video,l=n.video(o),u=i;u.image instanceof pa||u.image.deref(),u.image=l}if("wrapping"in r&&(i.wrap=r.wrapping),"minFilter"in r&&(i.minFilter=r.minFilter),"magFilter"in r&&(i.magFilter=r.magFilter),"rotation"in r&&e.uniforms[`f${e.id}_rotation`])return e.uniforms[`f${e.id}_rotation`].value=(ft(r.rotation??0,n)??0)*Bi.DEG2RAD,a;if("repeat"in r||"offset"in r||"rotation"in r){let o="mat",l=e.uniforms[`f${e.id}_${o}`];if(!l)return a;if("repeat"in r){let u=r.repeat;sa(e.data.texture.repeat,u)&&(a=!0),l.repeat=li(u,n).map((c,s)=>typeof u[s]=="string"?1/c:c)}if("offset"in r){let u=r.offset;sa(e.data.texture.offset,u)&&(a=!0),l.offset=li(u,n).map((c,s)=>typeof u[s]=="string"?-c:c)}if("rotation"in r){let u=e.data.texture.rotation,c=r.rotation??0;(u===void 0||sa(u,c))&&(a=!0),l.rotation=ft(c,n)??0}l.updateMatrix()}return a}var xn=(t,n)=>(t||(t=new Mt),t.x=ft(t.x,n)??0,t.y=ft(t.y,n)??0,t.z=ft(t.z,n)??0,t),hn=(t,n)=>(t||(t=new _t),t.x=ft(t.x,n)??0,t.y=ft(t.y,n)??0,t),li=(t,n)=>{let e=t.map(i=>ft(i,n)??0);return[e[0],e[1]]},pi=class{constructor(t,n,e,i,a){this.id=t,this.uuid=n,this.data=e,this.uniforms={};for(let r in i)this.uniforms[`f${this.id}_${r}`]=i[r];for(let r in e)mo(r,this,e,a)}get type(){return this.data.type}static create(t,n,e,i,a){if(e.type==="light")return Qe.createLightLayer(t,n,e,i);if(e.type==="color")return(function(l,u,c,s){let p=Le(c,s),S=new le(p.color??Ke),g=Pe(p),b=new Oi(S,g.alpha),f=new Gt(b.calpha,"f");return new Jt(l,u,c,{color:S,...g},b,g.mode,f,g.isMask,s)})(t,n,e,i);let r=(o=e.type,Is.get(o));var o;return r?r(t,n,e,i,a):((function(l){ho.has(l)||(ho.add(l),console.warn(`[spe] Material layer type "${l}" is not available in this runtime build (compiled out) — rendering flat red. Re-export the scene with its full layer set or load the full runtime build.`))})(e.type),(function(l,u,c,s){let p=c,S=Pe({alpha:typeof p.alpha=="string"?Number(s.getVariable(p.alpha)??100)/100:p.alpha,mode:p.mode,isMask:p.isMask}),g=new le(1,0,0,1),b=new Oi(g,S.alpha),f=new Gt(b.calpha,"f");return new Jt(l,u,c,{color:g,...S},b,S.mode,f,S.isMask,s)})(t,n,e,i))}updateByOp(t,n,e){let i=t,a=!1;if(i.path[0]===void 0){for(let r of Object.keys(i.props))try{let o=this.data[r],l=n[r];if(Array.isArray(o)&&Array.isArray(l)){for(let[u,c]of l.entries()){let s=o[u];if(typeof c=="string"||typeof c=="number"&&typeof s=="string"){a=!0;break}}if(a)break}else if(typeof l=="string"&&typeof o=="number"||typeof l=="number"&&typeof o=="string"||typeof l=="string"&&typeof o=="string"&&l!==o){a=!0;break}}catch(o){console.error(o)}if(i.type===0)return"type"in i.props||"category"in i.props||"visible"in i.props||"noiseType"in i.props?(e.scene.markNeedsUpdateRendererDirty(),!0):(function(r,o,l,u){let c=!1;for(let[s,p]of Object.entries(r)){if(s==="bumpMap"||s==="roughnessMap"){c=!0;continue}if(!s||p===void 0)continue;if(mo(s,l,u,o)){s==="visible"&&l.type==="light"&&(c=!0);continue}l.visible=u.visible;let S=l.uniforms[`f${l.id}_${s}`];if(S&&!(S instanceof Da))switch(c=c||Vd(l,s,p),S.constructor){case le:if(typeof p=="string"){let g=o.getColor(p);g&&(S.value=g);break}{let g=p;S.value instanceof Br?S.value=new jn(g.r,g.g,g.b,g.a):S.setRGBA(g);break}case pn:if(typeof p=="string"){let g=o.getColor(p);g&&(S.value=g);break}{let g=p;S.value instanceof Br?S.value=new jn(g.r,g.g,g.b,g.a):S.value.setRGBA(g.r,g.g,g.b,g.a);break}case Ce:{let g=p;S.value.setX(g[0]),S.value.setY(g[1]);break}case ke:{let g=p;S.value.setX(g[0]),S.value.setY(g[1]),S.value.setZ(g[2]);break}case en:wa(p,o,l);break;case An:S.value=p.map(g=>new ie(...g));break;default:S.value=p}}return c})(i.props,e.shared,this,n)||a}else if(i.path[0]==="texture")return!("texture"in n)&&!("video"in n)||wa(i.props,e.shared,this)||a;return a}dispose(){if(Tc(this)){let t=this.uniforms[`f${this.id}_texture`];if(!t)return!1;let n=t;n.image instanceof pa||n.image.deref()}}hasValueByKey(t){return this.uniforms[t]!==void 0}hasValue(t){return this.hasValueByKey(`f${this.id}_${t}`)}setValue(t,n){let e=`f${this.id}_${t}`;if(this.hasValueByKey(e)&&n!==void 0&&(this.uniforms[e].value=n,t==="noiseStrength"&&this.noiseCompiledIn===!1&&typeof n=="number"&&n!==0&&this.onNoiseMismatch!==void 0)){let i=this.onNoiseMismatch;this.onNoiseMismatch=void 0,i(n)&&(this.noiseCompiledIn=!0)}}getNode(t){let n=`f${this.id}_${t}`;if(this.hasValueByKey(n))return this.uniforms[n]}getValue(t){let n=`f${this.id}_${t}`;if(this.hasValueByKey(n))return this.uniforms[n].value}getName(t){let n=/f\d+_(.*)/.exec(t);if(n&&n.length>1)return n[1];console.log(`Layer.getName: error ${t}`)}getNames(){let t=[];for(let n in this.uniforms){let e=this.getName(n);e&&t.push(e)}return t}},Jt=class extends pi{constructor(t,n,e,i,a,r,o,l,u){super(t,n,e,i,u),this.params=i,this.color=a,this.mode=r,this.alpha=o,this.isMask=l}},Os=class extends pi{constructor(t,n,e,i,a,r){super(t,n,e,i,r),this.position=a}},Qe=class extends pi{constructor(t,n,e,i,a,r){super(t,n,e,a,r),this.node=i}static createLightLayer(t,n,e,i){let a,r,o=new K(Ln(e.alpha,i)),l=new kt(e.mode),u=new K(e.bumpMapIntensity),c=new K(Ln(e.alphaOverride,i));if(e.visible)if(e.category==="lambert"){a=new Od;let s=new le(i.color(e.emissive)??0),p=new De(e.occlusion??!0);r={emissive:s,occlusion:p},a.emissive=s,a.occlusion=p}else if(e.category==="toon"){a=new zd;let s=new K(e.shininess??30),p=new le(i.color(e.specular)??1118481);r={shininess:s,specular:p},a.shininess=s,a.specular=p}else if(e.category==="physical"){a=new Fd;let s=new K(e.roughness??.3),p=new K(e.metalness??0),S=new K(e.reflectivity??.5),g=new De(e.occlusion??!0);r={roughness:s,metalness:p,reflectivity:S,occlusion:g},a.roughness=s,a.metalness=p,a.reflectivity=S,a.occlusion=g}else{a=new Bd;let s=new K(e.shininess??30),p=new le(e.specular!==void 0?i.color(e.specular)??1118481:1118481),S=new De(e.occlusion??!0);r={shininess:s,specular:p,occlusion:S},a.shininess=s,a.specular=p,a.occlusion=S}else a=new La,r={};return a.alpha=new K(1),a.shadingAlpha=o,a.shadingBlend=l,a.bumpMapIntensity=u,a.alphaOverride=c,r.alpha=a.shadingAlpha,r.mode=a.shadingBlend,r.bumpMapIntensity=a.bumpMapIntensity,r.alphaOverride=a.alphaOverride,new Qe(t,n,e,a,r,i)}get category(){return this.node.category}};function Pe(t){return{alpha:new K(t.alpha??1),mode:new kt(t.mode??0),isMask:new De(t.isMask??!1)}}function mo(t,n,e,i){if(e.type==="displace"&&(t==="intensity"||t==="visible")){let a=n.uniforms[`f${n.id}_intensity`];return a?(a.value=(ft(e.intensity,i)??1)*(e.visible?1:0),a):void 0}if(e.type!=="displace"&&(t==="alpha"||t==="visible")){let a=n.uniforms[`f${n.id}_alpha`];if(!a)return;if(a.value=Ln(e.alpha,i)*(e.visible?1:0),e.type==="outline"&&t==="visible"){let r=n.uniforms[`f${n.id}_compensation`];r&&(r.value=e.compensation&&e.visible)}return a}}function Ae(t,n,e,i,a,r,o=[]){let l=e;for(let u of o)u in l&&(l=l[u]);for(let u of t)u in l&&a.getVariable(l[u],["material",r,"layer",i,...o,String(u)]);for(let u of n)u in l&&l[u].forEach((c,s)=>{a.getVariable(c,["material",r,"layer",i,...o,String(u),s===0?"x":s===1?"y":"z"])})}var Ua=class extends _e{constructor(){super(void 0),this.isClassicNodeMaterial=!0,this.flatShading=!1,this.needsJitter=!0,this.shadersPatchedForShapeBlend=!1,this.depthPrepass=!1,this.depthPrepassTwins=[],this.nodeExtensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.nodeContextUuid=0,this.fog=!0,this.dithering=!0,this.vertexColors=!0,this.transparent=!0}applyDepthPrepassPolicy(){let t=Ks({transparent:this.transparent,depthTest:this.depthTest,wireframe:this.wireframe,shapeBlend:this.defines?.SHAPEBLEND!==void 0,data:this.data});this.depthPrepass=t,this.depthWrite=!t}customProgramCacheKey(){return""}},vo=!1,Fs=class extends Ua{constructor(t,n,e,i){super(),this.flatShading=t,this.side=n,this.wireframe=e,this.root=i}updateAfterBuild(){let t=this.root;this.lights=t.lights,this.vertexShader=t.vertexShader,this.fragmentShader=t.fragmentShader,Object.assign(this.defines,t.defines),Object.assign(this.uniforms,t.uniforms),this.nodeExtensions=t.nodeExtensions,this.transparent=t.transparent,this.applyDepthPrepassPolicy(),this.cacheKey=t.customProgramCacheKey()+"flat"+this.flatShading+this.side}getDepthPrepassTwin(t){return zs(this,this.root,t)}onBeforeCompile(t,n){this.root.onBeforeCompile(t)}get data(){return this.root.data}get category(){return this.root.category}get hasAO(){return this.root.hasAO}getFlavor(t,n,e,i){return this.root.getFlavor(t,n,e,i)}get layers(){return this.root.layers}get fragment(){return this.root.fragment}getLayersOfType(t){return this.root.getLayersOfType(t)}getLayerByUuid(t){return this.root.getLayerByUuid(t)}setTransparent(t,n){this.root.setTransparent(t,n)}ensureRainbowNoiseCompiled(t,n){return this.root.ensureRainbowNoiseCompiled(t,n)}updateByOp(t,n,e){this.root.updateByOp(t,n,e)}nodeMaterialDispose(){this.root.nodeMaterialDispose()}},Hd=class extends Fs{constructor(t,n,e){super(t,n,!1,e),this.isDepthPrepassMaterial=!0,this.cutoffUniform={value:yc},this.colorWrite=!1,this.depthWrite=!0}updateAfterBuild(){super.updateAfterBuild(),this.uniforms.alphaDiscardCutoff=this.cutoffUniform,this.colorWrite=!1,this.depthWrite=!0}onBeforeCompile(t,n){super.onBeforeCompile(t,n),t.uniforms=this.uniforms}applyDepthPrepassPolicy(){this.depthPrepass=!1}getDepthPrepassTwin(){return this}};function zs(t,n,e){let i=t.depthPrepassTwins[e];return i===void 0&&(i=new Hd(t.flatShading,e,n),i.needsJitter=n.needsJitter,i.updateAfterBuild(),t.depthPrepassTwins[e]=i,n.depthTwins.push(i)),i}var Bs=class extends Ua{constructor(t,n,e=!0){super(),this.data=t,this.allowVariableSaves=e,this.layerIdGen=0,this.flavors=[],this.depthTwins=[],this.masks={},this.type="NodeMaterial",this.forceRainbowNoise=new Set,this.syntheticMapLayers=new Map,this.updaters=[],this.needsJitter=n.shared.needsJitter,he.startContext(this),this.reset0(t,n),he.endContext(this)}setTransparent(t,n){let e=this.transparent!==t;if(e){this.transparent=t,this.needsUpdate=!0;for(let i of this.flavors)i!==void 0&&(i.transparent=t,i.needsUpdate=!0);for(let i of this.depthTwins)i.transparent=t,i.needsUpdate=!0}this.applyDepthPrepassPolicy();for(let i of this.flavors)i?.applyDepthPrepassPolicy();!e||n?.markNeedsUpdateRendererDirty()}getDepthPrepassTwin(t){return zs(this,this,t)}get nodeMaterial(){return this}getFlavor(t,n,e,i){let a=e?6:(t?3:0)+n;if(a+=7*((i?.resolutionLevel??0)-(i?.useChildrenColors?4:0)),a===0)return this;this.flavors===void 0&&(this.flavors=[]),a-=1;let r=this.flavors[a];return r===void 0&&(r=new Fs(t,n,e,this),r.needsJitter=this.needsJitter,this.flavors[a]=r,r.flatShading=t,r.side=n,r.updateAfterBuild(),i&&(r.defines.SHAPEBLEND=i.resolutionLevel,r.defines.SHAPEBLEND_C=i.useChildrenColors?1:0,r.applyDepthPrepassPolicy())),r}get fragment(){return this.lightLayer.node}get category(){return this.lightLayer.category}get hasAO(){return this.lightLayer.getNode("occlusion")?.value??!1}ensureRainbowNoiseCompiled(t,n){let e=this.data.layers?.data(t);return e!==void 0&&e.type==="rainbow"&&(!this.forceRainbowNoise.has(t)&&!Pa(e.noiseStrength)||this.getLayerByUuid(t)?.noiseCompiledIn===!1)&&(this.forceRainbowNoise.add(t),he.startContext(this),this.reset0(this.data,this.lastContext),he.endContext(this),n!==void 0&&this.getLayerByUuid(t)?.setValue("noiseStrength",n),!0)}reset(t,n,e=!1){he.startContext(this),(this.data!==t||e)&&this.reset0(t,n),he.endContext(this)}reset0(t,n){this.lastContext=n,this.data=t;let e=t.layers??Mc.defaultTwoLayerData("phong").layers,i=[];for(let a of e)try{let r=pi.create(this.layerIdGen++,a.id,a.data,n.shared,this.forceRainbowNoise.has(a.id)?{forceRainbowNoise:!0}:void 0);if(r.type==="rainbow"&&r.noiseCompiledIn===!1){let o=a.id;r.onNoiseMismatch=l=>this.ensureRainbowNoiseCompiled(o,l)}i.push(r)}catch(r){console.warn(`[spe] material layer '${a.data.type}' (${a.id}) failed to build — skipping this layer`,r)}this.layers=i,this.layers.reverse(),this.name=t.name??"Untitled Material",this.onUpdate(n.shared),this.setTransparent(wi(t,n.shared),n.scene),this.saveVariableLocations(n)}onVariableUpdate(t,n,e){if(t[0]==="alphaOverride")this.setTransparent(wi(this.data,e.shared),e.scene),this.lightLayer.setValue("alphaOverride",Math.max(0,Math.min(Number(n)/100,1)));else if(t[0]==="layer"){let i=t[1],a=t[2];if(i&&a){let r=this.layers.find(o=>o.uuid===i);if(r?.hasValue(a))if(a==="alpha")this.setTransparent(wi(this.data,e.shared),e.scene),r.setValue(a,Math.max(0,Math.min(Number(n)/100,1)));else{let o=r.getValue(a),l=t[3],u=t[4];if(o instanceof zi){let c,s=o[l];return typeof s=="number"?c=Number(n):s.isVector2&&(c=s.toArray(),u==="x"?c[0]=Number(n):u==="y"&&(c[1]=Number(n))),void wa({[l]:c},e.shared,r)}(l==="x"||l==="y"||l==="z")&&o.isVector3||(l==="x"||l==="y")&&o.isVector2?o[l]=Number(n):r.setValue(a,n)}}}}saveVariableLocations(t){if(!this.allowVariableSaves)return;let n=this.data.layers?.find(e=>e.data.type==="light");n&&t.shared.getVariable(n.data.alphaOverride,["material",this.uuid,"alphaOverride"]),this.data.layers?.forEach(e=>{"alpha"in e.data&&typeof e.data.alpha=="string"&&t.shared.getVariable(e.data.alpha,["material",this.uuid,"layer",e.id,"alpha"]),e.data.type==="displace"?e.data.displacementType==="noise"?Ae(["intensity","scale","movement","smoothness","seed","highCut","lowCut"],["offset"],e.data,e.id,t.shared,this.uuid):Ae(["intensity"],[],e.data,e.id,t.shared,this.uuid):e.data.type==="depth"?Ae(["near","far"],["origin","direction"],e.data,e.id,t.shared,this.uuid):e.data.type==="cavity"?Ae(["ridge","valley"],[],e.data,e.id,t.shared,this.uuid):e.data.type==="fresnel"?Ae(["bias","scale","intensity","factor"],[],e.data,e.id,t.shared,this.uuid):e.data.type==="dust"?Ae(["coverage","softness","noiseStrength","noiseScale"],[],e.data,e.id,t.shared,this.uuid):e.data.type==="rainbow"?Ae(["filmThickness","movement","noiseStrength","noiseScale"],["offset","wavelengths"],e.data,e.id,t.shared,this.uuid):e.data.type==="noise"?Ae(["scale","move","seed","highCut","lowCut","smoothness"],["size","distortion","fA","fB"],e.data,e.id,t.shared,this.uuid):e.data.type==="pattern"?Ae(["blending","size","variation","smoothness","zigzag","rotation"],["offset","frequency","vertical","horizontal"],e.data,e.id,t.shared,this.uuid):e.data.type==="outline"?Ae(["outlineWidth","contourWidth","outlineThreshold","contourThreshold","outlineSmoothing","contourFrequency"],["contourDirection"],e.data,e.id,t.shared,this.uuid):e.data.type==="toon"?Ae(["noiseStrength","noiseScale"],["offset","source"],e.data,e.id,t.shared,this.uuid):e.data.type==="transmission"?Ae(["roughness","thickness","ior"],[],e.data,e.id,t.shared,this.uuid):e.data.type==="texture"||e.data.type==="video"?(Ae([],["size"],e.data,e.id,t.shared,this.uuid),Ae(["rotation"],["repeat","offset"],e.data,e.id,t.shared,this.uuid,["texture"])):e.data.type==="gradient"?Ae(["angle"],["offset","morph"],e.data,e.id,t.shared,this.uuid):e.data.type==="matcap"&&Ae(["rotation"],[],e.data,e.id,t.shared,this.uuid,["texture"])})}getLayersOfType(t){return this.layers.filter(n=>n.type===t)}getLayerByUuid(t){return this.layers.find(n=>n.uuid===t)}onUpdate(t){this.lightLayer=this.layers.find(n=>n instanceof Qe),this.lightLayer===void 0&&(this.lightLayer=new Qe(0,"",{...ha.defaultData("light","phong"),visible:!1},new La,{},t)),this.dispose();for(let n of this.flavors)n&&n.dispose();for(let n of this.depthTwins)n.dispose();this.applyTextureMaps(t),this.applyMasks(),this.blendColors(),this.blendAfterColors(),this.blendPositions(),this.build(),this.nodeContextUuid=0}syntheticMapNode(t,n){let e=this.syntheticMapLayers.get(t);if(e===void 0)try{let a=ha.defaultData("texture"),r={...a,visible:!1,texture:{...a.texture,image:t.image,wrapping:t.wrapping??1e3,offset:t.offset??[0,0],repeat:t.repeat??[1,1],rotation:t.rotation??0,minFilter:t.minFilter??1008,magFilter:t.magFilter??1006}};e=pi.create(this.layerIdGen++,`mapImage${this.layerIdGen}`,r,n),this.syntheticMapLayers.set(t,e)}catch(a){return void console.warn("[spe] light-layer map image failed to build — skipped",a)}let i=e.color;return i instanceof Fi?i:void 0}applyTextureMaps(t){let n=this.layers.find(o=>o instanceof Qe);if(!n)return;let e=n.data,i=e.bumpMap,a=e.roughnessMap;n.node.bumpMap=void 0,n.node.roughnessMap=void 0;for(let o of this.syntheticMapLayers.values())o.dispose();this.syntheticMapLayers.clear(),Vr.is(i)&&(n.node.bumpMap=this.syntheticMapNode(i,t)),Vr.is(a)&&(n.node.roughnessMap=this.syntheticMapNode(a,t));let r=e;!vo&&(r.metalnessMap!==void 0||r.normalMap!==void 0||r.aoMap!==void 0||r.emissiveMap!==void 0||r.roughnessMapChannel!==void 0&&r.roughnessMapChannel!=="luminance"||r.clearcoat!==void 0||r.sheen!==void 0||r.ior!==void 0||r.iridescence!==void 0||r.emissive!==void 0&&typeof r.emissive=="object"&&(r.emissive.r>0||r.emissive.g>0||r.emissive.b>0))&&(vo=!0,console.warn("[spline] this document uses PBR material maps (metalness/normal/AO/emissive), which the classic WebGL pipeline does not render — the WebGPU renderer shows them"));for(let o=0;o<this.layers.length;++o){let l=this.layers[o];l instanceof Jt&&l.color instanceof Fi&&(l.uuid===i&&(n.node.bumpMap=l.color),l.uuid===a&&(n.node.roughnessMap=l.color))}}updateByOp(t,n,e){if(he.startContext(this),n!==void 0?this.data=n:n=this.data,this.setTransparent(wi(n,e.shared),e.scene),t.path[0]==="layers"){let i=e.shared,a=t.path[1];if(a===void 0)e.scene.markNeedsUpdateRendererDirty(),this.reset0(n,e);else{t.type===0&&t.props.occlusion!==void 0&&e.scene.markNeedsUpdateRendererDirty();let r=this.layers.find(o=>o.uuid===a);if(r){let o,l=n.layers.data(a);t.type===0&&("alpha"in t.props||"alphaOverride"in t.props)&&(o="alpha"in t.props?{...t.props,alpha:Ln(t.props.alpha,i,["material",this.uuid,"layer",a,"alpha"])}:{...t.props,alphaOverride:Ln(t.props.alphaOverride,i,["material",this.uuid,"alphaOverride"])}),r.updateByOp({...t,...o?{props:o}:{},path:t.path.slice(2)},l,e)&&this.reset0(n,e)}}}else this.reset0(n,e);he.endContext(this)}applyMasks(){for(let t=0;t<this.layers.length;++t){let n=this.layers[t];n instanceof Jt?n.color.mask=void 0:n instanceof Qe&&(n.node.mask=void 0)}for(let t=0;t<this.layers.length;++t){let n=this.layers[t];if(n instanceof Jt&&n.isMask.value&&n.data.visible&&t>0){let e=t-1,i=this.layers[e];i instanceof Qe?i.node.mask=new Oe(n.color,n.alpha,Oe.MUL):i instanceof Jt&&(i.isMask.value||(i.color.mask=new Oe(n.color,n.alpha,Oe.MUL)))}}}blendColors(){let t=this.layers.findIndex(e=>e instanceof Jt),n=this.layers.findIndex(e=>e instanceof Qe);if(t!==-1&&t<n){let e=this.layers[t].color;for(let i=t+1;i<n;++i){let a=this.layers[i];if(a instanceof Jt){if(a.isMask.value)continue;e=new fo(e,a.color,a.alpha,a.mode)}}this.fragment.color=e}else this.fragment.color=void 0}blendAfterColors(){let t=new Gt("outgoingLight","f"),n=this.layers.findIndex(e=>e instanceof Qe);if(this.layers.length>n+1){for(let e=n+1;e<this.layers.length;++e){let i=this.layers[e];if(i instanceof Jt){if(i.isMask.value)continue;t=new fo(t,i.color,i.alpha,i.mode)}}this.fragment.afterColor=t}else this.fragment.afterColor=void 0}blendPositions(){let t=this.layers.filter(n=>n instanceof Os);if(t.length>0){let n=t[0].position;for(let e=1;e<t.length;++e)t[e]&&(n=new Oe(n,t[e].position,Oe.ADD),n=new Oe(n,new K(.5).setReadonly(!0),Oe.MUL));this.fragment.position=n}else this.fragment.position=void 0}getDefines(){return this.defines}getUniforms(){return this.uniforms}getVertexShader(){return this.vertexShader}getFragmentShader(){return this.fragmentShader}onBeforeCompile(t){this.shapeBlendhack&&this.shapeBlendhack(this),t.uniforms=this.uniforms,t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.extensionDerivatives=this.nodeExtensions.derivatives===!0,t.extensionFragDepth=this.nodeExtensions.fragDepth===!0,t.extensionDrawBuffers=this.nodeExtensions.drawBuffers===!0,t.extensionShaderTextureLOD=this.nodeExtensions.shaderTextureLOD===!0}clampUniformsForPreview(t,n){let e=(i,a,r)=>Math.min(Math.max(i,a),r);for(let i of this.layers)if(i.type==="displace"){let a=e(i.uniforms[`f${i.id}_intensity`].value,t,n);i.uniforms[`f${i.id}_intensity`].value=a}}updateFrame(t){for(let n=0;n<this.updaters.length;++n)t.updateNode(this.updaters[n])}build(){let t=new es;t.needsJitter=this.needsJitter,this.lights=this.lightLayer.data.visible,t.build(this.fragment,this.fragment),this.vertexShader=t.getCode("vertex"),this.fragmentShader=t.getCode("fragment"),this.defines=t.defines,this.uniforms=t.uniforms,this.nodeExtensions=t.extensions,this.updaters=t.updaters;for(let n of this.flavors)n&&n.updateAfterBuild();for(let n of this.depthTwins)n.updateAfterBuild();return this.shadersPatchedForShapeBlend=!1,this}nodeMaterialDispose(){this.layers.forEach(t=>t.dispose());for(let t of this.syntheticMapLayers.values())t.dispose();this.syntheticMapLayers.clear(),super.dispose();for(let t of this.depthTwins)t.dispose();for(let t of this.flavors)t&&t.dispose()}assetsLoaded(){for(let t of this.layers)if(t instanceof Jt){let n=t.params.texture;if(n instanceof Ii&&!n.image.loaded)return!1}for(let t of this.syntheticMapLayers.values()){let n=t.params?.texture;if(n instanceof Ii&&!n.image.loaded)return!1}return!0}};Object.defineProperties(Ua.prototype,{properties:{get:function(){return this.fragment.properties}}});var Gd=class extends Bs{constructor(t,n,e){super(t,n,!1),this.isClassicSharedMaterial=!0,this.uuid=e,this.allowVariableSaves=!0,this.saveVariableLocations(n)}},Vs=`
vec2 receiverPlaneDepthBias(vec3 dcdx, vec3 dcdy)
{
    float det = dcdx.x * dcdy.y - dcdx.y * dcdy.x;
    
    
    float invDet = 1.0 / (abs(det) < 1e-10 ? (det < 0.0 ? -1e-10 : 1e-10) : det);
    return vec2(
        (dcdy.y * dcdx.z - dcdx.y * dcdy.z) * invDet,
        (dcdx.x * dcdy.z - dcdy.x * dcdx.z) * invDet
    );
}




float receiverPlaneAdjust(vec2 dzduv, vec2 offset)
{
    return clamp(dot(dzduv, offset), -0.05, 0.05);
}
`,Yn=globalThis,go=Yn.__SPE_ORIGINAL_LIGHTS_FRAGMENT_BEGIN__??(Yn.__SPE_ORIGINAL_LIGHTS_FRAGMENT_BEGIN__=pt.lights_fragment_begin),_o=Yn.__SPE_ORIGINAL_SHADOWMASK_PARS__??(Yn.__SPE_ORIGINAL_SHADOWMASK_PARS__=pt.shadowmask_pars_fragment),kd=Yn.__SPE_ORIGINAL_SHADOWMAP_PARS__??(Yn.__SPE_ORIGINAL_SHADOWMAP_PARS__=pt.shadowmap_pars_fragment),Cn=null,xo=()=>{let t=kd.replaceAll("vogelDiskSample","spStockVogelDiskSample").replaceAll("interleavedGradientNoise","spStockInterleavedGradientNoise"),n=t.indexOf("#if defined( SHADOWMAP_TYPE_PCF )"),e=t.indexOf("#elif defined( SHADOWMAP_TYPE_VSM )");if(n<0||e<=n)return t;let i=t.slice(n,e),a=i.replace(/texture\( shadowMap, vec3\( shadowCoord\.xy \+ spStockVogelDiskSample\( ([0-4]), 5, phi \) \* radius, shadowCoord\.z \) \)/g,"texture( shadowMap, vec3( shadowCoord.xy + spStockOffset$1, shadowCoord.z + receiverPlaneAdjust( spStockDzduv, spStockOffset$1 ) ) )"),r="float phi = spStockInterleavedGradientNoise( gl_FragCoord.xy ) * PI2;";return a!==i&&a.includes(r)?(i=a.replace(r,r+`
				vec2 spStockDzduv = receiverPlaneDepthBias( dFdx( shadowCoord.xyz ), dFdy( shadowCoord.xyz ) );
				vec2 spStockOffset0 = spStockVogelDiskSample( 0, 5, phi ) * radius;
				vec2 spStockOffset1 = spStockVogelDiskSample( 1, 5, phi ) * radius;
				vec2 spStockOffset2 = spStockVogelDiskSample( 2, 5, phi ) * radius;
				vec2 spStockOffset3 = spStockVogelDiskSample( 3, 5, phi ) * radius;
				vec2 spStockOffset4 = spStockVogelDiskSample( 4, 5, phi ) * radius;`),i=i.replace("#if defined( SHADOWMAP_TYPE_PCF )",Vs+`
#if defined( SHADOWMAP_TYPE_PCF )`),t.slice(0,n)+i+t.slice(e)):t},Hs=`

  // Linear Fade In
  float linearFadeIn(float t) {
    return t;
  }


  // linear fade out
  float linearFadeOut(float t) {
    return 1.0 - t;
  }
  
  float linearInOut(float t) {
    return t < 0.5 ? t :  (1.0 - t);  
  }

    // lerp
    float lerp(float a, float b, float t) {
      return a + (b - a) * t;
    }

  // Ease In Out Quart
  float exponentialInOut(float t) {
    return t < 0.4 ? lerp(0.0, 1.0, t / 0.4) :
    t > 0.6 ? lerp(1.0, 0.0, (t - 0.6) / 0.4) :
    1.0;
   }

  // constant
  float constant(float t) {
    return 1.0;
  } 
`,Wd=`
  uniform sampler2D uPosition;
  uniform float uSize;
  uniform float uSizeEnd;
  uniform vec3 uWorldOffset;
  uniform vec4 uWorldQuaternion;
  
  uniform float uRotation;
  uniform float uRotationEnd;
  uniform vec2 center;

  
  uniform float uRandScaleFactor;
  uniform float uRandRotationFactor;

  attribute vec2 ref;

  varying float v_LifeLeft;    
  varying vec2 vUv;
  varying vec2 vRef;

  

float rand(vec3 co){
  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

vec3 applyQuaternionToVector( vec4 q, vec3 v ){
  return v + 2.0 * cross( q.xyz, cross( q.xyz, v ) + q.w * v );
}

vec3 applyForce(vec3 force, float mass) {
  vec3 acceleration = force / mass;
    
  return acceleration;
}

  ${Hs}
`,$d=`
  uniform vec4 uColor;                
  uniform vec4 uColor2;               
  uniform sampler2D uTexture;         
  varying float v_LifeLeft;   
  varying vec2 vUv;
  varying vec2 vRef;

  float random(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
  }
  `+Hs+`  
  
vec3 rgb2xyz (in vec3 rgb) {
    float r = rgb.r;
	float g = rgb.g;
	float b = rgb.b;

	r = r > 0.04045 ? pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	float x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	float y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	float z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);
    
    vec3 xyz = vec3(
        (r * 0.4124) + (g * 0.3576) + (b * 0.1805) * 100.0,
        (r * 0.2126) + (g * 0.7152) + (b * 0.0722) * 100.0,
        (r * 0.0193) + (g * 0.1192) + (b * 0.9505) * 100.0
    );
    return(xyz);
}

vec3 xyz2lab (in vec3 xyz) {
	float x = xyz.x / 95.047;
	float y = xyz.y / 100.0;
	float z = xyz.z / 108.883;

	x = x > 0.008856 ? pow(x, 1.0 / 3.0) : (7.787 * x) + (16.0 / 116.0);
	y = y > 0.008856 ? pow(y, 1.0 / 3.0) : (7.787 * y) + (16.0 / 116.0);
	z = z > 0.008856 ? pow(z, 1.0 / 3.0) : (7.787 * z) + (16.0 / 116.0);

    vec3 lab = vec3((116.0 * y) - 16.0, 500.0 * (x - y), 200.0 * (y - z));
    return(lab);
}

vec3 rgb2lab(in vec3 rgb) {
    vec3 xyz = rgb2xyz(rgb);
    vec3 lab = xyz2lab(xyz);
    return(lab);
}

vec3 xyz2rgb (in vec3 xyz) {
	float x = xyz.x / 100.0;
	float y = xyz.y / 100.0;
	float z = xyz.z / 100.0;
	
    
	float r = (x *  3.2406) + (y * -1.5372) + (z * -0.4986);
	float g = (x * -0.9689) + (y *  1.8758) + (z *  0.0415);
	float b = (x *  0.0557) + (y * -0.2040) + (z *  1.0570);

	r = r > 0.0031308 ? ((1.055 * pow(r, 1.0 / 2.4)) - 0.055) : r * 12.92;
	g = g > 0.0031308 ? ((1.055 * pow(g, 1.0 / 2.4)) - 0.055) : g * 12.92;
	b = b > 0.0031308 ? ((1.055 * pow(b, 1.0 / 2.4)) - 0.055) : b * 12.92;

	r = min(max(0.0, r), 1.0);
	g = min(max(0.0, g), 1.0);
	b = min(max(0.0, b), 1.0);

	return(vec3(r, g, b));
}

vec3 lab2xyz (in vec3 lab) {
    float l = lab.x;
	float a = lab.y;
	float b = lab.z;

  	float y = (l + 16.0) / 116.0;
	float x = a / 500.0 + y;
	float z = y - b / 200.0;

	float y2 = pow(y, 3.0);
	float x2 = pow(x, 3.0);
	float z2 = pow(z, 3.0);

  	y = y2 > 0.008856 ? y2 : (y - 16.0 / 116.0) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16.0 / 116.0) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16.0 / 116.0) / 7.787;

	x *= 95.047;
	y *= 100.0;
	z *= 108.883;

	return(vec3(x, y, z));
}
vec3 lab2rgb (in vec3 lab) {
    vec3 xyz = lab2xyz(lab);
    vec3 rgb = xyz2rgb(xyz);
    return(rgb);
}



`,Xd=class extends _e{constructor(t,n){super(),this.needsJitter=!0,this.type="ParticleMaterial",this.nodeExtensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.easeOpacity="linearFadeIn",this.easeSize="linearFadeIn",this.useSizeEnd=!1,this.isColoringRandom=!1,this.init(t,n),this.context=n}reset(){}init(t,n){this.transparent=!0,this.depthTest=!0,this.depthWrite=!1,this.easeOpacity=t.ease,this.easeSize=t.easeSize,this.layers=[],he.startContext(he.globalContext),this.lightLayer=new Qe(0,"",{...ha.defaultData("light","phong"),visible:!1},new La,{},n.shared),he.endContext(he.globalContext),this.build()}updateState(t){t.coloring!==void 0&&(this.isColoringRandom=t.coloring==="random"),t.color!==void 0&&(t.color instanceof Array?this.uniforms.uColor.value=t.color:this.uniforms.uColor.value=this.context.shared.color(t.color)),t.color2!==void 0&&(t.color2 instanceof Array?this.uniforms.uColor2.value=t.color2:this.uniforms.uColor2.value=this.context.shared.color(t.color2)),t.size!==void 0&&(this.uniforms.uSize.value=t.size[0],this.uniforms.uSizeEnd.value=t.size[1],t.size[0]!==t.size[1]?this.useSizeEnd=!0:this.useSizeEnd=!1),t.ease!==void 0&&(this.easeOpacity=t.ease,this.build()),t.easeSize!==void 0&&(this.easeSize=t.easeSize,this.build()),this.needsUpdate=!0}onBeforeCompile(t){this.build(),t.defines=this.defines,t.uniforms=this.uniforms,t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader}build(){let t=new es;return t.needsJitter=this.needsJitter,t.addFragmentParsCode(`
layout(location = 1) out vec4 gVelocity;
`),t.buildShader("vertex",this.fragment),t.buildShader("fragment",this.fragment),t.addFragmentFinalCode(`
    
    if (gl_FragColor.a <= 0.0) discard;

    gVelocity = vec4(0.0, 0.0, 0.0, 1.0);
`),this.isColoringRandom&&t.define("USE_RANDOM_COLORING"),this.useSizeEnd&&t.define("USE_SIZE_END"),t.addVertexParsCode(Wd),t.addFragmentParsCode($d),t.addVertexFinalCode((({easeSize:n="linearFadeOut"})=>`
  vUv = uv;  
  vRef = ref;
  
  float lifeLeft = texture2D(uPosition, ref).w;
  v_LifeLeft = lifeLeft;
  
  vec3 pos = texture2D(uPosition, ref).rgb - uWorldOffset;
  
  pos = applyQuaternionToVector(uWorldQuaternion, pos);  
            
  #ifdef  USE_SIZE_END
    
    float t = 1. - lifeLeft;
    float currentSize = mix(uSize, uSizeEnd, t); 
    vec3 scaledPosition = position * vec3(currentSize);
  #else
    
    float easeSize = ${n}(1. - lifeLeft);
    
    vec3 scaledPosition = position * vec3(uSize * easeSize);
  #endif

  
  vec2 scale;
  scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
  scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );    
  
  float randRef = rand(ref);
  scale *= (1.0 - (uRandScaleFactor * randRef));
  
  float randRotation =  2.0 * PI * ( uRandRotationFactor * randRef);
  float originalRotation = (1.0 - uRotation) * 2.0 * PI;
  float originalRotationEnd = (1.0 - uRotationEnd) * 2.0 * PI;
  
  float finalRotation = mix(originalRotation + randRotation, originalRotationEnd + randRotation, lifeLeft);

  vec2 alignedPosition = ( scaledPosition.xy - ( center - vec2( 0.5 ) ) ) * scale;
  vec2 rotatedPosition;
  rotatedPosition.x = cos( finalRotation ) * alignedPosition.x - sin( finalRotation ) * alignedPosition.y;
  rotatedPosition.y = sin( finalRotation ) * alignedPosition.x + cos( finalRotation ) * alignedPosition.y;
  
  mat4 instanceMatrix = mat4(
    vec4(1.0, 0.0, 0.0, 0.0),
    vec4(0.0, 1.0, 0.0, 0.0),
    vec4(0.0, 0.0, 1.0, 0.0),
    vec4(pos.x, pos.y, pos.z, 1.0)
  );  

  mvPosition = modelViewMatrix * instanceMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
  mvPosition.xy += rotatedPosition;
  gl_Position = projectionMatrix  * mvPosition;   
`)({easeSize:this.easeSize})),t.addFragmentFinalCode((({easeOpacity:n="linearFadeOut"})=>`  
  
  if (v_LifeLeft <= 0.005 ) {
    discard;
  }

  #ifdef USE_RANDOM_COLORING
    float randVal = random(vRef); 
    vec4 color = mix(uColor, uColor2, randVal); 
  #else
    vec4 color = mix(uColor, uColor2, 1. - v_LifeLeft);
  #endif

  
  float finalAlpha = ${n}(1. - v_LifeLeft);  
  vec4 textureColor = texture2D(uTexture, vUv).rgba; 
  finalColor = textureColor.rgb * color.rgb;
  finalAlpha = color.a * textureColor.a * finalAlpha;
  
  gl_FragColor = vec4(finalColor, finalAlpha);     

`)({easeOpacity:this.easeOpacity})),this.vertexShader=t.getCode("vertex"),this.fragmentShader=t.getCode("fragment"),this.defines=t.defines,this.uniforms={...t.uniforms,...this.uniforms},this.nodeExtensions=t.extensions,this}get nodeMaterial(){return this}get fragment(){return this.lightLayer.node}getDefines(){return this.defines}nodeMaterialDispose(){this.layers.forEach(t=>t.dispose()),super.dispose()}},jd=new Do(-1,1,1,-1,0,1),qd=new class extends ya{constructor(){super(),this.setAttribute("position",new Di([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Di([0,2,0,0,2,0],2))}},Yd=class{constructor(t){this._mesh=new Xn(qd,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,jd)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}},Kd=class{constructor(t,n,e){this.variables=[],this.currentTextureIndex=0;let i=ze,a={passThruTexture:{value:null}},r=u(`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`,a),o=new Yd(r);function l(c){c.defines.resolution="vec2( "+t.toFixed(1)+", "+n.toFixed(1)+" )"}function u(c,s){let p=new _e({name:"GPUComputationShader",uniforms:s=s||{},vertexShader:`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`,fragmentShader:c});return l(p),p}this.setDataType=function(c){return i=c,this},this.addVariable=function(c,s,p){let S={name:c,initialValueTexture:p,material:this.createShaderMaterial(s),dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:Se,magFilter:Se};return this.variables.push(S),S},this.setVariableDependencies=function(c,s){c.dependencies=s},this.init=function(){if(e.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(let c=0;c<this.variables.length;c++){let s=this.variables[c];s.renderTargets[0]=this.createRenderTarget(t,n,s.wrapS,s.wrapT,s.minFilter,s.magFilter),s.renderTargets[1]=this.createRenderTarget(t,n,s.wrapS,s.wrapT,s.minFilter,s.magFilter),this.renderTexture(s.initialValueTexture,s.renderTargets[0]),this.renderTexture(s.initialValueTexture,s.renderTargets[1]);let p=s.material,S=p.uniforms;if(s.dependencies!==null)for(let g=0;g<s.dependencies.length;g++){let b=s.dependencies[g];if(b.name!==s.name){let f=!1;for(let w=0;w<this.variables.length;w++)if(b.name===this.variables[w].name){f=!0;break}if(!f)return"Variable dependency not found. Variable="+s.name+", dependency="+b.name}S[b.name]={value:null},p.fragmentShader=`
uniform sampler2D `+b.name+`;
`+p.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){let c=this.currentTextureIndex,s=this.currentTextureIndex===0?1:0;for(let p=0,S=this.variables.length;p<S;p++){let g=this.variables[p];if(g.dependencies!==null){let b=g.material.uniforms;for(let f=0,w=g.dependencies.length;f<w;f++){let v=g.dependencies[f];b[v.name].value=v.renderTargets[c].texture}}this.doRenderTarget(g.material,g.renderTargets[s])}this.currentTextureIndex=s},this.getCurrentRenderTarget=function(c){return c.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(c){return c.renderTargets[this.currentTextureIndex===0?1:0]},this.dispose=function(){o.dispose();let c=this.variables;for(let s=0;s<c.length;s++){let p=c[s];p.initialValueTexture&&p.initialValueTexture.dispose();let S=p.renderTargets;for(let g=0;g<S.length;g++)S[g].dispose();p.material.dispose()}},this.addResolutionDefine=l,this.createShaderMaterial=u,this.createRenderTarget=function(c,s,p,S,g,b){return new se(c=c||t,s=s||n,{wrapS:p=p||Re,wrapT:S=S||Re,minFilter:g=g||Se,magFilter:b=b||Se,format:bn,type:i,depthBuffer:!1})},this.createTexture=function(){let c=new Float32Array(t*n*4),s=new Pi(c,t,n,bn,ze);return s.needsUpdate=!0,s},this.renderTexture=function(c,s){a.passThruTexture.value=c,this.doRenderTarget(r,s),a.passThruTexture.value=null},this.doRenderTarget=function(c,s){let p=e.getRenderTarget(),S=e.xr.enabled,g=e.shadowMap.autoUpdate;e.xr.enabled=!1,e.shadowMap.autoUpdate=!1,o.material=c,e.setRenderTarget(s),o.render(e),o.material=r,e.xr.enabled=S,e.shadowMap.autoUpdate=g,e.setRenderTarget(p)}}};function So(t,n,e,i){let a=e,r=a.type==="texture"?a.texture.image!=null?i.uiBuffer(a.texture.image)??i.image(a.texture.image):i.getImage(""):i.video(a.texture.video),o=new Ii(r,a.texture.wrapping??(a.type==="texture"?1e3:1001),a.texture.minFilter??1008,a.texture.magFilter??1006),l=new Ld(r),u=new Ud(li(a.texture.repeat??[1,1],i),li(a.texture.offset??[0,0],i),ft(a.texture.rotation??0,i)),c=new K(a.crop?1:0),s=new kt(a.projection??0),p=new kt(["x","y","z"].indexOf(a.axis)??0),S=a.projectionAxis?["x","y","z"].indexOf(a.projectionAxis):-1,g=new kt(a.side??0),b=new Ce(a.size?new _t(...li(a.size,i)):new _t(100,100)),f=new K(a.blending??0),w=new K(Ln(a.alpha,i)),v=new kt(a.mode??0),x=new De(a.isMask??!1),N=new Fi(o,l,c,s,p,g,b,f,u,w,v,x,S),F=new Gt(N.calpha,"f");return new Jt(t,n,a,{texture:o,textureSize:l,crop:c,projection:s,axis:p,side:g,size:b,blending:f,mat:u,alpha:w,mode:v,isMask:x},N,v,F,x,i)}Js({createMaterial:(t,n)=>new Xd(t,n),createComputation:(t,n,e)=>new Kd(t,n,e)}),Me("texture",So),Me("video",So),Me("matcap",(t,n,e,i)=>{let a=e,r=a.texture.image!=null?i.image(a.texture.image):i.getImage(""),o=new Ii(r,a.texture.wrapping??1001,a.texture.minFilter??1008,a.texture.magFilter??1006),l=new K(Ln(a.alpha,i)),u=new kt(a.mode??0),c=new De(a.isMask??!1),s=new K((ft(a.texture.rotation??0,i)??0)*Bi.DEG2RAD),p=new Ts(o,l,u,c,s),S=new Gt(p.calpha,"f");return new Jt(t,n,a,{texture:o,alpha:l,mode:u,isMask:c,rotation:s},p,u,S,c,i)}),Me("displace",(t,n,e,i)=>{let a=e;if(a.displacementType==="noise"){let r=new ke(new Mt(...a.offset.map(v=>ft(v,i)??0))),o=new K(ft(a.scale,i)??10),l=new K(ft(a.intensity,i)??8),u=new K(ft(a.movement,i)??1),c=new kt(a.noiseType??0),s=new kt(a.voronoiStyle??0),p=new K(ft(a.smoothness,i)??.5),S=new K(ft(a.seed,i)??0),g=new K(ft(a.highCut,i)??1),b=new K(ft(a.lowCut,i)??0),f=new kt(ft(a.quality,i)??1),w=new Ns(l,u,r,s,p,S,g,b,f,o,c);return new Os(t,n,a,{offset:r,scale:o,intensity:l,movement:u,noiseType:c,voronoiStyle:s,smoothness:p,seed:S,highCut:g,lowCut:b,quality:f},w,i)}throw new Error}),Me("cavity",(t,n,e,i)=>{let a=Le(e,i),r=new K(ft(a.ridge,i)??1),o=new K(ft(a.valley,i)??1),l=Pe(a),u=new ms(r,o,lt.normalViewRenderTarget,lt.resolution,l.alpha,l.mode,l.isMask),c=new Gt(u.calpha,"f");return new Jt(t,n,e,{ridge:r,valley:o,...l},u,l.mode,c,l.isMask,i)}),Me("dust",(t,n,e,i)=>{let a=Le(e,i),r=new le(a.color??10323813),o=new K(a.coverage??.2),l=new K(a.softness??.2),u=new K(a.noiseStrength??.2),c=new K(a.noiseScale??1),s=Pe(a),p=new gs(r,o,l,u,c,s.alpha,s.isMask),S=new Gt(p.calpha,"f");return new Jt(t,n,e,{color:r,coverage:o,softness:l,noiseStrength:u,noiseScale:c,...s},p,s.mode,S,s.isMask,i)}),Me("fresnel",(t,n,e,i)=>{let a=Le(e,i),r=new le(a.color??16777215),o=new K(ft(a.bias,i)??.1),l=new K(ft(a.scale,i)??1),u=new K(ft(a.intensity,i)??2),c=new K(ft(a.factor,i)??1),s=Pe(a),p=new Nd(r,o,l,u,c,s.alpha,s.mode,s.isMask),S=new Gt(p.calpha,"f");return new Jt(t,n,e,{color:r,bias:o,scale:l,intensity:u,factor:c,...s},p,s.mode,S,s.isMask,i)}),Me("gradient",(t,n,e,i)=>{let a,r,o=Le(e,i),l=new kt(o.gradientType??0),u=new De(o.smooth??!1);o.colors?a=new An(o.colors.length,o.colors):(a=new An(10,new ie(0,0,0,1)),a.value[1]=new ie(1,1,1,1)),o.steps?r=new Rn(o.steps.length,o.steps):(r=new Rn(10,1),r.value[0]=0);let c=new Ce(hn(o.offset??new _t(0,0),i)),s=new Ce(hn(o.morph??new _t(0,0),i)),p=new K(ft(o.angle??0,i)),S=Pe(o),g=new xs(l,u,a,r,c,s,p,S.alpha,S.isMask),b=new Gt(g.calpha,"f");return new Jt(t,n,e,{gradientType:l,smooth:u,colors:a,steps:r,offset:c,morph:s,angle:p,...S},g,S.mode,b,S.isMask,i)}),Me("depth",(t,n,e,i)=>{let a,r,o=Le(e,i),l=new kt(o.gradientType??0),u=new De(o.smooth??!1),c=new K(ft(o.near,i)??50),s=new K(ft(o.far,i)??200),p=new K(o.isVector??1),S=new K(o.isWorldSpace??0),g=new ke(xn(o.origin,i)),b=new ke(xn(o.direction,i));o.colors?a=new An(o.colors.length,o.colors):(a=new An(2,new ie(0,0,0,1)),a.value[1]=new ie(1,1,1,1)),o.steps?r=new Rn(o.steps.length,o.steps):(r=new Rn(2,1),r.value[0]=0);let f=Pe(o),w=new ps(l,u,c,s,p,S,g,b,a,r,f.alpha,f.isMask),v=new Gt(w.calpha,"f");return new Jt(t,n,e,{gradientType:l,smooth:u,near:c,far:s,isVector:p,isWorldSpace:S,origin:g,direction:b,colors:a,steps:r,...f},w,f.mode,v,f.isMask,i)}),Me("normal",(t,n,e,i)=>{let a=Le(e,i),r=new ke(a.cnormal??new Mt(1,1,1)),o=Pe(a),l=new fs(r,o.alpha),u=new Gt(l.calpha,"f");return new Jt(t,n,e,{cnormal:r,...o},l,o.mode,u,o.isMask,i)}),Me("noise",(t,n,e,i)=>{let a=Le(e,i),r=new K(ft(a.scale,i)??1),o=new ke(xn(a.size??new Mt(100,100,100),i)),l=new K(ft(a.move,i)??1),u=new Ce(hn(a.fA??new _t(1.7,9.2),i)),c=new Ce(hn(a.fB??new _t(8.3,2.8),i)),s=new Ce(hn(a.distortion??new _t(1,1),i)),p=new pn(a.colorA),S=new pn(a.colorB),g=new pn(a.colorC),b=new pn(a.colorD),f=new kt(a.noiseType??0),w=new kt(a.voronoiStyle??0),v=new K(ft(a.highCut,i)??1),x=new K(ft(a.lowCut,i)??0),N=new K(ft(a.smoothness,i)??.5),F=new K(ft(a.seed,i)??.5),U=new kt(a.quality??1),M=Pe(a),I=new bs(r,o,l,u,c,s,p,S,g,b,M.alpha,f,M.isMask,w,v,x,N,F,U),Z=new Gt(I.calpha,"f");return new Jt(t,n,e,{scale:r,size:o,move:l,fA:u,fB:c,distortion:s,colorA:p,colorB:S,colorC:g,colorD:b,noiseType:f,...M,voronoiStyle:w,highCut:v,lowCut:x,smoothness:N,seed:F,quality:U},I,M.mode,Z,M.isMask,i)}),Me("rainbow",(t,n,e,i,a)=>{let r=Le(e,i),o=new K(ft(r.filmThickness,i)??30),l=new K(ft(r.movement,i)??0),u=new ke(xn(r.wavelengths,i)),c=new K(ft(r.noiseStrength,i)??0),s=new K(ft(r.noiseScale,i)??1),p=new ke(xn(r.offset,i)),S=Pe(r),g=a?.forceRainbowNoise===!0,b=g||Pa(r.noiseStrength),f=new ys(o,l,u,c,s,p,S.alpha,S.isMask,b),w=new Gt(f.calpha,"f"),v=new Jt(t,n,e,{filmThickness:o,movement:l,wavelengths:u,noiseStrength:c,noiseScale:s,offset:p,...S},f,S.mode,w,S.isMask,i);return v.noiseCompiledIn=b,v.noiseForced=g,v}),Me("toon",(t,n,e,i)=>{let a,r,o=Le(e,i),l=new kt(o.positioning??0);o.colors?a=new An(o.colors.length,o.colors):(a=new An(10,new ie(0,0,0,1)),a.value[1]=new ie(1,1,1,1)),o.steps?r=new Rn(o.steps.length,o.steps):(r=new Rn(10,1),r.value[0]=0);let u=new ke(xn(o.source??new Mt(0,0,0),i)),c=new De(o.isWorldSpace??!0),s=new K(ft(o.noiseStrength??0,i)),p=new K(ft(o.noiseScale??1,i)),S=new pn(o.shadowColor),g=new ke(xn(o.offset??new Mt(0,0,0),i)),b=Pe(o),f=new Rs(l,a,r,u,c,s,p,S,g,b.alpha),w=new Gt(f.calpha,"f");return new Jt(t,n,e,{positioning:l,colors:a,steps:r,source:u,isWorldSpace:c,noiseStrength:s,noiseScale:p,shadowColor:S,offset:g,...b},f,b.mode,w,b.isMask,i)}),Me("outline",(t,n,e,i)=>{let a=Le(e,i),r=new le(a.outlineColor??16777215),o=new le(a.contourColor??16777215),l=new K(ft(a.outlineWidth??.1,i)),u=new K(ft(a.contourWidth??.1,i)),c=new K(ft(a.outlineThreshold??.1,i)),s=new K(ft(a.contourThreshold??.1,i)),p=new K(ft(a.outlineSmoothing??.1,i)),S=new K(ft(a.contourFrequency??.1,i)),g=new ke(xn(a.contourDirection??new Mt(0,1,0),i)),b=new De(a.positionalLines??!1),f=new De(a.compensation??!0),w=lt.normalRenderTarget,v=lt.normalRenderTargetDepth,x=lt.pixelRatioNode,N=lt.resolution,F=Pe(a),U=new Es(r,o,l,u,c,s,p,S,g,b,f,N,w,v,x,F.alpha),M=new Gt(U.calpha,"f");return new Jt(t,n,e,{outlineColor:r,contourColor:o,outlineWidth:l,contourWidth:u,outlineThreshold:c,contourThreshold:s,outlineSmoothing:p,contourFrequency:S,contourDirection:g,positionalLines:b,compensation:f,...F},U,F.mode,M,F.isMask,i)}),Me("transmission",(t,n,e,i)=>{let a=Le(e,i),r=new K(ft(a.thickness??10,i)),o=new K(ft(a.ior??1.5,i)),l=new K(ft(a.roughness??.5,i)),u=lt.transmissionSize,c=lt.transmissionRenderTarget,s=lt.transmissionRenderTargetDepth,p=window.innerWidth,S=window.innerHeight,g=p>=S?new Ce(S/p,1):new Ce(1,p/S),b=Pe(a),f=new Ps(r,o,l,u,c,s,g,b.alpha),w=new Gt(f.calpha,"f");return new Jt(t,n,e,{thickness:r,ior:o,roughness:l,aspectRatio:g,...b},f,b.mode,w,b.isMask,i)});var To=!1;Me("reflection",(t,n,e,i)=>{To||(To=!0,console.warn("[spline] The reflection material layer requires the WebGPU renderer — it renders as invisible on the classic WebGL pipeline."));let a=Le(e,i),r=new K(a.blur??0),o=new K(a.thickness??.001),l=new kt(a.steps??60),u=new K(a.stepSize??.005),c=new kt(a.tracingMode??1),s=Pe(a),p=new le(0,0,0,1),S=new K(0),g=new Oi(p,S),b=new Gt(g.calpha,"f");return new Jt(t,n,e,{blur:r,thickness:o,steps:l,stepSize:u,tracingMode:c,...s},g,s.mode,b,s.isMask,i)}),Me("pattern",(t,n,e,i)=>{let a=Le(e,i),r=new kt(a.style??0),o=new kt(a.projection??0),l=new kt(["x","y","z"].indexOf(a.axis)??0),u=new K(ft(a.blending??0,i)),c=new Ce(hn(a.offset,i)),s=new pn(a.colorA),p=new pn(a.colorB),S=new Ce(hn(a.frequency??new _t(10,10),i)),g=new K(ft(a.size??.5,i)),b=new K(ft(a.variation??0,i)),f=new K(ft(a.smoothness??.5,i)),w=new K(ft(a.zigzag??0,i)),v=new K(ft(a.rotation??0,i)),x=new Ce(hn(a.vertical??new _t(0,1),i)),N=new Ce(hn(a.horizontal??new _t(0,1),i)),F=new kt(a.sides??6),U=Pe(a),M=new Ms(r,o,l,u,c,s,p,S,g,b,f,w,v,x,N,F,U.alpha,U.isMask),I=new Gt(M.calpha,"f");return new Jt(t,n,e,{style:r,projection:o,axis:l,blending:u,offset:c,colorA:s,colorB:p,frequency:S,size:g,variation:b,smoothness:f,zigzag:w,rotation:v,vertical:x,horizontal:N,sides:F,...U},M,U.mode,I,U.isMask,i)}),Me("vertexColor",(t,n,e,i)=>{let a=Pe(Le(e,i)),r=new Ls(a.alpha),o=new Gt(r.calpha,"f");return new Jt(t,n,e,{...a},r,a.mode,o,a.isMask,i)}),_c({createRootMaterial:(t,n)=>new Bs(t,n),createSharedMaterial:(t,n,e)=>new Gd(t,n,e)}),vc((t,n)=>t?((e="medium")=>{if(Cn===e)return!1;Cn=e;let i=(o=>{switch(o){case"low":return 8;case"medium":default:return 16;case"high":return 32}})(e);pt.shadowmap_pars_fragment=(o=>`

// PCSS implementation based on:
// https://www.gamedev.net/articles/programming/graphics/contact-hardening-soft-shadows-made-fast-r4906/
// NOTE: This number affects how big the shadow blur can
// possibly get. Bigger number == bigger blur, but less precise results

const float  gPenumbraFilterSize = 80.0;
// Blocker search at half the PCF budget (min 4): the average-blocker-depth
// estimate feeds the squared/clamped penumbra term, which tolerates far
// more estimator variance than the visible PCF edge — and the per-frame
// vogel rotation integrates the residual under TAA. The reduced count is
// ALSO the vogelDiskSample count in computePenumbra so the sparser spiral
// still spans the full search radius (classic N with i < N/2 would only
// cover the inner sqrt(1/2) of the disk and miss far blockers). Mirrors
// the WebGPU filter's split (splinePCSS.ts blockerSampleCount).
const int   gPenumbraSamples = ${Math.max(4,o>>1)};
const int gShadowSamples = ${o};
const float gShadowSamplesRpc = 1.0f / float(gShadowSamples);

#ifdef USE_SHADOWMAP
    #if NUM_DIR_LIGHT_SHADOWS > 0

        uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
        varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

        struct DirectionalLightShadow {
            // Field order must match three r185's stock struct
            // (shadowmap_pars_vertex) or the uniform layout differs between the
            // vertex and fragment stages. shadowIntensity was added in r185.
            float shadowIntensity;
            float shadowBias;
            float shadowNormalBias;
            float shadowRadius;
            vec2 shadowMapSize;
        };

        uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

    #endif

    #if NUM_SPOT_LIGHT_SHADOWS > 0

        uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
        varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_SHADOWS ];

        struct SpotLightShadow {
            // Field order must match three r185's stock struct
            // (shadowmap_pars_vertex) or the uniform layout differs between the
            // vertex and fragment stages. shadowIntensity was added in r185.
            float shadowIntensity;
            float shadowBias;
            float shadowNormalBias;
            float shadowRadius;
            vec2 shadowMapSize;
        };

        uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

    #endif

    #if NUM_POINT_LIGHT_SHADOWS > 0

        // r185 renders point-light shadows into a cube render target with a
        // CubeDepthTexture (WebGLShadowMap always uses WebGLCubeRenderTarget
        // for point lights), so the map binds as a cube sampler — the old
        // 2D cube-atlas (cubeToUV) layout no longer exists. BasicShadowMap
        // leaves compareFunction null, so raw depth reads work.
        uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
        varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

        struct PointLightShadow {
            // Field order must match three r185's stock struct.
            float shadowIntensity;
            float shadowBias;
            float shadowNormalBias;
            float shadowRadius;
            vec2 shadowMapSize;
            float shadowCameraNear;
            float shadowCameraFar;
        };

        uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

    #endif

    /*
    #if NUM_RECT_AREA_LIGHTS > 0

        // TODO (abelnation): create uniforms for area light shadows

    #endif
    */

${Vs}

float computePenumbra(int index, sampler2D shadowMap, float temporalAngle, float texelSize, vec2 uv, float compare, float texelScalar, float shadowRadius, vec2 dzduv)
{
    float penumbra = 1.0;
    float blockerDepthAvg = 0.0;
    float blockerCount = 0.0;

    #pragma unroll_loop_start
    for(int i = 0; i < gPenumbraSamples; i ++)
    {
        vec2 offset = (vogelDiskSample(i, gPenumbraSamples, temporalAngle) * texelSize) * texelScalar;
        float depth = texture2D( shadowMap, uv + offset ).r;

        if(depth < compare + receiverPlaneAdjust(dzduv, offset) + 0.0001)
        {
            blockerDepthAvg += depth;
            blockerCount++;
        }
    }
    #pragma unroll_loop_end

    if (blockerCount > 0.0)
    {
        blockerDepthAvg /= blockerCount;

        
        penumbra = (compare - blockerDepthAvg) / (blockerDepthAvg);
        penumbra *= penumbra;
        penumbra *= 200.0 * penumbraSize[min(index, ${Kn} - 1)]; // Magic number that affects how quickly the penumbra grows

        return clamp(penumbra, 0.00, 1.0);
    }
    return 0.0;
}

float vogelShadow(int index, sampler2D shadowMap, vec2 uv, float texelSize, float compare, float shadowRadius, vec2 dzduv)
{
    float shadow         = 0.0f;

    // NOTE: When using TAA, we should use screen space interleaved gradient noise
    vec2 halton = haltonSequence[frameIndex];
    float temporalOffset = getNoiseInterleavedGradient(gl_FragCoord.xy + halton);
    float temporalAngle  = temporalOffset * PI2;

    float texelScalar = (gPenumbraFilterSize) / (texelSize * 1024.);
    float penumbra = computePenumbra(index, shadowMap, temporalAngle, texelSize, uv, compare, texelScalar, shadowRadius, dzduv);
    if (penumbra == -1.0) {
        return 1.0;
    }

    #pragma unroll_loop_start
    for (int i = 0; i < gShadowSamples; i++)
    {
        vec2 vogelSample =  vogelDiskSample(i, gShadowSamples, temporalAngle) * texelSize;
        // Overall blurring offset
        vec2 offset = vogelSample * (shadowRadius * 2.);

        // Penumbra offset
        offset += vogelSample * (penumbra * texelScalar);

        shadow += step( compare + receiverPlaneAdjust(dzduv, offset), texture2D( shadowMap, uv + offset ).r );
    }
    #pragma unroll_loop_end

    return shadow * gShadowSamplesRpc;
}


    float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

        // r185: shadow maps are DepthTextures bound without compare mode
        // (BasicShadowMap), so depth is read directly from .r rather than from
        // an RGBA-packed encoding.
        return step( compare, texture2D( depths, uv ).r );

    }

    float textureCubeCompare( samplerCube depths, vec3 dir, float compare ) {

        float depth = textureCube( depths, dir ).r;

        #ifdef USE_REVERSED_DEPTH_BUFFER

            depth = 1.0 - depth;

        #endif

        return step( compare, depth );

    }

    vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

        return unpackRGBATo2Half( texture2D( shadow, uv ) );

    }

    float VSMShadow (sampler2D shadow, vec2 uv, float compare ){

        float occlusion = 1.0;

        vec2 distribution = texture2DDistribution( shadow, uv );

        float hard_shadow = step( compare , distribution.x ); // Hard Shadow

        if (hard_shadow != 1.0 ) {

            float distance = compare - distribution.x ;
            float variance = max( 0.00000, distribution.y * distribution.y );
            float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
            softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
            occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

        }
        return occlusion;

    }

    float getShadow( int i, sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

        float shadow = 1.0;

        shadowCoord.xyz /= shadowCoord.w;
        shadowCoord.z += shadowBias;

        // Receiver-plane depth gradient — derivatives taken BEFORE the
        // frustum branch (well-defined across the quad) of the projected
        // coord, so the vogel taps can slope-correct their compares.
        vec2 dzduv = receiverPlaneDepthBias( dFdx( shadowCoord.xyz ), dFdy( shadowCoord.xyz ) );

        // if ( something && something ) breaks ATI OpenGL shader compiler
        // if ( all( something, something ) ) using this instead

        bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
        bool inFrustum = all( inFrustumVec );

        bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );

        bool frustumTest = all( frustumTestVec );

        if ( frustumTest ) {

        // SHADOWMAP_TYPE_BASIC included: on r185 the renderer must use
        // BasicShadowMap (PCFShadowMap binds the depth texture as a
        // sampler2DShadow with hardware compare, which this custom PCSS
        // sampling can't read from), so BASIC is the define our PCSS path
        // now runs under.
        #if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC )

            vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
            return vogelShadow(i, shadowMap, shadowCoord.xy, texelSize.x, shadowCoord.z, shadowRadius, dzduv );

        #elif defined( SHADOWMAP_TYPE_PCF_SOFT )

            vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
            float dx = texelSize.x;
            float dy = texelSize.y;

            vec2 uv = shadowCoord.xy;
            vec2 f = fract( uv * shadowMapSize + 0.5 );
            uv -= f * texelSize;

            shadow = (
                texture2DCompare( shadowMap, uv, shadowCoord.z ) +
                texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
                texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
                mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
                     texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
                     f.x ) +
                mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
                     texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
                     f.x ) +
                mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
                     texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
                     f.y ) +
                mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
                     texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
                     f.y ) +
                mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
                          texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
                          f.x ),
                     mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
                          texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
                          f.x ),
                     f.y )
            ) * ( 1.0 / 9.0 );

        #elif defined( SHADOWMAP_TYPE_VSM )

            shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );

        #else // no percentage-closer filtering:

            shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

        #endif

        }

        return shadow;

    }

    float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

        float shadow = 1.0;
        // Offset magnitude matches the pre-r185 2D cube-atlas texel size so the
        // blur radius is visually unchanged.
        vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

        // for point lights, the uniform @vShadowCoord is re-purposed to hold
        // the vector from the light to the world-space position of the fragment.
        vec3 lightToPosition = shadowCoord.xyz;

        // r185 cube shadow maps store perspective depth along the sampled
        // face's view axis (not radial distance): view-space depth is the
        // largest component of the light-to-fragment vector.
        vec3 absVec = abs( lightToPosition );
        float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );

        if ( viewSpaceZ - shadowCameraFar > 0.0 || viewSpaceZ - shadowCameraNear < 0.0 ) {

            return shadow;

        }

        // viewZ to perspective depth
        float compare = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
        compare += shadowBias;

        // bd3D = base direction 3D
        vec3 bd3D = normalize( lightToPosition );

        vec2 halton = haltonSequence[frameIndex];
        float temporalOffset = getNoiseInterleavedGradient(gl_FragCoord.xy + halton);
        float temporalAngle  = temporalOffset * PI2;

        #if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_VSM ) || defined( SHADOWMAP_TYPE_BASIC )
            for (int i = 0; i < gShadowSamples; i++) {
                vec2 vogelSample = vogelDiskSample(i, gShadowSamples, temporalAngle) * texelSize;

                // Overall blurring offset
                vec3 offset = vec3(vogelSample.x, vogelSample.y, -vogelSample.x) * (shadowRadius + 5.);

                // NOTE: Removed for now
                // Penumbra offset
                //offset += vec3(vogelSample.x, vogelSample.y, vogelSample.y)  * (penumbra * gPenumbraFilterSize);

                shadow += textureCubeCompare( shadowMap, bd3D + offset, compare );

            }
            return shadow * gShadowSamplesRpc;

        #elif defined( SHADOWMAP_TYPE_PCF_SOFT )
            for (int i = 0; i < 16; i++) {
                vec2 vogelSample = vogelDiskSample(i, gShadowSamples, temporalAngle) * texelSize;

                // Overall blurring offset
                vec3 offset = vec3(vogelSample.x, vogelSample.y, -vogelSample.x) * (shadowRadius + 5.);

                shadow += textureCubeCompare( shadowMap, bd3D + offset, compare );

            }
            return shadow * (1.0 / 16.0);
        #else // no percentage-closer filtering

            return textureCubeCompare( shadowMap, bd3D, compare );

        #endif

    }

#endif
`)(i);let a=go.slice();a=a.replace("getShadow( spotShadowMap[ i ]",`getShadow( UNROLLED_LOOP_INDEX + ${xc}, spotShadowMap[ i ]`),a=a.replace("getShadow( directionalShadowMap[ i ]","getShadow( UNROLLED_LOOP_INDEX, directionalShadowMap[ i ]"),pt.lights_fragment_begin=a;let r=_o.slice();return r=r.replaceAll("getShadow(","getShadow( UNROLLED_LOOP_INDEX, "),pt.shadowmask_pars_fragment=r,!0})(n):(()=>{if(Cn===null||Cn==="off"){let e=Cn===null;return Cn="off",e&&(pt.shadowmap_pars_fragment=xo()),!1}return Cn="off",pt.shadowmap_pars_fragment=xo(),pt.lights_fragment_begin=go,pt.shadowmask_pars_fragment=_o,!0})()),Sc(()=>{let t=new Ec;return t.depthWrite=!1,t.opacity=.5,t.onBeforeCompile=n=>{n.fragmentShader=`layout(location = 1) out vec4 gVelocity;
`+n.fragmentShader.replace("void main() {",`void main() {
	gVelocity = vec4(0.0);`)},t});var Gs=`
vec3 normal = (normalize(vNormal)).rgb;

float contrastDepth = (gl_FragCoord.z - 0.5) * depthContrast + 0.5;

vec3 resultColor = mix(mix(vColor, normal, 0.2), vec3(contrastDepth), 0.4);
`,ks=`
vec3 nv = normalize(vNormalView);
if (!gl_FrontFacing) nv = -nv;
`,Zd=`
uniform float depthContrast;
varying vec3 vNormal;
varying vec3 vNormalView;
flat in vec3 vColor;
void main()
{
${ks}
gl_FragColor = vec4(nv, vColor.r);
}
`,Jd=`
layout(location = 1) out vec4 gViewNormal;
uniform float depthContrast;
varying vec3 vNormal;
varying vec3 vNormalView;
flat in vec3 vColor;
void main()
{
${Gs}
gl_FragColor = vec4(resultColor, vColor.r);

${ks}
gViewNormal = vec4(nv, vColor.r);
}
`,Ws={value:1},Na=t=>new _e({vertexShader:`
attribute vec3 randomColor;
varying vec3 vNormal;
varying vec3 vNormalView;
flat out vec3 vColor;
#include <skinning_pars_vertex>
#include <morphtarget_pars_vertex>

void main()
{
#include <beginnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
vec3 transformed = vec3(position);
#include <morphtarget_vertex>
#include <skinning_vertex>





vec4 localPosition = vec4(transformed, 1.0);
#ifdef USE_INSTANCING
localPosition = instanceMatrix * localPosition;
objectNormal = mat3(instanceMatrix) * objectNormal;
#endif

vNormal = normal;
vNormalView = normalMatrix * objectNormal;
vColor = randomColor;
gl_Position = projectionMatrix * (modelViewMatrix * localPosition);
}
`,fragmentShader:t,uniforms:{depthContrast:Ws}}),Qd=Na(`
uniform float depthContrast;
varying vec3 vNormal;
varying vec3 vNormalView;
flat in vec3 vColor;
void main()
{
${Gs}
gl_FragColor = vec4(resultColor, vColor.r);
}
`),tf=Na(Zd),ef=Na(Jd),bo=`float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

	if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {

		return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );

	}

	return 1.0;

}`,wo=/float getDistanceAttenuation\([^)]*\)\s*\{[\s\S]*?\n\}/,Ea=class extends _e{constructor(){super({name:"PassthroughMaterial",uniforms:{inputBuffer:new rt(null)},blending:wn,depthWrite:!1,depthTest:!1,vertexShader:`#define GLSLIFY 1
varying vec2 vUv;void main(){gl_Position=vec4(position.xy,1.0,1.0);vUv=position.xy*0.5+0.5;}`,fragmentShader:`#define GLSLIFY 1
layout(location=1)out vec4 gVelocity;varying vec2 vUv;uniform sampler2D inputBuffer;void main(){gl_FragColor=texture2D(inputBuffer,vUv);gVelocity=vec4(0.0);}`})}set inputBuffer(t){this.uniforms.inputBuffer.value=t}},nf=class extends hi{constructor(){super("TAAResolvePass"),this.MRTCompatible=!0,this.needsSwap=!1,this.passThroughMaterial=new Ea,this.resolutionVector=new _t,this.resolveMaterial=new _e({name:"TAAResolveMaterial",uniforms:{inputBuffer:new rt(null),historyBuffer:new rt(null),velocityBuffer:new rt(null),depthBuffer:new rt(null),resolution:new rt(new _t)},blending:wn,depthWrite:!1,depthTest:!1,vertexShader:`#define GLSLIFY 1
varying vec2 vUv;varying vec2 vTexCoords[9];uniform vec2 resolution;void main(){vUv=position.xy*0.5+0.5;vec2 texelSize=vec2(1.0)/resolution;vTexCoords[0]=vUv+vec2(-texelSize.x,-texelSize.y);vTexCoords[1]=vUv+vec2(0.0,-texelSize.y);vTexCoords[2]=vUv+vec2(texelSize.x,-texelSize.y);vTexCoords[3]=vUv+vec2(-texelSize.x,0.0);vTexCoords[4]=vUv+vec2(0.0,0.0);vTexCoords[5]=vUv+vec2(texelSize.x,0.0);vTexCoords[6]=vUv+vec2(-texelSize.x,texelSize.y);vTexCoords[7]=vUv+vec2(0.0,texelSize.y);vTexCoords[8]=vUv+vec2(texelSize.x,texelSize.y);gl_Position=vec4(position.xy,1.0,1.0);}`,fragmentShader:`#define GLSLIFY 1
#include <common>
varying vec2 vUv;varying vec2 vTexCoords[9];uniform sampler2D inputBuffer;uniform sampler2D historyBuffer;uniform sampler2D velocityBuffer;uniform sampler2D depthBuffer;uniform vec2 resolution;
#define USE_YCOCG
#define USE_CATMULL_ROM
const float feedback_min=0.5;const float feedback_max=0.95;vec3 RGB_YCoCg(vec3 c){return vec3(c.x/4.0+c.y/2.0+c.z/4.0,c.x/2.0-c.z/2.0,-c.x/4.0+c.y/2.0-c.z/4.0);}vec3 YCoCg_RGB(vec3 c){return clamp(vec3(c.x+c.y-c.z,c.x+c.z,c.x-c.y-c.z),vec3(0.0),vec3(1.0));}vec4 sample_color(sampler2D tex,vec2 uv){
#ifdef USE_YCOCG
vec4 c=texture(tex,uv);return vec4(RGB_YCoCg(c.rgb),c.a);
#else
return texture(tex,uv);
#endif
}vec4 sample_catmull_rom(sampler2D tex,vec2 uv,vec2 texSize){vec2 samplePos=uv*texSize;vec2 texPos1=floor(samplePos-0.5)+0.5;vec2 f=samplePos-texPos1;vec2 w0=f*(-0.5+f*(1.0-0.5*f));vec2 w1=1.0+f*f*(-2.5+1.5*f);vec2 w2=f*(0.5+f*(2.0-1.5*f));vec2 w3=f*f*(-0.5+0.5*f);vec2 w12=w1+w2;vec2 offset12=w2/(w1+w2);vec2 texPos0=texPos1-1.0;vec2 texPos3=texPos1+2.0;vec2 texPos12=texPos1+offset12;texPos0/=texSize;texPos3/=texSize;texPos12/=texSize;vec4 result=vec4(0.0);result+=texture2D(tex,vec2(texPos12.x,texPos0.y))*w12.x*w0.y;result+=texture2D(tex,vec2(texPos0.x,texPos12.y))*w0.x*w12.y;result+=texture2D(tex,vec2(texPos12.x,texPos12.y))*w12.x*w12.y;result+=texture2D(tex,vec2(texPos3.x,texPos12.y))*w3.x*w12.y;result+=texture2D(tex,vec2(texPos12.x,texPos3.y))*w12.x*w3.y;return result;}vec3 choose_motion_vector(){
#ifdef CHOOSE_LONGEST_MOTION_VECTOR
float longest=-1.0;vec3 v_choose=vec3(-1.0);for(int i=0;i<9;i++){vec3 v=texture2D(velocityBuffer,vTexCoords[i]).rgb;float l=length(v.xy);if(l>longest){longest=l;v_choose=v;}}return v_choose;
#else
float closest_depth=1000.0;vec2 closest_uv_offset=vec2(0.0);for(int i=0;i<9;i++){float neighbor_depth=texture2D(depthBuffer,vTexCoords[i]).r;if(neighbor_depth<closest_depth){closest_uv_offset=vTexCoords[i];closest_depth=neighbor_depth;}}return texture2D(velocityBuffer,closest_uv_offset).rgb;
#endif
}vec4 clipAabb(vec3 aabb_min,vec3 aabb_max,vec4 avg,vec4 input_texel){const float FLT_EPS=0.00000001;vec3 p_clip=0.5*(aabb_max+aabb_min);vec3 e_clip=0.5*(aabb_max-aabb_min)+FLT_EPS;vec4 v_clip=input_texel-vec4(p_clip,avg.w);vec3 v_unit=v_clip.xyz/e_clip;vec3 a_unit=abs(v_unit);float ma_unit=max(a_unit.x,max(a_unit.y,a_unit.z));if(ma_unit>1.0){return vec4(p_clip,avg.w)+v_clip/ma_unit;}else{return input_texel;}}vec3 clip_aabb_variance(in vec3 cOld,in vec3 cNew,in vec3 centre,in vec3 halfSize){if(all(lessThanEqual(abs(cOld-centre),halfSize))){return cOld;}vec3 dir=(cNew-cOld);vec3 near=centre-sign(dir)*halfSize;vec3 tAll=(near-cOld)/dir;float t=0.0001;for(int i=0;i<3;i++){if(tAll[i]>=0.0&&tAll[i]<t){t=tAll[i];}}if(t>=0.0001){return cOld;}return cOld+dir*t;}void main(){vec3 v=choose_motion_vector();vec2 velocity=v.rg;vec2 previousPixelPos=vUv-velocity;vec4 currentColor=sample_color(inputBuffer,vUv);
#ifdef USE_CATMULL_ROM
vec4 previousColor=sample_catmull_rom(historyBuffer,previousPixelPos,resolution);
#else
vec4 previousColor=sample_color(historyBuffer,previousPixelPos);
#endif
#ifdef USE_YCOCG
previousColor=vec4(RGB_YCoCg(previousColor.rgb),previousColor.a);
#endif
vec4 ctl=sample_color(inputBuffer,vTexCoords[0]);vec4 ctc=sample_color(inputBuffer,vTexCoords[1]);vec4 ctr=sample_color(inputBuffer,vTexCoords[2]);vec4 cml=sample_color(inputBuffer,vTexCoords[3]);vec4 cmc=sample_color(inputBuffer,vTexCoords[4]);vec4 cmr=sample_color(inputBuffer,vTexCoords[5]);vec4 cbl=sample_color(inputBuffer,vTexCoords[6]);vec4 cbc=sample_color(inputBuffer,vTexCoords[7]);vec4 cbr=sample_color(inputBuffer,vTexCoords[8]);vec4 cmin=min(ctl,min(ctc,min(ctr,min(cml,min(cmc,min(cmr,min(cbl,min(cbc,cbr))))))));vec4 cmax=max(ctl,max(ctc,max(ctr,max(cml,max(cmc,max(cmr,max(cbl,max(cbc,cbr))))))));vec4 cavg=(ctl+ctc+ctr+cml+cmc+cmr+cbl+cbc+cbr)/9.0;vec4 cmin5=min(ctc,min(cml,min(cmc,min(cmr,cbc))));vec4 cmax5=max(ctc,max(cml,max(cmc,max(cmr,cbc))));vec4 cavg5=(ctc+cml+cmc+cmr+cbc)/5.0;cmin=0.5*(cmin+cmin5);cmax=0.5*(cmax+cmax5);cavg=0.5*(cavg+cavg5);
#ifdef USE_YCOCG
vec2 chroma_extent=vec2(0.25*0.5*(cmax.r-cmin.r));vec2 chroma_center=currentColor.gb;cmin.yz=chroma_center-chroma_extent;cmax.yz=chroma_center+chroma_extent;cavg.yz=chroma_center;
#endif
vec4 previousColorClipped=clamp(previousColor,cmin,cmax);
#ifdef LUMINANCE_DIFFERENCES
#ifdef USE_YCOCG
float lum0=currentColor.r;float lum1=previousColorClipped.r;
#else
float lum0=luminance(currentColor.rgb);float lum1=luminance(previousColorClipped.rgb);
#endif
float unbiased_diff=abs(lum0-lum1)/max(lum0,max(lum1,0.2));float unbiased_weight=1.0-unbiased_diff;float unbiased_weight_sqr=unbiased_weight*unbiased_weight;float k_feedback=mix(feedback_min,feedback_max,unbiased_weight_sqr);vec4 result=mix(currentColor,previousColorClipped,vec4(k_feedback));
#else
const float alpha=0.1;vec4 result=mix(currentColor,previousColorClipped,1.0-alpha);
#endif
#ifdef USE_YCOCG
gl_FragColor=vec4(YCoCg_RGB(result.rgb).rgb,result.a);
#else
gl_FragColor=result;
#endif
}`}),this.historyRenderTarget=new se(1024,1024,{minFilter:jt,stencilBuffer:!1,depthBuffer:!1}),this.historyRenderTarget.texture.name="TAA.History",this.resultRenderTarget=new se(1024,1024,{minFilter:jt,stencilBuffer:!1,depthBuffer:!1}),this.resultRenderTarget.texture.name="TAA.Output"}setSize(t,n){this.historyRenderTarget.setSize(t,n),this.resultRenderTarget.setSize(t,n)}render(t,n){this.fullscreenMaterial=this.resolveMaterial,this.resolveMaterial.uniforms.inputBuffer.value=n.textures[0],this.resolveMaterial.uniforms.velocityBuffer.value=n.textures[1],this.resolveMaterial.uniforms.depthBuffer.value=n.depthTexture,this.resolveMaterial.uniforms.historyBuffer.value=this.historyRenderTarget.texture,this.resolveMaterial.uniforms.resolution.value.set(n.width,n.height),t.setRenderTarget(this.resultRenderTarget),t.render(this.scene,this.camera),this.fullscreenMaterial=this.passThroughMaterial,this.passThroughMaterial.inputBuffer=this.resultRenderTarget.texture,t.setRenderTarget(this.historyRenderTarget),t.render(this.scene,this.camera);let e=this.renderToScreen?null:n;this.fullscreenMaterial=this.passThroughMaterial,this.passThroughMaterial.inputBuffer=this.resultRenderTarget.texture,t.setRenderTarget(e),t.render(this.scene,this.camera)}dispose(){super.dispose(),this.resultRenderTarget.dispose(),this.historyRenderTarget.dispose(),this.resolveMaterial.dispose(),this.passThroughMaterial.dispose()}},af=class extends hi{constructor(t,n,e){super("TransmissionPass",void 0,n),this.MRTCompatible=!0,this.depthPass=new Hr(t,n,{renderTarget:e.transmissionDepthTarget}),this.passThroughMaterial=new Ea,this.splineScene=t,this.needsSwap=!1}updatePasses(t){this.passThroughMaterial.dispose(),this.passThroughMaterial=new Ea,this.depthPass.dispose(),this.depthPass=new Hr(this.splineScene,this.camera,{renderTarget:t.transmissionDepthTarget})}setCamera(t){this.camera=t}setScene(t){this.splineScene=t}render(t,n,e){let i=this.camera.layers.mask,a=t;a.setRenderTarget(a.transmissionRenderTarget),this.fullscreenMaterial=this.passThroughMaterial,this.passThroughMaterial.inputBuffer=n.textures[0],a.clear(),a.render(this.scene,this.camera),a.shadowMap.needsUpdate=!1,a.shadowMap.autoUpdate=!1,this.camera.layers.disable(3),this.depthPass.render(t,n,e);let r=this.renderToScreen?null:n;this.camera.layers.set(3),t.setRenderTarget(r),t.render(this.splineScene,this.camera),this.camera.layers.mask=i}dispose(){super.dispose(),this.depthPass?.renderPass.dispose(),this.depthPass.dispose(),this.passThroughMaterial.dispose(),this.depthPass=void 0,this.passThroughMaterial=void 0,this.splineScene=void 0,this.scene=void 0,this.camera=void 0}},Eo=new Po,rf=new _e({transparent:!0,vertexShader:`
        void main() {
            gl_Position = vec4(0.0);
        }
    `,fragmentShader:`
        layout(location = 1) out vec4 gVelocity;

        void main() {
            gl_FragColor = vec4(0.0);
			gVelocity = vec4(0.0);
        }
    `}),Ma=class extends hi{constructor(t,n,e){super("OpaquePass",n??Eo,e),this.MRTCompatible=!0,this.originalMaterials=[],this.hasTransmissionPass=!1,this.clear=!0,this.clearColorOnly=!1,this.clearDepth=!1,this.needsSwap=!1,this.MRTCompatible=t}setCamera(t){this.camera=t}setScene(t){this.scene=t??Eo}getScene(){return this.scene}render(t,n){this.camera.layers.enable(3),this.hasTransmissionPass&&(this.originalMaterials.length=0,this.scene.traverse(i=>{i.layers.isEnabled(3)&&i instanceof sl&&(this.originalMaterials.push([i,i.material]),i.material=rf)}),t.manageShadowUpdates!==!0&&(t.shadowMap.needsUpdate=!0,t.shadowMap.autoUpdate=!0)),this.camera.layers.enable(8),this.camera.layers.enable(4);let e=this.renderToScreen?null:n;t.setRenderTarget(e),this.clearColorOnly&&t.clear(!0,!1,!0),this.clear&&t.clear(),t.render(this.scene,this.camera),this.clearDepth&&t.clear(!1,!0,!1),this.hasTransmissionPass&&this.originalMaterials.forEach(i=>{i[0].material=i[1]})}dispose(){super.dispose(),this.originalMaterials.length=0,this.scene=void 0,this.camera=void 0}},of=class{constructor(t,{depthBuffer:n=!0,stencilBuffer:e=!1,multisampling:i=0,frameBufferType:a=0}={}){this.renderer=t,this.helperStartIndex=0,this.copyPass=new ma,this.depthTexture=null,this.timer=new Cc,this._width=1,this._height=1,this.passes=[],this.helperPasses=[],this.autoRenderToScreen=!0,this.inputBuffer=this.createBuffer(n,e,a,i,!0,"input buffer mrt"),this.inputBufferSingle=this.createBuffer(n,e,a,i,!1," input buffer single"),this.inputBufferSingle.texture.dispose(),this.inputBufferSingle.depthTexture.dispose(),this.inputBufferSingle.texture=this.inputBuffer.textures[0],this.inputBufferSingle.depthTexture=this.inputBuffer.depthTexture,this.outputBuffer=this.inputBuffer.clone(),this.outputBuffer.name="output buffer mrt",this.outputBufferSingle=this.createBuffer(n,e,a,i,!1,"output buffer single"),this.outputBufferSingle.texture.dispose(),this.outputBufferSingle.depthTexture.dispose(),this.outputBufferSingle.texture=this.outputBuffer.textures[0],this.outputBufferSingle.depthTexture=this.outputBuffer.depthTexture,this.setRenderer(t)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(t){let n=this.inputBuffer,e=this.multisampling;e>0&&t>0?(this.inputBuffer.samples=t,this.outputBuffer.samples=t,this.inputBuffer.dispose(),this.outputBuffer.dispose()):e!==t&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),console.log("creating new input buffer"),this.inputBuffer=this.createBuffer(n.depthBuffer,n.stencilBuffer,n.texture.type,t,!0,"new input buffer"),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(t){if(this.renderer=t,t!==null){let n=t.getSize(new _t),e=t.getContext().getContextAttributes()?.alpha??!1,i=this.inputBuffer.textures[0].type;i===an&&t.outputColorSpace===tn&&(this.inputBuffer.textures[0].colorSpace=tn,this.outputBuffer.textures[0].colorSpace=tn,this.inputBuffer.dispose(),this.outputBuffer.dispose()),t.autoClear=!1,this.setSize(n.width,n.height,!1);for(let a of this.passes)a.initialize(t,e,i)}}replaceRenderer(t,n=!0){let e=this.renderer,i=e.domElement.parentNode;return this.setRenderer(t),n&&i!==null&&(i.removeChild(e.domElement),i.appendChild(t.domElement)),e}createDepthTexture(){let t=this.depthTexture=new vn(this._width,this._height);return this.inputBuffer.depthTexture=t,this.inputBuffer.stencilBuffer?(t.format=kn,t.type=ui):t.type=Dn,t}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(let t of this.passes)t.setDepthTexture(null)}}createBuffer(t,n,e,i,a,r){let o,l=this.renderer,u=l===null?new _t:l.getDrawingBufferSize(new _t),c={minFilter:jt,magFilter:jt,wrapS:Re,wrapT:Re,stencilBuffer:n,depthBuffer:t};i>0?(o=new se(u.width,u.height,c),o.samples=i):(a?(o=new se(u.width,u.height,{...c,count:2}),o.textures[1].type=Ye):o=new se(u.width,u.height,c),o.depthTexture=new vn(2048,2048),o.depthTexture.type=ze);let s=o.textures.length>1;return e===an&&l!==null&&l.outputColorSpace===tn&&(s?o.textures.forEach(p=>p.colorSpace=tn):o.texture.colorSpace=tn),s?o.textures.forEach((p,S)=>{p.name=`EffectComposer.Buffer ${a} ${S}`,p.generateMipmaps=!1}):(o.texture.name=`EffectComposer.Buffer ${a}`,o.texture.generateMipmaps=!1),o.name=r,o}addPass(t,n){let e,i=this.passes,a=this.renderer,r=a.getDrawingBufferSize(new _t),o=a.getContext().getContextAttributes()?.alpha??!1;if(t.MRTCompatible&&(e=this.inputBuffer.textures[0].type),t.MRTCompatible||(e=this.inputBuffer.texture.type),t.setRenderer(a),t.setSize(r.width,r.height),t.initialize(a,o,e),this.autoRenderToScreen&&(i.length>0&&(i[i.length-1].renderToScreen=!1),t.renderToScreen&&(this.autoRenderToScreen=!1)),n!==void 0?i.splice(n,0,t):i.push(t),this.autoRenderToScreen&&(i[i.length-1].renderToScreen=!0),t.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){let l=this.createDepthTexture();for(t of i)t.setDepthTexture(l)}else t.setDepthTexture(this.depthTexture)}setHelperStartIndex(t){this.helperStartIndex=t}removePass(t){let n=this.passes,e=n.indexOf(t);if(e!==-1&&n.splice(e,1).length>0){if(this.depthTexture!==null){let i=(a,r)=>a||r.needsDepthTexture;n.reduce(i,!1)||t.getDepthTexture()===this.depthTexture&&t.setDepthTexture(null)}this.autoRenderToScreen&&e===n.length&&(t.renderToScreen=!1,n.length>0&&(n[n.length-1].renderToScreen=!0))}}removeAllPasses(){let t=this.passes;t.length>0&&(this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!1),this.passes=[])}render(t){let n,e,i,a,r=this.renderer,o=this.copyPass,l=this.inputBuffer,u=this.outputBuffer,c=this.inputBufferSingle,s=this.outputBufferSingle,p=!1;t===void 0&&(t=this.timer.update().getDelta());for(let S of this.passes)S.enabled&&(S.MRTCompatible?S.render(r,l,u,t,p):S.render(r,c,s,t,p),S.needsSwap&&(p&&(o.renderToScreen=S.renderToScreen,n=r.getContext(),e=r.state.buffers.stencil,e.setFunc(n.NOTEQUAL,1,4294967295),o.render(r,l,u,t,p),e.setFunc(n.EQUAL,1,4294967295)),i=l,a=c,l=u,c=s,u=i,s=a),S instanceof Rc?p=!0:S instanceof Ac&&(p=!1))}setSize(t,n,e){let i=this.renderer;if(this._width=t,this._height=n,t===void 0||n===void 0){let r=i.getSize(new _t);t=r.width,n=r.height}i.setSize(t,n,e);let a=i.getDrawingBufferSize(new _t);this.inputBuffer.setSize(a.width,a.height),this.outputBuffer.setSize(a.width,a.height),this.inputBufferSingle.setSize(a.width,a.height),this.outputBufferSingle.setSize(a.width,a.height);for(let r of this.passes)r.setSize(a.width,a.height)}reset(){let t=this.timer.isAutoResetEnabled();this.dispose(),this.autoRenderToScreen=!0,this.timer.setAutoResetEnabled(t)}dispose(){for(let t of this.passes)t.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.inputBufferSingle!==null&&this.inputBufferSingle.dispose(),this.outputBufferSingle!==null&&this.outputBufferSingle.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose()}},sf=new _e({name:"CombineMaterial",uniforms:{inputBufferA:new rt(null),inputBufferB:new rt(null)},blending:wn,depthWrite:!1,depthTest:!1,vertexShader:`
varying vec2 vUv;
void main() {
    gl_Position = vec4(position.xy, 1.0, 1.0);
    vUv = position.xy * 0.5 + 0.5;
}
`,fragmentShader:`
    varying vec2 vUv;
    uniform sampler2D inputBufferA;
    uniform sampler2D inputBufferB;

    
    layout(location = 1) out vec4 gVelocity;

    void main() {
	vec4 resA = texture2D(inputBufferA, vUv);
	vec4 resB = texture2D(inputBufferB, vUv);
    float a = resA.a + resB.a * ( 1.0 - resA.a );

	vec4 res;
	res.rgb =  resA.rgb + (resB.rgb * (1.0 - resA.a));
	res.a = resA.a + resB.a * (1.0 - resA.a);
	gl_FragColor = res;
    gVelocity = vec4(0.0);
    }
`}),lf=class extends hi{constructor(t){super("HelperPass",void 0,t),this.MRTCompatible=!1,this._width=10,this._height=10,this.fullscreenMaterial=sf,this.helperPass=new Ma(!1,void 0,this.camera),this.helperPass.hasTransmissionPass=!1,this.helperPass.clear=!1,this.helperPass.renderToScreen=!1,this.helperPassOnTop=new Ma(!1,void 0,this.camera),this.helperPassOnTop.hasTransmissionPass=!1,this.helperPassOnTop.clear=!1,this.helperPassOnTop.renderToScreen=!1,this.rt=new se(10,10,{minFilter:jt,magFilter:jt,wrapS:Re,wrapT:Re,depthBuffer:!0})}_ensureEffectPass(){if(this.effectPass)return this.effectPass;let t=new Yo({preset:Zo.LOW,edgeDetectionMode:Ko.COLOR});return t.addEventListener("load",()=>this.onSmaaTexturesLoaded?.()),this.effectPass=new Ni(this.camera,t),this._initializeArgs&&this.effectPass.initialize(...this._initializeArgs),this.effectPass.setSize(this._width,this._height),this.effectPass}setSize(t,n){this._width=t,this._height=n,this.rt.setSize(t,n),this.effectPass?.setSize(t,n)}set sceneHelpers(t){this.helperPass.setScene(t)}get sceneHelpers(){return this.helperPass.getScene()}set sceneHelpersOnTop(t){this.helperPassOnTop.setScene(t)}get sceneHelpersOnTop(){return this.helperPassOnTop.getScene()}setCamera(t){this.helperPass.setCamera(t),this.helperPassOnTop.setCamera(t)}initialize(t,n,e){super.initialize(t,n,e),this._initializeArgs=[t,n,e],this.effectPass?.initialize(t,n,e)}dispose(){super.dispose(),this.rt.dispose(),this.effectPass?.dispose(),this.helperPass.dispose(),this.helperPassOnTop.dispose()}render(t,n,e){this.rt.depthTexture=n.depthTexture;let i=t.getClearAlpha();t.setClearAlpha(0),this.helperPass.clearDepth=!0,this.helperPass.clearColorOnly=!0,this.helperPass.render(t,this.rt),this.helperPassOnTop.render(t,this.rt);let a=this._ensureEffectPass();a.renderToScreen=!1,a.render(t,this.rt,e),this.fullscreenMaterial.uniforms.inputBufferA.value=e.texture,this.fullscreenMaterial.uniforms.inputBufferB.value=n.texture,t.setClearAlpha(i),t.setRenderTarget(null),t.clear(),t.render(this.scene,this.camera)}},la=new _e({vertexShader:`#define GLSLIFY 1
#include <skinning_pars_vertex>
#include <morphtarget_pars_vertex>
out vec3 n;void main(){
#include <beginnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
#include <defaultnormal_vertex>
#include <begin_vertex>
#include <morphtarget_vertex>
#include <skinning_vertex>
vec4 view_space=viewMatrix*modelMatrix*vec4(transformed,1.0);gl_Position=projectionMatrix*view_space;n=normalize(transformedNormal);}`,fragmentShader:`#define GLSLIFY 1
in vec3 n;void main(){gl_FragColor=vec4(gl_FrontFacing ? n :-n,1.0);}`,side:rn}),zn=new _e({vertexShader:`#define GLSLIFY 1
out vec2 v_uv;void main(){gl_Position=vec4(position.xy,1.0,1.0);v_uv=uv;}`,fragmentShader:`#define GLSLIFY 1
in vec2 v_uv;uniform sampler2D texture_ao_lrez;uniform sampler2D texture_depth_lrez;uniform sampler2D texture_depth_hrez;uniform float near;uniform float far;float linearize_depth(float depth_sampled){float z=depth_sampled*2.0-1.0;return(2.0*near*far)/(far+near-z*(far-near));}vec2 nearest_depth_filter(in vec2 uv){vec2 resolution=vec2(textureSize(texture_depth_lrez,0));vec2 texel_size=1.0/resolution;vec2 offset=uv-0.5*texel_size;float d_hrez=texture(texture_depth_hrez,uv).r;float a=abs(d_hrez-texture(texture_depth_lrez,offset).r);float b=abs(d_hrez-texture(texture_depth_lrez,offset+vec2(texel_size.x,0.0)).r);float c=abs(d_hrez-texture(texture_depth_lrez,offset+vec2(0.0,texel_size.y)).r);float d=abs(d_hrez-texture(texture_depth_lrez,offset+vec2(texel_size.x,texel_size.y)).r);float min_diff=min(a,min(b,min(c,d)));if(min_diff==a)return offset;if(min_diff==b)return offset+vec2(texel_size.x,0.0);if(min_diff==c)return offset+vec2(0.0,texel_size.y);if(min_diff==d)return offset+vec2(texel_size.x,texel_size.y);}void main(){
#ifdef DEBUG
float d_lrez=texture(texture_depth_lrez,v_uv).r;float d_hrez=texture(texture_depth_hrez,v_uv).r;float output_d=mix(linearize_depth(d_lrez)/far,linearize_depth(d_hrez)/far,step(0.5,v_uv.x));gl_FragColor=vec4(vec3(output_d),1.0);
#else
vec2 filtered_uv=nearest_depth_filter(v_uv);vec4 ao=texture(texture_ao_lrez,filtered_uv);gl_FragColor=vec4(ao.rgb,1.0);gl_FragColor=ao;
#endif
}`,uniforms:{texture_ao_lrez:new rt(null),texture_depth_lrez:new rt(null),texture_depth_hrez:new rt(null),near:new rt(null),far:new rt(null)}}),cf=class extends hi{constructor(t,n){super("AmbientOcclusionPass",void 0,n),this.fogEnabled=!1,this.fogNear=1,this.fogFar=1e3,this.fogMode=0,this.fogHeightParams=new Mt(.005,.01,0),this.frameIndex=0,this.sanitizeViewport=!1,this._runHalfRes=!0,this._width=1,this._height=1;let e=1024,i=1024;this.gBuffer=new se(e,i,{type:Co?Ye:ze,depthTexture:new vn(e,i),minFilter:jt,magFilter:jt}),this.depthBufferHighRes=new se(e,i,{depthTexture:new vn(e,i)}),this.aoBuffer=new se(e,i,{minFilter:jt,magFilter:jt}),this.splineScene=t,this.splineCamera=n,this.hbaoMaterial=new _e({vertexShader:`#define GLSLIFY 1
out vec2 v_uv;void main(){v_uv=uv;gl_Position=vec4(position.xy,1.0,1.0);}`,fragmentShader:`precision highp float;precision highp int;precision highp sampler2D;
#define GLSLIFY 1
in vec2 v_uv;const float pi=3.14159265;const float num_steps=4.0;const float num_directions=4.0;uniform float near;uniform float far;uniform float fov;uniform vec4 proj_info;uniform bool is_ortho;uniform vec2 resolution;uniform float radius_of_influence;uniform float radius_in_screen_space;uniform float exponent;uniform vec3 ao_color;uniform float bias;uniform sampler2D texture_depth;uniform sampler2D texture_normals;uniform sampler2D texture_blue_noise;uniform sampler2D texture_color_pass;const vec2 blue_noise_in_disk[16]=vec2[16](vec2(0.4787119925022125,0.875764012336731),vec2(-0.3379560112953186,-0.7939590215682983),vec2(-0.9552590250968933,-0.028163999319076538),vec2(0.8645269870758057,0.3256889879703522),vec2(0.20934200286865234,-0.3956570029258728),vec2(-0.10677900165319443,0.6725850105285645),vec2(0.15621300041675568,0.2351129949092865),vec2(-0.4136439859867096,-0.08285599946975708),vec2(-0.41566699743270874,0.3239090144634247),vec2(0.14189599454402924,-0.9399799704551697),vec2(0.9549319744110107,-0.18251599371433258),vec2(-0.7661839723587036,0.4107989966869354),vec2(-0.4349119961261749,-0.45884498953819275),vec2(0.4152419865131378,-0.07872399687767029),vec2(0.7283350229263306,-0.4917770028114319),vec2(-0.05808600038290024,-0.06640099734067917));uniform int frame_index;uniform bool fog_enabled;uniform float fog_near;uniform float fog_far;uniform float fog_mode;uniform vec3 fog_height_params;uniform mat4 camera_world_matrix;float height_fog_factor(vec3 fog_world_delta,float fog_dist,vec3 camera_world_pos){float density=fog_height_params.x;float falloff=fog_height_params.y;float rel_y=camera_world_pos.y-fog_height_params.z;float cam_density=density*exp(clamp(-falloff*rel_y,-60.0,60.0));float x=clamp(falloff*fog_world_delta.y,-60.0,60.0);float x_safe=(x>=0.0 ? 1.0 :-1.0)*max(abs(x),1e-4);float optical_depth=cam_density*fog_dist*(1.0-exp(-x_safe))/x_safe;return 1.0-exp(-max(optical_depth,0.0));}vec3 uv_to_view_space(vec2 uv,float eye_z){return vec3((uv*proj_info.xy+proj_info.zw)*(is_ortho ? 1.0 : eye_z),eye_z);}float linearize_depth(float depth_sampled){float z=is_ortho ? depth_sampled : depth_sampled*2.0-1.0;return mix((2.0*near*far)/(far+near-z*(far-near)),near+z*(far-near),float(is_ortho));}vec3 get_view_position(vec2 uv_coords){float linear_depth=linearize_depth(texture(texture_depth,uv_coords).x);return uv_to_view_space(uv_coords,linear_depth);}vec3 min_difference(vec3 p,vec3 right,vec3 left){vec3 v1=right-p;vec3 v2=p-left;return(dot(v1,v1)<dot(v2,v2))? v1 : v2;}vec3 rebuild_normal(in vec2 uv,in vec3 p){vec2 one_over_resolution=1.0/resolution;vec3 r=get_view_position(uv+vec2(one_over_resolution.x,0));vec3 l=get_view_position(uv+vec2(-one_over_resolution.x,0));vec3 t=get_view_position(uv+vec2(0,one_over_resolution.y));vec3 b=get_view_position(uv+vec2(0,-one_over_resolution.y));return normalize(cross(min_difference(p,r,l),min_difference(p,t,b)));}float falloff(float distance_squared){float neg_inv_r2=-1.0/(radius_of_influence*radius_of_influence);return distance_squared*neg_inv_r2+1.0;}float ao_contribution(vec3 P,vec3 N,vec3 S){vec3 to_sample=S-P;float norm_squared=dot(to_sample,to_sample);float norm=sqrt(norm_squared);float cos_theta=dot(N,to_sample)/max(norm,1e-4);return clamp(cos_theta-bias,0.0,1.0)*clamp(falloff(norm_squared),0.0,1.0);}float compute_ambient_occlusion(vec2 uv,float radius_in_screen_space,vec3 pc,vec3 view_space_n){vec2 one_over_resolution=1.0/resolution;ivec2 noise_uv=ivec2(gl_FragCoord.xy)&ivec2(127);float noise=texelFetch(texture_blue_noise,noise_uv,0).r;noise=fract(noise+0.61803398875*float(frame_index));float theta=noise*2.0*3.1415;float ct=cos(theta);float st=sin(theta);float step_size=radius_in_screen_space/(num_steps+1.0);const float angle_step=2.0*pi/num_directions;float contribution=0.0;for(int i=0;i<int(num_directions);++i){float current_pixel=step_size+1.0;for(int j=0;j<int(num_steps);++j){int index=i*int(num_steps)+j;vec2 blue_noise_sample=blue_noise_in_disk[index];vec2 disk_point;disk_point.x=blue_noise_sample.x*ct-blue_noise_sample.y*st;disk_point.y=blue_noise_sample.x*st+blue_noise_sample.y*ct;vec2 sample_direction=disk_point;vec2 snapped_uv=round(current_pixel*sample_direction)*one_over_resolution+uv;vec3 ps=get_view_position(snapped_uv);current_pixel+=step_size;contribution+=ao_contribution(pc,view_space_n,ps);}}float mult=1.0/(1.0-bias);contribution*=mult/(num_directions*num_steps);return clamp(1.0-contribution*2.0,0.0,1.0);}
#define USE_GBUFFER_NORMALS
void main(){vec3 view_space_p=get_view_position(v_uv);
#ifdef USE_GBUFFER_NORMALS
vec3 view_space_n=texture(texture_normals,v_uv).rgb;view_space_n.z*=-1.0;
#else
vec3 view_space_n=-rebuild_normal(v_uv,view_space_p);
#endif
float radius_ss=max(radius_in_screen_space/(is_ortho ? 1.0 : view_space_p.z),num_steps+1.0);float ao=compute_ambient_occlusion(v_uv,radius_ss,view_space_p,view_space_n);float final=pow(ao,exponent);if(view_space_p.z>=far){final=1.0;}vec3 color=mix(ao_color,vec3(1.0),final);if(fog_enabled){float fog_linear=smoothstep(fog_near,fog_far,view_space_p.z);vec3 world_p=(camera_world_matrix*vec4(view_space_p.xy,-view_space_p.z,1.0)).xyz;vec3 cam_pos=camera_world_matrix[3].xyz;float fog_height=height_fog_factor(world_p-cam_pos,max(length(world_p-cam_pos),1e-6),cam_pos);float w_linear=1.0-step(0.5,fog_mode)+step(1.5,fog_mode);float w_height=step(0.5,fog_mode);float fog_factor=1.0-(1.0-fog_linear*w_linear)*(1.0-fog_height*w_height);color=mix(color,vec3(1.0),fog_factor);}gl_FragColor=vec4(color,1.0);}`,uniforms:{near:new rt(null),far:new rt(null),fov:new rt(null),proj_info:new rt(new ie),is_ortho:new rt(!1),resolution:new rt(new _t),radius_of_influence:new rt(8),radius_in_screen_space:new rt(1),exponent:new rt(1),ao_color:new rt(new Mt),bias:new rt(.5),texture_depth:new rt(null),texture_normals:new rt(null),texture_blue_noise:new rt(null),frame_index:new rt(0),fog_enabled:new rt(!1),fog_near:new rt(1),fog_far:new rt(1e3),fog_mode:new rt(0),fog_height_params:new rt(new Mt(.005,.01,0)),camera_world_matrix:new rt(new En)}}),this.radius=128,this.aoColor={r:0,g:0,b:0},this.bias=.5,this.hbaoMaterial.uniforms.texture_depth.value=this.gBuffer.depthTexture,this.hbaoMaterial.uniforms.texture_normals.value=this.gBuffer.texture,this.needsSwap=!0,this.aaBuffer=new se(e,i,{minFilter:jt,magFilter:jt,wrapS:Re,wrapT:Re,depthBuffer:!1,type:ze})}_ensureEffectPass(){if(this.effectPass)return this.effectPass;let t=new Yo({preset:Zo.ULTRA,edgeDetectionMode:Ko.COLOR});t.addEventListener("load",()=>this.onSmaaTexturesLoaded?.()),this.effectPass=new Ni(this.camera,t),this._initializeArgs&&this.effectPass.initialize(...this._initializeArgs);let n=this._runHalfRes?.5:1;return this.effectPass.setSize(this._width*n,this._height*n),this.effectPass}initialize(t,n,e){super.initialize(t,n,e),this._initializeArgs=[t,n,e],this.effectPass?.initialize(t,n,e)}setBlueNoiseTexture(t){this.hbaoMaterial.uniforms.texture_blue_noise.value=t}setSize(t,n){this._width=t,this._height=n,this.depthBufferHighRes.setSize(t,n);let e=this._runHalfRes?.5:1,i=t*e,a=n*e;this.gBuffer.setSize(i,a),this.aoBuffer.setSize(i,a),this.hbaoMaterial.uniforms.resolution.value.set(i,a),this.aaBuffer.setSize(i,a),this.effectPass?.setSize(i,a)}get runHalfRes(){return this._runHalfRes}set runHalfRes(t){this._runHalfRes=t,this.setSize(this._width,this._height)}setCamera(t){this.splineCamera=t}setScene(t){this.splineScene=t}setDepthTexture(t){this.depthBufferHighRes.depthTexture=t,zn.uniforms.texture_depth_hrez.value=t,zn.needsUpdate=!0}render(t,n,e){let i=null,a=null,r=null,o=null,l=s=>{t.setViewport(0,0,s.width,s.height)};this.sanitizeViewport&&(i=new ie,a=new ie,t.getViewport(i),t.getScissor(a),r=t.getScissorTest(),o=t.getRenderTarget(),t.setScissorTest(!1)),this.splineScene.overrideMaterial=la;let u=this.splineCamera.layers.mask;if(this.splineCamera.layers.set(5),t.setRenderTarget(this.gBuffer),this.sanitizeViewport&&l(this.gBuffer),t.clear(),t.render(this.splineScene,this.splineCamera),this.runHalfRes&&(la.colorWrite=!1,t.setRenderTarget(this.depthBufferHighRes),this.sanitizeViewport&&l(this.depthBufferHighRes),t.clear(),t.render(this.splineScene,this.splineCamera),la.colorWrite=!0,t.state.buffers.color.setMask(!0)),this.splineScene.overrideMaterial=null,this.splineCamera.layers.mask=u,this.hbaoMaterial.uniforms.radius_of_influence.value=this.radius,this.hbaoMaterial.uniforms.ao_color.value.set(this.aoColor.r,this.aoColor.g,this.aoColor.b),this.hbaoMaterial.uniforms.bias.value=this.bias,this.hbaoMaterial.uniforms.fog_enabled.value=this.fogEnabled,this.hbaoMaterial.uniforms.fog_near.value=this.fogNear,this.hbaoMaterial.uniforms.fog_far.value=this.fogFar,this.hbaoMaterial.uniforms.fog_mode.value=this.fogMode,this.hbaoMaterial.uniforms.fog_height_params.value.copy(this.fogHeightParams),this.hbaoMaterial.uniforms.camera_world_matrix.value.copy(this.splineCamera.matrixWorld),this.hbaoMaterial.uniforms.frame_index.value=this.frameIndex,this.frameIndex++,this.splineCamera.isPerspectiveCamera){this.hbaoMaterial.uniforms.near.value=this.splineCamera.perspCamera.near,this.hbaoMaterial.uniforms.far.value=this.splineCamera.perspCamera.far;let s=this.splineCamera.perspCamera.projectionMatrix.elements,p=2/s[0],S=2/s[5],g=-(1-s[8])/s[0],b=-(1+s[9])/s[5];this.hbaoMaterial.uniforms.proj_info.value.set(p,S,g,b);let f=this.splineCamera.perspCamera.fov*(Math.PI/180),w=this.hbaoMaterial.uniforms.resolution.value.y/(2*Math.tan(.5*f)),v=.5*this.hbaoMaterial.uniforms.radius_of_influence.value*w;this.hbaoMaterial.uniforms.radius_in_screen_space.value=v,this.hbaoMaterial.uniforms.is_ortho.value=!1}else{this.hbaoMaterial.uniforms.near.value=this.splineCamera.orthoCamera.near,this.hbaoMaterial.uniforms.far.value=this.splineCamera.orthoCamera.far;let s=this.splineCamera.orthoCamera.projectionMatrix.elements,p=2/s[0],S=2/s[5],g=-(1+s[12])/s[0],b=-(1-s[13])/s[5];this.hbaoMaterial.uniforms.proj_info.value.set(p,S,g,b);let f=this.hbaoMaterial.uniforms.resolution.value.y/S*.5,w=this.hbaoMaterial.uniforms.radius_of_influence.value*f;this.hbaoMaterial.uniforms.radius_in_screen_space.value=w,this.hbaoMaterial.uniforms.is_ortho.value=!0}let c=t.aoRenderTarget;if(this.runHalfRes)this.fullscreenMaterial=this.hbaoMaterial,t.setRenderTarget(this.aoBuffer),this.sanitizeViewport&&l(this.aoBuffer),t.clear(),t.render(this.scene,this.camera),this.fullscreenMaterial=zn,zn.uniforms.texture_ao_lrez.value=this.aoBuffer.texture,zn.uniforms.texture_depth_lrez.value=this.gBuffer.depthTexture,zn.uniforms.texture_depth_hrez.value=this.depthBufferHighRes.depthTexture,t.setRenderTarget(c),this.sanitizeViewport&&l(c),t.clear(),t.render(this.scene,this.camera);else{this.fullscreenMaterial=this.hbaoMaterial,t.setRenderTarget(this.aaBuffer),this.sanitizeViewport&&l(this.aaBuffer),t.clear(),t.render(this.scene,this.camera);let s=this._ensureEffectPass();s.renderToScreen=!1,s.render(t,this.aaBuffer,c)}this.sanitizeViewport&&i&&a&&r!==null&&(t.setRenderTarget(o),t.setViewport(i.x,i.y,i.z,i.w),t.setScissor(a.x,a.y,a.z,a.w),t.setScissorTest(r))}dispose(){super.dispose(),this.gBuffer.dispose(),this.depthBufferHighRes.dispose(),this.aoBuffer.dispose(),this.aaBuffer.dispose(),this.effectPass?.dispose(),this.hbaoMaterial.dispose(),this.splineScene=null,this.splineCamera=null}},uf=class extends mi{constructor(){super(new _e({vertexShader:`
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fragmentShader:`
uniform sampler2D tInput;
uniform sampler2D tMap;
uniform vec2 resolution;
varying vec2 vUv;

uniform vec2 uResolution;
uniform vec2 uCoords;


float rectangle(vec2 st, vec2 size) {
    size = vec2(0.5) - size * 0.5;
    vec2 uv = vec2(step(size.x, st.x), step(size.y, st.y));
    uv *= vec2(step(size.x, 1.0 - st.x), step(size.y, 1.0 - st.y));

    return uv.x * uv.y;
}

uniform vec2 uSize;
uniform float uScale;
uniform float uDPR;
uniform float uCurrent;
uniform vec3 uSceneColor;

void main() {
    vec2 screenUv = gl_FragCoord.xy / uResolution.xy;
    screenUv *= 1.0 / uDPR;

    vec2 center = vec2(0.5, -0.5);
    vec2 outsideUv = screenUv;
    outsideUv += center;
    outsideUv -= uCoords.xy / uResolution.xy;
    outsideUv = (outsideUv - 0.5) + 0.5;
    outsideUv -= center;
    vec2 s = (uSize / uResolution) * uScale;
    float isOutside = 1.0 - rectangle(outsideUv, s);
    
    vec2 mid = vec2(0.5);
    vec2 insideUv = (screenUv - mid + s * mid) / s;
    vec4 background = texture2D(tInput, screenUv);
    vec4 image = texture2D(tMap, insideUv);
    gl_FragColor = mix(image, background, isOutside);
}
`,uniforms:{tInput:new rt(null),tMap:new rt(null),uResolution:new rt(new _t),uSize:new rt(new _t),uCoords:new rt(new _t),uScale:new rt(1),uSceneColor:new rt(new oe(16711680)),uDPR:new rt(1),uCurrent:new rt(0)}}),"tInput"),this.needsSwap=!0}get uniforms(){return this.fullscreenMaterial.uniforms}get texture(){return this.uniforms.tMap.value}set texture(t){this.uniforms.tMap.value=t}},df=[],ff=class extends mi{constructor(){super(new _e({vertexShader:`
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fragmentShader:`
uniform sampler2D toScene;
uniform sampler2D fromScene;
uniform vec2 resolution;

uniform vec2 uResolution;
uniform float uDPR;

uniform float mixRatio;
uniform sampler2D tMixTexture;
uniform int useTexture;
uniform float threshold;

void main() {
	vec2 screenUv = gl_FragCoord.xy / uResolution.xy;
	screenUv *= 1.0 / uDPR;

	vec4 texel1 = texture2D( fromScene, screenUv );
	vec4 texel2 = texture2D( toScene, screenUv );

	if (useTexture==1) {
		
		vec4 transitionTexel = texture2D( tMixTexture, screenUv );
		float r = mixRatio * (1.0 + threshold * 2.0) - threshold;
		float mixf=clamp((transitionTexel.r - r)*(1.0/threshold), 0.0, 1.0);
		
		gl_FragColor = mix( texel1, texel2, mixf );
	} else {
		
		gl_FragColor = mix( texel1, texel2, mixRatio );
		
	}
}
`,uniforms:{toScene:new rt(null),fromScene:new rt(null),uResolution:new rt(new _t),uDPR:new rt(1),mixRatio:new rt(0),threshold:new rt(.1),useTexture:new rt(0),tMixTexture:{value:df[0]}}}),"toScene"),this.needsSwap=!0}get uniforms(){return this.fullscreenMaterial.uniforms}get texture(){return this.uniforms.fromScene.value}set texture(t){this.uniforms.fromScene.value=t}},pf=class extends mi{constructor(){super(new _e({vertexShader:`
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fragmentShader:`
uniform sampler2D inputBuffer;
uniform sampler2D blurredInputBuffer;
uniform sampler2D overlay;
uniform float blurIntensity;

uniform vec2 uResolution;
uniform float uDPR;

void main() {
	vec2 screenUv = gl_FragCoord.xy / uResolution.xy;
	screenUv *= 1.0 / uDPR;

	vec4 texel1 = texture2D( overlay, screenUv );
	vec4 texel2 = texture2D( inputBuffer, screenUv );
	vec4 texel3 = texture2D( blurredInputBuffer, screenUv );

	float blurMask2 = max(sign(texel1.a), 0.0) * blurIntensity;
    gl_FragColor = mix( mix(texel2, texel3, blurMask2), texel1, texel1.a );
}
`,uniforms:{inputBuffer:new rt(null),blurredInputBuffer:new rt(null),overlay:new rt(null),uResolution:new rt(new _t),uDPR:new rt(1),blurIntensity:new rt(0)}})),this._blurEnabled=!1,this.blurTarget=new se(1,1,{minFilter:jt,magFilter:jt,wrapS:Re,wrapT:Re}),this.blurPass=new Pc({width:window.innerWidth,height:window.innerHeight,kernelSize:Dc.HUGE,resolutionScale:.25}),this.blurPass.renderToScreen=!1,this.uniforms.blurredInputBuffer.value=this.blurTarget.texture}get uniforms(){return this.fullscreenMaterial.uniforms}get texture(){return this.uniforms.overlay.value}set texture(t){this.uniforms.overlay.value=t}setResolution(t,n,e=1){this.uniforms.uResolution.value.set(t,n),this.uniforms.uDPR.value=e,this.blurPass.setSize(t,n),this.blurTarget.setSize(t,n),this.blurPass.setSize(t,n)}get uiCanvas(){return this._uiCanvas}set uiCanvas(t){this._uiCanvas=t,t.texture&&(this.uniforms.overlay.value=t.texture);let n=t.frame;if(n){let e=n.data.backgroundBlur,i=e.radius;this._blurEnabled=e.enabled,this.uniforms.blurIntensity.value=this._blurEnabled?1:0,this.blurPass.scale=i/3}}render(t,n,e,i,a){this._blurEnabled&&(this.blurPass.setDepthTexture(this.getDepthTexture()),this.blurPass.render(t,n,this.blurTarget,i,a)),super.render(t,n,e,i,a)}dispose(){super.dispose(),this.blurTarget.dispose(),this.blurPass.dispose(),this.fullscreenMaterial.dispose(),this._uiCanvas=void 0}},hf=class extends mi{constructor(){super(new _e({vertexShader:`
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fragmentShader:`
uniform sampler2D tInput;
uniform sampler2D tOverlayImage;
varying vec2 vUv;
uniform vec2 uResolution;
uniform vec2 uRightBottom;
uniform vec2 uImageSize;
uniform float uScale;
uniform float uDPR;

vec3 blendNormal(vec3 base, vec3 blend) {
	return blend;
}

vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
	return (blendNormal(base, blend) * opacity + base * (1.0 - opacity));
}

vec4 drawFixedSizeImage(sampler2D image, vec2 screenUV, vec2 imageSize, vec2 imageCoords, vec2 screenSize, float dpr) {
	vec2 uv = (screenUV * screenSize * dpr - imageCoords) / (imageSize * dpr);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
		return vec4(0.0);
	}
	return texture2D(image, uv);
}

void main() {
    vec2 screenUV = gl_FragCoord.xy / (uResolution.xy * uDPR);
	vec2 imageCoords = vec2(uResolution.x * uDPR - uImageSize.x * uScale * uDPR - uRightBottom.x * uDPR, uRightBottom.y * uDPR);
    vec4 background = texture2D(tInput, screenUV);
    vec4 image = drawFixedSizeImage(tOverlayImage, screenUV, uImageSize * uScale, imageCoords, uResolution, uDPR);
    gl_FragColor = vec4(blendNormal(background.rgb, image.rgb, image.a), max(background.a, image.a));
}
`,uniforms:{tInput:new rt(null),tOverlayImage:new rt(null),uResolution:new rt(new _t),uImageSize:new rt(new _t),uRightBottom:new rt(new _t(20,20)),uScale:new rt(.25),uDPR:new rt(1)}}),"tInput")}get uniforms(){return this.fullscreenMaterial.uniforms}get texture(){return this.uniforms.tOverlayImage.value}set texture(t){this.uniforms.tOverlayImage.value=t;let n=t.image;this.uniforms.uImageSize.value.set(n.width,n.height)}},mf=class extends mi{constructor(){super(new _e({vertexShader:`
varying vec2 vUv;
void main() {
	vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fragmentShader:`
uniform sampler2D inputBuffer;
varying vec2 vUv;

vec3 SrgbToLinear(vec3 color) {
	
	vec3 sRGB = color.rgb;
	color.rgb = sRGB * (sRGB * (sRGB * 0.305306011 + 0.682171111) + 0.012522878);
	return color;
}

void main() {
	vec4 texel = texture2D(inputBuffer, vUv);
	texel.rgb = SrgbToLinear(texel.rgb);
    gl_FragColor = texel;
}
`,uniforms:{inputBuffer:new rt(null),uResolution:new rt(new _t),uDPR:new rt(1)}}),"inputBuffer"),this.needsSwap=!0}get uniforms(){return this.fullscreenMaterial.uniforms}};function Mo(t,n){return n&&n.enabled&&t.push(n.effect),t}var vf=t=>Object.values(Gr).includes(t)?t:Gr.NORMAL,gf=class extends Ro{constructor(t,n){super(),this._needsDOFResize=n,this.postprocessingState=al.defaultData,this._scene=new Po,this._camera=new yi,this.effects=new Map,this.blueNoiseTexture=new Pi,this._renderToScreen=!0,this._isUIOverlayEnabled=!1,this.timer=new rl,this.renderer=t,this.debug=!1;for(let[i,a]of Lc())this.effects.set(i,a());this.effectComposer=new of(this.renderer),this.effectComposer.autoRenderToScreen=!1,this.opaquePass=new Ma(!0,this.scene,this.camera),this.opaquePass.clear=!0,this.transmissionPass=new af(this.scene,this.camera,this.renderer),this.aoPass=new cf(this.scene,this.camera),this.taaPass=new nf,this.taaPass.renderToScreen=!1,this.helperPass=new lf(this.camera),this.helperPass.renderToScreen=!1;let e=()=>{this.dispatchEvent({type:"smaaloaded"})};this.aoPass.onSmaaTexturesLoaded=e,this.helperPass.onSmaaTexturesLoaded=e,this.stylesOverlayPass=new uf,this.stylesOverlayPass.enabled=!1,this.uiOverlayPass=new pf,this.uiOverlayPass.enabled=!1,this.logoOverlayPass=new hf,this.logoOverlayPass.enabled=!1,this.sceneTransitionPass=new ff,this.sceneTransitionPass.enabled=!1,this.srgbToLinear=new mf,this.srgbToLinear.enabled=!1,this._initCopyPass(),this._initPasses()}set overlayTexture(t){t!==void 0?(this.stylesOverlayPass.texture=t,this.stylesOverlayPass.enabled=!0):this.stylesOverlayPass.enabled=!1}get overlayTexture(){return this.stylesOverlayPass.texture}set sceneHelpers(t){this.helperPass.sceneHelpers=t}get sceneHelpers(){return this.helperPass.sceneHelpers}set sceneHelpersOnTop(t){this.helperPass.sceneHelpersOnTop=t}get sceneHelpersOnTop(){return this.helperPass.sceneHelpersOnTop}get scene(){return this._scene}set scene(t){this._scene=t,this.opaquePass.setScene(t),this.transmissionPass.setScene(t),this.aoPass.setScene(t)}get camera(){return this._camera}set camera(t){let n=this._camera!==t;this._camera=t,this.opaquePass.setCamera(t),this.transmissionPass.setCamera(t),n&&this.transmissionPass.updatePasses(this.renderer),this.aoPass.setCamera(t),this.helperPass.setCamera(t),this.effects.get("depthOfField")?.setCamera(t)}updateRenderToScreen(){let t=!1;for(let n=this.effectComposer.passes.length-1;n>=0;n--){let e=this.effectComposer.passes[n];e.enabled!==!0||t||!this._renderToScreen?e.renderToScreen=!1:(e.renderToScreen=!0,t=!0)}}get isUIOverlayEnabled(){return this._isUIOverlayEnabled}disableUIOverlay(){this._isUIOverlayEnabled=!1}enableUIOverlay(){this._isUIOverlayEnabled=!0}disableHelpers(){this.helperPass.enabled=!1,this.updateRenderToScreen()}enableHelpers(){this.helperPass.enabled=!0,this.updateRenderToScreen()}updateBlueNoiseTexture(t){this.blueNoiseTexture=new Pi(t,128,128),this.blueNoiseTexture.wrapS=ii,this.blueNoiseTexture.wrapT=ii,this.blueNoiseTexture.minFilter=Se,this.blueNoiseTexture.magFilter=Se,this.blueNoiseTexture.needsUpdate=!0}setAmbientOcclusionParams(t,n,e,i,a,r,o,l,u){this.aoPass.enabled=t,this.aoPass.radius=n,this.aoPass.bias=e,this.aoPass.aoColor=i,this.aoPass.fogEnabled=a,this.aoPass.fogNear=r,this.aoPass.fogFar=o,this.aoPass.fogMode=Sn.getModeIndex({mode:l.mode}),this.aoPass.fogHeightParams.set(l.density,l.heightFalloff,l.heightBase),this.aoPass.runHalfRes!==!u&&(this.aoPass.runHalfRes=!u)}setTransmissionPassEnabled(t){this.transmissionPass.enabled=t,this.opaquePass.hasTransmissionPass=t}_initPasses(){if(this.uvEffectPass?.dispose(),this.effectPass?.dispose(),this.effectComposer.removeAllPasses(),this.transmissionPass.updatePasses(this.renderer),this.effectComposer.addPass(this.aoPass),this.effectComposer.addPass(this.opaquePass),this.effectComposer.addPass(this.transmissionPass),this.effectComposer.addPass(this.taaPass),this.postprocessingState.enabled){let t=[this.effects.get("pixelation")].reduce(Mo,[]);t.length>0&&(this.uvEffectPass=new Ni(this.camera,...t),this.uvEffectPass.renderToScreen=!1,this.uvEffectPass.encodeOutput=!1,this.effectComposer.addPass(this.uvEffectPass));let n=[this.effects.get("chromaticAberration"),this.effects.get("bloom"),this.effects.get("depthOfField"),this.effects.get("colorAverage"),this.effects.get("hueSaturation"),this.effects.get("brightnessContrast"),this.effects.get("vignette"),this.effects.get("noise")].reduce(Mo,[]);if(n.length>0&&(this.effectPass=new Ni(this.camera,...n),this.effectPass.renderToScreen=!1,this.effectPass.encodeOutput=!1,this.effectComposer.addPass(this.effectPass),this._needsDOFResize&&this.effects.get("depthOfField")?.enabled&&window!==void 0)){let e=this.renderer.viewportWidth,i=this.renderer.viewportHeight;this.renderer.setSize(e-1,i-1),this.renderer.setSize(e,i)}}this.effectComposer.addPass(this.stylesOverlayPass),this.effectComposer.addPass(this.uiOverlayPass),this.effectComposer.addPass(this.sceneTransitionPass),this.effectComposer.addPass(this.helperPass),this.effectComposer.addPass(this.srgbToLinear),this.effectComposer.addPass(this.logoOverlayPass)}_initCopyPass(){if(this._savePass)return;let t=new _t;this.renderer.getDrawingBufferSize(t),this._rt=new se(t.x,t.y,{depthBuffer:!1,stencilBuffer:!1,wrapS:ii,wrapT:ii}),this._rt.samples=0,this.renderer.outputColorSpace===tn&&(this._rt.texture.colorSpace=tn),this._savePass=new ma(this._rt,!1),this._savePass.renderToScreen=!1}setCopyPass(t){this._rt=t,this._savePass=new ma(this._rt,!1),this.renderToScreen=!1}get renderToScreen(){return this._renderToScreen}set renderToScreen(t){if(this._renderToScreen===t)return;let n=this.effectComposer;!n||(t===!0?n.removePass(this._savePass):n.addPass(this._savePass),this._renderToScreen=t,this.updateRenderToScreen())}get sceneTransitionFromTexture(){return this.sceneTransitionPass.texture}set sceneTransitionFromTexture(t){t!==this.sceneTransitionPass.texture&&(t!==null?this.sceneTransitionPass.enabled=!0:(this.sceneTransitionPass.enabled=!1,this.updateRenderToScreen()),this.sceneTransitionPass.texture=t)}setWatermark(t){this.logoOverlayPass.enabled=t!==null,t&&(this.logoOverlayPass.texture=t)}get texture(){return this._rt&&this._rt.texture}get renderTarget(){return this._rt}updatePostprocessing(t){let{enabled:n,...e}=t,i=!1;n!==this.postprocessingState.enabled&&(i=!0);for(let a of Object.entries(e)){let r=a[1],o=this.effects.get(a[0]);if(!o){let l=Uc(a[0]);l?(o=l(),this.effects.set(a[0],o),a[0]==="depthOfField"&&o.setCamera(this._camera)):r?.enabled&&Nc(a[0],"webgl")}if(o){o.enabled!==r.enabled&&(i=!0),o.enabled=r.enabled;for(let[l,u]of Object.entries(r))l==="blendFunction"?o.blendFunction=vf(u):o[l]=u}}this.postprocessingState=t,i&&this._initPasses()}render(){this.renderer.shadowMap.type===ca&&this._normalizeShadowDepthTextures(),this.timer.update(),this.effectComposer.render(this.timer.getDelta())}_normalizeShadowDepthTextures(){this._scene.traverse(t=>{let n=t;if(!n.isLight)return;let e=n.shadow?.map?.depthTexture;e&&e.compareFunction!==null&&(e.compareFunction=null,e.minFilter=Se,e.magFilter=Se,e.needsUpdate=!0)})}setScissor(t,n,e,i){t instanceof ie?(this.effectComposer.inputBuffer.scissor.set(t.x,t.y,t.z,t.w),this.effectComposer.outputBuffer.scissor.set(t.x,t.y,t.z,t.w)):(this.effectComposer.inputBuffer.scissor.set(t,n,e,i),this.effectComposer.outputBuffer.scissor.set(t,n,e,i));let a=this.renderer.getPixelRatio();this.effectComposer.inputBuffer.scissor.multiplyScalar(a),this.effectComposer.outputBuffer.scissor.multiplyScalar(a),this.renderer.setScissor(t,n,e,i)}setScissorTest(t){this.effectComposer.inputBuffer.scissorTest=t,this.effectComposer.outputBuffer.scissorTest=t,this.renderer.setScissorTest(t)}setViewport(t,n,e,i){t instanceof ie?(this.effectComposer.inputBuffer.viewport.copy(t),this.effectComposer.outputBuffer.viewport.copy(t)):(this.effectComposer.inputBuffer.viewport.set(t,n,e,i),this.effectComposer.outputBuffer.viewport.set(t,n,e,i))}resize(t,n,e){if(this.effectComposer.setSize(t,n,e),this._rt){let i=this.renderer.getPixelRatio();this._rt.setSize(t*i,n*i)}}dispose(){this.uvEffectPass?.dispose(),this.effectPass?.dispose(),this.effectComposer.dispose(),this.blueNoiseTexture.dispose(),this._rt?.dispose(),this.effects.forEach(t=>t.dispose()),this.effects.clear(),this._scene=void 0,this._camera=void 0,this.renderer=void 0}},je=new zi,yo=new _t,Mf=class extends Dd{constructor(t){super(t),this._pixelRatio=this.getPixelRatio(),this.viewportWidth=1,this.viewportHeight=1,this.resolution=new _t,this.dummyCamera=new yi,this.sceneTransitionDuration=0,this.sceneTransitionTimeRemaining=-1,this.manageShadowUpdates=!1,this.forceShadowUpdates=!1,this.clear=(a=!0,r=!0,o=!0)=>{let l=this.getContext(),u=0;a&&(u|=l.COLOR_BUFFER_BIT),r&&(u|=l.DEPTH_BUFFER_BIT),o&&(u|=l.STENCIL_BUFFER_BIT),l.clear(u),l.clearBufferfv(l.COLOR,1,[0,0,0,1])},(()=>{if(!wo.test(pt.lights_pars_begin)){if(pt.lights_pars_begin.includes(bo))return;throw new Error("spe: could not find getDistanceAttenuation in lights_pars_begin — three shader chunk layout changed")}pt.lights_pars_begin=pt.lights_pars_begin.replace(wo,bo)})(),this.pipeline=new gf(this,t?.needsDOFResize??!1),this.autoClear=!1;let n=this.renderBufferDirect;this.renderBufferDirect=(a,r,o,l,u,c)=>{qs(l)&&n.call(this,a,r,o,l.getDepthPrepassTwin(l.side),u,c),n.call(this,a,r,o,l,u,c)};let e=this.setPixelRatio.bind(this),i=this.setSize.bind(this);this.shadowMap.enabled=!0,this.shadowMap.type=ca,this.dummyCamera.matrixAutoUpdate=!1,this.domElement.removeAttribute("data-engine"),this._applyPreferredDrawingBufferColorSpace(),this.setPixelRatio=a=>{this._pixelRatio!==a&&(this._pixelRatio=a,e(a))},this.setSize=(a,r,o=!0)=>{(this.viewportWidth!==a||this.viewportHeight!==r)&&(this.viewportWidth=a,this.viewportHeight=r,i(a,r,o),this.normalRenderTarget?.setSize(a*this._pixelRatio,r*this._pixelRatio),this._resizeTransmission(a,r),this.transmissionDepthTarget?.setSize(a*this._pixelRatio/2,r*this._pixelRatio/2),this.pipeline.resize(a,r,o))},this._superDispose=this.dispose,this.dispose=this._currentDispose}_applyPreferredDrawingBufferColorSpace(){let t=this.getContext();if(t&&"drawingBufferColorSpace"in t)try{t.drawingBufferColorSpace="display-p3"}catch(n){console.warn(n)}}get outputColorSpace(){return super.outputColorSpace}set outputColorSpace(t){super.outputColorSpace=t,this._applyPreferredDrawingBufferColorSpace()}createAORenderTarget(){this.aoRenderTarget===void 0&&(this.aoRenderTarget=new se(this.viewportWidth*this._pixelRatio,this.viewportHeight*this._pixelRatio,{generateMipmaps:!1,minFilter:jt,magFilter:jt,wrapS:Re,wrapT:Re,depthBuffer:!1}))}_resizeTransmission(t,n){this.transmissionRenderTarget?.setSize(t*this._pixelRatio/(this.hdTransmission?1:2),n*this._pixelRatio/(this.hdTransmission?1:2)),this.aoRenderTarget?.setSize(t*this._pixelRatio/1,n*this._pixelRatio/1)}get hdTransmission(){return lt.transmissionLod.value===1}set hdTransmission(t){lt.transmissionLod.value=t===!0?1:2,this._resizeTransmission(this.viewportWidth,this.viewportHeight)}createTransmissionRenderTarget(){this.transmissionRenderTarget===void 0&&(this.transmissionRenderTarget=new se(this.viewportWidth*this._pixelRatio/(this.hdTransmission?1:2),this.viewportHeight*this._pixelRatio/(this.hdTransmission?1:2),{generateMipmaps:!0,minFilter:Pn,magFilter:jt,wrapS:Re,wrapT:Re,depthBuffer:!1}),this.transmissionDepthTarget=new se(this.viewportWidth*this._pixelRatio/2,this.viewportHeight*this._pixelRatio/2,{minFilter:Se,magFilter:Se,depthBuffer:!1}))}createNormalRenderTarget(t){let n=t.outline&&t.cavity?"both":t.cavity?"normals":"hash";this.normalRenderTarget!==void 0&&this.normalRenderTargetFlavor!==n&&(this.normalRenderTarget.depthTexture?.dispose(),this.normalRenderTarget.dispose(),this.normalRenderTarget=void 0),this.normalRenderTarget===void 0&&(this.normalRenderTarget=new se(this.viewportWidth*this._pixelRatio,this.viewportHeight*this._pixelRatio,{count:n==="both"?2:1,generateMipmaps:!1,minFilter:Se,magFilter:Se,type:n==="normals"?Ye:ze,depthTexture:new vn(this.viewportWidth*this._pixelRatio,this.viewportHeight*this._pixelRatio)}),n==="both"&&(this.normalRenderTarget.textures[1].type=Ye),this.normalRenderTargetFlavor=n)}renderNormal(t,n,e){if(this.normalRenderTarget){this.setClearColor(0),e.layers.enable(8),e.layers.disable(0),e.layers.disable(3),n.traverseEntity(a=>{a.layers.isEnabled(8)&&(a.copyPreviousMatrix=!1)}),this.setRenderTarget(this.normalRenderTarget),this.clear(),Ws.value=e instanceof yi?(e.far-e.near)/1e4:1;let i=this.normalRenderTargetFlavor??"hash";n.overrideMaterial=i==="both"?ef:i==="normals"?tf:Qd,this.render(n,e),this.setClearColor(n.bgColor,n.bgColor.a),this.setRenderTarget(null),n.overrideMaterial=t.wireframeState?Ja:null,e.layers.enable(0),e.layers.enable(3),n.traverseEntity(a=>{a.layers.isEnabled(8)&&(a.copyPreviousMatrix=!0)})}}renderSplineSceneWithDummyCamera(t,n,e=1){this.dummyCamera.updateCameraState(n.dataPatched),this.dummyCamera.matrix.copy(n.matrixWorld);let i=n.height,a=n.width,r=this.viewportWidth/this.viewportHeight;a<i?a=i*r:i=a/r,this.dummyCamera.setViewplaneSize(a,i);for(let o=0;o<e;o++)this.renderSplineScene(t,this.dummyCamera)}renderSplineScene(t,n,{sceneHelpers:e=this.sceneHelpers,sceneHelpersOnTop:i=this.sceneHelpersOnTop,overrideTransmission:a,overrideNormal:r}={}){Zs(this);let o=t instanceof Qs?t.activePage:t,l=o.visible;o.visible=!0;let u=o.scene,c=tl.isSoft(o.data.shadow)?ca:si;if(this.shadowMap.type!==c&&(this.shadowMap.type=c,o.traverseEntity(w=>{let v=w;v.isLight&&v.shadow?.map&&(v.shadow.map.dispose(),v.shadow.map=null,v.shadow.needsUpdate=!0)}),u.markShadowsDirty()),this.setClearColor(o.bgColor,o.bgColor.a),o.penumbraSizeArray.forEach((w,v)=>{lt.penumbraSize.value[v]=w}),lt.pixelRatioNode.value=this.getPixelRatio(),this.resolution.x!==0&&this.resolution.y!==0?lt.resolution.value.set(this.resolution.x,this.resolution.y):lt.resolution.value.set(this.viewportWidth*this._pixelRatio,this.viewportHeight*this._pixelRatio),r!==void 0)lt.normalRenderTarget.value=r,lt.normalRenderTargetDepth.value=je,lt.normalViewRenderTarget.value=je;else if(u.needsNormal()){let w=u.normalPassNeeds();this.createNormalRenderTarget(w);let v=this.normalRenderTargetFlavor,x=this.normalRenderTarget.textures;lt.normalRenderTarget.value=v==="normals"?je:x[0],lt.normalRenderTargetDepth.value=this.normalRenderTarget.depthTexture,lt.normalViewRenderTarget.value=v==="both"?x[1]:v==="normals"?x[0]:je,this.renderNormal(u,o,n)}Un.spe_fogMode.value=Sn.getModeIndex({mode:o.fogMode}),Un.spe_fogHeightParams.value.set(o.fogDensity??Sn.getDensity({}),o.fogHeightFalloff??Sn.getHeightFalloff({}),o.fogHeightBase??Sn.getHeightBase({}));let s=o.data.ao,p=s.occlusion&&!0;if(p&&(this.createAORenderTarget(),lt.aoRenderTarget.value=this.aoRenderTarget.texture),lt.aoEnabled.value=p,this.pipeline.setAmbientOcclusionParams(p,s.radius,s.bias,o.aoColor,o.fog!==null,o.backupFog.near,o.backupFog.far,{mode:o.fogMode??"linear",density:o.fogDensity??Sn.getDensity({}),heightFalloff:o.fogHeightFalloff??Sn.getHeightFalloff({}),heightBase:o.fogHeightBase??Sn.getHeightBase({})},s.aoFullRes&&!Co),this.pipeline.aoPass.setBlueNoiseTexture(this.pipeline.blueNoiseTexture),this.pipeline.isUIOverlayEnabled&&o.uiCanvas?.enabled&&o.uiCanvas.texture&&o.uiCanvas.texture.image.width>0){let w=this.getSize(yo),v=this.getPixelRatio();(o.uiCanvas.width!==this.viewportWidth||o.uiCanvas.height!==this.viewportHeight||o.uiCanvas.dpr!==v)&&o.uiCanvas.applySize({width:this.viewportWidth,height:this.viewportHeight},v),o.uiCanvas.render(this),this.pipeline.uiOverlayPass.uiCanvas=o.uiCanvas,this.pipeline.uiOverlayPass.enabled=!0,this.pipeline.uiOverlayPass.setResolution(w.x,w.y,v),this.pipeline.updateRenderToScreen()}else this.pipeline.uiOverlayPass.enabled=!1,this.pipeline.updateRenderToScreen();if(this.pipeline.logoOverlayPass.enabled){let w=this.getSize(yo),v=this.getPixelRatio();this.pipeline.logoOverlayPass.uniforms.uResolution.value.set(w.x,w.y),this.pipeline.logoOverlayPass.uniforms.uDPR.value=v}let S=!1;if(a!==void 0)lt.transmissionRenderTarget.value=a,lt.transmissionRenderTargetDepth.value=je,this.pipeline.setTransmissionPassEnabled(!1);else{let w=u.needsTransmission();w&&(this.transmissionRenderTarget===void 0&&(S=!0),this.createTransmissionRenderTarget(),lt.transmissionRenderTarget.value=this.transmissionRenderTarget.texture,lt.aspectRatio.value=(g=this.viewportWidth)>=(b=this.viewportHeight)?new _t(b/g,1):new _t(1,g/b),lt.transmissionRenderTargetDepth.value=this.transmissionDepthTarget.texture),this.pipeline.setTransmissionPassEnabled(w)}var g,b;n.layers.enable(3),n.layers.enable(8),n.layers.enable(4),this.pipeline.sceneHelpers=e,this.pipeline.sceneHelpersOnTop=i,this.pipeline.taaPass.enabled=lt.taaEnabled.value,this.pipeline.scene=o,this.pipeline.camera=n,S&&this.pipeline.transmissionPass.updatePasses(this);let f=Ys(o.postprocessing);this.pipeline.postprocessingState!==f&&(this.pipeline.updatePostprocessing(f),!e&&!i&&this.pipeline.disableHelpers()),this.clearAlphaOverride!==void 0&&this.setClearAlpha(this.clearAlphaOverride),u.shapeBlendIntances.forEach(w=>{w.onBeforeShadowPass(this)}),this.manageShadowUpdates&&(this.shadowMap.autoUpdate=!1,(u.shadowsDirty||this.forceShadowUpdates)&&(this.shadowMap.needsUpdate=!0)),o.overrideMaterial=u.wireframeState?Ja:null,this.pipeline.render(),this.manageShadowUpdates&&(u.shadowsDirty=!1),lt.taaEnabled.value&&(lt.frameIndex.value=(lt.frameIndex.value+1)%16),n instanceof yi&&n.copyHistory(),o.visible=l}renderFromSceneForSceneTransitionPass(t,n,e){this.pipeline.renderToScreen=!1,this.pipeline.renderTarget,this.renderSplineScene(t,n),this.pipeline.sceneTransitionFromTexture=this.pipeline.renderTarget.texture,this.sceneTransitionDuration=e,this.sceneTransitionTimeRemaining=e,this.pipeline.renderToScreen=!0;let i=this.pipeline.sceneTransitionPass.uniforms;i.uDPR.value=window.devicePixelRatio,i.uResolution.value.set(this.domElement.width,this.domElement.height).divideScalar(window.devicePixelRatio)}_currentDispose(){this._superDispose(),this.pipeline.dispose(),this.aoRenderTarget?.dispose(),this.aoRenderTarget=void 0,this.transmissionRenderTarget?.dispose(),this.transmissionRenderTarget=void 0,this.transmissionDepthTarget?.dispose(),this.transmissionDepthTarget=void 0,this.normalRenderTarget?.depthTexture?.dispose(),this.normalRenderTarget?.dispose(),this.normalRenderTarget=void 0,this.normalRenderTargetFlavor=void 0,this.dummyCamera.dispose(),this.dummyCamera=void 0,lt.normalRenderTarget.value=je,lt.normalRenderTargetDepth.value=je,lt.normalViewRenderTarget.value=je,lt.transmissionRenderTarget.value=je,lt.transmissionRenderTargetDepth.value=je,lt.aoRenderTarget.value=je}};export{Mf as SplineRenderer,lt as rendererGlobals};
