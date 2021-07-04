import {Component} from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";


export class ListAllResearchPapers extends Component{

    state = {
        paper:''
    }

    componentDidMount = () => {
        const id = this.props.match.params.id;
        axios.get(`http://localhost:5000/reviewer/getById/${id}`).then(res => {
            if(res.data.success){
                this.setState({paper:res.data.data})
            }
        })
    }

    render() {
        return(
            <>
            <div style={{paddingTop:'30px'}}></div>
            <div className='container' style={{paddingTop:'30px',width:'40%',paddingBottom:'30px'}}>
                <Card style={{width:'100%'}}>
                    <Card.Header as="h5" style={{textAlign:'center'}}>
                        {this.state.paper.title}
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>
                            Title: {}
                            {this.state.paper.title}
                        </Card.Title>
                        <Card.Text>
                            Author: {}
                            {this.state.paper.author}
                            <p></p>
                            Email: {}
                            {this.state.paper.email}
                            <p></p>
                            Phone Number: {}
                            {this.state.paper.phoneNumber}
                            <p></p>
                            Paper: {}
                            <a href={this.state.paper.paper} >Click</a>
                            <p></p>
                            Approval State: {}
                            {this.state.paper.approval}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
                <div style={{paddingBottom:'50px'}}></div>
            </>
        )
    }
}
export default ListAllResearchPapers;