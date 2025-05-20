import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { signInUser, setUser } = use(AuthContext)

    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
                Swal.fire({
                    title: "Welcome back! Login Success",
                    icon: "success",
                    draggable: true
                });
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className='bg-gradient-to-br from-indigo-50 to-purple-100 py-10 min-h-[calc(100vh-320px)] flex flex-col items-center justify-center px-4'>



            <div className="card bg-white rounded-2xl p-4 w-full max-w-sm shrink-0  mx-auto mt-20 mb-10">
                <h2 className='text-2xl font-bold text-center pt-4'>Welcome Back</h2>

                <p className='text-center text-sm py-2'>Login to access your account</p>
                <form onSubmit={handleSignIn} className="card-body">
                    <fieldset className="fieldset">
                        {/* email */}
                        <label className="label">Email</label>
                        <input required name='email' type="email" className="input" placeholder="Email" />
                        {/* password */}
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" required placeholder="Password" />

                        <Link className="link link-hover text-indigo-600" to="/forget-password">Forgot password?</Link>

                        {/* 
                        {
                            error && <p className='text-red-500 text-xs font-semibold'>{error}</p>
                        } */}
                        <button className="btn btn-neutral mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 border-none text-white hover:from-indigo-600 hover:to-purple-700 ">Login</button>
                    </fieldset>
                </form>

                <div className="divider text-gray-400 text-xs p-4">OR</div>


                {/* <div className='text-center mb-4'>

                    <button onClick={handleGoogleSignIn} className="btn w-11/12 mx-auto p-2 border bg-white border-gray-200 hover:bg-gray-50 text-gray-700 flex items-center"><FcGoogle />
                        Sign In with Google</button>
                </div> */}
                <p className='text-center font-semibold pb-4'>Dont have an account? <Link to="/register" className='text-red-500'>Register</Link></p>
            </div>


        </div>


    );
};

export default Login;