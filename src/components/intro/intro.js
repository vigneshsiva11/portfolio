
import './intro.css'
import hireme from '../../assets/hireme.png'
import me1edit from '../../assets/me1edit.jpg'
const Intro = () => {
  return (
      <section id="intro">
        <div className="introContent">
              <span className='hello'>Hello</span>
              <span className='introtext'>I'am <span className="introname">Vignesh </span> <br/> website developer</span>
              <p className="intropara">I am a skilled web developer in creating visually <br /> appealing and user friendly websites</p>
              <a href="/vignesh-resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="btn"><img src={hireme} alt="" className='btnImg'/>Resume</button>
              </a>
        </div>
        <img src = {me1edit} alt="profile" className='bg' />
      </section>
  )
}

export default Intro


