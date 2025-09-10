import { useTexture } from '@react-three/drei'
import { WordAndImage } from './data'

export default function TexturedBox({ onClick }: { onClick: (item: typeof WordAndImage[0]) => void }) {
  return (
    <>
      {WordAndImage.map((item, index) => (
        <mesh
          key={index}
          position={[index * 2, 0, 1]}
          onClick={() => onClick(item)}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial map={useTexture(item.imgPath)} />
        </mesh>
      ))}
    </>
  )
}