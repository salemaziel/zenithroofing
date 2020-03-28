import React from "react";
import ServiceBoxText6 from "./ServiceBoxText6";

import Replace from '../../../images/service-roofreplace.jpg'

class ServiceBox6 extends React.Component {
  render() {
    return (
      <div className="boxes">
        {" "}
        <img src={Replace} className="img-fluid" />
        <ServiceBoxText6></ServiceBoxText6>
      </div>
    );
  }
}

export default ServiceBox6;
