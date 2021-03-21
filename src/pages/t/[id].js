import Head from 'next/head'
import DefaultLayout from '~/layouts/default'

export default function Chat () {
  let avatar = 'https://scontent.fdvo1-1.fna.fbcdn.net/v/t1.0-1/p100x100/136052751_3626317947451594_7571457885337414921_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeGuhFFXJNPJYQPRNdenYcwk0qXfB90axAXSpd8H3RrEBUs6m2qTHd_xBYGc8r7vjrRXTmMkIibwU4fS-3YlGcX_&_nc_ohc=7PRaWyth3boAX820l85&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdvo1-1.fna&tp=6&oh=f6bf63ad0ef3673838f64cf10c8996ed&oe=607B5451'
  return (
    <>
      <Head>
        <title>Messenger</title>
      </Head>
      <DefaultLayout>
        <div className="flex flex-col justify-between h-full">
          <div className="flex items-center justify-between h-16 flex-none shadow px-4">
            <div className="flex items-center space-x-3">
              <div className="relative flex-shrink-0">
                <img src={avatar} className="w-10 h-10 rounded-full object-cover" />
                <div className="w-3 h-3 rounded-full absolute border-2 right-0 bottom-0 border-white bg-green-active"></div>
              </div>
              <div className="flex flex-col">
                <h1 className="leading-slug font-extrabold text-base clamp-1">Gilfrost Calunia</h1>
                <p className="leading-tight font-light text-gray-600 text-xs clamp-1">Active Now</p>
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="flex items-center space-x-4 mr-2">
                <button className="text-blue-primary rounded-full focus:outline-none">
                  <svg height="30px" width="30px" fill="#0099FF" viewBox="0 0 36 36">
                    <path d="M25.753 28.2c1.07-.357 1.816-1.275 2.423-2.225a2.05 2.05 0 00.037-2.151 4.998 4.998 0 00-.723-.963 11.594 11.594 0 00-2.888-2.112c-.58-.299-1.272-.212-1.808.159l-2.098 1.452a.472.472 0 01-.437.055 11.557 11.557 0 01-4.045-2.63 11.554 11.554 0 01-2.63-4.044.472.472 0 01.056-.437l1.453-2.098c.37-.536.457-1.228.158-1.807A11.587 11.587 0 0013.14 8.51a4.995 4.995 0 00-.963-.723 2.05 2.05 0 00-2.15.037c-.951.607-1.87 1.353-2.225 2.424-1.174 3.527 1.187 8.461 5.338 12.613 4.152 4.151 9.086 6.512 12.614 5.338z"></path>
                  </svg>
                </button>
                <button className="text-blue-primary rounded-full focus:outline-none">
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm12.553 1.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                  </svg>
                </button>
                <button className="bg-white text-blue-primary ring-4 ring-blue-secondary rounded-full focus:outline-none">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-y-auto px-4 flex-1">
            Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor.
          </div>
          <div className="flex items-center h-14 bg-white flex-none px-2 space-x-1">
            <div className="flex items-center space-x-1">
              <button className="focus:outline-none rounded-full ring-4 ring-inset ring-transparent hover:ring-gray-100">
                <AddIcon />
              </button>
              <button className="focus:outline-none rounded-full ring-4 ring-inset ring-transparent hover:ring-gray-100">
                <ImageIcon />
              </button>
              <button className="focus:outline-none rounded-full ring-4 ring-inset ring-transparent hover:ring-gray-100">
                <StickerIcon />
              </button>
              <button className="focus:outline-none rounded-full ring-4 ring-inset ring-transparent hover:ring-gray-100">
                <GifIcon />
              </button>
            </div>
            <div className="relative flex-1 flex items-center justify-items-end">
              <input type="text" placeholder="Aa" className="py-1.5 px-4 w-full rounded-full bg-gray-100 focus:ring-0 border-none" />
              <div className="absolute right-0 flex items-center">
                <button className="focus:outline-none rounded-full p-1 hover:bg-gray-200">
                  <EmojiIcon />
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <button className="focus:outline-none rounded-full p-2 hover:bg-gray-100">
                <LikeIcon />
              </button>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  )
}

function AddIcon () {
  return (
    <svg height="28px" width="28px" viewBox="0 0 36 36">
      <path clipRule="evenodd" d="M18 29c6.075 0 11-4.925 11-11S24.075 7 18 7 7 11.925 7 18s4.925 11 11 11zm-1-16a1 1 0 112 0v3.75c0 .138.112.25.25.25H23a1 1 0 110 2h-3.75a.25.25 0 00-.25.25V23a1 1 0 11-2 0v-3.75a.25.25 0 00-.25-.25H13a1 1 0 110-2h3.75a.25.25 0 00.25-.25V13z" fillRule="evenodd" fill="#0099FF"></path>
    </svg>
  )
}

function ImageIcon () {
  return (
    <svg height="28px" width="28px" viewBox="0 0 36 36">
      <path d="M13.5 16.5a2 2 0 100-4 2 2 0 000 4z" fill="#0099FF"></path>
      <path clipRule="evenodd" d="M7 12v12a4 4 0 004 4h14a4 4 0 004-4V12a4 4 0 00-4-4H11a4 4 0 00-4 4zm18-1.5H11A1.5 1.5 0 009.5 12v9.546a.25.25 0 00.375.217L15 18.803a6 6 0 016 0l5.125 2.96a.25.25 0 00.375-.217V12a1.5 1.5 0 00-1.5-1.5z" fillRule="evenodd" fill="#0099FF"></path>
    </svg>
  )
}

