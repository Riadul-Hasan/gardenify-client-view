import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { RiPlantFill } from 'react-icons/ri';
import { GiGardeningShears, GiAppleSeeds } from 'react-icons/gi';
import { FcCustomerSupport } from 'react-icons/fc';

const stats = [
    {
        icon: <RiPlantFill className="text-white" size={30} />,
        bgColor: 'bg-blue-500',
        textColor: 'text-blue-500',
        endValue: 300,
        label: 'Plants Planted',
        delay: 0.2
    },
    {
        icon: <GiGardeningShears className="text-white" size={30} />,
        bgColor: 'bg-yellow-500',
        textColor: 'text-yellow-500',
        endValue: 150,
        label: 'Gardens Maintained',
        delay: 0.4
    },
    {
        icon: <GiAppleSeeds className="text-white" size={25} />,
        bgColor: 'bg-green-500',
        textColor: 'text-green-500',
        endValue: 500,
        label: 'Seeds Sown',
        delay: 0.6
    },
    {
        icon: <FcCustomerSupport className="text-white" size={35} />,
        bgColor: 'bg-gray-400',
        textColor: 'text-gray-600',
        endValue: 200,
        label: 'Happy Customers',
        delay: 0.8
    }
];

const statCardVariants = {
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

const Additional1 = () => {
    return (
        <div className="container mx-auto py-16 px-4">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center text-2xl md:text-3xl font-bold text-emerald-800 mb-4"
            >
                Our Growing Impact
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center text-sm text-emerald-600 max-w-2xl mx-auto mb-12"
            >
                Numbers that showcase our gardening achievements
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={statCardVariants}
                        transition={{ delay: stat.delay }}
                        className="flex justify-center"
                    >
                        <motion.div
                            whileHover={{
                                y: -10,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                            }}
                            className="w-full max-w-xs bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
                        >
                            <div className="p-6 flex flex-col items-center">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className={`${stat.bgColor} rounded-full w-20 h-20 flex items-center justify-center mb-6`}
                                >
                                    {stat.icon}
                                </motion.div>

                                <motion.h3
                                    className={`${stat.textColor} text-5xl font-bold mb-2`}
                                >
                                    <CountUp
                                        start={0}
                                        end={stat.endValue}
                                        duration={3}
                                        delay={0.5}
                                        separator=","
                                    >
                                        {({ countUpRef }) => (
                                            <span ref={countUpRef} />
                                        )}
                                    </CountUp>
                                    <span>+</span>
                                </motion.h3>

                                <p className="text-lg font-semibold text-emerald-600 opacity-80">
                                    {stat.label}
                                </p>

                                {/* Animated progress bar */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "80%" }}
                                    transition={{ duration: 2, delay: 0.8 }}
                                    viewport={{ once: true }}
                                    className={`h-1.5 ${stat.bgColor} bg-opacity-30 rounded-full mt-4`}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Additional1;