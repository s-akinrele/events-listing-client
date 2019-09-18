import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const ImagePreview = props => (
  <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src="holder.js/171x180" rounded />
    </Col>
    <Col xs={6} md={4}>
      <Image src="holder.js/171x180" roundedCircle />
    </Col>
    <Col xs={6} md={4}>
      <Image src={props.imageUrl} thumbnail />
    </Col>
  </Row>
</Container>
)

export default ImagePreview
