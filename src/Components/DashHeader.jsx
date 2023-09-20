import { Link } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'

const DashHeader = () => {
  return (
    <section className='p-4 md:px-8 lg:px-16 shadow'>
        <div className='flex items-center justify-between'>
            <h4 className='font-semibold text-xl'>My Images</h4>
            <Link>
                <button className='flex items-center gap-2 text-white bg-black p-2 rounded'>
                   <AiOutlinePlus /> 
                   Add new image
                </button>
            </Link>
        </div>
    </section>
  )
}

export default DashHeader