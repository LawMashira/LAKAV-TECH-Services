import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/landing/Navbar';
import FooterTop from './components/footer/FooterTop';
import FooterBottom from './components/footer/FooterBottom';
import Landing from './components/landing/Landing';
import Contact from './components/Contact';
import TopNavbar from './components/landing/TopNavbar';
import ReactGA from 'react-ga'; // Import ReactGA

const TRACKING_ID = "G-BKGFJFK34S"; // Replace with your Google Analytics Tracking ID


const App: React.FC = () => {


  useEffect(() => {
    ReactGA.initialize(TRACKING_ID); // Initialize GA
    ReactGA.pageview(window.location.pathname + window.location.search); // Record initial page view
  }, []);
  return (
    <>
    
    
    <Router>
     <TopNavbar/>
    <Navbar/>
      
      <Routes>
     
        <Route path="/" element={<Landing />} />
       
     
     
      </Routes>
     <Contact/>

      <FooterTop />
      <FooterBottom/>

    </Router>
    
    </>
  );
};

export default App;
