import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import LandingPage from './Pages/LandingPage'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<LandingPage />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Route>
  )
)

const App = () => {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App