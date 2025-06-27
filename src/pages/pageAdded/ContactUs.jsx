import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { FiClock, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import Swal from 'sweetalert2';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            Swal.fire({
                title: 'Message Sent!',
                text: 'We will get back to you soon.',
                icon: 'success'
            });
            setFormData({ name: '', email: '', message: '' });
        }, 1500);
    };

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
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
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
                <FaPaperPlane size={40} />
            </motion.div>
            <motion.div
                className="absolute bottom-1/4 right-20 text-teal-300 opacity-30"
                variants={leafFloat}
                animate="float"
                style={{ rotate: '-25deg' }}
            >
                <FaPaperPlane size={50} />
            </motion.div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                {/* Hero Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                        className="inline-block mb-6"
                    >
                        <FaPaperPlane className="text-5xl text-emerald-500 mx-auto" />
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 mb-4">
                        Get In Touch
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We'd love to hear from you! Reach out with questions, feedback, or just to say hello.
                    </p>
                </motion.section>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                >
                    {/* Contact Information */}
                    <motion.div variants={item} className="space-y-8">
                        <motion.div
                            variants={card}
                            whileHover="hover"
                            className="bg-white rounded-2xl shadow-md p-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-emerald-100 p-3 rounded-full mr-4">
                                        <FaPhoneAlt className="text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-800">Phone</h3>
                                        <p className="text-gray-600">+1 (555) 123-4567</p>
                                        <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am-5pm EST</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-emerald-100 p-3 rounded-full mr-4">
                                        <FaEnvelope className="text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-800">Email</h3>
                                        <p className="text-gray-600">hello@gardenguru.com</p>
                                        <p className="text-sm text-gray-500 mt-1">Typically reply within 24 hours</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-emerald-100 p-3 rounded-full mr-4">
                                        <FaMapMarkerAlt className="text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-800">Office</h3>
                                        <p className="text-gray-600">123 Garden Lane</p>
                                        <p className="text-gray-600">Greenville, SC 29601</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={card}
                            whileHover="hover"
                            className="bg-white rounded-2xl shadow-md p-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Business Hours</h2>
                            <div className="space-y-4">
                                {[
                                    { day: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
                                    { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
                                    { day: "Sunday", hours: "Closed" }
                                ].map((item, index) => (
                                    <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-0">
                                        <div className="flex items-center">
                                            <FiClock className="text-emerald-500 mr-3" />
                                            <span className="text-gray-700">{item.day}</span>
                                        </div>
                                        <span className="text-gray-600">{item.hours}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div variants={item}>
                        <motion.div
                            variants={card}
                            whileHover="hover"
                            className="bg-white rounded-2xl shadow-md p-8 h-full"
                        >
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FiUser className="text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FiMail className="text-gray-400" />
                                        </div>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                                    <div className="relative">
                                        <div className="absolute top-3 left-3">
                                            <FiMessageSquare className="text-gray-400" />
                                        </div>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="5"
                                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                            placeholder="How can we help you?"
                                        ></textarea>
                                    </div>
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-3 px-6 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-lg shadow-md flex items-center justify-center ${isSubmitting ? 'opacity-80' : 'hover:opacity-90'}`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane className="mr-2" />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Map Section */}
                {/* <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mt-20 bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                    <div className="h-96 w-full bg-gray-100 relative">
                    
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <FaMapMarkerAlt className="text-4xl text-emerald-500 mx-auto mb-4" />
                                <p className="text-gray-600">Interactive map would appear here</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Our Location</h3>
                        <p className="text-gray-600">Visit our office at 123 Garden Lane, Greenville, SC</p>
                    </div>
                </motion.section> */}
            </div>
        </div>
    );
};

export default ContactUs;