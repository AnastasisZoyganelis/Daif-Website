import React from 'react'
import './BlogHelper.css'
import Logo from '../../assets/logo.png'

import {Link} from 'react-router-dom'
const BlogHelper = () => {
  return (
    <>
    <div className='navigation-framer2'>
        <div className='navigation-box'>
          <div className='navigation-components'>
            <h3 className='navigation-logo-text'>@ DIGITAL ASSETS INVESTEMENT FUND</h3>
            <ul className='framer'>
              
              <img src={Logo} alt='Logo' className='logo-framer'></img>
              <li className='component1'><Link to='/' className='link-nav'>Home</Link></li>
              <li className='component2'><Link to='/' className='link-nav'>Services</Link></li>
              <li className='component2'><Link to='/' className='link-nav'>FAQ</Link></li>
              <li className='component3'><Link to='/' className='link-nav'>About</Link></li>
            </ul>

          </div>
         
          
          
        </div>
       
      </div>




    <div className='blog-wrapper'>
        <div className='blog-section'>
            <div className='blog-part'>
                <h2 className='blog-header'>Free Trades</h2>
                <div className='blog-main'>
                    <div className='blog-row'>
                        <img className='blog-image' src='../../assets/logo.png'></img>
                        <div className='blog-info'>
                            <h2 className='blog-info-header'>BTC SHORT  ENTRY : 27.000</h2>
                            <h3 className='blog-info-date'>21/09 CLOSED</h3>
                        </div>
                    </div>
                    <div className='blog-row'>
                        <img className='blog-image' src='../../assets/logo.png'></img>
                        <div className='blog-info'>
                            <h2 className='blog-info-header'>RNDR SHORT  ENTRY : 1.6341</h2>
                            <h3 className='blog-info-date'>21/09 CLOSED</h3>
                        </div>
                    </div>
                    <div className='blog-row'>
                        <img className='blog-image' src='../../assets/logo.png'></img>
                        <div className='blog-info'>
                            <h2 className='blog-info-header'>BNB SHORT  ENTRY : 213.77</h2>
                            <h3 className='blog-info-date'>21/09 CLOSED</h3>
                        </div>
                    </div>
                    <div className='blog-row'>
                        <img className='blog-image' src='../../assets/logo.png'></img>
                        <div className='blog-info'>
                            <h2 className='blog-info-header'>T USDT LONG ENTRY : 0.0186</h2>
                            <h3 className='blog-info-date'>19/09 OPEN</h3>
                        </div>
                    </div>
                    <div className='blog-row'>
                        <img className='blog-image'src='../../assets/logo.png'></img>
                        <div className='blog-info'>
                            <h2 className='blog-info-header'>BTC SHORT  ENTRY : 27400</h2>
                            <h3 className='blog-info-date'>19/09 CLOSED</h3>
                        </div>
                    </div>
                    <div className='blog-row'>
                        <img className='blog-image'src='../../assets/logo.png'></img>
                        <div className='blog-info'>
                            <h2 className='blog-info-header'>SFP LONG ENTRY : 0.5643</h2>
                            <h3 className='blog-info-date'>18/09 CLOSED</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  </>)
}

export default BlogHelper
