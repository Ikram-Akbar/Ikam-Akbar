import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import icon1 from "../Images/service-icon/app-development.png";
import icon2 from "../Images/service-icon/web-design.png";
import icon3 from "../Images/service-icon/coding (2).png";
import "./Service.css"

const Services = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1 className='service'>Service</h1>
                        <Row>
                            <Col>
                                <div className='service-info'>
                                    <div className='service-icon'>
                                        <img className='img-fluid' src={icon2} alt="web design"/>
                                    </div>
                                    <div className='service-text'>
                                        <h4>Web Design </h4>
                                        <p>Wee provide a design with source code</p>
                                    </div>

                                </div>
                            </Col>
                            <Col>
                                <div className='service-info'>
                                    <div className='service-icon'>
                                        <img className='img-fluid' src={icon3} alt="web design"/>
                                    </div>
                                    <div className='service-text'>
                                        <h4>Web Development </h4>
                                        <p>Wee provide a design with source code</p>
                                    </div>

                                </div>
                            </Col>
                            <Col>
                                <div className='service-info'>
                                    <div className='service-icon'>
                                        <img className='img-fluid' src={icon1} alt="web design"/>
                                    </div>
                                    <div className='service-text'>
                                        <h4>Mob App Development </h4>
                                        <p>Wee provide a design with source code</p>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
           </Container>
        </div>
    );
};

export default Services;