import PetitionCard from "@/components/petitionCard";
import React from "react";
import {
  UserIcon,
  CalendarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  UsersIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ChatBubbleLeftIcon,
  ShareIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

const petition = {
  _id: "7817",
  title: "HDFH",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit soluta voluptatum sequi velit dolores quasi ex autem consectetur sit veniam temporibus unde praesentium dolorum, deleniti tempora atque, totam dignissimos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit soluta voluptatum sequi velit dolores quasi ex autem consectetur sit veniam temporibus unde praesentium dolorum, deleniti tempora atque, totam dignissimos?",
};

// TEST UR SHIT HERE
type Props = {};

const TestPage = (props: Props) => {
  return (
    // components/InteractionButtons.js

    <div className="flex space-x-4 bg-gray-100 p-4 rounded-lg">
      {/* Upvote/Downvote Button */}
      <div className="flex items-center bg-gray-50 p-2 rounded-full shadow">
        <ArrowUpIcon className="w-5 h-5 text-gray-700 hover:bg-gr" />
        <span className="ml-2 text-sm font-medium">39</span>
        <ArrowDownIcon className="w-5 h-5 text-gray-700 ml-2" />
      </div>

      {/* Comment Button */}
      <div className="flex items-center bg-gray-50 p-2 rounded-full shadow">
        <ChatBubbleLeftIcon className="w-5 h-5 text-gray-700" />
        <span className="ml-2 text-sm font-medium">28</span>
      </div>

      {/* Badge Button */}
      <div className="flex items-center bg-gray-50 p-2 rounded-full shadow">
        <TrophyIcon className="w-5 h-5 text-gray-700" />
      </div>

      {/* Share Button */}
      <div className="flex items-center bg-gray-50 p-2 rounded-full shadow">
        <ShareIcon className="w-5 h-5 text-gray-700" />
        <span className="ml-2 text-sm font-medium">Share</span>
      </div>
    </div>
  );
};

export default TestPage;
