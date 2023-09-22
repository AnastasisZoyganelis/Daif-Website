import React from 'react'
import './About.css';
const About = () => {
  return (
    <div className='about-framer' id='about'>
        <div className='about-box'>
            <h1 className='about-box-header'>About us</h1>
            <div className='about-text-framer'>
                <p className='text1'>Welcome to Digital Assets Investement Fund, your trusted gateway to the exciting world of cryptocurrency!<br/> Founded by two passionate friends who share a deep love for economics and computer science, we're on a mission to make the crypto space accessible, safe, and profitable for everyone in Greece and beyond.</p>
            </div>
            <h1 className='about-box-header'>Our Journey</h1>
            <div className='about-text-framer'>
                <p className='text1'>Our story began in the hallowed halls of Greek universities, where we pursued degrees in economics and computer science.<br/> As avid learners and cryptocurrency enthusiasts, we embarked on a journey that led us to create numerous successful crypto projects. <br/>Over the past two years, we've not only honed our skills but also witnessed remarkable returns in the crypto market.</p>
            </div>
        </div>
        <div className='about-box'>
            <h1 className='about-box-header'>Our Vision</h1>
            <div className='about-text-framer'>
                <p className='text1'>We want to ensure that everyone has the same opportunity to participate in the crypto revolution.  We firmly believe that cryptocurrency is reshaping the traditional economic landscape, and it's happening faster than most people realize. Major financial players like BlackRock and Fidelity have already signaled their interest by filing for Bitcoin ETF approval. The tide is turning, and traditional finance is giving way to the crypto economy.</p>
            </div>
            <h1 className='about-box-header'>Why Choose Us</h1>
            <div className='about-text-framer'>
                <p className='text1'>At  Digital Assets Investement Fund, we bring together our expertise in economics, computer science, and our hands-on experience in the crypto world to guide you. We're more than just consultants; we're your partners on this exciting journey. Our mission is to help you invest in cryptocurrencies safely and profitably, whether you're a seasoned trader or just getting started.</p>
            </div>
        </div>
        
    </div>
  )
}

export default About