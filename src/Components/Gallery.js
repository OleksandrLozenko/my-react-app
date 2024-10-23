import React, { Component } from 'react';
import { Container, Carousel} from 'react-bootstrap';
import images from '../Data/images.json';

export default class Gallery extends Component {
    render() {
        return (
            <div>
                <Container className="mt-5">
                    <h2 className="text-center m-4">Galerii</h2>
                    <Carousel>
                        {images.map((service, index) => (
                            <Carousel.Item key={index}>
                             <img      className='d-block w-100'
                                        variant="top" 
                                        src={service.src}
                                        alt='gallery'
                                        style={{ maxHeight: '600px', objectFit: 'cover' }}/>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Container>
            </div>
        );
    }
}
