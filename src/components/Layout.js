import useSWR from 'swr'
import Spinner from './Spinner'
import { useState, useCallback } from 'react'
import FriendList from '~/components/FriendList'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Gallery, Item } from 'react-photoswipe-gallery'

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

  let chatFileList = [
    { 
      title: 'Customize Chat', 
      isOpen: true,
      list: [
        {
          text: 'Change Theme',
          icon: <ThemeIcon />
        },
        {
          text: 'Change Emoji',
          icon: <LikeIcon />
        },
        {
          text: 'Edit Nicknames',
          icon: <AphabetIcon />
        },
        {
          text: 'Search in Conversation',
          icon: <SearchIcon />
        },
      ]
    },
    { 
      title: 'Privacy & Support', 
      isOpen: false,
      list: [
        {
          text: 'Mute Conversation',
          icon: <NotificationIcon />
        },
        {
          text: 'Ignore Messages',
          icon: <IgnoreIcon />
        },
        {
          text: 'Block',
          icon: <BlockIcon />
        },
        {
          text: 'Something\'s Wrong',
          description: 'Give feedback and report the conversation',
          icon: <WarningIcon />
        },
      ]
    },
    {
      title: 'Shared Media',
      isOpen: true,
      images: [
        'https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg',
        'https://imaging.nikon.com/lineup/lens/f-mount/zoom/normalzoom/af-s_dx_18-140mmf_35-56g_ed_vr/img/sample/sample1_l.jpg',
        'https://northbridgecos.com/wp-content/uploads/2016/01/Nikon-1-V3-sample-photo.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwBvl0TISm6SGlAL6MHm0rxQ0at-j0LQhc9Q&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHcntaJPW9u5zhUSyuyPagrt3oGsb8rZjRw&usqp=CAU',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Big_%26_Small_Pumkins.JPG/1024px-Big_%26_Small_Pumkins.JPG',
      ]
    }
  ]

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
      <div className="w-60 md:w-left-side flex-none overflow-y-auto">
        <PerfectScrollbar>
          <div className="flex flex-col items-center justify-center space-y-2.5 pt-4 pb-2">
            <div className="relative flex-shrink-0">
              <img className="rounded-full w-20 h-20" src="https://scontent.fceb1-1.fna.fbcdn.net/v/t1.0-1/p100x100/117578597_2717832615127030_4153142513833495842_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeFRzgMRjM375f0y34wLJQesRePFjIX92r9F48WMhf3av0ThPawAppBFtBIXMpqG2shVaOwI2cvTW3c_RMss772R&_nc_ohc=nyolbEGfOEoAX_2phqR&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fceb1-1.fna&tp=6&oh=ee46ecc71ed00520c8d1ea03954ce152&oe=6073229A" />
              <span className="absolute w-4 h-4 rounded-full border-2 border-white bottom-1 right-0 bg-gren bg-green-active"></span>
            </div>
            <div className="flex flex-col space-y-1.5 text-center">
              <a className="font-semibold text-base hover:underline tracking-wide">Joseftt Beronio</a>
              <p className="text-gray-500 text-sm">Active 3m ago</p>
            </div>
          </div>
          {chatFileList.map((c, i) => <Dropdown key={i} {...c} />)}
        </PerfectScrollbar>
      </div>
    </div>
  )
}

