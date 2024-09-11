import mongoose, { Schema } from "mongoose";

const petitionSchema = new Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    // created_by: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    // },
  },
  { timestamps: true }
);

const Petition =
  mongoose.models.Petition || mongoose.model("Petition", petitionSchema);

export default Petition;
