import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import '../../styles/_events-cards.scss';

const EventDetails = ({description, startDate, title}) => {
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
                <p className="events-date">{startDate}</p>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  Find it interesting? Please click the Attend button to register for this event
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