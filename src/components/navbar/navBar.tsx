"use client";
import React from "react";
import NavLink from "./navLink";
import Link from "next/link";
import Image from "next/image";
import ProfileButton from "../profile";
import LoginButton from "./loginButton";
import LogoutButton from "./logoutButton";
// import { Button } from "@nextui-org/react"

const links = [
  // {
  //   url: "/",
  //   title: "Home",
  // },
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
    // <div className="flex items-center justify-between h-full px-4 text-xl sm:px-8 md:px-12 lg:px-20 xl:px-48">
    //   {/* link panel */}
    //   <div className="hidden w-1/3 gap-4 md:flex">
    //     {links.map((link) => (
    //       <NavLink link={link} key={link.title} />
    //     ))}
    //   </div>
    // </div>

    <nav className="h-full w-full flex justify-between border-b-2 items-center px-60">
      <div className="flex flex-row font-medium mt-0 gap-6 items-center">
        <Link href={"/"}>
          <Image src="/favicon.ico" alt="" width={52} height={52} />
        </Link>

        {links.map((link) => (
          <NavLink key={link.title} link={link} />
        ))}
      </div>

      <div className="flex flex-row gap-6 justify-center items-center">
        <Link
          href="/search"
          className="text-md text-gray-800 py-2 px-4 mr-4 rounded-full hover:bg-gray-200 transition ease-in-out duration-200 transform hover:scale-105"
        >
          Find Petitions!
        </Link>

        <LoginButton className="text-md text-gray-800 py-2 px-4 mr-4 rounded-full hover:bg-gray-200 transition ease-in-out duration-200 transform hover:scale-105" />
        <LogoutButton className="text-md text-gray-800 py-2 px-4 mr-4 rounded-full hover:bg-gray-200 transition ease-in-out duration-200 transform hover:scale-105" />
        {/* <ProfileButton /> */}
      </div>
    </nav>
  );
}
