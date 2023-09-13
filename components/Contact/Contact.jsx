import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='contact-framer' id='contact'>
        <div className='contact-form'>
            <h2 className='contact-heading'>Stay Updated</h2>
            <p className='contact-text'>Get exclusive trading insights, promotions, and news delivered straight to your inbox. Don’t miss a beat – sign up for our newsletter today and stay on top of your trading game!</p>
            <div className='contact-fill'>
                <input className='input-contact' placeholder='name@email.com'></input>
                <button className='button-contact'>Subscribe</button>
            </div>
            
        </div>
      
    </div>
  )
}

export default Contact
