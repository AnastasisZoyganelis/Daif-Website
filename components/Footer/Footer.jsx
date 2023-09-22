import React from 'react'
import { Link } from 'react-scroll';
import {Link as RouterLink} from 'react-router-dom';
import './Footer.css';
const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-box'>
            <div className='item1'>
                <h3 className='item1-header'>Explore</h3>
                <div className='item1-containers'>
                    <h3 className='item1-text'><Link to='about'smooth={true}>About</Link></h3>
                    <h3 className='item1-text'><Link to='services'smooth={true}>Pricing+Services</Link></h3>
                    <h3 className='item1-text'>Portofolio</h3>
                </div>
            </div>
            <div className='item1'>
                <h3 className='item1-header'>Resources</h3>
                <div className='item1-containers'>
                    <h3 className='item1-text'><Link to='faq'smooth={true}>FAQ</Link></h3>
                    <h3 className='item1-text'><RouterLink to='/blog' className='router-link-nav'>Free Trades</RouterLink></h3>
                    <h3 className='item1-text'>Reports</h3>
                    
                </div>
            </div>
            <div className='item1'>
                <h3 className='item1-header'>Connect</h3>
                <div className='item1-containers'>
                <h3 ><Link  className='item1-text' to='contact'smooth={true}>Contact</Link></h3>
                    <h3 ><a className='item1-text' href='https://twitter.com/AZoyganelis'>Twitter</a></h3>
                    <h3 ><a className='item1-text' href='https://www.instagram.com/daif.gr'>Instagram</a></h3>
                </div>
            </div>
        </div>
        <div className='footer-icons'>
            <div className='icons'>
                <a href="https://twitter.com/AZoyganelis"><img className='image-icon' alt='twitter'src='../../assets/twitter.svg'></img></a>
                <a href='https://www.instagram.com/daif.gr'><img className='image-icon' alt='instagram' src='../../assets/instagram.svg'></img></a>
                <a href='https://www.instagram.com/daif.gr'><img className='image-icon' alt='facebook' src='../../assets/facebook.svg'></img></a>
                
            </div>
        
        </div>
        <h3 className='item1-text'>© 2023 Digital Assets Investment Fund</h3>
        

      
    </div>
  )
}

export default Footer
