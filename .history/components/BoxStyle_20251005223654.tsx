import { useTexture, Text, Gltf, GradientTexture, Edges   } from '@react-three/drei'
import HolographicMaterial from "../components/HolographicMaterial";
import * as THREE from 'three';
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import GlowMaterial from '../components/GlowMaterial';
import React, { useMemo } from "react";


type BoxStyleProps = {
  x: number;
  y: number;
  z: number;
  rotationY: number;
  image: string;
  title: string;
  index: number;
  onClick: () => void;
};

export default function BoxStyle({ x, y, z, rotationY, image, title, index, onClick}: BoxStyleProps) {

// const tex = useTexture(image);
//   tex.encoding = THREE.sRGBEncoding;
const texture = useLoader(TextureLoader, image); // 

// inside component, near other hooks
const triTopY = .26;         // vertical position of the two top points
const triBottomY = -1.0;     // vertical position of the bottom apex
const halfWidth = 0.5;       // how far left/right the top points are
const triZ = 0;              // z-position of vertices (0 for XY plane)

const trianglePositionArray = useMemo(() => {
  // bottom apex, top-left, top-right
  return new Float32Array([
    0, triBottomY, triZ,      // bottom apex
    -halfWidth, triTopY, triZ,// top-left
    +halfWidth, triTopY, triZ // top-right
  ]);
}, [triTopY, triBottomY, halfWidth, triZ]);


  return (
    <>
        <>
        <group position={[x, y, z]} rotation={[0, 0, 0]} onClick={onClick}>
          <mesh>
            <boxGeometry args={[0, 1, 1]} />
            <meshStandardMaterial map={texture} 
        //     emissive={'white'}
        // emissiveIntensity={2}
        // toneMapped={false}
            />
            <Edges
            linewidth={}
            scale={1}
            threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
            color="red"
            // scale={3} // Keep scale at 1 to match the box size
            // threshold={40} // Adjust threshold for edge detection (in degrees)
            // color="white" // Color of the border
          />
          </mesh>
        <Text
          position={[0, .75, 0]} // above the image
          fontSize={0.2}
          lineHeight={1}
          maxWidth={3}
          color="white"
          textAlign="center"
          anchorX="center"
          anchorY="bottom"
          rotation={[0, Math.PI / rotationY, 0]}
          >
            {title}
          </Text>
          
          
      <Gltf castShadow receiveShadow position={[0, -1.75, 0]}  scale={.06} src="/images/holo-puck-transformed.glb" />
  <mesh position={[0, -.76, 0]} rotation={[0, Math.PI / 2, 0]} >
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={trianglePositionArray}
            count={3}
            itemSize={3}
          />
              {/* Normals should be unit vectors. The triangle sits in the XY plane (z=0),
                  so use a Z normal for all vertices. */}
              <bufferAttribute
                attach="attributes-normal"
                array={trianglePositionArray}
                count={3}
                itemSize={3}
              />
        </bufferGeometry>
            {/* render both sides so the triangle is visible from either side */}
            <meshBasicMaterial transparent opacity={.85} color="red" side={THREE.DoubleSide} />
      </mesh>
      
        </group>
        </>
     
    </>
  )
}



// export default function TexturedBox({ onClick }: { onClick: (item: typeof WordAndImageData[0]) => void }) {
//   return (
//     <>
//       {WordAndImageData.map((item, index) => (
//         <>
//         <group position={[-3, 1.25, index * 3.75]} onClick={() => onClick(item)}>
//           <mesh>
//             <boxGeometry args={[0, 1, 1]} />
//             <meshStandardMaterial map={useTexture(item.imgMain)} />
//           </mesh>
//         <Text
//           position={[0, .75, 0]} // above the image
//           fontSize={0.2}
//           color="white"
//           anchorX="center"
//           anchorY="bottom"
//           rotation={[0, Math.PI / 2, 0]}
//           >
//             {item.title}
//           </Text>
// </group>
//         </>
//       ))}
//     </>
//   )
// }

// export default function TexturedBox({ onClick }: { onClick: (item: typeof WordAndImageData[0]) => void }) {
//   return (
//     <>
//       {WordAndImageData.map((item, index) => (
//         <>
//         <Text
//           position={[-2.75, 2.5, index * 3]} // Adjust position as needed
//           fontSize={.15}
//           color="white"
//           anchorX="center"
//           anchorY="middle"
//           rotation={[0, Math.PI / 2, 0]} // Rotate 90 degrees (PI/2 radians) around Z
//         >
//           {item.title}
//         </Text>
//         <mesh
//           key={index}
//           position={[-3, 1.5, index * 2.5]}
//           onClick={() => onClick(item)}
//         >
//           <boxGeometry args={[0, 1, 1]} />
//           <meshStandardMaterial map={useTexture(item.imgMain)} />
//         </mesh>
//         </>
//       ))}
//     </>
//   )
// }



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



// export default function TexturedBox({ onClick }: { onClick: (item: typeof WordAndImageData[0]) => void }) {
//   return (
//     <>
//       {WordAndImageData.map((item, index) => (
//         <>
//         <Html
//         // occlude 
//       transform
//       distanceFactor={1.2}
//       center
//       rotation-y={90 * (Math.PI / 180)}
//       position-x={-3}
//       position-z={index * 2.5}
//       position-y={-0.1}
//       className={`w-48 rounded-md overflow-hidden`}
//       >
//       <div className="bg-white bg-opacity-50 backdrop-blur-lg text-xs p-2 w-full">
//         <h2 className="font-bold">{item.title}</h2>
//         <img src={item.imgMain} alt={item.title} className="w-full h-32 object-cover my-2"/>
//       </div>
//       <button
//         className={`hover:bg-opacity-50 transition-colors duration-500 px-4 py-2 font-bold text-white w-full text-xs`}
//       >
//         Add to cart
//       </button>
//     </Html>
//         </>
//       ))}
//     </>
//   )
// }