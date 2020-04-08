import React from "react";
import { CustomersLove } from '../../../images/index'

class CustomerLovesSection extends React.Component {
  render() {
    return (
      <section className="customer-loves">
        {" "}
        <img src={CustomersLove} className="img-fluid" />{" "}
      </section>
    );
  }
}

export default CustomerLovesSection;
