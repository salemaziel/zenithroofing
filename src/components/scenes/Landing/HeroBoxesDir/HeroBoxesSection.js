import React from 'react';
import {
  Block1,
  Block2,
  Block3
} from '../../../images/index'

import { Row } from 'reactstrap';

class HeroBoxesSection extends React.Component {
  render() {
    return (
      <section className="hero-image-boxes">
        <div className="container-fluid">
          <Row style={{ display: 'flex', flexDirection: 'row' }}>
            <div className="col-4">
              <div className="boxes">
                <img src={Block1} className="img-fluid" />
              </div>
            </div>
            <div className="col-4">
              <div className="boxes">
                <img src={Block2} className="img-fluid" />
              </div>
            </div>
            <div className="col-4">
              <div className="boxes">
                <img src={Block3} className="img-fluid" />
              </div>
            </div>
          </Row>
        </div>
      </section>
    );
  }
}

export default HeroBoxesSection;
