import { Outlet } from 'react-router-dom'
import '../style/layout.css'
export default function Layout() {
  return (
    <div className="layout lg:grid-flow-col md:grid-cols-1 grid-rows-10 md:grid-rows-11">
        <Outlet/>
    </div>
  )
}
