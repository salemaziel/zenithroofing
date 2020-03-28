import React from "react";
import HeroBoxes1 from "./HeroBoxes1";
import HeroBoxes2 from "./HeroBoxes2";
import HeroBoxes3 from "./HeroBoxes3";
import { Row } from 'reactstrap'


class HeroBoxesSection extends React.Component {
  render() {
    return (
      <section className="hero-image-boxes">
        <div className="container-fluid">
          <Row style={{display: 'flex', flexDirection: 'row'}}>
            <div className="col-4">
              <HeroBoxes1></HeroBoxes1>
            </div>
            <div className="col-4">
              <HeroBoxes2></HeroBoxes2>
            </div>
            <div className="col-4">
              <HeroBoxes3></HeroBoxes3>
            </div>
          </Row>
        </div>
      </section>
    );
  }
}

export default HeroBoxesSection;
