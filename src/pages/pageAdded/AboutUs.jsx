import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaSeedling, FaTree, FaUsers, FaHeart } from 'react-icons/fa';
import { FiAward, FiUserCheck } from 'react-icons/fi';

const AboutUs = () => {
    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const card = {
        hover: {
            y: -10,
            boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)",
            transition: {
                duration: 0.3
            }
        }
    };

    const leafFloat = {
        float: {
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
            {/* Floating decorative leaves */}
            <motion.div
                className="absolute top-20 left-10 text-emerald-300 opacity-40"
                variants={leafFloat}
                animate="float"
                style={{ rotate: '15deg' }}
            >
                <FaLeaf size={60} />
            </motion.div>
            <motion.div
                className="absolute bottom-1/4 right-20 text-teal-300 opacity-30"
                variants={leafFloat}
                animate="float"
                style={{ rotate: '-25deg' }}
            >
                <FaLeaf size={80} />
            </motion.div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                {/* Hero Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                        className="inline-block mb-6"
                    >
                        <FaSeedling className="text-5xl text-emerald-500 mx-auto" />
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 mb-4">
                        Our Gardening Story
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Cultivating green thumbs and growing communities since 2015
                    </p>
                </motion.section>

                {/* Mission Section */}
                <motion.section
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-28"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div variants={item} className="lg:order-1">
                            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                                    alt="Our gardening team"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                        <motion.div variants={item} className="lg:order-0">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
                            <p className="text-gray-600 mb-6 text-lg">
                                At GreenThumb Collective, we believe everyone deserves to experience the joy of gardening.
                                Our mission is to make gardening accessible, enjoyable, and rewarding for people of all
                                skill levels through shared knowledge and community support.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <FaHeart className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">Promote sustainable gardening practices</span>
                                </li>
                                <li className="flex items-start">
                                    <FaUsers className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">Build a supportive gardening community</span>
                                </li>
                                <li className="flex items-start">
                                    <FaTree className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">Make urban gardening accessible to all</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Values Section */}
                <motion.section
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-28"
                >
                    <motion.div variants={item} className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            These principles guide everything we do at GreenThumb Collective
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <FaLeaf className="text-3xl text-emerald-500" />,
                                title: "Sustainability",
                                desc: "We promote eco-friendly practices that nurture both plants and planet."
                            },
                            {
                                icon: <FiUserCheck className="text-3xl text-emerald-500" />,
                                title: "Inclusivity",
                                desc: "Gardening is for everyone, regardless of experience or space limitations."
                            },
                            {
                                icon: <FiAward className="text-3xl text-emerald-500" />,
                                title: "Excellence",
                                desc: "We're committed to providing accurate, practical gardening advice."
                            }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                whileHover="hover"
                                variants={card}
                                className="bg-white rounded-2xl shadow-md p-8 text-center"
                            >
                                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                                <p className="text-gray-600">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Team Section */}
                <motion.section
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-28"
                >
                    <motion.div variants={item} className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Passionate gardeners dedicated to helping you grow
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                name: "Sarah Green",
                                role: "Founder & Head Gardener",
                                bio: "Horticulture expert with 15+ years experience in organic gardening.",
                                img: "https://randomuser.me/api/portraits/women/43.jpg"
                            },
                            {
                                name: "Michael Bloom",
                                role: "Community Manager",
                                bio: "Connects gardeners and fosters our growing community.",
                                img: "https://randomuser.me/api/portraits/men/32.jpg"
                            },
                            {
                                name: "Emma Rose",
                                role: "Plant Care Specialist",
                                bio: "Herbalist and indoor plant expert with a green thumb.",
                                img: "https://randomuser.me/api/portraits/women/65.jpg"
                            },
                            {
                                name: "David Oakley",
                                role: "Sustainability Advisor",
                                bio: "Permaculture designer focused on eco-friendly solutions.",
                                img: "https://randomuser.me/api/portraits/men/75.jpg"
                            }
                        ].map((member, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                whileHover="hover"
                                variants={card}
                                className="bg-white rounded-2xl shadow-md overflow-hidden"
                            >
                                <div className="h-48 bg-emerald-100 relative overflow-hidden">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                                    <p className="text-emerald-600 mb-3">{member.role}</p>
                                    <p className="text-gray-600">{member.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* CTA Section */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-12 text-center text-white"
                >
                    <h2 className="text-3xl font-bold mb-4">Ready to Grow With Us?</h2>
                    <p className="text-emerald-100 text-xl mb-8 max-w-2xl mx-auto">
                        Join our community of passionate gardeners and start sharing your knowledge today.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-8 py-3 bg-white text-emerald-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
                            Join the Community
                        </button>
                        <button className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                            Learn More
                        </button>
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default AboutUs;