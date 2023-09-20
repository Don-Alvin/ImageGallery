import { useNavigate } from 'react-router-dom'
import MetaData from '../Components/Meta/MetaData'

const ErrorPage = () => {

  const navigate = useNavigate()


  return (
    <section className='w-full h-screen  flex items-center justify-center bg-white'>
      <MetaData title={'Page not found'} />
      <div>
        <p className='text-gray-700 font-bold'>
            Ooops we could not find the page you are looking for
        </p>
        <div className='text-white font-bold' >
            <button 
              className='bg-black p-2 rounded'
              onClick={() => navigate(-1)}
            >
                Go back
            </button>
        </div>
      </div>
      
    </section>
  )
}

export default ErrorPage