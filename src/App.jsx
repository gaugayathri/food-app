import React from 'react'
import LandingPage from './suby/pages/LandingPage'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import ProductMenu from './suby/components/ProductMenu'
import Login from './suby/loginForm/Login'
import SignUp from './suby/loginForm/SignUp'
import Order from './suby/components/Order'
const App = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element = { <LandingPage />} />
          <Route path='/products/:firmId/:firmName' element = {<ProductMenu />} />
          <Route path ='/signUp' element={<SignUp/>}/>
          <Route path ='/Login' element={<Login/>}/>
          <Route path='/order' element={<Order/>}></Route>
      </Routes>
    
    </div>
  )
}

export default App