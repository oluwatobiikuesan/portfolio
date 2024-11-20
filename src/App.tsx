import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import Work from './page/Work'
import Contact from './page/Contact'
import Layout from './component/Layout'

function App() {

  return (
    <>
    <Layout>
    <Routes>
      <Route index path='/*' element={<Home/>}></Route>
      <Route path='/work'  element={<Work/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </Layout>
    </>
  )
}

export default App
