import moment from 'moment'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ButtonMenu from '~/components/ButtonMenu'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Friend ({ id, avatar, firstname, lastname, isOnline, isSeen, timeago, lastMessage }) {
  const router = useRouter()

  return (
    <div className="px-2" key={id}>
      <Link href={`/t/${id}`}>
        <a className="relative block hover:bg-gray-100 rounded-lg p-2 transition ease-in-out duration-100">
          <div className="flex items-center justify-between z-50">
            <div className="flex items-center justify-center space-x-3">
              <div className="relative flex-shrink-0 flex items-center">
                <LazyLoadImage className="rounded-full w-14 h-14 bg-gray-200 object-cover" 
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
            <div className="flex items-center absolute inset-0 opacity-0 rounded-lg hover:opacity-100 bg-transparent">
             <ButtonMenu />
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}