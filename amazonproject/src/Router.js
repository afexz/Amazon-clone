import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from './components/Pages/Auth/Signup.js'
import Payment from './components/Pages/Payment/Payment.js'
import Orders from './components/Pages/Orders/Orders.js'
import Cart from './components/Pages/Cart/Cart.js'
import Landingpage from './components/Pages/Landing/Landing.js';
import Productdetail from './components/Pages/ProductDetail/Productdetail.js';
import Product from './components/Product.js';

function Routing() {
  return (
    <Router>
       <Routes>
          <Route path='/' element={<Landingpage/>}/>
          <Route path='/auth' element={<Signup/>}/>
          <Route path='/payments' element={<Payment/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/products/:productId' element={<Productdetail/>}/>
          <Route path='/cart' element={<Cart/>}/>
       </Routes>
    </Router>
  )
}

export default Routing
