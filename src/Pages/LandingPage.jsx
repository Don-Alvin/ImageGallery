import { Link } from 'react-router-dom'
import useAuth from '../Features/Auth/useAuth'

const LandingPage = () => {
  const { user } = useAuth()
  return (
    <section>
      <article className='relative h-screen'>
        <div className='absolute bg-black opacity-50 inset-0'></div>
        <img
          className='h-full object-fit w-full' 
          src='/images/image1.jpg' 
          alt='image-1'
        />
        <div className='absolute inset-12 flex flex-col items-center justify-center gap-2'>
          <span className='text-white font-bold text-2xl text-center'>Store your memories with ImageGallery</span>
          {user ? (
            <Link to='/dashboard' className='p-2 bg-black text-white rounded text-2xl'>My Images</Link>
          ) : (
            <Link to='/register' className='p-2 bg-black text-white rounded text-2xl'>Start now</Link>
          )}
          
        </div>
      </article>
    </section>
  )
}

export default LandingPage