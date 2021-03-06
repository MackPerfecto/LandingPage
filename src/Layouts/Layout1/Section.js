import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";

//Import Images
import hero1 from "../../assets/images/hero-1-img.png";

class Section extends Component {
    render() {
        return (
            <React.Fragment>
    <section className="hero-1-bg position-relative bg-light d-flex align-items-center" id="home">
        <Container>
            <Row className="align-items-center">
                <Col lg={6}>
                    <div className="hero-title pr-lg-5">
                        <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">Website For Everyone!</p>
                        <h1 className="hero-1-title mb-4 font-weight-normal line-height-1_4">Get Your Professional Website Done With <span className="text-primary font-weight-medium">Mack's Productions</span></h1>
                        <p className="text-muted mb-4 pb-2">
We mastered the art of knowing what our clients exactly need, and what they are planning to achieve from their website.
We offer  a variety of services like Web Designing, Web Development, E-Commerce development, Mobile App Development, Graphic Designing, Search Engine Optimization, Social Media Marketing, Branding and a lot more.
.</p>
                        <Link to="https://macksproductions.in" className="btn btn-warning">Find Out How <span className="ml-2 right-icon">&#8594;</span></Link>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="mt-5 mt-lg-0">
                        <img src={hero1} alt="" className="img-fluid mx-auto d-block"/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
            </React.Fragment>
        );
    }
}
export default Section;