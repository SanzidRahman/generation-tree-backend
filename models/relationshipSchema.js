import mongoose from "mongoose";

const relationshipSchema = new mongoose.Schema(
  {
    fromPerson: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Person",
      required: true,
    },

    toPerson: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Person",
      required: true,
    },

    relationType: {
      type: String,
      enum: ["father", "mother", "spouse", "son", "daughter"],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Relationship = mongoose.model("Relationship", relationshipSchema);

export default Relationship;
