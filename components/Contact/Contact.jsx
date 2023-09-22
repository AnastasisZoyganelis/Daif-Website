
import './Contact.css'
const Contact = () => {
  return (
    <div className='contact-framer' id='contact'>
      <div className='contact-wrapper'>
        <div className='upper-contact'>
          <div className='zone1-upper'>
              <h2 className='contact-logo'>@Digital Assets Investement Fund</h2>
              <div className='contact-info'>
                <h2 className='contact-header'>Investing<br/>For Everyone</h2>
                <span className='info-contact'>Signup now and get our newsletter full of crypto information FOR FREE</span>
                <form className='contact-form'>
                    <input className='contact-input' placeholder='Your email'></input>
                    <button className='contact-button'>Get notified</button>
                </form>
              </div>
          </div>
          <div className='zone2-upper'>
              <div className='phone-wrapper'>
                <img src='../../assets/bitcoinchart.jpg' className='bitcoin-image'></img>
                
              </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Contact
