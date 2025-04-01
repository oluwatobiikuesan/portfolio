import { Link, Outlet } from 'react-router-dom'
import '../style/layout.css'
import Header from '../component/header'

type headerLinkInterface ={
  name: string,
  address: string
}
const headerPageAddress : headerLinkInterface [] = [
  {name: "home", address: "home"},
  {name: "project", address: "project"},
  {name: "ai", address: "ai"},
  {name: "contact", address: "contact"}
];

export default function Layout() {
  return (
    <div className="layout flex-row w-full relative">
      <Header/>
      <div className='top-0 right-0 fixed z-50 w-[30%] h-dvh bg-amber-200 hidden'>
        <nav>
          {
            headerPageAddress.map((items, index) => (
              <li className='list-none p-2 uppercase hover:bg-lime-100 cursor-pointer' key={index}><Link to={items.address}>{items.name}</Link></li>
            ))
          }
        </nav>
      </div>
        <div className='w-full'><Outlet/></div>
    </div>
  )
}
