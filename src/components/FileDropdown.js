import { useState, useCallback } from 'react'
import { Gallery, Item } from 'react-photoswipe-gallery'

export default function FileDropdown ({ title, isOpen, list, images, files }) {

  const [isDropdown, setDropdown] = useState(isOpen)
  const toggleDropdown = useCallback(() => {
    setDropdown(v => !v)
  }, [])

  return (
    <div className="relative text-sm">
      <div className="px-2">
        <button 
          onClick={toggleDropdown}
          className="flex items-center justify-between w-full px-2 py-2.5 rounded-lg focus:outline-none active:bg-gray-200 hover:bg-gray-100 opacity-90 transition ease-in-out duration-150"
        >
          <span className="font-semibold">{title}</span>
          <span>
            <svg 
              className="w-6 h-6 fill-current text-gray-600" 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg">
              { !isDropdown ? <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path> 
                        : <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd"></path> }
            </svg>
          </span>
        </button>
      </div>
      {isDropdown && (
        <ul className="overflow-hidden">
          {list && (
            list.map(({ icon, description, text }, i) => (
              <li key={i} className="px-2">
                <button type="button" className="flex space-x-3 items-center w-full px-2 py-2.5 rounded-lg focus:outline-none active:bg-gray-200 hover:bg-gray-100 opacity-90 transition ease-in-out duration-150">
                  <span>
                    {icon}
                  </span>
                  <div className="flex flex-col items-start">
                    <span className="font-medium">{ text }</span>
                    {description && <p className="text-xs text-gray-500">{ description }</p>}
                  </div>
                </button>
              </li>
            ))
          )}
          {files && (
            files.map(({fileName}, i) => (
              <div key={i} className="px-2">
                <button type="button" className="flex space-x-3 items-center w-full px-2 py-2.5 rounded-lg focus:outline-none active:bg-gray-200 hover:bg-gray-100 opacity-90 transition ease-in-out duration-150">
                  <span className="font-medium">{ fileName }</span>
                </button>
              </div>
            ))
          )}
          {images && (
            <div className="absolute w-full">
              <div className="grid grid-cols-3 gap-1">
                {images.map((image, i) => (
                  <Gallery key={i}>
                    <Item
                      original={image}
                      thumbnail={image}
                      width="1024"
                      height="768"
                    >
                      {({ ref, open }) => (
                        <img className="w-full" ref={ref} onClick={open} src={image} />
                      )}
                    </Item>
                  </Gallery>
                ))}
              </div>
            </div>
          )}
        </ul>
      )}
    </div>
  )
}