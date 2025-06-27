
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFilter, FiChevronDown, FiX } from 'react-icons/fi';

const BrowseTips = () => {
    const tipsData = useLoaderData();
    const [sortConfig, setSortConfig] = useState({ key: 'title', direction: 'ascending' });
    const [filters, setFilters] = useState({
        category: '',
        difficulty: ''
    });
    const [showFilters, setShowFilters] = useState(false);

    // Get unique categories and difficulties
    const categories = [...new Set(tipsData.map(tip => tip.category))];
    const difficulties = [...new Set(tipsData.map(tip => tip.difficulty))];

    // Apply sorting
    const sortedTips = [...tipsData].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

    // Apply filtering
    const filteredTips = sortedTips.filter(tip => {
        return (
            (filters.category === '' || tip.category === filters.category) &&
            (filters.difficulty === '' || tip.difficulty === filters.difficulty)
        );
    });

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const resetFilters = () => {
        setFilters({
            category: '',
            difficulty: ''
        });
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            y: -8,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    const filterPanelVariants = {
        hidden: {
            opacity: 0,
            height: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginBottom: 0
        },
        visible: {
            opacity: 1,
            height: "auto",
            paddingTop: "1.5rem",
            paddingBottom: "1.5rem",
            marginBottom: "2rem",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    // Difficulty badge colors
    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Easy': return 'from-emerald-400 to-teal-500';
            case 'Medium': return 'from-amber-400 to-orange-500';
            case 'Hard': return 'from-rose-400 to-pink-500';
            default: return 'from-gray-400 to-gray-600';
        }
    };

    return (
        <div className='container mx-auto px-4 sm:px-6 py-12 min-h-[calc(100vh-300px)]'>
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h2 className='text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-700'>
                    Garden Mastery
                </h2>
                <p className='text-md text-gray-600 max-w-2xl mx-auto'>
                    Cultivate your skills with our premium gardening collection
                </p>
            </motion.div>

            {/* Filter and Sort Controls */}
            <motion.div
                className='flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {/* Filter Button */}
                <div className='flex items-center gap-4 w-full md:w-auto'>
                    <motion.button
                        onClick={() => setShowFilters(!showFilters)}
                        className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all ${showFilters ? 'bg-emerald-600 text-white shadow-lg' : 'bg-white text-emerald-600 border border-emerald-200 shadow-sm hover:shadow-md'}`}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <FiFilter className="text-lg" />
                        <span>Filters</span>
                        {(filters.category || filters.difficulty) && (
                            <span className="w-5 h-5 flex items-center justify-center bg-white text-emerald-600 text-xs font-bold rounded-full">
                                {(filters.category ? 1 : 0) + (filters.difficulty ? 1 : 0)}
                            </span>
                        )}
                    </motion.button>

                    {(filters.category || filters.difficulty) && (
                        <button
                            onClick={resetFilters}
                            className="flex items-center gap-2 text-sm text-gray-500 hover:text-emerald-600 transition-colors"
                        >
                            <FiX className="text-lg" />
                            Clear filters
                        </button>
                    )}
                </div>

                {/* Sort Dropdown */}
                <div className="relative w-full md:w-auto">
                    <motion.div
                        className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-3 shadow-sm cursor-pointer"
                        whileHover={{ boxShadow: "0 5px 15px rgba(0,0,0,0.05)" }}
                        onClick={() => document.getElementById('sort-dropdown').classList.toggle('hidden')}
                    >
                        <span className="text-gray-600">Sort by:</span>
                        <span className="font-medium text-emerald-700 capitalize">
                            {sortConfig.key} ({sortConfig.direction})
                        </span>
                        <FiChevronDown className="text-gray-400 ml-1 transition-transform" />
                    </motion.div>

                    <div
                        id="sort-dropdown"
                        className="hidden absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg z-10 border border-gray-100 overflow-hidden"
                    >
                        <ul className="py-1">
                            <li>
                                <button
                                    onClick={() => {
                                        requestSort('title');
                                        document.getElementById('sort-dropdown').classList.add('hidden');
                                    }}
                                    className="block px-4 py-3 text-left w-full hover:bg-emerald-50 transition-colors font-medium text-gray-700"
                                >
                                    Title {sortConfig.key === 'title' && (
                                        <span className="text-emerald-600 float-right">
                                            {sortConfig.direction === 'ascending' ? 'A-Z' : 'Z-A'}
                                        </span>
                                    )}
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        requestSort('category');
                                        document.getElementById('sort-dropdown').classList.add('hidden');
                                    }}
                                    className="block px-4 py-3 text-left w-full hover:bg-emerald-50 transition-colors font-medium text-gray-700"
                                >
                                    Category {sortConfig.key === 'category' && (
                                        <span className="text-emerald-600 float-right">
                                            {sortConfig.direction === 'ascending' ? 'A-Z' : 'Z-A'}
                                        </span>
                                    )}
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        requestSort('difficulty');
                                        document.getElementById('sort-dropdown').classList.add('hidden');
                                    }}
                                    className="block px-4 py-3 text-left w-full hover:bg-emerald-50 transition-colors font-medium text-gray-700"
                                >
                                    Difficulty {sortConfig.key === 'difficulty' && (
                                        <span className="text-emerald-600 float-right">
                                            {sortConfig.direction === 'ascending' ? 'Easy first' : 'Hard first'}
                                        </span>
                                    )}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* Filter Panel */}
            <AnimatePresence>
                {showFilters && (
                    <motion.div
                        variants={filterPanelVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                    >
                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Category
                                </label>
                                <div className="relative">
                                    <select
                                        name="category"
                                        value={filters.category}
                                        onChange={handleFilterChange}
                                        className="block w-full pl-4 pr-10 py-3 text-base border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent rounded-xl appearance-none bg-white"
                                    >
                                        <option value="">All Categories</option>
                                        {categories.map(category => (
                                            <option key={category} value={category}>{category}</option>
                                        ))}
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Difficulty Level
                                </label>
                                <div className="relative">
                                    <select
                                        name="difficulty"
                                        value={filters.difficulty}
                                        onChange={handleFilterChange}
                                        className="block w-full pl-4 pr-10 py-3 text-base border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent rounded-xl appearance-none bg-white"
                                    >
                                        <option value="">All Difficulty Levels</option>
                                        {difficulties.map(level => (
                                            <option key={level} value={level}>{level}</option>
                                        ))}
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Results Count */}
            <motion.div
                className="mb-8 text-center sm:text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <p className="text-gray-500">
                    Showing <span className="font-semibold text-emerald-600">{filteredTips.length}</span> of <span className="font-semibold">{tipsData.length}</span> premium gardening tips
                </p>
            </motion.div>

            {/* Tips Grid */}
            {filteredTips.length === 0 ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100"
                >
                    <h3 className="text-xl font-medium text-gray-500 mb-4">No tips match your current filters</h3>
                    <button
                        onClick={resetFilters}
                        className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all"
                    >
                        Reset all filters
                    </button>
                </motion.div>
            ) : (
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredTips.map((tip) => (
                            <motion.div
                                key={tip._id}
                                variants={cardVariants}
                                whileHover="hover"
                                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
                            >
                                {/* Image with gradient overlay */}
                                <div className="relative h-60 overflow-hidden">
                                    <motion.img
                                        src={tip.imageUrl}
                                        alt={tip.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                                    {/* Difficulty badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getDifficultyColor(tip.difficulty)} shadow-md`}>
                                            {tip.difficulty}
                                        </span>
                                    </div>
                                </div>

                                {/* Card content */}
                                <div className="p-6">
                                    {/* Category */}
                                    <span className="inline-block mb-2 text-xs font-semibold tracking-wider text-emerald-600 uppercase">
                                        {tip.category}
                                    </span>

                                    {/* Title */}
                                    <h3 className="mb-3 text-xl font-semibold text-gray-900 leading-snug">
                                        {tip.title}
                                    </h3>

                                    {/* Action button */}
                                    <div className="mt-6">
                                        <Link
                                            to={`/tipsDetails/${tip._id}`}
                                            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-emerald-600 bg-white border border-emerald-200 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-200 shadow-sm hover:shadow-md"
                                        >
                                            View Details
                                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            )}
        </div>
    );
};

export default BrowseTips;