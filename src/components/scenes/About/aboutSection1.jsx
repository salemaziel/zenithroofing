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


class AboutSection1 extends Component {
    render() {
    return (
        <>
        <AboutHeader />
        <section class="about-wrap-layout6">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-10 col-12">
                        <div class="heading-layout1">
                            <h2>We Won The ‘Best Roofing Company’ Award 2019 &amp; Tightly 
                                Connected with our communities.</h2>
                            <p> Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                                standard dummy text ever since the when an unknown printer took a galley of type and scrambled 
                                it to make a type specimen book. It has survived not only five centuries but also the leap into 
                                electronic typesetting, remaining essentially unchanged. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
      </>
    );
  }
}

export default AboutSection1

