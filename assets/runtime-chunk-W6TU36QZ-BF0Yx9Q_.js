import{w as ft}from"./runtime-chunk-J7PATUZB-Cjka04W1.js";import{l as Y,Y as Z,t as ct,d as W,G as q,eq as ut,M as vt,T as et,er as it,k as I,N as Q,aq as $,ai as L,i as tt,$ as j,S as B,P as w,aQ as N,dW as mt,dM as xt,dZ as yt,es as gt,et as St,eu as bt,ev as Tt,aP as at,ew as nt}from"./runtime-updater-QAQQJKLZ-BzyqC96j.js";var X=new Y;X.setAttribute("position",new Z(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));var H=class extends xt{constructor(t){super({...t,depthTest:!1,depthWrite:!1,glslVersion:yt,vertexShader:`
				precision highp float;
				in vec3 position;
				void main() {
					gl_Position = vec4(position, 1);
				}
			`})}customProgramCacheKey(){return""}};function Pt(){return{shapeInput:()=>`
			const float posRowCoord = 0.1;  
			const float quatRowCoord = 0.3;  
			const float param1RowCoord = 0.5;
			const float param2RowCoord = 0.7;
			const float colorRowCoord = 0.9; 
			uniform sampler2D shapesDataTexture;
			vec4 shapePos(float iin) { 
				vec4 r = texture(shapesDataTexture, vec2(iin, posRowCoord));
				return r;
			}
			vec4 shapeQuat(float iin) {
				vec4 r = texture(shapesDataTexture, vec2(iin, quatRowCoord));
				return r;
			}
			vec4 shapeParams1(float iin) {
				vec4 r = texture(shapesDataTexture, vec2(iin, param1RowCoord));
				return r;
			}
			vec4 shapeParams2(float iin) {
				vec4 r = texture(shapesDataTexture, vec2(iin, param2RowCoord));
				return r;
			}
			vec4 shapeColor(float iin) {
				vec4 r = texture(shapesDataTexture, vec2(iin, colorRowCoord));
				return r;
			}
		`,getxyzi:`
			// this code must complement lookup
			float xi = mod(gl_FragCoord.x - 0.5, VOXEL_RESOLUTION);
			float yi = mod(gl_FragCoord.y - 0.5, VOXEL_RESOLUTION);
			float zi = floor((gl_FragCoord.x - 0.5) * INV_VOXEL_RESOLUTION) + floor((gl_FragCoord.y - 0.5) * INV_VOXEL_RESOLUTION) * Z_LAYERS_PER_ROW;
		`,lookup:`
			uniform sampler2D potentialPassTexture;
			uniform sampler2D voxelPassTexture; 
			
			
			
			vec4 look(float xi, float yi, float zi, sampler2D rt) {
				vec2 uv = vec2(
					mod(zi, Z_LAYERS_PER_ROW) + (xi + 0.5) / VOXEL_RESOLUTION,
					floor(zi / Z_LAYERS_PER_ROW) + (yi + 0.5) / VOXEL_RESOLUTION
				); 
				uv /= Z_LAYERS_PER_ROW;
				return texture(rt, uv);
			}
		`,getpart:`
			float getpart(inout float a, float b) {
				float t = floor(a/b);
				float r = a - t*b;
				a = t;
				return r;
			}
		`,triTable:new Float32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,8,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,1,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,8,1,1,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,2,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,8,0,10,2,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,2,9,9,2,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,8,2,8,10,2,8,9,10,-1,-1,-1,-1,-1,-1,-1,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,11,0,0,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,11,3,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,11,1,11,9,1,11,8,9,-1,-1,-1,-1,-1,-1,-1,1,10,3,3,10,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,10,0,10,8,0,10,11,8,-1,-1,-1,-1,-1,-1,-1,0,9,3,9,11,3,9,10,11,-1,-1,-1,-1,-1,-1,-1,10,8,9,11,8,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,4,4,3,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,1,0,7,4,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,1,4,1,7,4,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,2,1,7,4,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,4,3,4,0,3,10,2,1,-1,-1,-1,-1,-1,-1,-1,10,2,9,2,0,9,7,4,8,-1,-1,-1,-1,-1,-1,-1,9,10,2,7,9,2,3,7,2,4,9,7,-1,-1,-1,-1,7,4,8,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,4,11,4,2,11,4,0,2,-1,-1,-1,-1,-1,-1,-1,1,0,9,7,4,8,11,3,2,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,9,2,11,9,1,2,9,-1,-1,-1,-1,1,10,3,10,11,3,4,8,7,-1,-1,-1,-1,-1,-1,-1,10,11,1,11,4,1,4,0,1,4,11,7,-1,-1,-1,-1,8,7,4,11,0,9,10,11,9,3,0,11,-1,-1,-1,-1,11,7,4,9,11,4,10,11,9,-1,-1,-1,-1,-1,-1,-1,4,5,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,5,9,3,8,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,5,0,0,5,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,5,8,5,3,8,5,1,3,-1,-1,-1,-1,-1,-1,-1,10,2,1,4,5,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,0,3,10,2,1,5,9,4,-1,-1,-1,-1,-1,-1,-1,10,2,5,2,4,5,2,0,4,-1,-1,-1,-1,-1,-1,-1,5,10,2,5,2,3,4,5,3,8,4,3,-1,-1,-1,-1,4,5,9,11,3,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,11,0,11,8,0,5,9,4,-1,-1,-1,-1,-1,-1,-1,4,5,0,5,1,0,11,3,2,-1,-1,-1,-1,-1,-1,-1,5,1,2,8,5,2,11,8,2,5,8,4,-1,-1,-1,-1,11,3,10,3,1,10,4,5,9,-1,-1,-1,-1,-1,-1,-1,5,9,4,1,8,0,1,10,8,10,11,8,-1,-1,-1,-1,0,4,5,11,0,5,10,11,5,3,0,11,-1,-1,-1,-1,8,4,5,10,8,5,11,8,10,-1,-1,-1,-1,-1,-1,-1,8,7,9,9,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,9,3,5,9,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,7,0,7,1,0,7,5,1,-1,-1,-1,-1,-1,-1,-1,3,5,1,7,5,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,7,9,7,5,9,2,1,10,-1,-1,-1,-1,-1,-1,-1,2,1,10,0,5,9,0,3,5,3,7,5,-1,-1,-1,-1,2,0,8,5,2,8,7,5,8,2,5,10,-1,-1,-1,-1,5,10,2,3,5,2,7,5,3,-1,-1,-1,-1,-1,-1,-1,5,9,7,9,8,7,2,11,3,-1,-1,-1,-1,-1,-1,-1,7,5,9,2,7,9,0,2,9,11,7,2,-1,-1,-1,-1,11,3,2,8,1,0,8,7,1,7,5,1,-1,-1,-1,-1,1,2,11,7,1,11,5,1,7,-1,-1,-1,-1,-1,-1,-1,8,5,9,7,5,8,3,1,10,11,3,10,-1,-1,-1,-1,0,7,5,9,0,5,0,11,7,10,0,1,0,10,11,-1,0,10,11,3,0,11,0,5,10,7,0,8,0,7,5,-1,5,10,11,5,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,8,0,6,10,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,0,9,6,10,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,8,1,8,9,1,6,10,5,-1,-1,-1,-1,-1,-1,-1,5,6,1,1,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,6,1,6,2,1,8,0,3,-1,-1,-1,-1,-1,-1,-1,5,6,9,6,0,9,6,2,0,-1,-1,-1,-1,-1,-1,-1,8,9,5,2,8,5,6,2,5,8,2,3,-1,-1,-1,-1,11,3,2,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,0,11,0,2,11,5,6,10,-1,-1,-1,-1,-1,-1,-1,9,1,0,11,3,2,6,10,5,-1,-1,-1,-1,-1,-1,-1,6,10,5,2,9,1,2,11,9,11,8,9,-1,-1,-1,-1,11,3,6,3,5,6,3,1,5,-1,-1,-1,-1,-1,-1,-1,11,8,0,5,11,0,1,5,0,6,11,5,-1,-1,-1,-1,6,11,3,6,3,0,5,6,0,9,5,0,-1,-1,-1,-1,9,5,6,11,9,6,8,9,11,-1,-1,-1,-1,-1,-1,-1,6,10,5,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,4,3,7,4,10,5,6,-1,-1,-1,-1,-1,-1,-1,0,9,1,6,10,5,7,4,8,-1,-1,-1,-1,-1,-1,-1,5,6,10,7,9,1,3,7,1,4,9,7,-1,-1,-1,-1,2,1,6,1,5,6,8,7,4,-1,-1,-1,-1,-1,-1,-1,5,2,1,6,2,5,4,0,3,7,4,3,-1,-1,-1,-1,7,4,8,5,0,9,5,6,0,6,2,0,-1,-1,-1,-1,9,3,7,4,9,7,9,2,3,6,9,5,9,6,2,-1,2,11,3,4,8,7,5,6,10,-1,-1,-1,-1,-1,-1,-1,6,10,5,2,7,4,0,2,4,11,7,2,-1,-1,-1,-1,9,1,0,8,7,4,11,3,2,6,10,5,-1,-1,-1,-1,1,2,9,2,11,9,11,4,9,4,11,7,6,10,5,-1,7,4,8,5,11,3,1,5,3,6,11,5,-1,-1,-1,-1,11,1,5,6,11,5,11,0,1,4,11,7,11,4,0,-1,9,5,0,5,6,0,6,3,0,3,6,11,7,4,8,-1,9,5,6,11,9,6,9,7,4,9,11,7,-1,-1,-1,-1,9,4,10,10,4,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,10,4,10,9,4,3,8,0,-1,-1,-1,-1,-1,-1,-1,1,0,10,0,6,10,0,4,6,-1,-1,-1,-1,-1,-1,-1,1,3,8,6,1,8,4,6,8,10,1,6,-1,-1,-1,-1,9,4,1,4,2,1,4,6,2,-1,-1,-1,-1,-1,-1,-1,8,0,3,9,2,1,9,4,2,4,6,2,-1,-1,-1,-1,4,2,0,6,2,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,4,2,8,6,2,4,-1,-1,-1,-1,-1,-1,-1,9,4,10,4,6,10,3,2,11,-1,-1,-1,-1,-1,-1,-1,2,8,0,11,8,2,10,9,4,6,10,4,-1,-1,-1,-1,2,11,3,6,1,0,4,6,0,10,1,6,-1,-1,-1,-1,1,4,6,10,1,6,1,8,4,11,1,2,1,11,8,-1,4,6,9,6,3,9,3,1,9,3,6,11,-1,-1,-1,-1,1,11,8,0,1,8,1,6,11,4,1,9,1,4,6,-1,6,11,3,0,6,3,4,6,0,-1,-1,-1,-1,-1,-1,-1,8,4,6,8,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,10,7,10,8,7,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,7,0,7,10,0,10,9,0,10,7,6,-1,-1,-1,-1,7,6,10,7,10,1,8,7,1,0,8,1,-1,-1,-1,-1,7,6,10,1,7,10,3,7,1,-1,-1,-1,-1,-1,-1,-1,6,2,1,8,6,1,9,8,1,7,6,8,-1,-1,-1,-1,9,6,2,1,9,2,9,7,6,3,9,0,9,3,7,-1,0,8,7,6,0,7,2,0,6,-1,-1,-1,-1,-1,-1,-1,2,3,7,2,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,3,2,8,6,10,9,8,10,7,6,8,-1,-1,-1,-1,7,0,2,11,7,2,7,9,0,10,7,6,7,10,9,-1,0,8,1,8,7,1,7,10,1,10,7,6,11,3,2,-1,1,2,11,7,1,11,1,6,10,1,7,6,-1,-1,-1,-1,6,9,8,7,6,8,6,1,9,3,6,11,6,3,1,-1,1,9,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,6,0,7,0,11,3,0,6,11,-1,-1,-1,-1,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,0,3,6,7,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,1,0,6,7,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,1,8,1,3,8,6,7,11,-1,-1,-1,-1,-1,-1,-1,2,1,10,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,2,1,8,0,3,7,11,6,-1,-1,-1,-1,-1,-1,-1,0,9,2,9,10,2,7,11,6,-1,-1,-1,-1,-1,-1,-1,7,11,6,3,10,2,3,8,10,8,9,10,-1,-1,-1,-1,3,2,7,7,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,0,7,0,6,7,0,2,6,-1,-1,-1,-1,-1,-1,-1,6,7,2,7,3,2,9,1,0,-1,-1,-1,-1,-1,-1,-1,2,6,1,6,8,1,8,9,1,6,7,8,-1,-1,-1,-1,6,7,10,7,1,10,7,3,1,-1,-1,-1,-1,-1,-1,-1,6,7,10,10,7,1,7,8,1,8,0,1,-1,-1,-1,-1,7,3,0,10,7,0,9,10,0,7,10,6,-1,-1,-1,-1,10,6,7,8,10,7,9,10,8,-1,-1,-1,-1,-1,-1,-1,4,8,6,6,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,6,3,6,0,3,6,4,0,-1,-1,-1,-1,-1,-1,-1,11,6,8,6,4,8,1,0,9,-1,-1,-1,-1,-1,-1,-1,6,4,9,3,6,9,1,3,9,6,3,11,-1,-1,-1,-1,4,8,6,8,11,6,1,10,2,-1,-1,-1,-1,-1,-1,-1,10,2,1,11,0,3,11,6,0,6,4,0,-1,-1,-1,-1,8,11,4,11,6,4,9,2,0,9,10,2,-1,-1,-1,-1,3,9,10,2,3,10,3,4,9,6,3,11,3,6,4,-1,3,2,8,2,4,8,2,6,4,-1,-1,-1,-1,-1,-1,-1,2,4,0,2,6,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,4,3,2,6,4,2,8,3,4,-1,-1,-1,-1,4,9,1,2,4,1,6,4,2,-1,-1,-1,-1,-1,-1,-1,3,1,8,1,6,8,6,4,8,1,10,6,-1,-1,-1,-1,0,1,10,6,0,10,4,0,6,-1,-1,-1,-1,-1,-1,-1,3,6,4,8,3,4,3,10,6,9,3,0,3,9,10,-1,4,9,10,4,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,9,4,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,8,0,5,9,4,6,7,11,-1,-1,-1,-1,-1,-1,-1,1,0,5,0,4,5,11,6,7,-1,-1,-1,-1,-1,-1,-1,6,7,11,4,3,8,4,5,3,5,1,3,-1,-1,-1,-1,4,5,9,2,1,10,11,6,7,-1,-1,-1,-1,-1,-1,-1,7,11,6,10,2,1,3,8,0,5,9,4,-1,-1,-1,-1,11,6,7,10,4,5,10,2,4,2,0,4,-1,-1,-1,-1,8,4,3,4,5,3,5,2,3,2,5,10,6,7,11,-1,3,2,7,2,6,7,9,4,5,-1,-1,-1,-1,-1,-1,-1,4,5,9,6,8,0,2,6,0,7,8,6,-1,-1,-1,-1,2,6,3,6,7,3,0,5,1,0,4,5,-1,-1,-1,-1,8,2,6,7,8,6,8,1,2,5,8,4,8,5,1,-1,4,5,9,6,1,10,6,7,1,7,3,1,-1,-1,-1,-1,10,6,1,6,7,1,7,0,1,0,7,8,4,5,9,-1,10,0,4,5,10,4,10,3,0,7,10,6,10,7,3,-1,10,6,7,8,10,7,10,4,5,10,8,4,-1,-1,-1,-1,5,9,6,9,11,6,9,8,11,-1,-1,-1,-1,-1,-1,-1,11,6,3,3,6,0,6,5,0,5,9,0,-1,-1,-1,-1,8,11,0,11,5,0,5,1,0,11,6,5,-1,-1,-1,-1,3,11,6,5,3,6,1,3,5,-1,-1,-1,-1,-1,-1,-1,10,2,1,11,5,9,8,11,9,6,5,11,-1,-1,-1,-1,3,11,0,11,6,0,6,9,0,9,6,5,10,2,1,-1,5,8,11,6,5,11,5,0,8,2,5,10,5,2,0,-1,3,11,6,5,3,6,3,10,2,3,5,10,-1,-1,-1,-1,9,8,5,8,2,5,2,6,5,2,8,3,-1,-1,-1,-1,6,5,9,0,6,9,2,6,0,-1,-1,-1,-1,-1,-1,-1,8,5,1,0,8,1,8,6,5,2,8,3,8,2,6,-1,6,5,1,6,1,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,3,1,10,6,1,6,8,3,9,6,5,6,9,8,-1,0,1,10,6,0,10,0,5,9,0,6,5,-1,-1,-1,-1,8,3,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,5,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,11,11,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,11,5,7,11,0,3,8,-1,-1,-1,-1,-1,-1,-1,7,11,5,11,10,5,0,9,1,-1,-1,-1,-1,-1,-1,-1,5,7,10,7,11,10,1,8,9,1,3,8,-1,-1,-1,-1,2,1,11,1,7,11,1,5,7,-1,-1,-1,-1,-1,-1,-1,3,8,0,7,2,1,5,7,1,11,2,7,-1,-1,-1,-1,5,7,9,7,2,9,2,0,9,7,11,2,-1,-1,-1,-1,2,5,7,11,2,7,2,9,5,8,2,3,2,8,9,-1,10,5,2,5,3,2,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,2,8,2,5,8,5,7,8,5,2,10,-1,-1,-1,-1,1,0,9,3,10,5,7,3,5,2,10,3,-1,-1,-1,-1,2,8,9,1,2,9,2,7,8,5,2,10,2,5,7,-1,5,3,1,5,7,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,1,7,0,5,7,1,-1,-1,-1,-1,-1,-1,-1,3,0,9,5,3,9,7,3,5,-1,-1,-1,-1,-1,-1,-1,7,8,9,7,9,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,5,8,10,5,8,11,10,-1,-1,-1,-1,-1,-1,-1,4,0,5,0,11,5,11,10,5,0,3,11,-1,-1,-1,-1,9,1,0,10,4,8,11,10,8,5,4,10,-1,-1,-1,-1,4,11,10,5,4,10,4,3,11,1,4,9,4,1,3,-1,1,5,2,5,8,2,8,11,2,8,5,4,-1,-1,-1,-1,11,4,0,3,11,0,11,5,4,1,11,2,11,1,5,-1,5,2,0,9,5,0,5,11,2,8,5,4,5,8,11,-1,5,4,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,2,2,5,3,5,4,3,4,8,3,-1,-1,-1,-1,2,10,5,4,2,5,0,2,4,-1,-1,-1,-1,-1,-1,-1,2,10,3,10,5,3,5,8,3,8,5,4,9,1,0,-1,2,10,5,4,2,5,2,9,1,2,4,9,-1,-1,-1,-1,5,4,8,3,5,8,1,5,3,-1,-1,-1,-1,-1,-1,-1,5,4,0,5,0,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,4,8,3,5,8,5,0,9,5,3,0,-1,-1,-1,-1,5,4,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,11,4,11,9,4,11,10,9,-1,-1,-1,-1,-1,-1,-1,3,8,0,7,9,4,7,11,9,11,10,9,-1,-1,-1,-1,11,10,1,4,11,1,0,4,1,11,4,7,-1,-1,-1,-1,4,1,3,8,4,3,4,10,1,11,4,7,4,11,10,-1,7,11,4,4,11,9,11,2,9,2,1,9,-1,-1,-1,-1,4,7,9,7,11,9,11,1,9,1,11,2,3,8,0,-1,4,7,11,2,4,11,0,4,2,-1,-1,-1,-1,-1,-1,-1,4,7,11,2,4,11,4,3,8,4,2,3,-1,-1,-1,-1,10,9,2,9,7,2,7,3,2,9,4,7,-1,-1,-1,-1,7,10,9,4,7,9,7,2,10,0,7,8,7,0,2,-1,10,7,3,2,10,3,10,4,7,0,10,1,10,0,4,-1,2,10,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,4,7,1,4,3,1,7,-1,-1,-1,-1,-1,-1,-1,1,9,4,7,1,4,1,8,0,1,7,8,-1,-1,-1,-1,3,0,4,3,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,10,9,8,11,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,3,11,9,3,10,9,11,-1,-1,-1,-1,-1,-1,-1,10,1,0,8,10,0,11,10,8,-1,-1,-1,-1,-1,-1,-1,10,1,3,10,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,2,1,9,11,1,8,11,9,-1,-1,-1,-1,-1,-1,-1,9,0,3,11,9,3,9,2,1,9,11,2,-1,-1,-1,-1,11,2,0,11,0,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,2,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,10,8,2,9,8,10,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,10,8,2,8,1,0,8,10,1,-1,-1,-1,-1,2,10,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]),numTrisTable:new Float32Array([0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,2,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,3,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,3,2,3,3,2,3,4,4,3,3,4,4,3,4,5,5,2,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,3,2,3,3,4,3,4,4,5,3,4,4,5,4,5,5,4,2,3,3,4,3,4,2,3,3,4,4,5,4,5,3,2,3,4,4,3,4,5,3,2,4,5,5,4,5,2,4,1,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,3,2,3,3,4,3,4,4,5,3,2,4,3,4,3,5,2,2,3,3,4,3,4,4,5,3,4,4,5,4,5,5,4,3,4,4,3,4,5,5,4,4,3,5,2,5,4,2,1,2,3,3,4,3,4,4,5,3,4,4,5,2,3,3,2,3,4,4,5,4,5,5,2,4,3,5,4,3,2,4,1,3,4,4,5,4,5,3,4,4,5,5,2,3,4,2,1,2,3,3,2,3,4,2,1,3,2,4,1,2,1,1,0])}}var K=new ct,st=null;function Et(t){st=t}function Mt(){return st}var rt=null;function Ct(t){rt=t}function Ft(){return rt}var ot=null;function Nt(t){ot=t}function _t(){return ot}var R=Pt(),It=24,Vt=96,J=!1,lt=!0;try{let t=new URLSearchParams(window.location.search);J=t.get("dbgsbstatic")==="0",lt=t.get("sb512")!=="0"}catch{}function zt(t){let e=t.getAttribute("position");return e===void 0?-1:1048576*(e.version??e.data?.version??0)+(e.count??0)%1048576}var ht=class extends it{constructor(t,e,n){super(t,e,n),this.data=e,this.isShapeBlendEntity=!0,this.needsRebuild=!0,this.customDepthMaterialNeedsUpdate=!1,this._prevShapeData=null,this._prevSpan=-1,this._reach=new Float32Array(96),this._prevReach=new Float32Array(96),this._fieldDirtyFull=!0,this._fieldDirtyMin=new I,this._fieldDirtyMax=new I,this._maxBlendK=0,this._meshSdfBaked=new Map,this._meshSdfWanted=new Map,this._passesRenderer=null,this._npart=-1,this.spatialn=1,this.drawRangeNeedsForceUpdate=!0,this._resolutionLevel=-1,this._authoredResolutionLevel=-1,this.ultraFieldResolution=0,this.resolution=64,this.spatialDivisions=25,this.zLayersPerRow=8,this.basePyramidSize=512,this.pyramidTexture1Width=341,this.pyramidTexture1Height=256,this.pyramidTexture2Width=170,this.pyramidTexture2Height=128,this.numLevels=9,this.pyramidLevelSizes=[1,2,4,8,16,32,64,128,256,512],this.bboxSize=0,this.bboxOffset=0,this.shapesDataTexture={value:void 0},this.spatialscene=new W,this.potentialPassScene=new W,this.voxelPassScene=new W,this._spatialPassRenderTargets=[],this._potentialPassRenderTargets=[],this._voxelPassRenderTargets=[],this._pyramidRenderTargets=[],this.geometry=new Y,this.geometry.drawRange.count=0,this.spatialPassUniforms={span:{value:-1},shapesDataTexture:this.shapesDataTexture,npart:{value:this.npart},spatialn:{value:this.spatialn}},this.spatialMesh=new q(X,this.spatialPassMaterial()),this.spatialMesh.frustumCulled=!1,this.spatialscene.add(this.spatialMesh);let r=new Q(R.triTable,16,256,$,L);r.needsUpdate=!0;let b=new Q(R.numTrisTable,256,1,$,L);b.needsUpdate=!0,this.voxelPassUniforms={potentialPassTexture:{value:void 0},numTrisTable:{value:b}},this.voxelMesh=new q(X,this.voxelPassMaterial()),this.voxelMesh.frustumCulled=!1,this.voxelPassScene.add(this.voxelMesh),this.potentialPassUniforms={shapesDataTexture:this.shapesDataTexture,spatialPassTexture:{value:void 0},npart:{value:this.npart},spatialn:{value:this.spatialn}},this.potentialMesh=new q(X,this.potentialPassMaterial()),this.potentialMesh.frustumCulled=!1,this.potentialPassScene.add(this.potentialMesh),this.marchPassUniforms={triTable:{value:r},potentialPassTexture:{value:void 0},voxelPassTexture:{value:void 0},pyramidTexture1:{value:void 0},pyramidTexture1Size:{value:void 0},pyramidTexture2:{value:void 0},pyramidTexture2Size:{value:void 0}},this.frustumCulled=!1,this.onBeforeShadowPass=d=>{let U=dt.call(this);if(this.npart===0)return void(this.geometry.drawRange.count=0);let a=this.material.root;if(a.shadersPatchedForShapeBlend){if(this.customDepthMaterialNeedsUpdate){this.customDepthMaterialNeedsUpdate=!1,this.customDepthMaterial=new tt({vertexShader:a.vertexShader,fragmentShader:`
						#include <packing>
						void main()
						{
							gl_FragColor = packDepthToRGBA(gl_FragCoord.z);
						}
					`,uniforms:a.uniforms,defines:this.material.defines}),this.isMeshDepthMaterial=!0,this.customDistanceMaterial=new tt({vertexShader:a.vertexShader,fragmentShader:`
					#include <common>
					#include <packing>
					uniform vec3 referencePosition;
					uniform float nearDistance;
					uniform float farDistance;
					
					varying vec3 vWPosition;
					void main()
					{
						float dist = length(vWPosition - referencePosition);
						dist = (dist - nearDistance) / (farDistance - nearDistance);
						dist = saturate(dist);
						
						gl_FragColor = packDepthToRGBA( dist );
					}`,uniforms:{nearDistance:{value:0},farDistance:{value:0},referencePosition:{value:new I},opacity:{value:0},...a.uniforms},defines:this.material.defines});let l=this.customDistanceMaterial;l.referencePosition=new I,l.nearDistance=0,l.farDistance=0,l.opacity=1,l.isMeshDistanceMaterial=!0}}else this.patchVertexShaderForShapeBlend(a),a.shadersPatchedForShapeBlend=!0,this.customDepthMaterialNeedsUpdate=!0;this.spatialPassUniforms.npart.value=this.npart,this.spatialPassUniforms.spatialn.value=this.spatialn,this.potentialPassUniforms.npart.value=this.npart,this.potentialPassUniforms.spatialn.value=this.spatialn;let k=this.needsRebuild;if(this.needsRebuild){this.needsRebuild=!1,this.spatialMesh.material.defines.RES=this.resolutionLevel,this.spatialMesh.material.needsUpdate=!0,this.potentialMesh.material.defines.RES=this.resolutionLevel,this.potentialPassUniforms.spatialPassTexture.value=this.spatialPassRenderTarget.texture,this.potentialMesh.material.needsUpdate=!0,this.voxelMesh.material.defines.RES=this.resolutionLevel,this.voxelMesh.material.needsUpdate=!0,this.voxelPassUniforms.potentialPassTexture.value=this.potentialPassRenderTarget.texture,this.marchPassUniforms.potentialPassTexture.value=this.potentialPassRenderTarget.texture,this.marchPassUniforms.voxelPassTexture.value=this.voxelPassRenderTarget.textures[0],this.material.defines.RES=this.resolutionLevel,this.material.defines.LEVELS=this.pyramidLevelSizes.length,this.material.defines.LOOP=this.pyramidLevelSizes.length%2==0?this.pyramidLevelSizes.length-3:this.pyramidLevelSizes.length-2,this.material.defines.HALF=this.pyramidLevelSizes.length%2==0?1:0,this.material.needsUpdate=!0;let l=this.pyramidLevelSizes.length%2==0?0:1,S=this.pyramidLevelSizes.length%2==0?1:0;this.marchPassUniforms.pyramidTexture2.value=this.pyramidRenderTarget[l].texture,this.marchPassUniforms.pyramidTexture2Size.value=new j(this.pyramidRenderTarget[l].width,this.pyramidRenderTarget[l].height),this.marchPassUniforms.pyramidTexture1.value=this.pyramidRenderTarget[S].texture,this.marchPassUniforms.pyramidTexture1Size.value=new j(this.pyramidRenderTarget[S].width,this.pyramidRenderTarget[S].height),Object.assign(this.material.uniforms,this.marchPassUniforms)}if(!U&&!k&&!this.drawRangeNeedsForceUpdate&&this._passesRenderer===d)return;this._passesRenderer=d;let u=d.shadowMap.enabled;d.shadowMap.enabled=!1;let v=d.getRenderTarget();d.setRenderTarget(this.spatialPassRenderTarget),d.render(this.spatialscene,K),d.setRenderTarget(this.potentialPassRenderTarget),d.render(this.potentialPassScene,K),d.setRenderTarget(this.voxelPassRenderTarget),d.render(this.voxelPassScene,K),ht.streamCompaction.renderPyramid(this.resolutionLevel,this.pyramidLevelSizes,d,this.voxelPassRenderTarget,this.pyramidRenderTarget).then(l=>{this.material.wireframe&&(3*l>this.geometry.attributes.position.count||this.drawRangeNeedsForceUpdate)&&(this.geometry.dispose(),this.geometry=new Y,this.geometry.userData.parameters={width:this.bboxSize,height:this.bboxSize,depth:this.bboxSize,centerOffset:[this.bboxOffset,this.bboxOffset,this.bboxOffset]},this.geometry.attributes.position=new Z(new Float32Array(3*l*2),3)),(3*l>this.geometry.drawRange.count||this.drawRangeNeedsForceUpdate)&&(this.geometry.drawRange.count=3*Math.floor(1.2*l),this.markSceneShadowsDirty()),this.drawRangeNeedsForceUpdate=!1}),d.shadowMap.enabled=u,d.setRenderTarget(v)}}markSceneShadowsDirty(){let t=this.parent;if(t!==null){for(;t.parent;)t=t.parent;t.markShadowsDirty?.()}}set npart(t){t!==this._npart&&(this.drawRangeNeedsForceUpdate=!0,this._npart=t,this.spatialn=Math.ceil(t/96))}get npart(){return this._npart}set resolutionLevel(t){let e=Math.min(lt?9:8,Math.max(5,t));if(e===this._authoredResolutionLevel)return;this._authoredResolutionLevel=e,this.ultraFieldResolution=Math.pow(2,e);let n=Math.min(8,e);switch(this._resolutionLevel=n,this.resolution=Math.pow(2,n),this.resolutionLevel){case 5:this.pyramidLevelSizes=[1,2,4,6,12,24,48,96,192],this.bboxSize=496,this.bboxOffset=-8;break;case 6:this.pyramidLevelSizes=[1,2,4,8,16,32,64,128,256,512],this.bboxSize=504,this.bboxOffset=-4;break;case 7:this.pyramidLevelSizes=[1,2,4,6,12,24,48,96,192,384,768,1536],this.bboxSize=508,this.bboxOffset=-2;break;case 8:this.pyramidLevelSizes=[1,2,4,8,16,32,64,128,256,512,1024,2048,4096],this.bboxSize=510,this.bboxOffset=-1}this.pyramidTexture1Width=0,this.pyramidTexture2Width=0,this.pyramidTexture1Height=this.pyramidLevelSizes[this.pyramidLevelSizes.length-2],this.pyramidTexture2Height=this.pyramidLevelSizes[this.pyramidLevelSizes.length-3];for(let r=this.pyramidLevelSizes.length-2;r>=0;r--)(this.pyramidLevelSizes.length-2)%2==r%2?this.pyramidTexture1Width+=this.pyramidLevelSizes[r]:this.pyramidTexture2Width+=this.pyramidLevelSizes[r];this.basePyramidSize=this.pyramidLevelSizes[this.pyramidLevelSizes.length-1],this.zLayersPerRow=this.basePyramidSize/this.resolution,this.numLevels=this.pyramidLevelSizes.length-1,this.geometry.userData.parameters={width:this.bboxSize,height:this.bboxSize,depth:this.bboxSize,centerOffset:[this.bboxOffset,this.bboxOffset,this.bboxOffset]},this.needsRebuild=!0,this.customDepthMaterialNeedsUpdate=!0}get resolutionLevel(){return this._resolutionLevel}get spatialPassRenderTarget(){let t=this._spatialPassRenderTargets[this.resolutionLevel];return t||(t=new B(this.spatialDivisions*this.spatialn,this.spatialDivisions**2,{format:N,type:L,stencilBuffer:!1,depthBuffer:!1,generateMipmaps:!1,minFilter:w,magFilter:w}),this._spatialPassRenderTargets[this.resolutionLevel]=t),t}get potentialPassRenderTarget(){let t=this._potentialPassRenderTargets[this.resolutionLevel];return t||(t=new B(this.basePyramidSize,this.basePyramidSize,{format:N,type:L,stencilBuffer:!1,depthBuffer:!1,generateMipmaps:!1,minFilter:w,magFilter:w}),this._potentialPassRenderTargets[this.resolutionLevel]=t),t}get voxelPassRenderTarget(){let t=this._voxelPassRenderTargets[this.resolutionLevel];return t||(t=new B(this.basePyramidSize,this.basePyramidSize,{count:2,stencilBuffer:!1,depthBuffer:!1,generateMipmaps:!1,minFilter:w,magFilter:w}),t.textures[0].format=N,t.textures[0].type=L,t.textures[1].format=$,t.textures[1].type=L,this._voxelPassRenderTargets[this.resolutionLevel]=t),t}get pyramidRenderTarget(){let t=this._pyramidRenderTargets[this.resolutionLevel];return t||(t=[new B(this.pyramidTexture1Width,this.pyramidTexture1Height,{format:N,type:L,stencilBuffer:!1,depthBuffer:!1,magFilter:w,minFilter:w}),new B(this.pyramidTexture2Width,this.pyramidTexture2Height,{format:N,type:L,stencilBuffer:!1,depthBuffer:!1,magFilter:w,minFilter:w})],this._pyramidRenderTargets[this.resolutionLevel]=t),t}updateGeometryInteractions(){}updateState(t,e){let n=this.material;super.updateState(t,e),n!==this.material&&(this.needsRebuild=!0),t.geometry&&(this.resolutionLevel=t.geometry.resolutionLevel,this.geometry.userData.parameters={width:this.bboxSize,height:this.bboxSize,depth:this.bboxSize,centerOffset:[this.bboxOffset,this.bboxOffset,this.bboxOffset]}),t.wireframe&&!this.geometry.getAttribute("position")?this.geometry.setAttribute("position",new Z(new Float32Array(3*this.geometry.drawRange.count),3)):!t.wireframe&&this.geometry.getAttribute("position")&&this.geometry.deleteAttribute("position")}spatialPassMaterial(){let t=`
			precision highp float;
			out vec4 pc_FragColor;
			const float spatialDivisions = ${this.spatialDivisions}.;
			uniform float span;
			uniform float npart;
			uniform float spatialn;
			${R.shapeInput()}

			vec3 low, high;     

			
			
			
			float spatialKey(float lowi) {
				float t = 0.;
				for (float ii = 23.; ii >= 0.; ii--) {
					float i = ii + lowi;
					float iin = (i + 0.5) / 96.;
					vec4 shape = shapePos(iin);
					vec3 d = shape.xyz;
					float op = shape.w;
	
					t *= 2.;
					t += (
						low.x < d.x && d.x < high.x &&
						low.y < d.y && d.y < high.y &&
						low.z < d.z && d.z < high.z &&
						i < npart || op == -2. 
					) ? 1. : 0.;
				}
				return t;
			}

			${R.getpart}

			void main() {               
				
				vec3 div;                               
				
				float yz = float(gl_FragCoord.y - 0.5);     
				div.y = getpart(yz, spatialDivisions);
				div.z = yz; 

				float lx = float(gl_FragCoord.x - 0.5);     
				float lowi = getpart(lx, spatialn) * 96.;
				div.x = lx;

				low = div / spatialDivisions * 2. - 1. - span;
				high = (div+1.) / spatialDivisions * 2. - 1. + span;

				
				pc_FragColor.x = spatialKey(lowi);
				pc_FragColor.y = spatialKey(lowi+24.);
				pc_FragColor.z = spatialKey(lowi+48.);
				pc_FragColor.w = spatialKey(lowi+72.);
			}
		`;return new H({name:"Spatial Pass",fragmentShader:t,uniforms:this.spatialPassUniforms})}potentialPassMaterial(){let t=`
			precision highp float;
			out vec4 pc_FragColor;

			${R.shapeInput()}
			uniform sampler2D spatialPassTexture;

			const float res = float(RES);
			const float VOXEL_RESOLUTION = pow(2., res);
			const float Z_LAYERS_PER_ROW = ceil(pow(2., res / 2.));
			const float VOXEL_RESOLUTION_SUB1 = VOXEL_RESOLUTION - 1.;
			const float INV_VOXEL_RESOLUTION = 1.0 / VOXEL_RESOLUTION;

			uniform float npart;
			uniform float spatialn;
			const float spatialDivisions = ${this.spatialDivisions}.;
			const float spatialDivisions2 = spatialDivisions * spatialDivisions;
			const float spatialDivisionsSub1 = spatialDivisions - 1.;

			${R.getpart}

			vec3 packRGBAToVec3(vec4 color) {
				uint r = uint(color.r * 255.);
				uint g = uint(color.g * 255.);
				uint combined = (r << 8) | g; 
				return vec3(float(combined) * 0.00001525902, color.b, color.a); 
			}

			void applyQuaternionToVector(in vec4 q, inout vec3 v) {
				v += 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v);
			}

			



			
			float smoothOperation(float op, float sdf, float d, float k) {
			  
			  
				

				float signSubtract = clamp(op, -1., 1.);
				float signIntersection = 2. * (op - signSubtract) + 1.;
				float h = clamp(
					0.5 + signSubtract * 0.5 * (sdf - signSubtract * signIntersection * d) / k,
					0.0,
					1.0
				);
				return mix(sdf, signSubtract * signIntersection * d, h) - 
							 signSubtract * k * h * (1.0 - h);
			}

			float sdSphere( vec3 p, float s )
			{
				return length(p)-s;
			}

			float sdEllipsoid( vec3 p, vec3 r )
			{
				float k0 = length(p/r);
				float k1 = length(p/(r*r));
				return k0*(k0-1.0)/k1;
			}

			float sdBox( vec3 p, vec3 b )
			{
				vec3 q = abs(p) - b;
				return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
			}

			float sdTorus( vec3 p, vec2 t )
			{
				vec2 q = vec2(length(p.xy)-t.x,p.z);
				return length(q)-t.y;
			}

			float sdCappedTorus( vec3 p, vec2 sc, float ra, float rb)
			{
				p.x = abs(p.x);
				float k = (sc.y*p.x>sc.x*p.y) ? dot(p.xy,sc) : length(p.xy);
				return sqrt( dot(p,p) + ra*ra - 2.0*ra*k ) - rb;
			}

			float dot2( in vec2 v ) { return dot(v,v); }
			float sdCappedCone( vec3 p, float h, float r1, float r2 )
			{
				vec2 q = vec2( length(p.xz), p.y );
				vec2 k1 = vec2(r2,h);
				vec2 k2 = vec2(r2-r1,2.0*h);
				vec2 ca = vec2(q.x-min(q.x,(q.y<0.0)?r1:r2), abs(q.y)-h);
				vec2 cb = q - k1 + k2*clamp( dot(k1-q,k2)/dot2(k2), 0.0, 1.0 );
				float s = (cb.x<0.0 && ca.y<0.0) ? -1.0 : 1.0;
				return s*sqrt( min(dot2(ca),dot2(cb)) );
			}

			float sdCappedCylinder( vec3 p, float h, float r )
			{
				vec2 d = abs(vec2(length(p.xz),p.y)) - vec2(r,h);
				return min(max(d.x,d.y),0.0) + length(max(d,0.0));
			}

			float maxBlend = 0.0;
			
			
			
			
			void fillSpatialInner(
				float ii,
				float activeKey,
				vec3 corner,
				inout float sdf,
				inout float colorDivisor,
				inout vec4 trackColor
			) {
				for (float i = 0.; i < 24.; i++) {
					if (activeKey < 1.) break; 
					activeKey *= 0.5;
					if (fract(activeKey) < 0.5) continue;

					float iin = (i + ii + 0.5) * ${.010416666666666666};
					vec4 shape = shapePos(iin);
					vec4 quat = shapeQuat(iin);
					vec4 params1 = shapeParams1(iin);
					vec4 params2 = shapeParams2(iin);

					vec3 p = corner - shape.xyz;
					applyQuaternionToVector(quat, p);
					p /= params2.z; // scale
					float d; // d in -1..1 coordinates
					switch (int(params1.x)) {
						case 0: d = sdSphere(p, params1.y); break;
						case 1: d = sdEllipsoid(p, params1.yzw); break;
						case 2: d = sdBox(p, params1.yzw); break;
						case 3: d = sdCappedCylinder(p, params1.y, params1.z); break;
						case 4: d = sdCappedCone(p, params1.y, params1.z, params1.w); break;
						case 5: d = sdTorus(p, params1.yz); break;
						case 6: d = sdCappedTorus(p, params1.yz, params1.w, params2.w); break;
						// Mesh children (type 7) live in a WebGPU-only baked SDF
						// atlas — the GLSL evaluator skips the shape entirely
						// (also closes the latent uninitialized-d default).
						default: continue;
					}
					d -= params2.y; // rounded edge
					d *= params2.z; // scale

					float k = params2.x;
					float op = shape.w;

					sdf = smoothOperation(shape.w, sdf, d, k);

					float isNegativeOne = step(-1.5, op) * step(op, -0.5); // 1 when op == -1, 0 otherwise
					float colorCull = smoothstep(maxBlend, 0., -d);
					float cullFactor = mix(1.0, colorCull, isNegativeOne);
					trackColor *= cullFactor;
					colorDivisor *= cullFactor;

					maxBlend = max(maxBlend, k);

					k += 2. * INV_VOXEL_RESOLUTION; // avoid division by zero, and other color artifacts with very small k
					float nearness = smoothstep(k, 0., d);

					vec4 color = shapeColor(iin);
					nearness *= float(color.a >= 0.);

					colorDivisor += nearness;
					trackColor += color * nearness;
				}
			}

			vec3 div;
			// compute potential from all spheres; collect +ve and =ve values separately
			// work in blocks of A*4 (=96) spheres, using the bit flags in 4 float channel 'activeKey' values
			// TODO check if extra vec3 output useful, not really used at present
			float fillSpatial(vec3 corner, inout vec4 trackColor) {
				float sdf = 1e3; // hack: initialize to large value
				float colorDivisor = 0.;
				// spatialPassTexture holds x=> lowi, x faster moving and y=> z, y faster moving
				float divyz = (div.y + div.z * spatialDivisions + 0.5) / (spatialDivisions2);
				for (float ii = 0.; ii < spatialn; ii++) {
					float i = ii * 96.;

					vec4 activeKey = texture(spatialPassTexture, vec2((div.x * spatialn + ii + 0.5)/(spatialn * spatialDivisions), divyz));
					fillSpatialInner(i, activeKey.x, corner, sdf, colorDivisor, trackColor);
					fillSpatialInner(i+24., activeKey.y, corner, sdf, colorDivisor, trackColor);
					fillSpatialInner(i+48., activeKey.z, corner, sdf, colorDivisor, trackColor);
					fillSpatialInner(i+72., activeKey.w, corner, sdf, colorDivisor, trackColor);
				}

				trackColor /= colorDivisor;
				return mix(sdf, 0.0, step(1e20 - 0.1, sdf));
			}

			void main() {
				${R.getxyzi}    

				vec3 xyzi = vec3(xi,yi,zi);
				vec3 corner = xyzi / VOXEL_RESOLUTION_SUB1 * 2. - 1.;  

				div = floor(xyzi / VOXEL_RESOLUTION_SUB1 * spatialDivisionsSub1);

				vec4 c = vec4(0.);
				float t = fillSpatial(corner, c);

				pc_FragColor = vec4(t, packRGBAToVec3(c)); 
			}
		`;return new H({name:"PotentialPass",fragmentShader:t,uniforms:this.potentialPassUniforms})}voxelPassMaterial(){let t=`
			precision highp float;
			layout(location = 0) out vec4 pc_FragColor;
			layout(location = 1) out vec4 numTris;

			const float res = float(RES);
			const float VOXEL_RESOLUTION = pow(2., res);
			const float VOXEL_RESOLUTION_SUB1 = VOXEL_RESOLUTION - 1.; 
			const float Z_LAYERS_PER_ROW = ceil(pow(2., res / 2.));
			const float INV_VOXEL_RESOLUTION = 1.0 / VOXEL_RESOLUTION;
			uniform sampler2D numTrisTable; 

			float keyi(float f000, float f100, float f010, float f110, float f001, float f101, float f011, float f111) {
				return (float(f000 < 0.) * 1.) +
							 (float(f100 < 0.) * 2.) +
							 (float(f010 < 0.) * 8.) +
							 (float(f110 < 0.) * 4.) +
							 (float(f001 < 0.) * 16.) +
							 (float(f101 < 0.) * 32.) +
							 (float(f011 < 0.) * 128.) +
							 (float(f111 < 0.) * 64.);
			}

			${R.lookup}

			vec3 compNormi(float xi, float yi, float zi) {
				float dx = look(xi + 1., yi, zi, potentialPassTexture).r - look(xi - 1., yi, zi, potentialPassTexture).r;
				float dy = look(xi, yi + 1., zi, potentialPassTexture).r - look(xi, yi - 1., zi, potentialPassTexture).r;
				float dz = look(xi, yi, zi + 1., potentialPassTexture).r - look(xi, yi, zi - 1., potentialPassTexture).r;
				
				
				if (dx == 0.0 && dy == 0.0 && dz == 0.0) {
					return vec3(0.199, 0.299, 0.399);
				}
				return normalize(vec3(dx, dy, dz));
			}

			void main() {
				${R.getxyzi}    

				vec3 normal = compNormi(xi, yi, zi);  

				if (xi >= VOXEL_RESOLUTION_SUB1 || yi >= VOXEL_RESOLUTION_SUB1 || zi >= VOXEL_RESOLUTION_SUB1) {
					pc_FragColor = vec4(normal, 0.);
					numTris = vec4(0.);
					return;
				}

				float
					f000 = look(xi, yi, zi, potentialPassTexture).r,
					f100 = look(xi+1., yi, zi, potentialPassTexture).r,
					f010 = look(xi, yi+1., zi, potentialPassTexture).r,
					f110 = look(xi+1., yi+1., zi, potentialPassTexture).r,
					f001 = look(xi, yi, zi+1., potentialPassTexture).r,
					f101 = look(xi+1., yi, zi+1., potentialPassTexture).r,
					f011 = look(xi, yi+1., zi+1., potentialPassTexture).r,
					f111 = look(xi+1., yi+1., zi+1., potentialPassTexture).r;
				float key = keyi(f000, f100, f010, f110, f001, f101, f011, f111);

				pc_FragColor = vec4(normal, key);

				numTris = texture(numTrisTable, vec2((key + 0.5) / 256., 0.5));
			}
		`;return new H({name:"VoxelPass",fragmentShader:t,uniforms:this.voxelPassUniforms})}patchVertexShaderForShapeBlend(t){let e=`
		#ifdef SHAPEBLEND 
			precision highp sampler2D;

			uniform float isol;

			uniform sampler2D triTable;     
			uniform sampler2D pyramidTexture1;
			uniform vec2 pyramidTexture1Size;
			uniform sampler2D pyramidTexture2;
			uniform vec2 pyramidTexture2Size;

			const vec2 halfPixelOffset = vec2(0.5, 0.5);

			const vec2 rShift = vec2(0., 1.);
			const vec2 gShift = vec2(1., 1.);
			const vec2 bShift = vec2(1., 0.);

			const float res = float(RES);
			const float VOXEL_RESOLUTION = pow(2., res);
			const float Z_LAYERS_PER_ROW = ceil(pow(2., res / 2.));
			const float INV_VOXEL_RESOLUTION = 1.0 / VOXEL_RESOLUTION;

			const float scale_factor = 2.;

			#if SHAPEBLEND == 5
				const float levelShiftX[7] = float[7](4., 6., 12., 24., 48., 96., 192.);
				const float scale = 8. * scale_factor;
				const vec3 originOffset = vec3(16.);
			#elif SHAPEBLEND == 7
				const float levelShiftX[10] = float[10](4., 6., 12., 24., 48., 96., 192., 384., 768., 1536.); 
				const float scale = 2. * scale_factor;
				const vec3 originOffset = vec3(64.);
			#elif SHAPEBLEND == 8
				const float levelShiftX[11] = float[11](4., 8., 16., 32., 64., 128., 256., 512., 1024., 2048., 4096.);
				const float scale = scale_factor;
				const vec3 originOffset = vec3(128.);
			#else
				const float levelShiftX[8] = float[8](4., 8., 16., 32., 64., 128., 256., 512.);
				const float scale = 4. * scale_factor;
				const vec3 originOffset = vec3(32.);
			#endif

			${R.lookup}

			const vec3 offsets[24] = vec3[](
				vec3(0., 0., 0.), vec3(1., 0., 0.),
				vec3(1., 0., 0.), vec3(1., 1., 0.),
				vec3(0., 1., 0.), vec3(1., 1., 0.),
				vec3(0., 0., 0.), vec3(0., 1., 0.),
				vec3(0., 0., 1.), vec3(1., 0., 1.),
				vec3(1., 0., 1.), vec3(1., 1., 1.),
				vec3(0., 1., 1.), vec3(1., 1., 1.),
				vec3(0., 0., 1.), vec3(0., 1., 1.),
				vec3(0., 0., 0.), vec3(0., 0., 1.),
				vec3(1., 0., 0.), vec3(1., 0., 1.),
				vec3(1., 1., 0.), vec3(1., 1., 1.),
				vec3(0., 1., 0.), vec3(0., 1., 1.)
			);

			vec2 computeShiftedPosition1(vec2 xy, float levelOriginX) {
				vec2 xyShifted = xy;
				xyShifted.x += levelOriginX;
				return (xyShifted + halfPixelOffset) / pyramidTexture1Size;
			}

			vec2 computeShiftedPosition2(vec2 xy, float levelOriginX) {
				vec2 xyShifted = xy;
				xyShifted.x += levelOriginX;
				return (xyShifted + halfPixelOffset) / pyramidTexture2Size;
			}

			vec4 unpackVec3ToRGBA(vec3 vec) {
				uint combined = uint(vec.x * 65535.0 + 0.5); 
				float g = float(combined & uint(0xFF)) * 0.00392156862; 
				float r = float((combined >> 8) & uint(0xFF)) * 0.00392156862; 
		
				return vec4(r, g, vec.y, vec.z);
			}

			out vec4 marchColor;
			
		#endif
		`;t.vertexShader=e+t.vertexShader.replace("#include <project_vertex>",`
		#ifdef SHAPEBLEND
			float triIndex = floor(float(gl_VertexID/3));
			float vertexIndex = float(gl_VertexID);
			
			
			float levelOriginX1 = pyramidTexture1Size.x - 2.;
			float levelOriginX2 = pyramidTexture2Size.x - 1.;
			vec2 xy = vec2(0.);
			vec4 lookUp = texture(pyramidTexture2, computeShiftedPosition2(xy, levelOriginX2));
			
			
			if (triIndex >= lookUp.r) return;
			
			
			float start = 0.;
			vec4 triIndexVec = vec4(triIndex);
			
			
			for (int i = 0; i < LOOP;) {
				
				vec4 ends = lookUp + vec4(start);
				vec4 starts = vec4(ends.gba, start);
				vec4 check = vec4(greaterThanEqual(triIndexVec, starts)) * 
											vec4(lessThan(triIndexVec, ends));
				
				
				xy *= 2.;
				xy += check.r * rShift + check.g * gShift + check.b * bShift;
				
				
				start = dot(check, starts);
				levelOriginX2 -= levelShiftX[i];
				
				
				lookUp = texture(pyramidTexture1, computeShiftedPosition1(xy, levelOriginX1));
				i++;

				ends = lookUp + vec4(start);
				starts = vec4(ends.gba, start);
				check = vec4(greaterThanEqual(triIndexVec, starts)) * 
											vec4(lessThan(triIndexVec, ends));
				
				
				xy *= 2.;
				xy += check.r * rShift + check.g * gShift + check.b * bShift;
				
				
				start = dot(check, starts);
				levelOriginX1 -= levelShiftX[i];
				
				
				lookUp = texture(pyramidTexture2, computeShiftedPosition2(xy, levelOriginX2));

				i++;
			}

			#if HALF == 1
				vec4 ends = lookUp + vec4(start);
				vec4 starts = vec4(ends.gba, start);
				vec4 check = vec4(greaterThanEqual(triIndexVec, starts)) * vec4(lessThan(triIndexVec, ends));
			
				
				xy *= 2.;
				xy += check.r * rShift + check.g * gShift + check.b * bShift;
			
				
				start = dot(check, starts);
			#endif
			
			
			vec3 gridPos;
			gridPos.x = mod(xy.x, VOXEL_RESOLUTION);
			gridPos.y = mod(xy.y, VOXEL_RESOLUTION);
			gridPos.z = floor(xy.x * INV_VOXEL_RESOLUTION) + 
									floor(xy.y * INV_VOXEL_RESOLUTION) * Z_LAYERS_PER_ROW;
			
			
			vertexIndex -= start * 3.;
			float vk = vertexIndex * 0.0625 + 0.03125; 
			
			
			vec4 voxel = look(gridPos.x, gridPos.y, gridPos.z, voxelPassTexture);
			float key = (voxel.w + 0.5) * 0.00390625; 
			
			
			float edgeNum = texture(triTable, vec2(vk, key)).x;
			int edgeIndex = int(edgeNum) * 2;
			
			
			vec3 p1 = gridPos + offsets[edgeIndex];
			vec3 p2 = gridPos + offsets[edgeIndex + 1];
			
			
			vec4 potential1 = look(p1.x, p1.y, p1.z, potentialPassTexture);
			vec4 potential2 = look(p2.x, p2.y, p2.z, potentialPassTexture);
			
			
			float mu = potential1.r / (potential1.r - potential2.r);

			marchColor = mix(
				unpackVec3ToRGBA(potential1.gba),
				unpackVec3ToRGBA(potential2.gba),
				mu
			);

			transformed = p1 + (p2 - p1) * mu;
			transformed -= originOffset;
			transformed *= scale;
			vec4 data1 = look(p1.x, p1.y, p1.z, voxelPassTexture);
			vec4 data2 = look(p2.x, p2.y, p2.z, voxelPassTexture);
			objectNormal = normalize(mix(data1.xyz, data2.xyz, mu));
			transformedNormal = normalMatrix * objectNormal;
			#ifndef FLAT_SHADED
				vNormal = transformedNormal;
			#endif
		#endif
		
#include <project_vertex>`);let n=t.fragmentShader.match(/vec3 diffuseColor[^\n]*\n/);if(!n)return;let r=`
		#ifdef SHAPEBLEND_C
			#if SHAPEBLEND_C == 1
				${n[0].replace(/nodeU0,/g,"marchColor.rgb,").replace(/nodeU\d+(?=,g_uid\d+_calpha\))/g,"marchColor.a")}
			#else
				${n[0]}
			#endif
		#else
			${n[0]}
		#endif
		`;t.fragmentShader=`in vec4 marchColor;
`+t.fragmentShader.replace(n[0],r),Object.assign(t.uniforms,this.marchPassUniforms)}initDebugPass(t){console.log("fboToDebug.width",t.width,t.height),this.geometry=new mt(t.width,t.height),this.geometry.userData={parameters:{width:4,height:4}};let e={inputTexture:{value:t.textures.length>1?t.textures[1]:t.texture},pyramidTextureSize:{value:void 0}},n=r=>{r.vertexShader=`
				precision highp float;

				varying vec2 vUv;

				void main() {
						gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
						vUv = uv;
				}
			`,r.fragmentShader=`
				layout(location = 1) out vec4 gVelocity;

				precision highp float;
				
				uniform sampler2D inputTexture;
				varying vec2 vUv;

				uniform vec2 pyramidTextureSize;

				void main() {
						
						gl_FragColor = texture(inputTexture, vUv);
						gVelocity = vec4(0.0);
				}
			`,e.pyramidTextureSize.value=new j(this.pyramidRenderTarget[0].width,this.pyramidRenderTarget[0].height),Object.assign(r.uniforms,e)};this.material.shapeBlendhack=n,this.material.root.shapeBlendhack=n}dispose(){super.dispose(),_t()?.release(this)}},wt=ht;wt.streamCompaction=new class{constructor(){this.pyramidPassScene=new W,this.pyramidPassMaterial=new H({name:"PyramidPass"}),this.pyramidPassUniforms={inputTexture:{value:void 0},inputWidth:{value:0},inputHeight:{value:0},inputShiftX:{value:0},outputShiftX:{value:0}},this.pyramidTopLevelReadPixelBuffer=new Float32Array(4),this.pyramidPassMaterial.fragmentShader=`
			precision highp float;
			precision highp sampler2D;
			layout(location = 0) out vec4 pc_FragColor;
			uniform sampler2D inputTexture;
			uniform float inputWidth;
			uniform float inputHeight;
			uniform float inputShiftX;
			uniform float outputShiftX;
			const vec2 half_unit_coord = vec2(0.5);
			const vec4 one = vec4(1.0);
			void main() {
				vec2 inputSize = vec2(inputWidth, inputHeight);
				vec2 input_pixel_uv = 1. / inputSize;
				vec2 coord = gl_FragCoord.xy - half_unit_coord;
				coord.x -= outputShiftX;
				coord = coord * 2. + half_unit_coord;
				coord.x += inputShiftX;

				
				vec2 input_uv = coord / inputSize;
				float bl = texture(inputTexture, input_uv).r;

				
				input_uv.x += input_pixel_uv.x;
				float br = texture(inputTexture, input_uv).r;

				
				input_uv.y += input_pixel_uv.y;
				float tr = texture(inputTexture, input_uv).r;

				
				input_uv.x -= input_pixel_uv.x;
				float tl = texture(inputTexture, input_uv).r;

				pc_FragColor.a = bl;
				pc_FragColor.b = pc_FragColor.a + br;
				pc_FragColor.g = pc_FragColor.b + tr;
				pc_FragColor.r = pc_FragColor.g + tl; 
			}
		`,this.pyramidPassMaterial.uniforms=this.pyramidPassUniforms,this.pyramidPassMaterial.depthTest=!1,this.pyramidPassMaterial.depthWrite=!1;let t=new q(X,this.pyramidPassMaterial);t.frustumCulled=!1,this.pyramidPassScene.add(t)}renderPyramid(t,e,n,r,b){new ut().min.setScalar(0);let d=e.length-1,U=new vt;n.getViewport(U),this.pyramidPassUniforms.inputShiftX.value=0,this.pyramidPassUniforms.outputShiftX.value=0;let a=d-1;for(let u=a;u>=0;u--){let v=u%2==a%2?b[0]:b[1],l=u===a?r:u%2==a%2?b[1]:b[0];this.pyramidPassUniforms.inputTexture.value=l.textures.length>1?l.textures[1]:l.texture,this.pyramidPassUniforms.inputWidth.value="width"in l?l.width:1,this.pyramidPassUniforms.inputHeight.value="height"in l?l.height:1,n.setRenderTarget(v);let S=e[u],z=n.getPixelRatio();n.setViewport(this.pyramidPassUniforms.outputShiftX.value/z,0,S/z,S/z),u===2&&t%2!=0&&n.setViewport(this.pyramidPassUniforms.outputShiftX.value/z,0,3/z,3/z),n.render(this.pyramidPassScene,K);let O=this.pyramidPassUniforms.inputShiftX.value;this.pyramidPassUniforms.inputShiftX.value=this.pyramidPassUniforms.outputShiftX.value,this.pyramidPassUniforms.outputShiftX.value=O,u<a&&(this.pyramidPassUniforms.outputShiftX.value+=e[u+1])}n.setViewport(U);let k=e.length%2==0?0:1;return n.readRenderTargetPixelsAsync(b[k],b[k].width-1,0,1,1,this.pyramidTopLevelReadPixelBuffer).then(()=>this.pyramidTopLevelReadPixelBuffer[0])}};var Rt=new et,Ot=new et,F=new at,M=new I,A=new I,Lt=new at;function kt(t,e=0){let n=this.children.length;for(;n--;){let r=this.children[n];nt.is(r)&&pt.call(r,t,e+1)}}function pt(t,e=0){if(t(this,e)!==!0){let n=this.children.length;for(;n--;){let r=this.children[n];nt.is(r)&&pt.call(r,t,e+1)}}}function dt(){if(this.shapesDataTexture.value===void 0){let f=new Q(new Float32Array(1920),96,5,N,L);this.shapesDataTexture.value=f}let t=this.shapesDataTexture.value,e=t.image.data,n=0,r=0,b=this.data.geometry.blendRange,d=Rt.copy(this.matrixWorld).invert(),U=this._npart,a=0;this._meshSdfWanted.clear();let k=null;if(kt.call(this,f=>{if(f.visible===!1)return!0;let h;if(f instanceof ft||f instanceof gt||St(f))return;h=f instanceof bt?f.object:f;let E=f.data?.cloner;if(Tt.is(f)&&E&&!E.hideBase&&E.type!=="radial"&&E.disabled!==!0||!(h instanceof it))return;let s=h.geometry.userData.parameters,T=s?.shapeBlendNode??h.dataPatched?.geometry?.shapeBlendNode;if(T===void 0)return;if(Ot.multiplyMatrices(d,f.matrixWorld).decompose(A,F,M),s?.type==="TorusGeometry"&&s.arc!==360){let p=s.arc*Math.PI/180;p/=4,F.multiply(Lt.set(0,0,Math.sin(p),Math.cos(p)))}let m=T.overrideGlobalBlend?T.blendRange:b;m=m/this.bboxSize*2,e[4*a]=(A.x-this.bboxOffset)/this.bboxSize*2,e[4*a+1]=(A.y-this.bboxOffset)/this.bboxSize*2,e[4*a+2]=(A.z-this.bboxOffset)/this.bboxSize*2,e[4*a+3]=T.operation===0?1:T.operation===2?-1:-2,e[384+4*a]=-F.x,e[384+4*a+1]=-F.y,e[384+4*a+2]=-F.z,e[384+4*a+3]=F.w;let i=new Float32Array(4),c=0,P=m;if(s?.type==="SphereGeometry")s.width===s.height&&s.width===s.depth?i[0]=0:i[0]=1,i[1]=s.width/this.bboxSize,i[2]=s.height/this.bboxSize,i[3]=s.depth/this.bboxSize,P=Math.max(i[1],i[2],i[3])*M.x+m;else if(s?.type==="CubeGeometry"){c=s.cornerRadius;let p=s.width,o=s.height,g=s.depth;i[0]=2,i[1]=(p-2*c)/this.bboxSize,i[2]=(o-2*c)/this.bboxSize,i[3]=(g-2*c)/this.bboxSize,P=Math.sqrt(p**2+o**2+g**2)/this.bboxSize*M.x+m}else if(s?.type==="CylinderGeometry"){c=s.cornerRadius;let p=s.height,o=s.radiusBottom,g=s.radiusTop;if(g>=o){let G=Math.atan2(g-o,p),V=(Math.PI/2-G)/2;g-=c/Math.tan(V),o-=c*Math.tan(V)}else if(o>g){let G=Math.atan2(o-g,p),V=(Math.PI/2-G)/2;g-=c*Math.tan(V),o-=c/Math.tan(V)}i[1]=(s.height-2*c)/this.bboxSize,o===g?(i[0]=3,i[2]=o/this.bboxSize*2):(i[0]=4,i[2]=o/this.bboxSize*2,i[3]=g/this.bboxSize*2),P=(Math.hypot(i[1],Math.max(Math.abs(i[2]),Math.abs(i[3])))+c/this.bboxSize*2)*M.x+m}else if(s?.type==="TorusGeometry"){if(i[0]=5,i[1]=(s.width-s.depth)/this.bboxSize,i[2]=s.depth/this.bboxSize,s.arc!==360){i[0]=6,i[3]=i[1],e[1152+4*a+3]=i[2];let p=2*Math.atan2(i[2]/2,i[1]),o=s.arc*Math.PI/180/2-p;i[1]=Math.sin(o),i[2]=Math.cos(o)}P=s.width*M.x/this.bboxSize+m}else{let p=h.geometry;(k??(k=new Set)).add(p.uuid);let o=this._meshSdfBaked.get(p.uuid),g=zt(p);if((o===void 0||o.posVersion!==g)&&this._meshSdfWanted.set(p.uuid,p),o===void 0)return;i[0]=7,i[1]=o.slot,i[2]=o.boxHalf.x/this.bboxSize*2,i[3]=o.boxHalf.y/this.bboxSize*2,e[1152+4*a+3]=o.boxHalf.z/this.bboxSize*2,P=Math.hypot(o.boxHalf.x,o.boxHalf.y,o.boxHalf.z)/this.bboxSize*2*M.x+m}e.set(i,768+4*a),n=Math.max(n,P),r=Math.max(r,m),this._reach[a]=P,e[1152+4*a]=m,e[1152+4*a+1]=c/this.bboxSize*2,e[1152+4*a+2]=M.x;let x,y,D=Array.isArray(h.material)?h.material[0]:h.material,_=D;if(_?.getShapeBlendBaseColor){let p=_.getShapeBlendBaseColor();x=p,y=p.a}else D?.uniforms?.nodeU0!==void 0?(x=D.uniforms.nodeU0.node.value,y=D.uniforms.nodeU1?.value??1):(x={r:1,g:1,b:1},y=1);T.operation!==0&&!T.useColor&&(y=-1),e[1536+4*a]=x.r,e[1536+4*a+1]=x.g,e[1536+4*a+2]=x.b,e[1536+4*a+3]=y,y<1&&this.material.defines?.SHAPEBLEND_C===1&&this.material.setTransparent(!0),a++}),this._meshSdfBaked.size>0){let f=k??new Set;for(let h of this._meshSdfBaked.keys())f.has(h)||this._meshSdfBaked.delete(h)}this.npart=a,this._maxBlendK=r;let u=1.1*n+2/(this.spatialDivisions-1)+4/(this.resolution-1);this.spatialPassUniforms.span.value=u;let v=this._prevShapeData,l=U!==a,S=v===null||this._prevSpan!==u||l,z=S||J,O=this._fieldDirtyMin.set(1/0,1/0,1/0),C=this._fieldDirtyMax.set(-1/0,-1/0,-1/0);if(v!==null){let f=Math.max(a,U);for(let h=0;h<f;h++){let E=!1;for(let D=0;D<5;D++){let _=384*D+4*h;if(e[_]!==v[_]||e[_+1]!==v[_+1]||e[_+2]!==v[_+2]||e[_+3]!==v[_+3]){E=!0;break}}if(!E)continue;if(S=!0,z)break;let s=e[4*h],T=e[4*h+1],m=e[4*h+2],i=v[4*h],c=v[4*h+1],P=v[4*h+2],x=this._reach[h],y=this._prevReach[h];Number.isFinite(s+T+m+x)&&Number.isFinite(i+c+P+y)?(O.x=Math.min(O.x,s-x,i-y),O.y=Math.min(O.y,T-x,c-y),O.z=Math.min(O.z,m-x,P-y),C.x=Math.max(C.x,s+x,i+y),C.y=Math.max(C.y,T+x,c+y),C.z=Math.max(C.z,m+x,P+y)):z=!0}}return J&&(S=!0),this._fieldDirtyFull=z||O.x===1/0,S&&(v===null?this._prevShapeData=new Float32Array(e):v.set(e),this._prevReach.set(this._reach),this._prevSpan=u,t.needsUpdate=!0),S}function Bt(t){return dt.call(t)}export{It as A,_t as B,Et as E,Ct as F,wt as G,zt as K,Mt as M,Ft as N,Nt as V,Vt as W,Pt as k,Bt as n};
