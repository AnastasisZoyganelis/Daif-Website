import Navbar from '../components/Navbar/Navbar'
import Motivation from '../components/Motivation/Motivation'
import Attributes from '../components/Attributes/Attributes'
import Quote from '../components/Quote/Quote'
import Packages from '../components/packages/Packages'
import FAQ from '../components/FAQ/FAQ'
import Footer from '../components/Footer/Footer'
import Contact from '../components/Contact/Contact'
import About from '../components/About/About'
import Wins from '../components/Wins/Wins'
function Homepage() {


    return (
      <div className='page-framer'>
        <Navbar/>
        <Motivation/>
        <About/>
        <Attributes/>
        <Packages/>
        <Contact/>
        <Quote/>
        <Wins images={['../assets/wins/win1.jpeg','../assets/wins/win2.png','../assets/wins/win3.png','../assets/wins/win4.png','../assets/wins/win5.png','../assets/wins/win6.png']}/>
        <FAQ/>
        <Footer/>
        
      </div>
    )
  }
  
  export default Homepage