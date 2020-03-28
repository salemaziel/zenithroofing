import React from "react";
import ServiceBoxText5 from "./ServiceBoxText5";

import Inspections from '../../../images/service-inspections.jpg'

class ServiceBox5 extends React.Component {
  render() {
    return (
      <div className="boxes">
        {" "}
        <img src={Inspections} className="img-fluid" />
        <ServiceBoxText5></ServiceBoxText5>
      </div>
    );
  }
}

export default ServiceBox5;
