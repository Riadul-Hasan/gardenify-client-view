import React, { useEffect, useState } from 'react';

const TipsSection = () => {
    const [tips, setTips] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/tips")
            .then(res => res.json())
            .then(data => setTips(data))
            .catch(error => console.error('Error fetching tips:', error));
    }, []);
    return (
        <div>
            <div className='space-y-4 text-center py-4'>
                <h2 className='font-bold text-4xl  text-green-800'>Top Gardening Tips</h2>
                <p className='text-gray-500'>Discover wisdom from fellow garden enthusiasts</p>

            </div>

            <div className='grid grid-cols-3 gap-6 p-4'>
                {
                    tips.map(tip => <div className="card  bg-base-100 card-lg shadow-sm ">
                        <div className="card-body">
                            <h2 className="px-2 flex justify-center items-center rounded-2xl text-green-800 font-semibold text-sm bg-blue-100 w-3/7">{tip.category}</h2>

                            <div className='flex items-center gap-4 py-6'>
                                <div className='relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24'>
                                    <img
                                        className='absolute w-full h-full object-cover rounded-lg'
                                        src={tip.imageUrl}
                                        alt={tip.title}
                                    />
                                </div>
                                <p className='text-lg sm:text-xl font-semibold line-clamp-2'>
                                    {tip.title}
                                </p>
                            </div>

                            <div className=''>
                                <p className='text-sm  py-1   '><span className=' text-green-600 font-bold'>Plant Type: </span> <span className=' text-gray-600 text-sm'>{tip.plantType}</span></p>
                                <p className='text-sm  py-1   '><span className=' text-green-600 font-bold'>Category: </span> <span className=' text-gray-600 text-sm'>{tip.category}</span></p>

                            </div>
                            <div className=' '>
                                <p className='text-sm  py-1   '><span className=' text-green-600 font-bold'>Description: </span> <span className=' text-gray-600 text-sm'>{tip.description}</span></p>
                                <p className='text-sm  py-1   '><span className=' text-green-600 font-bold'>Difficulty: </span> <span className=' text-gray-600 text-sm'>{tip.difficulty}</span></p>
                            </div>

                        </div>
                    </div>


                    )
                }
            </div>
        </div>


    );
};

export default TipsSection;