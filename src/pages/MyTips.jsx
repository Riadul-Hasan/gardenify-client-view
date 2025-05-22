import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';


const MyTips = () => {
    const { user } = use(AuthContext)
    const [myTip, setMyTip] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/myTips?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyTip(data))
    }, [user])
    return (
        <div className='min-h-[calc(100vh-300px)] container mx-auto mt-20'>
            {myTip.length}
            {
                myTip.map(tip => <p>{tip.email}</p>)
            }
        </div>
    );
};

export default MyTips;