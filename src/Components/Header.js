import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


class Header extends Component {

    // We want to send this up to the main App Component - so we make it a property
    onLoginClick(){
        this.props.onLoginClick();
    }

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
                    <NavItem onClick={this.onLoginClick.bind(this)} href="#">Log In</NavItem>
                    <NavItem href="#">Sign Up</NavItem>
                </Nav>
            </Navbar>

        );
    }
}

export default Header;
