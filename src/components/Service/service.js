import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import ServiceBox from "./services-box";

class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services : [
                { icon : "pe-7s-headphones service-icon", title : "Awesome Support", desc : "We're known for our amazing support. All tickets are solved within 3 hours." },
                { icon : "pe-7s-tools service-icon", title : "Business Strategy", desc : "We're great at analyzing business and creating you a game plan." },
                { icon : "pe-7s-display1 service-icon", title : "Graphic Design", desc : "Give your brand a unique outlook with our graphics! We do next level stuff." },
                { icon : "pe-7s-cup service-icon", title : "Web Development", desc : "We offer the best web applications for you to achieve milestones." },
                { icon : "pe-7s-light service-icon", title : "Branding Identity", desc : "We help you make your brand stand out of the competition." },
                { icon : "pe-7s-graph1 service-icon", title : "Dynamic Growth", desc : "We offer various tools to grow your business to the next level." },
            ]
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <section className="section" id="services">
                    <Container>
                        <SectionTitle
                            title1="Our "
                            title2="Service"
                            desc="We mastered the art of knowing what our clients exactly need, and what they are planning to achieve from their website."
                        />

                        <Row>
                            <ServiceBox services={this.state.services} />
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Service;