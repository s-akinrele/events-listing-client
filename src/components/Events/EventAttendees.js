import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

const EventAttendees = ({users=[]}) => {
  return (
    <Container>
      <h3>Attendees</h3>
      <Row>
        {users.map(user => {
          return (
            <Col xs={6} md={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{`${user.first_name} ${user.last_name}`}</Card.Title>
                <Card.Text>
                  I will be attending
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
          )
        })
        }
      </Row>
    </Container>
  )
}

export default EventAttendees
