import React from 'react';
import { Link, Navigate, useLoaderData } from 'react-router';
import BrowseCard from './BrowseCard';

const BrowseTips = () => {
    const tipsData = useLoaderData()
    console.log(tipsData)
    return (
        <div className='container mx-auto py-10 min-h-[calc(100vh-300px)]'>
            <title>Browse Tips</title>
            <h2 className='text-2xl text-green-600 text-center font-bold p-10 lg:p-0 lg:py-20'>All Gardening Tips Here</h2>
            <div>

                <div className="overflow-x-auto w-3/4 mx-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>

                                <th>Image </th>
                                <th>Title </th>
                                <th>Category</th>
                                <th>Difficulty</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                tipsData.map(tips =>
                                    <tr key={tips._id}>

                                        <td className='px-6 border border-base-300'>
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={tips.imageUrl}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className='px-6 border border-base-300'>
                                            <div className="flex items-center gap-3">

                                                <div>
                                                    <div className="font-bold">{tips.title}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='px-6 border border-base-300'>
                                            <p>{tips.category}</p>
                                        </td>
                                        <td className='px-6 border border-base-300'>
                                            <p>{tips.difficulty}</p>
                                        </td>

                                        <td className='lg:px-6 border border-base-300'>
                                            <Link to={`/tipsDetails/${tips._id}`} className="btn  bg-green-600 flex justify-center items-center lg:w-3/4 lg:mx-auto text-white lg:btn-xs">See More</Link>
                                        </td>
                                    </tr>)
                            }

                        </tbody>

                    </table>
                </div>

            </div>
        </div>
    );
};

export default BrowseTips;