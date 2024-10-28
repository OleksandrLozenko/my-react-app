import React, { Component } from 'react';
import { Container, Carousel, Card, Button } from 'react-bootstrap';
import servicesData from '../Data/servicesData.json';

export default class ServicesCarousel extends Component {
    render() {
        return (
            <div>
                <Container className="mt-5">
                    <h2 className="text-center m-4">Meie teenused</h2>
                    <Carousel style={{ minHeight: '700px' }}>
                        {servicesData.map((service, index) => (
                            <Carousel.Item key={index}>
                                <Card className="text-center">
                                    <Card.Img 
                                        variant="top" 
                                        src={service.image} 
                                        style={{ height: '600px', objectFit: 'cover', maxWidth: '100%' }}
                                    />
                                    <Card.Body>
                                        <Card.Title>{service.title}</Card.Title>
                                        <Card.Text style={{height:"100px"}}>{service.description}</Card.Text>
                                        <Button 
                                            variant="primary" 
                                            style={{
                                                fontSize: '20px',
                                                backgroundColor: '#6a11cb',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '5px',
                                                transition: 'transform 0.2s, box-shadow 0.2s',
                                                position: 'relative',
                                                zIndex: 3
                                            }}>
                                                <a href='#order' style={{ textDecoration: 'none', color: 'white' }}>{service.price}</a>
                                            </Button>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Container>
            </div>
        );
    }
}
