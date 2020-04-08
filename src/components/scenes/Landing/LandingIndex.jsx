import React, { Component } from 'react';

import HeroHeaderSection from './HeroHeaderSection'
import HeroBoxesSection from './HeroBoxesSection'
import CustomerLovesSection from './CustomerLovesSection'
import ServicesSection from './ServicesSection'
import SystemsSection from './SystemsSection'
import TestimonialSection from './TestimonialSection'

import '../../../css/main.css'



class Landing extends Component {
  render() {
    return (
      <>
        <HeroHeaderSection />
        <HeroBoxesSection />
        <CustomerLovesSection />
        <ServicesSection />
        <SystemsSection />
        <TestimonialSection />
      {/*<div className="landing container">
        <h1>Landing</h1>
        <p>
          The Landing Page is open to everyone, even though the user
          isn't signed in.
        </p>
    </div>*/}

      </>
    );
  }
}

export default Landing;
