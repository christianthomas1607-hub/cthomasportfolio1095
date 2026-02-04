import { useTexture, Text, Gltf, GradientTexture, Edges, Outlines   } from '@react-three/drei'
import HolographicMaterial from "../components/HolographicMaterial";
import * as THREE from 'three';
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import GlowMaterial from '../components/GlowMaterial';
import { useMemo, useState, useEffect } from "react";
import { A11y, useA11y, A11yAnnouncer } from '@react-three/a11y'
import { Console } from 'console';



type BoxStyleProps = {
  x: number;
  y: number;
  z: number;
  rotationY: number;
  image: string;
  title: string;
  category: string;
  index: number;
  onClick: () => void;
  boxPositionY: number;
  triangleWidth: number;
  boxGeometryArgs: [number, number, number];
  textPosition: [number, number, number];
  borderFocus: boolean;
  focusFunction:  (string) => void;
};



export function useBorderSizes() {
  const [bool, setBool] = useState(false);

  const borderSizesFocus = (projTitle: string) => {
    setBool(c => c = true);
    console.log(`${projTitle} new log count ${bool}`);
  };

  return { bool, borderSizesFocus };
}



export function BoxStyle({ x, y, z, rotationY, image, title, category, index, onClick, boxPositionY, triangleWidth, boxGeometryArgs, textPosition, borderFocus, focusFunction } : BoxStyleProps) {

// const tex = useTexture(image);
//   tex.encoding = THREE.sRGBEncoding;
const texture = useLoader(TextureLoader, "/images/" + image);

texture.colorSpace = THREE.SRGBColorSpace;

const calculateScaleFactors = (texture, containerSize) => {
  const containerAspect = containerSize.x / containerSize.y
  const imageAspect = texture.image.width / texture.image.height

  let scaleX = 1, scaleY = 1
  if (imageAspect > containerAspect) {
    // Image is wider than container → scale Y
    scaleY = imageAspect / containerAspect
  } else {
    // Image is taller than container → scale X
    scaleX = containerAspect / imageAspect
  }
  return [scaleX, scaleY]
}


// inside component, near other hooks
const triTopY = .24;         // vertical position of the two top points
const triBottomY = -1.0;     // vertical position of the bottom apex
const halfWidth = triangleWidth;       // how far left/right the top points are
const triZ = 0;              // z-position of vertices (0 for XY plane)

const trianglePositionArray = useMemo(() => {
  // bottom apex, top-left, top-right
  return new Float32Array([
    0, triBottomY, triZ,      // bottom apex
    -halfWidth, triTopY, triZ,// top-left
    +halfWidth, triTopY, triZ // top-right
  ]);
}, [triTopY, triBottomY, halfWidth, triZ]);


const [borderColor, setBorderColor] = useState("red");



const borderFocusFunction = () => {
    setBorderColor("yellow");

    console.log(borderColor);
    
};


const a11y = useA11y() // gives you focus, hover, pressed states 



const color: string = a11y.focus ? 'red' : 'white'
const textSize: number = a11y.focus ? .23 : .2

// const [clicked, setClick] = useState(false);

// function checkIfClicked() {
//   if(onClick) {
//     setClick(true)
    
//     const a11yButtons = document.querySelectorAll('[r3f-a11y="true"]');

//     a11yButtons.forEach(a11yButton => {
//         a11yButton.classList.add("hide-r3f-a11y");
//     });

//     console.log(`No useeffect true Clicked happened`)
//   }
// }

// useEffect(() => {
// console.log(`${clicked} clicked happened`)
// },[clicked]);


// if(borderFocus == false) {
//   focusColor = "red"
//   // console.log(`${borderFocus} red shown`)
// }
// else if(borderFocus == true) {
//   focusColor = "yellow"
//   //  console.log(`${borderFocus} yellow shown`)
// }
// else {
//   focusColor = "blue"
//   // console.log("neither")
// }



const borderSizes = (maxBorderSize, color) => {
  const edgesArray = [];

  for (let i = 1; i <= maxBorderSize; i++) {
    edgesArray.push(
      <Edges key={i} scale={1 + i * 0.001} color={color} transparent opacity={.75} />
    );
  }
  return edgesArray;
};

// let decimal: number = 6;

  return (
    <>
        <>
        
        <group position={[x, y, z]} rotation={[0, 0, 0]} 
        onClick={
          (e) => {
            // checkIfClicked();
            onClick();
          }
        }
        >
          {/* <mesh scale={1.1}>
        <boxGeometry args={[0, 1, 1]} />
        <meshBasicMaterial color="red" transparent opacity={0.5} />
      </mesh> */}
      {/* <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} /> */}
            {/* <mesh position={[0, boxPositionY + 1, 0]}>
            <boxGeometry args={[1, 1, 0]} />
            <meshBasicMaterial map={useTexture("/images/chubb.png")}/>
            </mesh> */}
           <mesh position={[0, boxPositionY, 0]}>
            <boxGeometry args={boxGeometryArgs} />
            <meshBasicMaterial map={texture} 
            transparent={true} // Allows transparency if the PNG has it
            opacity={1} // Fully opaque
            color="#ffffff" // White background
          //   emissive={'white'}
          // emissiveIntensity={2}
        // toneMapped={false}
            />
            {borderSizes(40, "red")}
          </mesh>
          {category && (
            <mesh position={[0, boxPositionY, 0]}>
            <boxGeometry args={boxGeometryArgs} />
            <meshStandardMaterial 
              color="#ffffff" // White background
                emissive={'white'}
          emissiveIntensity={2}
        // toneMapped={false}
            />

          </mesh>
          )}
        <Text
          position={textPosition} // above the image
          lineHeight={1}
          maxWidth={2.5}
          fontSize={textSize}
           font="/MavenPro-Bold.ttf"
          fontWeight={'800'}
          
          color={color}
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
            <meshBasicMaterial transparent opacity={.75} color="red" side={THREE.DoubleSide} />
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