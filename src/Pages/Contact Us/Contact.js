import React from "react";
import { Container, Row, Col,Form, Button} from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <Container>
        <Row>
          <h1 className="Custom-contact">Contact with me</h1>
          <Col>
            <Form className="custom-form">
              <Form.Group
                className="mb-3 "
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3 text-center"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Your Comment </Form.Label>
                <Form.Control as="textarea" required rows={3} />
              </Form.Group>
              <Button className="send-btn" variant="light">Send</Button>
            </Form>
        
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
