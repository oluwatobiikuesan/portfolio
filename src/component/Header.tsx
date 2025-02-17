// import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../style/header.css'



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
]



export default function Header() {
  return (
    
    <header className='header md:w-full'>
            <div><Link style={{color: "unset", font: "unset"}} to={"/"}>
            <h4>xdoodle</h4>
            </Link></div>
            <nav>
                <div className='dropdown-container flex-row flex'>
                    <div className='lg:hidden visible'><span className="material-symbols-outlined">menu
              </span></div>
                    <div className='content'>
                        <ul>
                          {
                            headerPageAddress.map((items, index) => (
                             <HeaderLink to={items.name} key={index}>{items.name}</HeaderLink>
                            ))
                          }
                        </ul>
                    </div>
                </div>
            </nav>
    </header>
  )
}

<Link className='o-link' to={"/home"}>home</Link>


const HeaderLink = ({to, children} : any) => {
  return(
    <Link to={to} className='hover:bg-white transition-all pl-5 pr-5 hover:text-black rounded-sm'>
      {children}
    </Link>
  )
}