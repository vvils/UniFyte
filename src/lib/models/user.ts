import mongoose, { Schema } from "mongoose";

var userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    uni: { type: String, required: true },
    petitions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Petition",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
