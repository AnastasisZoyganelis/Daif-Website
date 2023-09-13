import React from 'react'
import './Packages.css';
const Packages = () => {
  return (
    <section id='services'>
    <div className='package-wrapper'>
        <div className='package-list'>
            <div className='package-free'>
                <h1 className='package-free-title'>Starter</h1>
                <div className='price'>
                    <h2>$ 0</h2>
                </div>
                <div className='futures'>
                    <div className='future-layout'>
                        <img className='package-free-image' src='../../assets/icon-tick.svg'></img>
                        <p className='future1'>Basic Access</p>
                    </div>
                    <div className='future-layout'>
                        <img className='package-free-image' src='../../assets/icon-tick.svg'></img>
                        <p className='future1'>Weekly Analysis</p>
                    </div>
                    <div className='future-layout'>
                        <img className='package-free-image' src='../../assets/icon-tick.svg'></img>
                        <p className='future1'>Begginners Guidence</p>
                    </div>
                    <div className='future-layout'>
                        <img className='package-free-image' src='../../assets/icon-tick.svg'></img>
                        <p className='future1'>Free Trade Ideas</p>
                    </div>
                </div>
                <div className='button-start'>
                    <a href='https://t.me/+7NjueFSePMgxMDNk' className='free-link'><button className='package-free-button'>Get Started</button></a>
                </div>
            </div>
            <div className='package-free'>
                <h1 className='package-free-title'>Pro</h1>
                <div className='price'>
                    <h2>$20</h2>
                </div>
                <div className='futures'>
                    <div className='future-layout'>
                        <img className='package-free-image' src='../../assets/icon-tick.svg'></img>
                        <p className='future1'>Pro Access</p>
                    </div>
                    <div className='future-layout'>
                        <img className='package-free-image' src='../../assets/icon-tick.svg'></img>
                        <p className='future1'>Daily Analysis + Lessons</p>
                    </div>
                    <div className='future-layout'>
                        <img className='package-free-image' src='../../assets/icon-tick.svg'></img>
                        <p className='future1'>Private Chat</p>
                    </div>
                    
                    <div className='future-layout'>
                        <img className='package-free-image' src='../../assets/icon-tick.svg'></img>
                        <p className='future1'>Paid Trade Ideas</p>
                    </div>
                </div>
                <div className='button-start'>
                    <button className='package-free-button'>Get Started</button>
                </div>
            </div>
            <div className='package-free'>
                <h1 className='package-free-title'>Expert</h1>
                <div className='price'>
                    <h2>$ 50</h2>
                </div>
                <div className='futures'>
                    <div className='future-layout'>
                        <img className='package-free-image' src='../../assets/icon-tick.svg'></img>
                        <p className='future1'>Total Access</p>
                    </div>
                    <div className='future-layout'>
                        <img className='package-free-image' src='../../assets/icon-tick.svg'></img>
                        <p className='future1'>First to learn our analysis</p>
                    </div>
                    <div className='future-layout'>
                        <img className='package-free-image' src='../../assets/icon-tick.svg'></img>
                        <p className='future1'>Private and Group Chat</p>
                    </div>
                    <div className='future-layout'>
                        <img className='package-free-image' src='../../assets/icon-tick.svg'></img>
                        <p className='future1'>Ideas + Strategies</p>
                    </div>
                </div>
                <div className='button-start'>
                    <button className='package-free-button'>Get Started</button>
                </div>
            </div>
            <div className='package-free'>
                <h1 className='package-free-title'>VIP</h1>
                <div className='price'>
                    <h2>$ 100</h2>
                </div>
                <div className='futures'>
                    <div className='future-layout'>
                        <img className='package-free-image' src='../../assets/icon-tick.svg'></img>
                        <p className='future1'>Complete Custody Of Your wallet</p>
                    </div>
                    <div className='future-layout'>
                        <img className='package-free-image' src='../../assets/icon-tick.svg'></img>
                        <p className='future1'>We make the transactions for you </p>
                    </div>
                    
                </div>
                <div className='button-start'>
                    <button className='package-free-button'>Get Started</button>
                </div>
            </div>


        </div>
      
    </div>
    </section>
  )
}

export default Packages
