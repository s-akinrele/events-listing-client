import React, { Fragment } from 'react';
import { Container, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
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
          <Link to="/create-event">
            <Button variant="primary">Create Event</Button>
          </Link>
          </div>
        </Container>
      </Jumbotron>
    </Fragment>
  )
}

export default EventsJumbotron;