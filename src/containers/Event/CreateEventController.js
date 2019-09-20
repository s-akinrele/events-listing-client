import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Button , Form, Alert} from 'react-bootstrap';
import classnames from 'classnames'
import validate from 'validate.js';
import moment from 'moment'

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
      name: null,
      description: null,
      start_date: '',
      end_date: '',
      file: {},
      errors: ''
    }

    this._handleImageChange = this._handleImageChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (Object.entries(prevProps.event.event).length !== Object.entries(this.props.event.event).length) {
      return this.props.history.push(`/events/${this.props.event.event.id}`);
    }
  }

  handleStartDateChange = date => {
    this.setState({start_date: date._d, errors: ''})
  };

  handleEndDateChange = date => {
    this.setState({end_date: date._d, errors: ''})
  }

  handleChange = (event) => {
    const form = event.currentTarget;
    const field = event.target.name;
    const value = event.target.value;
    form.checkValidity()
    this.setState({ [field]: value, validated: true, errors: '' })
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    if ((file.size / 1000000) <= 2) {
      reader.onloadend = () => {
        this.setState({
          file: {
          src: reader.result,
          name: encodeURIComponent(file.name.split('.')[0])
        },
          fileError: ''
      });
      }
      reader.readAsDataURL(file) 
    } else {
      this.setState({
        file: {},
        errors: 'File is too large only files not greater than 2MB is allowed'
      })
    }
  }

  onSignOut = () => {
    this.props.signOut()
    this.props.history.push('/');
  }

  error = (errors) => {
    if (errors instanceof Error) {
      // This means an exception was thrown from a validator
      console.err("An error ocurred", errors);
    } else {
      this.setState({errors: Object.values(errors).flat().join('|')});
    }
  }

  validateForm = () => {
    validate.extend(validate.validators.datetime, {
      // The value is guaranteed not to be null or undefined but otherwise it
      // could be anything.
      parse: function(value, options) {
        return +moment.utc(value);
      },
      // Input is a unix timestamp
      format: function(value, options) {
        var format = options.dateOnly ? "YYYY-MM-DD" : "YYYY-MM-DD hh:mm:ss";
        return moment.utc(value).format(format);
      }
    });
    
    const constraints = {
      name: {presence: true},
      description: {presence: true},
      start_date: {
        presence: true,
        datetime: {
          dateOnly: false,
          earliest: moment.utc().toISOString()
        }
      },
      end_date: {
        presence: true,
        datetime: {
          dateOnly: false,
          earliest: moment.utc().toISOString()
        }
      },
  };
    validate.async(this.state, constraints).then(this.onSumbit, this.error);
  }

  onSumbit = () => { this.props.createEvent(this.state) }


  render() {
    const {errorMessage, loading} = this.props.event
    const {errors} = this.state
    let buttonText = loading ? <img src={loader} alt="loading..." /> : 'Create Event';
    return (
      <div>
        <Header onSignOut={this.onSignOut} />
        <div className="create-event-controller">
          <Container>
            {(errorMessage || errors) && <Alert variant='danger'>{(errorMessage || errors)}</Alert>}
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
              <Button className={classnames("create-event-cta", {"disabled": loading})} onClick={this.validateForm}>
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