"use client"
import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import { Gltf, KeyboardControls } from '@react-three/drei'
import Controller from 'ecctrl'
import { useRef } from 'react'

export default function Page() {
  const keyboardMap = [
    { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
    { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
    { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
    { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
    { name: 'jump', keys: ['Space'] },
    { name: 'run', keys: ['Shift'] },
  ]

  // We'll use a ref to access the set function inside the Canvas
  const setControlsRef = useRef<(fn: any) => void>()

  // Helper to handle button press/release
  const handleControl = (name: string, pressed: boolean) => {
    if (setControlsRef.current) {
      setControlsRef.current((state: any) => ({ ...state, [name]: pressed }))
    }
  }

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', margin: 0 }}>
      <div style={{ position: "absolute", bottom: 20, left: 20, zIndex: 1000 }}>
        <button
          onPointerDown={() => handleControl('forward', true)}
          onPointerUp={() => handleControl('forward', false)}
          onPointerLeave={() => handleControl('forward', false)}
        >
          Forward
        </button>
        <button
          onPointerDown={() => handleControl('backward', true)}
          onPointerUp={() => handleControl('backward', false)}
          onPointerLeave={() => handleControl('backward', false)}
        >
          Backward
        </button>
        <button
          onPointerDown={() => handleControl('leftward', true)}
          onPointerUp={() => handleControl('leftward', false)}
          onPointerLeave={() => handleControl('leftward', false)}
        >
          Left
        </button>
        <button
          onPointerDown={() => handleControl('rightward', true)}
          onPointerUp={() => handleControl('rightward', false)}
          onPointerLeave={() => handleControl('rightward', false)}
        >
          Right
        </button>
      </div>
      <Canvas>
        <directionalLight intensity={0.7} castShadow shadow-bias={-0.0004} position={[-20, 20, 20]}>
          <orthographicCamera attach="shadow-camera" args={[-20, 20, 20, -20]} />
        </directionalLight>
        <ambientLight intensity={0.2} />
        <Physics timeStep="vary">
          <KeyboardControls map={keyboardMap}>
            <KeyboardControlsSetter setControlsRef={setControlsRef} />
            <Controller maxVelLimit={10}>
              <Gltf castShadow receiveShadow scale={.005} position={[0, -.75, 0]} src="/images/r2d2.glb" />
            </Controller>
          </KeyboardControls>
          <RigidBody type="fixed" colliders="trimesh">
            <Gltf castShadow receiveShadow position={[0, 2.85, 0]} rotation={[0, -Math.PI / 1, 0]} scale={1.5} src="/images/star_destroyer_hallway.glb" />
          </RigidBody>
        </Physics>
      </Canvas>
    </div>
  )
}

// Helper component to expose the set function from useKeyboardControls to the parent via ref
function KeyboardControlsSetter({ setControlsRef }: { setControlsRef: React.MutableRefObject<any> }) {
  // This must be rendered inside <KeyboardControls>
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [, set] = useKeyboardControls()
  setControlsRef.current = set
  return null
}