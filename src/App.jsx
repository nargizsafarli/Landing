import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import About from './Pages/About/About'
// import Navbar from './Shared/Navbar/Navbar'

function App() {
  return (
    <div>
  
      <BrowserRouter>
      <Home/>
      {/* <Navbar/> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App