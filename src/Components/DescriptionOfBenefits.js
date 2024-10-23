import React, { Component } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap'; 
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import cardText from '../Data/advantages.json';

export default class DescriptionOfBenefits extends Component {
    render() {
        return (
            <div>
                <Container className="mt-5">
                    <h2 className="text-center m-4">Mis teeb meid teistest paremaks?</h2>
                    <Row>
                        {cardText.map((data, key) => (
                            <Col md={4} key={key} className="mb-4">
                                <Card className="m-2" style={{ height: '300px', position: 'relative' }}>
                                    <Card.Img 
                                        variant="top" 
                                        src={data.image} 
                                        style={{ display: 'block', width:'100px',height:'auto', margin: '0 auto',objectFit: 'cover' }} 
                                    /> 
                                    <Card.Body style={{ paddingBottom: '80px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                        <div>
                                            <Card.Title>{data.title}</Card.Title>
                                            <Card.Text>{data.text}.</Card.Text>
                                        </div>
                                    </Card.Body>
                                    <Link to={data.link} style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', display: 'flex', justifyContent: 'center' }}>
                                        <Button variant="primary" style={{ width: '125px',                                                 backgroundColor: 'white',
                                                color: '#6a11cb',
                                                border: '2px solid #6a11cb',
                                                borderRadius: '5px',
                                                transition: 'transform 0.2s, box-shadow 0.2s',}}>{data.caption}</Button>
                                    </Link>
                                </Card>
                            </Col>
                            
                        ))}
                    </Row>
                </Container>
            </div>

        );
    }
}
