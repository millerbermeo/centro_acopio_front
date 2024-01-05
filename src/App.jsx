import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import WastePage from './pages/WastePage'
import MovementsPage from './pages/MovementsPage'
import Login from './pages/Login'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/residuos' element={<WastePage/>}/>
      <Route path='/movimientos' element={<MovementsPage/>}/>
    </Routes>
  )
}

export default App
