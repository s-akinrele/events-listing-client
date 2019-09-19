import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../../components/Header';
import EventsJumbotron from '../../components/Events/Jumbotron';
import EventsLisiting from '../../components/Events/EventsListing';

import { signOut } from '../../requests/userRequest';
import { viewAllEvents } from '../../requests/eventRequest';

import '../../styles/homePageController.scss'

class EventsPage extends Component {
  componentDidMount() {
    this.props.viewAllEvents()
  }

  onSignOut = () => {
    this.props.signOut()
    this.props.history.push('/');
  }

  render() {
    const {events} = this.props.event
    return (
      <div>
        <Header onSignOut={this.onSignOut} />
        <EventsJumbotron subtitle="Take a look at events and find the one that you find interesting" title="View All Events" />
        <EventsLisiting events={events} />

      </div>
    )
  }
}

const mapStateToProps = ({ event }) => ({ event })
export default connect(mapStateToProps, { signOut, viewAllEvents })(EventsPage)
