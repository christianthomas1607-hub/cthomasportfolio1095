"use client"
import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import { Gltf, KeyboardControls, GradientTexture, Environment } from '@react-three/drei'
import Controller from 'ecctrl'
import { useRef, useState, useEffect, forwardRef } from 'react'
import { useFrame } from '@react-three/fiber'
import TexturedBox from '../components/TexturedBox'
import Popup from '../components/popup'
import { WordAndImage as WordAndImageType } from '../components/data'

// function simulateKeyEvent(key: string, type: 'keydown' | 'keyup') {
//   window.dispatchEvent(new KeyboardEvent(type, { key }))
// }



function simulateKeyEvent( key: string, type: 'keydown' | 'keyup') {
  window.dispatchEvent(new KeyboardEvent(type, {key}))
}

export default function Page() {
  const keyboardMap = [
    { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
    { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
    { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
    { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
    { name: 'jump', keys: ['Space'] },
    { name: 'run', keys: ['Shift'] },
  ]
  
  const [showPopup, setShowPopup] = useState(false)
const [selectedItem, setSelectedItem] = useState<WordAndImageType | null>(null)
  // spawn position for the player (x, y, z)
  // const spawnPosition: [number, number, number] = [0, 1.3, 0];
  const spawnPosition: [number, number, number] = [0, 1, 0];
  // ref to controller if we need to imperatively set translation later
  const controllerRef = useRef<any>(null);
  // We'll use a wrapper component below which accepts bounds as props so
  // bounds are configurable where you mount the controller. Keep the
  // `controllerRef` for any imperative calls elsewhere.

  // BoundedController: small wrapper around Ecctrl that clamps position each frame
  const BoundedController = forwardRef(function BoundedController(
    props: any,
    ref: any
  ) {
    const { xMin = -6, xMax = 6, yMin = -Infinity, yMax = Infinity, zMin = -2, zMax = 30, ...rest } = props
    const localRef = useRef<any>(null)

    // expose inner ref to parent
    useEffect(() => {
      if (!ref) return
      if (typeof ref === 'function') ref(localRef.current)
      else ref.current = localRef.current
    }, [ref])

    useFrame(() => {
      const ctrl = localRef.current
      if (!ctrl) return

      const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v))

      // try translation object/array first
      if (ctrl.translation && typeof ctrl.translation === 'object') {
        const t = ctrl.translation
        const tx = t.x ?? t[0] ?? 0
        const tz = t.z ?? t[2] ?? 0
        const nx = clamp(tx, xMin, xMax)
        const nz = clamp(tz, zMin, zMax)
        if (nx !== tx || nz !== tz) {
          if (typeof ctrl.setTranslation === 'function') {
            const ty = t.y ?? t[1] ?? 0
            // prefer object argument if ctrl supports it
            try {
              ctrl.setTranslation({ x: nx, y: ty, z: nz })
            } catch {
              try {
                ctrl.setTranslation([nx, ty, nz])
              } catch {
                // last resort mutate
                if (t.x !== undefined) t.x = nx
                if (t.z !== undefined) t.z = nz
                if (Array.isArray(t)) {
                  t[0] = nx
                  t[2] = nz
                }
              }
            }
          } else {
            if (t.x !== undefined) t.x = nx
            if (t.z !== undefined) t.z = nz
            if (Array.isArray(t)) {
              t[0] = nx
              t[2] = nz
            }
          }
        }
        return
      }

      // attempt inner ref (Object3D or Rapier RigidBody)
      const inner = ctrl.ref?.current ?? ctrl.current ?? null
      if (!inner) return

      if (inner.position) {
        const px = inner.position.x
        const pz = inner.position.z
        const nx = clamp(px, xMin, xMax)
        const nz = clamp(pz, zMin, zMax)
        if (nx !== px || nz !== pz) {
          inner.position.x = nx
          inner.position.z = nz
        }
        return
      }

      if (typeof inner.translation === 'function') {
        try {
          const t = inner.translation()
          const nx = clamp(t.x, xMin, xMax)
          const nz = clamp(t.z, zMin, zMax)
          if (nx !== t.x || nz !== t.z) {
            if (typeof inner.setTranslation === 'function') {
              inner.setTranslation({ x: nx, y: t.y, z: nz })
            }
          }
        } catch (e) {
          // ignore
        }
      }
    })

    return (
      // pass the localRef to Ecctrl so it becomes available as ctrl.ref.current
      <Controller ref={localRef} {...rest} />
    )
  })
  // Handler to show popup with item data
  function handleBoxClick(item: WordAndImageType) {
    setSelectedItem(item)
    setShowPopup(true)
  }

  // Handler to close popup
  function handleClosePopup() {
    setShowPopup(false)
  }


  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', margin: 0 }}>
      {showPopup ? <Popup onClose={handleClosePopup} item={selectedItem}  /> : null}
      <div className="controls">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-black mx-2 py-2 px-4 rounded inline-flex items-center"
          onPointerDown={() => { simulateKeyEvent('w', 'keydown'); simulateKeyEvent('ArrowUp', 'keydown') }}
          onPointerUp={() => { simulateKeyEvent('w', 'keyup'); simulateKeyEvent('ArrowUp', 'keyup') }}
          onPointerLeave={() => { simulateKeyEvent('w', 'keyup'); simulateKeyEvent('ArrowUp', 'keyup') }}
        >
          <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3.25" stroke-linecap="butt" stroke-linejoin="arcs"><path d="M12 19V6M5 12l7-7 7 7"/>
          </svg>
          forward
        </button>
        <div className="controls-middle-row">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-black mx-2 py-2 px-4 w-24 rounded inline-flex items-center text-center"
          onPointerDown={() => { simulateKeyEvent('a', 'keydown'); simulateKeyEvent('ArrowLeft', 'keydown') }}
          onPointerUp={() => { simulateKeyEvent('a', 'keyup'); simulateKeyEvent('ArrowLeft', 'keyup') }}
          onPointerLeave={() => { simulateKeyEvent('a', 'keyup'); simulateKeyEvent('ArrowLeft', 'keyup') }}
        >
           <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3.25" stroke-linecap="butt" stroke-linejoin="arcs"><path d="M19 12H6M12 5l-7 7 7 7"/>
           </svg>
          left
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-black mx-2 py-2 px-4 w-24 rounded inline-flex items-center text-center"
          onPointerDown={() => { simulateKeyEvent('d', 'keydown'); simulateKeyEvent('ArrowRight', 'keydown') }}
          onPointerUp={() => { simulateKeyEvent('d', 'keyup'); simulateKeyEvent('ArrowRight', 'keyup') }}
          onPointerLeave={() => { simulateKeyEvent('d', 'keyup'); simulateKeyEvent('ArrowRight', 'keyup') }}
        >
          right
          <svg className="ml-1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3.25" stroke-linecap="butt" stroke-linejoin="arcs"><path d="M5 12h13M12 5l7 7-7 7"/>
          </svg>
        </button>
        </div>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-black mx-2 py-2 px-4 rounded inline-flex items-center"
          onPointerDown={() => { simulateKeyEvent('s', 'keydown'); simulateKeyEvent('ArrowDown', 'keydown') }}
          onPointerUp={() => { simulateKeyEvent('s', 'keyup'); simulateKeyEvent('ArrowDown', 'keyup') }}
          onPointerLeave={() => { simulateKeyEvent('s', 'keyup'); simulateKeyEvent('ArrowDown', 'keyup') }}
        >
           <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3.25" stroke-linecap="butt" stroke-linejoin="arcs"><path d="M12 5v13M5 12l7 7 7-7"/>
           </svg>
          backward
        </button>
      </div>
      <Canvas>
         <Environment 
        files="/images/ice_planet_close.jpg" 
        ground={{ scale: 100 }}
        backgroundRotation={[0, Math.PI / 1, 0]} 
        // environmentRotation={[0, Math.PI / 2, 0]}
        />
         <color attach="background" args={["white"]} />
       {/*  .7 intensity for original glb setting */}
        <directionalLight intensity={3} castShadow shadow-bias={-0.0004} position={[-20, 20, 20]}>
          <orthographicCamera attach="shadow-camera" args={[-20, 20, 20, -20]} />
        </directionalLight>
        <ambientLight intensity={0.2} />
        <Physics 
        timeStep="vary"
         //No gravity
        // gravity={[0, 0, 0]}
        >
          <KeyboardControls map={keyboardMap}>
            <BoundedController
              ref={controllerRef}
              linearDamping={5}
              // No gravity
              maxVelLimit={30}
              position={spawnPosition}
              // bounds: tweak these props to change how far the character can travel
              xMin={-6}
              xMax={6}
              zMin={-2}
              zMax={30}
            >
              <Gltf castShadow receiveShadow scale={.005} position={[0, -.75, 0]} src="/images/r2d2.glb" />
            </BoundedController>
          </KeyboardControls>
          <RigidBody type="fixed" colliders="trimesh">
            <TexturedBox onClick={handleBoxClick} />
            {/* Use -2 for /images/hall-transformed.glb */}
            {/* Use .89 for /images/star_destroyer_hallway.glb*/}
                <mesh position={[0, .6, 12]}>
                <boxGeometry args={[8, 0, 30]} />
                  <meshBasicMaterial>
                    <GradientTexture
                    stops={[0, .5, 1]} // Define the positions of the color stops (0 to 1)
                    colors={['#d8d8d8','#bababa', '#838383']} // Define the colors at each stop (red to blue)
                    size={1024} // Optional: texture resolution (default is 1024)
                    />
                  </meshBasicMaterial>
                </mesh>
                {/* <mesh position={[0, .9, 12]}>
                <boxGeometry args={[8, 0, 31]} />
                <meshStandardMaterial/>
                </mesh> */}
            <Gltf castShadow receiveShadow position={[-.14, 2.85, 0]} rotation={[0, -Math.PI / 1, 0]} scale={1.5} src="/images/star_destroyer_hallway.glb" />
            {/* <Gltf castShadow receiveShadow position={[0, 1.5, 27]} rotation={[0, -Math.PI / 2, 0]} scale={2} src="/images/hall-transformed.glb" /> */}
            {/* <Gltf castShadow receiveShadow rotation={[-Math.PI / 2, 0, 0]} scale={0.11} src="/images/fantasy_game_inn2-transformed.glb" /> */}
          </RigidBody>
        </Physics>
      </Canvas>
    </div>
  ) 
}