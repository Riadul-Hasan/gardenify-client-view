import React, { useEffect, useState } from 'react';
import { FaHeart, FaLeaf, FaSeedling, FaRegClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from './extra/motion';
// import { staggerContainer, fadeIn, textVariant } from '../utils/motion'; 
const TipsSection = () => {
    const [tips, setTips] = useState([]);

    useEffect(() => {
        fetch("https://gardening-server-theta.vercel.app/tips")
            .then(res => res.json())
            .then(data => setTips(data))
            .catch(error => console.error('Error fetching tips:', error));
    }, []);

    // Animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.25 }}
            className="container mx-auto py-16 px-4"
        >
            {/* Animated Header */}
            <motion.div variants={textVariant()} className="text-center mb-16">
                <motion.h2
                    variants={fadeIn('up', 'spring', 0.1, 1)}
                    className="font-bold text-2xl md:text-3xl text-emerald-800 mb-3"
                >
                    Top Trending Tips
                </motion.h2>
                <motion.p
                    variants={fadeIn('up', 'spring', 0.2, 1)}
                    className="text-sm text-emerald-600 max-w-2xl mx-auto"
                >
                    Discover wisdom from fellow garden enthusiasts
                </motion.p>

                {/* Decorative elements */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 right-10 opacity-20"
                >
                    <FaLeaf className="w-24 h-24 text-emerald-300" />
                </motion.div>
            </motion.div>

            {/* Tips Grid */}
            <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"
            >
                {tips.map((tip) => (
                    <motion.div
                        key={tip._id}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        whileHover={{ y: -10 }}
                        className="relative group"
                    >
                        {/* Card */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border-2 border-emerald-100">
                            {/* Image with overlay */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    src={tip.imageUrl}
                                    alt={tip.title}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                                {/* Floating like button */}
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="absolute top-4 right-4 bg-white/90 rounded-full p-2 shadow-md cursor-pointer"
                                >
                                    <FaHeart className="text-rose-500" />
                                    <span className="ml-1 text-sm font-semibold text-emerald-800">{tip.totalLiked}</span>
                                </motion.div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 flex-grow">
                                {/* Title with decorative icon */}
                                <div className="flex items-center mb-4">
                                    <FaSeedling className="text-emerald-500 mr-2" />
                                    <h3 className="text-xl font-bold text-emerald-800 line-clamp-2">
                                        {tip.title}
                                    </h3>
                                </div>

                                {/* Meta info chips */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium flex items-center">
                                        <FaLeaf className="mr-1" /> {tip.plantType}
                                    </span>
                                    <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">
                                        {tip.category}
                                    </span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                                        {tip.difficulty}
                                    </span>
                                </div>

                                {/* Description with fade effect */}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-gray-600 mb-6 line-clamp-3"
                                >
                                    {tip.description}
                                </motion.p>

                                {/* Author info */}
                                <div className="mt-auto pt-4 border-t border-emerald-50 flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-emerald-200 flex items-center justify-center text-emerald-800 font-bold mr-3">
                                        {tip.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-emerald-800">{tip.name}</p>
                                        <p className="text-xs text-gray-500 flex items-center">
                                            <FaRegClock className="mr-1" /> 2 days ago
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating action button */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
                            >
                                <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-6 rounded-full shadow-lg transition-all duration-300 flex items-center">
                                    Read More
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="hidden lg:block absolute left-20 bottom-1/4 opacity-30"
            >
                <FaLeaf className="w-16 h-16 text-emerald-400" />
            </motion.div>
        </motion.div>
    );
};

export default TipsSection;