import { Link } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import { HiSearch } from 'react-icons/hi'
import { createPortal } from 'react-dom'
import { useState } from 'react'
import AddNewImageForm from '../Features/Images/AddNewImageForm'
import useSearch from '../Features/Images/useSearch'

const DashHeader = () => {
    const [showForm, setShowForm] = useState(false)
    const { searchWord, setSearchWord } = useSearch()

    const handleSearchInputChange = (e) => {
      const inputText = e.target.value;
      setSearchWord(inputText)
    };

  return (
    <section className='p-4 md:px-8 lg:px-16 shadow'>
        <div className='flex flex-wrap gap-2 items-center justify-between'>
            <h4 className='font-semibold text-xl'>My Images</h4>
            <div className="border">
              <form className='ml-2 border flex items-center gap-1'>
                <HiSearch
                  className='text-gray-700'
                />
                <input 
                  type='search' 
                  placeholder='Search for an image' 
                  className='outline-none placeholder:text-sm'
                  value={searchWord}
                  onChange={handleSearchInputChange}
                />
              </form>
            </div>
        </div>
        {showForm && createPortal(
            <AddNewImageForm showAddForm={setShowForm} />, document.body
        )}
    </section>
  )
}

export default DashHeader