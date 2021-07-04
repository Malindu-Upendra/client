import React, { Component } from 'react'
import {Link} from "react-router-dom";
import '../../css/Footer.css'
import decode from "jwt-decode";


export class Footer extends Component {

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

        return (
            <>

                { this.state.user==='user'  ?

            <div className='footer-container'>

                <section className="footer-subscription">

                    <p className="footer-subscription-heading">

                       <b>Contact-Us</b>
                      <hr className="line"></hr>

                    </p>

                    {/*<p className="footer-subscription-text">*/}
                    {/*    You Can Reach Us at Any time  <i className="fas fa-phone"> </i> </p>*/}
                    <p> Computing Research Unit, Faculty of Computing, Panitan University , Sri Lanka</p>
                    <p>    Email: <b> panitan@cof.lk </b>/ Hotline: <b>+94 11-459 5001</b>

                    </p>

                </section>


                <section className="social-media">

                    <div className="social-media-wrap">

                        <div className="footer-logo">

                            < Link to='/' className="social-logo">

                                SLIIT Conf .
                                <i className="fas fa-american-sign-language-interpreting">
                            </i>
                            </  Link>


                        </div>


                        <small className="website-rights">

                            &copy;  SLIIT Conf, developed by SLIIT Techs. All Rights Reserved
                        </small>

                        <div className="social-icon">

                            <Link
                                className="social-icon-link facebook"
                                to='/'
                                target='_blank'
                                aria-label='Facebook'>

                                <i className='fab fa-facebook-f'> </i>
                            </Link>

                            <Link
                                className="social-icon-link instagram"
                                to='/'
                                target='_blank'
                                aria-label='Instagram'>

                                <i className="fab fa-instagram"> </i>
                            </Link>

                            <Link
                                className="social-icon-link twitter"
                                to='/'
                                target='_blank'
                                aria-label='Twitter' >
                                <i className="fab fa-twitter"> </i>
                            </Link>


                            <Link
                                className="social-icon-link Youtube"
                                to='/'
                                target='_blank'
                                aria-label='Twitter' >
                                <i className="fab fa-youtube"> </i>
                            </Link>


                        </div>
                    </div>
                </section>
            </div>
                    : null }

            </>
        )
    }
}

export default Footer;