import React from "react";
import HeroBtnCallNow from "./HeroBtnCallNow";
import HeroBtnGetQuote from "./HeroBtnGetQuote";

import { Container, Row } from 'reactstrap'



class HeroHeaderSection extends React.Component {
  render() {
    return (
      <section className="hero-section">
        <Container>
          <Row>
            <div className="col-md-12">
              <h1>
                {" "}
                <img
                  src="images/logo-roof-only.png"
                  className="img-fluid"
                />{" "}
                Zenith{" "}
              </h1>
              <h2>Roofing</h2>
              <HeroBtnCallNow></HeroBtnCallNow>{" "}
              <HeroBtnGetQuote></HeroBtnGetQuote>{" "}
            </div>
          </Row>
          </Container>
      </section>
    );
  }
}

export default HeroHeaderSection;
