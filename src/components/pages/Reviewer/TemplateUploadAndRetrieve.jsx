import React, {Component} from "react";
import {Button, Form, Table} from "react-bootstrap";
import axios from "axios";

class TemplateUploadAndRetrieve extends Component {

    state = {
        templates: [],
        received: false,
        title:'',
        paper:''
    }

    componentDidMount = () => {

        axios.get('http://localhost:5000/reviewer/getTemplates').then(res => {
            if(res.data.success){
                this.setState({templates:res.data.data})
                this.setState({received:true})
            }
        })

    }

    // handleDelete = (id) => {
    //
    //     axios.delete(`http://localhost:5000/reviewer/deleteTemplate/${id}`).then(res => {
    //         if(res.data.success){
    //             alert("Successfully Deleted");
    //             window.location.reload(false);
    //         }
    //     })
    // }

    handleChange = (e) => {
        const {name , value} = e.target;
        this.setState({[name]:value});
    }

    handlePaper = (e) => {
        this.setState({paper:e.target.files[0]})
        console.log(e.target.files[0])
    }

    handleSubmit = () => {

        let formData = new FormData();
        formData.append("title", this.state.title);
        formData.append("paper", this.state.paper);

        axios.post('http://localhost:5000/reviewer/uploadTemplate',formData).then(res => {
            if(res.data.success){
                alert("Successfully Added");
                window.location.reload(false);
            }
        })

    }

    render() {
        return (
            <>
                <div style={{marginTop: '50px', width: '90%', marginLeft: '5%', marginBottom: '50px'}}>
                    {this.state.received ?
                        <>
                            <h2 style={{textAlign: 'center'}}>Uploaded Template/s</h2>
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Paper</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.templates.map((tracks, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{tracks.title}</td>
                                        <td><a href={tracks.paper}>Click To See</a></td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </>
                        : null}
                        <div style={{border: '1px solid black' , padding:'40px'}}>
                            <h2 style={{textAlign: 'center'}}>Insert Template</h2>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label style={{ color:'black'}}>Name of Template</Form.Label>
                                    <Form.Control type="text" name="title" onChange={this.handleChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label style={{ color:'black'}}>Research Paper</Form.Label>
                                    <Form.File id="exampleFormControlFile1"
                                               name="paper"
                                               style={{ color:'black'}}
                                               accept="application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.presentationml.presentation"
                                               onChange={this.handlePaper}/>
                                </Form.Group>

                                <Button variant="success" onClick={this.handleSubmit} style={{width:'100%'}}>
                                    Insert
                                </Button>
                            </Form>
                        </div>
                </div>
            </>
        )
    }

}

export default TemplateUploadAndRetrieve;