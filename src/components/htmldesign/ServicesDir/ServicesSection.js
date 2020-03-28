import React from "react";
import ServicesTitles from "./ServicesTitles";
import ServiceBoxesArea from "./ServiceBoxesArea";

import { Row } from 'reactstrap'


class ServicesSection extends React.Component {
  render() {
    return (
      <section className="service-offer">
        <div className="container">
          <Row>
            <div className="col-md-12">
              <ServicesTitles></ServicesTitles>
            </div>
          </Row>
        </div>
        <ServiceBoxesArea></ServiceBoxesArea>
      </section>
    );
  }
}

export default ServicesSection;
