import React from 'react'
import Portfolio from "../projects/Portfolio";
import About from "./AboutUs";
import Hero from "./Hero";
import Industries from "./Industries";

import Services from "./Services";
import TechStack from "./Techstack";
import TopNavbar from './TopNavbar';
import BottomNavbar from './Navbar';




function Landing() {
  return (
    <div>
<TopNavbar/>
<BottomNavbar/>
<Hero />
<About />
<Services />
<Portfolio/>
<Industries />
<TechStack />

{/*<RequestQuoteForm />*/}
    </div>
  )
}

export default Landing
