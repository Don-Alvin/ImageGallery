import { Link } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import { createPortal } from 'react-dom'
import { useState } from 'react'
import AddNewImageForm from '../Features/Images/AddNewImageForm'

const DashHeader = () => {
    const [showForm, setShowForm] = useState(false)
  return (
    <section className='p-4 md:px-8 lg:px-16 shadow'>
        <div className='flex items-center justify-between'>
            <h4 className='font-semibold text-xl'>My Images</h4>
            <Link onClick={() => setShowForm(true)}>
                <button className='flex items-center gap-2 text-white bg-black p-2 rounded'>
                   <AiOutlinePlus /> 
                   Add new image
                </button>
            </Link>
        </div>
        {showForm && createPortal(
            <AddNewImageForm showAddForm={setShowForm} />, document.body
        )}
    </section>
  )
}

export default DashHeader