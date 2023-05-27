import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [searchString,setSearchString] = useState("")
    const [cancelDisplay,setCancelDisplay] = useState('none')
    const searchChangeHandler = (e)=>{
        setSearchString(e.target.value)
        if(e.target.value){
            setCancelDisplay('block')
        }
        else{
            setCancelDisplay('none')
        }
    }
  return (
    <nav className='navbar-main'>
        <div className='search-input-container'>
            <div className='search-logo'>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <input className='search-inputbar' type='text' placeholder='Search by name...' value={searchString} onChange={searchChangeHandler}/>
            <div className='search-cancel-logo' style={{display:cancelDisplay}} onClick={()=>{setSearchString("");setCancelDisplay('none')}}>
                <i className="fa-solid fa-xmark"></i>
            </div>
        </div>
      <ul className='navbar-ul'>
        <li className='navbar-li'><i className="fa-solid fa-right-from-bracket fa-xl"></i></li>
      </ul>
    </nav>
  )
}

export default Navbar
