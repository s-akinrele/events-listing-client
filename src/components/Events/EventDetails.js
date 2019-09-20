import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import classnames from 'classnames'

import {isLoggedIn} from '../../helpers/AuthHelper'
import '../../styles/_event-details.scss'

const EventDetails = ({description, startDate, title, user, registerEvent, buttonText, loading}) => {
  return (
    <div>
      <Container className="event-details">
        <Row>
          <Col xs={12} md={8}>
            <h2>Event Details</h2>
            <p style={{ lineHeight: "2", margin: "3rem 0" }}>
              {description}
          </p>
          </Col>

          <Col xs={6} md={4}>
            <Card className="events-card" style={{ margin: "3rem 0"}}>
              <Card.Body>
                <p className="events-date">{startDate}</p>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  Find it interesting? Please click the Attend button to register for this event
                  </Card.Text>
                  <div className="attend-button">
                    {(isLoggedIn() || Object.entries(user).length) ?
                      <Button className={classnames("attend-event-cta", {"disabled": loading})} onClick={registerEvent}>{buttonText}</Button> :
                      <div>Please signup or login in to register for this event</div>
                    }
                  </div>
              </Card.Body>
            </Card>

          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default EventDetails;