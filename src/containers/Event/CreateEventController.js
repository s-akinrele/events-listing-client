import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap'

import Datetime from "react-datetime"
import "react-datetime/css/react-datetime.css";

import Header from '../../components/Header';
import ImageUploader from '../../components/Images/ImageUpload';
import {signOut} from '../../requests/userRequest';
import {createEvent} from '../../requests/eventRequest';

import '../../styles/_events-form.scss';

class CreateEventController extends Component {
  constructor() {
    super() 

    this.state = {
      name: '',
      description: '',
      start_date: '',
      end_date: '',
      file: {}
    }

    this._handleImageChange = this._handleImageChange.bind(this);
  }

  handleStartDateChange = date => {
    this.setState({start_date: date._d})
  };

  handleEndDateChange = date => {
    this.setState({end_date: date._d})
  }

  handleChange = (event) => {
    const form = event.currentTarget;
    const field = event.target.name;
    const value = event.target.value;
    form.checkValidity()
    this.setState({ [field]: value, validated: true })
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({file: {src: reader.result, name: encodeURIComponent(file.name)}});
    }

    if (file) reader.readAsDataURL(file)
  }

  onSignOut = () => {
    this.props.signOut()
    this.props.history.push('/');
  }

  onSumbit = () => {
    this.props.createEvent(this.state)
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
                  <Form.Control name="name" type="text" placeholder="Event Name" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="startDate">
                  <Form.Label>Event Start Date</Form.Label>
                  <Datetime onChange={this.handleStartDateChange} />
                </Form.Group>
                <Form.Group controlId="endDate">
                  <Form.Label>Event End Date</Form.Label>
                  <Datetime onChange={this.handleEndDateChange} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control name="description" as="textarea" rows="5" onChange={this.handleChange} />
                </Form.Group>
                <ImageUploader
                  handleSubmit={this._handleSubmit}
                  handleImageChange={this._handleImageChange}
                  imagePreviewUrl={this.state.file.src}
                />
              </Form>
              <Button className="create-event-cta" onClick={this.onSumbit}>
                Create Event
              </Button>
            </Row>
          </Container>
        </div>
      </div>

    )
  }
}

const mapStateToProps = ({ event }) => ({...event})
export default connect(mapStateToProps, { signOut, createEvent })(CreateEventController)