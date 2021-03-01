import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Friend ({ id, avatar, firstname, lastname, lastMessage }) {
  const router = useRouter()
  console.log(router.asPath)
  return (
    <div className="px-2" key={id}>
      <Link href={`/t/${id}`}>
        <a className="relative">
          <div className={ `flex items-center justify-between rounded-lg p-2 hover:bg-gray-100 transition ease-in-out duration-100 ${1 ? 'active:bg-gray-200' : '' }` }>
            <div className="flex items-center justify-center space-x-3">
              <div className="flex-shrink-0">
                <img className="rounded-full w-14 h-14 bg-gray-200 object-cover" src={avatar} />
              </div>
              <div className="text-sm">
                <span className="tracking-wide font-medium">{ `${firstname} ${lastname}` }</span>
                <p className="tracking-wide text-gray-600 clamp-1 text-xb leading-snug">{ lastMessage } &middot; 4h</p>
              </div>
            </div>
            <div>
              <span>
                <svg className="w-6 h-6 text-gray-300 fill-current" viewBox="0 0 36 36">
                  <path d="M0 36h36V0H0z" fill="none"></path>
                  <path d="M18 30c-6.627 0-12-5.372-12-12 0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12 0 6.628-5.372 12-12 12zm5.294-16.707l-7.296 7.295-3.254-3.252c-.352-.353-.919-.439-1.323-.148a1 1 0 00-.128 1.522l3.998 3.997a1 1 0 001.414 0l8.002-8.001a1 1 0 10-1.413-1.413z"></path>
                </svg>
              </span>
            </div>
          </div>
          <div className="absolute inset-y-4 left-64 z-50 bg-yellow-200">
            <button className="rounded-full border shadow-sm bg-white focus:outline-none p-1 hover:bg-gray-100 active:bg-gray-200 transition ease-in-out duration-75 transform active:scale-95">
              <svg className="w-7 h-7 fill-current" viewBox="0 0 36 36">
                <path d="M12.5 18A2.25 2.25 0 118 18a2.25 2.25 0 014.5 0zm7.75 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm5.5 2.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"></path>
              </svg>
            </button>
          </div>
        </a>
      </Link>
    </div>
  )
}