"use client";
import React, { useState } from "react";
import Link from "next/link";
import PetitionCard from "../components/petitionCard";

//  EXAMPLE PETITIONS
const petitions = [
  {
    title: "Free Palestine!",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam numquam doloremque, aut corrupti, sapiente maxime minus autem harum nulla vero sed alias illo quasi fugiat ab iusto omnis quibusdam. Amet.",
  },
  {
    title: "PAY WORKERS MORE!",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam numquam doloremque, aut corrupti, sapiente maxime minus autem harum nulla vero sed alias illo quasi fugiat ab iusto omnis quibusdam. Amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam numquam doloremque, aut corrupti, sapiente maxime minus autem harum nulla vero sed alias illo quasi fugiat ab iusto omnis quibusdam. Amet.",
  },
  {
    title: "More FINAID!",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam numquam doloremque, aut corrupti, sapiente maxime minus autem harum nulla vero sed alias illo quasi fugiat ab iusto omnis quibusdam. Amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam numquam doloremque, aut corrupti, sapiente maxime minus autem harum nulla vero sed alias illo quasi fugiat ab iusto omnis quibusdam. Amet.",
  },
];

export default function HomePage() {
  //Testing Purposes:
  // const [petitionsLinks, setPetitionLinks] = useState([1, 2]);

  return (
    <main className="h-full">
      <div>
        <a href="/api/auth/login">Login</a>
      </div>
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
