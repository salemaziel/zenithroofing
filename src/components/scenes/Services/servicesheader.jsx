import React from 'react';
import BrownConcreteRoof from '../../../images/'


class ServicesHeader extends React.Component {
  render() {
    return (
      <section
        className="inner-page-banner servicesBanner"
        data-bg-image={BrownConcreteRoof}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumbs-area">
                <h1>Our Services</h1>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ServicesHeader