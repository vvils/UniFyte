"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import PetitionCard from "../../components/petitionCard";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { Session } from "next-auth";

export default function HomePage () {
  const [petitions, setPetitions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/petitions/", {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then(({ petitions }) => {
        setPetitions(petitions);
      });
  }, []);

  return (
      <main className="h-full">
        <div className="flex justify-center">
          <div className="flex flex-col items-center row-auto">
            <p className="text-6xl mt-28">
              Empower Your Voice, Shape Your Campus
            </p>
            <p className="text-2xl mt-4">5,000 people are taking action</p>
            <Link
              href="/create"
              className="text-2xl mt-4 rounded-xl
                      before:ease relative h-12 w-40 overflow-hidden
                      border border-white shadow-2xl before:absolute
                      before:left-0 before:-ml-2 before:h-48 
                      before:w-48 before:origin-top-right 
                      before:-translate-x-full before:translate-y-12
                      before:-rotate-90 before:bg-red-900 
                      before:transition-all before:duration-300 
                      hover:text-white hover:shadow-white 
                      hover:before:-rotate-180"
            >
              Start Petition
            </Link>
          </div>
        </div>

        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <p className="text-xl md:font-bold">What&apos;s Happening on Campus</p>
          {petitions.map((petition, index) => (
            <PetitionCard key={index} petition={petition} />
          ))}
        </div>
      </main>
  );
}
