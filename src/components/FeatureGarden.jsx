import React from 'react';
import { useLoaderData } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import FeatureCard from './FeatureCard';
import 'react-tooltip/dist/react-tooltip.css';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const titleVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const FeatureGarden = () => {
    const data = useLoaderData();

    return (
        <motion.div
            initial="hidden"
            animate="show"
            variants={containerVariants}
            className="py-12 px-4 sm:px-6 lg:px-8"
        >
            <motion.h2
                variants={titleVariants}
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Explore Our Experts"
                className='text-2xl md:text-3xl text-center font-bold text-emerald-800 mb-2'
            >
                Featured Gardeners
            </motion.h2>
            <motion.p
                variants={titleVariants}
                className="text-center text-sm text-emerald-600 mb-12 max-w-2xl mx-auto"
            >
                Meet our community of passionate gardening experts
            </motion.p>
            <Tooltip id="my-tooltip" className="z-50" />

            <motion.div
                variants={containerVariants}
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
            >
                <AnimatePresence>
                    {data.map((feature, index) => (
                        <FeatureCard
                            key={feature._id}
                            feature={feature}
                            index={index}
                        />
                    ))}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};

export default FeatureGarden;