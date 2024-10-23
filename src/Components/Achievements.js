import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import achievementsData from '../Data/achievementsData.json';

export default class Achievements extends Component {
    render() {
        return (
            <div>
                <Container className="mt-5">
                    <h2 className="text-center m-4">Saavutused</h2>
                    <Row>
                        {achievementsData.map((achievement, index) => (
                            <Col md={4} key={index} className="mb-4">
                                <Card className="text-center" style={{height:'350px'}}>
                                    <Card.Img 
                                        variant="top" 
                                        src={achievement.image} 
                                        style={{ height: '200px', objectFit: 'cover' }} 
                                    />
                                    <Card.Body>
                                        <Card.Title>{achievement.title}</Card.Title>
                                        <Card.Text>{achievement.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}
