import { Route, Routes } from 'react-router-dom'
import './App.css'
import Grok from './page/Grok'
import Home from './page/Home'
import Header from './component/header'
import Footer from './component/footer'
import Contact from './page/Contact'
import Project from './page/Project'
import { Fragment, Suspense, useState } from 'react'
import Loading from './page/Loading'
import Layout from './page/Layout'


function App() {
  const [isState] = useState(true);
  return (
    <Fragment>
     {isState ? "" :  <p className='text-xs p-2 bg-amber-300 text-black'>Under Development</p>}
      <Suspense fallback={<Loading/>}>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='home' element={<Home/>}></Route>
      <Route path='ai' element={<Grok/>}></Route>
      <Route path='project' element={<Project/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      </Route>
    </Routes>
    <Footer/>
    </Suspense>
    </Fragment>
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
