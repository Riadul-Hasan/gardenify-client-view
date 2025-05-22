import React from 'react';
import { useLoaderData } from 'react-router';

const ExploreGardeners = () => {
    const exploreData = useLoaderData()
    console.log(exploreData)
    return (
        <div>
            <div className='container mx-auto py-20 grid grid-cols-3 gap-6'>
                {
                    exploreData.map(explore => <div className="card bg-base-100  shadow-sm">
                        {/* <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure> */}
                        <div className="avatar flex justify-center">
                            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                                <img src={explore.image} />
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">Card Title</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ExploreGardeners;