import React from "react";
import { getPetitions } from "../../../lib/server";
import PetitionCard from "@/components/petitionCard";

const Petitions = async () => {
  const json = await getPetitions();
  if (typeof json === "undefined") {
    return <div>error</div>;
  }
  const { petitions } = json;
  return (
    <div className="flex flex-col justify-center items-center px-4 py-3 mx-auto">
      {petitions.map(
        (
          petition: { _id: string; title: string; desc: string },
          index: number
        ) => (
          <PetitionCard key={index} petition={petition} />
        )
      )}
    </div>
  );
};

export default Petitions;
