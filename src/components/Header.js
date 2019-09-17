import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SignupController from '../containers/Auth/SignupController'
import LogInController from '../containers/Auth/LogInController'
import Dropdown from 'react-bootstrap/Dropdown'

import { isLoggedIn, currentUser } from '../helpers/AuthHelper'

import '../styles/_header.scss';

class Header extends Component {

  state = {
    showSignupModal: false,
    showLoginModal: false
  }

  static getDerivedStateFromProps(nextProps) {
    const { user, loading } = nextProps
    if (!loading && Object.entries(user).length)
      return { showLoginModal: false, showSignupModal: false}

    return null
  }

  handleShowSignupModals = () => {
    this.setState({
      showSignupModal: true,
      showLoginModal: false
    })
  }

  handleCloseSignupModal = () => {
    this.setState({
      showSignupModal: false,
      showLoginModal: false
    })
  }

  handleShowLoginModal = () => {
    this.setState({
      showSignupModal: false,
      showLoginModal: true
    })
  }

  handleCloseLoginModal = () => {
    this.setState({
      showSignupModal: false,
      showLoginModal: false
    })
  }

  render() {
    const { onSignOut, user } = this.props
    const { showSignupModal, showLoginModal } = this.state;
    return (
      <header>
        <Container>
          <Row>
            <Col>
              <nav><Link to='/' className="navbar-brand">MEET UP</Link> </nav>
            </Col>
            <Col>
              <nav className="nav-right">
                {(isLoggedIn() || Object.entries(user).length) ?
                  <Fragment>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Welcome {currentUser(user).firstName}
                    </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="/create-event">Create Event</Dropdown.Item>
                        <Dropdown.Item onClick={onSignOut}>Log out</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Fragment>
                  :
                  <Fragment>
                    <Link to='#' onClick={this.handleShowLoginModal}>Log in</Link>
                    <Link to='#' onClick={this.handleShowSignupModals}>Sign up</Link>
                  </Fragment>
                }
              </nav>
            </Col>
          </Row>
        </Container>
        <SignupController showModal={showSignupModal} handleClose={this.handleCloseSignupModal} />
        <LogInController showModal={showLoginModal} handleClose={this.handleCloseLoginModal} />
      </header>
    )
  }
}
const mapStateToProps = ({ user }) => ({ ...user })

export default connect(mapStateToProps)(Header);
