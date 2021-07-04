import { Component } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

export class Attendees extends Component {

    state = {
        attendees:[]
    }

    componentDidMount = () => {

        axios.get('http://localhost:5000/admin/attendees').then(res => {
            this.setState({attendees:res.data})
        })

    }

    render() {
        return (
<>
            <div style={{paddingTop:'50px'}}></div>
            <div className="container">

                <h2>Registered Attendees To Conference</h2><br/>

                <Table style={{fontFamily: "Arial", padding: "10px"}} bordered hover size="sm">
                    <thead>
                    <tr style={{backgroundColor: "blue", color: 'white'}}>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.attendees.map((attendee,index) => (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{attendee.name}</td>
                        <td>{attendee.email}</td>
                        <td>{attendee.phoneNumber}</td>
                    </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
</>
        )
    }

}

export default Attendees;


