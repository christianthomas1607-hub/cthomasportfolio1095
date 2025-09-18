import { useTexture } from '@react-three/drei'
import { WordAndImage } from '../components/data'

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
          <meshStandardMaterial map={useTexture(item.imgMain)} color="white" />
           <directionalLight position={[0, 0, 5]} color="white" />
        </mesh>
      ))}
    </>
  )
}