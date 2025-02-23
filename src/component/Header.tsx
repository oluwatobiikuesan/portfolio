// import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../style/header.css'
import { useState } from 'react'



interface headerLinkInterface  {
  name: string
  address: string
}
const headerPageAddress : headerLinkInterface[] = [
    {name: "home",
      address: "home"
    },
    {
      name: "project",
      address: "project"
    },
    {
      name: "ai",
      address: "ai"
    },
    {
      name: "contact",
      address: "contact"
    }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (  
    <header className="header md:w-full bg-gray-900 text-white">
    <div>
      <Link style={{ color: "unset", font: "unset" }} to="/">
        <h4>xdoodle</h4>
      </Link>
    </div>

    {/* Navigation */}
    <nav className="relative group flex-row flex">
      {/* Mobile Menu Toggle Button */}
      <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        <span className="material-symbols-outlined cursor-pointer">menu</span>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`${
          isOpen ? "block transition-all duration-500" : "hidden"
        } lg:block absolute lg:relative z-10 lg:z-auto right-0 top-10 lg:top-0 
          w-screen lg:w-fit h-fit bg-white lg:bg-black text-black lg:text-white 
          transition-all duration-500`}
      >
        <ul className="flex flex-col lg:flex-row uppercase p-5">
          {headerPageAddress.map((items, index) => (
            <li key={index} className="p-2 hover:bg-white hover:text-black hover:transition-all duration-100 w-full text-xs lg:pr-5 lg:pl-5">
              <Link to={items.name}>{items.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  </header>
  )
}
