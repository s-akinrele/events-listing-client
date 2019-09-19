import React, { Fragment } from 'react';
import { Container, Button } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';

import '../../styles/_event-jumbotron.scss';

const EventJumbotron = ({ title, subtitle, imageUrl }) => {
  return (
    <Fragment>
      <Jumbotron className="event-jumbotron" fluid style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="bg-overlay"></div>
        <Container>
          <div className="inner">
            <h1>{title}</h1>
            <p>
            {subtitle}
          </p>
          </div>
        </Container>
      </Jumbotron>
    </Fragment>
  )
}

export default EventJumbotron;