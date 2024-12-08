import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './page/Layout'


function App() {

  return (
    <div>
      <Layout/>
    <Routes>
      <Route path='*' element={undefined}> </Route>
      <Route index path='/*' element={null}></Route>
    </Routes>
    </div>
  )
}

export default App
