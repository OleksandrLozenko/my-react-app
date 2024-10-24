import React, { Component } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap'; 
import Card from 'react-bootstrap/Card';
import cardText from '../Data/advantages.json';

export default class DescriptionOfBenefits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expandedCardIndex: null,
        };
    }

    handleButtonClick = (index) => {
        this.setState((prevState) => ({
            expandedCardIndex: prevState.expandedCardIndex === index ? null : index
        }));
    };

    render() {
        const { expandedCardIndex } = this.state;

        return (
            <div>
                <Container className="mt-5">
                    <h2 className="text-center m-4">Mis teeb meid teistest paremaks?</h2>
                    <Row>
                        {cardText.map((data, index) => (
                            <Col md={4} key={index} className="mb-4">
                                <Card 
                                    className="m-2" 
                                    style={{ 
                                        height: expandedCardIndex === index ? '500px' : '300px',
                                        transition: 'height 0.3s ease'
                                    }}
                                >
                                    <Card.Img 
                                        variant="top" 
                                        src={data.image} 
                                        style={{ display: 'block', width: '100px', height: 'auto', margin: '0 auto', objectFit: 'cover' }} 
                                    /> 
                                    <Card.Body style={{ paddingBottom: '80px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                        <div>
                                            <Card.Title>{data.title}</Card.Title>
                                            <Card.Text style={{ transition: 'opacity 0.3s ease', opacity: expandedCardIndex === index ? 1 : 0.7 }}>
                                                {expandedCardIndex === index ? data.description_all: data.text}
                                            </Card.Text>
                                        </div>
                                    </Card.Body>
                                    <Button 
                                        variant="primary" 
                                        style={{ 
                                            position: 'absolute', left: 0, bottom: 0, width: '100%', display: 'flex', justifyContent: 'center', 
                                            backgroundColor: 'white', color: '#6a11cb', border: '2px solid #6a11cb', borderRadius: '5px', transition: 'transform 0.2s, box-shadow 0.2s' 
                                        }}
                                        onClick={() => this.handleButtonClick(index)}
                                    >
                                        {expandedCardIndex === index ? 'Peida üksikasjad' : 'Kuva üksikasjad'}
                                    </Button>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}
