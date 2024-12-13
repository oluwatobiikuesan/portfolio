import Footer from '../component/Footer'
import Header from '../component/Header'
import '../style/layout.css'
import Home from './Home'
export default function Layout() {
  return (
    <div className="layout">
        <Header/>
        <Home/>
        <Footer/>
    </div>
  )
}
