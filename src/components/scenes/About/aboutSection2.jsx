import React, { Component } from 'react';

import {
  Service14,
  Service15,
  Service16,
  Service17,
  Service18,
  Service19,
} from '../../../images/index';


import './services.css';

class AboutSection2 extends Component {
  render() {
    return (
      <>
        <section className="about-wrap-layout7 bg-shape-2">
          <div className="about-box-layout9">
            <div className="single-item left-item">
              <div className="item-content">
                <h2 className="item-title">Our History</h2>
                <p>
                  Wesimply dummy text offer the printing and type
                  setting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap
                  into electronic type aeasetting remaining
                  essentially unchanged. It was popularised in the
                  area tehcnology with the release.
                </p>
              </div>
            </div>
            <div className="single-item right-item">
              <img src="img/about/about4.jpg" alt="About Us" />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default AboutSection2
