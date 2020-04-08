import React from "react";
import NavLogo from "./atoms/NavLogo";
import NavPages from "./atoms/NavPages";

import { Row } from 'reactstrap'

class NavRowFull extends React.Component {
  render() {
    return (
      <Row className="d-flex flex-row">
        <div className="col-md-4 my-auto">
          <Row className="d-flex flex-row">
            <div className="col-8 my-auto">
              <NavLogo></NavLogo>
            </div>
            <div className="col-4 text-right my-auto">
              <div className="navbar-toggle">
                {" "}
                <span className="icon-bar" /> <span className="icon-bar" />{" "}
                <span className="icon-bar" />{" "}
              </div>
    </div>
        </Row>
  
        </div>
        <div className="col-lg-8 my-auto navigation">
        <div class="col-md-8 my-auto">
          <NavPages />
          </div>
        </div>

      </Row>
    );
  }
}

export default NavRowFull;
