import './App.css'
import Login from './Components/login'
import Registration from './Components/registration'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/home'
import Profile from './Components/profile'
import Header from './Components/Header'
import Footer from './Components/Footer'
import AdminPannel from './Components/AdminPannel'
import Dashboard from './Components/Dashboard'
import Contact from './Components/Contact'
import Product from './Components/Product'
import Blog from './Components/Blog'
import Cart from './Components/Cart'
import ProductDetail from './Components/ProductDetail'
import AdminDashboard from './Components/AdminDashboard'


function App() {

  return (
    <>
  {/* <Footer/> */}
  
   {/* */}
   <BrowserRouter>
        <Routes>
        <Route path='/' element={ <Header/> } />
          <Route path='/registartion' element={<Registration/> } />
          <Route path='/login' element={<Login/>} />
          <Route path='/user/profile' element={<Profile/>} />
          <Route path='/adminPannel' element={<AdminPannel/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/product-details' element={<ProductDetail/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/admindashboard' element={<AdminDashboard/>} />
          <Route path='*' element={ <>
          <h1> Link Not Found </h1>
          </>} />
        </Routes>
      </BrowserRouter>
    </>

  
  )
}

export default App
