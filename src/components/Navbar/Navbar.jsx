import React, { use } from 'react';
import Logo from "../../assets/logo-transparent.png"
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { FiLogOut } from 'react-icons/fi';

const Navbar = () => {
    const { user, logOut } = use(AuthContext)
    // const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    const navigate = useNavigate()

    // useEffect(() => {
    //     localStorage.setItem("theme", theme)
    //     const localTheme = localStorage.getItem("theme")
    //     document.querySelector("html").setAttribute("data-theme", localTheme)
    // }, [theme])

    // const handleToggle = (e) => {
    //     if (e.target.checked) {
    //         setTheme("dark")
    //     }
    //     else {
    //         setTheme("light")
    //     }
    // }

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

    return (
        <div className="navbar bg-gradient-to-r bg-[#edfaf5] px-8 py-4 rounded-lg shadow-lg sticky top-0 z-50">
            {/* Mobile menu button */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white hover:bg-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-green-600 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        {/* Added all the same links as desktop */}
                        <NavLink to="/" className={({ isActive }) =>
                            `px-4 py-2 rounded-lg font-medium transition-all ${isActive ? 'bg-white text-green-600' : 'hover:bg-green-600 hover:bg-opacity-30'}`}>
                            <li>Home</li>
                        </NavLink>
                        <NavLink to="/explore" className={({ isActive }) =>
                            `px-4 py-2 rounded-lg font-medium transition-all ${isActive ? 'bg-white text-green-600' : 'hover:bg-green-600 hover:bg-opacity-30'}`}>
                            <li>Explore Gardeners</li>
                        </NavLink>
                        <NavLink to="/browseTips" className={({ isActive }) =>
                            `px-4 py-2 rounded-lg font-medium transition-all ${isActive ? 'bg-white text-green-600' : 'hover:bg-green-600 hover:bg-opacity-30'}`}>
                            <li>Browse Tips</li>
                        </NavLink>
                        {
                            user && <NavLink to="/dashboard" className={({ isActive }) =>
                                `px-4 py-2 rounded-lg font-medium transition-all ${isActive ? 'bg-white text-green-600' : 'hover:bg-green-600 hover:bg-opacity-30'}`}>
                                <li>Dashboard</li>
                            </NavLink>
                        }
                        <NavLink to="/aboutUs" className={({ isActive }) =>
                            `px-4 py-2 rounded-lg font-medium transition-all ${isActive ? 'bg-white text-green-600' : 'hover:bg-green-600 hover:bg-opacity-30'}`}>
                            <li>About Us</li>
                        </NavLink>
                        <NavLink to="/contactUs" className={({ isActive }) =>
                            `px-4 py-2 rounded-lg font-medium transition-all ${isActive ? 'bg-white text-green-600' : 'hover:bg-green-600 hover:bg-opacity-30'}`}>
                            <li>Contact</li>
                        </NavLink>

                        {/* {
                            user && <NavLink to="/shareTips" className={({ isActive }) =>
                                `px-4 py-2 rounded-lg font-medium transition-all ${isActive ? 'bg-white text-green-600' : 'hover:bg-green-600 hover:bg-opacity-30'}`}>
                                <li>Share a Tip</li>
                            </NavLink>
                        }
                        {
                            user && <NavLink to="/myTips" className={({ isActive }) =>
                                `px-4 py-2 rounded-lg font-medium transition-all ${isActive ? 'bg-white text-green-600' : 'hover:bg-green-600 hover:bg-opacity-30'}`}>
                                <li>My Tips</li>
                            </NavLink>
                        } */}

                        {/* Auth buttons */}
                        <div className="flex items-center ml-2 gap-3">
                            {
                                user ? null : (
                                    <>
                                        <NavLink to="/login" className={({ isActive }) =>
                                            `px-4 py-2 rounded-lg font-medium transition-all ${isActive ? 'bg-white text-green-600' : 'hover:bg-green-600 hover:bg-opacity-30'}`}>
                                            <li>Login</li>
                                        </NavLink>
                                        <NavLink to="/register" className={({ isActive }) =>
                                            `px-4 py-2 rounded-lg font-medium transition-all ${isActive ? 'bg-white text-green-600' : 'hover:bg-green-600 hover:bg-opacity-30'}`}>
                                            <li>Register</li>
                                        </NavLink>
                                    </>
                                )
                            }
                        </div>

                        {/* User dropdown */}
                        {
                            user && (
                                <li className="ml-2 mt-4">
                                    <details className="dropdown dropdown-end">
                                        <summary className="cursor-pointer flex items-center p-0 hover:bg-transparent">
                                            {
                                                user && (
                                                    <div className="hover:tooltip tooltip-open hover:tooltip-right" data-tip={user?.displayName}>
                                                        <div className="flex items-center space-x-2">
                                                            <img
                                                                src={user?.photoURL}
                                                                referrerPolicy='no-referrer'
                                                                alt="User Profile"
                                                                className="w-10 h-10 rounded-full border-2 border-white"
                                                            />
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </summary>
                                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-red-400 text-white rounded-box w-52 mt-2">
                                            <li>
                                                <button
                                                    onClick={handleLogout}
                                                    className="text-left hover:bg-green-100 rounded-lg p-2 font-medium"
                                                >
                                                    Logout
                                                </button>
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                            )
                        }
                    </ul>
                </div>
                {/* Logo */}
                <NavLink to="/" className="flex items-center">
                    <img className='w-16 h-16 object-contain' src={Logo} alt="logo" />
                    <span className="ml-2 text-2xl font-bold  hidden sm:inline-block">Gardenify</span>
                </NavLink>
            </div>

            {/* Desktop menu (unchanged) */}
            <div className="navbar-center hidden lg:flex items-center">
                <ul className="menu menu-horizontal px-1 space-x-2">
                    <NavLink to="/" className={({ isActive }) =>
                        `px-4 py-2 rounded-lg font-medium transition-all ${isActive ? 'bg-white text-green-600' : 'hover:bg-green-600 hover:bg-opacity-30'}`}>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/explore" className={({ isActive }) =>
                        `px-4 py-2 rounded-lg font-medium transition-all ${isActive ? 'bg-white text-green-600' : 'hover:bg-green-600 hover:bg-opacity-30'}`}>
                        <li>Explore Gardeners</li>
                    </NavLink>
                    <NavLink to="/browseTips" className={({ isActive }) =>
                        `px-4 py-2 rounded-lg font-medium transition-all ${isActive ? 'bg-white text-green-600' : 'hover:bg-green-600 hover:bg-opacity-30'}`}>
                        <li>Browse Tips</li>
                    </NavLink>
                    {
                        user && <NavLink to="/dashboard" className={({ isActive }) =>
                            `px-4 py-2 rounded-lg font-medium transition-all ${isActive ? 'bg-white text-green-600' : 'hover:bg-green-600 hover:bg-opacity-30'}`}>
                            <li>Dashboard</li>
                        </NavLink>
                    }
                    <NavLink to="/aboutUs" className={({ isActive }) =>
                        `px-4 py-2 rounded-lg font-medium transition-all ${isActive ? 'bg-white text-green-600' : 'hover:bg-green-600 hover:bg-opacity-30'}`}>
                        <li>About Us</li>
                    </NavLink>
                    <NavLink to="/contactUs" className={({ isActive }) =>
                        `px-4 py-2 rounded-lg font-medium transition-all ${isActive ? 'bg-white text-green-600' : 'hover:bg-green-600 hover:bg-opacity-30'}`}>
                        <li>Contact</li>
                    </NavLink>



                    {/* Auth buttons */}
                    <div className="flex items-center ml-2 gap-3">
                        {
                            user ? null : (
                                <>
                                    <NavLink to="/login" className={({ isActive }) =>
                                        `px-4 py-2 rounded-lg font-medium transition-all ${isActive ? 'bg-white text-green-600' : 'hover:bg-green-600 hover:bg-opacity-30'}`}>
                                        <li>Login</li>
                                    </NavLink>
                                    <NavLink to="/register" className={({ isActive }) =>
                                        `px-4 py-2 rounded-lg font-medium transition-all ${isActive ? 'bg-white text-green-600' : 'hover:bg-green-600 hover:bg-opacity-30'}`}>
                                        <li>Register</li>
                                    </NavLink>
                                </>
                            )
                        }
                    </div>

                    {/* User dropdown */}
                    {
                        user && (
                            <li className="ml-2">
                                <details className="dropdown dropdown-end">
                                    <summary className="cursor-pointer flex items-center p-0 hover:bg-transparent">
                                        {
                                            user && (
                                                <div className="hover:tooltip tooltip-open hover:tooltip-right" data-tip={user?.displayName}>
                                                    <div className="flex items-center space-x-2">
                                                        <img
                                                            src={user?.photoURL}
                                                            referrerPolicy='no-referrer'
                                                            alt="User Profile"
                                                            className="w-10 h-10 rounded-full border-2 border-white"
                                                        />
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </summary>
                                    {
                                        user && <ul className="p-2 shadow menu dropdown-content z-[1] bg-white rounded-box w-52 mt-2 text-green-700">
                                            <li>
                                                <button
                                                    onClick={handleLogout}
                                                    className="text-left hover:bg-green-100 rounded-lg p-2 font-medium"
                                                >
                                                    Logout
                                                </button>
                                            </li>
                                        </ul>
                                    }
                                </details>
                            </li>
                        )
                    }
                </ul>
            </div>

            {/* CTA Button */}
            <div className="navbar-end">

                {
                    user && <ul className=" shadow menu dropdown-content z-[1] bg-base-100 rounded-box">
                        <li>
                            <button className="flex items-center w-full rounded-lg text-red-500 hover:bg-red-50">
                                <FiLogOut className="mr-3" />
                                Logout
                            </button>

                        </li>
                    </ul>
                }
            </div>
        </div>
    );
};

export default Navbar;