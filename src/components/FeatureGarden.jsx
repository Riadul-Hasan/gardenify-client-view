import React from 'react';
import { useLoaderData } from 'react-router';
import FeatureCard from './FeatureCard';

const FeatureGarden = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <h2 className='text-4xl font-bold'>Features Garden</h2>
            <div className='grid grid-cols-4 gap-6 py-10'>
                {
                    data.map(feature => <FeatureCard key={feature._id} feature={feature}></FeatureCard>)
                }
            </div>
        </div>
    );
};

export default FeatureGarden;