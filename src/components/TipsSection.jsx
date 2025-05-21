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
                    tips.map(tip => <div className="card  bg-base-100 card-lg shadow-sm">
                        <div className="card-body">
                            <h2 className="px-2 flex justify-center items-center rounded-2xl text-blue-600 font-semibold text-sm bg-blue-100 w-3/7">{tip.category}</h2>
                            <p className='font-bold mt-2'>{tip.title}</p>
                            <p className='text-sm text-gray-600 py-1 pb-6 border-b-1 border-dashed'>{tip.content}</p>
                            <div className="card-actions mt-4 flex justify-between items-center">
                                <button className="text-sm ">{tip.date}</button>
                                <button className="text-sm font-bold text-green-700">Save</button>
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