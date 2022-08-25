import React from "react";
import { Col, Container, Row, Nav } from "react-bootstrap";
import github from "../Images/footer-icon/github.png";
import facebook from "../Images/footer-icon/facebook.png";
import linkedin from "../Images/footer-icon/linkedin.png";
import twitter from "../Images/footer-icon/twitter-sign.png";
import "./Footer.css";

const Footer = () => {
  return (
    <Container fluid className=" mt-5 p-5 ">
      <Row>
        <Col>
          <h1>Find Me</h1>
        </Col>
        <Row>
          <Col className="custom-footer" sm={12} md={12}>
            <Nav.Link href="https://github.com/Ikram-Akbar">
              <img
                className="img-fluid custom-footer-icon"
                src={github}
                alt="facebook "
              ></img>
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/ikramakbar/">
              <img
                className="img-fluid custom-footer-icon"
                src={linkedin}
                alt="facebook "
              ></img>
            </Nav.Link>
            <Nav.Link href="https://www.facebook.com/Ikramakbar.me">
              <img
                className="img-fluid custom-footer-icon"
                src={facebook}
                alt="facebook "
              ></img>
            </Nav.Link>
            <Nav.Link href="https://twitter.com/Ikramakbar_me">
              <img
                className="img-fluid custom-footer-icon"
                src={twitter}
                alt="facebook "
              ></img>
            </Nav.Link>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Footer;
