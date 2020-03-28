import React from "react";
import SystemsBoxLeft from "./SystemsBoxLeft";
import SystemsBoxRight from "./SystemsBoxRight";

import { Row } from 'reactstrap'


class SystemsBox extends React.Component {
  render() {
    return (
      <div className="col-md-11 box">
        <Row className="d-flex flex-row">
          <div className="col-lg-6 my-auto">
            <SystemsBoxLeft></SystemsBoxLeft>
          </div>
          <div className="col-lg-6 my-auto">
            <Row className="justify-content-center">
              <div className="col-lg-10">
                <SystemsBoxRight></SystemsBoxRight>
              </div>
            </Row>
          </div>
        </Row>
      </div>
    );
  }
}

export default SystemsBox;
