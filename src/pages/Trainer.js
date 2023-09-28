import React from 'react';
import './Trainer.scss';
import tr1 from '../images/trainer1.jpeg';
import tr2 from '../images/trainer2.jpeg';
import tr3 from '../images/trainer3.jpeg';
import tr4 from '../images/trainer4.jpeg';
import tr5 from '../images/trainer5.jpeg';
import tr6 from '../images/trainer6.jpeg';
import tr7 from '../images/trainer7.jpeg';
import tr8 from '../images/trainer8.jpeg';

import { Container,Card,Col,Row,Button } from 'react-bootstrap';

const Trainer = () => {
  return (
    <>
    
    {/* <div className='bg-light'> */}
    <Container>
        <div className="text-center">
        <h1>OUR TRAINERS</h1>
        <p className="mt-2 text-muted">no matter your fitness level is,
        build your best body.</p>
        </div>
        <Row className="my-5">
          <Col lg={3} md={6} sm={12} className='mt-3'>
              <Card className="mycard">
              <Card.Img variant="top" src={tr1} alt=""  style={{width:'253px',height:'140px'}} className='w-100' />
              <Card.Body>
                <Card.Title>STRENGH</Card.Title>
                <Card.Text>
                To stay on top of your fitness goals, you need to be self-motivated, and for those times self-motivation doesn’t work, there are motivational gym
                </Card.Text>
                <Button variant="dark">READ MORE</Button>
              </Card.Body>
              </Card>
          </Col>
          <Col lg={3} md={6} sm={12} className='mt-3'>
          <Card className="mycard">
              <Card.Img variant="top" src={tr2} alt="" className="w-100 " style={{width:'348px',height:'150px'}}/>
              <Card.Body>
                <Card.Title>STRENGH</Card.Title>
                <Card.Text>
                To stay on top of your fitness goals, you need to be self-motivated, and for those times self-motivation doesn’t work, there are motivational gym
                </Card.Text>
                <Button variant="dark">READ MORE</Button>
              </Card.Body>
          </Card>
          </Col>
          <Col lg={3} md={6} sm={12} className='mt-3'>
          <Card className="mycard">
              <Card.Img variant="top" src={tr3} alt=""  style={{width:'253px',height:'140px'}} className='w-100'/>
              <Card.Body>
                <Card.Title>STRENGH</Card.Title>
                <Card.Text>
                To stay on top of your fitness goals, you need to be self-motivated, and for those times self-motivation doesn’t work, there are motivational gym
                </Card.Text>
                <Button variant="dark">READ MORE</Button>
              </Card.Body>
          </Card>
          </Col>
          <Col lg={3} md={6} sm={12} className='mt-3'>
          <Card className="mycard">
              <Card.Img variant="top" src={tr4} alt=""   style={{width:'253px',height:'130px'}} className='w-100'/>
              <Card.Body>
                <Card.Title>STRENGH</Card.Title>
                <Card.Text>
                To stay on top of your fitness goals, you need to be self-motivated, and for those times self-motivation doesn’t work, there are motivational gym
                </Card.Text>
                <Button variant="dark">READ MORE</Button>
              </Card.Body>
          </Card>
          </Col>
          <Col lg={3} md={6} sm={12} className='mt-3'>
          <Card className="mycard">
              <Card.Img variant="top" src={tr5} alt=""  style={{width:'253px',height:'140px'}} className='w-100' />
              <Card.Body>
                <Card.Title>STRENGH</Card.Title>
                <Card.Text>
                To stay on top of your fitness goals, you need to be self-motivated, and for those times self-motivation doesn’t work, there are motivational gym
                </Card.Text>
                <Button variant="dark">READ MORE</Button>
              </Card.Body>
          </Card>
          </Col>
          <Col lg={3} md={6} sm={12} className='mt-3'>
          <Card className="mycard">
              <Card.Img variant="top" src={tr6} alt=""  style={{width:'253px',height:'140px'}} className='w-100' />
              <Card.Body>
                <Card.Title>STRENGH</Card.Title>
                <Card.Text>
                To stay on top of your fitness goals, you need to be self-motivated, and for those times self-motivation doesn’t work, there are motivational gym
                </Card.Text>
                <Button variant="dark">READ MORE</Button>
              </Card.Body>
          </Card>
          </Col>
          <Col lg={3} md={6} sm={12} className='mt-3'>
          <Card className="mycard">
              <Card.Img variant="top" src={tr7} alt=""   style={{width:'253px',height:'140px'}} className='w-100'/>
              <Card.Body>
                <Card.Title>STRENGH</Card.Title>
                <Card.Text>
                To stay on top of your fitness goals, you need to be self-motivated, and for those times self-motivation doesn’t work, there are motivational gym
                </Card.Text>
                <Button variant="dark">READ MORE</Button>
              </Card.Body>
          </Card>
          </Col>
          <Col lg={3} md={6} sm={12} className='mt-3'>
          <Card className="mycard">
              <Card.Img variant="top" src={tr8} alt="" style={{width:'253px',height:'140px'}} className='w-100' />
              <Card.Body>
                <Card.Title>STRENGH</Card.Title>
                <Card.Text>
                To stay on top of your fitness goals, you need to be self-motivated, and for those times self-motivation doesn’t work, there are motivational gym
                </Card.Text>
                <Button variant="dark">READ MORE</Button>
              </Card.Body>
          </Card>
          </Col>
        </Row>

    </Container>
    {/* </div> */}
    
    </>
   
  )
}

export default Trainer