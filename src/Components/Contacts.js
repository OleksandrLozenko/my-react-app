import React, { Component } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

export default class Contacts extends Component {
    render() {
        return (
            <div className="mt-5">
                <h2 className='text-center m-4'>Meie Kontaktid</h2>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={4} className="mb-4">
                            <Card className="mx-auto" style={{ maxWidth: '300px' }}>
                                <Card.Body>
                                    <Card.Title>Aadress</Card.Title>
                                    <Card.Text>
                                        Safari Tours OÜ<br />
                                        Pärnu mnt 123, 10112 Tallinn, Eesti
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="mx-auto" style={{ maxWidth: '300px' }}>
                                <Card.Body>
                                    <Card.Title>Telefon</Card.Title>
                                    <Card.Text>
                                        +372 5555 1234<br />
                                        Tööaeg: E-R 09:00 - 17:00
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="mx-auto" style={{ maxWidth: '300px' }}>
                                <Card.Body>
                                    <Card.Title>E-post</Card.Title>
                                    <Card.Text>
                                        info@safaritours.ee<br />
                                        Tugimeeskond vastab 24/7
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
