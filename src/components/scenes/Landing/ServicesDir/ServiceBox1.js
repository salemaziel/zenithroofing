import React from "react";
import ServiceBoxText1 from "./ServiceBoxText1";
import { Card, CardImg } from 'reactstrap';

import { Repair } from '../../../../images/index'

class ServiceBox1 extends React.Component {
  render() {
    return (
      <Card inverse>
      <div className="boxes">
        {" "}
        <CardImg src={Repair} className="img-fluid" />
        <ServiceBoxText1></ServiceBoxText1>
      </div>
      </Card>
    );
  }
}

export default ServiceBox1;
