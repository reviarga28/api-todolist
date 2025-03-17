import mongoose from "mongoose";

const listSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      enum: ["sudah", "belum"],
      default: "belum",
    },
  },
  {
    timestamps: true,
  }
);

const ListModel = mongoose.model("List", listSchema);

export { ListModel as List };