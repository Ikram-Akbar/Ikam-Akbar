import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import project1 from "../Images/Projects/akbar-store.netlify.app_ (1).png";
import project2 from "../Images/Projects/bikes-cbr.netlify.app_ (1).png";
import project3 from "../Images/Projects/cars-zone-b1414.web.app_ (1).png";
import project4 from "../Images/Projects/pcommerce-project.netlify.app_.png";
import project5 from "../Images/Projects/tourandtravel-6aff5.web.app_.png";
import "./Projects.css"

const Projects = () => {
  return (
    <div className="project">
      <Container>
        <Row>
          <Col>
            <div>
              <h1>PROJECT</h1>
              <Row>
                <Col >
                  <Card style={{ width: "18rem" }}>
                    <Card.Img className="custom-card-img" variant="top" src={project3} />
                    <Card.Body>
                      <Card.Title>Car Zone</Card.Title>
                      <Card.Text className="custom-card-info">
                       
                        <p>React Js</p>
                        <p>Node Js</p>
                        <p>MongoDB</p>
                        <p>Express Js</p>
                        <p>Firebase</p>
                      </Card.Text>
                      <Button variant="primary">Live Preview</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col >
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={project5} />
                    <Card.Body>
                      <Card.Title> Tour & Travel </Card.Title>
                      <Card.Text className="custom-card-info">
                       
                        <p>React Js</p>
                        <p>Node Js</p>
                        <p>MongoDB</p>
                        <p>Express Js</p>
                        <p>Firebase</p>
                      </Card.Text>
                      <Button variant="primary">Live Preview</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col >
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={project2} />
                    <Card.Body>
                      <Card.Title>Honda CBR</Card.Title>
                      <Card.Text className="custom-card-info">
                       
                        <p>JavaScript</p>
                        <p>Bootstrap</p>
                        <p>CSS 5</p>
                        <p>HTML</p>
                        <p>Netlify</p>
                      </Card.Text>
                      <Button variant="primary">Live Preview</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col >
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={project4} />
                    <Card.Body>
                      <Card.Title>Panda Commerce</Card.Title>
                      <Card.Text className="custom-card-info">
                       
                        <p>JavaScript</p>
                        <p>Bootstrap</p>
                        <p>CSS 5</p>
                        <p>HTML</p>
                        <p>Netlify</p>
                      </Card.Text>
                      <Button variant="primary">Live Preview</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col >
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={project1} />
                    <Card.Body>
                      <Card.Title>E-Commerce cart</Card.Title>
                      <Card.Text className="custom-card-info">
                       
                        <p>JavaScript</p>
                        <p>Bootstrap</p>
                        <p>CSS 5</p>
                        <p>HTML</p>
                        <p>Netlify</p>
                      </Card.Text>
                      <Button variant="primary">Live Preview</Button>
                    </Card.Body>
                  </Card>
                </Col>
                
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;

// import React, { useEffect, useState } from "react";
// import { Container,Row } from "react-bootstrap";
// import Project from "./Project";

// /* const data = [
//   {
//     name: "Car Zone",
//     description: "This is a Full Stack  project.",
//     technology: ["React Js", "Node Js", "MongoDB", "Firebase"],
//   },
//   {
//     name: "Tour & Travel",
//     description: "This is a Full Stack (M E R N)  project.",
//     technology: ["React Js", "Node Js", "MongoDB", "Firebase"],
//   },
//   {
//     name: "Akbar Store",
//     description:
//       "This is a JavaScript functional project with Shopping cart system",
//     technology: ["HTML 5", "CSS 3", "JavaScript"],
//   },
//   {
//     name: "Panda Commerce",
//     description: "This is a PSD to HTML conversion project.",
//     technology: ["HTML 5, CSS 3", "Bootstrap 5"],
//   },
//   {
//     name: "Honda CRB",
//     description: "This is a Figma to HTML conversion project.",
//     technology: ["HTML 5, CSS 3", "Bootstrap 5"],
//   },
//   {
//     name: "Lucid",
//     description: "This is a PSD to HTML conversion project.",
//     technology: ["HTML 5, CSS 3", "Bootstrap 5"],
//   }
// // ]; */

// const Projects = () => {
//   const [projects, setProjects] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => setProjects(data));
//   }, []);
//   return (
//     <div>
//       <Container>
//               <Row>
//                   {projects.map((project) => {
//                       <Project project={project} />
//                   })}
//               </Row>
//       </Container>
//     </div>
//   );
// };

// export default Projects;
