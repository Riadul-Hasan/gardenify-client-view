import React from 'react';
import FeatureGarden from './FeatureGarden';
import TipsSection from './TipsSection';
import Additional1 from './Additional1';
import Additional2 from './Additional2';
import HeroSection from './HeroSection';
import Marquee from 'react-fast-marquee';
import BlogSection from '../pages/pageAdded/BlogSection';
import NewsletterSection from './newSections/NewsletterSection';





const Home = () => {

    return (
        <>


            <HeroSection></HeroSection>

            <div className='py-20  container mx-auto'>
                <FeatureGarden></FeatureGarden>
            </div>
            <div className=' '>
                <TipsSection></TipsSection>
            </div>


            <div>
                <BlogSection></BlogSection>
            </div>
            <div className='border-b-2 border-gray-300  p-10 '>
                <Additional1></Additional1>
            </div>
            <div className='py-10'>
                <Marquee>🌱 Grow Green, Stay Clean! Share Your Gardening Tips & Tricks! 🌼</Marquee>
            </div>
            <div className=' bg-base-200  '>
                <Additional2></Additional2>
            </div>

            <div>
                <NewsletterSection></NewsletterSection>
            </div>


        </>
    );
};

export default Home;