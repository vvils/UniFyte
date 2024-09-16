"use client";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChatBubbleLeftIcon,
  ShareIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import React from "react";

type Props = { upvotes: number; numComments?: number };

const InteractiveButtons = ({ upvotes, numComments }: Props) => {
  return (
    // <span className="flex mb-2 justify-center bg-gray-100 rounded-full">
    //   <button className="hover:rounded-full hover:bg-gray-200">
    //     <ArrowUpIcon className="  w-8 h-8" />
    //   </button>
    //   <p className="text-sm flex items-center mx-2">{upvotes}</p>
    //   <button className="hover:rounded-full hover:bg-gray-200">
    //     <ArrowDownIcon className=" w-8 h-8" />
    //   </button>
    // </span>
    <div className="flex gap-4">
      {/* Upvote/Downvote Button */}
      <span className="flex items-center bg-gray-50 rounded-full shadow">
        <button className="hover:bg-gray-200 rounded-full p-2 group">
          <ArrowUpIcon className="w-5 h-5 text-gray-700 group-hover:stroke-orange-400" />
        </button>

        <span className="text-sm font-medium">{upvotes}</span>
        <button className=" hover:bg-gray-200 rounded-full p-2 group">
          <ArrowDownIcon className="w-5 h-5 text-gray-700 group-hover:stroke-violet-500" />
        </button>
      </span>

      {/* Comment Button */}
      <div className="flex items-center bg-gray-50 p-2 rounded-full shadow hover:bg-gray-200">
        <ChatBubbleLeftIcon className="w-5 h-5 text-gray-700" />
        <span className="ml-2 mr-1 text-sm font-medium">0</span>
      </div>

      {/* Badge Button */}
      <div className="flex items-center bg-gray-50 p-2 rounded-full shadow hover:bg-gray-200">
        <TrophyIcon className="w-5 h-5 text-gray-700 mx-1" />
      </div>

      {/* Share Button */}
      <div className="flex items-center bg-gray-50 p-2 rounded-full shadow hover:bg-gray-200">
        <ShareIcon className="w-5 h-5 text-gray-700" />
        <span className="mx-1 text-sm font-medium">Share</span>
      </div>
    </div>
  );
};

export default InteractiveButtons;
