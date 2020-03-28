import React from "react";
import CustomerLove from '../../images/customers-love.jpg'

class CustomerLovesSection extends React.Component {
  render() {
    return (
      <section className="customer-loves">
        {" "}
        <img src={CustomerLove} className="img-fluid" />{" "}
      </section>
    );
  }
}

export default CustomerLovesSection;
