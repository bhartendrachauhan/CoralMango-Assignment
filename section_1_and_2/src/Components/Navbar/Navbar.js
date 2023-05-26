import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar-main'>
        <div className='search-input-container'>
            <div className='search-logo'>
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <input className='search-inputbar' type='text' placeholder='Search by name...'/>
        </div>
      <ul className='navbar-ul'>
        <li className='navbar-li'>Reset</li>
        <li className='navbar-li'>Logout</li>
      </ul>
    </nav>
  )
}

export default Navbar
