import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './page/Layout'
import Grok from './page/Grok'
import Home from './page/Home'
import Header from './component/Header'
import Footer from './component/Footer'
import Contact from './page/Contact'
import Work from './page/Project'
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
      <Route path='/project' element={<Work/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      </Route>
    </Routes>
   
    <Footer/>
    </Suspense>
    </div>
  )
}


//check if the user has accessed the webpage before
function isAUser(){
  const userActive = window.localStorage.getItem("user");
  return userActive;
}

//record the the user if they are new to using the webpage
function usersAnalystics(existingUser : any){
  if(!existingUser){
    alert("new user alert");
    window.localStorage.setItem("user", "true");
  }else {
    return null;
  }
}
//run test
usersAnalystics(isAUser);

export default App
