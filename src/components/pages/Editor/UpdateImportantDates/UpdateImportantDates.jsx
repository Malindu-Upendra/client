import {Component} from "react";
import Card from 'react-bootstrap/Card'
import {Button, Form} from "react-bootstrap";
import {TextField} from "@material-ui/core";
import axios from "axios";

export class UpdateImportantDates extends Component{

    constructor(props) {
        super(props);
    }

    state = {
        id:'',
        dates: '',
        description: '',
    }

    componentDidMount = () => {

        const id = this.props.match.params.id;

        axios.get(`http://localhost:5000/editor/getSpecificDate/${id}`).then(res => {
            if(res.data.success){
                const data = res.data.data;
                this.setState({id:data._id})
                this.setState({dates:data.dates})
                this.setState({description:data.description})
            }
        })
    }

    handleChange = (e) => {
        this.setState({

                ...this.state.data,
                [e.target.name]: e.target.value
            }
        );
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const  AddImportant ={
            id:this.state.id,
            dates: this.state.dates,
            description: this.state.description
        };
        console.log('Data send:', AddImportant)
        axios.put('http://localhost:5000/editor/updateImportantDates',AddImportant)
            .then(response => {
                alert('AddImportantDates data are successfully updated')
                window.location = "/editor/getImportantDates"
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }

    render() {
        return(
            <Card style={{ width: '50%', Height:'500px' ,marginLeft: '30%',marginTop: '5%',marginBottom: '5%' }}>
                <Card.Header className={"text-center"} as="h5">Add Important Dates</Card.Header>
                <Card.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" controlId="idate">
                            <TextField style={{ width: '100%' ,marginTop : '3%'}}
                                       id="date"
                                       type="date"
                                       variant="outlined"
                                       defaultValue="2020-01-01"
                                       name="dates"
                                       value={this.state.dates}
                                       onChange={this.handleChange}
                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="idescription">
                            <TextField style={{ width: '100%' }}
                                       id="description"
                                       label="Description"
                                       variant="outlined"
                                       multiline
                                       rows={3}
                                       name="description"
                                       value={this.state.description}
                                       onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Button variant="success" style={{width:'100%'}} type="submit">
                           Update
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        )
    }

}
export default UpdateImportantDates;