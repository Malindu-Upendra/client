import React from 'react';
import {
    ProductsContainer,
    ProductWrapper,
    ProductsHeading,
} from './KeynoteSpeakersElements';
import { Card } from 'react-bootstrap';

const KeynoteSpeakers = ({ heading, data }) => {
    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                <Card style={{ width: '18rem', padding: '1rem', marginRight: '5rem', backgroundColor: 'blue'}}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>15.05.2020</Card.Title>
                        <br/>
                        <Card.Text>
                            Open submission for Application Framework
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', padding: '1rem', backgroundColor: 'red'}}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>15.05.2020</Card.Title>
                        <br/>
                        <Card.Text>
                            Open submission for Application Framework
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', padding: '1rem', marginLeft: '5rem', backgroundColor: 'green' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>15.05.2020</Card.Title>
                        <br/>
                        <Card.Text>
                            Open submission for Application Framework
                        </Card.Text>
                    </Card.Body>
                </Card>
            </ProductWrapper>
        </ProductsContainer>
    );
};


export default KeynoteSpeakers;
