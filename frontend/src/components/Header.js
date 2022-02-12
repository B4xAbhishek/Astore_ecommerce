import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import Category from './Category'

import { logout } from '../actions/userActions'
import './Header.css'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar className="navbar" expand='lg' collapseOnSelect>
        <Container>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <LinkContainer to='/'>
            <Navbar.Brand>
               The Astore
              </Navbar.Brand>
          </LinkContainer>
          {/* <Navbar.Toggle aria-controls='basic-navbar-nav' /> */}
          <Navbar.Collapse id='basic-navbar-nav'>
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Route render={({ history }) => <Category history={history} />} />

            <Nav className='ml-auto navbar__black'>
              {/* <LinkContainer to='/cart'>
                <Nav.Link >
                  <i className='fas fa-shopping-bag navbar__cart'></i> Cart
                </Nav.Link>
              </LinkContainer> */}
              {userInfo ? (
                <NavDropdown className="navbar__black" title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link className="navbar__black">
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item >Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
          <LinkContainer to='/cart'>
                <Nav.Link >
                  <i className='fas fa-shopping-bag navbar__cart'></i> Cart
                </Nav.Link>
              </LinkContainer>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
