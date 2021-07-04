import React from 'react';
import { FeatureContainer,Date,Sdate,line3} from './AboutElement.jsx';



const About = () => {

    return (
        <div style={{background:'black'}}>
        <FeatureContainer>
            <h2>About</h2>
            <p>The 3rd International conference on Application Frameworks -2022 (ICAF 2022) is organized by the
                Faculty of Computing of the Sri Lanka Institute of Information Technology (SLIIT)
                as an open forum for academics along with industry professionals to present the
                latest findings and research output and practical deployments in the Computer Science
                and Information Technology domains. Primary objective of the ICAF is to uplift the research
                culture and the quality of research done by Sri Lankan researchers. This conference will create a
                platform for national and international researchers to showcase their research output, networking opportunities to
                discuss innovative ideas, and initiate collaborative work. </p>
        </FeatureContainer>

        {/*<Date>Day to be Start</Date>*/}


        </div>
    );
};

export default About;
