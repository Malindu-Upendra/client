import React from 'react';
//import { shallow } from 'enzyme';
import ReactDom from 'react-dom';
import Workshop from './ViewWorkShop';
import ResearchPaper from './ViewUploadResearchPapers';
import ListWorkshopByID from './ListAllWorkshop';
import ListResearchPaperByID from './ListAllResearchPapers';
import {describe, it} from "@jest/globals";

describe('ViewWorkShop', () => {
    it('worked  without any issues', () => {
        const div =document.createElement("div")
        ReactDom.render(<Workshop/>,div)

    });
})


describe('ViewResearchPaper', () => {
    it('worked  without any issues', () => {
        const div1 =document.createElement("div1")
        ReactDom.render(<ResearchPaper/>,div1)
    });
})


describe('ViewAllWorkshopByID', () => {
    it('worked  without any issues', () => {
        const div2 =document.createElement("div2")
        ReactDom.render(<ListWorkshopByID/>,div2)
    });
})


describe('ViewAllResearchPapersByID', () => {
    it('worked  without any issues', () => {
        const div3 =document.createElement("div3")
        ReactDom.render(<ListResearchPaperByID/>,div3)

    });
})



