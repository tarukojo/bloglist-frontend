import React from 'react'
import { BrowserRouter as NavLink } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
  
const Menu = () => (
  <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      Blog List App
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem href="#">   
        <NavLink to="/blogs" activeStyle={{
          fontWeight: 'bold',
          color: 'red'
        }}>Blogs</NavLink>&nbsp;
      </NavItem>
      <NavItem href="#">
        <NavLink to="/users" activeStyle={{
          fontWeight: 'bold',
          color: 'red'
        }}>Users</NavLink>&nbsp;
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

export default Menu
