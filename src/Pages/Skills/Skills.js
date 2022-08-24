import React from "react";
import ProgressBar from "react-animated-progress-bar";
import { Container, Row, Col } from "react-bootstrap";
import "./Skills.css";


const Skills = () => {

  return (
    <div className="skill-container-fluid">
      <Container>
        <Row>
          <Col>
            <div className="skill">
              <h1 className="skill-header">SKILLS</h1>
              <div  className="skill-info">
                <Row>
                  <Col>
                    <ProgressBar width="250" trackWidth="13" percentage="80" />
                    <h4>JavaScript</h4>
                  </Col>
                  <Col>
                    <ProgressBar width="250" trackWidth="13" percentage="75" />
                    <h4>React JS</h4>
                  </Col>
                  <Col>
                    <ProgressBar width="250" trackWidth="13" percentage="70" />
                    <h4>Node JS</h4>
                  </Col>
                  <Col>
                    <ProgressBar width="250" trackWidth="13" percentage="70" />
                    <h4>Express JS</h4>
                  </Col>
                  <Col>
                    <ProgressBar width="250" trackWidth="13" percentage="82" />
                    <h4>MongoDB</h4>
                  </Col>
                  <Col>
                    <ProgressBar width="250" trackWidth="13" percentage="80" />
                    <h4>Bootstrap</h4>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
