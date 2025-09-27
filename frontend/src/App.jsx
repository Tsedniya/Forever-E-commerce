import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Order from './pages/Order'
import Product from './pages/Product'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      
      <Navbar/>

      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/place-order' element={<PlaceOrder/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
          
      </Routes>
    </div>
  )
}

export default App