import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaPaperPlane, FaSeedling } from 'react-icons/fa';

const NewsletterSection = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubscribed(true);
        // Add your subscription logic here
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
                    y: [0, -15, 0],
                    rotate: [0, 5, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/4 left-10 opacity-20 z-0"
            >
                <FaLeaf className="w-16 h-16 text-emerald-400" />
            </motion.div>

            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -3, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                className="absolute bottom-1/4 right-12 opacity-15 z-0"
            >
                <FaSeedling className="w-20 h-20 text-teal-500" />
            </motion.div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4">
                        Grow Your Gardening Knowledge
                    </h2>
                    <p className="text-xl text-emerald-600">
                        Subscribe to our newsletter for seasonal tips, exclusive offers, and expert advice
                    </p>
                </motion.div>

                {!isSubscribed ? (
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-md mx-auto relative"
                    >
                        <div className="relative">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email address"
                                required
                                className="w-full px-6 py-4 pr-16 rounded-full border border-emerald-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 outline-none transition-all shadow-lg"
                            />
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full transition-all"
                            >
                                <FaPaperPlane className="text-xl" />
                            </motion.button>
                        </div>
                        <p className="text-sm text-emerald-700 mt-3 text-center">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </motion.form>
                ) : (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg text-center"
                    >
                        <motion.div
                            animate={{
                                rotate: [0, 10, -10, 0],
                                y: [0, -5, 0],
                            }}
                            transition={{ duration: 0.8 }}
                        >
                            <FaPaperPlane className="text-5xl text-emerald-600 mx-auto mb-4" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-emerald-800 mb-2">
                            Thank You for Subscribing!
                        </h3>
                        <p className="text-emerald-600">
                            Your first gardening tip is on its way to your inbox.
                        </p>
                    </motion.div>
                )}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                    className="flex justify-center gap-6 mt-12"
                >
                    {['Organic Tips', 'Seasonal Guides', 'Exclusive Offers'].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md flex items-center gap-2"
                        >
                            <FaLeaf className="text-emerald-500" />
                            <span className="text-emerald-800 font-medium">{item}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Animated confetti for submission */}
            {isSubscribed && (
                <>
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 0, x: 0, opacity: 1, rotate: 0 }}
                            animate={{
                                y: [-20, window.innerHeight],
                                x: Math.random() * 200 - 100,
                                opacity: [1, 0],
                                rotate: 360,
                            }}
                            transition={{
                                duration: 2 + Math.random() * 3,
                                ease: "linear",
                            }}
                            style={{
                                left: `${50 + (Math.random() * 20 - 10)}%`,
                                top: '40%',
                            }}
                            className="absolute text-emerald-400 text-xl"
                        >
                            <FaLeaf />
                        </motion.div>
                    ))}
                </>
            )}
        </motion.section>
    );
};

export default NewsletterSection;