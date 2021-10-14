import React, { Component } from 'react';
import { Container } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import FeatureBox from "./feature-box";

//Import Images
import feature1 from "../../assets/images/features/img-1.png";
import feature2 from "../../assets/images/features/img-2.png";
import feature3 from "../../assets/images/features/img-3.png";

class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
            features : [
                {id : 1, img : feature1, icon : "mdi  mdi-laptop-mac", title : "Active Reporting", desc : "We send out daily, weekly and monthly analysis reports on various factors like Visitors, Purchases Etc.", link : "/"},
                {id : 2, img : feature2, icon : "mdi  mdi-account-group", title : "Account Manager", desc : "You'll be getting a dedicated account manager who can help you out analyse the requirements and come up with strategies.", link : "/"},
                {id : 3, img : feature3, icon : "mdi  mdi-chart-bell-curve", title : "Growth Strategy", desc : "We hear you, coming up with a growth strategy is not an easy task, We got you covered on this with the experts in strategic planning.", link : "/"},
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
            <section className="section" id="features">
                <Container>
                                <SectionTitle
                                    title1="Our "
                                    title2="Features"
                                    desc="Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero pulvinar hendrerit id lorem."
                                />

                            <FeatureBox features={this.state.features} />
                </Container>
            </section>
            </React.Fragment>
        );
    }
}

export default Features;