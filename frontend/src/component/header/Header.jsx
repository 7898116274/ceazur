import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { SET_ACTIVE_USER } from '../../redux/slice/Authslice';

// bootstrap
import { Navbar, Container, Form, Button, Col } from "react-bootstrap";

// Mui
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
      const [isLoggedIn, setIsLoggedIn] = useState(false);
      const dispatch = useDispatch();

      // Function to handle user logout
      const handleLogout = () => {
            // Perform logout operations
            setIsLoggedIn(false); // Set isLoggedIn to false
            dispatch(SET_ACTIVE_USER({}));
      };

      return (
            <>
                  <Navbar className="bg-body-tertiary">
                        <Container className="bg-body-tertiary">
                              <Col className="bg-body-tertiary">
                                    <Navbar.Brand href="/">Ceazur</Navbar.Brand>
                              </Col>
                              <Col className="d-flex justify-content-center bg-body-tertiary">
                                    <Form className='d-flex align-items-center rounded-pill border'>
                                          <Form.Control
                                                type="search"
                                                placeholder="Search"
                                                className="border-0 rounded-pill"
                                                aria-label="Search"
                                          />
                                          <Button variant="link" className='border-0 bg-transparent'>
                                                <SearchIcon />
                                          </Button>
                                    </Form>
                              </Col>
                              {isLoggedIn ? (
                                    <Col className="bg-body-tertiary">
                                          <Navbar.Collapse className="justify-content-end">
                                                <div className='d-flex gap-3'>
                                                      <a href='/cart'><ShoppingCartIcon /></a>
                                                      <a href="/wishlist"><FavoriteIcon /></a>
                                                      <a href='/account'><AccountCircleIcon /></a>
                                                      <Button variant="link" onClick={handleLogout}>Logout</Button>
                                                </div>
                                          </Navbar.Collapse>
                                    </Col>
                              ) : (
                                    <Col className="bg-body-tertiary">
                                          <Navbar.Collapse className="justify-content-end">
                                                <div className='d-flex gap-3'>
                                                      <a href='/login'>Login</a>
                                                      <a href='/register'>Register</a>
                                                </div>
                                          </Navbar.Collapse>
                                    </Col>
                              )}
                        </Container>
                  </Navbar>
            </>
      );
}

export default Header;
