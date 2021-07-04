import React, { Component } from 'react';
import { isEmail } from 'validator';
import {Button, Form, Modal} from "react-bootstrap";
import '../css/Attendee.css'
//import Payment from '../../Payment/Payment.jsx'
import Paypal from "../../Payment/PayPal/Paypal";
import {Result} from "antd";

class Register extends Component {

    state = {
        fname:'',
        email:'',
        phoneNumber:0,
        amount:10,
        openModal:'',
        success:false
    }

    componentDidMount() {
        this.setState({openModal:false})
    }

    ModalOn = (e) => {
        e.preventDefault();
        this.setState({openModal:true})

    }

    ModalOff = (e) => {
        this.setState({openModal: false})
        if (this.state.success){
            window.location.reload(false);
        }
    }

    enableSuccess = () => {
        this.setState({success:true})
    }

    handleChange = (e) => {
        const {name , value} = e.target;
        this.setState({[name]:value});
    }

    render() {
        return(
            <div className='container' style={{marginTop:'50px' ,color:'black', marginBottom:'50px' }}>
                <div style={{textAlign:'center' , backgroundColor:'#80d4ff'}}><h2 style={{borderRadius:'5px', padding:'2px'}}>Details of the Attendee</h2></div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label style={{color:'black'}}>Full Name</Form.Label>
                    <Form.Control type="text" name="fname" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label style={{color:'black'}}>Email address</Form.Label>
                    <Form.Control type="email" name="email" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                     <Form.Label style={{color:'black'}}>Phone Number</Form.Label>
                    <Form.Control type="number" name="phoneNumber" onChange={this.handleChange} />
                </Form.Group>
                <h1>Ticket Price : USD 2</h1>
                <Button variant="primary" type="submit" onClick={this.ModalOn} style={{width:'100%'}}>
                    Register
                </Button>
            </Form>
                <div>
                    <Modal
                        show={this.state.openModal}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Body>
                            {this.state.success ?
                                <>
                                    <Result
                                        status="success"
                                        title="Successfully Registered to The Conference"
                                    />
                                </>
                                :
                                <>
                            <h4>Payment Method</h4>
                            <Paypal
                                email={this.state.email}
                                name={this.state.fname}
                                phoneNumber={this.state.phoneNumber}
                                amount={this.state.amount}
                                onSuccess={this.enableSuccess}/>
                                </>
                            }
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="outline-danger" type="submit" onClick={this.ModalOff}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        )
    }

}

export default Register;