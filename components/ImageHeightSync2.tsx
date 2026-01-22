import React, { useEffect, useRef, useState } from "react";

type Props = { imgs: Map<string, string>; };


export default function ImageHeightSync2({ imgs }: Props) {
  const imgRef = useRef(null); // Reference to the image
  const boxRef = useRef(null); // Reference to the element we want to update

  
  const [imgHeight, setImgHeight] = useState(0);



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
      <div className="parent-2-col-images">
      {Array.from(imgs.entries()).map(([imgSrc, alt], index) => (
        <>
          {index % 2 === 0 ? (
            <div className="child-2-col-images-1">
                <div className="desktop-header-background header-background">
                <h3 className="desktop-header">Desktop Image</h3>
              </div>
            <img src={"/images/" + imgSrc} alt={alt}  ref={imgRef} />
            </div>
          ) : (
            <div className="child-2-col-images-2">
              <div className="mobile-header-background header-background">
                <h3 className="mobile-header">Mobile Image</h3>
              </div>
              <div className="mobileimageparent" ref={boxRef}>
                <img src={"/images/" + imgSrc} alt={alt} />
              </div>
            </div>
          )}
        </>
                // <>
                // <img src={"/images/" + imgSrc} alt={alt} className="my-2" />
                // </>
            ))}
      {/* {imgs.map((imgchild, index) => (
        <>
          {index % 2 === 0 ? (
            <div className="child-2-col-images-1">
                <div className="desktop-header-background header-background">
                <h3 className="desktop-header">Desktop Image</h3>
              </div>
            <img src={"/images/" + imgchild} alt={index.toString()}  ref={imgRef} />
            </div>
          ) : (
            <div className="child-2-col-images-2">
              <div className="mobile-header-background header-background">
                <h3 className="mobile-header">Mobile Image</h3>
              </div>
              <img src={"/images/" + imgchild} alt={index.toString()} ref={boxRef} />
            </div>
          )}
        </>
      ))} */}
    </div>
  )

}