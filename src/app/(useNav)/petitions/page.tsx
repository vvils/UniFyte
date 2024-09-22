"use client";
import React, { useState } from "react";
import PetitionCard from "@/components/petitionCard";
import Petition from "../../../../lib/models/petition"
import useSWR from "swr";

type Petition = {
  _id: string;
  title: string;
  desc: string;
  media?: string;
  signed: number;
  goal: number;
  upvotes: number;
  uni: string;
  author: { name: string };
  userName: string;
  createdAt: Date;
};

const PetitionPage = () => {
  const [toggle, setToggle] = useState(0);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/petitions/",
    fetcher
  );
  if (error) return <div>Failed to load data</div>;
  if (isLoading) return <div>Loading...</div>;

  const handleToggle = (button: number) => {
    setToggle(button);
  };

  return (
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

        {/* <div className="max-w-screen-xl px-4 py-3 mx-auto">
          {data.petitions.map((petition: Petition) => {
            petition.userName = petition.author.name;

            return <PetitionCard key={petition._id} petition={petition} />;
          })}
        </div> */}
      </main>
    </div>
  );
};

export default PetitionPage;
