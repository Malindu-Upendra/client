import { Component } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

export class RetrieveResearch extends Component {

    state = {
        researchPapers:[]
    }

    componentDidMount = () => {

        axios.get('http://localhost:5000/admin/researchpapers').then(res => {
            this.setState({researchPapers:res.data})
        })

    }

    render() {
        return (
            <>
                <div style={{paddingTop:'50px'}}></div>
                <div className="container">

                    <h2>Research Papers</h2><br/>

                    <Table style={{fontFamily: "Arial", padding: "10px"}} bordered hover size="sm">
                        <thead>
                        <tr style={{backgroundColor: "blue", color: 'white'}}>
                            <th>#</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Email</th>
                            <th>Paper</th>
                            <th>Approval</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.researchPapers.map((attendee,index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{attendee.title}</td>
                                <td>{attendee.author}</td>
                                <td>{attendee.email}</td>
                                <td><a href={attendee.paper}>Click</a></td>
                                <td>{attendee.approval}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </>
        )
    }

}

export default RetrieveResearch;


