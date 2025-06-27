import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { motion, AnimatePresence } from 'framer-motion';
import { FiEdit2, FiTrash2, FiUser, FiMail, FiPlusCircle } from 'react-icons/fi';
import { FaLeaf, FaSeedling } from 'react-icons/fa';

const MyTips = () => {
    const { user } = use(AuthContext);
    const [myTip, setMyTip] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://gardening-server-theta.vercel.app/myTips?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyTip(data);
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
    }, [user]);

    const handleDelete = (id) => {
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
                            const remainingTips = myTip.filter(rem => rem._id !== id);
                            setMyTip(remainingTips);
                        }
                    });
            }
        });
    };

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const card = {
        hidden: { opacity: 0, scale: 0.8 },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "backOut"
            }
        },
        hover: {
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            transition: {
                duration: 0.3
            }
        }
    };

    // Leaf animation variants
    const leafVariants = {
        float: {
            y: [0, -10, 0],
            rotate: [0, 5, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Gardening Background Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Subtle garden texture background */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2832&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>

                {/* Animated leaves */}
                <motion.div
                    className="absolute top-20 left-10 text-emerald-400 opacity-30"
                    variants={leafVariants}
                    animate="float"
                >
                    <FaLeaf size={40} />
                </motion.div>
                <motion.div
                    className="absolute bottom-40 right-20 text-teal-400 opacity-30"
                    variants={leafVariants}
                    animate="float"
                    style={{ rotate: '45deg' }}
                >
                    <FaLeaf size={50} />
                </motion.div>
                <motion.div
                    className="absolute top-1/3 right-1/4 text-lime-300 opacity-20"
                    variants={leafVariants}
                    animate="float"
                    style={{ rotate: '-30deg' }}
                >
                    <FaLeaf size={60} />
                </motion.div>
            </div>

            <div className="relative z-10 container mx-auto mb-32 px-4">
                <title>My Tips</title>

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-10"
                >
                    <h2 className='text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500'>
                        My Gardening Tips
                    </h2>
                    <p className="text-gray-600 mt-2">Manage your shared gardening wisdom</p>
                </motion.div>

                {/* User Profile */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col items-center mb-12 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm p-6 max-w-2xl mx-auto border border-white/20"
                >
                    <motion.div variants={item} className="avatar mb-4">
                        <div className="w-24 h-24 rounded-full ring-2 ring-emerald-500 ring-offset-4 ring-offset-emerald-100/50 overflow-hidden">
                            <img
                                src={user.photoURL}
                                alt={user.displayName}
                                className="w-full h-full object-cover"
                                referrerPolicy='no-referrer'
                            />
                        </div>
                    </motion.div>

                    <motion.div variants={item} className="text-center space-y-2">
                        <div className="flex items-center justify-center text-lg">
                            <FiUser className="text-emerald-500 mr-2" />
                            <span className="font-semibold">{user.displayName}</span>
                        </div>
                        <div className="flex items-center justify-center text-gray-600">
                            <FiMail className="text-emerald-500 mr-2" />
                            <span>{user.email}</span>
                        </div>
                        <div className="pt-4 flex items-center justify-center text-emerald-600">
                            <FaSeedling className="mr-2" />
                            <span className="font-medium">{myTip.length} Tips Shared</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Tips Section */}
                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
                    </div>
                ) : myTip.length < 1 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center bg-gradient-to-r from-emerald-50/80 to-teal-50/80 backdrop-blur-sm rounded-2xl p-12 max-w-3xl mx-auto border border-white/20"
                    >
                        <FaLeaf className="text-5xl text-emerald-400 mx-auto mb-6" />
                        <h3 className="text-2xl font-semibold text-gray-700 mb-4">No Tips Added Yet</h3>
                        <p className="text-gray-600 mb-6">Share your first gardening tip with the community</p>
                        <Link
                            to="/shareTips"
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all"
                        >
                            <FiPlusCircle className="mr-2" />
                            Share Your First Tip
                        </Link>
                    </motion.div>
                ) : (
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                    >
                        {myTip.map(tip => (
                            <motion.div
                                key={tip._id}
                                variants={card}
                                whileHover="hover"
                                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-white/20 overflow-hidden"
                            >
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-gray-800">{tip.title}</h3>
                                        <span className="px-3 py-1 bg-emerald-100/70 text-emerald-800 text-xs font-medium rounded-full">
                                            {tip.category}
                                        </span>
                                    </div>

                                    <p className="text-gray-600 mb-6 line-clamp-3">{tip.description}</p>

                                    <div className="flex justify-end space-x-3">
                                        <Link
                                            to={`/updateTips/${tip._id}`}
                                            className="flex items-center px-4 py-2 bg-emerald-100/70 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors"
                                        >
                                            <FiEdit2 className="mr-2" />
                                            Update
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(tip._id)}
                                            className="flex items-center px-4 py-2 bg-red-100/70 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                                        >
                                            <FiTrash2 className="mr-2" />
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default MyTips;