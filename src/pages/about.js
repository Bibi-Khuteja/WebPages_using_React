import React from 'react'
import {Row,Col,Button} from  'react-bootstrap';
import img7 from '../images/image7.jpeg'
const About = () => {
  return (
    <>
        <Row className='m-0'>
          <Col lg={6} md={12} sm={12} className="text-center mt-5">
            <img src={img7} alt="" className="img1" />
          </Col>
          <Col className="text-center my-5">
            <h1>STORY ABOUT US</h1>
            <p className="text-left para">
              "Welcome to [Your Company Name]! We are a passionate team
              dedicated to [briefly describe your company's mission or purpose].
              With [X] years of experience in [your industry or field], we have
              been committed to delivering [mention your key values or
              qualities] to our valued customers. Our journey began with a
              simple vision: [briefly describe your initial vision or
              inspiration]. Since then, we have grown into a thriving community
              of [number of employees or team members] individuals who share a
              common goal: to [highlight your company's primary objectives or
              goals].
            </p>
            <Button variant="dark" className="about-button">READ MORE</Button>{' '}
          </Col>
        </Row>
    </>
  )
}

export default About;