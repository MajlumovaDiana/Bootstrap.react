import React from 'react'
import "./SectionTemplate.scss"
function SectionTemplate() {
  return (
    <div className='Main_SectionTemplate'>
      <div className='sectiontemplate'>
        <div className='sectiontemplate_leftpart'>
          <div className='sectiontemplate_text'>
            <h1>A Bootstrap 5 template for modern businesses</h1>
            <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
          </div>
          <div className='sectiontemplate_buttons'>
            <button className='blue_button'><span>Get Started</span></button>
            <button className='transparent_button'><span></span>Learn More</button>
          </div>
        </div>
        <div className='sectiontemplate_img'></div>
      </div>
    </div>
  )
}

export default SectionTemplate