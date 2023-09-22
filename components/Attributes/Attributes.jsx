import React from 'react'
import './Attributes.css'

const Attributes = () => {
  return (
    <div className='attributes-section-framer'>
        <div className='attributes-framer-center'>
            <div className='box1'>
                <div className='emoji-rocket'>
                    <p className='rocket'>🚀</p>
                </div>
                <div className='emoji-rocket-text-framer'>
                    <h3 className='emoji-rocker-header'>Impressive Growth</h3>
                    <p className='emoji-rocket-text'>Market-busting performance</p>

                </div>

            </div>
            <div className='box2'>
                <div className='emoji-security'>
                    <p className='security'>🔒</p>
                </div>
                <div className='emoji-security-text-framer'>
                    <h3 className='emoji-security-header'>Top-notch Security</h3>
                    <p className='emoji-security-text'>Safe and encrypted via Ledger and Metamask</p>

                </div>
                
            </div>
            <div className='box3'>
                <div className='emoji-global'>
                    <p className='global'>🌐</p>
                </div>
                <div className='emoji-global-text-framer'>
                    <h3 className='emoji-global-header'>Global Expertise</h3>
                    <p className='emoji-global-text'>International market access</p>

                </div>
                
            </div>

        </div>
      
    </div>
  )
}

export default Attributes
