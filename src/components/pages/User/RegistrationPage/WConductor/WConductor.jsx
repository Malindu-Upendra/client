import React, {Component} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import Loader from "react-loader-spinner";
import axios from "axios";

export class WConductor extends Component{

    state = {
        title:'',
        description:'',
        wconductors:'',
        email:'',
        image:'',
        openModal:false,
        visibility:false,
        success:false
    }

    handleChange = (e) => {
        const {name , value} = e.target;
        this.setState({[name]:value});
    }

    handleImage = (e) => {
        this.setState({image:e.target.files[0]})
        console.log(e.target.files[0])
        console.log(this.state.image)
    }

    ModalOff = () => {
        this.setState({openModal:false})
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({openModal:true})
        this.setState({visibility:true});

        console.log(this.state.image)

        try {
            let formData = new FormData();
            formData.append("title", this.state.title);
            formData.append("description", this.state.description);
            formData.append("wconductors", this.state.wconductors);
            formData.append("email", this.state.email);
            formData.append("image", this.state.image);

            axios.post('http://localhost:5000/user/uploadWorkShop', formData).then(res => {
                this.setState({visibility:false});
                this.setState({success:true});
                setTimeout(() => {this.ModalOff()},200000)
                window.location.reload(false);

            })

        } catch (error) {
            console.log(error);
        }

    }

    render() {
        return(
            <div className='container' style={{marginTop:'50px' , marginBottom:'50px' }}>
                <div style={{textAlign:'center' , backgroundColor:'#80d4ff'}}><h2 style={{borderRadius:'5px', padding:'2px'}}>Details of Workshop Conductor/s </h2></div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{color:'black'}}>Title of WorkShop</Form.Label>
                        <Form.Control type="text" name="title" onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label style={{color:'black'}}>Description</Form.Label>
                        <Form.Control as="textarea" name="description" rows={5} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{color:'black'}}>WorkShop Conductors</Form.Label>
                        <Form.Control type="text" name="wconductors" onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{color:'black'}}>Email</Form.Label>
                        <Form.Control type="email" name="email" onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.File id="exampleFormControlFile1"
                                   name="image"
                                   // accept="application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                   label="Flyer" onChange={this.handleImage}/>
                    </Form.Group>

                    <Button variant="primary" onClick={this.handleSubmit} style={{width:'100%'}}>
                        Submit
                    </Button>
                </Form>
                <Modal
                    show={this.state.openModal}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Body>
                        {this.state.success ?
                            <h4 style={{backgroundColor:'#33cc33', marginTop:'5px' , textAlign:'center', height:'50px', width:'100%' , borderRadius:'4px'}}> Successfully Uploaded </h4>
                            :
                         <form style={{textAlign:'center'}}>
                            <Loader
                                 visible={this.state.visibility}
                                 type="Rings"
                                 color="#00BFFF"
                                 height={200}
                                 width={200}
                                 timeout={300000} //3 secs
                            />
                        <h2>Uploading... Please Wait</h2>
                        </form>
                        }
                    </Modal.Body>

                </Modal>

            </div>
        )
    }

}

export default WConductor;