
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import image from "../Images/Protfolio-Images/ikram (1).png";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Container fluid className="custom-container">
        <Container>
          <Row className="custom-banner-row">
            <Col md={4} sm={12}>
              <div>
                <img
                  className="img-fluid custom-img"
                  src={image}
                  alt="ikram-akbar"
                />
              </div>
            </Col>
            <Col md={8} sm={12}>
              <div className="welcome-info">
                <h1>Hello, I'm Ikram Akbar</h1>
                <h5>Full Stack Web Application Developer</h5>
                <Button className="custom-btn" href="#">
                  Learn More
                </Button>
                <Button
                  className="custom-btn"
                  href="https://drive.google.com/file/d/1zwTuAQoOpdKPO5EXrBus_DieqJ--m7eQ/view?usp=sharing"
                >
                  Resume/CV
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Banner;
