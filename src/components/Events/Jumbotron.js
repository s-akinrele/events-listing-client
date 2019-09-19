import React, { Fragment } from 'react';
import { Container, Button } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';

import '../../styles/_jumbotron.scss';

const EventsJumbotron = ({ title, subtitle }) => {
  return (
    <Fragment>
      <Jumbotron fluid>
        <div className="bg-overlay"></div>
        <Container>
          <div className="inner">
            <h1>{title}</h1>
            <p>
            {subtitle}
          </p>
          <Button variant="primary">Join Meetup</Button>
          </div>
        </Container>
      </Jumbotron>
    </Fragment>
  )
}

export default EventsJumbotron;