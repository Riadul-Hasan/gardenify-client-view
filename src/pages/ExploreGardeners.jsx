import React from 'react';
import { useLoaderData } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUser, FiCalendar, FiStar, FiAward, FiShare2 } from 'react-icons/fi';

const ExploreGardeners = () => {
    const exploreData = useLoaderData();

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const card = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            y: -5,
            boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.25)",
            transition: {
                duration: 0.3
            }
        }
    };

    const avatar = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: 0.2,
                duration: 0.5,
                type: "spring",
                stiffness: 100
            }
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <div className='py-16 lg:py-28 bg-white'>
            <title>Meet Our Gardeners</title>

            {/* Elegant Header */}
            <div className="container mx-auto px-4 lg:px-6 text-center mb-20">
                <motion.span
                    className="inline-block mb-4 text-sm font-semibold tracking-wider text-emerald-500 uppercase"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Our Green Thumb Community
                </motion.span>
                <motion.h2
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Discover Passionate <span className="text-emerald-600">Gardeners</span>
                </motion.h2>
                <motion.p
                    className="max-w-2xl mx-auto text-md text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    Connect with our community of plant enthusiasts and learn from their experiences
                </motion.p>
            </div>

            {/* Gardeners Grid */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="container mx-auto px-4 lg:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
                {exploreData.map((explore) => (
                    <motion.div
                        key={explore.id}
                        variants={card}
                        whileHover="hover"
                        className="relative bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:border-emerald-100 transition-all duration-300"
                    >
                        {/* Decorative background element */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            whileHover={{ opacity: 1 }}
                        />

                        {/* Avatar with floating effect */}
                        <div className="flex justify-center mt-8 mb-6">
                            <motion.div
                                variants={avatar}
                                whileHover="hover"
                                className="relative z-10"
                            >
                                <div className="w-28 h-28 rounded-full ring-4 ring-white ring-offset-4 ring-offset-emerald-50 shadow-lg overflow-hidden border-2 border-emerald-100">
                                    <img
                                        src={explore.image}
                                        alt={explore.name}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white rounded-full p-2 shadow-md">
                                    <FiAward className="text-lg" />
                                </div>
                            </motion.div>
                        </div>

                        {/* Card Content - Always Visible */}
                        <div className="px-6 pb-8 text-center relative z-20">
                            <motion.h3
                                className="text-2xl font-bold text-gray-900 mb-2"
                                whileHover={{ color: "#059669" }}
                                transition={{ duration: 0.3 }}
                            >
                                {explore.name}
                            </motion.h3>

                            <div className="flex justify-center gap-4 mb-5">
                                <div className="flex items-center text-sm text-gray-600 bg-white rounded-full px-3 py-1 shadow-sm border border-gray-200">
                                    <FiCalendar className="mr-2 text-emerald-500" />
                                    <span>{explore.age} years</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600 bg-white rounded-full px-3 py-1 shadow-sm border border-gray-200">
                                    <FiUser className="mr-2 text-emerald-500" />
                                    <span>{explore.gender}</span>
                                </div>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-center justify-center text-amber-400 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <FiStar
                                            key={i}
                                            className={`text-lg ${i < Math.floor(explore.total_shared_tips / 5) ? "fill-current" : ""}`}
                                        />
                                    ))}
                                </div>
                                <p className="text-sm font-medium text-gray-600">
                                    Shared {explore.total_shared_tips} gardening tips
                                </p>
                            </div>

                            <motion.div
                                className="mb-6 px-4 py-3 bg-emerald-50 rounded-lg"
                                whileHover={{ backgroundColor: "rgba(209, 250, 229, 0.7)" }}
                            >
                                <p className="text-emerald-700 italic">
                                    "{explore.experiences}"
                                </p>
                            </motion.div>

                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "#059669",
                                    boxShadow: "0 4px 6px -1px rgba(5, 150, 105, 0.2)"
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center px-5 py-2 text-sm font-medium rounded-lg text-white bg-emerald-500 transition-all"
                            >
                                <FiShare2 className="mr-2" />
                                Connect
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div
                className="container mx-auto px-4 lg:px-6 mt-24 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                    Ready to join our gardening community?
                </h3>
                <motion.button
                    whileHover={{
                        scale: 1.02,
                        boxShadow: "0 10px 15px -3px rgba(5, 150, 105, 0.2)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center px-8 py-3 text-base font-medium rounded-lg text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 transition-all shadow-md"
                >
                    Become a Member Today
                </motion.button>
            </motion.div>
        </div>
    );
};

export default ExploreGardeners;