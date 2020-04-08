import React from "react";
import ServiceBoxText2 from "./ServiceBoxText2";
import { Card, CardImg } from 'reactstrap';

import { Skylights } from '../../../../images/index'

class ServiceBox2 extends React.Component {
  render() {
    return (
      <Card inverse >
      <div className="boxes">
        {" "}
        <CardImg src={Skylights} className="img-fluid" />
        <ServiceBoxText2></ServiceBoxText2>
      </div>
      </Card>
    );
  }
}

export default ServiceBox2;
