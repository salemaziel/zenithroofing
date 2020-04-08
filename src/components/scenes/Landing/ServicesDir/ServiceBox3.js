import React from "react";
import ServiceBoxText3 from "./ServiceBoxText3";
import { Card, CardImg } from 'reactstrap';


import { Solar } from '../../../../images/index'

class ServiceBox3 extends React.Component {
  render() {
    return (
      <Card inverse>
      <div className="boxes">
        {" "}
        <CardImg src={Solar} className="img-fluid" />
        <ServiceBoxText3></ServiceBoxText3>
      </div>
      </Card>
    );
  }
}

export default ServiceBox3;
