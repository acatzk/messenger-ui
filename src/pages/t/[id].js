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
          <div className="overflow-y-auto px-4 flex-1 ">
            Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor. Et voluptate magna est dolore commodo voluptate enim. Tempor cupidatat nisi minim eu.Consequat magna eu deserunt voluptate laborum aliqua qui cillum voluptate commodo sint duis. Officia adipisicing non eiusmod in eiusmod nostrud ipsum ad cillum eiusmod do do tempor.
          </div>
          <div className="h-14 bg-white flex-none">
            
          </div>
        </div>
      </DefaultLayout>
    </>
  )
}