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
      }
    }
  }

  handleClose = () => this.setState({showModal: false});

  handleShow = () => this.setState({showModal: true});

  handleChange = (event) => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value
    this.setState({user})
  }

  onSumbit = () => {
    this.props.loginUser({...this.state.user})
  }

  render() {
    return (
      <>
        <Nav.Link onClick={this.handleShow} >Log in</Nav.Link>
  
        <Modal show={this.state.showModal} onHide={this.handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Log In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.handleChange} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
  
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleChange} />
              </Form.Group>
            </Form>
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

