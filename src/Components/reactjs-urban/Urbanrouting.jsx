import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home/Home'
import Abouts from './Abouts/Abouts'
import Project from './Products/Productsurban'
import Productsurban from './Products/Productsurban'
import Contact from './contact/Contact'

const Urbanrouting = () => {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/aboutus' element={<Abouts />}></Route>
      <Route path='/products' element={<Productsurban />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
     </Routes>
    </div>
  )
}

export default Urbanrouting