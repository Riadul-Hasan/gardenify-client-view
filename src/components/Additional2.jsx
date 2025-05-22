import React from 'react';
import Garden from '../assets/garden.jpg'

const Additional2 = () => {
    return (
        <div
            className="hero min-h-screen "
            style={{
                backgroundImage: `url(${Garden})`,
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-white lg:w-2/5 lg:p-10  text-center backdrop-blur-sm bg-white/10">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold">We are now <span className='text-blue-500'>Worldwide</span></h1>
                    <p className="mb-5 text-blue-200">
                        Designed to connect talented professionals with top tech companies, our website offers a seamless experience to browse, filter, and apply for a wide range of IT and software development positions.
                    </p>
                    <div className='flex justify-around w-auto lg:w-3/5 mx-auto '>
                        <button className="btn bg-gradient-to-r from-blue-400  to-cyan-200 border-none ">Explore Opportunities</button>
                        <button className="btn bg-transparent text-white">Learn More</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Additional2;