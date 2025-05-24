import React, { use } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const UpdateTips = () => {
    const singleData = useLoaderData()
    const { user } = use(AuthContext)
    const navigate = useNavigate()
    // console.log(singleData)


    const handleUpdateTips = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const updatedTip = Object.fromEntries(formData.entries())
        // console.log(updatedTip)

        // send update tip to database
        fetch(`https://gardening-server-theta.vercel.app/shareTips/${singleData._id}`, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updatedTip)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Tip Updated Successfully",
                        icon: "success",
                        draggable: true
                    });
                }
                navigate("/myTips")
            })
    }
    return (
        <div className=' '>
            <title>Update Tip</title>
            <div className='py-10 lg:w-4/9 p-4  container mx-auto '>

                <div className='text-center py-8'>
                    <h2 className='text-4xl font-semibold py-2 text-green-600'>Update Tip</h2>
                    <p className='text-base-content'>Lets do update your tips</p>
                </div>


                <form
                    onSubmit={handleUpdateTips}
                    className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-500"
                >

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Title Field */}
                        <div className="space-y-1">
                            <label className="label text-gray-700 ">Title</label>
                            <input
                                type="text"
                                name="title"
                                defaultValue={singleData.title}
                                className="input w-full bg-white  text-gray-900 border-gray-300  rounded-lg p-3 "
                                placeholder="Title here"
                            />
                        </div>


                        <div className="space-y-1">
                            <label className="label text-gray-700 dark:text-gray-300">Plant Type</label>
                            <input
                                type="text"
                                name="plantType"
                                defaultValue={singleData.plantType}
                                className="input w-full bg-white  text-gray-900  border-gray-300 rounded-lg p-3 "
                                placeholder="Write here"
                            />
                        </div>


                        <div className="space-y-1">
                            <label className="label text-gray-700 dark:text-gray-300">Difficulty Level</label>
                            <select
                                name="difficulty"
                                defaultValue={singleData.difficulty}
                                className="w-full bg-white text-gray-900 border rounded-lg border-gray-300 p-3"
                            >
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </div>


                        <div className="space-y-1">
                            <label className="label text-gray-700 dark:text-gray-300">Category</label>
                            <select
                                name="category"
                                defaultValue={singleData.category}
                                className="w-full bg-white text-gray-900 border rounded-lg border-gray-300 p-3"
                            >
                                <option value="composting">Composting</option>
                                <option value="plantCare">Plant Care</option>
                                <option value="vartecalGardening">Vertical Gardening</option>
                            </select>
                        </div>


                        <div className="space-y-1 md:col-span-2">
                            <label className="label text-gray-700 dark:text-gray-300">Description</label>
                            <textarea
                                name="description"
                                defaultValue={singleData.description}
                                rows="5"
                                className="w-full bg-white  text-gray-900  border-gray-300 rounded-lg border"
                                placeholder="Detailed description..."
                            ></textarea>
                        </div>


                        <div className="space-y-1">
                            <label className="label text-gray-700 dark:text-gray-300">Image URL</label>
                            <input
                                type="text"
                                name="imageUrl"
                                defaultValue={singleData.imageUrl}
                                className="input w-full bg-white  text-gray-900  border-gray-300 rounded-lg p-3 "
                                placeholder="https://example.com/image.jpg"
                            />
                        </div>


                        <div className="space-y-1">
                            <label className="label text-gray-700 dark:text-gray-300">Availability</label>
                            <select
                                name="availability"
                                defaultValue={singleData.availability}
                                className="w-full bg-white text-gray-900 border rounded-lg border-gray-300 p-3"
                            >
                                <option value="public">Public</option>
                                <option value="hidden">Hidden</option>
                            </select>
                        </div>


                        <div className="space-y-1">
                            <label className="label text-gray-700 dark:text-gray-300">Email</label>
                            <input
                                type="email"
                                name="email"
                                readOnly
                                defaultValue={user.email}
                                className="input w-full bg-white  text-gray-900  border-gray-300 rounded-lg p-3 "
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="label text-gray-700 dark:text-gray-300">Name</label>
                            <input
                                type="text"
                                name="name"
                                readOnly
                                defaultValue={user.displayName}
                                className="input w-full bg-white  text-gray-900  border-gray-300 rounded-lg p-3 "
                            />
                        </div>
                    </div>

                    <div className="mt-8">
                        <button
                            type="submit"
                            className="btn w-full bg-green-500 hover:bg-green-600  text-white font-medium py-3 px-4 rounded-lg shadow-sm "
                        >
                            Update Tip
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateTips;