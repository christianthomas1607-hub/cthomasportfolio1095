import { WordAndImage } from './data';

import { Datatypes }  from '../components/data/types/Datatypes';

import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';


import ImageHeightSync from './ImageHeightSync';

import {HTMLFile} from '../components/HTMLFile'



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

    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-6 gap-x-4 pb-4 lg:pb-5 px-4 md:p-3">
            
            <div className="flex flex-col items-left md:mt-5 lg:mx-13">

                 <div>
                    {item?.title && <h3 className="font-semibold tracking-tight text-gray-900 text-4xl sm:text-6xl mb-1 mt-3 ml-0 mr-auto" id="title">{item.title}</h3>}
                    {item?.topDescription && <p className="text-black text-xl ml-0 mr-auto" id="topDescription">{item.topDescription}</p>}
                    {item?.link && 
        <a href={item.link} id='liveSiteLink'>
          <div id='liveSiteButton'>
          View Live Site
          <div className="buttonicon w-embed">
              <svg width="18" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3431 0.92888L17.7071 7.29284C18.0976 7.68336 18.0976 8.31653 17.7071 8.70705L11.3431 15.071C10.9526 15.4615 10.3195 15.4615 9.92893 15.071C9.53841 14.6805 9.53841 14.0473 9.92893 13.6568L14.5858 8.99995H1C0.447715 8.99995 0 8.55223 0 7.99995C0 7.44766 0.447715 6.99995 1 6.99995L14.5858 6.99995L9.92893 2.34309C9.53841 1.95257 9.53841 1.3194 9.92893 0.92888C10.3195 0.538355 10.9526 0.538355 11.3431 0.92888Z" fill="currentColor
                  "> 
                </path>
              </svg>
              </div>
          </div>
        </a>
}

{item?.topNote && 
    <div id="noteInfo">
      <p id="noteTop">
        <FontAwesomeIcon icon={['fas', 'exclamation-circle']}/> <strong id="notetitle">Note</strong>
      </p>
      <p id="noteText">
        {item.topNote}
      </p>
    </div>
    }
                  </div>

            </div>
            <div className="flex flex-col items-center md:mt-5 my-class">
              <img loading="lazy" src={"/images/" + item.imgMain} alt={item.title} className="my-2 object-contain max-w-1/2" />
            </div>
          </div>

{/* 
    <h1 className="font-semibold tracking-tight text-gray-900 text-4xl sm:text-9xl text-center mx-auto lg:pb-0 mt-3 mb-2 lg:mt-3 lg:mb-7">
      {item?.title ?? ''}
    </h1>

    {item?.topNote && 
    <div id="noteInfo">
      <p id="noteTop">
        <FontAwesomeIcon icon={['fas', 'exclamation-circle']}/> <strong id="notetitle">Note</strong>
      </p>
      <p id="noteText">
        {item.topNote}
      </p>
    </div>
    }



    {item?.topDescription && <p className="text-xl text-gray-700 mx-auto" id="topDescription">{item.topDescription}</p>}

    {item?.link && 
        <a href={item.link} id='liveSiteLink'>
          <div id='liveSiteButton'>
          View Live Site
          <div className="buttonicon w-embed">
              <svg width="18" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3431 0.92888L17.7071 7.29284C18.0976 7.68336 18.0976 8.31653 17.7071 8.70705L11.3431 15.071C10.9526 15.4615 10.3195 15.4615 9.92893 15.071C9.53841 14.6805 9.53841 14.0473 9.92893 13.6568L14.5858 8.99995H1C0.447715 8.99995 0 8.55223 0 7.99995C0 7.44766 0.447715 6.99995 1 6.99995L14.5858 6.99995L9.92893 2.34309C9.53841 1.95257 9.53841 1.3194 9.92893 0.92888C10.3195 0.538355 10.9526 0.538355 11.3431 0.92888Z" fill="currentColor
                  "> 
                </path>
              </svg>
              </div>
          </div>
        </a>
} */}


    {
      item?.HTMLFile && (
        <>
        {
          HTMLFile(item.HTMLFile)
        }
        </>
      )
    }


    {item?.TwoColumnImgandAlt && (
      <ImageHeightSync imgs={item.TwoColumnImgandAlt} />
      )
    }


    {item?.titleDescriptionTwoImagesOneColumn && (
      <>
        {
          item.titleDescriptionTwoImagesOneColumn.map((innerItem, index) => (
            <div key={index}>
              <div className="flex flex-col items-center lg:mt-5 bg-[#f7f7f7] py-3 lg:py-5 px-3 lg:px-0">
                <h3 className="lg:text-5xl font-semibold mb-3 text-gray-900">{innerItem.title}</h3>
                <p className="text-xl text-black">{innerItem.description}</p>
              </div>
              <div className="flex flex-col items-center mt-5">
                <ImageHeightSync imgs={innerItem.TwoColumnImgandAlt} />
              </div>
            </div>
          ))
        }
      </>
      )
    }

    {item?.titleDescriptionOneImageOneColumn && (
      <>
        {
          item.titleDescriptionOneImageOneColumn.map((innerItem, index) => (
            <div key={index}>
              <div className="flex flex-col items-center mt-5 bg-[#f7f7f7] py-3 lg:py-5 px-3 lg:px-0">
                <h3 className="lg:text-5xl font-semibold mb-3 text-gray-900">{innerItem.title}</h3>
                <p className="text-xl text-black">{innerItem.description}</p>
              </div>
              <div className="flex flex-col items-center mt-5">
                <img loading="lazy" src={"/images/" + innerItem.imagefile} alt={innerItem.Alt} className="my-2" />
              </div>
            </div>
          ))
        }
      </>
      )
    }

    {
     item.titleDescriptionOneImageTwoColumn && (
      <>
      {
        item.titleDescriptionOneImageTwoColumn.map((innerItem, index) => (
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-6 gap-x-4 pb-4 lg:pb-5 px-4 md:p-3" key={index}>
            <div className="flex flex-col items-center md:mt-5 my-class">
              <img loading="lazy" src={"/images/" + innerItem.TwoColumnImgandAlt.desktop.imagefile} alt={innerItem.TwoColumnImgandAlt.desktop.Alt} className="my-2 object-contain" />
            </div>
            <div className="flex flex-col items-left md:mt-5 lg:mx-13">
              {
                innerItem.titleAndDescription.map((titleAndDescription, titleAndDescriptionId) => (
                 <div key={titleAndDescriptionId}>
                    <h3 className="text-xl font-semibold mb-1 text-black mt-3 ml-0 mr-auto">{titleAndDescription.title}</h3>
                    <p className="text-black ml-0 mr-auto">{titleAndDescription.description}</p> 
                  </div>
                ))
              }
            </div>
          </div>
        ))
      }
      </>
     )
    }

    {
    item?.video && (
          <iframe
            loading="lazy"
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)", margin: "auto", width: "-webkit-fill-available" }}
            width="800"
            height="450"
            src={item.video}
            allowFullScreen
          />
    )
    }

    {
      item.figma && (
        <>
        {
          <iframe
            loading="lazy" style={{ border: "1px solid rgba(0, 0, 0, 0.1)", margin: "auto", width: "-webkit-fill-available" }} 
            width="800" height="450" src={item.figma}
            allowFullScreen>
          </iframe>
        }
        </>
      )
    }

    {
      item.multipleImages && (
        <>
        {
          item.multipleImages.map((image, index) => (
            <div key={index}>
              <img loading="lazy" key={index} className="w-full object-cover" src={"/images/" + image.imagefile} alt={image.Alt}/>
            </div>
          ))
        }
        </>
      )
    }

  </div>
  </>
  )
}