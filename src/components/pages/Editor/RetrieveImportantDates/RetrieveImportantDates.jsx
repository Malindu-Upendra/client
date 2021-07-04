import {Component} from "react";
import {Button, Table} from "react-bootstrap";
import axios from "axios";

class RetrieveImportantDates extends Component{

    state = {
        importantDates:[]
    }

    componentDidMount = () => {

        axios.get('http://localhost:5000/editor/getImportantDates').then(res => {
            this.setState({importantDates:res.data})
        })

    }

    handleEdit = (id) => {

        window.location = `/editor/updateImportantDate/${id}`

    }

    render() {
        return (
            <div style={{marginTop:'50px' ,width:'90%',marginLeft:'5%', marginBottom: '50px'}}>
                <h2 style={{textAlign:'center'}}>Important Dates</h2>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Approval</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.importantDates.map((info,index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{info.dates}</td>
                            <td>{info.description}</td>
                            <td>{info.approval}</td>
                            <td><Button onClick={this.handleEdit.bind(this,info._id)}>Edit</Button></td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        )
    }

}

export default RetrieveImportantDates