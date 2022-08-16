import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
        <ul>
          
            <li><Link to="/" className='link'>Home</Link></li>
            <li><Link to="/report" className='link'>Reports</Link></li>
            <li>Options</li>
        </ul> 
    </header>
  )
}




export default Header