import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaPaperPlane, FaSeedling, FaRegEnvelope } from 'react-icons/fa';
import { GiPlantWatering } from 'react-icons/gi';

const NewsletterSection = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubscribed(true);
        setEmail('');
        setTimeout(() => setIsSubscribed(false), 3000);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative py-20 overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50"
        >
            {/* Floating decorative elements */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/4 left-10 opacity-20 z-0"
            >
                <GiPlantWatering className="w-20 h-20 text-emerald-400" />
            </motion.div>

            <motion.div
                animate={{
                    y: [0, 25, 0],
                    rotate: [0, -8, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 3,
                }}
                className="absolute bottom-1/4 right-12 opacity-20 z-0"
            >
                <FaSeedling className="w-24 h-24 text-teal-500" />
            </motion.div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-12"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-block mb-6"
                    >
                        <FaRegEnvelope className="text-5xl text-emerald-600 mx-auto" />
                    </motion.div>
                    <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-4 bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                        Cultivate Your Gardening Wisdom
                    </h2>
                    <p className="text-md text-emerald-600 max-w-2xl mx-auto">
                        Join our <span className="font-semibold text-emerald-700">green community</span> and receive:
                    </p>
                </motion.div>

                {!isSubscribed ? (
                    <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
                        {/* Benefits List */}
                        <motion.ul
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="space-y-4 text-left max-w-md"
                        >
                            {[
                                '🌿 Monthly planting guides',
                                '🌸 Seasonal flower recommendations',
                                '🪴 Exclusive member discounts',
                                '🌱 Early access to new products'
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    className="flex items-start gap-3 text-emerald-700 text-lg"
                                >
                                    <span className="mt-1 text-emerald-500">
                                        <FaLeaf className="w-4 h-4" />
                                    </span>
                                    {item}
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* Subscribe Form */}
                        <motion.form
                            onSubmit={handleSubmit}
                            initial={{ scale: 0.95, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-xl border border-emerald-100 max-w-md w-full"
                        >
                            <h3 className="text-2xl font-bold text-emerald-800 mb-4">
                                Join Our Newsletter
                            </h3>
                            <div className="relative mb-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your best email"
                                    required
                                    className="w-full px-6 py-4 pr-16 rounded-xl border border-emerald-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-3 rounded-xl transition-all shadow-md"
                                >
                                    <FaPaperPlane className="text-xl" />
                                </motion.button>
                            </div>
                            <p className="text-sm text-emerald-600 text-center">
                                We'll never share your email. Unsubscribe anytime.
                            </p>
                        </motion.form>
                    </div>
                ) : (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-xl text-center border border-emerald-100"
                    >
                        <motion.div
                            animate={{
                                rotate: [0, 15, -15, 0],
                                y: [0, -10, 0],
                            }}
                            transition={{ duration: 1 }}
                        >
                            <FaPaperPlane className="text-5xl text-emerald-600 mx-auto mb-4" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-emerald-800 mb-2">
                            Welcome to Our Garden!
                        </h3>
                        <p className="text-emerald-600 mb-4">
                            Check your inbox for your first gardening tip.
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium"
                        >
                            💌 Confirmation sent!
                        </motion.div>
                    </motion.div>
                )}

                {/* Trust badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 mt-12"
                >
                    {['5,000+ Subscribers', 'Monthly Editions', 'Expert Verified'].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -3 }}
                            className="bg-white/90 backdrop-blur-sm px-5 py-3 rounded-full shadow-sm flex items-center gap-2 border border-emerald-100"
                        >
                            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                            <span className="text-emerald-700 font-medium">{item}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Animated confetti for submission */}
            {isSubscribed && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 pointer-events-none z-50"
                >
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 0, x: 0, opacity: 1, rotate: 0 }}
                            animate={{
                                y: [-20, window.innerHeight],
                                x: Math.random() * 400 - 200,
                                opacity: [1, 0],
                                rotate: 360,
                            }}
                            transition={{
                                duration: 2 + Math.random() * 3,
                                ease: "linear",
                            }}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: '30%',
                            }}
                            className="absolute text-emerald-400 text-2xl"
                        >
                            {['🌿', '🌸', '🍃', '🌱', '🌻'][Math.floor(Math.random() * 5)]}
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </motion.section>
    );
};

export default NewsletterSection;