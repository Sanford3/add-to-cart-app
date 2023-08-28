import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const Header = ({theme, changeTheme}) => {

  return (
    <>
      <nav className={theme==='light'? "navbar" : "dark-navbar"}>

      <div className="left-part">
        <img src={logo} alt="Error" />
        <h1 className='logo'>SanTech</h1>
      </div>

        <ul className="nav-links">
          <Link to="/"><li>Shop</li></Link>
          <Link to="/cart"><li>Cart</li></Link>
          <button onClick={changeTheme}>
            {/* <FontAwesomeIcon icon={faMoon} /> */}
            {theme==='light'? (<FontAwesomeIcon icon={faMoon} className='moon'/>):(<FontAwesomeIcon icon={faSun} className='sun'/>)}
        </button>
        </ul>
    </nav>
    </>

  )
}

export default Header
