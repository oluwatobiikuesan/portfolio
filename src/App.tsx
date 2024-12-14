import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './page/Layout'
import Grok from './page/Grok'
import Home from './page/Home'
import Header from './component/Header'
import Footer from './component/Footer'
import Contact from './page/Contact'


function App() {

  return (
    <div>
      <BrowserRouter>
      <Header/>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/ai' element={<Grok/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      </Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
