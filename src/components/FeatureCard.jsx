import React from 'react';

const FeatureCard = ({ feature }) => {
    const { profileImage, name } = feature;
    return (
        <div className="card bg-base-100  shadow-sm">
            <figure>
                <img
                    src={profileImage}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </div>
    );
};

export default FeatureCard;