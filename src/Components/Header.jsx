import { useState } from 'react'
import { HiMenuAlt4, HiSearch } from 'react-icons/hi'
import MenuPortal from './MenuPortal'
import { createPortal } from 'react-dom'
import AuthModal from './AuthModal'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className='p-2 shadow fixed z-10 top-0 w-full bg-white'>
        <nav className='flex justify-between items-center'>
            <span className='font-bold text-xl'>
                ImageGallery
            </span>
            <div className="border">
              <form className='ml-2 border flex items-center gap-1'>
                <HiSearch
                  className='text-gray-700'
                />
                <input 
                  type='search' 
                  placeholder='Search for an image' 
                  className='outline-none placeholder:text-sm'
                />
              </form>
            </div>
            <div>
                <HiMenuAlt4 
                  className='rounded p-1 text-2xl bg-black text-white'
                  onClick={() => setShowMenu(!showMenu)} 
                />
            </div>
            {showMenu && createPortal(
              <MenuPortal onClick={setShowMenu} openAuth={setShowAuth}  />, document.body
            )}
        </nav>
    </header>
  )
}

export default Header