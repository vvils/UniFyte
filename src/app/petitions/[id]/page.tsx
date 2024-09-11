import React from "react";
import { getPetition } from "../../../../lib/server";
import PetitionCard from "@/components/petitionCard";

const PetitionID = async ({ params }: { params: { id: string } }) => {
  const json = await getPetition(params.id);
  if (typeof json === "undefined") {
    return <div>error</div>;
  }
  const { petition } = json;
  return (
    <div className="flex justify-center">
      <PetitionCard petition={petition} />
    </div>
  );
};

export default PetitionID;
