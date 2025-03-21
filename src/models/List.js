import mongoose from "mongoose";

const desSchema = new mongoose.Schema({
  listId: { type: mongoose.Schema.Types.ObjectId, ref: "desc" },
  title: {
    type: String,
    required: true,
  },
  action: {
    type: String,
    enum: ["sudah", "belum"],
    default: "belum",
  },
});

const listSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ListModel = mongoose.model("List", listSchema);
const DesModel = mongoose.model("desc", desSchema);

export { ListModel as List, DesModel as Desc };
