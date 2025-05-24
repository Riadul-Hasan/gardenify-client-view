import React from 'react';
import FeatureGarden from './FeatureGarden';
import TipsSection from './TipsSection';
import Additional1 from './Additional1';
import Additional2 from './Additional2';
import HeroSection from './HeroSection';
import Marquee from 'react-fast-marquee';





const Home = () => {

    return (
        <>


            <HeroSection></HeroSection>

            <div className='py-20  container mx-auto'>
                <FeatureGarden></FeatureGarden>
            </div>
            <div className=' py-10 mt-20'>
                <TipsSection></TipsSection>
            </div>

            <div className='bg-green-50  p-10 '>
                <Additional1></Additional1>
            </div>
            <div className='py-10'>
                <Marquee>🌱 Grow Green, Stay Clean! Share Your Gardening Tips & Tricks! 🌼</Marquee>
            </div>
            <div className=' bg-base-200  '>
                <Additional2></Additional2>
            </div>


        </>
    );
};

export default Home;