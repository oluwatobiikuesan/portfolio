import { Route, Routes } from 'react-router-dom'
import './App.css'
import Grok from './page/Grok'
import Home from './page/Home'
import Contact from './page/Contact'
import Project from './page/Project'
import { Fragment, Suspense } from 'react'
import Loading from './page/Loading'
import Layout from './page/Layout'


function App() {
  return (
    <Fragment>
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
    </Suspense>
    </Fragment>
  )
}

export default App
