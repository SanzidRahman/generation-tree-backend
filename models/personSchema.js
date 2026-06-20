import mongoose from "mongoose";

const personSchema = new mongoose.Schema(
  {
    fullName: String,

    gender: String,

    father: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Member",
    },

    mother: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Member",
    },
  },
  {
    timestamps: true,
  },
);
const Person = mongoose.model("Person", personSchema);

export default Person;
