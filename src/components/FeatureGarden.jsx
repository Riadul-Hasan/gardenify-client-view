import React from 'react';
import { useLoaderData } from 'react-router';
import FeatureCard from './FeatureCard';

import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'




const FeatureGarden = () => {
    const data = useLoaderData()
    // console.log(data)
    return (
        <div>

            <h2 data-tooltip-id="my-tooltip" data-tooltip-content="Explore Our Experts" className='text-4xl text-center font-bold'>Featured Gardeners</h2>
            <Tooltip id="my-tooltip" />

            <div className='grid grid-cols-1 p-4 lg-p-0 lg:grid-cols-4 gap-6 py-10'>
                {
                    data.map(feature => <FeatureCard key={feature._id} feature={feature}></FeatureCard>)
                }
            </div>
        </div>
    );
};

export default FeatureGarden;