export default function Popup({ onClose, item }: { onClose: () => void, item: { title: string, imgPath: string } }) {
  return (
  <div className="popup max-h-[80vh] overflow-y-auto rounded-lg shadow-lg">
    
      <div className="relative isolate overflow-hidden bg-white pl-6 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-10">
 

  {/* Outer container */}
  <div className="mx-auto max-w-7xl">
    {/* Inner content */}
    <div className="">
      <div className="">
        <p className="text-base font-semibold text-indigo-600">Deploy faster</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          {item ? item.title : 'No item selected'}
        </h1>
        <p className="mt-6 text-xl text-gray-700">
          
        </p>
        
      </div>
    </div>
  </div>
</div>
<img className="w-full object-cover" src="/images/stym-0.jpg" />

  </div>
  )
}