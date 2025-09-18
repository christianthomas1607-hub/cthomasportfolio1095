import { useTexture, useGLTF, Merged, RenderTexture, PerspectiveCamera, Text } from '@react-three/drei'
import { WordAndImage } from '../components/data'
THREE.ColorManagement.legacyMode = false

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
           <color attach="background" args={[invert ? 'black' : '#35c19f']} />
           <directionalLight position={[0, 0, 5]} color="blue" />
        </mesh>
      ))}
    </>
  )
}