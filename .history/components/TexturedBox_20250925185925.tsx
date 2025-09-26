import { useTexture } from '@react-three/drei'
import { WordAndImageData } from '../components/data'

// export default function TexturedBox({ onClick }: { onClick: (item: typeof WordAndImageData[0]) => void }) {
//   return (
//     <>
//       {WordAndImageData.map((item, index) => (
//         <mesh
//           key={index}
//           position={[-3, 1.5, index * 2.5]}
//           onClick={() => onClick(item)}
//         >
//           <boxGeometry args={[0, 1, 1]} />
//           <meshStandardMaterial map={useTexture(item.imgMain)} />
//         </mesh>
//       ))}
//     </>
//   )
// }

export default function TexturedBoxV2({ onClick }: { onClick: (item: typeof WordAndImageData[0]) => void }) {
  return (
    <>
      {WordAndImageData.ca.map((item, index) => (
        <mesh
          key={index}
          position={[-3, 1.5, index * 2.5]}
          onClick={() => onClick(item)}
        >
          <boxGeometry args={[0, 1, 1]} />
          <meshStandardMaterial map={useTexture(item.imgMain)} />
        </mesh>
      ))}
    </>
  )
}