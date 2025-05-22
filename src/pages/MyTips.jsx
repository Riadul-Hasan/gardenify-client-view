import React from 'react';
import { useLoaderData } from 'react-router';

const MyTips = () => {
    const myTips = useLoaderData()
    console.log("my tips", myTips)
    return (
        <div>
            My tips here
        </div>
    );
};

export default MyTips;