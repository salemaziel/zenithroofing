import React from "react";
import ServiceBoxText4 from "./ServiceBoxText4";
import { Card, CardImg } from 'reactstrap';

import { Restorations } from '../../../../images/index'

class ServiceBox4 extends React.Component {
  render() {
    return (
      <Card inverse>
      <div className="boxes">
        {" "}
        <CardImg src={Restorations} className="img-fluid" />
        <ServiceBoxText4></ServiceBoxText4>
      </div>
      </Card>

    );
  }
}

export default ServiceBox4;
