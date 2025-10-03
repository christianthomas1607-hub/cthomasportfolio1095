import React, { useRef, useMemo } from 'react';
import { shaderMaterial } from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';
import type { ReactThreeFiber } from '@react-three/fiber';
import * as THREE from 'three';

type HolographicMaterialUniforms = {
  time: number;
  fresnelOpacity: number;
  fresnelAmount: number;
  scanlineSize: number;
  hologramBrightness: number;
  signalSpeed: number;
  hologramColor: THREE.Color;
  enableBlinking: boolean;
  blinkFresnelOnly: boolean;
  hologramOpacity: number;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // @note: different versions of @react-three/fiber export different helper types
      // (Object3DNode, MaterialNode, etc). To avoid a hard dependency on a specific
      // version's exported symbol, use a permissive fallback here. This keeps the
      // custom element usable across multiple versions of the library while still
      // allowing the runtime `extend` call below to register the material.
      holographicMaterial: any; // ReactThreeFiber.Object3DNode<THREE.ShaderMaterial & HolographicMaterialUniforms, typeof THREE.ShaderMaterial>;
    }
  }
}


interface HolographicMaterialProps {
  fresnelAmount?: number;
  fresnelOpacity?: number;
  scanlineSize?: number;
  hologramBrightness?: number;
  signalSpeed?: number;
  hologramColor?: string;
  hologramOpacity?: number;
  enableBlinking?: boolean;
  blinkFresnelOnly?: boolean;
  enableAdditive?: boolean;
  transparent?: boolean;
  // Optional texture map (e.g., useTexture from @react-three/drei)
  map?: THREE.Texture | null;
  side?: number;
  blending?: number;
  ref?: React.Ref<THREE.ShaderMaterial & HolographicMaterialUniforms>;
}


