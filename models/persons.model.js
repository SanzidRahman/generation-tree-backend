import mongoose from "mongoose";

const personSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
    },

    father: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Person",
      default: null,
    },

    mother: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Person",
      default: null,
    },

    spouses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Person",
      },
    ],

    generationLevel: {
      type: Number,
      default: 1,
    },

    isAlive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const Person = mongoose.models.Person || mongoose.model("Person", personSchema);
export default Person;
