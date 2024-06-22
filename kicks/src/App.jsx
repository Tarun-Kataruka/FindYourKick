import { useState } from 'react'

import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Shop from './Pages/Shop'
import Category from './Pages/Category'
import Products from './Pages/Products'
import CartItem from './Pages/Cart'
import Login from './Pages/Login'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
import BillingDetails from './Components/BillingDetails/BillingDetails'
import ExploreMore from './Components/ExploreMore/ExploreMore'
import Payment from './Components/Payment/Payment'

function App() {
  

  return (
    <div className='w-full'>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/bags' element={<Category banner={men_banner} category='bags' />} />
        <Route path='/sneakers' element={<Category banner={women_banner} category='sneakers'  />} />
        <Route path='/hoodies' element={<Category banner={kids_banner} category='hoodies' />} />
        <Route path='/product' element={<Products />} >
          <Route path=':productId' element={<Products />} />
        </Route>
        <Route path="/category/:category" element={<ExploreMore />} />
        <Route path='/cart' element={< CartItem />} />
        <Route path='/login' element={< Login />} />
        <Route path='/billing' element={<BillingDetails/>} />
        <Route path ='/payment' element = {<Payment />} />
      </Routes>
      <Footer />
      </BrowserRouter>
        
    </div>
  )
}

export default App
