import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../../components/Header';
import EventsJumbotron from '../../components/Events/Jumbotron';
import EventsLisiting from '../../components/Events/EventsListing';

import { signOut } from '../../requests/userRequest'

import '../../styles/homePageController.scss'

class HomePageController extends Component {
  constructor() {
    super()
  }

  componentDidMount() {

  }

  onSignOut = () => {
    this.props.signOut()
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <Header onSignOut={this.onSignOut} />
        <EventsJumbotron title="The real world is calling" subtitle="Join a local group to meet people, try something new, or do more of what you love." />
        <EventsLisiting />
      </div>
    )
  }
}

export default connect(null, { signOut })(HomePageController)
