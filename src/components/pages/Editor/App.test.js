import React from 'react';
//import { shallow } from 'enzyme';
import ReactDom from 'react-dom';
import AddConferenceTracks from "./AddConferenceTracks/AddConferenceTracks";
import AddImportantDates from "./AddImportantDates/AddImportantDates";
import CreateKeynotes from "./CreateKeynotes/CreateKeynotes";
import {describe, it} from "@jest/globals";

describe('Add conferences are Inserted', () => {
    it('worked  without any issues', () => {
        const div =document.createElement("div")
        ReactDom.render(<AddConferenceTracks/>,div)

    });
})
describe('Add Important Dates are inserted', () => {
    it('worked  without any issues', () => {
        const div1 =document.createElement("div1")
        ReactDom.render(<AddImportantDates/>,div1)
    });
})
describe('Create Keynotes are inserted', () => {
    it('worked  without any issues', () => {
        const div2 =document.createElement("div2")
        ReactDom.render(<CreateKeynotes/>,div2)
    });
})




