import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ContactUs from './pages/ContactUs/Contactus'
import Login from "./pages/Login/Login";
import RegistrationPage from "./pages/User/RegistrationPage/RegistrationPage";
import Payment from "./pages/User/Payment/Payment";
import ViewUploadResearchPapers from "./pages/Reviewer/ViewUploadResearchPapers";
import ViewWorkShop from "./pages/Reviewer/ViewWorkShop";
import Attendees from "./pages/Admin/Attendees/Attendees.jsx";
import ImportantDates from "./pages/Admin/ImportantDates/ImportantDates";
import RetrieveWorkShop from "./pages/Admin/RetrieveWorkShop/RetrieveWorkShop";
import NavBar from "./pages/Admin/Navbar";
import KeynoteSpeakers from "./pages/Homepage/Keynotes/Keynotes.jsx";
import ReviewerNavbar from "./pages/Reviewer/ReviewerNavbar";
import AddConferenceTracks from "./pages/Editor/AddConferenceTracks/AddConferenceTracks";
import AddImportantDates from "./pages/Editor/AddImportantDates/AddImportantDates";
import CreateKeynotes from "./pages/Editor/CreateKeynotes/CreateKeynotes";
import ListAllResearchPapers from "./pages/Reviewer/ListAllResearchPapers";
import ListAllWorkshop from "./pages/Reviewer/ListAllWorkshop";
import Homepage from "./pages/Homepage/Homepage.jsx";
import InsertedKeynotes from "./pages/Admin/EditorChanges/InsertedKeynotes.jsx";
import Keynote from "./pages/Admin/RetrieveWorkShop/RetrieveWorkShop.jsx";
import ConferenceTracks from "./pages/Admin/ConferenceTracks/ConferenceTracks.jsx";
import RetrieveConferenceTracks from "./pages/Editor/RetrieveConferenceTracks/RetrieveConferenceTracks";
import RetrieveKeynotes from "./pages/Editor/RetrieveKeynotes/RetrieveKeynotes";
import RetrieveImportantDates from "./pages/Editor/RetrieveImportantDates/RetrieveImportantDates";
import UpdateKeynotes from "./pages/Editor/UpdateKeynotes/UpdateKeynotes";
import UpdateConferenceTracks from "./pages/Editor/UpdateConferenceTracks/UpdateConferenceTracks";
import UpdateImportantDates from "./pages/Editor/UpdateImportantDates/UpdateImportantDates";
import RetrievePayments from "./pages/Admin/RetrievePayments/RetrievePayments";
import RetrieveResearch from "./pages/Admin/RetrieveResearch/RetrieveResearch";
import TemplateUploadAndRetrieve from "./pages/Reviewer/TemplateUploadAndRetrieve";
import SpecificKeynoteDetails from "./pages/Homepage/SpecificKeynoteDetails/SpecificKeynoteDetails";
import Workshop from "./pages/Homepage/Workshop/Workshop";
import Templates from "./pages/Homepage/Template/Templates";
import Contactus from "./pages/Admin/ContacUS/ContactUs";

export class Section extends Component{

    render() {

        return(

            <section>

                <Route path="/" component={Homepage} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/contactUs" component={ContactUs} exact />
                <Route path="/registrationPage" component={RegistrationPage} exact />
                <Route path="/home/workshop" component={Workshop} exact />
                <Route path="/home/template" component={Templates} exact />
                <Route path="/payment" component={Payment} exact />
                <Route path="/reviewer/researchPaper" component={ViewUploadResearchPapers} exact />
                <Route path="/reviewer/workshop" component={ViewWorkShop} exact />
                <Route path="/reviewer/template" component={TemplateUploadAndRetrieve} exact />
                <Route path="/admin/attendees" component={Attendees} exact />
                <Route path="/admin/importantdates" component={ImportantDates} exact />
                <Route path="/admin/keynotes" component={Keynote} exact />
                <Route path="/admin/navbar" component={NavBar} exact />
                <Route path="/keynoteSpeakers" component={KeynoteSpeakers} exact />
                <Route path="/SpecificKeynoteSpeaker/:id" component={SpecificKeynoteDetails} exact />
                <Route path="/reviewer/navbar" component={ReviewerNavbar} exact />
                <Route path="/addConferenceTracks" component={AddConferenceTracks} exact />
                <Route path="/addImportanceDates" component={AddImportantDates} exact />
                <Route path="/createKeynotes" component={CreateKeynotes} exact />
                <Route path="/ListResearchPaper/:id" component={ListAllResearchPapers} exact />
                <Route path="/ListWorkshop/:id" component={ListAllWorkshop} exact />
                <Route path="/admin/ListKeynotes" component={InsertedKeynotes} exact />
                <Route path="/admin/RetrieveWorkShop" component={RetrieveWorkShop} exact />
                <Route path="/admin/conferencetracks" component={ConferenceTracks} exact />
                <Route path="/admin/payments" component={RetrievePayments} exact />
                <Route path="/admin/research" component={RetrieveResearch} exact />
                <Route path="/admin/contactUs" component={Contactus} exact />
                <Route path="/editor/conferenceTracks" component={AddConferenceTracks} exact />
                <Route path="/editor/importantDates" component={AddImportantDates} exact />
                <Route path="/editor/createKeynotes" component={CreateKeynotes} exact />
                <Route path="/editor/getConferenceTracks" component={RetrieveConferenceTracks} exact />
                <Route path="/editor/getKeynotes" component={RetrieveKeynotes} exact />
                <Route path="/editor/getImportantDates" component={RetrieveImportantDates} exact />
                <Route path="/editor/updateKeynote/:id" component={UpdateKeynotes} exact />
                <Route path="/editor/updateConferenceTrack/:id" component={UpdateConferenceTracks} exact />
                <Route path="/editor/updateImportantDate/:id" component={UpdateImportantDates} exact />

            </section>
        )
    }
}

export default Section