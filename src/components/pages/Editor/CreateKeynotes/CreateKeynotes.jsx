import {Component} from "react";
import Card from "react-bootstrap/Card";
import {Button, Col, Form, Row} from "react-bootstrap";
import axios from "axios";


export class CreateKeynotes extends Component{


    constructor(props) {
        super(props);
    }

    state = {
        title: '',
        firstname: '',
        lastname: '',
        university: '',
        description: '',
        image:'',
        previewImage:''
    }

    handleChange = (e) => {
        this.setState({

                ...this.state.data,
                [e.target.name]: e.target.value
            }
        );
    }


    handleSubmit = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append("title", this.state.title);
        formData.append("firstname", this.state.firstname);
        formData.append("lastname", this.state.lastname);
        formData.append("university", this.state.university);
        formData.append("description", this.state.description);
        formData.append("image", this.state.image);

         await axios.post('http://localhost:5000/editor/keynotes',formData)
            .then(response => {
                 alert('KeyNotes data successfully inserted')
                 window.location.reload(false)
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }

    handleImage = (e) => {
        this.setState({image:e.target.files[0]});
        this.handlePreviewImage(e.target.files[0])
        console.log(e.target.files[0])
    }

    handlePreviewImage = (image) => {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onloadend = () => {
            this.setState({previewImage:reader.result});
        }
    }

    render() {
        return(
                <div style={{paddingBottom:'40px', paddingTop:'40px'}}>
                    <div className='container' style={{paddingTop:'40px', paddingBottom:'40px'}}>
                    <Card>
                        <Card.Header className="text-center" as="h5">KeyNote Speaker</Card.Header>
                        <Card.Body>
                        <div className='container'>

                            <Form onSubmit={this.handleSubmit}>
                                <Row>

                                    <Col sm='2'>
                                        <Form.Control
                                            placeholder="Title"
                                            type="text"
                                            name="title"
                                            value={this.state.title}
                                            onChange={this.handleChange}
                                        />
                                    </Col>

                                    <Col sm='5'>
                                        <Form.Control
                                            placeholder="First name"
                                            type="text"
                                            name="firstname"
                                            value={this.state.firstname}
                                            onChange={this.handleChange}
                                        />
                                    </Col>

                                    <Col sm='5'>
                                        <Form.Control
                                            placeholder="Last name"
                                            type="text"
                                            name="lastname"
                                            value={this.state.lastname}
                                            onChange={this.handleChange}
                                        />
                                    </Col>
                                </Row>
                                <p></p>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    {/*<Form.Label>Email address</Form.Label>*/}
                                    <Form.Control
                                        type="text"
                                        placeholder="University"
                                        name="university"
                                        value={this.state.university}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    {/*<Form.Label>Password</Form.Label>*/}
                                    <Form.Control
                                        as="textarea"
                                        rows="5"
                                        placeholder="Description"
                                        name="description"
                                        value={this.state.description}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.File
                                        style={{width:'100%'}}
                                        id="custom-file-translate-scss"
                                        label="choose the Picture"
                                        name="image"
                                        accept="images*/"
                                        onChange={this.handleImage}
                                        custom
                                    />
                                </Form.Group>
                                {this.state.previewImage && (<div style={{width:'100%'}}>
                                    <img style={{alignContent:'center' , width:'100%', height:'500px' ,marginBottom:'20px'}} src={this.state.previewImage}/>
                                </div>)}
                                <Button variant="primary" type="submit" style={{width:'100%'}}>
                                    <i className="fas fa-plus-circle"></i> {}
                                     Add Keynotes
                                </Button>
                            </Form>
                        </div>
                        </Card.Body>
                    </Card>
                    </div>
                </div>

        )
    }

}
export default CreateKeynotes;