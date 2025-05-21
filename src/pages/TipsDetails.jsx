import React from 'react';
import { useLoaderData } from 'react-router';

const TipsDetails = () => {
    const details = useLoaderData()
    console.log(details)
    return (
        <div className='container mx-auto mt-20'>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={details.imageUrl}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{details.title}</h2>
                    <p>Plant Type: {details.plantType}</p>
                    <p> Category: {details.category}</p>
                    <p>Availability: {details.availability}</p>
                    <p>Added by: {details.name}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TipsDetails;