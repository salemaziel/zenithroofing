import React from "react";
import NavRowFull from "./NavDir/NavRowFull";
//import NavbarGlobal from "./NavDir/NavBarGlobal"


/*class Header extends React.Component {
  render() {
    return (*/
const Header = () => (
      <header>
        <div className="container-fluid">
          <NavRowFull></NavRowFull>
          {/*<NavbarGlobal />*/}
        </div>
      </header>
    );


export default Header;
