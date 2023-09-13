import React from 'react'
import './FAQ.css'
const FAQ = () => {
  return (
    <section id='faq'>
    <div className='FAQ-wrapper' >
        <h2 className='FAQ-header'>FAQ</h2>
        <div className='FAQ-text-wrapper'>
            <div className='FAQ-element'>
                <h2 className='faq-question'>How do I get started?</h2>
                <h3 className='faq-answer'>Select your desired plan and sign up. Our experts will contact you shortly to guide you through the onboarding process.</h3>
            </div>
            <div className='FAQ-element'>
                <h2 className='faq-question'>Is my investment safe?</h2>
                <h3 className='faq-answer'>Your investment is secured with top-of- the-line encryption and security measures. We take your financial well- being very seriously.</h3>
            </div>
        </div>
        <div className='FAQ-text-wrapper'>
            <div className='FAQ-element'>
                <h2 className='faq-question'>What are the expected returns?</h2>
                <h3 className='faq-answer'>While returns may vary, we continually optimize our strategies to generate impressive yields that outperform the market.</h3>
            </div>
            <div className='FAQ-element'>
                <h2 className='faq-question'>Can I withdraw my funds anytime?</h2>
                <h3 className='faq-answer'>Yes! You can easily withdraw your funds at any time, just reach out to our responsive support team.</h3>
            </div>
        </div>
        
      
    </div>
    </section>
  )
}

export default FAQ
