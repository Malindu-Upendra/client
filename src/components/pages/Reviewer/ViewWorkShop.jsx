import {Component} from "react";
import axios from "axios";
import {Button, Table} from "react-bootstrap";


export class ViewWorkShop extends Component{
    constructor(props) {
        super(props);
    }
    state = {
        workshops:[]
    }

    componentDidMount() {
        axios.get('http://localhost:5000/reviewer/uploadedWorkshops').
        then(res => {
            const  workshops = res.data;
            //console.log( workshops);
            this.setState({ workshops: workshops});
        }).catch(err => err.message)
    }

    DeclineWorkshop = (id,email) => {

        const data = {
            id:id,
            email:email
        }

        axios.put(`http://localhost:5000/reviewer/declineWorkShop/${id}`,data).
        then(res =>{
            if(res.data.success){
                alert(res.data.message);
                window.location.reload(false);
            }
        })
    }

    ApproveWorkshop = (id,email) => {

        const data = {
            id:id,
            email:email
        }

        axios.put(`http://localhost:5000/reviewer/approveWorkShop/${id}`,data).
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
            <h2 style={{textAlign:'center'}}>WorkShops</h2>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Workshop Conductors</th>
                    <th>Email</th>
                    <th>Flyer</th>
                    <th>Approval</th>
                </tr>
                </thead>
                <tbody>
                {this.state.workshops.map((workshops,index) => (
                    <tr>
                        <td>{index + 1}</td>
                        <td><a href={`/ListWorkshop/${workshops._id}`} >{workshops.title}</a></td>
                        <td>{workshops.description}</td>
                        <td>{workshops.wconductors}</td>
                        <td>{workshops.email}</td>
                        <td><a href={workshops.flyer}>Click</a></td>
                        <td>{ workshops.approval==='Not Approved' ?
                            <>
                                <h6 style={{backgroundColor:'yellow' , padding:'9px', color:'black', borderRadius:'3px',width:'100px'}}>
                                    Pending
                                </h6>

                                <Button
                                    variant="outline-success"
                                    style={{ width:'100px'}}
                                    onClick={this.ApproveWorkshop.bind(this,workshops._id,workshops.email)}>
                                    Approve
                                </Button>{' '}

                                <p></p>
                                <Button
                                    variant="outline-danger"
                                    style={{ width:'100px'}}
                                    onClick={this.DeclineWorkshop.bind(this,workshops._id,workshops.email)}>
                                    Reject
                                </Button>{' '}
                            </>
                            :  workshops.approval==='Approved' ?
                                <>
                                    <h6 style={{backgroundColor:'green' , padding:'9px', color:'black', borderRadius:'3px', width:'100px'}}>
                                        Approved</h6>
                                    <p></p>
                                    <Button
                                        variant="outline-danger"
                                        style={{ width:'100px'}}
                                        onClick={this.DeclineWorkshop.bind(this,workshops._id,workshops.email)}>
                                        Reject
                                    </Button>{' '}
                                </>
                                :  workshops.approval==='Declined' ?
                                    <>
                                        <h6 style={{backgroundColor:'red' , padding:'9px', color:'black', borderRadius:'3px', width:'100px'}}>
                                            Rejected
                                        </h6>
                                        <p></p>
                                        <Button
                                            variant="outline-success"
                                            style={{ width:'100px'}}
                                            onClick={this.ApproveWorkshop.bind(this,workshops._id,workshops.email)}>
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
export default ViewWorkShop