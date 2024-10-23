import React, { useState, useEffect } from 'react';
import programsList from '../Data/about.json';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

export default function InfoSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % programsList.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + programsList.length) % programsList.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    const { name, description, description2, image } = programsList[currentIndex];

    return (
        <Container className="my-5">
            <h2 className="text-center m-4">Firmast</h2>
            <Row className="align-items-center">
                <Col md={6}>
                    <Card style={{height: '420px'}}>
                        <Card.Body>
                            <Card.Title><h2>{name}</h2></Card.Title>
                            <Card.Text>
                                {description.split('\n').map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                                {description2}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <img src={image} alt={name} className="img-fluid" style={{borderRadius: '10px'}} />
                </Col>
            </Row>
            <div className="d-flex justify-content-center mt-3">
                <Button variant="primary" onClick={prevSlide} className="mx-3" style={{                                                backgroundColor: 'white',
                                                color: '#6a11cb',
                                                border: '2px solid #6a11cb',
                                                borderRadius: '5px',
                                                transition: 'transform 0.2s, box-shadow 0.2s',}}>⇐</Button>
                <Button variant="primary" onClick={nextSlide} className="mx-3" style={{                                                backgroundColor: 'white',
                                                color: '#6a11cb',
                                                border: '2px solid #6a11cb',
                                                borderRadius: '5px',
                                                transition: 'transform 0.2s, box-shadow 0.2s',}}>⇒</Button>
            </div>
        </Container>
    );
}
