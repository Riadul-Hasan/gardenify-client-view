import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router';
import Swal from 'sweetalert2';


const MyTips = () => {
    const { user } = use(AuthContext)

    const [myTip, setMyTip] = useState([])

    useEffect(() => {
        fetch(`https://gardening-server-theta.vercel.app/myTips?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyTip(data))
    }, [user])




    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://gardening-server-theta.vercel.app/shareTips/${id}`, {
                    method: "DELETE",

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Tips Deleted Successfully",
                                icon: "success"
                            });
                            // delete from ui
                            const remainingTips = myTip.filter(rem => rem._id !== id)
                            setMyTip(remainingTips)
                        }
                    })

            }
        });
    }
    return (


        <div className='container mx-auto mb-32'>
            <h2 className='text-3xl text-green-600 text-center font-bold py-10 dark:text-red-500'>My Tips</h2>


            <div className="avatar flex items-center justify-center">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                    <img src={user.photoURL} />
                </div>
            </div>

            <div className="text-center py-10">
                <p><span className='text-xl font-bold text-blue-500'>Username:</span> <span className='font-semibold'>{user.displayName}</span></p>
                <p><span className='text-xl font-bold text-blue-500'>Email:</span> <span className='font-semibold'>{user.email}</span></p>
            </div>

            {myTip.length < 1 ? (
                <div className="text-center text-red-500 text-2xl p-10 bg-base-300 font-semibold py-20">
                    <p>No tips added yet.</p>
                </div>
            ) : (
                <div className="overflow-x-auto w-3/4 mx-auto">
                    <table className="table">
                        <thead>
                            <tr className='bg-base-300'>
                                <th>Title </th>
                                <th>Tips Description</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myTip.map(tips => (
                                <tr key={tips._id}>
                                    <td className='px-6 border border-base-300'>
                                        <div className="flex items-center gap-3 px-6 ">
                                            <div className="font-bold ">{tips.title}</div>
                                        </div>
                                    </td>
                                    <td className='px-6 border border-base-300 '>{tips.description}</td>
                                    <td className='px-6 border-b border-base-300'>{tips.category}</td>
                                    <td className='flex gap-4 items-center p-6 px-6 border border-base-300'>
                                        <Link to={`/updateTips/${tips._id}`} className="btn btn-ghost bg-green-400  btn-xs">Update</Link>
                                        <button onClick={() => handleDelete(tips._id)} className="btn btn-secondary btn-xs">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );


};

export default MyTips;