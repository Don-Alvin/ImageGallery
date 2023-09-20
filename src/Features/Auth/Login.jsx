import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import { toast } from "react-toastify"
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { doc, updateDoc } from "firebase/firestore"
import { useFormik } from "formik"
import MetaData from "../../Components/Meta/MetaData"
import { auth, db } from "../../apis/firebase"
import { loginSchema } from "./Schemas"


const Login = () => {
  const navigate = useNavigate()
  const provider = new GoogleAuthProvider()

  const onSubmit = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, values.email, values.password);
      const docRef = doc(db, "users", res.user.uid)
      await updateDoc(docRef, {
        online: true,
      })
      toast.success("Login successful");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Wrong password or email");
    }
  }

  const registerWithGoogle = async() => {
    try {
      await signInWithPopup(auth, provider)
      toast.success('Login successfull')
      navigate('/dashboard')
    } catch (error) {
      toast.error(error.message)
    } 
  }

  const {values, errors, handleBlur, handleChange, handleSubmit, touched, isSubmitting} = useFormik({
    initialValues: {
      displayName: "",
      email: "",
      password: ""
    },
    validationSchema: loginSchema,
    onSubmit
  }
  )

  return (
    <section className='w-full h-screen  flex items-center justify-center bg-[url("/images/image1.jpg")] bg-cover bg-center bg-no-repeat'>
      <MetaData title={'Sign into your account'} />
      <div className="flex justify-center flex-col items-center border p-6 h-[auto] my-20 gap-2  border-black rounded-lg shadow-black shadow-md bg-white opacity-80 w-[90%] md:w-auto">
        <div className="title flex flex-col items-center ">
          <h4 className="text-3xl text-black text-center">Hello again!</h4>
          <span className='py-4 text-xl w-2/3 text-center text-gray-700'>Log in into your account</span>
        </div>
        <button 
          className="shadow flex items-center rounded"
          onClick={registerWithGoogle}
        >
          <FcGoogle className="w-6"/>
          <p className="text-white bg-black p-1 font-semibold rounded-r">Sign in with google</p>
        </button>
        <span className="text-gray-700 font-semibold">OR</span>
        <form className='w-[90%]' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-2 w-[100%]'>
                <label className="sr-only text-gray-700 text-xl">Email</label>
                <input
                  className={`p-2 border border-gray-800 rounded-lg ${errors.email && touched.email ? `outline outline-1 outline-red-700` : `outline-black`}`}
                  type="email"
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder='Enter your email'
                />
                {errors.email && touched.email && <p className='text-red-700'>{errors.email}</p>}
              </div>
            <div className='flex flex-col gap-2 relative w-[100%]'>
              <label className="sr-only text-gray-700 text-xl">Password</label>
              <input
                className={`p-2 border border-gray-800 rounded-lg ${errors.password && touched.password ? `outline outline-1 outline-red-700` : `outline-black`}`}
                type='password'
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder='Enter your password'
              />
              {errors.password && touched.password && <p className='text-red-700'>{errors.password}</p>}
            </div>
            <button type='submit' disabled={isSubmitting} className='bg-black rounded-lg p-3 text-white font-semibold w-[100%]'>Log in</button>
          </div>
        </form>
        <div className='py-4'>
          <span className='text-gray-700'>Not registered? <Link to='/register' className='text-gray-900 underline'>Register</Link></span>
        </div>
      </div>
    </section>
  )
}

export default Login