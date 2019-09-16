import React, { Component } from 'react';
import {Button, Modal, Nav, Form} from 'react-bootstrap'

class SignUpController extends Component {
  constructor() {
    super()

    this.state = {
      showModal: false
    }
  }

  handleClose = () => this.setState({showModal: false});
  handleShow = () => this.setState({showModal: true})
  render() {
    return (
      <>
        <Nav.Link onClick={this.handleShow} >Sign Up</Nav.Link>
  
        <Modal show={this.state.showModal} onHide={this.handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
  
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button className="log-in-cta" onClick={this.handleClose}>
              Sign Up
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SignUpController;

