import { Link, useNavigate } from "react-router-dom"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { FcGoogle } from 'react-icons/fc'
import { toast } from "react-toastify"
import { doc, setDoc } from "firebase/firestore"; 
import { auth, db } from "../../apis/firebase"
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth"
import { useFormik } from "formik";
import MetaData from "../../Components/Meta/MetaData"
import { registerSchema } from "./Schemas";


const Register = () => {
  const navigate = useNavigate()
  const provider = new GoogleAuthProvider()

  const onSubmit = async() => {
    try {
      const res = await createUserWithEmailAndPassword(auth, values.email, values.password);
      await updateProfile(res.user, {
        displayName: values.displayName
      })
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName: values.displayName,
        email: values.displayName,
        online: true,
        photoUrl: ""
      });
      toast.success('Registration successfull')
      navigate('/dashboard')
    } catch (error) {
      toast.error(error.message);
    }
  }

  const registerWithGoogle = async() => {
    try {
      const res = await signInWithPopup(auth, provider)
      const user = res.user
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        online: true,
        photoUrl: user.photoURL
      });
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
    validationSchema: registerSchema,
    onSubmit
  }
  )

  return (
    <section className='w-full h-screen flex items-center justify-center bg-[url("/images/image1.jpg")] bg-cover bg-center bg-no-repeat'>
      <MetaData title={'Register an account'} />
      <div className="flex justify-center flex-col items-center border p-6 h-[auto] my-20 gap-2  border-black rounded-lg shadow-black shadow-md bg-white opacity-80 w-[90%] md:w-auto">
        <div className="title flex flex-col items-center">
          <h4 className="text-3xl text-black text-center">Explore more by joining us</h4>
        </div>
        <button 
          className="shadow flex items-center rounded"
          onClick={registerWithGoogle}
        >
          <FcGoogle className="w-6"/>
          <p className="text-white bg-black p-1 font-semibold rounded-r">Register with google</p>
        </button>
        <span className="text-gray-700 font-semibold">OR</span>
        <form className='w-[90%]' onSubmit={handleSubmit}>
              <div className='flex flex-col gap-4 items-center'>
                <div className='flex flex-col gap-2 w-[100%]'>
                  <label className="text-gray-700 text-md">Name</label>
                  <input
                    className={`p-2 border border-gray-800 rounded-lg ${errors.displayName && touched.displayName ? `outline outline-1 outline-red-700` : `outline-black`}`}
                    type="text"
                    value={values.displayName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="displayName"
                    placeholder='Enter your username'
                    autoComplete="off"
                  />
                  {errors.displayName && touched.displayName && <p className='text-red-700'>{errors.displayName}</p>}
                </div>
                <div className='flex flex-col gap-2 w-[100%]'>
                  <label className="text-gray-700 text-md">Email</label>
                  <input
                    className={`p-2 border border-gray-800 rounded-lg ${errors.email && touched.email ? `outline outline-1 outline-red-700` : `outline-black`}`}
                    type="email"
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder='Enter your email'
                    autoComplete="off"
                  />
                  {errors.email && touched.email && <p className='text-red-700'>{errors.email}</p>}
                </div>
                  <div className='flex flex-col gap-2 relative w-[100%]'>
                    <label className="text-gray-700 text-md">Password</label>
                    <input
                      className={`p-2 border border-gray-800 rounded-lg ${errors.password && touched.password ? `outline outline-1 outline-red-700` : `outline-black`}`}
                      type='password'
                      id="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder='Enter your password'
                      autoComplete="off"
                    />
                    {errors.password && touched.password && <p className='text-red-700'>{errors.password}</p>}
                  </div>
              <button type="submit" disabled={isSubmitting} className='bg-black rounded-lg p-3 text-white font-semibold w-[100%]'>Register</button>
          </div>
        </form>
        <div>
          <span className='text-gray-700'>Already registered? <Link to='/login' className='text-gray-900 underline'>Log in</Link></span>
        </div>
        
      </div>
    </section>
  )
}

export default Register