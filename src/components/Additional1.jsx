import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';


const statCards = [
    {
        icon: <RiPlantFill size={30} />,
        color: 'bg-blue-400',
        textColor: 'text-blue-400',
        end: 300,
        title: 'Plants Planted',
        delay: 0.1
    },
    {
        icon: <GiGardeningShears size={30} />,
        color: 'bg-yellow-400',
        textColor: 'text-yellow-500',
        end: 150,
        title: 'Gardens Maintained',
        delay: 0.3
    },
    {
        icon: <GiAppleSeeds size={25} />,
        color: 'bg-green-400',
        textColor: 'text-green-600',
        end: 500,
        title: 'Seeds Sown',
        delay: 0.5
    },
    {
        icon: <FcCustomerSupport size={35} />,
        color: 'bg-gray-300',
        textColor: 'text-gray-600',
        end: 200,
        title: 'Happy Customers',
        delay: 0.7
    }
];

const cardVariants = {
    offscreen: {
        y: 50,
        opacity: 0
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

const Additional1 = () => {
    return (
        <div className='container mx-auto py-16 px-4'>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='text-center text-4xl md:text-5xl font-bold text-emerald-800 mb-4'
            >
                Our Growing Impact
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center text-lg text-emerald-600 max-w-2xl mx-auto mb-12"
            >
                Numbers that showcase our gardening community's achievements
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {statCards.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardVariants}
                        custom={index}
                        className="flex justify-center"
                    >
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl border border-gray-100 w-full max-w-xs"
                        >
                            <div className="card-body flex flex-col items-center p-6">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className={`rounded-full ${stat.color} text-white w-20 h-20 flex justify-center items-center mb-4`}
                                >
                                    {stat.icon}
                                </motion.div>

                                <motion.h2
                                    className={`text-5xl font-bold ${stat.textColor} mb-2`}
                                >
                                    <CountUp
                                        start={0}
                                        end={stat.end}
                                        delay={0.5}
                                        duration={3}
                                        separator=","
                                    >
                                        {({ countUpRef }) => (
                                            <span ref={countUpRef} />
                                        )}
                                    </CountUp>
                                    <span>+</span>
                                </motion.h2>

                                <motion.p
                                    className="font-semibold text-lg text-emerald-600 opacity-80"
                                >
                                    {stat.title}
                                </motion.p>

                                {/* Animated progress bar */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '80%' }}
                                    transition={{ delay: 0.8, duration: 2 }}
                                    viewport={{ once: true }}
                                    className={`h-1 ${stat.color} bg-opacity-30 mt-4 rounded-full`}
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