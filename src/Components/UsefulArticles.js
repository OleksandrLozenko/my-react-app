import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import articles from '../Data/acticles.json';

export default class Articles extends Component {
    render() {
        return (
            <Container className='mt-5'>
                <h2 className='text-center mb-4'>Kasulikud artiklid ettevõtte kohta</h2>
                <Row>
                    {articles.map((article, index) => (
                        <Col md={6} key={index} className='mb-4'>
                            <Card style={{ height: '100%'}}>
                                <Card.Img variant='top' src={article.image} alt={article.title} style={{ maxHeight: '200px', objectFit: 'cover' }} />
                                <Card.Body className='d-flex flex-column'>
                                    <Card.Title>{article.title}</Card.Title>
                                    <Card.Text>{article.description}</Card.Text>
                                    <div className='mt-auto'>
                                        <Button 
                                            variant='primary' 
                                            href={article.link} 
                                            target='_blank' 
                                            rel='noopener noreferrer' 
                                            style={{
                                                backgroundColor: 'white',
                                                color: '#6a11cb',
                                                border: '2px solid #6a11cb',
                                                borderRadius: '5px',
                                                transition: 'transform 0.2s, box-shadow 0.2s',
                                            }}
                                        >
                                            Lugege artiklit
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}
