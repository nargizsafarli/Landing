import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import ProductPage from './Pages/ProductPage/ProductPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import AboutPage from './Pages/AboutPage/AboutPage'
import NotFound from './Components/NotFound/NotFound'
import DetailPage from './Pages/Detail/DetailPage'


function App() {
  return (
    <div>
  
      <BrowserRouter>
      {/* <Navbar/> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<AboutPage/>}/>
          <Route path='contact' element={<ContactPage/>}/>
          <Route path='product' element={<ProductPage/>}/>
          <Route path='detail' element={<DetailPage/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App