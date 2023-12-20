import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Page404 from './Pages/Page404'
import MyNavbar from './components/MyNavbar'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import "./App.css"
import Post from './Pages/Post'
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return <>
  <MyNavbar/>
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/post' element={ <Post/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='*' element={<Page404/>}/>
        </Routes>

  </>
}

export default App