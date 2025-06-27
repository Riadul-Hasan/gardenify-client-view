import React from 'react';
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const ShareGardenTip = () => {
    const { user } = use(AuthContext);
    const navigate = useNavigate();

    const handleAddTips = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const tipsData = Object.fromEntries(formData.entries());

        const dataForDB = {
            ...tipsData,
            totalLiked: 0,
            authorPhoto: user.photoURL || '',
            createdAt: new Date().toISOString()
        };

        try {
            const response = await fetch("https://gardening-server-theta.vercel.app/shareTIps", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(dataForDB)
            });

            const data = await response.json();

            if (data.insertedId) {
                await Swal.fire({
                    title: "Tip Shared Successfully!",
                    text: "Your gardening wisdom is now available to help others grow.",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000,
                    background: '#f0fdf4',
                    color: '#065f46',
                    iconColor: '#10b981'
                });
                navigate("/browseTips");
            }
        } catch (error) {
            Swal.fire({
                title: "Oops!",
                text: "Something went wrong. Please try again.",
                icon: "error",
                confirmButtonColor: "#10b981"
            });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-12 px-4 sm:px-6 lg:px-8"
        >
            <title>Share Your Gardening Tip</title>

            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-emerald-800 mb-3">Share Your Gardening Wisdom</h2>
                    <p className="text-lg text-emerald-600 max-w-2xl mx-auto">
                        Help fellow gardeners grow by sharing your tips, tricks, and experiences.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ scale: 0.98 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleAddTips}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-100"
                >
                    <div className="p-6 sm:p-8 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Title */}
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                className="space-y-2"
                            >
                                <label className="block text-sm font-medium text-emerald-700">Tip Title*</label>
                                <input
                                    type="text"
                                    name="title"
                                    required
                                    className="block w-full px-4 py-3 rounded-lg border border-emerald-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                                    placeholder="e.g., Perfect Tomato Growing Technique"
                                />
                            </motion.div>

                            {/* Plant Type */}
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                className="space-y-2"
                            >
                                <label className="block text-sm font-medium text-emerald-700">Plant Type*</label>
                                <input
                                    type="text"
                                    name="plantType"
                                    required
                                    className="block w-full px-4 py-3 rounded-lg border border-emerald-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                                    placeholder="e.g., Tomatoes, Roses, Herbs"
                                />
                            </motion.div>

                            {/* Difficulty Level */}
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                className="space-y-2"
                            >
                                <label className="block text-sm font-medium text-emerald-700">Difficulty Level*</label>
                                <select
                                    name="difficulty"
                                    className="block w-full px-4 py-3 rounded-lg border border-emerald-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition bg-white"
                                >
                                    <option value="easy">Easy - Great for beginners</option>
                                    <option value="medium">Medium - Some experience needed</option>
                                    <option value="hard">Hard - Challenging even for experts</option>
                                </select>
                            </motion.div>

                            {/* Category */}
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                className="space-y-2"
                            >
                                <label className="block text-sm font-medium text-emerald-700">Category*</label>
                                <select
                                    name="category"
                                    className="block w-full px-4 py-3 rounded-lg border border-emerald-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition bg-white"
                                >
                                    <option value="composting">Composting</option>
                                    <option value="plantCare">Plant Care</option>
                                    <option value="vartecalGardening">Vertical Gardening</option>
                                    <option value="pestControl">Pest Control</option>
                                    <option value="watering">Watering Techniques</option>
                                    <option value="soil">Soil Preparation</option>
                                </select>
                            </motion.div>

                            {/* Image URL */}
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                className="space-y-2 md:col-span-2"
                            >
                                <label className="block text-sm font-medium text-emerald-700">Image URL</label>
                                <input
                                    type="url"
                                    name="imageUrl"
                                    className="block w-full px-4 py-3 rounded-lg border border-emerald-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                                    placeholder="https://example.com/image.jpg"
                                />
                                <p className="text-xs text-emerald-500">Add a photo to make your tip more engaging (optional)</p>
                            </motion.div>

                            {/* Description */}
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                className="space-y-2 md:col-span-2"
                            >
                                <label className="block text-sm font-medium text-emerald-700">Detailed Description*</label>
                                <textarea
                                    name="description"
                                    required
                                    rows="6"
                                    className="block w-full px-4 py-3 rounded-lg border border-emerald-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                                    placeholder="Share your step-by-step advice, what worked for you, and any special considerations..."
                                ></textarea>
                            </motion.div>

                            {/* Availability */}
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                className="space-y-2"
                            >
                                <label className="block text-sm font-medium text-emerald-700">Visibility*</label>
                                <select
                                    name="availability"
                                    className="block w-full px-4 py-3 rounded-lg border border-emerald-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition bg-white"
                                >
                                    <option value="public">Public - Share with everyone</option>
                                    <option value="hidden">Hidden - Only visible to you</option>
                                </select>
                            </motion.div>

                            {/* User Info */}
                            <div className="space-y-4">
                                <motion.div
                                    whileHover={{ scale: 1.01 }}
                                    className="space-y-2"
                                >
                                    <label className="block text-sm font-medium text-emerald-700">Your Email</label>
                                    <input
                                        type="email"
                                        readOnly
                                        name="email"
                                        defaultValue={user.email}
                                        className="block w-full px-4 py-3 rounded-lg border border-emerald-200 bg-emerald-50 cursor-not-allowed"
                                    />
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.01 }}
                                    className="space-y-2"
                                >
                                    <label className="block text-sm font-medium text-emerald-700">Your Name</label>
                                    <input
                                        type="text"
                                        readOnly
                                        name="name"
                                        defaultValue={user.displayName}
                                        className="block w-full px-4 py-3 rounded-lg border border-emerald-200 bg-emerald-50 cursor-not-allowed"
                                    />
                                </motion.div>
                            </div>
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                            className="pt-4"
                        >
                            <button
                                type="submit"
                                className="w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                </svg>
                                Share Your Gardening Tip
                            </button>
                        </motion.div>
                    </div>
                </motion.form>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-8 text-center text-emerald-600"
                >
                    <p>Your tip will help others in their gardening journey. Thank you for contributing!</p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ShareGardenTip;