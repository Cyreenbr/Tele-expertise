import React from 'react';
//import './Home.css';
import Carrousel from '../components/layout/carrousel/Carrousel';
import Contact from '../components/layout/Contact/Contact';
import AboutUs from '../components/layout/AboutUs/AboutUs';


const Home = () => (
  <div>
     <Carrousel />
     <AboutUs />
     <div id='contact'> 
      <Contact />
     </div>
  </div>
);

export default Home;