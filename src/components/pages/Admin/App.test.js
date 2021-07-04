import React from 'react';
//import { shallow } from 'enzyme';
import ReactDom from 'react-dom';
import ConferenceTracks from "./ConferenceTracks/ConferenceTracks";
import Attendees from "./Attendees/Attendees";
import InsertedKeynotes from "./EditorChanges/InsertedKeynotes";
import ImportantDates from "./ImportantDates/ImportantDates"
import {describe, it} from "@jest/globals";

describe('View the Attendees', () => {
    it('worked  without any issues', () => {
        const div =document.createElement("div")
        ReactDom.render(<Attendees/>,div)

    });
})


describe('ViewConferenceTracks', () => {
    it('worked  without any issues', () => {
        const div1 =document.createElement("div1")
        ReactDom.render(<ConferenceTracks/>,div1)
    });
})

describe('ViewInsertedKeyNotes', () => {
    it('worked  without any issues', () => {
        const div2 =document.createElement("div2")
        ReactDom.render(<InsertedKeynotes/>,div2)
    });
})


describe('ViewImportantDates', () => {
    it('worked  without any issues', () => {
        const div3 =document.createElement("div3")
        ReactDom.render(<ImportantDates/>,div3)

    });
})



