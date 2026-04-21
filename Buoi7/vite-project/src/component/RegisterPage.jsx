import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF, FaApple, FaRegEyeSlash } from 'react-icons/fa';
import image from './anh1.png';

const RegisterPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full">

                <div className="w-full md:w-1/2 p-8 lg:p-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center md:text-left">
                        Create an account
                    </h2>

                    <form className="space-y-5">
                        <div>
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none transition-colors"
                                placeholder="Full name"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-gray-200 focus:outline-none transition-all"
                                placeholder="Email"
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="password"
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-gray-200 focus:outline-none transition-all"
                                placeholder="Password"
                            />
                            <FaRegEyeSlash className="absolute right-4 top-11 text-gray-400 cursor-pointer" />
                        </div>

                        <button className="w-full bg-[#f44a87] hover:bg-[#e03a74] text-white font-semibold py-4 rounded-xl shadow-lg transition-transform active:scale-[0.98]">
                            Sign in
                        </button>
                    </form>

                    <div className="mt-8">
                        <div className="relative flex py-5 items-center">
                            <div className="flex-grow border-t border-transparent"></div>
                            <span className="flex-shrink mx-4 text-gray-400 text-sm">Or sign in with</span>
                            <div className="flex-grow border-t border-transparent"></div>
                        </div>

                        <div className="flex justify-between gap-4 mt-2">
                            <button className="flex-1 flex justify-center py-3 bg-red-50 rounded-2xl hover:bg-red-100 transition-colors">
                                <FcGoogle size={24} />
                            </button>
                            <button className="flex-1 flex justify-center py-3 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors">
                                <FaFacebookF size={24} className="text-blue-600" />
                            </button>
                            <button className="flex-1 flex justify-center py-3 bg-gray-50 rounded-2xl hover:bg-gray-200 transition-colors">
                                <FaApple size={24} className="text-black" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="hidden md:flex w-1/2 bg-[#f44a87] items-center justify-center p-12">
                    <img
                        src={image}
                        alt="Illustration"
                        className="w-full h-auto object-contain"
                    />
                </div>


            </div>
        </div>
    );
};

export default RegisterPage;