import '../../style/header.css'
export default function Header() {
  return (
    <header className='header'>
            <div><h4>xdoodle</h4></div>
            <nav>
                <div className='dropdown-container'>
                    <div className='null'></div>
                    <div className='content'>
                        <ul>
                            <li>home</li>
                            <li>my work</li>
                            <li>vision</li>
                            <li>contact</li>
                        </ul>
                    </div>
                </div>
            </nav>
    </header>
  )
}
