import React, { Component } from 'react'
import {
    Container,
    Wrapper,
    Heading,
    Title,
    Card,
    Icon,
    Information,


} from './ImportantDatesElements'
import axios from "axios";

export class RetrieveImportantDates extends Component{

    state = {
        data : []
    }

    componentDidMount = () =>{

        axios.get('http://localhost:5000/homepage/getImportantDates').then(res => {
            if(res.data.success){
                this.setState({data:res.data.data})
            }
        })

    }

    render() {
        return(
            <Container>
                <Heading>Important Dates</Heading>
                <Wrapper>
                    {this.state.data.map((product, index) => {
                        return (
                            <Card key={index}>
                                <Information>
                                    <Icon>
                                        <i style={{fontSize:'50px'}} className="fas fa-calendar-week"></i>
                                    </Icon>
                                    <Title> {product.description + " " +product.dates}</Title>

                                </Information>
                            </Card>
                        );
                    })}
                </Wrapper>
            </Container>
        );
    }
};


export default RetrieveImportantDates;