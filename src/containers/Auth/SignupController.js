import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Button, Modal, Nav, Form} from 'react-bootstrap'
import {signupUser} from '../../requests/userRequest';

class SignUpController extends Component {
  constructor() {
    super()

    this.state = {
      showModal: false,
      user: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  }

  handleClose = () => this.setState({showModal: false});

  handleShow = () => this.setState({showModal: true})

  handleChange = (event) => {
    const form = event.currentTarget;
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value
    form.checkValidity() 
    this.setState({user, validated: true})
  }

  onSumbit = () => {
    this.props.signupUser({...this.state.user})

    // if (this.props.user.user.error) {
    //   this.handleClose()
    // }
  }

  render() {
    console.log(this.state.user)
    return (
      <>
        <Nav.Link onClick={this.handleShow} >Sign Up</Nav.Link>
  
        <Modal show={this.state.showModal} onHide={this.handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form noValidate validated={this.state.validated}>
              <Form.Group controlId="validationFirstName">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="first_name"
                  placeholder="First name"
                  onChange={this.handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="validationLastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="last_name"
                  placeholder="Last name"
                  onChange={this.handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={this.handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
  
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicPasswordConfirmation">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  name="password_confirmation"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button className="log-in-cta" onClick={this.onSumbit}>
              Sign Up
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = ({user}) => ({user})

export default connect(mapStateToProps, {signupUser})(SignUpController);

