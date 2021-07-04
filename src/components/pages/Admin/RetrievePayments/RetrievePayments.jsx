import { Component } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

export class RetrievePayments extends Component {

    state = {
        payments:[]
    }

    componentDidMount = () => {

        axios.get('http://localhost:5000/admin/getPayments').then(res => {
            this.setState({payments:res.data})
        })

    }

    render() {
        return (
            <>
                <div style={{paddingTop:'50px'}}></div>
                <div className="container">

                    <h2>Payments</h2><br/>

                    <Table style={{fontFamily: "Arial", padding: "10px"}} bordered hover size="sm">
                        <thead>
                        <tr style={{backgroundColor: "blue", color: 'white'}}>
                            <th>#</th>
                            <th>Email</th>
                            <th>Amount</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.payments.map((attendee,index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{attendee.email}</td>
                                <td>{attendee.amount}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </>
        )
    }

}

export default RetrievePayments;


