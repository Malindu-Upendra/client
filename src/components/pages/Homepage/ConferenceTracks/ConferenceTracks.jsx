import React, {Component} from 'react';
import {
    ProductsContainer,
    ProductWrapper,
    ProductsHeading,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductButton
} from './ConferenceElement.jsx';
import axios from "axios";

class Keynote extends Component{

    state = {
        conferenceT:[]
    }

    componentDidMount = () => {

        axios.get('http://localhost:5000/homepage/getConferenceTracks').then(res => {
                if (res.data.success) {
                    this.setState({conferenceT:res.data.data})
                    console.log(res.data.data)
                }
            }
        )
    }

    render() {

        return (
            <ProductsContainer>
                <ProductsHeading>Conference Tracks</ProductsHeading>
                <ProductWrapper>
                    {this.state.conferenceT.map((con, index) => {
                            return(
                                <ProductCard key={index}>
                                    <ProductInfo>
                                        <ProductTitle>{con.heading}</ProductTitle>
                                        <ul>
                                        {con.description.map(des => (
                                        // <ProductDesc>{des}</ProductDesc>
                                            <li>{des}</li>
                                        ))}
                                        </ul>
                                    </ProductInfo>
                                </ProductCard>
                            )
                        }
                    )
                    }
                </ProductWrapper>
            </ProductsContainer>
        );
    }

};

export default Keynote;