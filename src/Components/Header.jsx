import { useState } from 'react'
import { HiMenuAlt4, HiSearch } from 'react-icons/hi'
import MenuPortal from './MenuPortal'
import { createPortal } from 'react-dom'
import useAuth from '../Features/Auth/useAuth'
import { signOut } from 'firebase/auth'
import { doc, updateDoc } from 'firebase/firestore'
import { auth, db } from '../apis/firebase'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const {user, setUser} = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    setShowMenu(false)
    const docRef = doc(db, "users", user.uid)
    try {
       await updateDoc(docRef, {
        online: false,
      })
        await signOut(auth)
        setUser(null)
        navigate('/') 
    } catch (error) {
       throw new Error("Logout failed")
       toast.error("error.message") 
    }
    
  };

  return (
    <header className='p-2 md:px-10 lg:px-24 md:py-4 shadow fixed z-10 top-0 w-full bg-white'>
        <nav className='flex justify-between items-center'>
            <span className='font-bold text-xl'>
                ImGa
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
            <div className='lg:hidden'>
                <HiMenuAlt4 
                  className='rounded p-1 text-2xl bg-black text-white'
                  onClick={() => setShowMenu(!showMenu)} 
                />
            </div>
            {user ? (
              <div className='flex items-center gap-2'>
                <span className='font-semibold text-xl'>Welcome {user.displayName}</span>
                <button className='text-white bg-black px-2 py-1 rounded' onClick={handleLogout}>Log out</button>
              </div>
            ):(
              <Link className='hidden lg:block text-white bg-black px-2 py-1 rounded'>Log in</Link>
            )}
            {showMenu && createPortal(
              <MenuPortal onClick={setShowMenu} handleLogout={handleLogout}  />, document.body
            )}
        </nav>
    </header>
  )
}

export default Header