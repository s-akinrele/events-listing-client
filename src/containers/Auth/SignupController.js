import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Form, Alert } from 'react-bootstrap'
import { signupUser } from '../../requests/userRequest';

class SignUpController extends Component {
  constructor() {
    super()

    this.state = {
      user: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  }

  handleChange = (event) => {
    const form = event.currentTarget;
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value
    form.checkValidity()
    this.setState({ user, validated: true })
  }

  onSumbit = () => {
    this.props.signupUser({ ...this.state.user })
  }

  render() {
    const { showModal, handleClose } = this.props;
    const { errorMessage } = this.props.user
    return (
      <Modal show={showModal} onHide={handleClose} animation={false}>
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
          {errorMessage && <Alert variant='danger'>{errorMessage}</Alert>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
            </Button>
          <Button className="log-in-cta" onClick={this.onSumbit}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps, { signupUser })(SignUpController);

