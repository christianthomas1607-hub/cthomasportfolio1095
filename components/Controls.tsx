import { WordAndImage } from './data'

export default function Controls() {
  
  
  function simulateKeyEvent( key: string, type: 'keydown' | 'keyup') {
  window.dispatchEvent(new KeyboardEvent(type, {key}))
}
  
  return (
    <>
    <div className="controls">
        <button className="controls-button bg-gray-300 hover:bg-gray-400 text-gray-800 font-black mx-2 py-2 px-4 rounded inline-flex items-center"
          onPointerDown={() => { simulateKeyEvent('w', 'keydown'); simulateKeyEvent('ArrowUp', 'keydown') }}
          onPointerUp={() => { simulateKeyEvent('w', 'keyup'); simulateKeyEvent('ArrowUp', 'keyup') }}
          onPointerLeave={() => { simulateKeyEvent('w', 'keyup'); simulateKeyEvent('ArrowUp', 'keyup') }}
        >
          <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#193cb8" strokeWidth="3.25" strokeLinecap="butt" strokeLinejoin="miter"><path d="M12 19V6M5 12l7-7 7 7"/>
          </svg>
          forward
        </button>
        <div className="controls-middle-row">
        <button className="controls-button bg-gray-300 hover:bg-gray-400 text-gray-800 font-black mx-2 py-2 px-4 w-24 rounded inline-flex items-center text-center"
          onPointerDown={() => { simulateKeyEvent('a', 'keydown'); simulateKeyEvent('ArrowLeft', 'keydown') }}
          onPointerUp={() => { simulateKeyEvent('a', 'keyup'); simulateKeyEvent('ArrowLeft', 'keyup') }}
          onPointerLeave={() => { simulateKeyEvent('a', 'keyup'); simulateKeyEvent('ArrowLeft', 'keyup') }}
        >
           <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#193cb8" strokeWidth="3.25" strokeLinecap="butt" strokeLinejoin="miter"><path d="M19 12H6M12 5l-7 7 7 7"/>
           </svg>
          left
        </button>
        <button className="controls-button bg-gray-300 hover:bg-gray-400 text-gray-800 font-black mx-2 py-2 px-4 w-24 rounded inline-flex items-center text-center"
          onPointerDown={() => { simulateKeyEvent('d', 'keydown'); simulateKeyEvent('ArrowRight', 'keydown') }}
          onPointerUp={() => { simulateKeyEvent('d', 'keyup'); simulateKeyEvent('ArrowRight', 'keyup') }}
          onPointerLeave={() => { simulateKeyEvent('d', 'keyup'); simulateKeyEvent('ArrowRight', 'keyup') }}
        >
          right
          <svg className="ml-1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#193cb8" strokeWidth="3.25" strokeLinecap="butt" strokeLinejoin="miter"><path d="M5 12h13M12 5l7 7-7 7"/>
          </svg>
        </button>
        </div>
        <button className="controls-button bg-gray-300 hover:bg-gray-400 text-gray-800 font-black mx-2 py-2 px-4 rounded inline-flex items-center"
          onPointerDown={() => { simulateKeyEvent('s', 'keydown'); simulateKeyEvent('ArrowDown', 'keydown') }}
          onPointerUp={() => { simulateKeyEvent('s', 'keyup'); simulateKeyEvent('ArrowDown', 'keyup') }}
          onPointerLeave={() => { simulateKeyEvent('s', 'keyup'); simulateKeyEvent('ArrowDown', 'keyup') }}
        >
           <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#193cb8" strokeWidth="3.25" strokeLinecap="butt" strokeLinejoin="miter"><path d="M12 5v13M5 12l7 7 7-7"/>
           </svg>
          backward
        </button>
      </div>
    </>
  )
}