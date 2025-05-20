import React from 'react';
import Hero from './Hero';
import FeatureGarden from './FeatureGarden';
import TipsSection from './TipsSection';

const Home = () => {
    return (
        <div className=' container mx-auto'>
            <Hero></Hero>
            <div className='py-20 bg-red-50 container mx-auto'>
                <FeatureGarden></FeatureGarden>
            </div>
            <div className='bg-blue-50 py-10 mt-20'>
                <TipsSection></TipsSection>
            </div>
        </div>
    );
};

export default Home;