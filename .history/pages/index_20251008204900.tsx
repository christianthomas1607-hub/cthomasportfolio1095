"use client"
import { Canvas, useFrame } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import { Gltf, KeyboardControls, GradientTexture, Environment } from '@react-three/drei'
import Controller from 'ecctrl'
import { useRef, useState } from 'react'
import TexturedBox from '../components/TexturedBox'
import Popup from '../components/popup'
import { WordAndImage as WordAndImageType } from '../components/data'
import Controls from '../components/Controls'

// function simulateKeyEvent(key: string, type: 'keydown' | 'keyup') {
//   window.dispatchEvent(new KeyboardEvent(type, { key }))
// }


export function FloorClamp({ controllerRef, minY }: { controllerRef: any; minY: number }) {
  useFrame(() => {
    const rb =
      controllerRef.current?.rigidBody?.current ||
      controllerRef.current?.rigidBody ||
      controllerRef.current
    if (!rb?.translation) return
    const t = rb.translation()
    if (t.y < minY) {
      rb.setTranslation({ x: t.x, y: minY, z: t.z }, true)
      // Optionally damp downward velocity
      rb.setLinvel({ x: 0, y: 0, z: 0 }, true)
    }
  })
  return null
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
  const spawnPosition: [number, number, number] = [0, 2.5, 0];
  // ref to controller if we need to imperatively set translation later
  const controllerRef = useRef<any>(null);
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
      <Controls />
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
        gravity={[0, 0, 0]}
        >
          <KeyboardControls map={keyboardMap}>
            <Controller ref={controllerRef}
            
            // linearDamping={5}
             //No gravity 
            // maxVelLimit={30} 
            maxVelLimit={10} 
            position={spawnPosition}
            >
              <FloorClamp controllerRef={controllerRef} minY={-1} />
              
              {/* <PreventFall /> */}
              {/* <Gltf castShadow receiveShadow scale={.005} position={[0, -.75, 0]} src="/images/r2d2.glb" /> */}
              {/* <Gltf castShadow receiveShadow scale={.1} position={[0, -.75, 0]} src="/images/probe-transformed.glb" /> */}
              {/* <Gltf castShadow receiveShadow scale={.005} position={[0, -.75, 0]} src="/images/r2d2.glb" /> */}
              {/* <Gltf castShadow receiveShadow scale={.1} position={[0, -.75, 0]} src="/images/probe-transformed.glb" /> */}
            </Controller>
          </KeyboardControls>
          <RigidBody type="fixed" colliders="trimesh">
            <TexturedBox onClick={handleBoxClick} />
            {/* Use -2 for /images/hall-transformed.glb */}
            {/* Use .89 for /images/star_destroyer_hallway.glb*/}
                <mesh position={[0, 0, 12]}>
                <boxGeometry args={[50, 1, 500]} />
                  <meshBasicMaterial transparent opacity={100} color={"#FF0000"}>
                    {/* <GradientTexture
                    stops={[0, .5, 1]} // Define the positions of the color stops (0 to 1)
                    colors={['#d8d8d8','#bababa', '#838383']} // Define the colors at each stop (red to blue)
                    size={1024} // Optional: texture resolution (default is 1024)
                    /> */}
                  </meshBasicMaterial>
                </mesh>
                {/* <mesh position={[0, .9, 12]}>
                <boxGeometry args={[8, 0, 31]} />
                <meshStandardMaterial/>
                </mesh> */}
                <Gltf castShadow receiveShadow position={[0, 3.45, 36]} rotation={[0, -Math.PI / 2, 0]} scale={2} src="/images/hall-transformed_V2.glb" />
            
            {/* <Gltf castShadow receiveShadow position={[-.18, -8, 27]} scale={.78} src="/images/star_wars_imperial_door.glb" /> */}
            {/* <Gltf castShadow receiveShadow position={[-.14, 2.85, 0]} rotation={[0, -Math.PI / 1, 0]} scale={1.5} src="/images/star_destroyer_hallway.glb" /> */}
            {/* <Gltf castShadow receiveShadow position={[0, 3.65, 35]} rotation={[0, -Math.PI / 2, 0]} scale={2} src="/images/hall-transformed.glb" /> */}
            {/* <Gltf castShadow receiveShadow rotation={[-Math.PI / 2, 0, 0]} scale={0.11} src="/images/fantasy_game_inn2-transformed.glb" /> */}
          </RigidBody>

         
        </Physics>
        {/* <Physics 
        timeStep="vary"
        colliders={false}
         //No gravity
        // gravity={[0, 0, 0]}
        >
            <RigidBody type="fixed">
            <Gltf castShadow receiveShadow position={[0, 3.45, 36]} rotation={[0, -Math.PI / 2, 0]} scale={20} src="/images/hall-transformed_V2.glb" />
          </RigidBody>

        </Physics> */}
        {/* <Gltf castShadow receiveShadow position={[0, 3.45, 36]} rotation={[0, -Math.PI / 2, 0]} scale={2} src="/images/hall-transformed_V2.glb" /> */}
      </Canvas>
    </div>
  ) 
}