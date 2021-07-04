import React from 'react';
//import { shallow } from 'enzyme';
import ReactDom from 'react-dom';
import Paypal from "./Payment/PayPal/Paypal";
import Attendee from "./RegistrationPage/Attendee/Attendee";
import Researcher from "./RegistrationPage/Researcher/Researcher";
import WConductor from "./RegistrationPage/WConductor/WConductor";
import {describe, it} from "@jest/globals";

describe('Paypal inserted', () => {
    it('worked  without any issues', () => {
        const div =document.createElement("div")
        ReactDom.render(<Paypal/>,div)

    });
})


describe('Attendee inserted', () => {
    it('worked  without any issues', () => {
        const div1 =document.createElement("div1")
        ReactDom.render(<Attendee/>,div1)
    });
})


describe('Researches inserted', () => {
    it('worked  without any issues', () => {
        const div2 =document.createElement("div2")
        ReactDom.render(<Researcher/>,div2)
    });
})


describe('Workshop Conductor inserted', () => {
    it('worked  without any issues', () => {
        const div3 =document.createElement("div3")
        ReactDom.render(<WConductor/>,div3)

    });
})



