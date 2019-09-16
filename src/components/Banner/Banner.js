import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

import SignupController from '../../containers/Auth/SignupController'
import LogInController from '../../containers/Auth/LogInController'

import {isLoggedIn, currentUser} from '../../helpers/AuthHelper'

import '../../styles/banner.scss'

const Banner = ({user, onSignOut}) => {
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
          <Navbar.Text>
            <Link to='#' className="sign-out" onClick={onSignOut}>Log out</Link> 
          </Navbar.Text>
        </Navbar.Collapse>  :
          <Navbar.Collapse className="justify-content-end">
          <Nav>
            <SignupController />
            <LogInController />
          </Nav>
        </Navbar.Collapse>
      }

    </Navbar>
  </div>
}

const mapStateToProps = ({user}) => ({...user})

export default connect(mapStateToProps)(Banner);
