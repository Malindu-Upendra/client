import React ,{Component} from "react";
import { Button} from "react-bootstrap";
import axios from "axios";
import Card from "react-bootstrap/Card";

class RetrieveKeynotes extends Component{

    state = {
        keynotes: []
    }

    componentDidMount = () => {

        axios.get('http://localhost:5000/editor/getKeynotes').then(res => {
            this.setState({keynotes:res.data})
        })

    }

    handleUpdate = (id) => {

        window.location = `/editor/updateKeynote/${id}`

    }

    render() {
        return (
            <>
            <h2 style={{textAlign:'center'}}>Keynotes</h2>
            <div style={{marginTop:'50px' ,width:'90%',marginLeft:'30%', marginBottom: '50px'}}>
                {this.state.keynotes.map(keynote => (
                <Card style={{ width: '40rem' ,borderColor:'black', marginBottom: '50px'}}>
                    <Card.Img variant="top" style={{width:'500px', marginLeft:'10%' , height:'500px'}} src={keynote.speakerImg} />
                    <Card.Body>
                        <Card.Title>{keynote.title + " " + keynote.firstname + " " + keynote.lastname}</Card.Title>
                        <Card.Text>
                            <h2>{keynote.university}</h2>
                            {keynote.description}
                            {keynote.approval === 'Approved' ?
                                <h2 style={{backgroundColor:'Green', textAlign:'center'}}>Approved</h2>
                                : keynote.approval === 'Not Approved' ? <h2 style={{backgroundColor:'yellow', textAlign:'center'}}>Pending</h2>:
                                    <h2 style={{backgroundColor:'red' , textAlign:'center'}}>Declined</h2> }
                        </Card.Text>
                        <Button variant="primary" onClick={this.handleUpdate.bind(this,keynote._id)} style={{width:'100%'}}>Edit</Button>
                    </Card.Body>
                </Card>
                ))}
            </div>
            </>
        )
    }

}

export default RetrieveKeynotes