"use client";
import React, { useState } from "react";

interface Petition {
  title: string;
  desc: string;
}

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Petition[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //  EXAMPLE PETITIONS
    const petitions = [
      {
        title: "Free Palistine!",
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

    const filteredResults = petitions.filter((result) =>
      result.title.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filteredResults);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <form onSubmit={handleSearchSubmit} className="flex mb-6">
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          placeholder="Search petitions..."
          className="w-full p-3 text-lg border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button
          type="submit"
          className="p-3 bg-black text-white text-lg rounded-r-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-black"
        >
          Search
        </button>
      </form>

      <div>
        {results.length > 0 ? (
          results.map((result) => (
            <div key={result.title} className="p-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold mb-2">{result.title}</h2>
              <p className="text-gray-600">{result.desc}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
