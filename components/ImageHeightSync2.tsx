import React, { useEffect, useRef, useState } from "react";

import { TwoColumnImgandAlt }  from '../components/data/types/Datatypes';

type Props = { imgs: TwoColumnImgandAlt };

import { Fragment } from 'react';

export default function ImageHeightSync2({ imgs }: Props) {
  const imgRef = useRef(null); // Reference to the image
  const boxRef = useRef(null); // Reference to the element we want to update

  
 

const [originalHeight, setoriginalHeight] = useState(0);


useEffect(() => {

   const updateHeight = () => {
    if (imgRef.current){
          // Do what you want to do when the size of the element changes

      const newHeight = imgRef.current.clientHeight;
      setoriginalHeight(newHeight);

      if(boxRef.current){
        boxRef.current.style.height = `${newHeight}px`;
      }
    }
  };

   // Run once after image loads
    if (imgRef.current && imgRef.current.complete) {
      updateHeight();
    } 
    else if (imgRef.current) {
      imgRef.current.onload = updateHeight;
    }

    // Also listen for window resize
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };

}, []);

  return (
      <div className="parent-2-col-images mt-2 lg:mt-4">
        <div className="child-2-col-images-1">
                <div className="desktop-header-background header-background">
                <h3 className="desktop-header">Desktop Image</h3>
              </div>
            <img src={"/images/" + imgs.desktop.imagefile} alt={imgs.desktop.Alt}  ref={imgRef} />
            </div>
    
         <div className="child-2-col-images-2">
              <div className="mobile-header-background header-background">
                <h3 className="mobile-header">Mobile Image</h3>
              </div>
              <div className="mobileimageparent" ref={boxRef}>
                <img src={"/images/" + imgs.mobile.imagefile} alt={imgs.mobile.Alt}/>
              </div>
            </div>
    </div>
  )

}