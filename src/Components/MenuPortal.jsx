import { Link } from 'react-router-dom'
import useAuth from '../Features/Auth/useAuth'

const MenuPortal = ({onClick, handleLogout}) => {

  const handleClick = () => {
    onClick(false)
  }
  const {user} = useAuth()
  return (
    <aside className='h-full w-full' onClick={() => onClick(false)}>
        <div className='bg-black opacity-70 absolute inset-0'></div>
        <div className='flex items-center justify-center absolute top-16 right-4 w-32 h-16 rounded-lg bg-white'>
          {user ? (
            <Link onClick={handleLogout}>
              Log out
           </Link>
          ): (
            <Link to='/login' onClick={handleClick}>
              Log in
           </Link>
          )}
            
        </div>
    </aside>
  )
}

export default MenuPortal