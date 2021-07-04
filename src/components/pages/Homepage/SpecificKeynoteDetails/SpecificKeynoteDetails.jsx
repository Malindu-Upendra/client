import {Component} from "react";
import {Card,Row} from "react-bootstrap";
import axios from "axios";

class SpecificKeynoteDetails extends Component {

    state = {
        keynote: ''
    }

    componentDidMount = () => {

        const id = this.props.match.params.id;

        axios.get(`http://localhost:5000/homepage/getSpecificKeynote/${id}`).then(res => {
            if (res.data.success) {
                this.setState({keynote: res.data.data});
            }
        })

    }

    render() {
        return (
            <>

                <h2 style={{marginTop: '2%', textAlign: 'center'}}>
                    Keynote Speaker
                </h2>

                <Card style={{
                    width: '90%',
                    marginBottom: '5%',
                    marginLeft: '5%',
                    borderRadius: '5px',
                }}>
                    <img src={this.state.keynote.speakerImg} style={{
                        height: '450px',
                        borderRadius: '5px',
                        width: '40%',
                        marginLeft: '30%',
                        marginBottom: '1%',
                        marginTop: '1%'
                    }}/>
                    <h2 style={{textAlign: 'center'}}>{this.state.keynote.title + " " + this.state.keynote.firstname + " " + this.state.keynote.lastname}</h2>
                    <h5 style={{textAlign: 'center'}}>{this.state.keynote.university}</h5>
                    <p style={{
                        marginLeft: '10%',
                        marginTop: '10px',
                        marginRight: '10%'
                    }}>{this.state.keynote.description}</p>
                </Card>
            </>

        );
    }

}
export default SpecificKeynoteDetails;