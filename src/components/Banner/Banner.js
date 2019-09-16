import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

import '../../styles/banner.scss'

const Banner = ({isLoggedIn}) => {
  return <div className='banner'>
    <Navbar>
      <Navbar.Brand href="#home">Meetups</Navbar.Brand>
      <Navbar.Toggle />
      {
        isLoggedIn ?
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>  :
          <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#deets">Sign up</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Log in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      }

    </Navbar>
  </div>
}

export default Banner
