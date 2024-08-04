import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>

            <h5>Medic consult</h5>
            <p>Application web qui permet le partage entre medecins de différentes spécialités </p>

          </Col>
          <Col>
            <h5>Contact Us</h5>
            <p>Email: teleexpertise@gmail.com</p>
            <p>Phone: +21611.111.111</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
