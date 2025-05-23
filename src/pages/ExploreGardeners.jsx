import React from 'react';
import { useLoaderData } from 'react-router';

const ExploreGardeners = () => {
    const exploreData = useLoaderData()
    console.log(exploreData)
    return (
        <div className='py-10 lg:py-20 '>
            <h2 className='text-4xl font-semibold container mx-auto py-8 p-4 '>Explore Us</h2>
            <div className='container mx-auto  grid grid-cols-1 p-4 lg:p-0 lg:grid-cols-3 gap-6'>

                {
                    exploreData.map(explore => <div className="card bg-base-100  shadow-sm border border-green-400 pt-6">

                        <div className="avatar flex justify-center">
                            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                                <img src={explore.image} />
                            </div>
                        </div>
                        <div className="card-body text-center">
                            <h2 className="text-xl font-semibold">{explore.name}</h2>
                            <p><span>Age:</span>{explore.age}</p>
                            <p><span className='font-bold mr-2'>Gender:</span>{explore.gender}</p>
                            <p><span className='font-bold mr-2'>Tips Shared:</span>{explore.total_shared_tips}</p>
                            <p className='text-green-700'>{explore.experiences}</p>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ExploreGardeners;