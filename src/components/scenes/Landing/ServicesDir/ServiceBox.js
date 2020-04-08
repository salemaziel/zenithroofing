import React from "react";
import ServiceBoxText from "./ServiceBoxText";

class ServiceBox extends React.Component {
  render() {
    return (
      <div className="boxes">
        {" "}
        <img src="images/service-roofrepair.jpg" className="img-fluid" />
        <ServiceBoxText></ServiceBoxText>
      </div>
    );
  }
}

export default ServiceBox;
