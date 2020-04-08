import React from "react";
import ServiceBoxText6 from "./ServiceBoxText6";
import { Card, CardImg } from 'reactstrap';

import  { Replace } from '../../../../images/index'

class ServiceBox6 extends React.Component {
  render() {
    return (
      <Card inverse>
      <div className="boxes">
        {" "}
        <CardImg src={Replace} className="img-fluid" />
        <ServiceBoxText6></ServiceBoxText6>
      </div>
      </Card>
    );
  }
}

export default ServiceBox6;
