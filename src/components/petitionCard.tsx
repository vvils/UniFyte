"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import SoftContainer from "./softContainer";
import {
  UserIcon,
  CalendarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  UsersIcon,
  AcademicCapIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";
import InteractiveButtons from "./interactiveButtons";

type Props = {
  petition: {
    _id: string;
    title: string;
    desc: string;
    media?: string;
    signed: number;
    goal: number;
    upvotes: number;
    uni: string;
    userName: string;
    createdAt: Date;
  };
};

const PetitionCard = (props: Props) => {
  const { petition } = props;

  const { _id, title, desc, signed, upvotes, uni, userName, createdAt } =
    petition;

  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <Link className="w-full " href={`http://localhost:3000/petitions/${_id}`}>
      <SoftContainer className=" flex flex-row h-64 !p-0 transition transform hover:scale-105 hover:shadow-2xl mt-8">
        <div className=" flex flex-col flex-grow p-6 h-full">
          <div className="flex justify-between">
            <h1 className="w-[calc(100%-28px-5(14px))] text-2xl mb-2 font-semibold hover:text-orange-400 transition-colors line-clamp-1">
              {title}
            </h1>
          </div>
          {/* Author, Date, and Signers */}
          <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
            {/* Author */}
            <div className="flex items-center">
              <UserIcon className="w-5 h-5 mr-1 text-gray-400" />
              <p>{userName}</p>
            </div>

            {/* Date */}
            <div className="flex items-center">
              <CalendarIcon className="w-5 h-5 mr-1 text-gray-400" />
              <p>Created on {formattedDate}</p>
            </div>

            {/* Number of Signers */}
            <div className="flex items-center ml-auto">
              <UsersIcon className="w-5 h-5 mr-1 text-gray-400" />
              <p>{signed} Signers</p>
            </div>
            {/* uni */}
            <div className="flex items-center ml-auto">
              <AcademicCapIcon className="w-5 h-5 mr-1 text-gray-400" />
              <p>{uni}</p>
            </div>
          </div>

          <p className="text-base line-clamp-3 py">{desc}</p>

          <div className="flex justify-between items-end mt-auto">
            <InteractiveButtons upvotes={upvotes} />
            <span className="flex items-center text-blue-500 text-sm cursor-pointer hover:underline gap-4">
              <button className="flex items-center bg-blue-600 text-white text-sm px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                <CheckCircleIcon className="w-5 h-5 mr-2" />
                Sign Petition
              </button>
              <div className="flex items-center">
                Learn More
                <ArrowRightIcon className="w-4 h-4 ml-1" />
              </div>
            </span>
          </div>
        </div>

        {/* image */}
        <div className="h-full aspect-square flex justify-center items-center border-l-1 ">
          <Image src="/favicon.ico" alt="" width={200} height={200} />
        </div>
      </SoftContainer>
    </Link>
  );
};

export default PetitionCard;
