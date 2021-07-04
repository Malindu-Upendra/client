import React, {Component} from "react";
import {Carousel, Col, Row} from "react-bootstrap";
import './eventVenue.css'

export class EventVenue extends Component{

    render() {
        return(
            <>
                <div style={{paddingBottom:'30px'}}></div>
                <div className="eventVenueHeading">
                  Event Venue
                </div>
                <div className="eventVenue2">
                    Event venue location info and gallery
                </div>
                <hr className="line2"></hr>

                <Row>
                    <Col>
                <div style={{position:'relative',textAlign:'right',height:'100%',width:'100%'}}>
                    <div style={{overflow:'hidden', background:'none', height:'100%', width:'100%'}}>
                        <iframe width="100%" height="100%" id="gmap_canvas"
                                src="https://maps.google.com/maps?q=sliit%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                        <a href="https://2piratebay.org"></a>
                        <p></p>
                    </div>
                </div>
                    </Col>

                    <Col>
                <Carousel style={{width:'100%'}}>
                    <Carousel.Item interval={1000} >
                        <img
                            className="d-block w-100"
                            src="/img/ven1.jpeg"
                            alt="First slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="/img/ven2.jpeg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/img/ven3.jpeg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/img/ven4.jpeg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>


                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                    </Col>
                </Row>
                <div style={{paddingBottom:'30px'}}></div>
            </>
        )
    }
}

export default EventVenue;