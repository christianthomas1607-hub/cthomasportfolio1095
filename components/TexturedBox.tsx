import { useTexture, Text, Box  } from '@react-three/drei'
import { WordAndImageData } from '../components/data'

import { useState } from 'react'; 

import { Datatypes } from "../components/data/types/Datatypes";

import { Data }  from '../components/data/Data'

import 
{
BoxStyle,
useBorderSizes
}
from '../components/BoxStyle'

// import borderSizesFocus from '../components/BoxStyle';

import CategoryTitle from './CategoryTitle';

import { A11y } from '@react-three/a11y'

const data = await Data();

export default function TexturedBox({ onClick }: { onClick: (item: Datatypes) => void }) {
  // Keep a counter per category so we can reset the index for each group
  const categoryCounts: Record<string, number> = {};

  let startingCategoryPosition = 0;

  


  return (
    <>
     {data.map((item, index) => {
        // increment and read the per-category index
        const cat = item.category ?? 'default';
        if (!categoryCounts[cat]) categoryCounts[cat] = 0;
        let perCategoryIndex = categoryCounts[cat]++;

        let positionX = 0;
        let rotationY = 0;
        let positionZ = 0;

        let boxPositionY = 0;
        let triangleWidth = 0;
        let boxGeometryArgs: [number, number, number] = [0, 0, 0];
        let textPosition: [number, number, number] = [0, 0, 0];

        let focused = false;

        switch(item.category) {
          case 'Websites':
            positionX = -2.8;
            rotationY = 2;
            startingCategoryPosition = -.25;
            perCategoryIndex += startingCategoryPosition;
            positionZ = perCategoryIndex * 2.75;
            break;
          // case 'Print Design':
          //   positionX = 2.65;
          //   rotationY = -2;
          //   startingCategoryPosition = -1.25;
          //   perCategoryIndex += startingCategoryPosition;
          //   positionZ = perCategoryIndex * 2.5;
          //   break;
          case 'Motion Design':
            positionX = 2.65;
            rotationY = -2;
            positionZ = 18;
            break;
          case 'Interior Design':
            positionX = 2.65;
            rotationY = -2;
            positionZ = 21;
            break;
          case 'Email Design':
            positionX = 2.65;
            rotationY = -2;
            startingCategoryPosition = -.25;
            perCategoryIndex += startingCategoryPosition;
            positionZ = perCategoryIndex * 2.5;
            break;
          default:
            positionX = 2;
            rotationY = -2;
            positionZ = perCategoryIndex * 3;
        }

        if (item.category !== 'Email Design') {
          boxPositionY = 0;
          triangleWidth = 0.522;
          boxGeometryArgs = [0, 1, 1];
          textPosition = [0, .64, 0];
        }
        else {
          boxPositionY = 0;
          triangleWidth = 1.044; 
          boxGeometryArgs = [0, 1, 2];
          textPosition = [0, .64, 0];
        }


        
        return (
          <>
          <A11y
          role="button"
          description={item.title}
          actionCall={() => 
            {
              onClick(item);
            }
          }
          >
          <BoxStyle
            key={`${cat}-${perCategoryIndex}-${index}`}
            x={positionX}
            y={2.75}
            z={positionZ}
            rotationY={rotationY}
            title={item.title}
            category={item.category}
            index={perCategoryIndex}
            onClick={() => onClick(item)}
            image={item.imgMain}
            boxPositionY={boxPositionY}
            triangleWidth={triangleWidth}
            boxGeometryArgs={boxGeometryArgs}
            textPosition={textPosition}    
          />
          </A11y>
          </>
        );
      })}

      {Object.keys(categoryCounts).map((category, idx) => {
        let titleX = 0;
        let titleY = 0;
        let titleRotationY = 0;
        let titleZ = 0;

        switch (category) {
          case 'Websites':
            titleX = -2.8;
            titleY = 4;
            titleRotationY = -1;
            titleZ = startingCategoryPosition;
            break;
          // case 'Print Design':
          //   titleX = 2;
          //   titleY = 3.65;
          //   titleRotationY = 1;
          //   titleZ = startingCategoryPosition;
          //   break;
          case 'Motion Design':
            titleX = 2;
            titleY = 4;
            titleRotationY = 1;
            titleZ = 18;
            break;
          case 'Interior Design':
            titleX = 2;
            titleY = 4;
            titleRotationY =1;
            titleZ = 21;
            break;
            case 'Email Design':
            titleX = 2;
            titleY = 4;
            titleRotationY = 1;
            titleZ = startingCategoryPosition;
            break;
          // case 'Email Design':
          //   titleX = 2;
          //   titleY = 4;
          //   titleRotationY = 1;
          //   titleZ = 25;
          //   break;
          default:
            titleX = 2;
            titleY = 4;
            titleRotationY = -2;
            titleZ = startingCategoryPosition;
        }

        return (
          <>
          
          <CategoryTitle
            key={`${category}-${idx}`}
            x={titleX}
            y={titleY}
            z={titleZ}
            rotationY={titleRotationY}
            title={category}
          />
          
          </>
        );
      })}

    </>
  )
}