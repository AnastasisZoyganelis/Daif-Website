import './Portofolio.css'

import Logo from '../../assets/logo.png'

import {Link} from 'react-router-dom'
const Portofolio = () => {
  return (
    <>
    <div className='navigation-framer'>
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


    
    <div className=''>
      
    </div>
    </>
  )
}

export default Portofolio
