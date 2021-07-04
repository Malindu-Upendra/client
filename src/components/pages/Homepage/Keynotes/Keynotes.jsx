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
} from './KeynoteElement.jsx';
import axios from "axios";


class Keynote extends Component{

    state = {
        keynotes:[]
    }

    componentDidMount = () => {

        axios.get('http://localhost:5000/homepage/getKeynotes').then(res => {
                if (res.data.success) {
                    this.setState({keynotes:res.data.data})
                    console.log(res.data.data)
                }
            }
        )
    }

    render() {

    return (
        <ProductsContainer>
            <ProductsHeading>Keynote Speakers</ProductsHeading>
            <ProductWrapper>
                {this.state.keynotes.map((keynote, index) => {
                    return(
                        <ProductCard key={index}>
                            <ProductImg src={keynote.speakerImg}/>
                            <ProductInfo>
                                <ProductTitle>{keynote.title + " " + keynote.firstname + " " + keynote.lastname}</ProductTitle>
                                <ProductDesc>{keynote.university}</ProductDesc>
                                <a href={`/SpecificKeynoteSpeaker/${keynote._id}`} ><ProductButton>Learn More</ProductButton></a>
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