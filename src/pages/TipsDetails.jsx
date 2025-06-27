// import React from 'react';
// import { BiSolidCategory } from 'react-icons/bi';
// import { FaRegClock, FaUser } from 'react-icons/fa';
// import { IoBookOutline } from 'react-icons/io5';
// import { useLoaderData } from 'react-router';
// import Swal from 'sweetalert2';

// const TipsDetails = () => {
//     const details = useLoaderData()
//     // console.log(details)


//     const handleIncrementLike = () => {
//         fetch(`https://gardening-server-theta.vercel.app/shareTips/${details._id}`, {
//             method: "PATCH",
//             headers: {
//                 "content-type": "application/json"
//             },

//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.matchedCount) {
//                     Swal.fire({
//                         position: "top-end",
//                         icon: "success",
//                         title: "Like added for this tip!",
//                         showConfirmButton: false,
//                         timer: 1500
//                     });
//                 }
//             })


//     }
//     return (


//         <div className='container max-w-4xl mx-auto py-20 px-4'>
//             <title>Tip Details</title>
//             <div className="card bg-white border border-green-400 shadow-lg rounded-3xl p-8 text-center">

//                 <figure className="flex justify-center -mt-20 mb-6">
//                     <div className="w-64 h-64 rounded-full border-4 border-white  overflow-hidden">
//                         <img
//                             className="w-full h-full object-cover"
//                             alt={details.title}
//                             src={details.imageUrl}
//                         />
//                     </div>
//                 </figure>


//                 <h2 className="text-2xl font-bold text-gray-800 mb-10">{details.title}</h2>

//                 <div className="grid grid-cols-1  md:grid-cols-2 gap-8 mb-10">
//                     <div className='space-y-5'>
//                         <p className='text-lg font-medium text-gray-700 flex items-center justify-center gap-3'>
//                             <span className="bg-green-100 p-2 rounded-full text-green-600"><IoBookOutline /></span>
//                             Plant Type: <span className='font-semibold text-green-600'>{details.plantType}</span>
//                         </p>

//                         <p className='text-lg font-medium text-gray-700 flex items-center justify-center gap-3'>
//                             <span className="bg-green-100 p-2 rounded-full text-green-600"><BiSolidCategory /></span>
//                             Category: <span className='font-semibold text-green-600'>{details.category}</span>
//                         </p>
//                     </div>

//                     <div className='space-y-5'>
//                         <p className='text-lg font-medium text-gray-700 flex items-center justify-center gap-3'>
//                             <span className="bg-green-100 p-2 rounded-full text-green-600"><FaRegClock /></span>
//                             Availability:
//                             <span className={`font-semibold ${details.availability === 'public' ? 'text-green-600' : 'text-yellow-600'}`}>
//                                 {details.availability}
//                             </span>
//                         </p>

//                         <p className='text-lg font-medium text-gray-700 flex items-center justify-center gap-3'>
//                             <span className="bg-green-100 p-2 rounded-full text-green-600"><FaUser /></span>
//                             Added by: <span className='font-semibold text-green-600'>{details.name}</span>
//                         </p>
//                     </div>
//                 </div>
//                 <div className='py-6'>
//                     <p className='text-2xl font-bold py-2 text-gray-600'>Description: </p>
//                     <p className='text-gray-600'>{details.description}</p>
//                 </div>

//                 <button onClick={handleIncrementLike} className="btn  w-full max-w-xs mx-auto  bg-gradient-to-br from-pink-500 via-red-400 to-rose-400  border-0 text-white text-lg font-semibold py-4 rounded-full shadow-md  transition-all hover:shadow-lg active:scale-95">
//                     Like This Tip
//                 </button>
//             </div>
//         </div>



//     );
// };

// export default TipsDetails;



import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BiSolidCategory, BiTime } from 'react-icons/bi';
import { FaUser, FaHeart, FaRegHeart, FaLeaf, FaSeedling } from 'react-icons/fa';
import { IoBookOutline } from 'react-icons/io5';
import { GiWateringCan, GiPlantSeed } from 'react-icons/gi';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { FaRegClock } from 'react-icons/fa6';

