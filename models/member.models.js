import mongoose from "mongoose";

const memberSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      enum: ["male", "female", "পুরুষ", "মহিলা"],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Member = mongoose.model("Member", memberSchema);

export default Member;
