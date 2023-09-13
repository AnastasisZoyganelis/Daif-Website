import React from 'react'
import './Motivation.css';
const Motivation = () => {
  return (
    <div className='motivation-framer'>
        <div className='motivation-box'>
            <h1 className='motivation-box-header'>Unlock the Power of Crypto</h1>
            <div className='motivation-text-framer'>
                <p className='text1'>Are you ready to explore the lucrative world of <br/>digital assets? With Digital Assets Investment <br/>Fund, you'll dive into the thriving crypto market<br/> and reap the rewards of expert investment<br/> strategies.</p>
                <p className='text2'>Our team of seasoned portfolio managers and <br/>analysts create the perfect blend of technology <br/>and experience to significantly optimize your <br/>returns.</p>
                <p className='text3'>Say goodbye to risky DIY investments—leave it to the pros!</p>
            </div>
        </div>
        <div className='video-framer'>
        <video controls width="500px" height="500" >
        <source src="../../assets/crypto-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
    </div>
  )
}

export default Motivation
