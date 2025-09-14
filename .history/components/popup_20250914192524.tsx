export default function Popup({ onClose, item }: { onClose: () => void, item: { title: string, imgPath: string } }) {
  return (
    <div className="popup fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative isolate overflow-hidden bg-white pl-6 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-10 max-h-[80vh] overflow-y-auto rounded-lg shadow-lg">
        {/* Outer container */}
        <div className="mx-auto max-w-7xl">
          {/* Inner content */}
          <div>
            <div>
              <p className="text-base font-semibold text-indigo-600">Deploy faster</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {item ? item.title : 'No item selected'}
              </h1>
              <p className="mt-6 text-xl text-gray-700">
                {/* Add more content here to test scrolling */}
                
              </p>
              <button onClick={onClose} className="mt-6 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Close
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}