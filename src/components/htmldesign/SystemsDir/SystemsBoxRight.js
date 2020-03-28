import React from "react";
import SystemLogo from '../../../images/system-logo.jpg'


class SystemsBoxRight extends React.Component {
  render() {
    return (
      <div className="box-right">
        <h2>
          {" "}
          <img src={SystemLogo} className="img-fluid" />{" "}
          <span>Systems</span> We Work With{" "}
        </h2>
        <ul>
          <li>Composition Shingles</li>
          <li>Concrete Tile</li>
          <li>Clay S Tile</li>
          <li>Two-Piece Tile</li>
          <li>Single-Ply Membrane</li>
          <li>Torch-Applied Modified Bitumen</li>
        </ul>
      </div>
    );
  }
}

export default SystemsBoxRight;
