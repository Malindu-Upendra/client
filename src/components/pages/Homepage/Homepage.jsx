import React, { Component } from 'react'
//import {Route} from 'react-router-dom';
import Hero from "./Hero/Hero.jsx";
import About from "./About/About";
import Keynotes from "./Keynotes/Keynotes";
import ConferenceTracks from "./ConferenceTracks/ConferenceTracks";
import Countdown from "./CountDown/Countdown";
import EventVenue from "./EventVenue/EventVenue";
import RetrieveImportantDates from "./ImportantDates/ImportantDate";

export class Homepage extends Component{
    render() {
        return(
            <div>
            <Hero/>
            <About/>
            <Countdown/>
            <Keynotes/>
            <ConferenceTracks/>
            <RetrieveImportantDates/>
            <EventVenue/>
            </div>
        )
    }
}
export default Homepage;