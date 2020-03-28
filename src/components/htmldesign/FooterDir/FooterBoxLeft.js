import React from "react";

class FooterBoxLeft extends React.Component {
  render() {
    return (
      <div className="box-one">
        <div className="logo">
          <img src="images/logo.png" className="img-fluid" />
        </div>
        <div className="social-icon">
          {" "}
          <a href="#">
            <span className="fa fa-facebook-f" />
          </a>{" "}
          <a href="#">
            <span className="fa fa-twitter" />
          </a>{" "}
          <a href="#">
            <span className="fa fa-pinterest-p" />
          </a>{" "}
          <a href="#">
            <span className="fa fa-envelope" />
          </a>{" "}
        </div>
      </div>
    );
  }
}

export default FooterBoxLeft;
