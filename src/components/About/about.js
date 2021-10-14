import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

class About extends Component {

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="about">
                    <Container>
                        <SectionTitle
                            title1="About "
                            title2="Us"
                            desc="Mack's Productions is a Chennai based Web Development Company."
                        />

                        <Row>
                            <Col md={4}>
                                <h2 className="font-weight-light line-height-1_6 text-dark mb-4">Passionate About Creating Websites.</h2>
                            </Col>
                            <Col md={{size:7, offset :1}}>
                                <Row>
                                    <Col md={6}>
                                        <h6 className="text-dark font-weight-light f-20 mb-3">Who are we?</h6>
                                        <p className="text-muted font-weight-light">Website for everyone! Yes you heard it right. We make the best websites for your business but not just that, we help your business grow with a variety of services aimed to focus on organic growth. </p>
                                    </Col>
                                    <Col md={6}>
                                        <h6 className="text-dark font-weight-light f-20 mb-3">Our Automation</h6>
                                        <p className="text-muted font-weight-light">Gone are the days where you have to sort the details for your visitors, We give your websites the capability to show dynamic contents based on user’s location, interests and search history.</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default About;