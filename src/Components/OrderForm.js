import React, { useState } from 'react'; 
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap'; 

export default function OrderForm() {
    const [formData, setFormData] = useState({ 
        name: '', 
        email: '', 
        service: '', 
        comments: '' 
    });

    const servicePrices = {
        Safari: 1500,
        Cultural: 300,
        Beach: 2000,
        Adventure: 800,
        Photography: 1200
    };

    const [validated, setValidated] = useState(false); 
    const [submitted, setSubmitted] = useState(false); 
    const [errorMessages, setErrorMessages] = useState([]);

    const handleChange = (e) => { 
        setFormData({ 
            ...formData, 
            [e.target.name]: e.target.value 
        }); 
    };

    const validateEmail = (email) => {
        const correctEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return correctEmail.test(email);
    };

    const handleSubmit = (e) => { 
        e.preventDefault(); 
        const messages = [];

        if (!formData.name) {
            messages.push("Täisnimi on nõutud.");
        }
        if (!formData.email) {
            messages.push("Meiliaadress on nõutud.");
        } else if (!validateEmail(formData.email)) {
            messages.push("Palun sisestage kehtiv meiliaadress.");
        }
        if (!formData.service) {
            messages.push("Teenuse valik on nõutud.");
        }

        if (messages.length > 0) {
            setErrorMessages(messages);
            setValidated(false);
            setSubmitted(true);
        } else { 
            setValidated(true); 
            setSubmitted(true);
            setErrorMessages([]);
            clearForm();
        } 
    };

    function clearForm() {
        setFormData({ 
            name: '', 
            email: '', 
            service: '', 
            comments: '' 
        });
    }

    const selectedPrice = 
    formData.service ? 
    servicePrices[formData.service] : 0;

    return ( 
        <Container className="my-5"> 
            <h2 className="text-center mb-4">Tellimisteenus</h2> 
            {submitted && validated ? ( 
                <Alert variant="success" className="text-center"> 
                    Vorm edukalt saadetud!
                </Alert> 
            ) : null} 

            {!validated && submitted ? ( 
                <Alert variant="danger" className="text-center"> 
                    {errorMessages.map((message, index) => (
                        <div key={index}>{message}</div>
                    ))}
                </Alert> 
            ) : null} 

            <Form noValidate onSubmit={handleSubmit} className="p-4 border rounded shadow"> 
                <Form.Group as={Row} className="mb-3" controlId="formName"> 
                    <Form.Label column sm={2}>Täisnimi</Form.Label> 
                    <Col sm={10}> 
                        <Form.Control 
                            type="text" 
                            name="name" 
                            placeholder="Sisestage oma täisnimi" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                        /> 
                    </Col> 
                </Form.Group> 

                <Form.Group as={Row} className="mb-3" controlId="formEmail"> 
                    <Form.Label column sm={2}>Meil</Form.Label> 
                    <Col sm={10}> 
                        <Form.Control 
                            type="email" 
                            name="email" 
                            placeholder="Sisestage oma e-posti aadress" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        /> 
                    </Col> 
                </Form.Group> 

                <Form.Group as={Row} className="mb-3" controlId="formService"> 
                    <Form.Label column sm={2}>Teenindus</Form.Label> 
                    <Col sm={5}> 
                        <Form.Control 
                            as="select" 
                            name="service" 
                            value={formData.service} 
                            onChange={handleChange} 
                            required 
                        > 
                            <option value="">Valige…</option>
                            <option value="Safari">Safari ringkäigud</option>
                            <option value="Cultural">Kultuurikogemused</option>
                            <option value="Beach">Rannapuhkus</option>
                            <option value="Adventure">Seiklusreisid</option>
                            <option value="Photography">Metsloomade fotograafia ringkäigud</option>
                        </Form.Control>
                    </Col>
                    <Form.Label column sm={1}>Kuupäev</Form.Label>
                    <Col sm={3}>
                        <Form.Control 
                            type="date" 
                            name="date" 
                            value={formData.date} 
                            onChange={handleChange} 
                            required 
                        />
                    </Col>
                </Form.Group>


                <Form.Group as={Row} className="mb-3" controlId="formComments"> 
                    <Form.Label column sm={2}>Kommentaarid</Form.Label> 
                    <Col sm={10}> 
                        <Form.Control 
                            as="textarea" 
                            name="comments" 
                            rows={3} 
                            placeholder="Täiendavad kommentaarid või soovid" 
                            value={formData.comments} 
                            onChange={handleChange} 
                        /> 
                    </Col> 
                </Form.Group>
                
                <div className="text-center"> 
                    {selectedPrice > 0 && (
                        <p className='mb-2'>Hind kokku: <strong>${selectedPrice}</strong></p>
                    )}
                    <Button variant="primary" type="submit" style={{ backgroundColor: 'white',
                        color: '#6a11cb',
                        border: '2px solid #6a11cb',
                        borderRadius: '5px',
                        transition: 'transform 0.2s, box-shadow 0.2s',}}> 
                        Esitage tellimus
                    </Button> 
                </div> 
            </Form> 
        </Container> 
    ); 
};
