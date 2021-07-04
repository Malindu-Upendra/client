import { Component } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

export class RetrieveWorkShop extends Component {

    state = {
        workshops:[]
    }

    componentDidMount = () => {

        axios.get('http://localhost:5000/admin/workshops').then(res => {
            this.setState({workshops:res.data})
        })

    }

    render() {
        return (
            <>
                <div style={{paddingTop:'50px'}}></div>
                <div className="container">

                    <h2>Workshops</h2><br/>

                    <Table style={{fontFamily: "Arial", padding: "10px"}} bordered hover size="sm">
                        <thead>
                        <tr style={{backgroundColor: "blue", color: 'white'}}>
                            <th>#</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>WorksShop Conductors</th>
                            <th>Email</th>
                            <th>Flyer</th>
                            <th>Approval</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.workshops.map((attendee,index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{attendee.title}</td>
                                <td>{attendee.description}</td>
                                <td>{attendee.wconductors}</td>
                                <td>{attendee.email}</td>
                                <td><a href={attendee.flyer}>Click</a></td>
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

export default RetrieveWorkShop;


