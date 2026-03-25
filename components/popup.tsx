import { WordAndImage } from './data';

import { Datatypes }  from '../components/data/types/Datatypes';

import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import ImageHeightSync from '../components/ImageHeightSync';

import ImageHeightSync2 from '../components/ImageHeightSync2';

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { Fragment } from 'react';


library.add(fas, far, fab)

export default function Popup({ onClose, item }: { onClose: () => void, item: Datatypes | null }) {
  
  
  return (
    <>
    <button
        id="popUpCloseButton"
          onClick={onClose}
          className="rounded-md bg-blue-800 px-3.5 py-2.5 text-4xl font-semibold text-white 
          shadow-sm hover:bg-bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 shadow-xl/30 fixed top-4 right-4 z-50"
        >
     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" 
     fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="butt" 
     strokeLinejoin="miter"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
     </svg>
      <span className="close-text">Close</span>      
       </button>
  <div className="popup rounded-lg shadow-lg">

    <h1 className="font-semibold tracking-tight text-gray-900 text-4xl sm:text-9xl text-center mx-auto lg:pb-0 mt-3 mb-2 lg:mt-3 lg:mb-7">
      {item?.title ?? ''}
    </h1>

    {item?.topDescription && <p className="text-xl text-gray-700 mx-auto" id="topDescription">{item.topDescription}</p>}

    {item?.TwoColumnImgandAlt && (
      <ImageHeightSync2 imgs={item.TwoColumnImgandAlt} />
      )
    }

    {item?.titleDescription2Images && (
      <>
        <div className="flex flex-col items-center lg:mt-5 bg-[#f7f7f7] py-3 lg:py-5 px-3 lg:px-0">
                <h3 className="lg:text-5xl font-semibold mb-3 text-gray-900">{item.titleDescription2Images.title}</h3>
                <p className="text-xl text-black">{item.titleDescription2Images.description}</p>
        </div>
        <div className="flex flex-col items-center mt-5">
          <ImageHeightSync2 imgs={item.titleDescription2Images.TwoColumnImgandAlt} />
        </div>
      </>
      )
    }

  </div>
  </>
  )
}