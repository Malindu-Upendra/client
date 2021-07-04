import {Component} from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";



export class ListAllWorkshop extends Component{

    state = {
        paper:''
    }

    componentDidMount = () => {
        const id = this.props.match.params.id;
        axios.get(`http://localhost:5000/reviewer/workshopGetById/${id}`).then(res => {
            if(res.data.success){
                this.setState({paper:res.data.data})
            }
        })
    }

    render() {
        return(
            <>
                <div style={{paddingTop:'30px'}}></div>
                <div className='container' style={{paddingTop:'30px',width:'40%',paddingBottom:'30px',paddingLeft:'30px'}}>
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
                                description: {}
                                {this.state.paper.description}
                                <p></p>
                                Workshop Conductor: {}
                                {this.state.paper.wconductors}
                                <p></p>
                                Email: {}
                                {this.state.paper.email}
                                <p></p>
                                flyer: {}
                                <a href={this.state.paper.flyer} >Click</a>
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

export default ListAllWorkshop;