import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Footer link
import FooterLinks from "./footer-links";

//Import Logo
import logodark from "../../assets/images/logo-dark.png";

class Footer extends Component {
    state = {
        links : [
            { id : 1, title : "Services",
              child : [
                  { title : "Digital Marketing", link : "/https://macksproductions.in/services/" },
                  { title : "Business Analysis", link : "/https://macksproductions.in/services/" },
                  { title : "How It Work", link : "/https://macksproductions.in/services/" },
                  { title : "Fix & Flip", link : "/https://macksproductions.in/services/" },
                  { title : "Social Activation", link : "/https://macksproductions.in/services/" },
              ]
            },
            { id : 2, title : "About Us",
              child : [
                  { title : "Contact Us", link : "https://macksproductions.in/contactus/" },
                  { title : "Careers", link : "https://macksproductions.in/apply-to-job/" },
                  { title : "Terms", link : "https://macksproductions.in/terms-conditions/" },
                  { title : "Privacy Policy", link : "https://macksproductions.in/privacy-policy/" },
              ]
            },
        ],
    }
    render() {
        return (
            <React.Fragment>
                <section className="footer">
                    <Container>
                        <Row>
                            <Col lg={4}>
                                <div className="mb-4">
                                    <Link to="/"><img src={logodark} alt="" className="logo-dark" height="26" /></Link>
                                    <p className="text-muted mt-4 mb-2">manager@macksproductions.in</p>
                                    <h6 className="text-muted font-weight-normal">+91 80767 49056</h6>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <Row>
                                    {
                                        this.state.links.map((link, key) =>
                                            <Col key={key} md={4}>
                                                <h6 className="footer-list-title text-dark mb-3">{link.title}</h6>
                                                <ul className="list-unstyled company-sub-menu">
                                                    {
                                                        link.child.map((fLink, key) =>
                                                            <li key={key}><Link to={fLink.link}>{fLink.title}</Link></li>
                                                        )
                                                    }
                                                </ul>
                                            </Col>
                                        )
                                    }
                                    
                                    <Col md={4}>
                                        <h6 className="footer-list-title text-dark mb-3">Our Address</h6>
                                        <p className="text-muted f-14">No. 8 Bakthavatchalam Street, Nagalkeni, Chrompet, Chennai – 44</p>
                                        <h6 className="text-muted pb-2">Email: manager@macksproductions.in</h6>
                                        <ul className="list-unstyled footer-social-list mt-4">
                                            <li className="list-inline-item"><Link to="https://www.facebook.com/macksproductions"><i className="mdi mdi-facebook"></i></Link></li>
                                            <li className="list-inline-item"><Link to="https://www.instagram.com/macks_production/"><i className="mdi mdi-instagram"></i></Link></li>
                                            <li className="list-inline-item"><Link to="https://www.linkedin.com/company/mack-s-productions#"><i className="mdi mdi-linkedin"></i></Link></li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        {/* Render footer links */}
                        <FooterLinks/>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Footer;