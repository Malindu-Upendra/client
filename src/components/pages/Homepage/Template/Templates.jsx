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
} from './TemplateElement.jsx';
import axios from "axios";


class Template extends Component{

    state = {
        templates:[]
    }

    componentDidMount = () => {

        axios.get('http://localhost:5000/homepage/getTemplates').then(res => {
                if (res.data.success) {
                    this.setState({templates:res.data.data})
                    console.log(res.data.data)
                }
            }
        )
    }

    render() {

        return (
            <ProductsContainer>
                <ProductsHeading>Templates</ProductsHeading>
                <ProductWrapper>
                    {this.state.templates.map((temp, index) => {
                            return(
                                <ProductCard key={index}>
                                    <ProductImg src="https://img.favpng.com/2/0/21/microsoft-word-word-processor-document-template-png-favpng-8evHqQZGDUXXAhBzrSds5tSRk.jpg"/>
                                    <ProductInfo>
                                        <ProductTitle>{temp.title}</ProductTitle>
                                        <a href={temp.paper} ><ProductButton>Download</ProductButton></a>
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

export default Template;