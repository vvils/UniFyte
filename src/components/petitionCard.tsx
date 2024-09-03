"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaEnvelope, FaUsers } from "react-icons/fa";

type Props = { petition: { title: string; desc: string } };

const PetitionCard = (props: Props) => {
  const { petition } = props;
  const { title, desc } = petition;
  return (
    <Link href="#">
      <div className="flex flex-row border-2 rounded-xl h-64 mt-6">
        <div className=" flex flex-col p-6">
          <div className="flex-grow">
            <h4 className="text-2xl md:font-bold">{title}</h4>
            <p className="text-base pt-4">{desc}</p>
          </div>

          <div className=" flex flex-row justify-between">
            <div className="flex items-center">
              <Image
                src="https://via.placeholder.com/40"
                alt=""
                width={10}
                height={10}
              />

              <div className="ml-2">
                <p className="text-sm font-semibold">Wilson Weng</p>
                <p className="text-sm text-gray-600">
                  Flushing, NY, United States
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between text-gray-600 text-sm gap-4">
              <div className="flex items-center">
                <FaUsers className="mr-1" />1
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-1" />
                9/2/24
              </div>
            </div>
          </div>
        </div>

        {/* image */}
        <div className="h-full aspect-square flex justify-center items-center border-l-2">
          <Image src="/favicon.ico" alt="" width={200} height={200} />
        </div>
      </div>
    </Link>
  );
};

export default PetitionCard;
