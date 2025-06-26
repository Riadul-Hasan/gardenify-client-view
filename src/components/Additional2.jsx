import React from 'react';
import { motion } from 'framer-motion';
import Garden from '../assets/garden.jpg';
import { FaLeaf, FaSeedling, FaTree } from 'react-icons/fa';

const Additional2 = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative h-[65vh] min-h-[500px] w-full overflow-hidden"
            style={{
                backgroundImage: `url(${Garden})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Dark overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40" />

            {/* Floating botanical elements */}
            <motion.div
                animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/4 left-10 text-emerald-300/30 z-0"
            >
                <FaLeaf className="w-16 h-16" />
            </motion.div>

            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                className="absolute bottom-1/4 right-12 text-emerald-200/30 z-0"
            >
                <FaTree className="w-20 h-20" />
            </motion.div>

            {/* Content */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative z-10 h-full flex items-center justify-center"
            >
                <div className="text-center p-6 lg:p-8 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 lg:w-2/5 mx-4">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-block mb-4"
                    >
                        <FaSeedling className="text-emerald-400 w-12 h-12" />
                    </motion.div>

                    <motion.h1
                        className="mb-4 text-4xl md:text-5xl font-bold text-white"
                    >
                        Plant Trees, <span className="text-emerald-400">Save Lives</span>
                    </motion.h1>

                    <motion.p
                        className="mb-6 text-emerald-100 text-lg"
                    >
                        Our platform connects passionate gardeners with top opportunities. Discover and cultivate your dream garden with ease.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row justify-center gap-4"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-400 text-gray-800 font-semibold rounded-full shadow-lg hover:shadow-emerald-400/30 transition-all"
                        >
                            Explore Opportunities
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 border-2 border-emerald-400 text-white font-semibold rounded-full hover:bg-emerald-400/10 transition-all"
                        >
                            Learn More
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Additional2;