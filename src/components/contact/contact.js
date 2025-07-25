import React ,{useRef} from 'react'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import './contact.css'
import emailjs from '@emailjs/browser'



const Contact = () => {
  const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

  const name = form.current.from_name.value.trim();
  const email = form.current.from_email.value.trim();
  const message = form.current.message.value.trim();

    if (!name || !email || !message) {
    alert("Please fill in all fields before submitting.");
    return;
  }

    emailjs.sendForm('service_emszi5w', 'template_kbf4syn', form.current, 'xFYSieGOHqkX-8X7C')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully!');
          e.target.reset(); 
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again.');
        },
      );
  };

  return (
    <div>
      <section id="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="constDesc">
                Please fill out the form below to discuss any work opportunities.
            </span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className='name' placeholder='your Name' name='from_name' />
                <input type="email" className='email' placeholder='your Email' name='from_email' />
                <textarea className='msg' name='message' rows="5" placeholder='your Message'></textarea>
                <button type='submit' value='send' className="submitBtn">Submit</button>
                <div className="links">
                    <a
                        href="https://github.com/vigneshsiva11"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={github} alt="GitHub" className="link" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/vignesh-s-05ba4b301/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={linkedin} alt="LinkedIn" className="link" />
                    </a>
                </div>
            </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
