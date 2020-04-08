import React from "react";
import ServiceBox1 from "./ServiceBox1";
import ServiceBox2 from "./ServiceBox2";
import ServiceBox3 from "./ServiceBox3";
import ServiceBox4 from "./ServiceBox4";
import ServiceBox5 from "./ServiceBox5";
import ServiceBox6 from "./ServiceBox6";

import { Link } from 'gatsby'

import { Row } from 'reactstrap'


class ServiceBoxesArea extends React.Component {
  render() {
    return (
      <div className="container-fluid boxes-area">
        <Row>
          <div className="col-md-4 col-6 p-0">
        <Link>   <ServiceBox1></ServiceBox1></Link> 
          </div>
          <div className="col-md-4 col-6 p-0">
          <Link>  <ServiceBox2></ServiceBox2></Link> 
          </div>
          <div className="col-md-4 col-6 p-0">
          <Link>  <ServiceBox3></ServiceBox3></Link> 
          </div>
          <div className="col-md-4 col-6 p-0">
          <Link>   <ServiceBox4></ServiceBox4></Link> 
          </div>
          <div className="col-md-4 col-6 p-0">
          <Link>   <ServiceBox5></ServiceBox5></Link> 
          </div>
          <div className="col-md-4 col-6 p-0">
          <Link>   <ServiceBox6></ServiceBox6></Link> 
          </div>
        </Row>
      </div>
    );
  }
}

export default ServiceBoxesArea;
