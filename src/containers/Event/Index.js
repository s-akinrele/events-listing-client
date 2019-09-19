import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../../components/Header';
import EventsJumbotron from '../../components/Events/Jumbotron';
import EventsLisiting from '../../components/Events/EventsListing';
import EventDetails from '../../components/Events/EventDetails';

import { signOut } from '../../requests/userRequest'

import '../../styles/homePageController.scss'

class EventsPage extends Component {
  onSignOut = () => {
    this.props.signOut()
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <Header onSignOut={this.onSignOut} />
        <EventsJumbotron subtitle="Thursday, September 19, 2019" title="Cool Tips for writing the Advanced Financial Modeler Exams" />
        <EventDetails />
        <EventsLisiting />
      </div>
    )
  }
}

export default connect(null, { signOut })(EventsPage)
