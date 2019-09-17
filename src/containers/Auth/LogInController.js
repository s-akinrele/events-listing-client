import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Form, Alert } from 'react-bootstrap';
import { loginUser } from '../../requests/userRequest';

class LogInController extends Component {
  constructor() {
    super()

    this.state = {
      user: {
        email: '',
        password: ''
      },
      validated: false
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
    this.props.loginUser({ ...this.state.user })
  }

  render() {
    const { showModal, handleClose } = this.props;
    const { errorMessage } = this.props.user
    return (
      <Modal show={showModal} onHide={handleClose} animation={false}>
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
          {errorMessage && <Alert variant='danger'>{errorMessage}</Alert>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
            </Button>
          <Button className="log-in-cta" onClick={this.onSumbit}>
            Login
            </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = ({ user }) => ({...user})

export default connect(mapStateToProps, { loginUser })(LogInController);

