"use client";

import { handleGoogleLogin } from "@/components/login/handleGoogleLogin";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export const LogInPage: React.FC = () => {
  const [formData, setFormData] = useState({ email: "" as string });

  const handleSubmit = (event: React.FormEvent) => {};

  return (
    <div className="relative flex justify-center items-center h-screen bg-gray-100">
      <div className="absolute top-0 left-0 p-4">
        <Link href={"/"}>
          <Image src="/favicon.ico" alt="" width={52} height={52} />
        </Link>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            type="email"
            maxLength={320}
            placeholder="Email Address"
            required
          />
          <input
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            type="password"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="flex justify-center mt-4">
          <button
            className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 transition duration-200"
            onClick={() => handleGoogleLogin()}
          >
            <FcGoogle className="text-2xl mr-2" />
            <span className="text-gray-700 font-semibold">
              Sign in with Google
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};