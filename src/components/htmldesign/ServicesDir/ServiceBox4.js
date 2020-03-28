import React from "react";
import ServiceBoxText4 from "./ServiceBoxText4";

import Restoration from '../../../images/service-restorations.jpg'

class ServiceBox4 extends React.Component {
  render() {
    return (
      <div className="boxes">
        {" "}
        <img src={Restoration} className="img-fluid" />
        <ServiceBoxText4></ServiceBoxText4>
      </div>
    );
  }
}

export default ServiceBox4;
