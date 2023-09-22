import { Link } from 'react-scroll';
import './Navbar.css';
import Logo from '../../assets/logo.png'


const Navbar = () => {
  return (
    <div>
      <section id='home'>
      <div className='navigation-framer'>
        <div className='navigation-box'>
          <div className='navigation-components'>
            <h3 className='navigation-logo-text'>@ DIGITAL ASSETS INVESTEMENT FUND</h3>
            <ul className='framer'>
              
              <img src={Logo} alt='Logo' className='logo-framer'></img>
              <li className='component1'><Link to='home'smooth={true}>Home</Link></li>
              <li className='component2'><Link to='services'smooth={true}>Services</Link></li>
              <li className='component2'><Link to='faq'smooth={true}>FAQ</Link></li>
              <li className='component3'><Link to='about'smooth={true}>About</Link></li>
            </ul>

          </div>
          
          
          <h1 className='navigation-header'>Welcome to the future of<br/> cryptocurrency investing</h1>
          
          
          
        </div>
       
      </div>
    </section>  
    </div>
  )
}

export default Navbar
