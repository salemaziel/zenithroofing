import React from "react";
//import NavListItem from "./NavListItem";
import NavListItemRequestQuote from "./NavListItemRequestQuote";

import { NavLink, NavItem } from 'reactstrap'
import { Link } from 'gatsby'

class NavPages extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <NavItem><NavLink className="nav-link" to="/" tag={Link} style={{ fontSize: 18, fontStyle: 'bold',  }}>HOME</NavLink></NavItem>
          <NavItem><NavLink className="nav-link" to="/" tag={Link} style={{ fontSize: 18, fontStyle: 'bold',  }}>ABOUT</NavLink></NavItem>
          <NavItem><NavLink className="nav-link" to="/" tag={Link} style={{ fontSize: 18, fontStyle: 'bold',  }}>SERVICES</NavLink></NavItem>
          <NavItem><NavLink className="nav-link" to="/" tag={Link} style={{ fontSize: 18, fontStyle: 'bold',  }}>SYSTEMS</NavLink></NavItem>
          <NavItem><NavLink className="nav-link" to="/" tag={Link} style={{ fontSize: 18, fontStyle: 'bold',  }}>CONTACT</NavLink></NavItem>
          <NavListItemRequestQuote></NavListItemRequestQuote>
        </ul>
      </div>
    );
  }
}

export default NavPages;
