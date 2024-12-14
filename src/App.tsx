import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './page/Layout'
import Grok from './page/Grok'


function App() {

  return (
    <div>
      <BrowserRouter>
      <Layout/>
    <Routes>
      <Route path='*' element={undefined}> </Route>
      <Route index path='/*' element={null}></Route>
      <Route path={"/grok-ai"} element={<Grok/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
