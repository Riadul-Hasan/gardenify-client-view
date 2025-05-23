import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const ShareGardenTip = () => {
    const { user } = use(AuthContext)

    const handleAddTips = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const tipsData = Object.fromEntries(formData.entries())
        // console.log(tipsData)
        const dataForDB = {
            ...tipsData,
            totalLiked: 0
        }

        fetch("http://localhost:3000/shareTIps", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(dataForDB)
        })
            .then(result => result.json())
            .then(data => {
                // console.log("Data after added tips", data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Tip Successfully added",
                        icon: "success",
                        draggable: true
                    });
                }
            })



    }
    return (
        <div className='bg-gray-400'>
            <div className='py-10 w-4/9 mx-auto '>

                <div className='text-center py-8'>
                    <h2 className='text-4xl font-semibold py-2 text-green-600'>Share Tip</h2>
                    <p>Share your valuable opinion</p>
                </div>



                <form data-theme="light" onSubmit={handleAddTips} className=' p-6 bg-base-300 rounded-2xl'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
                        <fieldset className="fieldset bg-white border-black rounded-box  border p-4">

                            <label className="label">Title</label>
                            <input type="text" className="input w-full" name='title' placeholder="Title here" />
                        </fieldset>
                        <fieldset className="fieldset bg-white border-black rounded-box  border p-4">

                            <label className="label">Plant Type</label>
                            <input type="text" className="input w-full" name='plantType' placeholder="Write here" />
                        </fieldset>
                        <fieldset className="fieldset bg-white border-black rounded-box  border p-4">

                            <label className="label">Difficulty Level</label>
                            <select name="difficulty" className='bg-white border rounded-xl border-gray-400 p-4' id="">

                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </fieldset>

                        <fieldset className="fieldset bg-white md:col-spa border-black rounded-box  border p-4">

                            <label className="label">Category</label>
                            <select name="category" className='border rounded-xl border-gray-400 p-4' id="">

                                <option value="composting">Composting</option>
                                <option value="plantCare">Plant Care</option>
                                <option value="vartecalGardening">Vertical Gardening</option>
                            </select>
                        </fieldset>
                        <fieldset className="fieldset bg-white  border-black rounded-box  border p-4 col-span-2">

                            <label className="label">Description</label>
                            <textarea className='bg-white border rounded-xl border-gray-400' name="description" id="" cols="10" rows="6"></textarea>
                        </fieldset>

                        <fieldset className="fieldset bg-white border-black rounded-box  border p-4 ">

                            <label className="label">Image Url</label>
                            <input type="text" className="input w-full" name='imageUrl' placeholder="URL" />
                        </fieldset>



                        <fieldset className="fieldset bg-base-200 border-black rounded-box  border p-4">

                            <label className="label">Availability</label>
                            <select name="availability" className='bg-white p-3 border rounded-xl border-gray-400' id="">

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
                        <input type="submit" className='btn w-full bg-green-600 text-white' value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ShareGardenTip;