import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router';
import Swal from 'sweetalert2';


const MyTips = () => {
    const { user } = use(AuthContext)
    const [myTip, setMyTip] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/myTips?email=${user.email}`)
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
                fetch(`http://localhost:3000/shareTips/${id}`, {
                    method: "DELETE",

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })



            }
        });
    }
    return (

        <div className='container mx-auto py-20'>
            <h2 className='text-4xl text-green-800 text-center font-bold py-20'>My All Tips</h2>
            <div>

                <div className="avatar flex items-center justify-center">
                    <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                        <img src={user.photoURL} />
                    </div>
                </div>

                <div className="overflow-x-auto w-3/4 mx-auto">
                    <div className=' text-center py-10'>
                        <p><span className='text-xl font-bold text-blue-500'>Username:</span> <span className='font-semibold'>{user.displayName}</span></p>
                        <p><span className='text-xl font-bold text-blue-500'>Email:</span> <span className='font-semibold'>{user.email}</span></p>

                    </div>
                    <table className="table">

                        <thead>
                            <tr className='bg-base-200'>

                                <th>Title </th>
                                <th>Tips Description</th>
                                <th>Category</th>
                                <th>Action</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myTip.map(tips =>
                                    <tr key={tips._id}>


                                        <td>
                                            <div className="flex items-center gap-3">

                                                <div>
                                                    <div className="font-bold">{tips.title}</div>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            <p>{tips.description}</p>
                                        </td>
                                        <td>
                                            <p>{tips.category}</p>
                                        </td>

                                        <th>
                                            <button className="btn btn-ghost btn-xs">Update</button>
                                            <button onClick={() => handleDelete(tips._id)} className="btn btn-ghost btn-xs">Delete</button>
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

export default MyTips;