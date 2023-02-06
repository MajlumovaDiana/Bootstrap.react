import React from 'react'
import './Footer.scss'
function Footer() {
  return (
    <div className='footer'>
      <div className='footer_text'>
        <div className='footer_left_text'><p>Copyright © Your Website 2022</p></div>
        <div className='footer_right_text'>
          <ul>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer