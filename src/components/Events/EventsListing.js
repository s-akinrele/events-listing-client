import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/_events-cards.scss';

const EventsLisiting = ({events}) => {
    return (
      <Container>
        <Row>
          <div>
            <h2>Events near you</h2>
            <p>Adventures by region See what's happening soon in your area </p>
          </div>
        </Row>
        <Row>
        {
          events.length && events.map((event, index) => {
            console.log(event, 'event')
            return (
                <Col key={index}>
                  <Link className="events-card-wrapper" to={`/events/${event.id}`}>
                    <Card className="events-card">
                      <Card.Body>
                        <p className="events-date">THU, SEP 19, 11:00AM</p>
                        <Card.Title>{event.name}</Card.Title>
                        <Card.Text>
                          {event.description}
                        </Card.Text>
                        <Card.Link href="#">
                          <div className="attend-button">
                            <p className="number-of-attendes">500 attendes</p>
                            <Button >View More</Button>
                          </div>
                        </Card.Link>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
            )
          })
        }
        </Row>

      </Container>
    )
}

export default EventsLisiting;