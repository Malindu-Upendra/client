import { Component } from "react";
import {Button, Table} from "react-bootstrap";
import axios from "axios";

export class ImportantDates extends Component {

    state = {
        importantDates:[]
    }

    componentDidMount = () => {

        axios.get('http://localhost:5000/admin/getImportantDates').then(res => {
            this.setState({importantDates:res.data.data})
        })

    }

    ApproveDate = (id) => {

        axios.put(`http://localhost:5000/admin/approveDate/${id}`).then(res => {
                if(res.data.success){
                    window.location.reload(false);
                }
            }
        )

    }

    DeclineDate = (id) => {

        axios.put(`http://localhost:5000/admin/declineDate/${id}`).then(res => {
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

                <h2>Important Dates</h2><br/>

                <Table style={{fontFamily: "Arial", padding: "10px"}} bordered hover size="sm">
                    <thead>
                    <tr style={{backgroundColor: "blue", color: 'white'}}>
                        <th>#</th>
                        <th>Date</th>
                        <th>description</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.importantDates.map((info,index)=>(
                        <tr>
                            <td>{index + 1}</td>
                            <td>{info.dates}</td>
                             <td>{info.description}</td>
                             <td><>
                                 { info.approval==='Not Approved' ?
                                     <>
                                         <h6 style={{backgroundColor:'yellow' , padding:'9px', color:'black', borderRadius:'3px', width:'100px'}}>
                                             Pending
                                         </h6>
                                         <Button
                                             variant="outline-success"
                                             style={{ width:'100px'}}
                                             onClick={this.ApproveDate.bind(this,info._id)}>
                                             Approve
                                         </Button>{' '}
                                         <p></p>
                                         <Button
                                             variant="outline-danger"
                                             style={{ width:'100px'}}
                                             onClick={this.DeclineDate.bind(this,info._id)}>
                                             Reject
                                         </Button>{' '}
                                     </>
                                     :  info.approval==='Approved' ?
                                     <>
                                         <h6 style={{backgroundColor:'green' , padding:'9px', color:'black', borderRadius:'3px', width:'100px'}}>
                                             Approved
                                         </h6>
                                         <p></p>
                                         <Button
                                             variant="outline-danger"
                                             style={{ width:'100px'}}
                                             onClick={this.DeclineDate.bind(this,info._id)}>
                                             Reject
                                         </Button>{' '}
                                     </>
                                     :  info.approval==='Declined' ?
                                     <>
                                         <h6 style={{backgroundColor:'red' , padding:'9px', color:'black', borderRadius:'3px', width:'100px'}}>
                                             Rejected
                                         </h6>
                                         <p></p>
                                         <Button
                                             variant="outline-success"
                                             style={{ width:'100px'}}
                                             onClick={this.ApproveDate.bind(this,info._id)}>
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

export default ImportantDates;


