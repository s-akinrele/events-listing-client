import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import Header from '../../components/Header';
import EventJumbotron from '../../components/Events/EventJumbotron';
import EventDetails from '../../components/Events/EventDetails';
import EventAttendees from '../../components/Events/EventAttendees';

import { signOut } from '../../requests/userRequest'
import {viewEvent, registerForEvent} from '../../requests/eventRequest'
import {currentUser} from '../../helpers/AuthHelper'
import loader from '../../images/loader.gif';

import '../../styles/homePageController.scss'

class EventsPage extends Component {
  constructor() {
    super()

    this.state = {
      registeredUser: false
    }
  }

  onSignOut = () => {
    this.props.signOut()
    this.props.history.push('/');
  }

  componentDidMount() {
    this.props.viewEvent(this.props.match.params.id)
  }


  static getDerivedStateFromProps(nextProps) {
    const {event, loading} = nextProps
    if (!loading && Object.entries(event).length) {
      return {registeredUser: EventsPage.alreadyRegistered(nextProps)}
    }

    return null
  }

  attendEvent = () => {
    const {event} = this.props
    const {user} = this.props.user
    const data = {
      event_id: event.id,
      user_id: currentUser(user).id
    }
    this.props.registerForEvent(data)
  }

  static alreadyRegistered = (props) => {
    const {user} = props.user
    const currentUserId = currentUser(user).id
    const foundUser = props.event.users && props.event.users.find((registeredUser) => registeredUser.id === currentUserId)
    return !!foundUser
  }

  render() {
    const {name, start_date, image_url, description} = this.props.event
    const {user} = this.props.user
    const {loading} = this.props
    let buttonText = loading ? <img src={loader} alt="loading..." /> : 'Attend';
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
          attendEvent={this.attendEvent}
          buttonText={buttonText}
          loading={loading}
          alreadyRegistered={this.state.registeredUser}
        />
        <EventAttendees users={this.props.event.users} />
      </div>
    )
  }
}


const mapStateToProps = ({ event, user }) => ({ ...event, user })

export default connect(mapStateToProps, { signOut, viewEvent, registerForEvent })(EventsPage)
