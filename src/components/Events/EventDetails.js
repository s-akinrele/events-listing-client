import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import '../../styles/_events-cards.scss';

const EventDetails = ({description}) => {
  return (
    <div>
      <Container>
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
                <p className="events-date">THU, SEP 19, 11:00AM</p>
                <Card.Title>Social Liga</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                  </Card.Text>
                <Card.Link href="#">
                  <div className="attend-button">
                    <Button>Attend</Button>
                  </div>
                </Card.Link>
              </Card.Body>
            </Card>

          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default EventDetails;