import React from 'react';
import { FaLocationDot, FaRegStar } from 'react-icons/fa6';
import { Typewriter } from 'react-simple-typewriter'

const FeatureCard = ({ feature }) => {
    const { profileImage, name, specialty, location, bio } = feature;
    return (

        <div className="card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg  border border-gray-100">

            <figure className="relative pt-[65%] overflow-hidden">
                <img
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={profileImage}
                    alt={name}

                />
            </figure>

            <div className="card-body p-5">

                <h2 className="card-title text-xl font-bold text-gray-800 mb-2">
                    <Typewriter
                        loop={1}
                        cursor
                        cursorStyle=""
                        typeSpeed={200}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        words={[name]}
                    ></Typewriter>
                </h2>
                <p className='flex items-center gap-3 text-cyan-800'><FaRegStar />{specialty}</p>
                <p className='flex  items-center gap-3 text-cyan-800'><FaLocationDot />{location}</p>
                <p className="text-cyan-800 mb-4 line-clamp-2">
                    {bio}
                </p>

                <div className="card-actions justify-end">
                    <button className="btn btn-sm bg-green-600 hover:bg-green-700 border-none text-white">
                        View Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;