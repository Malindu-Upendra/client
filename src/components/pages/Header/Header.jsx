import React, { Component } from 'react'
import decode from "jwt-decode";
import Navbar from "../Admin/Navbar";
import ReviewerNavbar from '../Reviewer/ReviewerNavbar.js'
import EditorNavBar from  '../Editor/Navbar.js'
import UserHeader from "../Homepage/UserHeader/UserHeader.jsx";

export  class Header extends Component{

    state = {
        user:''
    }

    componentDidMount = () => {

        if(sessionStorage.token) {
            this.setState({user:decode(sessionStorage.token).position})
        }else {
            this.setState({user:'user'})
        }
    }

    render() {

        return(
            <>

            { this.state.user==='user'  ? <UserHeader />

                    : this.state.user==='Admin'  ? <Navbar/> :

                        this.state.user==='Reviewer' ? <ReviewerNavbar/> :

                            this.state.user==='Editor' ? <EditorNavBar/> : null}

                    </>

        )
    }

}


export default Header;