import React from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import AllProducts from '../pages/AllProducts'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'
import  NewsDetails  from '../pages/NewsDetails'
import News from '../pages/News'


const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to ='/home' />} />
    <Route path='/home' element={<Home />}  />
    <Route path='/products' element={<AllProducts />}  />
    <Route path='/products/:id' element={<ProductDetails />}  />
    <Route path='/cart' element={<Cart />}  />
    <Route path='/checkout' element={<Checkout />}  />
    <Route path='/login' element={<Login />}  />
    <Route path='/news' element={<News />}  />
    <Route path='/news/:id' element={<NewsDetails />} />
    <Route path='/register' element={<Register />}  />

  </Routes>
}

export default Routers