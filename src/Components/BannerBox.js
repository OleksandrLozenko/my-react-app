import React from 'react';
import { Button, Container } from 'react-bootstrap';

export default function BannerBox() {
    return (
        <Container
            fluid
            className="banner-container text-white d-flex align-items-center justify-content-center"
            style={{
                backgroundImage: `url(https://masseeds.com/wp-content/uploads/2023/10/green-banner-1900x600.png)`,
                width: "100%",
                height: 600,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.85,
                position: 'relative'
            }}
        >
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1
            }} />
            <div className="text-center" style={{ zIndex: 2 }}>
                <h1 className="display-4 mb-3" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}><b>Avastage koos meiega Aafrikat</b></h1>
                <h3 className="lead mb-4" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>
                    Avastage ainulaadseid seiklusi ja teie vajadustele kohandatud tipptasemel teenuseid.<br />
                    Kogege mandrit viisil, mida te pole kunagi ette kujutanud.
                </h3>
                <Button className="px-5 py-3" style={{
                    fontSize: '20px',
                    backgroundColor: '#6a11cb',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    position: 'relative',
                    zIndex: 3
                }}>
                    <a href='#order' style={{ textDecoration: 'none', color: 'white' }}>Osta ringreis</a>
                </Button>
            </div>
        </Container>
    );
}
