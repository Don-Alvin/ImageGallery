import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Layout from './Components/Layout'
import Dashboard from './Pages/Dashboard'
import LandingPage from './Pages/LandingPage'
import Login from './Features/Auth/Login'
import Register from './Features/Auth/Register'
import ErrorPage from './Pages/ErrorPage'
import { AuthContextProvider } from './Features/Auth/AuthContext'
import AddNewImageForm from './Features/Images/AddNewImageForm';
import { SearchContextProvider } from './Features/Images/SearchContext';
import RequireAuth from './Features/Auth/RequireAuth';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route element={<RequireAuth />}>
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Route>
    </Route>
  )
)


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0
    }
  }
})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <AuthContextProvider>
        <SearchContextProvider>
          <HelmetProvider>
            <RouterProvider router={router} />
          </HelmetProvider>
        </SearchContextProvider>
      </AuthContextProvider>
      <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />   
    </QueryClientProvider>
  )
}

export default App