import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFilter, FiChevronUp, FiChevronDown, FiX } from 'react-icons/fi';

const BrowseTips = () => {
    const tipsData = useLoaderData();
    const [sortConfig, setSortConfig] = useState({ key: 'title', direction: 'ascending' });
    const [filters, setFilters] = useState({
        category: '',
        difficulty: ''
    });
    const [showFilters, setShowFilters] = useState(false);

    // Get unique categories and difficulties for filter options
    const categories = [...new Set(tipsData.map(tip => tip.category))];
    const difficulties = ['Easy', 'Medium', 'Hard'];

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

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className='container mx-auto py-10 min-h-[calc(100vh-300px)] px-4'>
            <title>Browse Tips</title>

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                <h2 className='text-3xl md:text-4xl text-green-600 font-bold mb-4'>All Gardening Tips</h2>
                <p className='text-gray-600 max-w-2xl mx-auto'>
                    Discover helpful gardening tips and techniques to grow your perfect garden
                </p>
            </motion.div>

            {/* Controls */}
            <div className='flex flex-col md:flex-row justify-between items-center mb-8 gap-4'>
                <div className='flex items-center gap-4'>
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className='btn btn-outline btn-primary flex items-center gap-2'
                    >
                        <FiFilter /> Filters
                    </button>

                    {filters.category || filters.difficulty ? (
                        <button
                            onClick={resetFilters}
                            className='btn btn-ghost text-error flex items-center gap-2'
                        >
                            <FiX /> Clear Filters
                        </button>
                    ) : null}
                </div>

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-outline">
                        Sort by: {sortConfig.key} ({sortConfig.direction})
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><button onClick={() => requestSort('title')}>Title</button></li>
                        <li><button onClick={() => requestSort('category')}>Category</button></li>
                        <li><button onClick={() => requestSort('difficulty')}>Difficulty</button></li>
                    </ul>
                </div>
            </div>

            {/* Filter Panel */}
            <AnimatePresence>
                {showFilters && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className='mb-8 overflow-hidden'
                    >
                        <div className='bg-base-200 p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            <div>
                                <label className='label'>
                                    <span className='label-text'>Category</span>
                                </label>
                                <select
                                    name="category"
                                    value={filters.category}
                                    onChange={handleFilterChange}
                                    className='select select-bordered w-full'
                                >
                                    <option value="">All Categories</option>
                                    {categories.map(category => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className='label'>
                                    <span className='label-text'>Difficulty</span>
                                </label>
                                <select
                                    name="difficulty"
                                    value={filters.difficulty}
                                    onChange={handleFilterChange}
                                    className='select select-bordered w-full'
                                >
                                    <option value="">All Levels</option>
                                    {difficulties.map(level => (
                                        <option key={level} value={level}>{level}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Results Count */}
            <div className='mb-6'>
                <p className='text-sm text-gray-500'>
                    Showing {filteredTips.length} of {tipsData.length} tips
                </p>
            </div>

            {/* Tips Grid */}
            {filteredTips.length === 0 ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className='text-center py-20'
                >
                    <h3 className='text-xl font-medium text-gray-500'>No tips match your filters</h3>
                    <button
                        onClick={resetFilters}
                        className='btn btn-link text-primary mt-4'
                    >
                        Clear all filters
                    </button>
                </motion.div>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <AnimatePresence>
                        {filteredTips.map((tip, index) => (
                            <motion.div
                                key={tip._id}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className='card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow'
                            >
                                <figure className='h-48 overflow-hidden'>
                                    <img
                                        src={tip.imageUrl}
                                        alt={tip.title}
                                        className='w-full h-full object-cover transition-transform hover:scale-105'
                                    />
                                </figure>
                                <div className='card-body'>
                                    <div className='flex justify-between items-start'>
                                        <h3 className='card-title'>{tip.title}</h3>
                                        <span className={`badge ${tip.difficulty === 'Easy' ? 'badge-success' : tip.difficulty === 'Medium' ? 'badge-warning' : 'badge-error'}`}>
                                            {tip.difficulty}
                                        </span>
                                    </div>
                                    <div className='flex justify-between items-center mt-2'>
                                        <span className='badge badge-outline'>{tip.category}</span>
                                        <div className='flex items-center gap-1 text-yellow-500'>
                                            {/* Rating stars would go here */}
                                        </div>
                                    </div>
                                    <div className='card-actions justify-end mt-4'>
                                        <Link
                                            to={`/tipsDetails/${tip._id}`}
                                            className='btn btn-primary btn-sm'
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            )}
        </div>
    );
};

export default BrowseTips;