import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Button, Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink as NavCSS } from 'reactstrap';
import { logout } from '../../state/actions';


const NavBar = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem("token");
        dispatch(logout());
        navigate('/login')
    }

    const links = [
        {
            title: "Users",
            to: "/users"
        },
        {
            title: "Blogs",
            to: "/blogs"
        }
    ]
    
    return (
        <div>
            <Navbar color='dark' dark expand="md">
                <NavbarBrand>
                    React Training
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck(){}} />
                <Collapse navbar>
                    <Nav className="me-auto" navbar >
                        {links.map(e => {
                            return <NavLink 
                                to={e.to} 
                                style={ ({ isActive }) => { 
                                    return {
                                        display:"block", 
                                        color:isActive?"#fff":"#afafaf", 
                                        textDecoration:"None",
                                        padding: "0 1rem"
                                        } 
                                    }
                                }
                            >
                                {e.title}
                            </NavLink>
                        })}
                        
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
