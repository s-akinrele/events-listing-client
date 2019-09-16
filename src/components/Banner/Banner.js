import React from 'react'
import {connect} from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap'
import SignUp from '../../containers/Auth/SignupController'
import LogIn from '../../containers/Auth/LogInController'
import {isLoggedIn, currentUser} from '../../helpers/AuthHelper'

import '../../styles/banner.scss'

const Banner = ({user}) => {
  return <div className='banner'>
    <Navbar>
      <Navbar.Brand href="#home">Meetups</Navbar.Brand>
      <Navbar.Toggle />
      {
        (isLoggedIn() || Object.entries(user).length) ?
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login" className="user-name">{currentUser(user).firstName}</a>
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

const mapStateToProps = ({user}) => ({...user})

export default connect(mapStateToProps)(Banner);
