import React from "react";
import ServiceBoxText5 from "./ServiceBoxText5";
import { Card, CardImg } from 'reactstrap';

import { Inspections } from '../../../../images/index'

class ServiceBox5 extends React.Component {
  render() {
    return (
      <Card inverse>
      <div className="boxes">
        {" "}
        <CardImg src={Inspections} className="img-fluid" />
        <ServiceBoxText5></ServiceBoxText5>
      </div>
      </Card>
    );
  }
}

export default ServiceBox5;