function StickerIcon () {
  return (
    <svg height="28px" width="28px" viewBox="0 0 36 36">
      <path d="M8 12a4 4 0 014-4h12a4 4 0 014 4v5a1 1 0 01-1 1h-3a6 6 0 00-6 6v3a1 1 0 01-1 1h-5a4 4 0 01-4-4V12z" fill="#0099FF"></path>
      <path d="M20 27c0 .89 1.077 1.33 1.707.7l5.993-5.993c.63-.63.19-1.707-.7-1.707h-3a4 4 0 00-4 4v3z" fill="#0099FF"></path>
    </svg>
  )
}

function GifIcon () {
  return (
    <svg height="28px" width="28px" viewBox="0 0 36 36">
      <path clipRule="evenodd" d="M6 11a4 4 0 014-4h8c1.067 0 2.035.417 2.753 1.098.517.491 1.151.902 1.866.902H26a4 4 0 014 4v12a4 4 0 01-4 4h-8a3.986 3.986 0 01-2.752-1.098c-.518-.491-1.152-.902-1.866-.902H10a4 4 0 01-4-4V11zm7.865 4.908a1.948 1.948 0 00-1.321-.456c-.461.02-.918.214-1.295.576-.378.363-.65.873-.754 1.457a2.927 2.927 0 00.209 1.708c.236.52.611.915 1.046 1.14a1.87 1.87 0 001.36.152c.454-.122.88-.419 1.195-.868.098-.14.183-.291.253-.451.068-.154-.052-.316-.22-.316H12.85a.85.85 0 010-1.7h2.8c.47 0 .85.38.85.85a4.53 4.53 0 01-.803 2.593c-.527.75-1.277 1.3-2.144 1.534a3.57 3.57 0 01-2.586-.285c-.8-.414-1.43-1.107-1.811-1.947a4.628 4.628 0 01-.335-2.706 4.357 4.357 0 011.25-2.388 3.697 3.697 0 012.398-1.048 3.647 3.647 0 012.472.838.85.85 0 01-1.076 1.317zM22.7 19.6a.25.25 0 01.25-.25h2.75a.85.85 0 000-1.7h-2.75a.25.25 0 01-.25-.25v-1.45a.25.25 0 01.25-.25h3.2a.85.85 0 100-1.7h-4.3a.85.85 0 00-.85.85v6.3a.85.85 0 001.7 0V19.6zm-3.35-4.75a.85.85 0 00-1.7 0v6.3a.85.85 0 001.7 0v-6.3z" fillRule="evenodd" fill="#0099FF"></path>
    </svg>
  )
}

function LikeIcon () {
  return (
    <svg height="20" width="20" viewBox="0 0 23 23">
      <path d="M10.987 0c1.104 0 3.67.726 3.67 5.149 0 1.232-.123 2.001-.209 2.534a16.11 16.11 0 00-.048.314l-.001.005a.36.36 0 00.362.406c4.399 0 6.748 1.164 6.748 2.353 0 .533-.2 1.02-.527 1.395a.11.11 0 00.023.163 2.13 2.13 0 01.992 1.79c0 .86-.477 1.598-1.215 1.943a.11.11 0 00-.046.157c.207.328.329.713.329 1.128 0 .946-.547 1.741-1.406 2.029a.109.109 0 00-.068.137c.061.184.098.38.098.584 0 1.056-1.776 1.913-5.95 1.913-3.05 0-5.154-.545-5.963-.936-.595-.288-1.276-.81-1.276-2.34v-6.086c0-1.72.958-2.87 1.911-4.014C9.357 7.49 10.3 6.36 10.3 4.681c0-1.34-.091-2.19-.159-2.817-.039-.368-.07-.66-.07-.928 0-.527.385-.934.917-.936zM3.5 11h-2C.5 11 0 13.686 0 17s.5 6 1.5 6h2a1 1 0 001-1V12a1 1 0 00-1-1z" fill="#0099FF"></path>
    </svg>
  )
}

function EmojiIcon () {
  return (
    <svg height="28px" width="28px" viewBox="0 0 36 36">
      <path clip-rule="evenodd" d="M18 29c6.075 0 11-4.925 11-11S24.075 7 18 7 7 11.925 7 18s4.925 11 11 11zm-5.25-13c0-1.25.563-2 1.5-2 .938 0 1.5.75 1.5 2s-.563 2-1.5 2c-.938 0-1.5-.75-1.5-2zm7.5 0c0-1.25.563-2 1.5-2 .938 0 1.5.75 1.5 2s-.563 2-1.5 2c-.938 0-1.5-.75-1.5-2zm-7.52 5.464a1 1 0 011.41-.12 5.963 5.963 0 003.856 1.406c1.47 0 2.813-.528 3.856-1.406a1 1 0 111.288 1.53 7.962 7.962 0 01-5.144 1.876 7.962 7.962 0 01-5.144-1.877 1 1 0 01-.121-1.409z" fillRule="evenodd" fill="#0099FF"></path>
    </svg>
  )
}