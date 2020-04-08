import React from 'react';
import BrownConcreteRoof from '../../../images/';

class ActionBanner extends React.Component {
  render() {
    return (
      <section
        className="action-wrap-layout1 bg-common"
        data-bg-image="img/figure/banner-shape.png"
        style={{
          backgroundImage: 'url("img/figure/banner-shape.png")',
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 col-12">
              <div className="action-box-layout1">
                <h2 className="item-title">
                  Get Your Roofing Project Started Today!
                </h2>
              </div>
            </div>
            <div className="col-lg-3 col-12 d-flex justify-content-lg-end justify-content-center">
              <div className="action-box-layout1">
                <a
                  href="#"
                  className="btn-fill-xl box-shadow bg-textprimary text-accent"
                >
                  GET A QUOTE
                  <i className="fas fa-angle-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ActionBanner
