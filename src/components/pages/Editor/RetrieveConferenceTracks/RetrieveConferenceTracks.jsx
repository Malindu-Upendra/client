import {Component} from "react";
import {Table , Button} from "react-bootstrap";
import axios from "axios";

class RetrieveConferenceTracks extends Component{

    state = {
        conferenceT: []
    }

    componentDidMount = () => {

        axios.get('http://localhost:5000/editor/getConferenceTracks').then(res => {
            this.setState({conferenceT:res.data})
        })

    }

    handleEdit = (id) => {

        window.location = `/editor/updateConferenceTrack/${id}`;

    }

    render() {
        return (
            <div style={{marginTop:'50px' ,width:'90%',marginLeft:'5%', marginBottom: '50px'}}>
                <h2 style={{textAlign:'center'}}>Conference Tracks</h2>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Heading</th>
                    <th>Description</th>
                    <th>Approval</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {this.state.conferenceT.map((tracks,index) => (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{tracks.heading}</td>
                        <td>
                        {tracks.description.map(des => (
                            <h6>{des}</h6>
                        ))}
                        </td>
                        <td>{tracks.approval}</td>
                        <td><Button onClick={this.handleEdit.bind(this,tracks._id)}>Edit</Button></td>
                     </tr>
                ))}
                </tbody>
            </Table>
            </div>
        )
    }

}

export default RetrieveConferenceTracks