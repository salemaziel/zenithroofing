import React from "react";

import Systems from '../../../images/systems.jpg'
class SystemsBoxLeft extends React.Component {
  render() {
    return (
      <div className="box-left">
        {" "}
        <img src={Systems} className="img-fluid" />{" "}
      </div>
    );
  }
}

export default SystemsBoxLeft;
