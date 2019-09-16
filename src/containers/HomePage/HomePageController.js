import React, {Component} from 'react'
import {connect} from 'react-redux'

import Banner from '../../components/Banner/Banner'

import {signOut} from '../../requests/userRequest'

import '../../styles/homePageController.scss'

class HomePageController extends Component {
  constructor() {
    super()
  }

  onSignOut = () => {
    this.props.signOut()
    this.props.history.push('/');
  }

  render() {
    return (
      <div className='home-page-controller'>
        <div className='bg-overlay'/>
        <Banner onSignOut={this.onSignOut} />
      </div>
    )
  }
}

export default connect(null, {signOut})(HomePageController)
