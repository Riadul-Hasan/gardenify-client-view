import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const UpdateTips = () => {
    const singleData = useLoaderData()
    const { user } = use(AuthContext)
    console.log(singleData)


    const handleUpdateTips = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const updatedTip = Object.fromEntries(formData.entries())
        console.log(updatedTip)

        // send update tip to database
        fetch(`http://localhost:3000/shareTips/${singleData._id}`, {
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
            })
    }
    return (
        <div className='py-20 bg-green-50'>
            <div className='py-10 container mx-auto '>

                <div className='text-center py-8'>
                    <h2 className='text-4xl font-semibold py-2 text-green-800'>Update Tip</h2>
                    <p>Lets do update your tips</p>
                </div>



                <form onSubmit={handleUpdateTips} className='bg-white'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
                        <fieldset className="fieldset bg-white border-black rounded-box  border p-4">

                            <label className="label">Title</label>
                            <input type="text" className="input w-full" name='title' defaultValue={singleData.title} placeholder="Title here" />
                        </fieldset>
                        <fieldset className="fieldset bg-white border-black rounded-box  border p-4">

                            <label className="label">Plant Type</label>
                            <input type="text" className="input w-full" name='plantType' defaultValue={singleData.plantType} placeholder="Write here" />
                        </fieldset>
                        <fieldset className="fieldset bg-white border-black rounded-box  border p-4">

                            <label className="label">Difficulty Level</label>
                            <select name="difficulty" className='bg-white p-4' defaultValue={singleData.difficulty} id="">

                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </fieldset>

                        <fieldset className="fieldset bg-white md:col-spa border-black rounded-box  border p-4">

                            <label className="label">Category</label>
                            <select name="category" className='bg-white p-4' defaultValue={singleData.category} id="">

                                <option value="composting">Composting</option>
                                <option value="plantCare">Plant Care</option>
                                <option value="vartecalGardening">Vertical Gardening</option>
                            </select>
                        </fieldset>
                        <fieldset className="fieldset bg-white  border-black rounded-box  border p-4 col-span-2">

                            <label className="label">Description</label>
                            <textarea className='bg-white' name="description" id="" cols="30" rows="10" defaultValue={singleData.description}></textarea>
                        </fieldset>

                        <fieldset className="fieldset bg-white border-black rounded-box  border p-4 ">

                            <label className="label">Image Url</label>
                            <input type="text" className="input w-full" name='imageUrl' defaultValue={singleData.imageUrl} placeholder="URL" />
                        </fieldset>



                        <fieldset className="fieldset bg-base-200 border-black rounded-box  border p-4">

                            <label className="label">Availability</label>
                            <select name="availability" className='bg-white p-4' defaultValue={singleData.availability} id="">

                                <option value="public">Public</option>
                                <option value="hidden">Hidden</option>

                            </select>
                        </fieldset>

                        <fieldset className="fieldset bg-base-200 border-black rounded-box  border p-4">

                            <label className="label">Email</label>
                            <input type="email" className="input w-full" readOnly name='email' defaultValue={user.email} />
                        </fieldset>

                        <fieldset className="fieldset bg-base-200 border-black rounded-box  border p-4">

                            <label className="label">Name</label>
                            <input type="text" className="input w-full" readOnly name='name' defaultValue={user.displayName} />
                        </fieldset>
                    </div>





                    <div className='py-10'>
                        <input type="submit" className='btn w-full btn-primary' value="Update Tip" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateTips;