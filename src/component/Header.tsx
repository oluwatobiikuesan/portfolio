import { Link } from 'react-router-dom'
import '../style/header.css'
export default function Header() {
  return (
    <header className='header'>
            <div><h4>xdoodle</h4></div>
            <nav>
                <div className='dropdown-container'>
                    <div className='null'></div>
                    <div className='content'>
                        <ul>
                            <Link className='o-link' to={"/home"}>home</Link>
                            <Link className='o-link' to={"/ai"}>work</Link>
                            <Link className='o-link' to={undefined}>vision</Link>
                            <Link className='o-link' to={"/contact"}>contact</Link>
                        </ul>
                    </div>
                </div>
            </nav>
    </header>
  )
}
