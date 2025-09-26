import { useTexture, Text  } from '@react-three/drei'
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

export default function TexturedBox({ onClick }: { onClick: (item: typeof WordAndImageData[0]) => void }) {
  return (
    <>
      {WordAndImageData.map((item, index) => (
        <>
        <Text
          position={[-4.5, 1.5, index * 3.5]} // Adjust position as needed
          fontSize={1}
          color="white"
          anchorX="center"
          anchorY="middle"
          rotation={[0, Math.PI / 2, 0]} // Rotate 90 degrees (PI/2 radians) around Z
        >
          {item.title}
        </Text>
        {/* <mesh
          key={index}
          position={[-3, 1.5, index * 2.5]}
          onClick={() => onClick(item)}
        >
          <boxGeometry args={[0, 1, 1]} />
          <meshStandardMaterial map={useTexture(item.imgMain)} />
        </mesh> */}
        </>
      ))}
    </>
  )
}