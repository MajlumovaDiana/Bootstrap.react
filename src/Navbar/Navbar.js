import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"
function Navbar() {
  return (
    <div className='nav'>
            <div className='nav_list'>
                <div className='nav_logo'><h4><Link to="/">Start Bootstrap</Link></h4></div>
                <div className='nav_ul'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li>Contact</li>
                        <li>Pricing</li>
                        <li>FAQ</li>
                        <li>Blog</li>
                        <li>Portfolio</li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default Navbar