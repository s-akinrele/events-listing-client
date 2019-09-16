import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import SignUp from '../Auth/Signup'
import LogIn from '../Auth/LogIn'

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
            <SignUp />
            <LogIn />
          </Nav>
        </Navbar.Collapse>
      }

    </Navbar>
  </div>
}

export default Banner
