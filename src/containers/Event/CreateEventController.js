import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap'

import Header from '../../components/Header';
import {signOut} from '../../requests/userRequest'

import '../../styles/_events-form.scss';

class CreateEventController extends Component {
  onSignOut = () => {
    this.props.signOut()
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <Header onSignOut={this.onSignOut} />
        <div className="create-event-controller">
          <Container>
            <Row>
              <Form>
                <Form.Group controlId="eventName">
                  <Form.Label>Event Name</Form.Label>
                  <Form.Control type="text" placeholder="Event Name" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows="5" />
                </Form.Group>
              </Form>
            </Row>
          </Container>

        </div>
      </div>

    )
  }
}

export default connect(null, { signOut })(CreateEventController)