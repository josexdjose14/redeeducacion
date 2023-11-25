import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/login/login'
import Register from '../pages/register/register'

const DefaultRouter = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </BrowserRouter >

  )
}

export default DefaultRouter