import React from "react";
import TestimonialTitles from "./TestimonialTitles";
import TestimonialBox from "./TestimonialBox";
import TestimonialBoxInner from "./TestimonialBoxInner";

import { Row } from 'reactstrap'


class TestimonialSection extends React.Component {
  render() {
    return (
      <section className="testmonial">
        <div className="container">
          <Row>
            <div className="col-md-12">
              <TestimonialTitles></TestimonialTitles>
            </div>
            </Row>
        </div>
        <div className="container-fluid">
          <Row className="justify-content-center">
            <div className="col-md-10 white-box testmonial-slider">
              <TestimonialBox></TestimonialBox>
              <TestimonialBox></TestimonialBox>
              <TestimonialBoxInner></TestimonialBoxInner>
              <TestimonialBoxInner></TestimonialBoxInner>
            </div>
          </Row>
        </div>
      </section>
    );
  }
}

export default TestimonialSection;
