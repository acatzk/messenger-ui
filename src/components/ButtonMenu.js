export default function ButtonMenu () {
  return (
    <button className="absolute right-8 rounded-full border shadow-sm bg-transparent bg-white focus:outline-none p-1 hover:bg-gray-100 active:bg-gray-200 transition ease-in-out duration-75 transform active:scale-95">
      <svg className="w-7 h-7 fill-current" viewBox="0 0 36 36">
        <path d="M12.5 18A2.25 2.25 0 118 18a2.25 2.25 0 014.5 0zm7.75 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm5.5 2.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"></path>
      </svg>
    </button>
  )
}