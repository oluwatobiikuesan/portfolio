import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './page/Layout'
import Grok from './page/Grok'
import Home from './page/Home'
import Header from './component/Header'
import Footer from './component/Footer'
import Contact from './page/Contact'
import Work from './page/Work'
import { Suspense } from 'react'
import Loading from './page/Loading'


function App() {
  return (
    <div>
      
      <Suspense fallback={<Loading/>}>
      <Header/>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/ai' element={<Grok/>}></Route>
      <Route path='/work' element={<Work/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      </Route>
    </Routes>
   
    <Footer/>
    </Suspense>
    </div>
  )
}

export default App
