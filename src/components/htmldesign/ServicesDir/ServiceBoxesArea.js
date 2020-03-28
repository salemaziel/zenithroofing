import React from "react";
import ServiceBox1 from "./ServiceBox1";
import ServiceBox2 from "./ServiceBox2";
import ServiceBox3 from "./ServiceBox3";
import ServiceBox4 from "./ServiceBox4";
import ServiceBox5 from "./ServiceBox5";
import ServiceBox6 from "./ServiceBox6";

import { Row } from 'reactstrap'


class ServiceBoxesArea extends React.Component {
  render() {
    return (
      <div className="container-fluid boxes-area">
        <Row>
          <div className="col-md-4 col-6 p-0">
            <ServiceBox1></ServiceBox1>
          </div>
          <div className="col-md-4 col-6 p-0">
            <ServiceBox2></ServiceBox2>
          </div>
          <div className="col-md-4 col-6 p-0">
            <ServiceBox3></ServiceBox3>
          </div>
          <div className="col-md-4 col-6 p-0">
            <ServiceBox4></ServiceBox4>
          </div>
          <div className="col-md-4 col-6 p-0">
            <ServiceBox5></ServiceBox5>
          </div>
          <div className="col-md-4 col-6 p-0">
            <ServiceBox6></ServiceBox6>
          </div>
        </Row>
      </div>
    );
  }
}

export default ServiceBoxesArea;
