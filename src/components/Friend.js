import moment from 'moment'
import ActiveLink from './ActiveLink'
import { Menu } from '@headlessui/react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Friend ({ id, avatar, firstname, lastname, isOnline, isSeen, timeago, lastMessage }) {
  return (
    <div className="px-2" key={id}>
      <ActiveLink href={`/t/${id}`} current="bg-gray-100 opacity-90">
        <a className="relative block hover:bg-gray-100 rounded-lg p-2 transition ease-in-out duration-100">
          <div className="flex items-center justify-between z-50">
            <div className="flex items-center justify-center space-x-3">
              <div className="relative flex-shrink-0 flex items-center">
                <LazyLoadImage 
                  className="rounded-full w-14 h-14 bg-gray-200 object-cover" 
                  effect="blur"
                  src={avatar} />
                <div className={ isOnline ? 'w-4 h-4 absolute border-2 rounded-full border-white bg-green-active bottom-0 right-0' : '' }></div>
              </div>
              <div className="text-sm hidden md:block">
                <span className="tracking-wide font-medium">{ `${firstname} ${lastname}` }</span>
                <p className="tracking-wide text-gray-600 clamp-1 text-xb leading-snug">{ `${isSeen ? `You: ${lastMessage}` : lastname }` } &middot; {moment(timeago, "HH:mm:ss").format("LT")}</p>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center">
                {isSeen ? (
                  <div className="flex-items">
                    <svg className="w-6 h-6 text-gray-300 fill-current" viewBox="0 0 36 36">
                      <path d="M0 36h36V0H0z" fill="none"></path>
                      <path d="M18 30c-6.627 0-12-5.372-12-12 0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12 0 6.628-5.372 12-12 12zm5.294-16.707l-7.296 7.295-3.254-3.252c-.352-.353-.919-.439-1.323-.148a1 1 0 00-.128 1.522l3.998 3.997a1 1 0 001.414 0l8.002-8.001a1 1 0 10-1.413-1.413z"></path>
                    </svg>
                  </div>
                ) : (
                  <div className="flex items-center pr-1">
                    <LazyLoadImage 
                      className="w-3.5 h-3.5 rounded-full fill-current"  
                      effect="blur"
                      src={avatar} />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Menu>
              <div className="flex items-center absolute inset-0 opacity-0 rounded-lg hover:opacity-100 active:opacity-100 focus:opacity-100 bg-transparent">
                <Menu.Button className="absolute right-8 rounded-full border shadow-sm bg-transparent bg-white focus:outline-none p-1 hover:bg-gray-100 active:bg-gray-200 transition ease-in-out duration-75 transform active:scale-95">
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 36 36">
                    <path d="M12.5 18A2.25 2.25 0 118 18a2.25 2.25 0 014.5 0zm7.75 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm5.5 2.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"></path>
                  </svg>
                </Menu.Button>
                <Menu.Items className="absolute top-14 left-14 bg-white h-96 z-50 w-80 focus:outline-none shadow-sm border rounded-xl px-4 py-3">
                  this is items
                </Menu.Items>
              </div>
            </Menu>
          </div>
        </a>
      </ActiveLink>
    </div>
  )
}