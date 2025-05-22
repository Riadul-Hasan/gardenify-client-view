import React from 'react';

const FeatureCard = ({ feature }) => {
    const { profileImage, name } = feature;
    return (
        // <div className="card bg-base-100  shadow-sm">
        //     <figure>
        //         <img
        //             src={profileImage}
        //             alt="Shoes" />
        //     </figure>
        //     <div className="card-body">
        //         <h2 className="card-title">{name}</h2>
        //         <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

        //     </div>
        // </div>
        <div className="card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg  border border-gray-100">

            <figure className="relative pt-[65%] overflow-hidden">
                <img
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={profileImage}
                    alt={name}

                />
            </figure>

            <div className="card-body p-5">
                <h2 className="card-title text-xl font-bold text-gray-800 mb-2">{name}</h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                    A card component has a figure, a body part, and inside body there are title and actions parts
                </p>

                <div className="card-actions justify-end">
                    <button className="btn btn-sm bg-green-600 hover:bg-green-700 text-white">
                        View Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;