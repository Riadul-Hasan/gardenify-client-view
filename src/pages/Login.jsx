import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLogIn, FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';

const Login = () => {
    const { signInUser, setUser, googlePopUp } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        setIsLoading(true);
        signInUser(email, password)
            .then(result => {
                setUser(result.user);
                Swal.fire({
                    title: "Welcome back! Login Success",
                    icon: "success",
                    draggable: true
                });
                navigate("/");
            })
            .catch(error => {
                console.log(error);
                setError("Wrong email or password");
                Swal.fire({
                    title: "Login Failed",
                    text: "Invalid email or password",
                    icon: "error"
                });
            })
            .finally(() => setIsLoading(false));
    };

    const handleGoogleSignIn = () => {
        setIsLoading(true);
        googlePopUp()
            .then(result => {
                const userNow = result.user;
                Swal.fire({
                    title: "Login Successful",
                    icon: "success",
                    draggable: true
                });
                navigate("/");
                setUser(userNow);
            })
            .catch(error => {
                console.log(error);
                setError("Google login failed");
            })
            .finally(() => setIsLoading(false));
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center p-4">
            <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 100 }}
                className="w-full max-w-md"
            >
                <motion.div
                    className="bg-white rounded-2xl shadow-2xl overflow-hidden"
                    whileHover={{ y: -5 }}
                >
                    {/* Animated gradient bar */}
                    <motion.div
                        className="h-2 bg-gradient-to-r from-teal-400 to-emerald-600"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1 }}
                    />

                    <div className="p-8">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-center mb-8"
                        >
                            <motion.h1 variants={itemVariants} className="text-3xl font-bold text-gray-800">
                                Welcome Back
                            </motion.h1>
                            <motion.p variants={itemVariants} className="text-gray-600 mt-2">
                                Sign in to your gardening community
                            </motion.p>
                        </motion.div>

                        <form onSubmit={handleSignIn}>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="space-y-5"
                            >
                                {/* Email Field */}
                                <motion.div variants={itemVariants}>
                                    <div className="relative">
                                        <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Your email"
                                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                            required
                                        />
                                    </div>
                                </motion.div>

                                {/* Password Field */}
                                <motion.div variants={itemVariants}>
                                    <div className="relative">
                                        <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Your password"
                                            className="w-full pl-10 pr-10 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                            required
                                        />
                                        <button
                                            type="button"
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <FiEyeOff className="text-gray-400" /> : <FiEye className="text-gray-400" />}
                                        </button>
                                    </div>
                                </motion.div>

                                {/* Forgot Password */}
                                <motion.div variants={itemVariants} className="flex justify-end">
                                    <Link to="/forget-password" className="text-sm text-emerald-600 hover:text-emerald-500">
                                        Forgot password?
                                    </Link>
                                </motion.div>

                                {/* Error Message */}
                                <AnimatePresence>
                                    {error && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="text-red-500 text-sm p-2 bg-red-50 rounded-lg"
                                        >
                                            {error}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Submit Button */}
                                <motion.button
                                    variants={itemVariants}
                                    type="submit"
                                    className="w-full py-3 px-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-medium rounded-lg shadow-md flex items-center justify-center"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Signing In...
                                        </>
                                    ) : (
                                        <>
                                            <FiLogIn className="mr-2" />
                                            Sign In
                                        </>
                                    )}
                                </motion.button>
                            </motion.div>
                        </form>

                        {/* Divider */}
                        <motion.div
                            className="relative my-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    Or continue with
                                </span>
                            </div>
                        </motion.div>

                        {/* Google Sign In */}
                        <motion.button
                            onClick={handleGoogleSignIn}
                            className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={isLoading}
                        >
                            <FcGoogle className="h-5 w-5 mr-2" />
                            Sign in with Google
                        </motion.button>

                        {/* Sign Up Link */}
                        <motion.div
                            className="mt-6 text-center text-sm text-gray-600"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            Don't have an account?{' '}
                            <Link to="/register" className="font-medium text-emerald-600 hover:text-emerald-500">
                                Register
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Login;