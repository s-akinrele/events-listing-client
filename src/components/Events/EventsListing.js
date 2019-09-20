import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import moment from 'moment';
import { Link } from 'react-router-dom';
import '../../styles/_events-cards.scss';

const EventsLisiting = ({events = []}) => {
    return (
      <Container>
        <Row>
          <div>
            <h2>Events</h2>
            <p>Adventures by region See what's happening around you </p>
          </div>
        </Row>
        <Row>
        { events.map((event, index) => {
            return (
                <Col key={index}>
                  <Link className="events-card-wrapper" to={`/events/${event.id}`}>
                    <Card className="events-card">
                      <Card.Body>
                        <p className="events-date">{moment(event.start_date).format("ddd, MMM DD, h:mm a")}</p>
                        <Card.Title>{event.name}</Card.Title>
                        <Card.Text>
                          {event.description}
                        </Card.Text>
                        <Card.Link href="#">
                          <div className="attend-button">
                            <p className="number-of-attendes">{event.attendees_count} attendee(s)</p>
                            <Button>More</Button>
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