import React, {Component} from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/_events-cards.scss';

const EventsLisiting = ({eventId, startDate, description, viewEvent, name}) => {
    return (
      <Container>
        <Row>
          <div>
            <h2>Events near you</h2>
            <p>Adventures by region See what's happening soon in your area </p>
          </div>
        </Row>
        <Row>
          <Col>
            <Link className="events-card-wrapper" to={`/events/${eventId}`}>
              <Card className="events-card">
                <Card.Body>
                  <p className="events-date">THU, SEP 19, 11:00AM</p>
                  <Card.Title>Frontend Masters</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Card.Link href="#">
                    <div className="attend-button">
                      <p className="number-of-attendes">500 attendes</p>
                      <Button onClick={viewEvent}>View More</Button>
                    </div>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    )
}

export default EventsLisiting;