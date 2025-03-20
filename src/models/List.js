import mongoose from "mongoose";

const desSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      enum: ["sudah", "belum"],
      default: "belum",
    },
  }
)

const listSchema = new mongoose.Schema(
  {
    name:{
      type :String,
      required: true
    },
    description:[desSchema],
  },
  {
    timestamps: true,
  }
);

const ListModel = mongoose.model("List", listSchema);

export { ListModel as List };