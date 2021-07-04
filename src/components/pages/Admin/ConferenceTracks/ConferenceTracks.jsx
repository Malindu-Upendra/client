import { Component } from "react";
import { Button , Table } from "react-bootstrap";
import axios from "axios";

export class ConferenceTracks extends Component {

    state = {
        conferenceTracks: []
    }

    componentDidMount = () => {

        axios.get('http://localhost:5000/admin/getConferenceTracks').then(res => {
            if(res.data.success){
                this.setState({conferenceTracks:res.data.data})
            }})
    }

    ApproveKeynote = (id) => {

        axios.put(`http://localhost:5000/admin/approveTracks/${id}`).then(res => {
                if(res.data.success){
                    window.location.reload(false);
                }
            }
        )

    }

    DeclineKeynote = (id) => {

        axios.put(`http://localhost:5000/admin/declineTracks/${id}`).then(res => {
                if(res.data.success){
                    window.location.reload(false);
                }
            }
        )

    }

    render() {
        return (
            <>
            <div style={{paddingTop:'50px'}}></div>

            <div className="container" style={{ paddingTop: '50px' }}>

                <h2>Conference Tracks</h2><br/>

                <Table style={{fontFamily: "Arial", padding: "10px"}} bordered hover size="sm">
                    <thead>
                    <tr style={{backgroundColor: "blue", color: 'white'}}>

                        <th>Conference Track</th>
                        <th>Requirement</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.conferenceTracks.map(c=>(
                        <tr>
                            <td>{c.heading}</td>
                            <td>{c.description.map(d => (<h4>{d}</h4>))}</td>
                            <td>
                                <>
                                { c.approval==='Not Approved' ?
                                    <>
                                        <h6 style={{backgroundColor:'yellow' , padding:'9px', color:'black', borderRadius:'3px', width:'100px'}}>
                                            Pending
                                        </h6>
                                        <Button
                                            variant="outline-success"
                                            style={{ width:'100px'}}
                                            onClick={this.ApproveKeynote.bind(this,c._id)}>
                                            Approve
                                        </Button>{' '}
                                        <p></p>
                                        <Button
                                            variant="outline-danger"
                                            style={{ width:'100px'}}
                                            onClick={this.DeclineKeynote.bind(this,c._id)}>
                                            Reject
                                        </Button>{' '}
                                    </>
                                    : null }

                                { c.approval==='Approved' ?
                                    <>
                                        <h6 style={{backgroundColor:'green' , padding:'9px', color:'black', borderRadius:'3px', width:'100px'}}>
                                            Approved
                                        </h6>
                                        <p></p>
                                        <Button
                                            variant="outline-danger"
                                            style={{ width:'100px'}}
                                            onClick={this.DeclineKeynote.bind(this,c._id)}>
                                            Reject
                                        </Button>{' '}
                                    </>
                                    : null }

                                { c.approval==='Declined' ?
                                    <>
                                        <h6 style={{backgroundColor:'red' , padding:'9px', color:'black', borderRadius:'3px', width:'100px'}}>
                                            Rejected
                                        </h6>
                                        <p></p>
                                        <Button
                                            variant="outline-success"
                                            style={{ width:'100px'}}
                                            onClick={this.ApproveKeynote.bind(this,c._id)}>
                                            Approve
                                        </Button>{' '}
                                    </>
                                    : null }

                            </>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
            </>
        )
    }

}

export default ConferenceTracks;


