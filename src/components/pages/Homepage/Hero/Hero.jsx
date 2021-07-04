import React from 'react';
import {
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
    HeroP1,
    HeroP2,

} from './HeroElement';

const Hero = () => {
    return (
        <HeroContainer>
            <HeroContent>
                <HeroItems >
                    <HeroH1>ICAF 2022</HeroH1>
                    <HeroP>International Conference on Application Frameworks 2021</HeroP>
                    <HeroP1>June01 - June 03, 2022</HeroP1>
                    <HeroP2>Sri Lanka Institute of Information Technology</HeroP2>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;

