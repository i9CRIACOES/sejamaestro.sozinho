import{o as b,t as w,l as T}from"./runtime-chunk-GFTBNL2W-Dz-r1c36.js";import{eb as G,ec as j,ed as H,dN as $,l as Z,bu as J,d9 as q,ee as F,ef as I,eg as E,eh as K,bD as Y,ei as ee,k as m,aP as V,M as g,J as N,a8 as te,B as R,q as ie,N as _,aQ as C,ai as A,ej as se,dW as W,G as U,c0 as O,dB as ne,ek as re,el as ae,em as oe,$ as D}from"./runtime-updater-QAQQJKLZ-tzBfN-Hn.js";import"./index-wefOy3Ss.js";var l=new oe,z=new m,L=new D,M=new D,Q=new D,le=class{constructor(e){this.geometry=e.geometry,this.randomFunction=Math.random,this.indexAttribute=this.geometry.index,this.positionAttribute=this.geometry.getAttribute("position"),this.normalAttribute=this.geometry.getAttribute("normal"),this.colorAttribute=this.geometry.getAttribute("color"),this.uvAttribute=this.geometry.getAttribute("uv"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(e){return this.weightAttribute=e?this.geometry.getAttribute(e):null,this}build(){let e=this.indexAttribute,t=this.positionAttribute,i=this.weightAttribute,s=e?e.count/3:t.count/3,n=new Float32Array(s);for(let o=0;o<s;o++){let u=1,h=3*o,c=3*o+1,f=3*o+2;e&&(h=e.getX(h),c=e.getX(c),f=e.getX(f)),i&&(u=i.getX(h)+i.getX(c)+i.getX(f)),l.a.fromBufferAttribute(t,h),l.b.fromBufferAttribute(t,c),l.c.fromBufferAttribute(t,f),u*=l.getArea(),n[o]=u}let r=new Float32Array(s),a=0;for(let o=0;o<s;o++)a+=n[o],r[o]=a;return this.distribution=r,this}setRandomGenerator(e){return this.randomFunction=e,this}sample(e,t,i,s){let n=this._sampleFaceIndex();return this._sampleFace(n,e,t,i,s)}_sampleFaceIndex(){let e=this.distribution[this.distribution.length-1];return this._binarySearch(this.randomFunction()*e)}_binarySearch(e){let t=this.distribution,i=0,s=t.length-1,n=-1;for(;i<=s;){let r=Math.ceil((i+s)/2);if(r===0||t[r-1]<=e&&t[r]>e){n=r;break}e<t[r]?s=r-1:i=r+1}return n}_sampleFace(e,t,i,s,n){let r=this.randomFunction(),a=this.randomFunction();r+a>1&&(r=1-r,a=1-a);let o=this.indexAttribute,u=3*e,h=3*e+1,c=3*e+2;return o&&(u=o.getX(u),h=o.getX(h),c=o.getX(c)),l.a.fromBufferAttribute(this.positionAttribute,u),l.b.fromBufferAttribute(this.positionAttribute,h),l.c.fromBufferAttribute(this.positionAttribute,c),t.set(0,0,0).addScaledVector(l.a,r).addScaledVector(l.b,a).addScaledVector(l.c,1-(r+a)),i!==void 0&&(this.normalAttribute!==void 0?(l.a.fromBufferAttribute(this.normalAttribute,u),l.b.fromBufferAttribute(this.normalAttribute,h),l.c.fromBufferAttribute(this.normalAttribute,c),i.set(0,0,0).addScaledVector(l.a,r).addScaledVector(l.b,a).addScaledVector(l.c,1-(r+a)).normalize()):l.getNormal(i)),s!==void 0&&this.colorAttribute!==void 0&&(l.a.fromBufferAttribute(this.colorAttribute,u),l.b.fromBufferAttribute(this.colorAttribute,h),l.c.fromBufferAttribute(this.colorAttribute,c),z.set(0,0,0).addScaledVector(l.a,r).addScaledVector(l.b,a).addScaledVector(l.c,1-(r+a)),s.r=z.x,s.g=z.y,s.b=z.z),n!==void 0&&this.uvAttribute!==void 0&&(L.fromBufferAttribute(this.uvAttribute,u),M.fromBufferAttribute(this.uvAttribute,h),Q.fromBufferAttribute(this.uvAttribute,c),n.set(0,0).addScaledVector(L,r).addScaledVector(M,a).addScaledVector(Q,1-(r+a))),this}};function B(e,t){let i=e,s=new Float32Array(4*t*t);for(let r=0;r<t*t;r++)s[4*r]=i[3*r],s[4*r+1]=i[3*r+1],s[4*r+2]=i[3*r+2],s[4*r+3]=0;let n=new _(s,t,t,C,A);return n.needsUpdate=!0,n}var P=class{constructor(e,t,i,s){this.type="SphereEmitterShape",this.targetMesh=void 0,this.size=e,this.type=i,this.textureSize=(function(o){let u=Math.ceil(Math.sqrt(o));return Math.max(u,1)})(t),this.targetMesh=s?.geometry.type==="BufferGeometry"||s?.type==="Mesh"&&s&&s.geometry.hasAttribute("position")&&s.geometry.hasAttribute("normal")?s:this.getMesh(i,1);let{positions:n,dataTexture:r,dataTextureNormals:a}=this.createPositions(this.textureSize,this.targetMesh??this.getMesh(i,1));this.positionsTexture=r,this.positionsAttribute=n,this.directionsTexture=a}createPositions(e,t){let{positions:i,normals:s}=(function(n,r){let a=new U(n.geometry,n.material),o=[],u=[],h=new m,c=new m;a.geometry.index!==null&&(a.geometry=a.geometry.toNonIndexed());let f=new le(a).build();for(let x=0;x<r;x++)f.sample(h,c),o.push(h.x,h.y,h.z),u.push(c.x,c.y,c.z);return{positions:new Float32Array(o),normals:new Float32Array(u)}})(t,e*e);return{dataTexture:B(i,e),positions:i,dataTextureNormals:B(s,e)}}getMesh(e,t){let i=null;switch(e){case"SphereEmitterShape":i=new O(.5*t,32,32);break;case"TorusEmitterShape":i=new ae(.5*t,.3,15,40);break;case"ConeEmitterShape":i=new re(t,t,15);break;case"BoxEmitterShape":i=new ne(t,t,t);break;case"PlaneEmitterShape":i=new W(t,t),i.rotateX(-Math.PI/2);break;default:i=new O(t,32,32)}return new U(i,new q({color:16711680}))}applyToShader(e,t){this.size=new m().fromArray(t.size.map(i=>typeof i=="number"?i:1)),e.uEmitterSize.value=this.size}dispose(){this.positionsTexture.dispose(),this.directionsTexture.dispose(),this.positionsAttribute=new Float32Array}};function y(e){let t={...e},i=K.defaultData;t.forceFieldObjectId&&(t.colliderEntityId=t.forceFieldObjectId);let s={...i.shape,...t.shape},n={...i.renderMaterial,...t.renderMaterial};return{...i,...t,shape:s,renderMaterial:n}}var ue=class extends Y{constructor(e,t){super(),this.type="ParticleEmitter",this.debugMode=!1,this.worldSpace=!0,this.rootObject=null,this.gpuCompute=null,this.positionSimRT=null,this.velocitySimRT=null,this.emissionRateSimRT=null,this.emitterShape=void 0,this.isEmitting=!1,this.hasBeenReset=!1,this.emittedParticlesAmount=0,this.lastEmitTime=0,this.globalTime=0,this.targetFPS=60,this.previousRatio=1,this.lerpFactor=.4,this.particlesAmount=0,this.noiseStrength=0,this.noiseScale=0,this.isBillboardBased=!0,this.simFeaturesDefinition={USE_COLLIDER:!1,USE_ATTRACTOR:!1,USE_VORTEX:!1,USE_SPHERE_COLLIDER:!1,USE_BOX_COLLIDER:!1,USE_FORCE_LOCAL_SPACE:!1,USE_NORMALS:!1,USE_CURL_NOISE:!0,USE_SIMPLEX_NOISE:!1,USE_FBM_NOISE:!1},this.textureLoader=new ee,this.textureRequestId=0,this.currentWorldPosition=new m,this.systemQuaternion=new V,this.worldGravity=new m(0,0,0),this.directionAxis=new m(0,0,0),this.colliderV3=new m(0,0,0),this.colliderQuaternion=new V(0,0,0,1),this.matrixAutoUpdate=!0,this.renderer=e,this.system=t,this.shared=t.context.shared;let i=t.data;this.material=b(e)?w()?.createMaterial(i.renderMaterial,t.context)??T().createMaterial(i.renderMaterial,t.context):T().createMaterial(i.renderMaterial,t.context),this.material.uniforms={uSize:{value:0},uSizeEnd:{value:0},uColor:{value:i.renderMaterial.color},uColor2:{value:i.renderMaterial.color2},uPosition:{value:new m(0,0,0)},uEmissionData:{value:new m(0,0,0)},uTexture:{value:this.defaultTexture},uWorldOffset:{value:new m(0,0,0)},uWorldQuaternion:{value:new g(0,0,0,1)},uRandScaleFactor:{value:i.randomScale??0},uRandRotationFactor:{value:i.randomRotation??0},uRotation:{value:i.renderMaterial.spriteRotation[0]??0},uRotationEnd:{value:i.renderMaterial.spriteRotation[1]??0}},this.setTexture(this.material.uniforms,i.renderMaterial.texture),this.init(i)}setTexture(e,t){let i=t.data,s=++this.textureRequestId;if(typeof t=="string"){let n=this.shared.image(t),r=()=>{if(s!==this.textureRequestId)return;let a=new N(n.img);a.needsUpdate=!0,e.uTexture.value=a};return void(n.loaded?r():n.loadPromise.then(r))}if(typeof i!="string"){let n=new Image;n.onload=()=>{if(s!==this.textureRequestId)return;let o=new N(n);o.needsUpdate=!0,e.uTexture.value=o};let r=new Blob([i],{type:"image/*"}),a=URL.createObjectURL(r);n.src=a}}updateGeometryAttributes(e,t){let i=(function(n){let r=new Float32Array(n*n*2);for(let a=0;a<n;a++)for(let o=0;o<n;o++){let u=a*n+o;r[2*u+0]=a/(n-1),r[2*u+1]=o/(n-1)}return r})(t);if(!this.emitterShape?.positionsAttribute)return;let s=new te(i,2);e.geometry.setAttribute("ref",s),b(this.renderer)&&e.geometry.setAttribute("particleRef",s)}applyWorldSpace(){if(!(this.system.started&&this.worldSpace&&this.positionSimRT&&this.velocitySimRT))return;let e=this.system;e.getWorldQuaternion(this.systemQuaternion),this.systemQuaternion.invert(),e.getWorldPosition(this.currentWorldPosition),this.material.uniforms.uWorldOffset.value=this.currentWorldPosition,this.material.uniforms.uWorldQuaternion.value.copy(this.systemQuaternion.normalize()),this.positionSimRT.material.uniforms.uWorldOffset.value=this.currentWorldPosition,this.systemQuaternion.invert(),this.positionSimRT.material.uniforms.uWorldQuaternion.value.copy(this.systemQuaternion.normalize()),this.velocitySimRT.material.uniforms.uWorldQuaternion.value.copy(this.systemQuaternion.normalize())}update(e,t){if(!this.gpuCompute||!this.positionSimRT||!this.velocitySimRT||!this.emissionRateSimRT||this.hasBeenReset)return;if(this.checkIfAllParticlesAreDead()&&!this.hasBeenReset)return void this.reset();this.applyWorldSpace(),this.globalTime=e,this.positionSimRT.material.uniforms.uTime.value=e,this.emissionRateSimRT.material.uniforms.uTime.value=e;let i=1e3/t,s=this.targetFPS/i,n=this.previousRatio+(s-this.previousRatio)*this.lerpFactor;this.positionSimRT.material.uniforms.uFPSRatio.value=n,this.previousRatio=n;let r=this.isEmitting?this.GoEmitSomeParticles(e,this.system.data.birthRatePerSec):0;this.emissionRateSimRT.material.uniforms.uLastIndexEmitted.value=this.emittedParticlesAmount,this.emissionRateSimRT.material.uniforms.uParticlesToEmit.value=r,this.material.uniforms.uPosition.value=this.gpuCompute.getCurrentRenderTarget(this.positionSimRT)?.texture,this.system.colliderEntities.length>0&&this.renderColliders(),this.gpuCompute.compute()}renderColliders(){if(!this.velocitySimRT)return;let e=this.system.colliderEntities[0],t=this.simFeaturesDefinition.USE_COLLIDER||this.simFeaturesDefinition.USE_ATTRACTOR||this.simFeaturesDefinition.USE_VORTEX;if(e.destroyedInAction&&t&&this.init(y({...this.system.data,colliderEntityId:null})),!e||e.destroyedInAction)return;e.getWorldPosition(this.colliderV3),this.colliderV3.y===0&&(this.colliderV3.y=1e-4),this.velocitySimRT.material.uniforms.uColliderPos.value.copy(this.colliderV3);let i=e.data.size;this.colliderV3.fromArray(i),this.velocitySimRT.material.uniforms.uColliderSize.value.copy(this.simFeaturesDefinition.USE_SPHERE_COLLIDER?this.colliderV3.multiplyScalar(.5):this.colliderV3),e.getWorldQuaternion(this.colliderQuaternion),this.velocitySimRT.material.uniforms.uColliderQuaternion.value.copy(this.colliderQuaternion.normalize()),this.velocitySimRT.material.uniforms.uColliderQuaternionInvert.value.copy(this.colliderQuaternion.normalize().invert())}updateState(e){!this.velocitySimRT||!this.positionSimRT||(e.renderMaterial&&this.updateMaterialState(e.renderMaterial),this.updateParticleState(e))}updateVariableState(e,t){if(!this.velocitySimRT||!this.positionSimRT)return;t[2]==="size"&&this.material.updateState({size:[e,this.material.uniforms.uSizeEnd.value]}),t[2]==="sizeEnd"&&this.material.updateState({size:[this.material.uniforms.uSize.value,e]});let i=(s,n)=>{let r=[...this.system.data.shape.size];r[s]=n,this.updateParticleState({shape:{...this.system.data.shape,size:r}})};t[2]==="shape_size_0"&&i(0,e),t[2]==="shape_size_1"&&i(1,e),t[2]==="shape_size_2"&&i(2,e),t[2]==="speed"&&(this.velocitySimRT.material.uniforms.uSpeed.value=e/10),t[2]==="gravity"&&this.worldGravity.set(0,e/100,0),t[2]==="noiseStrength"&&(this.noiseStrength=e,this.velocitySimRT.material.uniforms.uNoiseStrength.value=this.noiseStrength),t[2]==="noiseScale"&&(this.noiseScale=e,this.velocitySimRT.material.uniforms.uNoiseScale.value=this.noiseScale),t[2]==="direction_x"&&(this.directionAxis=this.getDirectionAxis([Number(e),this.system.data.direction[1],this.system.data.direction[2]])),t[2]==="direction_y"&&(this.directionAxis=this.getDirectionAxis([this.system.data.direction[0],Number(e),this.system.data.direction[2]])),t[2]==="direction_z"&&(this.directionAxis=this.getDirectionAxis([this.system.data.direction[0],this.system.data.direction[1],Number(e)]))}updateMaterialState(e){this.material.updateState({...e,size:e.size?[Number(this.shared.getVariable(e.size[0],[this.uuid,"particles","size"])),Number(this.shared.getVariable(e.size[1],[this.uuid,"particles","sizeEnd"]))]:[0,0]}),e.texture&&(this.setTexture(this.material.uniforms,e.texture),this.material.needsUpdate=!0)}updateParticleState(e){if(this.positionSimRT&&this.velocitySimRT){if(this.shouldReInitGPUCompute(e)&&this.init(y(this.system.data)),e.life!==void 0&&(this.positionSimRT.material.uniforms.uMaxLifeTime.value=e.life),e.speed!==void 0&&(this.velocitySimRT.material.uniforms.uSpeed.value=Number(this.shared.getVariable(e.speed,[this.uuid,"particles","speed"]))/10),e.collisionBounce!==void 0&&(this.velocitySimRT.material.uniforms.uBounce.value=e.collisionBounce),e.noiseStrength!==void 0&&(this.noiseStrength=Number(this.shared.getVariable(e.noiseStrength,[this.uuid,"particles","noiseStrength"])),this.velocitySimRT.material.uniforms.uNoiseStrength.value=this.noiseStrength),e.noiseScale!==void 0&&(this.noiseScale=Number(this.shared.getVariable(e.noiseScale,[this.uuid,"particles","noiseScale"])),this.velocitySimRT.material.uniforms.uNoiseScale.value=this.noiseScale),e.noiseSeed!==void 0&&(this.velocitySimRT.material.uniforms.uNoiseSeed.value=e.noiseSeed),e.randomMass!==void 0&&(this.velocitySimRT.material.uniforms.uRandomMassFactor.value=e.randomMass),e.renderMaterial?.size!==void 0){let t=this.shared.getVariable(e.renderMaterial.size[0],[this.uuid,"particles","size"]);this.velocitySimRT.material.uniforms.particleSize.value=Number(t)}if(e.renderMaterial?.spriteRotation!==void 0&&(this.material.uniforms.uRotation.value=e.renderMaterial.spriteRotation[0],this.material.uniforms.uRotationEnd.value=e.renderMaterial.spriteRotation[1]),e.shape!==void 0){let t=e.shape.size??this.system.data.shape.size,i=[Number(this.shared.getVariable(t[0],[this.uuid,"particles","shape_size_0"])),Number(this.shared.getVariable(t[1],[this.uuid,"particles","shape_size_1"])),Number(this.shared.getVariable(t[2],[this.uuid,"particles","shape_size_2"]))],s={...y(this.system.data).shape,size:i};this.emitterShape?.applyToShader(this.positionSimRT.material.uniforms,s)}if(e.gravity!==void 0&&(this.worldGravity.set(0,Number(this.shared.getVariable(this.system.data.gravity,[this.uuid,"particles","gravity"]))/100,0),this.velocitySimRT.material.uniforms.uGravity={value:this.worldGravity}),e.direction!==void 0){let t=this.getDirectionFromVariable(e.direction);this.directionAxis=this.getDirectionAxis(t),this.velocitySimRT.material.uniforms.uDirectionsAxis.value=this.directionAxis}e.randomRotation!==void 0&&(this.material.uniforms.uRandRotationFactor.value=e.randomRotation),e.randomScale!==void 0&&(this.material.uniforms.uRandScaleFactor.value=e.randomScale)}}updateForceFieldParameters(e){!this.velocitySimRT||(e.forceIntensity!==void 0&&(this.velocitySimRT.material.uniforms.uForceIntensity.value=e.forceIntensity),e.forceDambing!==void 0&&(this.velocitySimRT.material.uniforms.uForceDamping.value=e.forceDambing))}getDirectionAxis(e){let t=[Number(e[0])*R.DEG2RAD,Number(e[1])*R.DEG2RAD,Number(e[2])*R.DEG2RAD],i=new ie(t[0],t[1],t[2],"XYZ");return this.directionAxis.set(0,1,0).applyEuler(i).normalize(),this.velocitySimRT&&(this.velocitySimRT.material.uniforms.uDirectionsAxis.value=this.directionAxis),this.directionAxis}shouldReInitGPUCompute(e){let{birthRatePerSec:t,rootObjectType:i,colliderEntityId:s,shape:n,emitTimeDuration:r,emitTimeCycle:a,life:o,directionMode:u,noiseType:h}=e;return t!==void 0||i!==void 0||s||s===null||a!==void 0||n!==void 0||o!==void 0||r!==void 0||u!==void 0||h!==void 0}init(e){this.dispose(),this.particlesAmount=this.getMaxParticlesAmount({birthRatePerSecond:e.birthRatePerSec,particleMaxLifeTime:e.life,loopDuration:e.emitTimeCycle==="infinity"?0:e.emitTimeDuration}),this.particlesAmount>1e5&&(console.warn("The maximum number of particles is limited to 100000."),this.particlesAmount=1e5),this.emitterShape=this.createShape(e.shape,this.particlesAmount);let t=setInterval(()=>{if(!this.emitterShape)return;let d=this.emitterShape.positionsTexture.source.data.data;d&&!isNaN(d[0])?clearInterval(t):this.init(e)},100);if(!this.emitterShape)return;let i=this.updateSimulationDefinition(e),s=b(this.renderer)?w().createComputation(this.emitterShape.textureSize,this.emitterShape.textureSize,this.renderer,this.simFeaturesDefinition):T().createComputation(this.emitterShape.textureSize,this.emitterShape.textureSize,this.renderer),n=s.addVariable("uCurrentPosition",i+`



uniform sampler2D uOriginalPosition;
uniform float uTime;
uniform float uSpeed;     
uniform vec3 uWorldOffset;    
uniform vec4 uWorldQuaternion;
uniform float uMaxLifeTime;
uniform vec3 uEmitterSize;
uniform float uFPSRatio;     

float random (vec2 st) {
    return fract(sin(dot(st.xy,
        vec2(12.9898,78.233)))*
        43758.5453123);
}
vec3 applyQuaternionToVector( vec4 q, vec3 v ){
    return v + 2.0 * cross( q.xyz, cross( q.xyz, v ) + q.w * v );
}

vec3 applyForce(vec3 force, float mass) {
    vec3 acceleration = force / mass;
    
    return acceleration;
  }
  

void main() {
    vec2 vUv = gl_FragCoord.xy / resolution.xy;
    vec3 position = texture2D( uCurrentPosition, vUv ).xyz;
    float currentLife = texture2D( uCurrentPosition, vUv ).w;   
    float isSpawning = texture2D( uCurrentEmissionRate, vUv ).r;        
    float isActive = texture2D( uCurrentEmissionRate, vUv ).g;          
    float timeStart = texture2D( uCurrentEmissionRate, vUv ).b;         
    vec3 originalPosition = ((texture2D( uOriginalPosition, vUv ).xyz) * uEmitterSize);
    vec3 velocity = texture2D( uCurrentVelocity, vUv ).xyz;
    float collisionFlag = texture2D( uCurrentVelocity, vUv ).w;             
    float lifeTime = uMaxLifeTime;

    
    
    float isColliding = step(0.5, collisionFlag); 
    float bounceOffset = 3.0 * isColliding; 
    vec3 collisionAdjustedVelocity = velocity * (1.0 + bounceOffset);

    
    vec3 fpsVelocity = velocity * min(uFPSRatio, 5.0);
    position += mix(fpsVelocity, collisionAdjustedVelocity, isColliding);

    
    
    
    vec3 newPosition = applyQuaternionToVector(uWorldQuaternion, originalPosition) + uWorldOffset;
    originalPosition = mix(originalPosition, newPosition, isSpawning);
    position = mix(position, originalPosition, isSpawning);;
    timeStart = mix(timeStart, uTime, isSpawning);

    
    float timeLeft = max(lifeTime - (uTime - timeStart), 0.0);
    float life_Normalize = timeLeft / lifeTime;

    
    vec4 activeColor = vec4(position, life_Normalize);
    
    gl_FragColor = mix(vec4(0.0), activeColor, isActive);

}
`,this.emitterShape.positionsTexture),r=s.addVariable("uCurrentVelocity",i+`



uniform sampler2D uOriginalPosition;
uniform sampler2D uDirections;     
uniform vec3 uDirectionsAxis;
uniform vec4 uWorldQuaternion;
uniform vec3 uGravity;        
uniform float uNoiseStrength;     
uniform float uNoiseScale;        
uniform float uNoiseSeed;         
uniform float particleSize;
uniform float uSpeed;     
uniform float uRandomMassFactor;


uniform vec3 uColliderPos;                
uniform vec3 uColliderSize;               
uniform vec4 uColliderQuaternion;         
uniform vec4 uColliderQuaternionInvert;   
uniform float uBounce;                    
uniform float uForceDamping;
uniform float uForceIntensity;




    vec3 mod289(vec3 x) {
      return x - floor(x * (1.0 / 289.0)) * 289.0;
    }
    
    vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
    }
    
    vec4 permute(vec4 x) {
        return mod289(((x*34.0)+1.0)*x);
    }
    
    vec4 taylorInvSqrt(vec4 r)
    {
    return 1.79284291400159 - 0.85373472095314 * r;
    }
    
    vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

    float snoise(vec3 v)
    {
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 =   v - i + dot(i, C.xxx) ;
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy; 
    vec3 x3 = x0 - D.yyy;      
    
    
    i = mod289(i);
    vec4 p = permute( permute( permute(
                i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
              + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
    
    
    
    float n_ = 0.142857142857; 
    vec3  ns = n_ * D.wyz - D.xzx;
    
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  
    
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
    }
    
    vec3 snoiseVec3( vec3 x ){
    
      float s  = snoise(vec3( x ));
      float s1 = snoise(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));
      float s2 = snoise(vec3( x.z + 74.2 , x.x - 124.5 , x.y + 99.4 ));
      vec3 c = vec3( s , s1 , s2 );
      return c;
    
    }
    
      
    vec3 curlNoise( vec3 p, float seed){
      p += seed;
      const float e = .1;
      vec3 dx = vec3( e   , 0.0 , 0.0 );
      vec3 dy = vec3( 0.0 , e   , 0.0 );
      vec3 dz = vec3( 0.0 , 0.0 , e   );
    
      vec3 p_x0 = snoiseVec3( p - dx );
      vec3 p_x1 = snoiseVec3( p + dx );
      vec3 p_y0 = snoiseVec3( p - dy );
      vec3 p_y1 = snoiseVec3( p + dy );
      vec3 p_z0 = snoiseVec3( p - dz );
      vec3 p_z1 = snoiseVec3( p + dz );
    
      float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;
      float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;
      float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;
    
      const float divisor = 1.0 / ( 2.0 * e );
      return normalize( vec3( x , y , z ) * divisor );
    
    }



float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); 
  vec3 Pi1 = Pi0 + vec3(1.0); 
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); 
  vec3 Pf1 = Pf0 - vec3(1.0); 
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
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
}


vec3 fbm_vec3(vec3 p, float frequency, float offset)
{
  return vec3(
    cnoise((p+vec3(offset))*frequency),
    cnoise((p+vec3(offset+20.0))*frequency),
    cnoise((p+vec3(offset-30.0))*frequency)
  );
}


float rand(vec2 co){
    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}
vec3 applyQuaternionToVector( vec4 q, vec3 v ){
    return v + 2.0 * cross( q.xyz, cross( q.xyz, v ) + q.w * v );
 } 
vec3 applyForce(vec3 force, float mass) {
  vec3 acceleration = force / mass;
  
  return acceleration;
}

vec4 conjugate(vec4 q) {
  return vec4(q.w, -q.x, -q.y, -q.z);
}


vec3 ellipsoidNormal(vec3 p, vec3 radii) {
  return normalize(p / (radii * radii));
}

float friction = .3;

void main() {
    vec2 vUv = gl_FragCoord.xy / resolution.xy;
    vec3 position = texture2D( uCurrentPosition, vUv ).xyz;
    vec3 originalPosition = texture2D( uOriginalPosition, vUv ).xyz;
    float timeLeft = texture2D( uCurrentPosition, vUv ).w;
    vec3 directions = texture2D( uDirections, vUv ).xyz;    
    vec3 velocity = texture2D( uCurrentVelocity, vUv ).xyz;
    float mass = rand(originalPosition.xy) * 0.5 + 0.5;
    float isSpawning = texture2D( uCurrentEmissionRate, vUv ).x;        
    float isActive = texture2D( uCurrentEmissionRate, vUv ).y;          
    float collisionFlag =texture2D( uCurrentVelocity, vUv ).w;          

    
    mass = (1.0 - (uRandomMassFactor * mass));
    
    if (isActive == 1.0) {
      
      
      
      #ifdef USE_CURL_NOISE
        if (uNoiseScale > 0.0 ) {
          velocity = curlNoise(position * uNoiseScale * .002, uNoiseSeed) * ( uNoiseStrength + 1.0) * .05 * uSpeed;
        }
        
        if (uNoiseStrength > 0.0 && uNoiseScale == 0.0 ) {
          velocity += curlNoise( position, uNoiseSeed)  * uNoiseStrength * 0.05 * uSpeed;
        }
      #endif
      
      #ifdef USE_SIMPLEX_NOISE
        if (uNoiseScale > 0.0 ) {
          velocity = vec3(snoise(position * uNoiseScale * .001) * ( uNoiseStrength + 1.0) * .1);
          velocity *= uSpeed;
        }
        
        if (uNoiseStrength > 0.0 && uNoiseScale == 0.0) {
          velocity += vec3(snoise(position * uNoiseStrength * .001) * .05 * uSpeed);
        }
      #endif
      
      #ifdef USE_FBM_NOISE
        if (uNoiseScale > 0.0 ) {
          velocity = fbm_vec3(position * uNoiseScale * .001, ( uNoiseStrength + 1.0), uNoiseSeed);
          velocity *= uSpeed;
        }
        
        if (uNoiseStrength > 0.0 && uNoiseScale == 0.0 ) {      
          velocity += fbm_vec3(position * uNoiseStrength * .001, ( uNoiseStrength + 1.0), uNoiseSeed) * .1 * uSpeed;
        }
      #endif

      
      
  #ifdef USE_COLLIDER
    float restitution = max(uBounce * 2., .01); 
    
    
    #ifdef USE_SPHERE_COLLIDER       
      
      vec3 radii = uColliderSize;
      
      vec3 relPos = position - uColliderPos;
      
      relPos = applyQuaternionToVector(uColliderQuaternionInvert, relPos);            
      
      vec3 scaledPos = relPos / radii;
      
      float dist = length(scaledPos); 
      
      
      if (dist <= 1. + particleSize / length(radii) && collisionFlag == 0.0) {
          
        vec3 adjustedPos = scaledPos * (1.0 + particleSize / length(radii));          
        
        vec3 normal = ellipsoidNormal(adjustedPos, radii);
        
        normal = applyQuaternionToVector(uColliderQuaternion, normal);
        
        velocity = reflect(velocity, normal) * restitution;

        collisionFlag = 1.0;
      } else {
        collisionFlag = 0.0;
      }
    #endif

    
    
    #ifdef USE_BOX_COLLIDER
      
      vec3 boxHalfSize = uColliderSize / 2.0;
      
      vec3 localPos = applyQuaternionToVector(uColliderQuaternionInvert, position - uColliderPos);      
      
      vec3 localDistance = abs(localPos) - boxHalfSize;
      float distToSurface = max(localDistance.x, max(localDistance.y, localDistance.z));    

      
      if (distToSurface <= particleSize * 0.5 && collisionFlag == 0.0) {      
        
        vec3 normal;
        if (localDistance.x > localDistance.y && localDistance.x > localDistance.z) {
            normal = vec3(sign(localPos.x), 0.0, 0.0);
        } else if (localDistance.y > localDistance.z) {
            normal = vec3(0.0, sign(localPos.y), 0.0);
        } else {
            normal = vec3(0.0, 0.0, sign(localPos.z));
        }            
        
        normal = applyQuaternionToVector(uColliderQuaternion, normal);      
        
        velocity = reflect(velocity, normal) * restitution;
        
        collisionFlag = 1.0;
      } else {
        collisionFlag = 0.0;
      }
    #endif      
  #endif      
  

      
      
  #ifdef USE_ATTRACTOR

      #ifdef USE_SPHERE_COLLIDER      
        
        vec3 radii = uColliderSize;
        
        vec3 relPos = position - uColliderPos;
        
        relPos = applyQuaternionToVector(uColliderQuaternionInvert, relPos);            
        
        vec3 scaledPos = relPos / radii;
        
        float distToSurface = length(scaledPos); 
        float insideCheck = 1.0;

      #endif


      #ifdef USE_BOX_COLLIDER
        
        vec3 boxHalfSize = uColliderSize / 2.0;
        
        vec3 localPos = applyQuaternionToVector(uColliderQuaternionInvert, position - uColliderPos);      
        vec3 localDistance = abs(localPos) - boxHalfSize;
        float distToSurface = max(localDistance.x, max(localDistance.y, localDistance.z));
        float insideCheck = particleSize;
      #endif      
  
      
      #ifdef USE_FORCE_LOCAL_SPACE
        if (distToSurface <= insideCheck ) {    
            
            #ifdef USE_SPHERE_COLLIDER      
              float attractorStrength = (1.0 - distToSurface ) * uForceIntensity; 
            #endif

            #ifdef USE_BOX_COLLIDER
              float attractorStrength = max((1.0 - insideCheck / distToSurface), 0.) * uForceIntensity; 
              #endif

            float attractorDamping = uForceDamping;  
          
            
            vec3 attractorRadii = uColliderSize;
            
            vec3 relPos = position - uColliderPos;
            
            relPos = applyQuaternionToVector(uColliderQuaternionInvert, relPos);            
            
            vec3 scaledPos = relPos / attractorRadii;

            
            float attractorRadius = length(scaledPos);
            
            vec3 relativePosition = position - uColliderPos;
            
            vec3 attractorForce = normalize(relativePosition) * attractorStrength;
            
            velocity -= attractorForce;
            
            velocity *= attractorDamping;
        }
      #else 
            
            vec3 relativePosition = position - uColliderPos;
            
            vec3 attractorForce = normalize(relativePosition) * uForceIntensity;
            
            velocity -= attractorForce;
            
            velocity *= uForceDamping;
      #endif    
  #endif      
  
      
      
  #ifdef USE_VORTEX
    
    vec3 boxHalfSize = uColliderSize / 2.0;
    
    vec3 localPos = applyQuaternionToVector(uColliderQuaternionInvert, position - uColliderPos);      
    vec3 localDistance = abs(localPos) - boxHalfSize;
    float distToSurface = max(localDistance.x, max(localDistance.y, localDistance.z));

    
    if (distToSurface <= particleSize) {
      float vortexStrength = uForceIntensity;
      vec3 localTopCenter = vec3(0.0, 0., 0.0);

      
      vec3 vortexCenter = uColliderPos + applyQuaternionToVector(uColliderQuaternion, localTopCenter);
      
      vec3 vortexVector = vortexCenter - position;

      
      
      vec3 upVector = vec3(0.0, 1.0, 0.01);
      vec3 rotationAxis = cross(upVector, applyQuaternionToVector(uColliderQuaternion, vortexVector));
      rotationAxis = normalize(rotationAxis);

      
      float rotationSpeed = length(vortexVector * vortexStrength * 3.0) ; 

      vec3 rotationVelocity = rotationAxis * rotationSpeed;
      
      velocity = rotationVelocity * 0.005 ;

      
      
      
      vec3 originDirection = applyQuaternionToVector(uWorldQuaternion, directions);
      velocity += applyForce( originDirection * uSpeed * (1. - uForceDamping) , mass * .5);
    }
  #endif      

    } 
    

    
    
    
    #ifdef USE_NORMALS
      velocity = mix(velocity, applyQuaternionToVector(uWorldQuaternion, directions) * uSpeed, isSpawning);
    #else
      velocity = mix(velocity, applyQuaternionToVector(uWorldQuaternion, uDirectionsAxis) * uSpeed, isSpawning);    
    #endif
    
    
    velocity += applyForce(uGravity, mass * .5) * (1.0 - collisionFlag);

    gl_FragColor = vec4(velocity, collisionFlag);
}
`,this.emitterShape.directionsTexture),a=s.addVariable("uCurrentEmissionRate",`




uniform sampler2D uIndex; 
uniform float uLastIndexEmitted; 
uniform float uParticlesToEmit; 
uniform float uTime;

void main() {
    vec2 vUv = gl_FragCoord.xy / resolution.xy;
    float particleIndex = texture(uIndex, vUv).x;
    float timeLeft = texture2D( uCurrentPosition, vUv ).w;
    float isActive = texture2D( uCurrentEmissionRate, vUv ).g;    
    float timeStart = texture2D( uCurrentEmissionRate, vUv ).b;


    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    float emitLowerBound = step(uLastIndexEmitted, particleIndex);
    float emitUpperBound = step(particleIndex, uLastIndexEmitted + uParticlesToEmit - 1.0);
    float emitParticle = emitLowerBound * emitUpperBound; 

    
    timeStart = mix(timeStart, uTime, emitParticle);
    gl_FragColor = vec4(emitParticle, mix(isActive, 1.0, emitParticle), timeStart, 1.0);


}
`,(function(d){let v=new Float32Array(4*d*d);for(let p=0;p<d*d;p++)v[4*p]=0,v[4*p+1]=0,v[4*p+2]=0,v[4*p+3]=0;let S=new _(v,d,d,C,A);return S.needsUpdate=!0,S})(this.emitterShape.textureSize));s.setVariableDependencies(n,[n,r,a]),s.setVariableDependencies(r,[n,r,a]),s.setVariableDependencies(a,[n,r,a]);let o=(function({size:d}){let v=new Float32Array(4*d*d);for(let p=0;p<d*d;p++)v[4*p]=p,v[4*p+1]=0,v[4*p+2]=0,v[4*p+3]=0;let S=new _(v,d,d,C,A);return S.needsUpdate=!0,S})({size:this.emitterShape.textureSize}),u={uOriginalPosition:{value:this.emitterShape.positionsTexture},uWorldOffset:{value:new m(0,0,0)},uWorldQuaternion:{value:new g(0,0,0,1)},uTime:{value:0},uFPSRatio:{value:1},uMaxLifeTime:{value:e.life},uEmitterSize:{value:new m(Number(this.shared.getVariable(e.shape.size[0],[this.uuid,"particles","shape_size_0"])),Number(this.shared.getVariable(e.shape.size[1],[this.uuid,"particles","shape_size_1"])),Number(this.shared.getVariable(e.shape.size[2],[this.uuid,"particles","shape_size_2"])))},particleSize:{value:0}};n.material.uniforms=u;let h=this.getDirectionFromVariable(e.direction);this.directionAxis=this.getDirectionAxis(h),this.worldGravity.set(0,Number(this.shared.getVariable(this.system.data.gravity,[this.uuid,"particles","gravity"]))/100,0),this.noiseStrength=Number(this.shared.getVariable(e.noiseStrength,[this.uuid,"particles","noiseStrength"])),this.noiseScale=Number(this.shared.getVariable(e.noiseScale,[this.uuid,"particles","noiseScale"]));let c=e.colliderEntityId&&this.system.getColliderData(e.colliderEntityId),f={uOriginalPosition:{value:this.emitterShape.positionsTexture},uDirections:{value:this.emitterShape.directionsTexture},uDirectionsAxis:{value:this.directionAxis},uWorldQuaternion:{value:new g(0,0,0,1)},uColliderPos:{value:new m(0,0,0)},uColliderSize:{value:new m(0,0,0)},uForceIntensity:{value:c?c.forceIntensity:0},uForceDamping:{value:c?c.forceDambing:0},uColliderQuaternion:{value:new g(0,0,0,1)},uColliderQuaternionInvert:{value:new g(0,0,0,1)},particleSize:{value:0},uGravity:{value:this.worldGravity},uNoiseStrength:{value:this.noiseStrength},uNoiseScale:{value:this.noiseScale},uNoiseSeed:{value:e.noiseSeed},uRandomMassFactor:{value:e.randomMass},uBounce:{value:e.collisionBounce},uSpeed:{value:Number(this.shared.getVariable(e.speed,[this.uuid,"particles","speed"]))/10}};r.material.uniforms=f;let x={uIndex:{value:o},uTime:{value:0},uLastIndexEmitted:{value:0},uParticlesToEmit:{value:0}};a.material.uniforms=x;let X=[Number(this.shared.getVariable(e.shape.size[0],[this.uuid,"particles","shape_size_0"])),Number(this.shared.getVariable(e.shape.size[1],[this.uuid,"particles","shape_size_1"])),Number(this.shared.getVariable(e.shape.size[2],[this.uuid,"particles","shape_size_2"]))],k={...y(this.system.data).shape,size:X};this.emitterShape.applyToShader(n.material.uniforms,k),s.init(),this.gpuCompute=s,this.positionSimRT=n,this.velocitySimRT=r,this.emissionRateSimRT=a,this.material.uniforms.uPosition.value=s.getCurrentRenderTarget(n)?.texture,this.rootObject=this.createPrimaryEmitter(this.emitterShape.textureSize),this.add(this.rootObject),this.material.needsUpdate=!0}getDirectionFromVariable(e){return[Number(this.shared.getVariable(e[0],[this.uuid,"particles","direction_x"])),Number(this.shared.getVariable(e[1],[this.uuid,"particles","direction_y"])),Number(this.shared.getVariable(e[2],[this.uuid,"particles","direction_z"]))]}updateSimulationDefinition(e){if(this.simFeaturesDefinition.USE_COLLIDER=!1,this.simFeaturesDefinition.USE_ATTRACTOR=!1,this.simFeaturesDefinition.USE_VORTEX=!1,this.simFeaturesDefinition.USE_SPHERE_COLLIDER=!1,this.simFeaturesDefinition.USE_BOX_COLLIDER=!1,this.simFeaturesDefinition.USE_FORCE_LOCAL_SPACE=!1,this.simFeaturesDefinition.USE_NORMALS=!1,this.simFeaturesDefinition.USE_CURL_NOISE=!1,this.simFeaturesDefinition.USE_SIMPLEX_NOISE=!1,this.simFeaturesDefinition.USE_FBM_NOISE=!1,e.colliderEntityId&&this.system.colliderEntities.length>0){let i=this.system.getColliderData(e.colliderEntityId);switch(i?.forceType){case"attractor":this.simFeaturesDefinition.USE_ATTRACTOR=!0;break;case"collider":this.simFeaturesDefinition.USE_COLLIDER=!0;break;case"vortex":this.simFeaturesDefinition.USE_VORTEX=!0}let s=i?.colliderType;s==="sphere"&&(this.simFeaturesDefinition.USE_SPHERE_COLLIDER=!0),s==="box"&&(this.simFeaturesDefinition.USE_BOX_COLLIDER=!0),i?.forceRange==="helper"&&(this.simFeaturesDefinition.USE_FORCE_LOCAL_SPACE=!0)}e.directionMode==="normals"&&(this.simFeaturesDefinition.USE_NORMALS=!0),e.noiseType==="curl"&&(this.simFeaturesDefinition.USE_CURL_NOISE=!0),e.noiseType==="simplex"&&(this.simFeaturesDefinition.USE_SIMPLEX_NOISE=!0),e.noiseType==="fbm"&&(this.simFeaturesDefinition.USE_FBM_NOISE=!0);let t="";for(let[i,s]of Object.entries(this.simFeaturesDefinition))s&&(t+=`#define ${i}
`);return t}createShape(e,t){this.emitterShape&&this.emitterShape.dispose();let i=new m(Number(this.shared.getVariable(e.size[0],[this.uuid,"particles","shape_size_0"])),Number(this.shared.getVariable(e.size[1],[this.uuid,"particles","shape_size_1"])),Number(this.shared.getVariable(e.size[2],[this.uuid,"particles","shape_size_2"])));if(e.type==="MeshEmitterShape"){let s=null;return this.system.context.scene.traverseEntity(n=>{n.uuid===e.fromMeshId&&(s=n)}),s?new P(i,t,e.type,s):new P(i,t,"SphereEmitterShape")}return new P(i,t,e.type)}createPrimaryEmitter(e){let t=e*e,i=new se(new W(1,1,1),this.material,t);return i.renderOrder=1,this.updateGeometryAttributes(i,e),this.material.needsUpdate=!0,i.onBeforeRender=()=>{this.applyWorldSpace()},i}getMaxParticlesAmount({birthRatePerSecond:e,particleMaxLifeTime:t,loopDuration:i=0}){return Math.ceil(e*(t+i))}dispose(){!this.gpuCompute||(this.rootObject?.parent?.remove(this.rootObject),this.gpuCompute.dispose(),this.material.nodeMaterialDispose(),this.emitterShape?.dispose())}GoEmitSomeParticles(e,t){let i=e-this.lastEmitTime,s=1/t;if(i>=s){let n=Math.max(1,Math.floor(i/s));return this.lastEmitTime=e,this.emittedParticlesAmount+n>this.particlesAmount&&(this.emittedParticlesAmount=0),this.emittedParticlesAmount+=n,n}return 0}checkIfAllParticlesAreDead(){return this.lastEmitTime+this.system.data.life+1<this.globalTime}reset(){this.hasBeenReset=!0,this.lastEmitTime=0,this.emittedParticlesAmount=0,this.gpuCompute&&this.init(y(this.system.data))}startEmitting(e){this.isEmitting=!0,this.hasBeenReset=!1,this.lastEmitTime=e}stopEmitting(){this.isEmitting=!1}},ce=class extends ${constructor(e,t,i){super(e,t),this.type="ParticleSystem",this.isParticleSystem=!0,this.geometry=new Z,this.actualTime=0,this.currentLoopTime=0,this.started=!1,this.stopped=!1,this.timeoutId=void 0,this.isFrozen=!1,this.isIdle=!0,this.emitter=null,this.colliderEntities=[],this.renderer=null,this.isPreWarm=!1,this._hasOnAfterRenderBeenCalled=!1,this.onAfterRender=s=>{s.warmupInFlight||this._hasOnAfterRenderBeenCalled||(this._hasOnAfterRenderBeenCalled=!0,this.init(s))},this.context=i,this.data={...t,...y(t)},this.geometry.setAttribute("position",new J([],3)),this.material=new q({colorWrite:!1}),this.frustumCulled=!1}init(e){this.renderer=e,this.emitter=new ue(e,this),this.add(this.emitter),this.updateParticleState(this.data)}update(e){if(!this.isReady||!this.started||this.isFrozen||this.isIdle)return;this.actualTime+=e,this.stopped||(this.currentLoopTime+=e);let t=this.data.emitTimeCycle==="one_time";if((this.data.emitTimeCycle==="loop"||t)&&this.currentLoopTime>1e3*this.data.emitTimeDuration&&(this.stopped||(this.stop(),t||this.start(1e3*this.data.emitTimeDelay))),this.emitter&&this.started){let i=this.actualTime/1e3;this.emitter.update(i,e)}this.scale.set(1,1,1),this.updateMatrix()}isReady(){return!!this.emitter}hasCollider(e){return this.colliderEntities.some(t=>t.identity===e)}getColliderData(e){let t=this.colliderEntities.find(i=>i.identity===e);return t?t.data:null}updateByPatchedOp(e,t,i){super.updateByPatchedOp(e,t,i),F(e.path,["renderMaterial"])&&this.updateParticleState({renderMaterial:{...this.data.renderMaterial,...I.drop(e,1).props}}),F(e.path,["shape"])&&this.updateParticleState({shape:{...this.data.shape,...I.drop(e,1).props}})}updateState(e,t){super.updateState(e,t),this.updateParticleState(e)}updateParticleState(e){if(this.emitter){if(e.colliderEntityId!==void 0&&e.colliderEntityId!==null){let t=this.context.scene.find(e.colliderEntityId);this.colliderEntities=t?[t]:[]}e.colliderEntityId===null&&(this.colliderEntities=[]),this.emitter.updateState(e),e.emitTimeCycle&&this.started&&this.start()}}updateFromColliderEntity(e){!this.emitter||(this.emitter.updateForceFieldParameters(e),this.stop(),this.start())}start(e=0){this.currentLoopTime=0,e?this.timeoutId=window.setTimeout(()=>{this.start(0)},e):(this.started=!0,this.stopped=!1,this.isFrozen=!1,this.emitter?.startEmitting(this.actualTime/1e3),this._requestRender())}froze(){this.isFrozen=!0,this._requestRender()}unFroze(){this.isFrozen=!1,this._requestRender()}stop(){this.stopped=!0,this.currentLoopTime=0,this.emitter?.stopEmitting(),clearTimeout(this.timeoutId),this._requestRender()}reset(){this.started=!1,this.stopped=!1,this.emitter?.reset(),this._requestRender()}_requestRender(){this.context.shared.requestRender()}wakeUp(){this.isIdle=!1}sleep(){this.isIdle=!0,this.reset()}},he=class{constructor(e,t,i,s){this.data=e,this.page=t,this.shared=i,this.condition=s,this.delay=0,this.emission=e.emission,e.delay!==void 0&&(this.delay=e.delay),this.particleSystem=this.page.scene.find(this.data.emitterObjectId)}toggleEmitting(){this.particleSystem.started&&!this.particleSystem.stopped?this.stop(this.delay):this.start(this.delay)}toggleFroze(){this.particleSystem.started&&!this.particleSystem.isFrozen?this.freeze(this.delay):this.unFreeze(this.delay)}start(e=0){e?this.delayTimerId=window.setTimeout(()=>{this.start(0),this.clearDelay()},e):this.particleSystem.start()}stop(e=0){e?this.delayTimerId=window.setTimeout(()=>{this.stop(0),this.clearDelay()},e):this.particleSystem.stop()}freeze(e=0){e?this.delayTimerId=window.setTimeout(()=>{this.freeze(0),this.clearDelay()},e):this.particleSystem.froze()}unFreeze(e=0){e?this.delayTimerId=window.setTimeout(()=>{this.unFreeze(0),this.clearDelay()},e):this.particleSystem.unFroze()}reset(e=0){e?this.delayTimerId=window.setTimeout(()=>{this.reset(0),this.clearDelay()},e):this.particleSystem.reset()}reverseFromCurrent(){switch(this.emission){case"emitToggle":this.toggleEmitting();break;case"pauseToggle":this.toggleFroze()}}dispatchBasic(){if(E(this.shared,this.condition)===!1||!this.particleSystem)return!1;switch(this.emission){case"start":this.start(this.delay);break;case"emitToggle":this.toggleEmitting();break;case"pause":this.freeze(this.delay);break;case"pauseToggle":this.toggleFroze();break;case"stop":this.stop(this.delay);break;case"reset":this.reset(this.delay)}}dispatchConditional(){if(E(this.shared,this.condition)===!1||!this.particleSystem)return!1;switch(this.emission){case"start":this.start(this.delay);break;case"stop":this.stop(this.delay);break;case"reset":this.reset(this.delay)}}dispatchGameControl(e){if(E(this.shared,this.condition)===!1||!this.particleSystem)return!1;e==="start"?this.start(this.delay):this.stop(this.delay)}dispose(){!this.particleSystem||(this.particleSystem.reset(),this.clearDelay())}clearDelay(){this.delayTimerId&&(clearTimeout(this.delayTimerId),delete this.delayTimerId)}};G("Particle",(e,t,i)=>new ce(e,t,i)),j("Particles",({data:e,page:t,shared:i,actionCondition:s})=>new he(e,t,i,s)),H("particles");
