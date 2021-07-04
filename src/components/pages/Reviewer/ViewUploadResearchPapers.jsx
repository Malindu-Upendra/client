import {Component} from "react";
import axios from "axios";
import {Button, Table} from "react-bootstrap";


export class ViewUploadResearchPapers extends Component{
    constructor(props) {
        super(props);
    }
    state = {
        ResearchPaper:[]
    }
    componentDidMount() {
        axios.get('http://localhost:5000/reviewer/uploadedResearchPapers').
        then(res => {
            const  ResearchPapers = res.data;
            console.log( ResearchPapers);
            this.setState({ ResearchPaper: ResearchPapers});
        }).catch(err => err.message)
    }

    DeclineResearchPapers = (id,email) => {
        const data = {
            id:id,
            email:email
        }
        axios.put(`http://localhost:5000/reviewer/declineResearch/${id}`,data).
        then(res =>{
            if(res.data.success){
                alert(res.data.message);
                window.location.reload(false);
            }
        })
    }

    ApproveResearchPapers = (id,email) => {
        const data = {
            id:id,
            email:email
        }
        axios.put(`http://localhost:5000/reviewer/approveResearch/${id}`,data).
        then(res =>{
            if(res.data.success){
                alert(res.data.message);
                window.location.reload(false);
            }
        })
    }

    render() {
        return(
            <>
                <div style={{paddingTop:'50px'}}></div>
                <div style={{marginTop:'50px' ,width:'90%',marginLeft:'5%', marginBottom: '50px'}}>
                    <h2 style={{textAlign:'center'}}>Research Papers</h2>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Paper</th>
                            <th>Approval</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.ResearchPaper.map((ResearchPapers,index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td> <a href={`/ListResearchPaper/${ResearchPapers._id}`} >{ResearchPapers.title}</a></td>
                                <td>{ResearchPapers.author}</td>
                                <td>{ResearchPapers.email}</td>
                                <td>{ResearchPapers.phoneNumber}</td>
                                <td><a href={ResearchPapers.paper}>Click</a></td>
                                <td>{ ResearchPapers.approval==='Not Approved' ?
                                    <>
                                        <h6 style={{backgroundColor:'yellow' , padding:'9px', color:'black', borderRadius:'3px', width:'100px'}}>
                                            Pending
                                        </h6>
                                        <Button
                                            variant="outline-success"
                                            style={{ width:'100px'}}
                                            onClick={this.ApproveResearchPapers.bind(this,ResearchPapers._id,ResearchPapers.email)}>
                                            Approve
                                        </Button>{' '}
                                        <p></p>
                                        <Button
                                            variant="outline-danger"
                                            style={{ width:'100px'}}
                                            onClick={this.DeclineResearchPapers.bind(this,ResearchPapers._id,ResearchPapers.email)}>
                                            Reject
                                        </Button>{' '}
                                    </>
                                    :  ResearchPapers.approval==='Approved' ?
                                        <>
                                            <h6 style={{backgroundColor:'green' , padding:'9px', color:'black', borderRadius:'3px', width:'100px'}}>
                                                Approved
                                            </h6>
                                            <p></p>
                                            <Button
                                                variant="outline-danger"
                                                style={{ width:'100px'}}
                                                onClick={this.DeclineResearchPapers.bind(this,ResearchPapers._id,ResearchPapers.email)}>
                                                Reject
                                            </Button>{' '}
                                        </>
                                        :  ResearchPapers.approval==='Declined' ?
                                            <>
                                                <h6 style={{backgroundColor:'red' , padding:'9px', color:'black', borderRadius:'3px', width:'100px'}}>
                                                    Rejected
                                                </h6>
                                                <p></p>
                                                <Button
                                                    variant="outline-success"
                                                    style={{ width:'100px'}}
                                                    onClick={this.ApproveResearchPapers.bind(this,ResearchPapers._id,ResearchPapers.email)}>
                                                    Approve
                                                </Button>{' '}
                                            </>
                                            : null }</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </>
        )
    }

}

export default ViewUploadResearchPapers;