"use client";
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import useSWR from "swr";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import SoftContainer from "@/components/softContainer";
import { useRouter } from "next/navigation";
import InteractiveButtons from "@/components/interactiveButtons";
import { AcademicCapIcon, CalendarIcon } from "@heroicons/react/24/outline";

type Petition = { _id: string; title: string; desc: string };

const PetitionID = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [edit, setEdit] = useState(false);
  const [confDelete, setConfDelete] = useState(false);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/api/petitions/${params.id}`,
    fetcher
  );

  if (error) return <div>Failed to load data</div>;
  if (isLoading) return <div>Loading...</div>;

  let { petition } = data;
  const handleEdit = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/petitions/${params.id}`,
        {
          method: "PUT",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ title, desc }),
        }
      );
      if (!res.ok) {
        throw new Error("failed to update");
      }
      petition.title = title;
      petition.desc = desc;
      setEdit(false);
      router.refresh();
    } catch (err) {
      console.log(err);
    }
  };
  const handleDelete = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/petitions/${params.id}`,
        {
          method: "DELETE",
        }
      );
      if (!res.ok) {
        throw new Error("failed to del");
      }
      router.back();
    } catch (err) {
      console.log(err);
    }
  };
  const formattedDate = new Date(petition.createdAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );
  return (
    <div className="flex flex-col py-8 px-24 gap-4">
      {/* title */}
      <SoftContainer>
        {edit ? (
          <textarea
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows={1}
          />
        ) : (
          <h1 className="text-3xl font-bold text-black">{petition.title}</h1>
        )}
      </SoftContainer>
      {/* under */}
      <div className="flex justify-center items-center "></div>
      <div className=" flex flex-row justify-center gap-8 w-full">
        <div className=" flex flex-col justify-center items-center w-[60%] gap-8">
          {/* 1st col Hero Section */}

          <SoftContainer className=" w-full">
            <div className="relative w-full pb-[100%] bg-gray-100">
              <Image
                src="/favicon.ico"
                alt="Petition Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className=" flex flex-col justify-center gap-4 mt-4">
              <div className="flex justify-between">
                <InteractiveButtons upvotes={petition.upvotes} />
                <div className="flex gap-4  ">
                  {/* Date */}
                  <div className="flex items-center">
                    <CalendarIcon className="w-5 h-5 mr-1 text-gray-400" />
                    <p className="text-sm">Created on {formattedDate}</p>
                  </div>
                  {/* uni */}
                  <div className="flex items-center ml-auto">
                    <AcademicCapIcon className="w-5 h-5 mr-1 text-gray-400" />
                    <p className="text-sm">{petition.uni}</p>
                  </div>
                </div>
              </div>
              <h2 className=" text-2xl font-bold">Why this petition matters</h2>
              <div className=" flex gap-2 items-center">
                <FaUser className="text-gray-500" />
                <p className="text-gray-500">
                  Started By{" "}
                  <span className=" text-black font-bold">
                    {petition.author.name}
                  </span>
                </p>
              </div>
              {edit ? (
                <textarea
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className="w-full p-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows={5}
                />
              ) : (
                <p className="text-black mb-4">{petition.desc}</p>
              )}
            </div>
          </SoftContainer>
          {/* Comments Section */}
          <SoftContainer className=" w-full">
            <h2 className="text-xl font-semibold mb-4">Comments</h2>

            <div className="">
              <div className="border-b pb-4 mb-4">
                <p className="text-sm text-gray-800">
                  This is an example comment from a supporter.
                </p>
                <p className="text-xs text-gray-500">John Doe - 2 hours ago</p>
              </div>
              <div className="border-b pb-4 mb-4">
                <p className="text-sm text-gray-800">
                  This is an example comment from a supporter.
                </p>
                <p className="text-xs text-gray-500">John Doe - 2 hours ago</p>
              </div>
              <div className="border-b pb-4 mb-4">
                <p className="text-sm text-gray-800">
                  This is an example comment from a supporter.
                </p>
                <p className="text-xs text-gray-500">John Doe - 2 hours ago</p>
              </div>
              <div className="border-b pb-4 mb-4">
                <p className="text-sm text-gray-800">
                  This is an example comment from a supporter.
                </p>
                <p className="text-xs text-gray-500">John Doe - 2 hours ago</p>
              </div>
              {/* Add more comments here */}
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold mb-4">Reason for signing</h2>

            {/* Input Section */}
            <div className="flex items-start space-x-2 mb-4">
              {/* User Icon */}
              <FaUser className="text-gray-500 mt-2" />

              {/* Input Area */}
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="I'm signing because..."
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows={3}
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-row justify-center gap-32">
              <Button size="lg" className="bg-gray-200 text-gray-700">
                Post
              </Button>
              <Button size="lg" className="bg-gray-200 text-gray-700">
                Cancel
              </Button>
            </div>
          </SoftContainer>
        </div>

        {/*2nd col Progress & Sign Button +*/}
        <div className="w-[40%] flex flex-col gap-8">
          <SoftContainer className=" flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-2">Sign the Petition</h2>

            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-purple-500 h-2.5 rounded-full"
                style={{
                  width: `calc(${petition.signed}/${petition.goal}*100%)`,
                }}
              ></div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-4xl font-bold text-purple-700">
                  {petition.signed}
                </p>
                <p className="text-sm text-purple-600">Signatures</p>
              </div>
              <div className="text-right">
                <p className="text-4xl font-bold text-gray-700">
                  {petition.goal}
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

          <SoftContainer className="">
            <h2 className="text-xl font-semibold mb-8">Author Actions</h2>
            <div className="flex gap-4 flex-col items-center justify-center w-full">
              <div className="flex gap-4 justify-center items-center w-full">
                <Button
                  onPress={() => {
                    setEdit(true);
                    title || setTitle(petition.title);
                    desc || setDesc(petition.desc);
                  }}
                  className={`w-1/3 ${edit ? "bg-gray-400" : "bg-blue-400"}`}
                >
                  {edit ? "Back" : "Edit"}
                </Button>

                {edit && (
                  <Button onPress={handleEdit} className="w-1/3 bg-green-500">
                    Save Changes
                  </Button>
                )}
              </div>
              {!confDelete && (
                <Button
                  className="w-1/3 bg-red-500"
                  onPress={() => setConfDelete(true)}
                >
                  Delete
                </Button>
              )}

              {confDelete && (
                <>
                  <div className="flex gap-4">
                    <Button className=" bg-red-500" onClick={handleDelete}>
                      Yes, Delete
                    </Button>
                    <Button onClick={() => setConfDelete(false)}>Cancel</Button>
                  </div>
                  <p className=" ">
                    Are you sure you want to delete this petition?
                  </p>
                </>
              )}
            </div>
          </SoftContainer>
        </div>
      </div>
    </div>
  );
};

export default PetitionID;
