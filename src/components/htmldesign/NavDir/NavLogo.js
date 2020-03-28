import React from "react";
import { Link } from 'gatsby'

import Logo from '../../../images/logo.png'

class NavLogo extends React.Component {
  render() {
    return (
      <div className="logo-site">
        <Link to="/" rel="preload">
          <img src={Logo} className="img-fluid" />
        </Link>
      </div>
    );
  }
}

export default NavLogo;
