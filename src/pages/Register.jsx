import React, { use, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';
import { motion } from 'framer-motion';

const Register = () => {
    const { createUser, updateUser, setUser, googlePopUp } = use(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleGoogleSignIn = () => {
        googlePopUp()
            .then(() => {
                Swal.fire({
                    title: "Sign In Success",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                    background: '#f0fdf4',
                    iconColor: '#10b981'
                });
                navigate("/");
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        const form = e.target;
        const formData = new FormData(form);
        const { email, password, name, photoUrl, ...userProfile } = Object.fromEntries(formData.entries());

        // Password validation
        if (password.length < 8) {
            setError("Password must be at least 8 characters");
            setIsSubmitting(false);
            return;
        }
        if (!/[^A-Za-z0-9]/.test(password)) {
            setError("Password must contain at least one special character");
            setIsSubmitting(false);
            return;
        }
        if (!/^(?=.*[A-Z])/.test(password)) {
            setError("Password must contain at least one uppercase letter");
            setIsSubmitting(false);
            return;
        }
        if (!/^(?=.*[a-z])/.test(password)) {
            setError("Password must contain at least one lowercase letter");
            setIsSubmitting(false);
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                // Update user profile
                updateUser({ displayName: name, photoURL: photoUrl })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photoUrl });
                    })
                    .catch(error => {
                        console.log(error);
                        setUser(user);
                    });

                // Save user data to MongoDB
                fetch('https://gardening-server-theta.vercel.app/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(result => result.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                title: "Account Created!",
                                text: "Your account has been successfully created.",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 2000,
                                background: '#f0fdf4',
                                iconColor: '#10b981'
                            });
                            navigate("/");
                        }
                    });
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    title: "Registration Failed",
                    text: error.message || "Something went wrong. Please try again.",
                    icon: "error",
                    confirmButtonColor: "#10b981"
                });
                setIsSubmitting(false);
            });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gradient-to-br from-green-50 to-cyan-50 flex items-center justify-center p-4"
        >
            <div className="w-full max-w-md">
                {/* Header */}
                <motion.div
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-3xl font-bold text-green-800 mb-2">Join Our Community</h1>
                    <p className="text-green-600">Create your account to get started</p>
                </motion.div>

                {/* Registration Card */}
                <motion.div
                    initial={{ scale: 0.98 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-green-100"
                >
                    {/* Card Header */}
                    <div className="bg-gradient-to-r from-green-600 to-emerald-500 p-6 text-center">
                        <h2 className="text-2xl font-bold text-white">Create Account</h2>
                        <p className="text-emerald-100">Start your gardening journey today</p>
                    </div>

                    {/* Registration Form */}
                    <form onSubmit={handleRegister} className="p-6 space-y-4">
                        <motion.div whileHover={{ scale: 1.01 }}>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input
                                name="name"
                                type="text"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                                placeholder="John Doe"
                            />
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.01 }}>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input
                                name="email"
                                type="email"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                                placeholder="your@email.com"
                            />
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.01 }}>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
                            <input
                                name="photoUrl"
                                type="text"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                                placeholder="https://example.com/photo.jpg"
                            />
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.01 }}>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                name="password"
                                type="password"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                                placeholder="••••••••"
                            />
                            {error && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="mt-1 text-xs text-red-600"
                                >
                                    {error}
                                </motion.p>
                            )}
                            <p className="mt-1 text-xs text-gray-500">
                                Password must contain 8+ characters, uppercase, lowercase, and special character
                            </p>
                        </motion.div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all ${isSubmitting
                                ? 'bg-emerald-400 cursor-not-allowed'
                                : 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 shadow-md'}`}
                        >
                            {isSubmitting ? 'Creating Account...' : 'Create Account'}
                        </motion.button>
                    </form>

                    {/* Divider */}
                    <div className="px-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or continue with</span>
                            </div>
                        </div>
                    </div>

                    {/* Google Sign In */}
                    <div className="px-6 pb-6">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleGoogleSignIn}
                            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition"
                        >
                            <FcGoogle className="text-lg" />
                            <span>Sign up with Google</span>
                        </motion.button>
                    </div>

                    {/* Login Link */}
                    <div className="bg-gray-50 px-6 py-4 text-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link
                                to="/login"
                                className="font-medium text-emerald-600 hover:text-emerald-500 transition"
                            >
                                Log in
                            </Link>
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Register;