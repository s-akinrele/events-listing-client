import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Button , Form, Alert} from 'react-bootstrap';
import classnames from 'classnames'

import Datetime from "react-datetime"
import "react-datetime/css/react-datetime.css";

import Header from '../../components/Header';
import ImageUploader from '../../components/Images/ImageUpload';
import {signOut} from '../../requests/userRequest';
import {createEvent} from '../../requests/eventRequest';
import loader from '../../images/loader.gif';


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

  componentDidUpdate(prevProps, prevState) {
    if (Object.entries(prevProps.event.event).length !== Object.entries(this.props.event.event).length) {
      return this.props.history.push(`/events/${this.props.event.event.id}`);
    }
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
    const {errorMessage, loading} = this.props.event
    let buttonText = loading ? <img src={loader} alt="loading..." /> : 'Create Event';
    return (
      <div>
        <Header onSignOut={this.onSignOut} />
        <div className="create-event-controller">
          <Container>
            {errorMessage && <Alert variant='danger'>{errorMessage}</Alert>}
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
              <Button className={classnames("create-event-cta", {"disabled": loading})} onClick={this.onSumbit}>
                {buttonText}
              </Button>
            </Row>
          </Container>
        </div>
      </div>

    )
  }
}

const mapStateToProps = ({ event }) => ({event})
export default connect(mapStateToProps, { signOut, createEvent })(CreateEventController)