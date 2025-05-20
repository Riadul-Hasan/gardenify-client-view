import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Hero = () => {
    return (
        <div className='container mx-auto py-10 rounded-2xl'>
            <Slide
                autoplay={true}
                duration={3000}
                indicators={true}
                arrows={true}
            >
                <div className="each-slide-effect">
                    <div
                        style={{
                            backgroundImage:
                                'url(https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)',
                            height: '400px',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <span style={{ color: 'white', fontSize: '2em' }}>Slide 1</span>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div
                        style={{
                            backgroundImage:
                                'url(https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1536&q=80)',
                            height: '400px',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <span style={{ color: 'white', fontSize: '2em' }}>Slide 2</span>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div
                        style={{
                            backgroundImage:
                                'url(https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)',
                            height: '400px',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <span style={{ color: 'white', fontSize: '2em' }}>Slide 3</span>
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default Hero;