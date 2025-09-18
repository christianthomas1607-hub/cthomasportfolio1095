
import * as THREE from 'three'
import { useMemo, useContext, createContext, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture, useGLTF, Merged, RenderTexture, PerspectiveCamera, Text } from '@react-three/drei'
import { WordAndImage } from '../components/data'
import { SpinningBox } from './SpinningBox'



export default function TexturedBox({ onClick }: { onClick: (item: typeof WordAndImage[0]) => void }) {
  return (
    <>
      {WordAndImage.map((item, index) => (
        <mesh
          key={index}
          position={[-3, 2.85, index * 2.5]}
          onClick={() => onClick(item)}
        >
          <boxGeometry args={[0, 1, 1]} />
          <meshStandardMaterial map={useTexture(item.imgMain)}/>
          
           <directionalLight position={[, 0, 9]} color="blue" />
           <color attach="background" args={['#35c19f']} />
        </mesh>
      ))}
    </>
  )
}