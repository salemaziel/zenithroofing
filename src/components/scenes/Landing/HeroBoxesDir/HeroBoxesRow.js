import React from "react";
import HeroBoxes from "./HeroBoxes";
import { Row } from 'reactstrap'


class HeroBoxesRow extends React.Component {
  render() {
    return (
      <Row>
        <div className="col-4">
          <HeroBoxes></HeroBoxes>
        </div>
        <div className="col-4">
          <HeroBoxes></HeroBoxes>
        </div>
        <div className="col-4">
          <HeroBoxes></HeroBoxes>
        </div>
      </Row>
    );
  }
}

export default HeroBoxesRow;
