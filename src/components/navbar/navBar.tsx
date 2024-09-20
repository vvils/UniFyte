"use client";
import React from "react";
import NavLink from "./navLink";
import Link from "next/link";
import Image from "next/image";
import LoginButton from "./loginButton";
import LogoutButton from "./logoutButton";

const links = [
  {
    url: "/create",
    title: "Start Petition",
  },
  {
    url: "/own",
    title: "My Petitions",
  },
  {
    url: "/petitions",
    title: "Browse",
  },
  {
    url: "/test",
    title: "Testing",
  },
];

export default function NavBar() {
  return (
    <nav className="h-full w-full flex justify-between border-b-1 items-center px-2 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      <div className="flex flex-row mt-0 gap-4 md:gap-6 items-center">
        <Link href={"/"}>
          <Image
            src="/favicon.ico"
            alt="icon"
            width={40}
            height={40}
            priority
            className="sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
          />
        </Link>

        <div className="hidden md:flex flex-row gap-4 lg:gap-6">
          {links.map((link) => (
            <NavLink key={link.title} link={link} />
          ))}
        </div>
      </div>

      <div className="flex flex-row gap-4 md:gap-6 justify-center items-center">
        {/* "Find Petitions" Button */}
        <Link
          href="/search"
          className="text-md md:text-md text-gray-800 py-2 px-3 md:px-4 rounded-full hover:bg-gray-200 transition ease-in-out duration-200 transform hover:scale-105"
        >
          Find Petitions!
        </Link>

        {/* Login / Logout Buttons */}
        <LoginButton className="text-md md:text-md text-gray-800 py-2 px-3 md:px-4 rounded-full hover:bg-gray-200 transition ease-in-out duration-200 transform hover:scale-105" />
        <LogoutButton className="text-md md:text-md text-gray-800 py-2 px-3 md:px-4 rounded-full hover:bg-gray-200 transition ease-in-out duration-200 transform hover:scale-105" />
      </div>

      {/* Mobile Hamburger Menu (optional) */}
      <div className="md:hidden">
        {/* Placeholder for a mobile menu icon (can implement dropdown or sidebar) */}
        <button className="text-gray-800">☰</button>
      </div>
    </nav>
  );
}
