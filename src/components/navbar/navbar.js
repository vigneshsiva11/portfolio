import React, { useState } from 'react'
import './navbar.css'
import contactImg from '../../assets/contact.png'
import { Link } from 'react-scroll'
// import logo from '../../assets/logo.png'
import menu from '../../assets/menu.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className="navbar">
        <img src="/logo.png" alt="Logo" className='logo'/>
        <div className='desktopMenu'>
          <Link activeClass='active' to ='intro' spy={true} smooth= {true} offset= {-85} duration={500} className="desktopMenuListItem" >Home</Link>
          <Link activeClass='active' to ='skills' spy={true} smooth= {true} offset= {-85} duration={500} className="desktopMenuListItem" >About</Link>  
          <Link activeClass='active' to ='techstack' spy={true} smooth= {true} offset= {-85} duration={500} className="desktopMenuListItem" >Tech Stack</Link>
          <Link activeClass='active' to ='works' spy={true} smooth= {true} offset= {-85} duration={500} className="desktopMenuListItem" >Works</Link>
        </div>
        
        

        <Link to="contact" smooth={true} duration={500} offset={-85} spy={true} activeClass="active" className="desktopMenuBtn"> <img src={contactImg} alt="Contact" className="desktopMenuImg" />
            Contact me
        </Link>


        <img src={menu} alt="menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{ display: showMenu ? 'flex':'none' }}>
          <Link activeClass='active' to ='intro' spy={true} smooth= {true} offset= {-75} duration={500} className="ListItem" onClick={()=> setShowMenu(false)}>Home</Link>
          <Link activeClass='active' to ='skills' spy={true} smooth= {true} offset= {-75} duration={500} className="ListItem" onClick={()=> setShowMenu(false)}>About</Link>
          <Link activeClass='active' to ='techstack' spy={true} smooth= {true} offset= {-75} duration={500} className="ListItem" onClick={()=> setShowMenu(false)}>Tech Stack</Link>
          <Link activeClass='active' to ='works' spy={true} smooth= {true} offset= {-75} duration={500} className="ListItem" onClick={()=> setShowMenu(false)}>Works</Link>
          <Link activeClass='active' to ='contact' spy={true} smooth= {true} offset= {-75} duration={500} className="ListItem" onClick={()=> setShowMenu(false)}>Contacts</Link>
        </div>
    </nav>
  )
}

export default Navbar
