import { Card, Button, Alert, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from '../../assets/illustration-hero.svg';
import music from '../../assets/icon-music.svg';

function OrderCard() {
  return (
    <Card>
      <Card.Img src={background} variant="top" />
      <Card.Body>
        <Card.Title>Order Summary</Card.Title>
        <Card.Text>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </Card.Text>
        <Alert variant="light">
          <Row>
            <Col>
              <Image src={music} roundedCircle />
            </Col>
            <Col>
              <h5>Annual Plan</h5>
              <p>$59.99/year</p>
            </Col>
            <Col>
              <Button variant="link">Change</Button>
            </Col>
          </Row>
        </Alert>
        <Button variant="primary">Proceed to Payment</Button>
        <Button variant="light">Cancel Order</Button>
      </Card.Body>
    </Card>
  );
}

export default OrderCard;
