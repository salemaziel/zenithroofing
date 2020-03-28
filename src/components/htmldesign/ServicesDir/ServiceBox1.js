import React from "react";
import ServiceBoxText1 from "./ServiceBoxText1";

import Repair from '../../../images/service-roofrepair.jpg'

class ServiceBox1 extends React.Component {
  render() {
    return (
      <div className="boxes">
        {" "}
        <img src={Repair} className="img-fluid" />
        <ServiceBoxText1></ServiceBoxText1>
      </div>
    );
  }
}

export default ServiceBox1;
