import { WordAndImage } from './data'
import { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

export default function Popup({ onClose, item }: { onClose: () => void, item: WordAndImage | null }) {
  
  const contentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let canceled = false
    const loadHTML = async () => {
      if (!item?.HTMLFile) return
      try {
        const response = await fetch(item.HTMLFile)
        if (response.ok) {
          const html = await response.text()
          if (!canceled && contentRef.current) {
            contentRef.current.innerHTML = html
          }
        } else {
          console.error("Failed to load HTML file.")
        }
      } catch (error) {
        console.error("Error fetching HTML:", error)
      }
    }
    loadHTML()
    return () => {
      canceled = true
      if (contentRef.current) {
        contentRef.current.innerHTML = ''
      }
    }
  }, [item?.HTMLFile])
  
  
  return (
    <>
    <button
        id="popUpCloseButton"
          onClick={onClose}
          className="rounded-md bg-blue-800 px-3.5 py-2.5 text-4xl font-semibold text-white shadow-sm hover:bg-bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 shadow-xl/30 fixed top-4 right-4 z-50"
        >
     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="butt" stroke-linejoin="arcs"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
Close
       </button>
  <div className="popup max-h-[80vh] overflow-y-auto rounded-lg shadow-lg">
    
  <div className="relative isolate overflow-hidden bg-white pl-6 px-6 pt-3 lg:pt-10 pb-5 lg:overflow-visible lg:px-10">
 
  {/* Outer container */}
  <div className="mx-auto max-w-7xl">
    {/* Inner content */}
    <div className="">
      <div className="flex flex-col items-center">
        <p className="text-2xl font-extrabold text-gray-600">{item.category}</p>
        <h1 className="mt-1 font-semibold tracking-tight text-gray-900 text-4xl sm:text-9xl text-center">
          {item?.title ?? ''}
        </h1>

          {item?.video && (
  <iframe
    style={{ border: "1px solid rgba(0, 0, 0, 0.1)", margin: "auto", width: "-webkit-fill-available" }}
    width="800"
    height="450"
    src={item.video}
    allowFullScreen
  />
)}

  
        {item?.topNote && 
        <div id="noteInfo">
        <p id="noteTop">
          <FontAwesomeIcon icon={['fas', 'exclamation-circle']}/> <strong id="notetitle">Note</strong>
        </p>
        <p id="noteText">{item.topNote}</p>
        </div>
        }

        {item?.topDescription && <p className="text-xl text-gray-700" id="topDescription">{item.topDescription}</p>}
      </div>
    </div>
  </div>
</div>

{item?.HTMLFile && (
  <div
    id="emailCode"
    ref={contentRef}
    className="w-full"
  />
)}

{/*
&& explantion:

Using && is a quicker way:
item?.figma → This uses optional chaining. It safely checks if item exists and has a figma property.

If item is null or undefined, item?.figma will evaluate to undefined instead of throwing an error.


With &&:
{
item?.video && (
    <iframe
    style={{ border: "1px solid rgba(0, 0, 0, 0.1)", margin: "auto", width: "-webkit-fill-available" }}
    width="800"
    height="450"
    src={item.video}
    allowFullScreen
    />
  )
}

Without &&: 
{
item?.video ? (
    <iframe
    style={{ border: "1px solid rgba(0, 0, 0, 0.1)", margin: "auto", width: "-webkit-fill-available" }}
    width="800"
    height="450"
    src={item.video}
    allowFullScreen
    />
  ): null
}

*/}

{item?.imgChild && <img className="w-full object-cover" src={"/images/" + item.imgChild} alt={item.imgChild}/>}

{item?.video && (
  <iframe
    style={{ border: "1px solid rgba(0, 0, 0, 0.1)", margin: "auto", width: "-webkit-fill-available" }}
    width="800"
    height="450"
    src={item.video}
    allowFullScreen
  />
)}
{item?.figma && (
  <iframe style={{ border: "1px solid rgba(0, 0, 0, 0.1)", margin: "auto", width: "-webkit-fill-available" }} width="800" height="450" src={item.figma}
  allowFullScreen>
  </iframe>
)}


{item?.multipleImages?.map((img, index) => (
  <img key={index} className="w-full object-cover" src={"/images/" + img} alt={img}/>
))}

{/* {item?.twoColumn && (
  <div>
    {Array.from(item.twoColumn.entries()).map(([outerKey, innerMap], outerIndex) => (
      <div key={outerIndex} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="flex flex-col items-center">
        <img src={outerKey} alt={outerKey} className="mb-2 max-h-96 object-contain"/>
      </div>
        {Array.from(innerMap.entries()).map(([innerKey, innerValue], innerIndex) => (
          <div key={innerIndex} className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-1 text-black">{innerKey}</h3>
            <p className="text-black">{innerValue}</p>
          </div>
        ))}
      </div>
    ))}
  </div>
)} */}


{item?.OneColumnImgandDescription && (
  <div className="">
    
      {item.OneColumnImgandDescription.map((p, idx) => (
        <>
          <div className="flex flex-col items-center mt-5 bg-[#f7f7f7] py-5 px-3 lg:px-0">
             {Array.from(p.titleDescription.entries()).map(([title, desc], index) => (
                <>
                <h3 className="lg:text-5xl font-semibold mb-3 text-gray-900">{title}</h3>
                <p className="text-xl text-black">{desc}</p>
                </>
            ))}  
          </div>
          <div className="flex flex-col items-center mt-5">
            <img src={"/images/" + p.img} alt={p.img} className="my-2" />
          </div>
        </>
      ))}
 
  </div>
)}



{item?.twoColumnImgandDescription && (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
    
      {item.twoColumnImgandDescription.map((p, idx) => (
        <>    
          <div className="flex flex-col items-center mt-5">
            <img src={"/images/" + p.img} alt={p.img} className="my-2 max-h-64 object-contain" />
          </div>
          <div className="flex flex-col items-center mt-5">
             {Array.from(p.titleDescription.entries()).map(([title, desc], index) => (
                <>
                <h3 className="text-xl font-semibold mb-1 text-black mt-3 ml-0 mr-auto">{title}</h3>
                <p className="text-black">{desc}</p> 
                </>
            ))}
            
          </div>
          </>
      ))}
 
  </div>
)}

{/* {item.twoColumn &&
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
    
    {Array.from(item.twoColumn.entries()).map(([img, desc], index) => (
      <>
      <div className="flex flex-col items-center">
        <img src={img} alt={`Image ${index + 1}`} className="mb-2 max-h-96 object-contain"/>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-black">{desc}</p>
      </div>
     </>
    ))}
    </div>
} */}

{/* {item?.post && (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
    
      {item.post.map((p, idx) => (
        <>    
          <div className="flex flex-col items-center">
            <img src={p.img} alt={p.img} className="my-2 max-h-64 object-contain" />
          </div>
          <div className="flex flex-col items-center">
            {p.title.map((p, idx) => (
              <h3 className="text-xl font-semibold text-black text-left ml-0 mr-auto">{p}</h3>
           
            ))}
            
          </div>
          </>
      ))}
 
  </div>
)} */}


  </div>
  </>
  )
}