function Dropdown ({ title, isOpen, list, images }) {

  const [isDropdown, setDropdown] = useState(isOpen)

  const toggleDropdown = useCallback(() => {
    setDropdown(v => !v)
  }, [])

  return (
    <div className="relative text-sm">
      <div className="px-2">
        <button 
          onClick={toggleDropdown}
          className="flex items-center justify-between w-full px-2 py-2.5 font-semibold rounded-lg focus:outline-none hover:bg-gray-100 opacity-90 transition ease-in-out duration-150"
        >
          <span>{title}</span>
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
                <button type="button" className="flex space-x-3 items-center w-full px-2 py-2.5 rounded-lg focus:outline-none hover:bg-gray-100 opacity-90 transition ease-in-out duration-150">
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

function ThemeIcon () {
  return (
    <svg height="24" width="24" fill="none" viewBox="0 0 24 24" data-testid="mw_edit_theme_svg:Default Blue">
      <defs>
        <mask id="jsc_c_pl">
          <rect height="100%" width="100%" fill="white"></rect>
          <circle cx="12" cy="12" fill="black" r="3"></circle>
        </mask>
      </defs>
      <circle cx="12" cy="12" fill="#0099FF" r="9" mask="url(#jsc_c_pl)"></circle>
    </svg>
  )
}

function LikeIcon () {
  return (
    <svg height="20" width="20" viewBox="0 0 22 23">
      <path
        d="M10.987 0c1.104 0 3.67.726 3.67 5.149 0 1.232-.123 2.001-.209 2.534a16.11 16.11 0 00-.048.314l-.001.005a.36.36 0 00.362.406c4.399 0 6.748 1.164 6.748 2.353 0 .533-.2 1.02-.527 1.395a.11.11 0 00.023.163 2.13 2.13 0 01.992 1.79c0 .86-.477 1.598-1.215 1.943a.11.11 0 00-.046.157c.207.328.329.713.329 1.128 0 .946-.547 1.741-1.406 2.029a.109.109 0 00-.068.137c.061.184.098.38.098.584 0 1.056-1.776 1.913-5.95 1.913-3.05 0-5.154-.545-5.963-.936-.595-.288-1.276-.81-1.276-2.34v-6.086c0-1.72.958-2.87 1.911-4.014C9.357 7.49 10.3 6.36 10.3 4.681c0-1.34-.091-2.19-.159-2.817-.039-.368-.07-.66-.07-.928 0-.527.385-.934.917-.936zM3.5 11h-2C.5 11 0 13.686 0 17s.5 6 1.5 6h2a1 1 0 001-1V12a1 1 0 00-1-1z"
        fill="#0099FF"></path>
    </svg>
  )
}

function AphabetIcon () {
  return (
    <svg viewBox="0 0 36 36" height="24" width="24">
      <path clipRule="evenodd"
        d="M12.243 12.238a.368.368 0 00-.35.255l-2.18 6.675a.25.25 0 00.238.328h4.584a.25.25 0 00.238-.328l-2.18-6.675a.369.369 0 00-.35-.255zm5.802 13.755a1.44 1.44 0 01-1.365-.982l-.928-2.844a.25.25 0 00-.238-.173H8.973a.25.25 0 00-.238.173l-.929 2.844a1.44 1.44 0 11-2.722-.94L9.83 10.7a2.563 2.563 0 014.829 0l4.744 13.37a1.44 1.44 0 01-1.357 1.922zm11.207-5.475a.25.25 0 00-.266-.25l-2.805.176c-1.659.108-2.434.709-2.434 1.779 0 1.105.942 1.766 2.255 1.766 1.79 0 3.25-1.166 3.25-2.692v-.78zm1.409 5.46a1.33 1.33 0 01-1.339-1.336c0-.098-.139-.138-.198-.06-.803 1.058-2.387 1.668-3.925 1.668-2.475 0-4.198-1.56-4.198-3.9 0-2.316 1.7-3.9 4.82-4.088l3.195-.185a.25.25 0 00.236-.25v-.762c0-1.252-1.032-1.829-2.603-1.829-2.066 0-2.316 1.24-3.333 1.24-1.13 0-1.745-1.354-.968-2.172.933-.982 2.349-1.556 4.254-1.556 3.295 0 5.398 1.603 5.398 4.317v7.577a1.33 1.33 0 01-1.34 1.335z"
        fillRule="evenodd"></path>
    </svg>
  )
}

function SearchIcon () {
  return (
    <svg role="presentation" height="24" width="24" fill="none" viewBox="0 0 36 36">
      <path clipRule="evenodd"
        d="M23.5217 21.662C23.1334 21.3181 23.0787 20.7371 23.3407 20.2894C25.2462 17.0336 24.8027 12.7819 22.0104 9.98953C18.691 6.67007 13.309 6.67007 9.98959 9.98953C6.67014 13.309 6.67014 18.6909 9.98959 22.0103C12.7819 24.8027 17.0337 25.2461 20.2895 23.3406C20.7371 23.0786 21.3181 23.1334 21.662 23.5216L25.2695 27.5946C25.8987 28.3049 26.9963 28.3382 27.6673 27.6672C28.3382 26.9962 28.305 25.8986 27.5947 25.2694L23.5217 21.662ZM20.2426 11.7573C22.5858 14.1004 22.5858 17.8994 20.2426 20.2426C17.8995 22.5857 14.1005 22.5857 11.7574 20.2426C9.41421 17.8994 9.41421 14.1004 11.7574 11.7573C14.1005 9.41415 17.8995 9.41415 20.2426 11.7573Z"
        fill="black" fillRule="evenodd"></path>
    </svg>
  )
}

function NotificationIcon () {
  return (
    <svg viewBox="0 0 36 36" height="24" width="24">
      <path
        d="M18 7a6.569 6.569 0 016.467 5.414l1.367 7.658a3 3 0 00.832 1.594l.92.92a1.414 1.414 0 01-1 2.414H9.414a1.414 1.414 0 01-1-2.414l.92-.92a3 3 0 00.832-1.594l1.367-7.658A6.569 6.569 0 0118 7zm-2.5 20c-.276 0-.504.226-.459.498a3 3 0 005.918 0c.045-.273-.183-.498-.459-.498h-5z">
      </path>
    </svg>
  )
}

function IgnoreIcon () {
  return (
    <svg viewBox="0 0 36 36" height="24" width="24">
      <path
        d="M7.705 28.41c-.19-.467.087-.97.444-1.327L27.867 7.366a1.25 1.25 0 111.768 1.768l-1.818 1.817c-.34.34-.384.87-.148 1.29.856 1.517 1.331 3.3 1.331 5.259v.003c-.001 6.103-4.607 10.57-11 10.57-1.066 0-2.08-.095-3.033-.327a4.26 4.26 0 00-2.39.09L8.91 28.962c-.36.099-.957.054-1.205-.552zM22.184 7.697C20.913 7.244 19.506 7 18 7 11.607 7 7 11.396 7 17.498v.002c0 1.689.27 3.245.884 4.615a.927.927 0 001.474.22l13.118-13.12c.481-.48.35-1.29-.292-1.52z">
      </path>
    </svg>
  )
}

function BlockIcon () {
  return (
    <svg viewBox="0 0 36 36" height="24" width="24">
      <path clipRule="evenodd"
        d="M18 29c6.075 0 11-4.925 11-11S24.075 7 18 7 7 11.925 7 18s4.925 11 11 11zm-7-12.5a1 1 0 00-1 1v1a1 1 0 001 1h14a1 1 0 001-1v-1a1 1 0 00-1-1H11z"
        fillRule="evenodd"></path>
    </svg>
  )
}

function WarningIcon () {
  return (
    <svg viewBox="0 0 36 36" height="24" width="24">
      <path clipRule="evenodd"
        d="M19.747 8.027c-.764-1.367-2.73-1.367-3.494 0L6.757 25.025C6.012 26.358 6.977 28 8.504 28h18.992c1.528 0 2.492-1.642 1.747-2.975L19.747 8.027zm-3.159 5.97a1.414 1.414 0 112.824 0l-.353 6.005a1.06 1.06 0 01-2.118 0l-.353-6.005zm2.662 9.753a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"
        fillRule="evenodd"></path>
    </svg>
  )
}