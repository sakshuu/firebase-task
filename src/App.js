import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Page404 from './Pages/Page404'
import MyNavbar from './components/MyNavbar'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import "./App.css"

const App = () => {
  return <>
  <MyNavbar/>
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='*' element={<Page404/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>

  </>
}

export default App