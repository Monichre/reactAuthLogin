import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


class Header extends Component {

    render() {
        return (

            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        FriendSource
                    </Navbar.Brand>
                </Navbar.Header>

                <Nav>
                    <NavItem href="#">Authors</NavItem>
                    <NavItem href="#">How It Works</NavItem>
                    <NavItem href="#">Log In</NavItem>
                    <NavItem href="#">Sign Up</NavItem>
                </Nav>
            </Navbar>

        );
    }
}

export default Header;
