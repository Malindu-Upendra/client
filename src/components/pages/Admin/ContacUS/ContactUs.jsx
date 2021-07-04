import { Component } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

export class ContactUs extends Component {

    state = {
        info:[]
    }

    componentDidMount = () => {

        axios.get('http://localhost:5000/admin/contactUs').then(res => {
            this.setState({info:res.data})
        })

    }

    render() {
        return (
            <>
                <div style={{paddingTop:'50px'}}></div>
                <div className="container">

                    <h2>Messages from Users</h2><br/>

                    <Table style={{fontFamily: "Arial", padding: "10px"}} bordered hover size="sm">
                        <thead>
                        <tr style={{backgroundColor: "blue", color: 'white'}}>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Message</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.info.map((inf,index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{inf.name}</td>
                                <td>{inf.email}</td>
                                <td>{inf.subject}</td>
                                <td>{inf.message}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </>
        )
    }

}

export default ContactUs;


