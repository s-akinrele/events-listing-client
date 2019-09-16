import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Modal, Nav, Form} from 'react-bootstrap';
import {loginUser} from '../../requests/userRequest';

class LogInController extends Component {
  constructor() {
    super()

    this.state = {
      showModal: false,
      user: {
        email: '',
        password: ''
      },
      validated: false
    }
  }

  static getDerivedStateFromProps(nextProps) {
    const {user, loading} = nextProps.user

    if (!loading && Object.entries(user).length)
      return {showModal: false}

    return null
  }

  handleClose = () => this.setState({showModal: false});

  handleShow = () => this.setState({showModal: true});

  handleChange = (event) => {
    const form = event.currentTarget;
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value
    form.checkValidity() 
    this.setState({user, validated: true})
  }

  onSumbit = () => {
    this.props.loginUser({...this.state.user})
  }

  render() {
     const {errorMessage} = this.props.user
    return (
      <>
        <Nav.Link onClick={this.handleShow} >Log in</Nav.Link>
  
        <Modal show={this.state.showModal} onHide={this.handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Log In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form noValidate validated={this.state.validated}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" name="email" placeholder="Enter email" onChange={this.handleChange} />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email address
                </Form.Control.Feedback>
              </Form.Group>
  
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                <Form.Control.Feedback type="invalid">
                  Please enter your password.
                </Form.Control.Feedback>
              </Form.Group>
            </Form>
            {errorMessage && <span>{errorMessage}</span>}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button className="log-in-cta" onClick={this.onSumbit}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = ({user}) => ({user})

export default connect(mapStateToProps, {loginUser})(LogInController);

