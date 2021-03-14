import useSWR from 'swr'
import Spinner from './Spinner'
import FriendList from '~/components/FriendList'
import PerfectScrollbar from 'react-perfect-scrollbar'

function getUsers () {
  const { data, error } = useSWR(`/api/users`, (query) => fetch(query).then(res => res.json()))
  return {
    data: data ? data.users : undefined,
    error
  }
}

export default function Layout ({ children }) {

  const { data, error } = getUsers()
  if (error) return <div className="h-screen w-full inset-0 flex items-center justify-center text-2xl font-semibold">You are offline</div>
  if (!data) return <Spinner />

  return (
    <div className="flex flex-row bg-white w-full h-screen">
      {/* User chat list  `RIGHT` */}
      <div className="w-small flex-none flex flex-col flex-shrink-0 md:w-side">
        <div className="px-4 pt-5 flex flex-col">
          <div className="flex items-center justify-between">
            <div className="hidden md:block">
              <div className="flex flex-row items-center space-x-3">
                <div className="flex-shrink-0">
                  <img className="rounded-full w-9 h-9" src="https://scontent.fdvo1-1.fna.fbcdn.net/v/t1.0-1/p100x100/150192462_3644496232338846_4386767672745445544_n.jpg?_nc_cat=104&ccb=3&_nc_sid=7206a8&_nc_eui2=AeGXlBsmkZpd9QkCNhFLCifBWmNBZpaWS0NaY0FmlpZLQzuo09l6TV2yUY6WWSVm3XRnA5rilGhc15h-HtxBN-_I&_nc_ohc=aiO1YXiI30oAX_3oHop&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdvo1-1.fna&tp=6&oh=78e1a53774b6280e4854ac7883910009&oe=60610979"/>
                </div>
                <span className="text-2xl font-bold pt-0.5">Chats</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-3">
                <button className="rounded-full bg-gray-100 focus:outline-none p-1 hover:bg-gray-200 active:bg-gray-300 transition ease-in-out duration-75 transform active:scale-95">
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 36 36">
                    <path d="M12.5 18A2.25 2.25 0 118 18a2.25 2.25 0 014.5 0zm7.75 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm5.5 2.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"></path>
                  </svg>
                </button>
                <button className="rounded-full bg-gray-100 focus:outline-none p-1 hover:bg-gray-200 active:bg-gray-300 transition ease-in-out duration-75 transform active:scale-95">
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 36 36">
                    <path d="M17.305 16.57a1.998 1.998 0 00-.347.467l-1.546 2.87a.5.5 0 00.678.677l2.87-1.545c.171-.093.328-.21.466-.347l8.631-8.631a1.5 1.5 0 10-2.121-2.122l-8.631 8.632z"></path><path d="M18 10.5a1 1 0 001-1V9a1 1 0 00-1-1h-6a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4v-6a1 1 0 00-1-1h-.5a1 1 0 00-1 1v6a1.5 1.5 0 01-1.5 1.5H12a1.5 1.5 0 01-1.5-1.5V12a1.5 1.5 0 011.5-1.5h6z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="relative pt-2 md:pt-6 pb-5 flex items-center border-b">
            <div className="absolute ml-2">
              <svg className="h-5 w-5 fill-current text-gray-500" viewBox="0 0 24 24" fill="none">
                <path d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
              </svg>
            </div>
            <input type="text" placeholder="Search Messenger" className="w-full text-sm pl-8 tracking-wide rounded-full focus:ring-0 border-0 bg-gray-100 focus:outline-none" />
          </div>
        </div>
        <div className="overflow-y-auto">
          <PerfectScrollbar>
            <FriendList friends={data} />
          </PerfectScrollbar>
        </div>
      </div>
      {/* Chats `CENTER` */}
      <main className="border-r border-l">
        { children }
      </main>
      {/* Chat files `LEFT` */}
      <div className="w-60 md:w-side flex-none"></div>
    </div>
  )
}