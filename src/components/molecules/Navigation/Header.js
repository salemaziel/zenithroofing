import React from 'react';
//import NavBarCustom from './NavDir/NavBarCustom';
import NavbarRowFull from "./NavRowFull"

/*class Header extends React.Component {
  render() {
    return (*/
const Header = () => (
  <header>
    <div className="container-fluid">
     
      <NavbarRowFull />
    </div>
  </header>
);

export default Header;
