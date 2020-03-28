import React from "react";
import FooterBox from "./FooterDir/FooterBox";

import { Row } from 'reactstrap'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container-fluid">
          <Row className="justify-content-center">
            <FooterBox></FooterBox>
          </Row>
        </div>
      </footer>
    );
  }
}

export default Footer;
