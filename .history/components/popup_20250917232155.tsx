export default function Popup({ onClose, item }: { onClose: () => void, item: { title: string, imgMain: string, imgChild?: string, description?: string, figma?: string, multipleImages?: string[]} }) {
  return (
    <>
    <button
        id="popUpCloseButton"
          onClick={onClose}
          className="rounded-md bg-blue-800 px-3.5 py-2.5 text-4xl font-semibold text-white shadow-sm hover:bg-bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 shadow-xl/30 fixed top-4 right-4 z-50"
        >
     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="butt" stroke-linejoin="arcs"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
Close
       </button>
  <div className="popup max-h-[80vh] overflow-y-auto rounded-lg shadow-lg">
    
      <div className="relative isolate overflow-hidden bg-white pl-6 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-10">
 

  {/* Outer container */}
  <div className="mx-auto max-w-7xl">
    {/* Inner content */}
    <div className="">
      <div className="">
        <p className="text-base font-semibold text-blue-600">Deploy faster</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          {item ? item.title : ''}
        </h1>
        <p className="mt-6 text-xl text-gray-700">
        </p>
        
      </div>
    </div>
  </div>
</div>
<img className="w-full object-cover" src={item.imgChild} />
{item?.figma &&
<iframe style={{ border: "1px solid rgba(0, 0, 0, 0.1)", margin: "auto", width: "-webkit-fill-available" }} width="800" height="450" src="https://embed.figma.com/proto/W0r4eQk95RhVOoeFRxIx24/IDT535_Final_Project?node-id=20-353&starting-point-node-id=20%3A353&embed-host=share" 
allowFullScreen>
</iframe>
}


{item}
  </div>
  </>
  )
}