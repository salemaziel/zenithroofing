import React from "react";
import ServiceBoxText2 from "./ServiceBoxText2";

import Skylights from '../../../images/service-skylights.jpg'

class ServiceBox2 extends React.Component {
  render() {
    return (
      <div className="boxes">
        {" "}
        <img src={Skylights} className="img-fluid" />
        <ServiceBoxText2></ServiceBoxText2>
      </div>
    );
  }
}

export default ServiceBox2;
