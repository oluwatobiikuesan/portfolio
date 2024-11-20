import {Link} from 'react-router-dom';
import '../style/header.css';

export default function Header() {
  return (
    <div className='header'>
    <header>
        <div className='xdoodle'><span>xdoodle</span></div>
        <nav>
        <span className="material-symbols-outlined">menu
        </span>
            <ul>
                <Link className='nav-link' to={"/"}>home</Link>
                <Link className='nav-link' to={"/work"}>work</Link>
                <Link className='nav-link' to={"/contact"}>contact</Link>
            </ul>
        </nav>
    </header>
    </div>
  )
}
