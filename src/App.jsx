import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import LandingPage from './Pages/LandingPage'
import Login from './Features/Auth/Login'
import Register from './Features/Auth/Register'
import ErrorPage from './Pages/ErrorPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AuthContextProvider } from './Features/Auth/AuthContext'
import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer } from 'react-toastify'
import Layout from './Components/Layout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout />}>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='dashboard' element={<Dashboard />} />
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
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
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