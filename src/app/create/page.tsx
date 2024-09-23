"use client";
import { useState, useEffect } from "react";
import Tiptap from "@/components/textEditor";
import DragAndDrop from "@/components/dragAndDrop";
import {Progress} from "@nextui-org/progress";
import { Image } from "@nextui-org/react";

import SoftContainer from "@/components/softContainer";
import AcademicCapIcon from "@heroicons/react/24/outline/AcademicCapIcon";
import { Button } from "@nextui-org/react";
import InteractiveButtons from "@/components/interactiveButtons";
import { CalendarIcon } from "lucide-react";
import { FaUser } from "react-icons/fa";

interface University {
  name: string;
  state: string;
}

export default function PetitionPage() {
  //Handles Pagination
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [activeButton, setActiveButton] = useState<string>('');
  const [activePage, setActivePage] = useState<string>("");

  //Handles user inputs
  const [text, setText] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  // var [titleLimit,setTitleLimit] = useState<number>(90)

  //Handles University searching
  const [universities, setUniversities] = useState<University[]>([]);
  const [searchedUniversity, setSearchedUniversity] = useState<string>("");
  const [filteredUniversity, setFilteredUniversity] = useState<University[]>(universities);
  const [inputFocus, setInputFocus] = useState<boolean>(true);

   //Handles the Image state for drag and drop
   const [previewImage, setPreviewImage] = useState<string | null>(null);

  //Fetches the Names of the Universities
  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await fetch("/api/universities");
        const data = await response.json();

        const mappedUniversities = data.map((university: any) => ({
          objectId: university.objectId,
          name: university.name,          
        }));
        setUniversities(mappedUniversities);
        setFilteredUniversity(mappedUniversities);
      } catch (error) {
        console.error("Error fetching universities:", error);
      }
    };

    fetchUniversities();
  }, []);

  //Handles Searching the University
  const handleSearch = (e: any) => {
    const searchValue = e.target.value;
    setSearchedUniversity(searchValue);

    const filtered = universities.filter((university) =>
      university.name.includes(searchValue)
    );
    setFilteredUniversity(filtered);
  };

  //Two functions that handles the Pagination
  const incrementCounter = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const decrementCounter = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  //Handles when the text changes and is used for TipTap
  const handleContentChange = (content: any) => {
    setText(content);
  };

  const handleImageUpload = (imageUrl: string | null) => {
    setPreviewImage(imageUrl);
  };
  

  //Handles when you want to submit the petition information to the database
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = {
      title: title,
      desc: text,
      signed: 0,
      goal: 2000,
      upvotes: 0,
      media: previewImage,
      uni: searchedUniversity,
    };

    try {
      const response = await fetch("http://localhost:3000/api/petitions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Petition created successfully!");
        setTitle("");
        setText("");
        setSearchedUniversity("");
      } 
      else {
        console.error("Failed to create petition");
      }
    } 
    catch (error) {
      console.error("Error submitting petition:", error);
    }
  };

  //A switch case to disable the button whenever the input is empty
  const disableContinueButton = () =>{
    switch(currentQuestionIndex){
      case 0:
        return searchedUniversity.trim() === ""
      case 1:
        return activeButton === ''
      case 2:
        return title.trim() === ""
      case 3:
        return text.trim() === ""
      default:
        return false
    } 
  }

  return (
    <main className="min-h-screen justify-between p-4">
      
      {/* This displays the progress bar on the top*/}
      <div className="w-full top-0 left-0">
            <Progress color="warning" size="lg" value={currentQuestionIndex * 20} />
      </div> 

      <div className="flex justify-center mt-16">
        <div className="flex flex-col row-auto">
          
          {currentQuestionIndex === 0 && (
            <div>
              <h1 className="md:font-bold w-3/4 p-4 text-5xl">
                What University do you go to?
              </h1>
              <h1 className="text-2xl mt-8">Connect with people near you</h1>

              <input
                type="text"
                value={searchedUniversity}
                onChange={handleSearch}
                onFocus={() => setInputFocus(true)}
                onBlur={() => setInputFocus(false)}
                placeholder="Enter a University"
                className="mt-8 w-full p-4 rounded-2xl border-2 border-black"
              />

              {inputFocus && searchedUniversity && (
                <div className="mt-4 border border-gray-200 rounded-md shadow-lg overflow-y-auto ">
                  {filteredUniversity.length > 0 ? (
                    filteredUniversity.map((university, index) => (
                      <div
                        key={index}
                        className="p-2 hover:bg-orange-100 cursor-pointer"
                        onMouseDown={() => {setSearchedUniversity(university.name), setInputFocus(false)}}
                      >
                        <span className="font-semibold">{university.name.length > 30 
                              ? `${university.name.slice(0, 50)}...` 
                              : university.name}</span>
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
              <div className="flex flex-col">
                <h1 className="md:font-bold text-5xl">
                  How would you like to write your petition?
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <button className={activeButton === 'Scratch' ? "flex flex-col text-2xl mt-8 p-8 border-2 rounded-xl border-orange-300" : 
                "flex flex-col text-2xl mt-8 p-8 border-2 rounded-xl hover:border-orange-300"}
                onClick={() => {setActiveButton('Scratch')}}>
                Create Your Petition from Stratch <span className="text-base font-normal mt-2"> Got the perfect words in mind? Go ahead, create your own story!</span>
                </button>
                
                <button className= {activeButton === 'AI' ? "text-2xl mt-8 p-8 border-2 rounded-xl border-orange-300" : 
                "text-2xl mt-8 p-8 border-2 rounded-xl hover:border-orange-300"
                }
                onClick={() => {setActiveButton('AI')}}>
                  Generate Your Petition with AI
                </button>
              </div>
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
                className="mt-8 w-full p-4 rounded-2xl border-2 border-black"
                value={title}
                maxLength={90}
                onChange={(e) => {setTitle(e.target.value)}}
              />
            </div>
          )}

          {currentQuestionIndex === 3 && (
            <div>
              <h1 className="md:font-bold text-5xl">
                Write are you writing about?
              </h1>
              <h1 className="items-center text-3xl mt-4">Start from scratch</h1>
              <Tiptap
                onChange={(text: string) => handleContentChange(text)}
                content={text}
              />
            </div>
          )}

          {currentQuestionIndex === 4 && (
            <div>
              <h1 className="md:font-bold text-5xl">Add an Image</h1>
              <DragAndDrop ImageUpload={handleImageUpload}/>
            </div>
          )}

          {(currentQuestionIndex === 5 && activePage === "") && (
            <div>
              <h1 className="md:font-bold text-5xl">
                Your petition is ready to make a difference
              </h1>
              <h1 className="text-2xl mt-6">Here's what's next:</h1>
              <h1 className="text-2xl mt-6">Create your petition. You can edit your petition any time</h1>
              <h1 className="text-2xl mt-6">Share it with the people you know</h1>
              
              <div className="flex justify-end mt-8">
                <button className="border-2 rounded-xl mt-12 text-xl p-4 hover:bg-gray hover:border-black"
                onClick={() => {setActivePage("previewPage")}}>
                  Preview Petition
                </button>
                
                <button
                  className="ml-6 border-2 rounded-xl mt-12 text-xl p-4 bg-orange-300 text-white text-bold hover:border-black"
                  onClick={handleSubmit}
                >
                  Create Petition
                </button>
              </div>
              
            </div>
          )}

          {(currentQuestionIndex === 5 && activePage === "previewPage") &&
          (
            PreviewPage(title,searchedUniversity, previewImage, text)
          )}

          <div className="flex justify-end mt-8">
            {currentQuestionIndex === 0 || currentQuestionIndex === 5 ? (
              <div></div>
            ) : (
              <button
                className="border-2 rounded-xl mt-12 text-xl p-3 hover:border-black"
                onClick={() => {
                  decrementCounter();
                }}
              >
                Back
              </button>
            )}

            {(currentQuestionIndex === 5) ? (
              <></>
            ) : (
              <button
                className={`border-2 rounded-xl ml-4 mt-12 text-xl p-3 font-bold text-white hover:border-black 
                ${disableContinueButton() ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-300'}`}
                disabled={disableContinueButton()}
                onClick={() => {
                  incrementCounter();
                }}
              >
                Continue
              </button>
            )}

          </div>
        </div>
      
      {/* Second Column for the tips
      {currentQuestionIndex !== 1 && curre }
      <div className =" w-1/4 ml-8 bg-orange-100 rounded-xl flex justify-center items-center">
          <p className="text-2xl "> Tips: </p>
          
          {currentQuestionIndex === 0 &&
          <div>
            <p>
              Let the world know what University your fighting for!
            </p>
          </div>}
          
          {currentQuestionIndex === 2 &&
          <div>
            <p>
              Be Clear and Specific: Make sure the title clearly communicates the issue or action you're advocating for. Example: "Ban Single-Use Plastics in Our City."

              Use Strong, Action-Oriented Language: Use verbs that convey urgency and action, such as "Demand," "Support," or "Protect." Example: "Demand Safer Working Conditions for Healthcare Workers."

              Keep It Concise: Aim for a short, impactful title that gets the message across in a few words, ideally under 10-12 words.
            </p>

          </div>}

          {currentQuestionIndex === 3 &&
          <div>
            <p>
              Dos and Donts for a Text prompt
            </p>

          </div>}

          {currentQuestionIndex === 4 &&
          <div>
            <p>
              Do and Donts for an Image
            </p>

          </div>}
          
      </div> */}

      </div>
    </main>
  );
}

function PreviewPage(title:string, uni:string, image:string | null, text:string){
  return(
    <div className="flex flex-col py-8 px-24 gap-4">
      <SoftContainer>
        <h1 className="text-3xl font-bold text-black">{title}</h1>
      </SoftContainer>

      {/* under */}
      <div className="flex justify-center items-center "></div>
      <div className=" flex flex-row justify-center gap-8 w-full"></div>

      {/*First Column*/}
      <div className= "flex flex-row mt-8">
        <SoftContainer>
        <div>
            {image ?
              <> 
              <Image
              src={image}
              alt="Dropped file preview"
              className="w-full h-full object-cover rounded-2xl"
              width={400}
              height={300}/> 
              </>:
              <>
                <DragAndDrop ImageUpload={image}/>
              </>
              
              }

          <div className=" flex flex-col justify-center gap-4 mt-4">
              <div className="flex justify-between">
                <InteractiveButtons upvotes={0} />
                <div className="flex gap-4  ">
                  {/* Date */}
                  <div className="flex items-center">
                    <CalendarIcon className="w-5 h-5 mr-1 text-gray-400" />
                    <p className="text-sm">Created on 09/28/2002</p>
                  </div>
                  {/* uni */}
                  <div className="flex items-center ml-auto">
                    <AcademicCapIcon className="w-5 h-5 mr-1 text-gray-400" />
                    <p className="text-sm">{uni}</p>
                  </div>
                </div>
              </div>
              <h2 className=" text-2xl font-bold">Why this petition matters</h2>
              <div className=" flex gap-2 items-center">
                <FaUser className="text-gray-500" />
                <p className="text-gray-500">
                  Started By{" "}
                  <span className=" text-black font-bold">
                    name
                  </span>
                </p>
              </div>
              <div>
                <p className="text-black mb-4">{text}</p>
              </div>
          </div>
          </div>
        </SoftContainer>

        {/*Second Column */}
        <div className="w-[40%] flex flex-col gap-8">
          <SoftContainer className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-2">Sign the Petition</h2>

            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-purple-500 h-2.5 rounded-full"
                style={{
                  width: `calc(100/200*100%)`,
                }}
              ></div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-4xl font-bold text-purple-700">
                  2000
                </p>
                <p className="text-sm text-purple-600">Signatures</p>
              </div>
              <div className="text-right">
                <p className="text-4xl font-bold text-gray-700">
                  2000
                </p>
                <p className="text-sm text-gray-500">Next Goal</p>
              </div>
            </div>

            <Button className="w-full bg-gray-200 text-gray-700 font-semibold">
              <span className="mr-2">✊</span> Support now
            </Button>

            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <p className="text-gray-700 text-sm">
                Thanks to your support this petition has a chance at winning! We
                only need
                <span className="font-semibold">10,565</span> more signatures to
                reach the next goal - can you help?
              </p>
            </div>

            <Button className="w-full bg-red-500">Take The Next Step!</Button>
          </SoftContainer>
          </div>
      </div>

      <div className = "flex justify-end">
        <button onClick= {()=> {}} className="border-2 rounded-xl mt-12 text-xl p-3 hover:border-black"> 
        Back to Edit </button>
        <button className="bg-orange-300 border-2 rounded-xl ml-4 mt-12 text-xl p-3 font-bold text-white hover:border-black"
        onClick={() => {}}> Create Petition</button>
      </div>

    </div>
  )
}
