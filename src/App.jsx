import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import LandingPage from './Pages/LandingPage'
import Login from './Features/Auth/Login'
import Register from './Features/Auth/Register'
import ErrorPage from './Pages/ErrorPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='*' element={<ErrorPage />} />
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
        <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App