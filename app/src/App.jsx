import './App.css'
import RootLayout from './layouts/RootLayout'
import HomeLayout from './layouts/HomeLayout'

import Promo from './pages/Promo'
import Home from './pages/Home'
import {
  createBrowserRouter, 
  Route,
  createRoutesFromElements,
  RouterProvider
} 
from 'react-router-dom'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route path='/' element={<HomeLayout/>}>
        <Route index path='/' element={<Home/>}/>
      </Route>
      <Route path='/promo' element={<Promo/>}/>
    </Route>
  )
)
const App = () => {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
