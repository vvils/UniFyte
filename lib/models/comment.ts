import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
  {
    message: { type: String, required: true },
    likes: { type: Number, required: true },
    replies: [this],
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);

export default Comment;
