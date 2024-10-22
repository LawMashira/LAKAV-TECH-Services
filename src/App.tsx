import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/landing/Navbar';
import FooterTop from './components/footer/FooterTop';
import FooterBottom from './components/footer/FooterBottom';
import Landing from './components/landing/Landing';
import Contact from './components/Contact';
import TopNavbar from './components/landing/TopNavbar';



const App: React.FC = () => {
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