const TipsDetails = () => {
    const details = useLoaderData();
    const [isLiked, setIsLiked] = useState(false);
    const [activeTab, setActiveTab] = useState('description');

    const handleIncrementLike = () => {
        fetch(`https://gardening-server-theta.vercel.app/shareTips/${details._id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount) {
                    setIsLiked(true);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thanks for liking this tip!",
                        showConfirmButton: false,
                        timer: 1500,
                        background: '#1a1a1a',
                        color: '#ffffff'
                    });
                }
            });
    };

    // Additional content sections
    const contentTabs = {
        description: {
            title: "Detailed Guide",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">{details.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-emerald-50 dark:bg-emerald-900/30 p-4 rounded-lg">
                            <h4 className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2 mb-2">
                                <FaLeaf /> Best Planting Time
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300">Early spring or fall when temperatures are mild</p>
                        </div>
                        <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg">
                            <h4 className="font-bold text-amber-700 dark:text-amber-400 flex items-center gap-2 mb-2">
                                <GiWateringCan /> Watering Needs
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300">Water deeply once a week, more frequently in hot weather</p>
                        </div>
                    </div>
                </div>
            )
        },
        care: {
            title: "Care Instructions",
            content: (
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h4 className="font-bold text-gray-800 dark:text-white flex items-center gap-2">
                            <GiPlantSeed /> Soil Requirements
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">Well-draining soil with organic compost mixed in</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-bold text-gray-800 dark:text-white flex items-center gap-2">
                            <BiTime /> Maintenance
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">Prune dead leaves regularly and fertilize monthly during growing season</p>
                    </div>
                </div>
            )
        },
        tips: {
            title: "Expert Tips",
            content: (
                <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                        <span className="text-emerald-500 mt-1">✓</span>
                        <span className="text-gray-700 dark:text-gray-300">Rotate plant periodically for even growth</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-emerald-500 mt-1">✓</span>
                        <span className="text-gray-700 dark:text-gray-300">Use mulch to retain moisture and regulate soil temperature</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-emerald-500 mt-1">✓</span>
                        <span className="text-gray-700 dark:text-gray-300">Watch for common pests like aphids and spider mites</span>
                    </li>
                </ul>
            )
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen py-12 px-4 bg-gray-50 dark:bg-gray-900"
        >
            <title>Tip Details | {details.title}</title>

            <div className="container max-w-6xl mx-auto">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl dark:shadow-gray-900/50 overflow-hidden"
                >
                    {/* Hero Section */}
                    <div className="relative h-64 bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10 -mb-16"
                        >
                            <div className="w-48 h-48 rounded-full border-4 border-white dark:border-gray-800 overflow-hidden shadow-2xl">
                                <img
                                    className="w-full h-full object-cover"
                                    alt={details.title}
                                    src={details.imageUrl}
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Main Content */}
                    <div className="pt-24 px-8 pb-8">
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-6"
                        >
                            {details.title}
                        </motion.h1>

                        {/* Meta Info Grid */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
                        >
                            {[
                                {
                                    icon: <IoBookOutline className="text-xl" />,
                                    label: "Plant Type",
                                    value: details.plantType,
                                    color: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400"
                                },
                                {
                                    icon: <BiSolidCategory className="text-xl" />,
                                    label: "Category",
                                    value: details.category,
                                    color: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-400"
                                },
                                {
                                    icon: <FaRegClock className="text-xl" />,
                                    label: "Availability",
                                    value: details.availability,
                                    color: details.availability === 'public'
                                        ? "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400"
                                        : "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-400"
                                },
                                {
                                    icon: <FaUser className="text-xl" />,
                                    label: "Added by",
                                    value: details.name,
                                    color: "bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-400"
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className={`p-3 rounded-lg text-center ${item.color}`}
                                >
                                    <div className="flex items-center justify-center gap-2 mb-1">
                                        {item.icon}
                                        <span className="text-sm font-medium">{item.label}</span>
                                    </div>
                                    <p className="font-semibold">{item.value}</p>
                                </div>
                            ))}
                        </motion.div>

                        {/* Tabs Navigation */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="flex border-b border-gray-200 dark:border-gray-700 mb-8"
                        >
                            {Object.keys(contentTabs).map((tabKey) => (
                                <button
                                    key={tabKey}
                                    onClick={() => setActiveTab(tabKey)}
                                    className={`px-6 py-3 font-medium text-sm md:text-base transition-colors ${activeTab === tabKey
                                        ? 'text-emerald-600 dark:text-emerald-400 border-b-2 border-emerald-500'
                                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                                        }`}
                                >
                                    {contentTabs[tabKey].title}
                                </button>
                            ))}
                        </motion.div>

                        {/* Tab Content */}
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="mb-10 min-h-[200px]"
                        >
                            {contentTabs[activeTab].content}
                        </motion.div>

                        {/* Like Button */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="flex justify-center"
                        >
                            <motion.button
                                onClick={handleIncrementLike}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                animate={isLiked ? {
                                    scale: [1, 1.1, 1],
                                    backgroundColor: ["#ec4899", "#f43f5e", "#ec4899"]
                                } : {}}
                                className={`flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg ${isLiked
                                    ? "bg-gradient-to-br from-pink-500 to-rose-500"
                                    : "bg-gradient-to-br from-pink-500 via-red-400 to-rose-400"
                                    }`}
                            >
                                {isLiked ? (
                                    <>
                                        <FaHeart className="text-xl" />
                                        <span>Liked!</span>
                                    </>
                                ) : (
                                    <>
                                        <FaRegHeart className="text-xl" />
                                        <span>Like This Tip</span>
                                    </>
                                )}
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Related Tips Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                        <FaSeedling className="text-emerald-500" />
                        More Gardening Tips You Might Like
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                                {/* <div className="h-40 bg-emerald-100 dark:bg-emerald-900/30"></div> */}
                                <div className="p-5">
                                    <h4 className="font-bold text-lg text-gray-800 dark:text-white mb-2">
                                        {item === 1 ? "Organic Pest Control" : item === 2 ? "Seasonal Pruning Guide" : "Watering Techniques"}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                                        {item === 1
                                            ? "Natural ways to protect your plants"
                                            : item === 2
                                                ? "When and how to prune different plants"
                                                : "Best practices for optimal watering"}
                                    </p>
                                    <button className="text-emerald-600 dark:text-emerald-400 font-medium text-sm">
                                        Read More →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default TipsDetails;