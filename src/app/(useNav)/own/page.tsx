"use client";
import React, { useState } from "react";
import PetitionCard from "../../../components/petitionCard";
import { on } from "events";
import Link from "next/link";

//  EXAMPLE PETITIONS
const petitions = [
  {
    _id: "1",
    title: "Free Palestine!",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam numquam doloremque, aut corrupti, sapiente maxime minus autem harum nulla vero sed alias illo quasi fugiat ab iusto omnis quibusdam. Amet.",
  },
  {
    _id: "2",
    title: "PAY WORKERS MORE!",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam numquam doloremque, aut corrupti, sapiente maxime minus autem harum nulla vero sed alias illo quasi fugiat ab iusto omnis quibusdam. Amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam numquam doloremque, aut corrupti, sapiente maxime minus autem harum nulla vero sed alias illo quasi fugiat ab iusto omnis quibusdam. Amet.",
  },
  {
    _id: "3",
    title: "More FINAID!",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam numquam doloremque, aut corrupti, sapiente maxime minus autem harum nulla vero sed alias illo quasi fugiat ab iusto omnis quibusdam. Amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam numquam doloremque, aut corrupti, sapiente maxime minus autem harum nulla vero sed alias illo quasi fugiat ab iusto omnis quibusdam. Amet.",
  },
];

type Props = {};

const Own = (props: Props) => {
  const [onStart, setOnStart] = useState(true);

  const handleToggle = () => {
    setOnStart(!onStart);
  };

  return (
    <div className=" min-h-screen flex flex-col items-center">
      <header className="">
        <div className="container mx-auto py-8 px-6 flex justify-between items-center">
          <div className="text-center flex flex-col gap-4">
            <h1 className="text-4xl font-bold">Wilson Weng</h1>
            <p className="text-gray-600 mt-2">Flushing, NY, United States</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto mt-8 px-6">
        <div className="bg-white shadow-md rounded p-6">
          <nav className="flex justify-center mb-6">
            <div className="flex space-x-8">
              <button
                className={`${
                  onStart ? "text-black" : "to-gray-600"
                } font-semibold relative pb-1`}
                onClick={handleToggle}
              >
                Started (0)
                {onStart && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-black"></span>
                )}
              </button>
              <button
                className={`${
                  !onStart ? "text-black" : "to-gray-600"
                } font-semibold relative pb-1`}
                onClick={handleToggle}
              >
                Signed (0)
                {!onStart && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-black"></span>
                )}
              </button>
            </div>
          </nav>

          <div className="bg-gray-100 p-4 rounded-md flex justify-between items-center">
            <p className="text-gray-700">
              Is there something you want to change? Build support for an issue
              you care about.
            </p>
            <Link
              href="/create"
              className="text-black border border-black px-4 py-2 rounded hover:bg-gray-50"
            >
              Start a petition
            </Link>
          </div>
        </div>
      </main>
      <div className="flex flex-col items-center justify-center pt-8">
        <h1 className="text-center text-3xl font-bold">My Petitions</h1>
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          
        </div>
      </div>
    </div>
  );
};

export default Own;
