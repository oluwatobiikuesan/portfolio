// import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
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
    <header className="sticky top-0 z-10 flex h-16 w-full items-center justify-between bg-white px-4 text-gray-900 border-b">
    <div className='ml-0'>
      <Link to={"/"} className='uppercase'>xdoodle</Link>
    </div>

    <nav className="relative group flex-row flex">
      {/* Mobile Menu Toggle Button */}
      <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        <span className="material-symbols-outlined cursor-pointer">menu</span>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:block absolute lg:relative right-0 top-14 lg:top-0 w-screen lg:w-fit bg-white text-gray-900 lg:bg-transparent transition-all duration-300`}
      >
        <ul className="flex flex-col lg:flex-row uppercase">
          {headerPageAddress.map((items, index) => (
            <li
              key={index}
              className="w-full px-4 py-2 text-xs hover:text-blue-600 lg:px-5"
            >
              <Link to={items.name}>{items.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  </header>
  )
}
