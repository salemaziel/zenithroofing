import React from "react";
import ServiceBoxText3 from "./ServiceBoxText3";


import Solar from '../../../images/service-solar.jpg'

class ServiceBox3 extends React.Component {
  render() {
    return (
      <div className="boxes">
        {" "}
        <img src={Solar} className="img-fluid" />
        <ServiceBoxText3></ServiceBoxText3>
      </div>
    );
  }
}

export default ServiceBox3;
