import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaRegCalendarAlt, FaRegComment, FaArrowRight } from 'react-icons/fa';
import { fadeIn, planetVariants, staggerContainer, textVariant } from '../../components/extra/blogMotion';
// import { staggerContainer, fadeIn, textVariant, planetVariants } from '../utils/motion';

const BlogSection = () => {
    // Sample blog data (replace with your API fetch)
    const blogs = [
        {
            id: 1,
            title: "10 Essential Tools for Urban Gardening",
            excerpt: "Discover the must-have tools to transform your small space into a green paradise.",
            date: "June 15, 2025",
            comments: 12,
            image: "https://images.unsplash.com/photo-1490007424972-076f38963b06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FyZGVuaW5nJTIwYmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
            category: "Urban Gardening"
        },
        {
            id: 2,
            title: "The Science of Soil: Best Mixes for Your Plants",
            excerpt: "Learn how to create the perfect soil blend for different plant types.",
            date: "June 8, 2025",
            comments: 8,
            image: "https://images.unsplash.com/photo-1562722902-d33533894eea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2NpZW5jZSUyMHNvaWx8ZW58MHx8MHx8fDA%3D",
            category: "Plant Care"
        },
        {
            id: 3,
            title: "Seasonal Flowers: What to Plant This Summer",
            excerpt: "A curated list of vibrant flowers that thrive in the summer heat.",
            date: "May 30, 2025",
            comments: 15,
            image: "https://images.unsplash.com/photo-1617357793454-02387be79a37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Vhc29uYWwlMjBmbG93ZXJzfGVufDB8fDB8fHww",
            category: "Seasonal Guide"
        }
    ];

    return (
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative py-20 bg-gradient-to-b from-emerald-50 to-white overflow-hidden"
        >
            {/* Floating decorative elements */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -left-20 opacity-10"
            >
                <FaLeaf className="w-64 h-64 text-emerald-300" />
            </motion.div>

            {/* Section Header */}
            <div className="container mx-auto px-4">
                <motion.div variants={textVariant(0.2)} className="text-center mb-16">
                    <motion.h2
                        variants={fadeIn('up', 'spring', 0.1, 1)}
                        className="text-2xl md:text-3xl font-bold text-emerald-800 mb-4"
                    >
                        Latest Gardening <span className="text-emerald-600">Blogs</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeIn('up', 'spring', 0.3, 1)}
                        className="text-sm text-emerald-600 max-w-2xl mx-auto"
                    >
                        Cultivate your knowledge with our expert tips and stories
                    </motion.p>
                </motion.div>

                {/* Blog Grid */}
                <motion.div
                    variants={staggerContainer(0.1, 0.1)}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {blogs.map((blog, index) => (
                        <motion.article
                            key={blog.id}
                            variants={fadeIn('up', 'spring', index * 0.2, 1)}
                            whileHover={{ y: -10 }}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
                        >
                            {/* Image with hover effect */}
                            <div className="relative h-60 overflow-hidden">
                                <motion.img
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full h-full object-cover"
                                    src={blog.image}
                                    alt={blog.title}
                                />
                                {/* Category badge */}
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md"
                                >
                                    {blog.category}
                                </motion.div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center text-sm text-gray-500 mb-3">
                                    <FaRegCalendarAlt className="mr-2" />
                                    <span>{blog.date}</span>
                                    <span className="mx-2">•</span>
                                    <FaRegComment className="mr-2" />
                                    <span>{blog.comments} comments</span>
                                </div>

                                <motion.h3
                                    whileHover={{ color: '#059669' }}
                                    className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors"
                                >
                                    {blog.title}
                                </motion.h3>

                                <p className="text-gray-600 mb-6">{blog.excerpt}</p>

                                <motion.button
                                    whileHover={{ x: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center text-emerald-600 font-medium"
                                >
                                    Read More <FaArrowRight className="ml-2" />
                                </motion.button>
                            </div>

                            {/* Floating leaf decoration */}
                            <motion.div
                                animate={{ rotate: [0, 15, 0], y: [0, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -bottom-4 -right-4 opacity-20"
                            >
                                <FaLeaf className="w-16 h-16 text-emerald-400" />
                            </motion.div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    variants={fadeIn('up', 'spring', 0.8, 1)}
                    className="text-center mt-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(5, 150, 105, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-emerald-500 to-emerald-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg"
                    >
                        View All Articles
                    </motion.button>
                </motion.div>
            </div>

            {/* Animated background elements */}
            <motion.div
                variants={planetVariants('right')}
                className="absolute -bottom-40 -right-40 opacity-10"
            >
                <FaLeaf className="w-96 h-96 text-emerald-300" />
            </motion.div>
        </motion.section>
    );
};

export default BlogSection;