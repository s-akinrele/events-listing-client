import React, {Component} from 'react'
import Banner from '../../components/Banner/Banner'

import '../../styles/homePageController.scss'

class HomePageController extends Component {

  render() {
    return (
      <div className='home-page-controller'>
        <div className='bg-overlay'/>
        <Banner />
      </div>
    )
  }
}

export default HomePageController
