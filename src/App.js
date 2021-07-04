import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from "./components/pages/Header/Header";
import Footer from "./components/pages/Footer/Footer";
import Section from "./components/Section";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';


export class App extends Component{


    render(){
        return(
         <Router>
                 <>
                     <Header/>
                     <Section/>
                     <Footer/>
                </>
         </Router>
        )
    }
}

export  default App;