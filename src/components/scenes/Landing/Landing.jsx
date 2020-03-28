import React, { Component } from 'react';

import SiteLayout from '../../htmldesign/SiteLayout'
import HeroHeaderSection from '../../htmldesign/HeroDir/HeroHeaderSection'
import HeroBoxesSection from '../../htmldesign/HeroBoxesDir/HeroBoxesSection'
import CustomerLovesSection from '../../htmldesign/CustomerLovesSection'
import ServicesSection from '../../htmldesign/ServicesDir/ServicesSection'
import SystemsSection from '../../htmldesign/SystemsDir/SystemsSection'
import TestimonialSection from '../../htmldesign/TestimDir/TestimonialSection'

import '../../../css/styles.css'
import '../../../css/slick-theme.css'
import '../../../css/slick.css'



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
