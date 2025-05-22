import React from 'react';
import Hero from './Hero';
import FeatureGarden from './FeatureGarden';
import TipsSection from './TipsSection';
import Additional1 from './Additional1';
import Additional2 from './Additional2';

const Home = () => {
    return (
        <>
            <div className=' container mx-auto '>
                <Hero></Hero>
                <div className='py-20  container mx-auto'>
                    <FeatureGarden></FeatureGarden>
                </div>
                <div className='bg-blue-50 py-10 mt-20'>
                    <TipsSection></TipsSection>
                </div>
            </div>
            <div className='mt-20 bg-gradient-to-r from-green-100 via-gray-300 to-lime-100 p-10 mb-20'>
                <Additional1></Additional1>
            </div>
            <div className='mt-20 bg-base-200  mb-20'>
                <Additional2></Additional2>
            </div>

        </>
    );
};

export default Home;