"use client";
import React, { useState } from "react";
import PetitionCard from "../../components/petitionCard";
import { FaUsers, FaEnvelope } from "react-icons/fa";

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

type Props = {};

const Browse = (props: Props) => {
  const [toggle, setToggle] = useState(0);

  const handleToggle = (button: number) => {
    setToggle(button);
  };

  return (
    // <div className="flex flex-col items-center justify-center pt-3">
    //   <h1 className="text-center text-3xl font-bold">All Petitions</h1>
    //   <div className="max-w-screen-xl px-4 py-3 mx-auto">
    //     {petitions.map((petition, index) => (
    //       <PetitionCard key={index} petition={petition} />
    //     ))}
    //   </div>
    // </div>

    <div className="bg-gray-50 min-h-screen p-6">
      <header className="container mx-auto text-center mb-6">
        <h1 className="text-4xl font-bold">Discover petitions to sign</h1>
      </header>

      <main className="container mx-auto">
        <nav className="flex justify-center space-x-8 mb-6">
          <button
            className={`${
              toggle === 0
                ? "text-black border-b-2 border-black"
                : "text-gray-600"
            } font-semibold pb-1`}
            onClick={() => handleToggle(0)}
          >
            Featured
          </button>
          <button
            className={`${
              toggle === 1
                ? "text-black border-b-2 border-black"
                : "text-gray-600"
            } font-semibold pb-1`}
            onClick={() => handleToggle(1)}
          >
            Popular
          </button>
          <button
            className={`${
              toggle === 2
                ? "text-black border-b-2 border-black"
                : "text-gray-600"
            } font-semibold pb-1`}
            onClick={() => handleToggle(2)}
          >
            Recent
          </button>
          <button
            className={`${
              toggle === 3
                ? "text-black border-b-2 border-black"
                : "text-gray-600"
            } font-semibold pb-1`}
            onClick={() => handleToggle(3)}
          >
            Victories
          </button>
        </nav>

        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          {petitions.map((petition, index) => (
            <PetitionCard key={index} petition={petition} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Browse;
