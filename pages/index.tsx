"use client"

import dynamic from 'next/dynamic';
import { Canvas } from '@react-three/fiber';
import { Physics, RigidBody } from '@react-three/rapier';
import { Gltf, KeyboardControls, GradientTexture, Environment } from '@react-three/drei';
import Controller from 'ecctrl';
import { useRef, useState } from 'react';
// import TexturedBox from '../components/TexturedBox'
// import Popup from '../components/popup'
// import Controls from '../components/Controls'
import { WordAndImage as WordAndImageType } from '../components/data';

import { A11y } from '@react-three/a11y';


import { Datatypes } from "../components/data/types/Datatypes";

import { Data }  from '../components/data/Data';



// function simulateKeyEvent(key: string, type: 'keydown' | 'keyup') {
//   window.dispatchEvent(new KeyboardEvent(type, { key }))
// }

//Lazy loading in components
const TexturedBox = dynamic(() => import('../components/TexturedBox'), { ssr: false })
const Popup = dynamic(() => import('../components/popup'), { ssr: false })
const Controls = dynamic(() => import('../components/Controls'), { ssr: false })



function simulateKeyEvent( key: string, type: 'keydown' | 'keyup') {
  window.dispatchEvent(new KeyboardEvent(type, {key}))
}

export default function Page() {

    const keyboardMap = [
    { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
    { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
    { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
    { name: 'rightward', keys: ['ArrowRight', 'KeyD'] }
  ]
  
const [showPopup, setShowPopup] = useState(false)
const [selectedItem, setSelectedItem] = useState<Datatypes | null>(null)
  // spawn position for the player (x, y, z)
  // const spawnPosition: [number, number, number] = [0, 1.3, 0];

  // Has gravity
  // const spawnPosition: [number, number, number] = [0, 3, 0];
  
  //No gravity
  const spawnPosition: [number, number, number] = [0, 1, 0];

  
  // ref to controller if we need to imperatively set translation later
  const controllerRef = useRef<any>(null);
  // Handler to show popup with item data
  function handleBoxClick(item: Datatypes) {
    setSelectedItem(item)
    setShowPopup(true)

    const a11yButtons = document.querySelectorAll('[r3f-a11y="true"]');


    //Removes project titles’ accessibility because they interfere with pop up accessible navigation.
    a11yButtons.forEach(a11yButton => {
        a11yButton.setAttribute("aria-hidden", "true");
        a11yButton.setAttribute("role", "presentation"); 
        (a11yButton as HTMLElement).tabIndex = -1; // prevents keyboard focus
    });

  }

  // Handler to close popup
  function handleClosePopup() {
    setShowPopup(false)


    //Gives project titles’ accessibility back.
    const a11yButtons = document.querySelectorAll('[r3f-a11y="true"]');

    a11yButtons.forEach(a11yButton => {
        a11yButton.setAttribute("aria-hidden", "false");
        (a11yButton as HTMLElement).tabIndex = 1; // prevents keyboard focus
    });

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
        />
         <color attach="background" args={["white"]} />

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
            linearDamping={5}
             //No gravity 
            maxVelLimit={10} 
            position={spawnPosition}
            >
              <Gltf castShadow receiveShadow scale={.005} position={[0, -.85, 0]} src="/images/r2d2.glb" />
            </Controller>
          </KeyboardControls>
          <RigidBody type="fixed" colliders="trimesh">
            
            <TexturedBox onClick={handleBoxClick} />

                <mesh position={[0, 1, 12]}>
                <boxGeometry args={[8, 0, 30]} />
                  <meshBasicMaterial transparent opacity={0} color={"black"}>

                  </meshBasicMaterial>
                </mesh>

                 <Gltf castShadow receiveShadow position={[-.18, -7.8, 27.14]} scale={.78} src="/images/star_wars_imperial_door.glb" />

            <Gltf castShadow receiveShadow position={[-.14, 2.85, 0]} rotation={[0, -Math.PI / 1, 0]} scale={1.5} src="/images/star_destroyer_hallway.glb" />

          </RigidBody>
        </Physics>
      </Canvas>
    </div>
  ) 
}