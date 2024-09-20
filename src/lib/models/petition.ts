import mongoose, { Schema } from "mongoose";

const petitionSchema = new Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    media: { type: String },
    signed: { type: Number },
    goal: { type: Number },
    upvotes: { type: Number },
    uni: { type: String, required: true },
    // comments:[
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Comment",
    //   },
    // ],
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Petition =
  mongoose.models.Petition || mongoose.model("Petition", petitionSchema);

export default Petition;
