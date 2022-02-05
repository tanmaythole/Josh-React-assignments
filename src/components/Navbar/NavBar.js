import React from 'react';
import { Button, Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink } from 'reactstrap';

const NavBar = ({ setIsLoggedIn }) => {
    const logOut = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
    }

    return (
        <div>
            <Navbar color='dark' dark expand="md">
                <NavbarBrand>
                    React Training
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck(){}} />
                <Collapse navbar>
                    <Nav className="me-auto" navbar >
                        <NavItem>
                            <NavLink>
                                Components
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        <Button onClick={()=>logOut()} color="danger">LogOut</Button>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;