export default function HolographicMaterial({
  fresnelAmount = 0.45,
  fresnelOpacity = 1.0,
  scanlineSize = 8.0,
  hologramBrightness = 1.2,
  signalSpeed = 0.45,
  hologramColor = '#51a4de',
  enableBlinking = true,
  blinkFresnelOnly = true,
  enableAdditive = true,
  hologramOpacity = 1.0,
  side = 1
}: HolographicMaterialProps) {
  const MaterialClass = useMemo(() => {
    return shaderMaterial(
      {
        time: 0,
        fresnelOpacity,
        fresnelAmount,
        scanlineSize,
        hologramBrightness,
        signalSpeed,
        hologramColor: new THREE.Color(hologramColor),
        enableBlinking,
        blinkFresnelOnly,
        hologramOpacity
      } as HolographicMaterialUniforms,
      // Vertex shader
      `
      #define STANDARD
      varying vec3 vViewPosition;
      #ifdef USE_TRANSMISSION
      varying vec3 vWorldPosition;
      #endif
    
      varying vec2 vUv;
      varying vec4 vPos;
      varying vec3 vNormalW;
      varying vec3 vPositionW;
      #include <common>
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
        #include <morphcolor_vertex>
      
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
        mat4 modelViewProjectionMatrix = projectionMatrix * modelViewMatrix;
        vUv = uv;
        vPos = projectionMatrix * modelViewMatrix * vec4( transformed, 1.0 );
        vPositionW = vec3( vec4( transformed, 1.0 ) * modelMatrix);
        vNormalW = normalize( vec3( vec4( normal, 0.0 ) * modelMatrix ) );
        
        gl_Position = modelViewProjectionMatrix * vec4( transformed, 1.0 );
      }`,
      // Fragment shader
      ` 
      varying vec2 vUv;
      varying vec3 vPositionW;
      varying vec4 vPos;
      varying vec3 vNormalW;
      
      uniform float time;
      uniform float fresnelOpacity;
      uniform float scanlineSize;
      uniform float fresnelAmount;
      uniform float signalSpeed;
      uniform float hologramBrightness;
      uniform float hologramOpacity;
      uniform bool blinkFresnelOnly;
      uniform bool enableBlinking;
      uniform vec3 hologramColor;
      float flicker( float amt, float time ) {return clamp( fract( cos( time ) * 43758.5453123 ), amt, 1.0 );}
      float random(in float a, in float b) { return fract((cos(dot(vec2(a,b) ,vec2(12.9898,78.233))) * 43758.5453)); }
      void main() {
        vec2 vCoords = vPos.xy;
        vCoords /= vPos.w;
        vCoords = vCoords * 0.5 + 0.5;
        vec2 myUV = fract( vCoords );
        vec4 hologramColor = vec4(hologramColor, mix(hologramBrightness, vUv.y, 0.5));
        float scanlines = 10.;
        scanlines += 20. * sin(time *signalSpeed * 20.8 - myUV.y * 60. * scanlineSize);
        scanlines *= smoothstep(1.3 * cos(time *signalSpeed + myUV.y * scanlineSize), 0.78, 0.9);
        scanlines *= max(0.25, sin(time *signalSpeed) * 1.0);        
        
        float r = random(vUv.x, vUv.y);
        float g = random(vUv.y * 20.2,  vUv.y * .2);
        float b = random(vUv.y * .9,    vUv.y * .2);
        hologramColor += vec4(r*scanlines, b*scanlines, r, 1.0) / 84.;
        vec4 scanlineMix = mix(vec4(0.0), hologramColor, hologramColor.a);
        vec3 viewDirectionW = normalize(cameraPosition - vPositionW);
        float fresnelEffect = dot(viewDirectionW, vNormalW) * (1.6 - fresnelOpacity/2.);
        fresnelEffect = clamp(fresnelAmount - fresnelEffect, 0., fresnelOpacity);
        float blinkValue = enableBlinking ? 0.6 - signalSpeed : 1.0;
        float blink = flicker(blinkValue, time * signalSpeed * .02);
    
        vec3 finalColor;
        if(blinkFresnelOnly){
          finalColor = scanlineMix.rgb + fresnelEffect * blink;
        }else{
          finalColor = scanlineMix.rgb * blink + fresnelEffect;
        }
        gl_FragColor = vec4( finalColor, hologramOpacity);
      }`
    );
  }, [
    fresnelAmount,
    fresnelOpacity,
    scanlineSize,
    hologramBrightness,
    signalSpeed,
    hologramColor,
    enableBlinking,
    blinkFresnelOnly,
    enableAdditive,
    hologramOpacity,
    side
  ]);


  // Register the material under a lowercase intrinsic name so we can return a
  // JSX intrinsic element instead of recursively returning the component.
  extend({ holographicMaterial: MaterialClass });

  const ref = useRef<THREE.ShaderMaterial & Partial<HolographicMaterialUniforms> | null>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      // @ts-ignore - MaterialClass adds a `time` uniform at runtime
      ref.current.time = (ref.current.time || 0) + delta;
    }
  });

  // Choose side value; keep FrontSide default
  const sideValue = side;

  // Return the registered intrinsic element. Callers import the default
  // `HolographicMaterial` component (no change needed) but it renders the
  // actual shader material element `holographicMaterial` to avoid recursion.
  return (
    // @ts-ignore allow unknown intrinsic element registered via extend
    <holographicMaterial
      key={(MaterialClass as any).key}
      ref={ref}
      side={sideValue}
      transparent={true}
      blending={enableAdditive ? THREE.AdditiveBlending : THREE.NormalBlending}
      // Pass through uniforms as props. shaderMaterial maps these to uniforms.
      fresnelAmount={fresnelAmount}
      fresnelOpacity={fresnelOpacity}
      scanlineSize={scanlineSize}
      hologramBrightness={hologramBrightness}
      signalSpeed={signalSpeed}
      hologramColor={new THREE.Color(hologramColor)}
      enableBlinking={enableBlinking}
      blinkFresnelOnly={blinkFresnelOnly}
      hologramOpacity={hologramOpacity}
    />
  );
}