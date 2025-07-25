import React from 'react'

import './intro.css'


const Intro = () => {
  return (
      <section id="intro">
        <div className="introContent">
              <span className='hello'>Hello</span>
              <span className='introtext'>I'am <span className="introname">Vignesh </span> <br/> website developer</span>
              <p className="intropara">I am a skilled web developer in creating visually <br /> appealing and user friendly websites</p>
              {/* <Link><button className="btn"><img src={btnImg} alt="Hire me" className='btnImg'/>Hire me</button></Link> */}
        </div>
        {/* <img src={bg} alt="profile" className="bg" /> */}
      </section>
  )
}

export default Intro


