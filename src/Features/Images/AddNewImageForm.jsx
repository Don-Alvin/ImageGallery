import React from 'react'
import Drop from '../../Components/Drop'
import { useFormik } from 'formik'
import { addImageSchema } from './Schemas'

const AddNewImageForm = ({showAddForm}) => {

  const {values, errors, handleBlur, handleChange, handleSubmit, touched, isSubmitting} = useFormik({
    initialValues : {
      tag: "",
      image:[]
    },
    validationSchema: addImageSchema
  })
  return (
    <section className=' w-full h-full'>
        <div className='absolute inset-0 bg-black opacity-70 z-20' onClick={() => showAddForm(false)}></div>
        <h4>Add new image</h4>
        <form className='flex flex-col items-center gap-3 bg-white relative w-[90%] lg:w-[60%] rounded z-30 mx-auto p-6'>
            <Drop />
            <label className='flex flex-col justify-center w-[90%]'>
                Tag
                <input type='text'
                  className='border rounded outline-black p-1' 
                />
            </label>
            <button className='bg-black text-white px-2 py-1 rounded' type='submit'>Add new image</button>
        </form>
    </section>
  )
}

export default AddNewImageForm