import { Post, WordAndImage } from './data'

export default function Popup({ onClose, item }: { onClose: () => void, item: WordAndImage | null }) {
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
    
  <div className="relative isolate overflow-hidden bg-white pl-6 px-6 pt-10 pb-10 lg:overflow-visible lg:px-10">
 
  {/* Outer container */}
  <div className="mx-auto max-w-7xl">
    {/* Inner content */}
    <div className="">
      <div className="">
        <p className="text-base font-semibold text-blue-600">Deploy faster</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          {item?.title ?? ''}
        </h1>
        {item?.topDescription && <p className="mt-6 text-xl text-gray-700">{item.topDescription}</p>}
      </div>
    </div>
  </div>
</div>
{item?.imgChild && <img className="w-full object-cover" src={item.imgChild} alt={item.imgChild}/>}

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
  <img key={index} className="w-full object-cover" src={img} alt={img}/>
))}

{item?.twoColumn && (
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
)}


{item?.post && (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
    
      {item.post.map((p, idx) => (
        <></>
        <div className="flex flex-col items-center">
          <img src={p.img} alt={p.title} className="my-2 max-h-64 object-contain" />
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold">{p.title}</h3>
          
          <p>{p.content}</p>
          </div>
          
     
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
  </div>
  </>
  )
}