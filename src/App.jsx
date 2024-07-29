// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Fotter from './components/Fotter/Fotter'
import LoginPopUp from './components/LOginPopUp/LoginPopUp'


const App = () => {

  const[showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
    <Navbar setShowLogin={setShowLogin}/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='Cart' element ={<Cart/>} />
      <Route path='order' element ={<PlaceOrder/>} />
    </Routes>

    </div>
    <Fotter/>
    </>

  )
}

export default App
