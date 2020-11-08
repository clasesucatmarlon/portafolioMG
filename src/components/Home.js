import React from 'react';


// CSS styles
/* import '../App.css' */

// Import owner
import Banner from './Banner';
import Nav from './Nav';
import About from './About';
import Contact from './Contact';
import Services from './Services';
/* import Portafolio from './Portafolio';
import Skill from './Skill';
import Footer from './Footer'; */


function Home() {

  return (
        <div className="home">
            <Nav />
            <Banner/>
            <About />
            <Contact />
            <Services />
{/*           
          
          
          <Portafolio />
          <Skill />
          <Footer /> */}

          
        </div>
  );
}

export default Home;