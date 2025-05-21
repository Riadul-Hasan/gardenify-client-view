import React from 'react';
import { useLoaderData } from 'react-router';
import BrowseCard from './BrowseCard';

const BrowseTips = () => {
    const tipsData = useLoaderData()
    console.log(tipsData)
    return (
        <div className='container mx-auto'>
            <h2 className='text-4xl text-green-800 text-center font-bold py-20'>All Gardening Tips Here</h2>
            <div>

                <div className="overflow-x-auto w-3/4 mx-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                {/* <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th> */}
                                <th>Image </th>
                                <th>Title </th>
                                <th>Category</th>
                                <th>Action</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tipsData.map(tips =>
                                    <tr key={tips._id}>

                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={tips.imageUrl}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center gap-3">

                                                <div>
                                                    <div className="font-bold">{tips.title}</div>
                                                    {/* <div className="text-sm opacity-50">United States</div> */}
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p>{tips.category}</p>
                                        </td>

                                        <th>
                                            <button className="btn btn-ghost btn-xs">Details</button>
                                        </th>
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