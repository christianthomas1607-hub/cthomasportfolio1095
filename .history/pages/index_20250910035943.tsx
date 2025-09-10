"use client"
import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import { Gltf, KeyboardControls } from '@react-three/drei'
import Controller from 'ecctrl'
import { useRef, useState } from 'react'
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
      {showPopup ? <Popup onClose={handleClosePopup}  item={selectedItem}  /> : null}
      <div style={{ position: "absolute", bottom: 20, left: 20, zIndex: 1000 }}>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold mx-2 py-2 px-4 rounded inline-flex items-center"
          onPointerDown={() => { simulateKeyEvent('w', 'keydown'); simulateKeyEvent('ArrowUp', 'keydown') }}
          onPointerUp={() => { simulateKeyEvent('w', 'keyup'); simulateKeyEvent('ArrowUp', 'keyup') }}
          onPointerLeave={() => { simulateKeyEvent('w', 'keyup'); simulateKeyEvent('ArrowUp', 'keyup') }}
        >
          Forward
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold mx-2 py-2 px-4 rounded inline-flex items-center"
          onPointerDown={() => { simulateKeyEvent('s', 'keydown'); simulateKeyEvent('ArrowDown', 'keydown') }}
          onPointerUp={() => { simulateKeyEvent('s', 'keyup'); simulateKeyEvent('ArrowDown', 'keyup') }}
          onPointerLeave={() => { simulateKeyEvent('s', 'keyup'); simulateKeyEvent('ArrowDown', 'keyup') }}
        >
          Backward
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold mx-2py-2 px-4 rounded inline-flex items-center"
          onPointerDown={() => { simulateKeyEvent('a', 'keydown'); simulateKeyEvent('ArrowLeft', 'keydown') }}
          onPointerUp={() => { simulateKeyEvent('a', 'keyup'); simulateKeyEvent('ArrowLeft', 'keyup') }}
          onPointerLeave={() => { simulateKeyEvent('a', 'keyup'); simulateKeyEvent('ArrowLeft', 'keyup') }}
        >
          Left
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          onPointerDown={() => { simulateKeyEvent('d', 'keydown'); simulateKeyEvent('ArrowRight', 'keydown') }}
          onPointerUp={() => { simulateKeyEvent('d', 'keyup'); simulateKeyEvent('ArrowRight', 'keyup') }}
          onPointerLeave={() => { simulateKeyEvent('d', 'keyup'); simulateKeyEvent('ArrowRight', 'keyup') }}
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
            <Controller maxVelLimit={10}>
              <Gltf castShadow receiveShadow scale={.005} position={[0, -.75, 0]} src="/images/r2d2.glb" />
            </Controller>
          </KeyboardControls>
          <RigidBody type="fixed" colliders="trimesh">
            <TexturedBox onClick={handleBoxClick} />
            <Gltf castShadow receiveShadow position={[0, 2.85, 1.25]} rotation={[0, -Math.PI / 1, 0]} scale={1.5} src="/images/star_destroyer_hallway.glb" />
          </RigidBody>
        </Physics>
      </Canvas>
    </div>
  )
}