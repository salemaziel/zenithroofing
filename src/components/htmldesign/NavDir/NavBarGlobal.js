import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Row
} from 'reactstrap';
import { Link } from 'gatsby'
//import Logo from '../../../images/logo.png'
//import '../../../css/navbar.css'
import "bootstrap/dist/css/bootstrap.min.css";

import NavLogo from "./NavLogo";
import NavListItemRequestQuote from './NavListItemRequestQuote'
import NavPages from './NavPages';

class NavbarGlobal extends React.Component {
   state = {
        isOpen: false,
        width: '0px',
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    openNav = () => {
        this.setState({
            width: '270px',
        })
    }

    closeNav = () => {
        this.setState({
            width: '0px',
        })
    }


    render() {
        return (
            <div>
      <Row className="d-flex flex-row">
        <div className="col-md-4 my-auto">
          <Row className="d-flex flex-row">
            <div className="col-8 my-auto">
                        <NavbarBrand to="/" tag={Link} className="order-0">
                            <NavLogo />
                        </NavbarBrand>
                        </div>
                        <div className="col-4 text-right my-auto">
                        <NavbarToggler onClick={this.toggle} />
                        </div>
                        <Collapse isOpen={this.state.isOpen} navbar style={{ textAlign: 'center' }}>
                            
                            <Nav className="mx-auto order-1 " navbar style={{ marginTop: 18, fontWeight: 'bold', display: 'flex' }}>
            
                                
                                
                            </Nav>
                        </Collapse>
                        <NavPages />
                        </Row>
                    </div>
                    </Row>
                {/* Hamburger Navbar for smaller screens */}
                <div
                    className="Hamburger-Navbar"
                    style={{
                        margin: '0 auto',
                        maxWidth: 960,
                        padding: '1.45rem 1.0875rem',
                        color: '#ffc529',
                    }}>
                    <h1 style={{ margin: 0, display: 'inline-block' }}>
                        <Link
                            to="/"
                            className="siteTitle"
                            style={{
                                textDecoration: 'none',
                                width: "5px",
                                height: "5px"
                            }}
                        >
                            <NavLogo />
                        </Link>
                    </h1>

                    <div
                        id="mySidenav"
                        className="sidenav"
                        style={{ width: this.state.width, height: '100%', }}
                    >
                        <div>
                            <a
                                href="javascript:void(0)"
                                className="closebtn"
                                onClick={this.closeNav}
                            >
                                &times;
                            </a>
                        </div>
                        <Link className="list" to="/">
                            HOME
                        </Link>
                        <Link className="list" to="/about">
                            ABOUT
                        </Link>
                        <Link className="list" to="/blog">
                            BLOG
                       </Link>     

                        {/**<Link className="list" to="/faq">
                            FAQ
                        </Link>**/}
                        <Link className="list" to="/contact">
                            CONTACT
                        </Link>

                        <div style={{padding: 20}}>
                            <div className="donate-btn-container" style={{paddingTop: 10, paddingBottom: 10}}>
                                <a href="https://donorbox.org/global-lighting-project" id="donate-btn-hamburger" >Donate</a>
                            </div>
                        </div>

                    </div>
                  
                    <span
                        className="openNavBtn"
                        style={{ fontSize: '40px', marginTop: 8, cursor: 'pointer', float: 'right' }}
                        onClick={this.openNav}
                    >
                        &#9776;
                    </span>
                  
                </div> 
                {/**</Navbar>**/} 
            </div>  
                
        )
    }
}    

                        
export default NavbarGlobal