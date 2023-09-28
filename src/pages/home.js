import { Col, Row, Container,Button,Card } from "react-bootstrap";

import img2 from "../images/image2.jpeg";
import img3 from "../images/image3.jpeg";
import img4 from "../images/image4.jpeg";
import "./home.scss";

function Home() {
  return (
    <>
    
      <Container>
        <div className="text-center my-5">
          <h1>WELCOME TO GYM</h1>
          <p>“When I feel tired, I just think about how great I will feel once I finally reach my goal.”</p>
        </div>
        <Row className="my-5">
          <Col lg={4} md={6} sm={12}>
              <Card className="mycard">
              <Card.Img variant="top" src={img2} alt=""  />
              <Card.Body>
                <Card.Title>STRENGH</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
              </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
          <Card className="mycard">
              <Card.Img variant="top" src={img3} alt="" className="w-100 " style={{width:'348px',height:'232px'}}/>
              <Card.Body>
                <Card.Title>STRENGH</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
          </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
          <Card className="mycard">
              <Card.Img variant="top" src={img4} alt="" />
              <Card.Body>
                <Card.Title>STRENGH</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
     
    </>
  );
}

export default Home;
