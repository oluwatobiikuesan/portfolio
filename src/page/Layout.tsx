import { Outlet } from 'react-router-dom'
import '../style/layout.css'
export default function Layout() {
  return (
    <div className="layout">
        <Outlet/>
    </div>
  )
}
