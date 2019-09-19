import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import Header from '../../components/Header';
import EventJumbotron from '../../components/Events/EventJumbotron';
import EventDetails from '../../components/Events/EventDetails';

import { signOut } from '../../requests/userRequest'
import {viewEvent, registerForEvent} from '../../requests/eventRequest'
import {currentUser} from '../../helpers/AuthHelper'

import '../../styles/homePageController.scss'

class EventsPage extends Component {
  onSignOut = () => {
    this.props.signOut()
    this.props.history.push('/');
  }

  componentDidMount() {
    this.props.viewEvent(this.props.match.params.id)
  }

  registerEvent = () => {
    const {event} = this.props
    const {user} = this.props.user
    const data = {
      event_id: event.id,
      user_id: currentUser(user).id
    }
    this.props.registerForEvent(data)
  }

  render() {
    const {name, start_date, image_url, description} = this.props.event
    const {user} = this.props.user
    return (
      <div>
        <Header onSignOut={this.onSignOut} />
        <EventJumbotron
          subtitle={start_date && moment(start_date).format("ddd, MMM Do YYYY")}
          title={name}
          imageUrl={image_url}
        />
        <EventDetails
          description={description}
          startDate={moment(start_date).format("ddd, MMM Do YYYY")}
          title={name}
          user={user}
          registerEvent={this.registerEvent}
        />
      </div>
    )
  }
}


const mapStateToProps = ({ event, user }) => ({ ...event, user })

export default connect(mapStateToProps, { signOut, viewEvent, registerForEvent })(EventsPage)
