import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        const currentDate = new Date().getFullYear();
        
        return (
            <footer className="footer mt-auto py-3" style={{ backgroundColor: '#343a40', position: 'relative' }}>
                <Container
                    className='text-center'
                    fluid
                    style={{
                        background: 'linear-gradient(90deg, #212529, #343a40)',
                        color: '#fff',
                        height: '60px',
                        padding: '15px 0',
                    }}
                >
                    <p style={{ margin: 0 }}>
                        Date created: 23.10.2024 | Group: JPTV22 | Author: Oleksandr Lozenko | Year: {currentDate} | 
                        <a 
                            href="https://kutsehariduskeskus.ee/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ color: '#fff', textDecoration: 'underline', marginLeft: '5px' }}
                        >
                            Visit our site
                        </a> &copy;
                    </p>
                </Container>
            </footer>
        );
    }
}
