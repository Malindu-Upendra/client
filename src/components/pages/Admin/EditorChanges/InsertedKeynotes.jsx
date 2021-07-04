import {Component} from "react";
import {Table , Button} from "react-bootstrap";
import axios from "axios";

class InsertedKeynotes extends Component{

    state = {
        keynotes:[]
    }

    componentDidMount() {

        axios.get('http://localhost:5000/admin/getKeynotes').then(res => {
            if(res.data.success){
                this.setState({keynotes:res.data.data})
            }
        })

    }

    ApproveKeynote = (id) => {

        axios.put(`http://localhost:5000/admin/approvekeynote/${id}`).then(res => {
            if(res.data.success){
                window.location.reload(false);
            }
        })

    }

    DeclineKeynote = (id) => {

        axios.put(`http://localhost:5000/admin/declinekeynote/${id}`).then(res => {
            if(res.data.success) {
                window.location.reload(false);
            }
        })

    }

    render() {
        return(

            <>
                <div style={{paddingTop:'50px'}}></div>
                <div className="container">

                    <h2>Keynotes for Approval</h2><br/>

                    <Table style={{fontFamily: "Arial", padding: "10px"}} bordered hover size="sm">
                        <thead>
                        <tr style={{backgroundColor: "blue", color: 'white'}}>
                            <th>#</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.keynotes.map((keynote,index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{keynote.title +" "+ keynote.firstname + " "+ keynote.lastname}</td>
                                <td style={{width:'30%'}}><img src={keynote.speakerImg} style={{width:'300px' , height:'300px'}}/></td>
                                <td>
                                    <>
                                        { keynote.approval==='Not Approved' ?
                                            <>
                                                <h6 style={{backgroundColor:'yellow' , padding:'9px', color:'black', borderRadius:'3px', width:'100px'}}>
                                                    Pending
                                                </h6>
                                                <Button
                                                    variant="outline-success"
                                                    style={{ width:'100px'}}
                                                    onClick={this.ApproveKeynote.bind(this,keynote._id)}>
                                                    Approve
                                                </Button>{' '}
                                                <p></p>
                                                <Button
                                                    variant="outline-danger"
                                                    style={{ width:'100px'}}
                                                    onClick={this.DeclineKeynote.bind(this,keynote._id)}>
                                                    Reject
                                                </Button>{' '}
                                            </>
                                            : null }

                                        { keynote.approval==='Approved' ?
                                            <>
                                                <h6 style={{backgroundColor:'green' , padding:'9px', color:'black', borderRadius:'3px', width:'100px'}}>
                                                    Approved
                                                </h6>
                                                <p></p>
                                                <Button
                                                    variant="outline-danger"
                                                    style={{ width:'100px'}}
                                                    onClick={this.DeclineKeynote.bind(this,keynote._id)}>
                                                    Reject
                                                </Button>{' '}
                                            </>
                                            : null }

                                        { keynote.approval==='Declined' ?
                                            <>
                                                <h6 style={{backgroundColor:'red' , padding:'9px', color:'black', borderRadius:'3px', width:'100px'}}>
                                                    Rejected
                                                </h6>
                                                <p></p>
                                                <Button
                                                    variant="outline-success"
                                                    style={{ width:'100px'}}
                                                    onClick={this.ApproveKeynote.bind(this,keynote._id)}>
                                                    Approve
                                                </Button>{' '}
                                            </>
                                            : null }

                                </></td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </>
        )
    }

}

export default InsertedKeynotes;