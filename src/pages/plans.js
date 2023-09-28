import React from "react";
import "./plans.scss";
import { Container, Row, Col, Card,ListGroup,Button } from "react-bootstrap";

const Plans = () => {
  return (
    <Container>
        <div className="text-center">
        <h1>MEMBERSHIP PLANS</h1>
        <p className="mt-2 text-muted">no matter your fitness level is,
        let's find the fitness membership.</p>
        </div>
      <Row className="my-5">
        <Col sm={12} md={6} lg={4} className="mt-3">
          <Card className="text-center">
            <Card.Body>
              <Card.Title className="mycard-title">Basic Plan</Card.Title>
              <Card.Title>$30</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                per month
              </Card.Subtitle>
              <Card.Text>
                <ListGroup variant="flush" className="text-left" >
                  <ListGroup.Item style={{ listStyleType: 'square',border:0, margin: 0}}>Unlimited gym access</ListGroup.Item>
                  <ListGroup.Item style={{ listStyleType: 'square',border:0, margin: 0 }}>1 Traning program</ListGroup.Item>
                  <ListGroup.Item style={{ listStyleType: 'square',border:0, margin: 0}}>Free fitness consultation</ListGroup.Item>
                  <ListGroup.Item style={{ listStyleType: 'square',border:0, margin: 0}}>Free wifi</ListGroup.Item>
                  <ListGroup.Item style={{ listStyleType: 'square',border:0, margin: 0}}>50% off drinks</ListGroup.Item>
                </ListGroup>
              </Card.Text>
              <Card.Link href="#">
              <Button variant="outline-primary" className="mt-5">GET STARTED</Button>{' '}
              </Card.Link>
              
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}  className="mt-3">
        <Card className="text-center">
            <Card.Body>
              <Card.Title className="mycard-title">Medium Plan</Card.Title>
              <Card.Title>$60</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                per month
              </Card.Subtitle>
              <Card.Text>
                <ListGroup variant="flush" className="text-left" >
                  <ListGroup.Item style={{ listStyleType: 'square',border:0, margin: 0}}>Unlimited gym access</ListGroup.Item>
                  <ListGroup.Item style={{ listStyleType: 'square',border:0, margin: 0 }}>2 Traning program</ListGroup.Item>
                  <ListGroup.Item style={{ listStyleType: 'square',border:0, margin: 0}}>Free fitness consultation</ListGroup.Item>
                  <ListGroup.Item style={{ listStyleType: 'square',border:0, margin: 0}}>Free wifi</ListGroup.Item>
                  <ListGroup.Item style={{ listStyleType: 'square',border:0, margin: 0}}>50% off drinks</ListGroup.Item>
                  <ListGroup.Item style={{ listStyleType: 'square',border:0, margin: 0}}>Personel Trainer</ListGroup.Item>
                </ListGroup>
              </Card.Text>
              <Card.Link href="#">
              <Button variant="outline-primary">GET STARTED</Button>{' '}
              </Card.Link>
              
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}  className="mt-3">
        <Card className="text-center">
            <Card.Body>
              <Card.Title className="mycard-title">Premiere Plan</Card.Title>
              <Card.Title>$90</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                per month
              </Card.Subtitle>
              <Card.Text>
                <ListGroup variant="flush" className="text-left" >
                  <ListGroup.Item style={{ listStyleType: 'square',border:0, margin: 0}}>Unlimited gym access</ListGroup.Item>
                  <ListGroup.Item style={{ listStyleType: 'square',border:0, margin: 0 }}>1 Traning program</ListGroup.Item>
                  <ListGroup.Item style={{ listStyleType: 'square',border:0, margin: 0}}>Free fitness consultation</ListGroup.Item>
                  <ListGroup.Item style={{ listStyleType: 'square',border:0, margin: 0}}>Free wifi</ListGroup.Item>
                  <ListGroup.Item style={{ listStyleType: 'square',border:0, margin: 0}}>Free clothes & equipments</ListGroup.Item>
                  <ListGroup.Item style={{ listStyleType: 'square',border:0, margin: 0}}>50% off drinks</ListGroup.Item>
                </ListGroup>
              </Card.Text>
              <Card.Link href="#">
              <Button variant="outline-primary">GET STARTED</Button>{' '}
              </Card.Link>
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Plans;
