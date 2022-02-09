import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { logout } from '../../state/actions';


const NavBar = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem("token");
        dispatch(logout());
        navigate('/login')
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
