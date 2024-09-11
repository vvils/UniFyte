"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Profile() {
  return (
    <main className="h-full">
      <div className="items-center flex flex-col gap-4 mt-8">
        <h1 className="text-4xl font-bold">Edit Profile</h1>
        <Image
          className="border-3 rounded-full"
          src="/favicon.ico"
          alt=""
          width={200}
          height={200}
        />
        <button className="border-2 p-2 rounded-2xl border-orange-300 text-orange-300">
          Upload an Image
        </button>
      </div>

      <div>
        <label>
          <div>
            <span className="font-bold">First Name</span>
          </div>
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-2 rounded-md border-2"
          />
        </label>
      </div>

      <div>
        <label>
          <div>
            <span className="font-bold">Last Name</span>
          </div>
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-2 rounded-md border-2"
          />
        </label>
      </div>

      <div>
        <label>
          <div>
            <span className="font-bold">About Me</span>
          </div>
          <input
            type="text"
            placeholder="Write a short description about yourself"
            className="w-full p-2 rounded-md border-2"
          />
        </label>
      </div>

      <div>
        <a href="/api/auth/login">Login</a>
      </div>
    </main>
  );
}
