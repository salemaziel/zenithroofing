import React from "react";
import NavListItemRequestQuote from "./NavListItemRequestQuote";

class NavPagesList extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Systems</a>
          </li>
          <li>
            <a href="#">Site Map</a>
          </li>
          <NavListItemRequestQuote></NavListItemRequestQuote>
        </ul>
      </nav>
    );
  }
}

export default NavPagesList;
