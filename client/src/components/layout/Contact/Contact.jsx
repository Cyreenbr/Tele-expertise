import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({ message: '', variant: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log('Service ID:', process.env.REACT_APP_EMAILJS_SERVICE_ID);
    console.log('Template ID:', process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
    console.log('User ID:', process.env.REACT_APP_EMAILJS_USER_ID);

    emailjs.send(
      "service_ewjpzwl",
      "template_f7zkkmp",
      formData,
      "81t6vIXFAvqYRS4RP"
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus({ message: 'Message sent successfully!', variant: 'success' });
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setStatus({ message: 'Failed to send message. Please try again.', variant: 'danger' });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <Container className="contact-container">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2>Contact Us</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={3}
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? <Spinner animation="border" size="sm" /> : 'Submit'}
            </Button>
            {status.message && (
              <Alert variant={status.variant} className="mt-3">
                {status.message}
              </Alert>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
