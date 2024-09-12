"use client";
import { useState, useEffect } from "react";
import NavBar from "../../components/navBar";
import Tiptap from "@/components/textEditor";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

interface University {
  name: string;
  state: string;
}

//Testing Purposes
const universities: University[] = [
  { name: "Harvard University", state: "Massachusetts" },
  { name: "Stanford University", state: "California" },
  { name: "University of Chicago", state: "Illinois" },
  { name: "MIT", state: "Massachusetts" },
  { name: "Princeton University", state: "New Jersey" },
  { name: "Yale University", state: "Connecticut" },
  { name: "University of California, Berkeley", state: "California" },
];

export default function PetitionPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [activeButton, setActiveButton] = useState(false);
  
  const [text, setText] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const [searchedUniversity, setSearchedUniversity] = useState<string>("")
  const [filteredUniversity, setFilteredUniversity] = useState<University[]>(universities)

  const incrementCounter = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const decrementCounter = () => {
    if(currentQuestionIndex > 0){
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = (e:any) => {
    e.preventDefault()
    const data = {
      title: title
    }

    console.log(`The petition data was submitted ${title}`)
  }

  const handleSearch = (e:any) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchedUniversity(searchValue);

    const filtered = universities.filter(
      (university) =>
        university.name.toLowerCase().includes(searchValue) ||
        university.state.toLowerCase().includes(searchValue)
    );
    setFilteredUniversity(filtered);
  };

  return (
    <main className="min-h-screen justify-between p-4">
      <div className="flex justify-center mt-16">
        <div className="flex flex-col items-center row-auto">
          {currentQuestionIndex === 0 && (
            <div>
              <h1 className="md:font-bold text-5xl">
                What University do you go to?
              </h1>
              <h1 className="text-2xl mt-8">Connect with people near you</h1>

              
                  <input
                    type="text"
                    value={searchedUniversity}
                    onChange={handleSearch}
                    placeholder="Enter a University"
                    className="mt-8 w-full p-4 rounded-2xl border-2 border-black"
                  />
                

              {searchedUniversity && (
                  <div className="mt-4 border border-gray-200 rounded-md shadow-lg max-h-64 overflow-y-auto">
                    {filteredUniversity.length > 0 ? (
                      filteredUniversity.map((university, index) => (
                        <div
                          key={index}
                          className="p-2 hover:bg-blue-100 cursor-pointer"
                          onClick={() => setSearchedUniversity(university.name)}
                        >
                          <span className="font-semibold">{university.name}</span>, {university.state}
                        </div>
                      ))
                    ) : (
                      <p className="p-2">No universities found</p>
                    )}
                  </div>
                )}
            </div>
      
          )}

          {currentQuestionIndex === 1 && (
            <div>
              <h1 className="md:font-bold text-5xl">
                How would you like to write your petition?
              </h1>
              <button className="text-2xl mt-12 ml-52 p-8 border-2 rounded-xl">
                Create Your Petition from Stratch
              </button>
            </div>
          )}

          {currentQuestionIndex === 2 && (
            <div>
              <h1 className="md:font-bold text-5xl">
                Write your Petition Title
              </h1>
              <input
                type="text"
                placeholder="Enter your title"
                className="mt-8 w-full p-2 rounded-md border-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          )}

          {currentQuestionIndex === 3 && (
            <div>
              <h1 className="md:font-bold text-5xl">
                Write are you writing about?
              </h1>
              <h1 className="items-center text-3xl">
                Start from scratch
              </h1>
              <Tiptap
               content={text}/>
            </div>
          )}

          {currentQuestionIndex === 4 && (
            <div>
              <h1 className="md:font-bold text-5xl">Add an Image</h1>
            </div>
          )}

          {currentQuestionIndex === 5 && (
            <div>
              <h1 className="md:font-bold text-5xl">
                Your petition is ready to make a difference
              </h1>
              {/* <button>Preview Petition</button> */}
              <button className="border-2 rounded-xl mt-12 text-xl p-4" onClick={handleSubmit}>Create Petition</button>
            </div>
          )}

          <div className="flex-row">
              <button
                className="border-2 rounded-xl mt-12 text-xl p-3"
                onClick={() => {decrementCounter()}}
              >
                Back
              </button>
              
              <button
                className="bg-blue-300 border-2 rounded-xl ml-4 mt-12 text-xl p-3"
                disabled={activeButton}
                onClick={() => {incrementCounter()}}
              >
                Continue
              </button>
          </div>
        </div>
      </div>
    </main>
  );
}