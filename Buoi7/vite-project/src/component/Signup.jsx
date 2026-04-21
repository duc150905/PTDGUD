import React, { useState } from 'react';
import { FaGoogle, FaFacebookF, FaApple, FaEyeSlash } from 'react-icons/fa';

const SignUpForm = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-xl shadow-sm w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Sign up</h2>

                <form className="space-y-4">
                    {/* Row: First Name & Last Name */}
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-600">First name</label>
                            <input
                                type="text"
                                placeholder="Input first name"
                                className="w-full px-4 py-2 bg-gray-50 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-600">Last name</label>
                            <input
                                type="text"
                                placeholder="Input last name"
                                className="w-full px-4 py-2 bg-gray-50 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Email</label>
                        <input
                            type="email"
                            placeholder="example.email@gmail.com"
                            className="w-full px-4 py-2 bg-gray-50 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Enter at least 8+ characters"
                                className="w-full px-4 py-2 bg-gray-50 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
                            />
                            <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <FaEyeSlash size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Terms */}
                    <div className="flex items-start gap-2 py-2">
                        <input type="checkbox" className="mt-1 accent-pink-500 h-4 w-4 rounded" defaultChecked />
                        <span className="text-sm text-gray-600 leading-tight">
                            By signing up, I agree with the <span className="text-pink-500 cursor-pointer hover:underline">Terms of Use</span> & <span className="text-pink-500 cursor-pointer hover:underline">Privacy Policy</span>
                        </span>
                    </div>

                    {/* Submit Button */}
                    <button className="w-full py-3 bg-[#f54281] hover:bg-[#d4376d] text-white font-semibold rounded-lg transition duration-200 shadow-md">
                        Sign up
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Already have an account? <span className="text-pink-500 font-medium cursor-pointer hover:underline">Log in</span>
                </p>

                {/* Divider */}
                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm uppercase">
                        <span className="bg-white px-2 text-gray-400">OR</span>
                    </div>
                </div>

                {/* Social Buttons */}
                <div className="flex justify-center gap-4">
                    <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#c5221f] text-white hover:opacity-90 transition">
                        <FaGoogle size={20} />
                    </button>
                    <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#3b5998] text-white hover:opacity-90 transition">
                        <FaFacebookF size={20} />
                    </button>
                    <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1c1c1c] text-white hover:opacity-90 transition">
                        <FaApple size={22} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;