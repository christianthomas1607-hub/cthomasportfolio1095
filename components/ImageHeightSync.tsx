import React, { useEffect, useRef, useState } from "react";

export default function ImageHeightSync(props : string[]) {
  const imgRef = useRef(null); // Reference to the image
  const boxRef = useRef(null); // Reference to the element we want to update
  const [imgHeight, setImgHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (imgRef.current) {
        const height = imgRef.current.clientHeight;
        setImgHeight(height);

        // Example: update another element's height to match the image
        if (boxRef.current) {
          boxRef.current.style.height = `${height}px`;
        }
      }
    };

    // Run once after image loads
    if (imgRef.current && imgRef.current.complete) {
      updateHeight();
    } else if (imgRef.current) {
      imgRef.current.onload = updateHeight;
    }

    // Also listen for window resize
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  props.map((imgchild, index) =>
  {
      if(index % 2 === 0) {
     return (
      <>
      {/* <div className="child-2-col-images-1"> */}
      <img  src={"/images/" + imgchild} alt={index.toString()} className="child-2-col-images-1"/>
      {/* <p style={{color: "black"}}>height: {deskTopImageHeight}</p> */}
      {/* </div> */}
      </>
     ) 
    }
      else {
        return (
        <>
        <div className="child-2-col-images-2" >
        <img src={"/images/" + imgchild} alt={index.toString()} />
        </div>
        </>
        )
      }
  })

  // return (
  //   <div className="parent-2-col-images">
  //     <img
  //       ref={imgRef}
  //       // src={props.firstimg}
  //       src="/images/Chubb-Special-Gift Store-3-edge.jpeg"
  //       alt="Example"
  //       className="child-2-col-images-1"
  //     />
  //     <div className="child-2-col-images-2">
  //       <img
  //       ref={boxRef}
  //       // src={props.secondimg}
  //       src="/images/chubb-mobile-design.jpeg"
        
  //     />
  //     </div>
      
      
  //   </div>
  // );
}