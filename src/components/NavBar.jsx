import mantle from '../assets/mantle.svg'
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div>
        <img src={mantle} alt="" className="logo" />
      </div>
      <div className='toggle'>
        <FaBars size={17}/>
      </div>
      
    </nav>
  )
}

export default NavBar
