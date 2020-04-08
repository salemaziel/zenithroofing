import React, { Component } from 'react';

import {
    Service14,
    Service15,
    Service16,
    Service17,
    Service18,
    Service19,
} from '../../../images/index'

import AboutHeader from './aboutheader'
import './services.css'
import AboutSection1 from './aboutSection1';
import AboutSection2 from './aboutSection2';
import AboutSection3 from './aboutSection3';
import AboutSection4 from './aboutSection4';
import AboutSection5 from './aboutSection5';


class AboutPage extends Component {
    render() {
    return (
        <>
        <AboutHeader />
        <AboutSection1 />
        <AboutSection2 />
        <AboutSection3 />
        <AboutSection4 />
        <AboutSection5 />
      
      </>
    );
  }
}

export default AboutPage

