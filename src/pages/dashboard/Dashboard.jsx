import React, { use, useEffect, useState } from 'react';
import { Link, Outlet, useLoaderData, useLocation, useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHome, FiPlusCircle, FiList, FiUser, FiLogOut, FiMenu, FiX, FiShare2, FiThumbsUp, FiHeart, FiMessageSquare, FiGrid, FiClock, FiUsers, FiSun } from 'react-icons/fi';
import { FaLeaf, FaSeedling, FaTree } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';
import { RiFileAddFill } from 'react-icons/ri';
import Swal from 'sweetalert2';

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();
    const data = useLoaderData()
    const [totalLikes, setTotalLikes] = useState(0);
    const [tipCount, setTipCount] = useState(0)
    const { user, logOut } = use(AuthContext)
    const navigate = useNavigate()
    // console.log(data, user)
    useEffect(() => {
        fetch("https://gardening-server-theta.vercel.app/dashboard/totalLikes")
            .then(res => res.json())
            .then(data => setTotalLikes(data.totalLiked));
    }, []);

    useEffect(() => {
        fetch(`https://gardening-server-theta.vercel.app/myTips?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setTipCount(data.length);
            });
    }, [user]);




    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    icon: "error",
                    title: "You are Logged Out",
                    text: "",

                });
                navigate("/login")
            })
            .catch(error => {
                console.log(error)
            })
    }


    // Mock data - replace with your actual data
    const stats = [
        { title: "Total Tips", value: data.length, icon: <FaLeaf className="text-emerald-500" />, change: "+12%", color: "bg-emerald-100" },
        { title: "My Tips", value: tipCount, icon: <FaSeedling className="text-amber-500" />, change: "+5%", color: "bg-amber-100" },
        { title: "Plant Categories", value: 6, icon: <FaTree className="text-teal-500" />, change: "+2", color: "bg-teal-100" },
        { title: "Likes Received", value: totalLikes, icon: <FiUser className="text-purple-500" />, change: "+0.54%", color: "bg-purple-100" }
    ];

    const recentActivity = [
        { id: 1, action: "Added new tip", title: "Rose Care Basics", time: "2 hours ago" },
        { id: 2, action: "Received like", title: "Organic Fertilizers", time: "5 hours ago" },
        { id: 3, action: "Comment added", title: "Indoor Plants Guide", time: "1 day ago" }
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut"
            }
        }),
        hover: {
            y: -5,
            scale: 1.02,
            transition: { duration: 0.2 }
        }
    };

    const sidebarVariants = {
        open: { x: 0, opacity: 1 },
        closed: { x: '-100%', opacity: 0 }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Mobile Sidebar Toggle */}
            <div className="lg:hidden fixed top-4 left-4 z-50">
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="btn btn-circle btn-sm bg-white shadow-md"
                >
                    {isSidebarOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                </button>
            </div>

            {/* Sidebar */}
            <AnimatePresence>

                {(isSidebarOpen || window.innerWidth >= 1024) && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={sidebarVariants}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl z-40"
                    >
                        <div className="h-full flex flex-col p-4">
                            {/* Logo/Brand */}
                            <div className="p-4 mb-8">
                                <Link to="/">
                                    <h1 className="text-2xl font-bold text-emerald-600 flex items-center">
                                        <FaLeaf className="mr-2" />
                                        Gardenify
                                    </h1>
                                </Link>
                                <p className="text-sm text-gray-500">Gardening Dashboard</p>
                            </div>

                            {/* Navigation */}
                            <nav className="flex-1">
                                <ul className="space-y-2">
                                    <li>
                                        <Link
                                            to="/dashboard"
                                            className={`flex items-center p-3 rounded-lg ${location.pathname === '/dashboard' ? 'bg-emerald-50 text-emerald-600' : 'hover:bg-gray-100'}`}
                                        >
                                            <FiHome className="mr-3" />
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/dashboard/shareTips"
                                            className={`flex items-center p-3 rounded-lg ${location.pathname === '/dashboard/shareTips' ? 'bg-emerald-50 text-emerald-600' : 'hover:bg-gray-100'}`}
                                        >
                                            <FiPlusCircle className="mr-3" />
                                            Share Tips
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/dashboard/myTips"
                                            className={`flex items-center p-3 rounded-lg ${location.pathname === '/dashboard/myTips' ? 'bg-emerald-50 text-emerald-600' : 'hover:bg-gray-100'}`}
                                        >
                                            <FiList className="mr-3" />
                                            My Tips
                                        </Link>
                                    </li>
                                </ul>
                            </nav>

                            {/* User & Logout */}
                            <div className="mt-auto p-4 border-t border-gray-200">
                                <div className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                                    <div className="avatar placeholder mr-3">
                                        <div className="bg-emerald-100 text-emerald-600 rounded-full w-10">


                                            {
                                                user && (


                                                    <div className="flex items-center space-x-2">
                                                        <img
                                                            src={user?.photoURL}
                                                            referrerPolicy='no-referrer'
                                                            alt="User Profile"
                                                            className="w-10 h-10 rounded-full border-2 border-white"
                                                        />
                                                    </div>


                                                )
                                            }
                                        </div>

                                    </div>
                                    <div>
                                        <p className="font-medium">{user?.displayName}</p>
                                        <p className="text-sm text-gray-500">{user?.email}</p>
                                    </div>
                                </div>
                                <button onClick={handleLogout} className="flex items-center w-full p-3 mt-2 rounded-lg text-red-500 hover:bg-red-50">
                                    <FiLogOut className="mr-3" />
                                    Logout
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <div className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'} lg:ml-64`}>
                <div className="p-6">
                    {location.pathname === '/dashboard' ? (
                        <div className="space-y-8">
                            {/* Welcome Banner */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-6 text-white shadow-lg"
                            >
                                <h1 className="text-2xl font-bold">Welcome back, {user?.displayName}</h1>
                                <p className="mt-2">Here's what's happening with your gardening community</p>
                            </motion.div>

                            {/* Stats Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={stat.title}
                                        custom={index}
                                        initial="hidden"
                                        animate="visible"
                                        whileHover="hover"
                                        variants={cardVariants}
                                        className={`${stat.color} p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow`}
                                    >
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                                                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                                            </div>
                                            <div className={`p-3 rounded-full ${stat.color.replace('bg-', 'bg-opacity-30 ')}`}>
                                                {stat.icon}
                                            </div>
                                        </div>
                                        <p className="text-xs mt-4 text-gray-600">
                                            <span className="text-emerald-500 font-medium">{stat.change}</span> from last month
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Recent Activity */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="bg-white rounded-2xl shadow-sm p-6"
                            >
                                <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
                                <div className="space-y-4">
                                    {recentActivity.map(activity => (
                                        <motion.div
                                            key={activity.id}
                                            whileHover={{ x: 5 }}
                                            className="flex items-start p-4 border border-gray-100 rounded-lg hover:bg-gray-50"
                                        >
                                            <div className="bg-emerald-100 p-2 rounded-full mr-4">
                                                <FiPlusCircle className="text-emerald-600" />
                                            </div>
                                            <div>
                                                <p className="font-medium">{activity.action}</p>
                                                <p className="text-sm text-gray-600">{activity.title}</p>
                                                <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>



                            {/* Quick Actions */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                            >
                                <Link
                                    to="/dashboard/shareTips"
                                    className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
                                >
                                    <div className="bg-emerald-100 p-4 rounded-full mb-4">
                                        <FiPlusCircle className="text-emerald-600 text-2xl" />
                                    </div>
                                    <h3 className="font-bold">Share New Tip</h3>
                                    <p className="text-sm text-gray-600 mt-2">Contribute your gardening knowledge</p>
                                </Link>
                                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                                    <div className="bg-amber-100 p-4 rounded-full mb-4">
                                        <FiList className="text-amber-600 text-2xl" />
                                    </div>
                                    <h3 className="font-bold">View All Tips</h3>
                                    <p className="text-sm text-gray-600 mt-2">Explore community gardening tips</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                                    <div className="bg-purple-100 p-4 rounded-full mb-4">
                                        <FiUser className="text-purple-600 text-2xl" />
                                    </div>
                                    <h3 className="font-bold">Community</h3>
                                    <p className="text-sm text-gray-600 mt-2">Connect with other gardeners</p>
                                </div>
                            </motion.div>
                        </div>
                    ) : (
                        <Outlet />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;