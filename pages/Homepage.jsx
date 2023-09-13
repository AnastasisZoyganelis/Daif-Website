import Navbar from '../components/Navbar/Navbar'
import Motivation from '../components/Motivation/Motivation'
import Attributes from '../components/Attributes/Attributes'
import Quote from '../components/Quote/Quote'
import Packages from '../components/packages/Packages'
import FAQ from '../components/FAQ/FAQ'
import Footer from '../components/Footer/Footer'
import Contact from '../components/Contact/Contact'

function Homepage() {


    return (
      <div className='page-framer'>
        <Navbar/>
        <Motivation/>
        
        <Attributes/>
        <Packages/>
        <Contact/>
        <Quote/>
        
        <FAQ/>
        <Footer/>
        
      </div>
    )
  }
  
  export default Homepage