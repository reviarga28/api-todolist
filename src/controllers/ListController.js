import { List } from "../models/List.js";
import { Desc } from "../models/List.js";

export const GetList = async (req, res) => {
  try {
    const list = await List.find();
    res.status(200).json({ list, message: "list fetched successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  console.log("Get list");
};

export const GetListById = async (req, res) => {
  const id = req.params.id;
  try {
    const list = await List.findById(id);
    res.status(200).json({ list, message: "list ById successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const PostList = async (req, res) => {
  const { name } = req.body;
  const newList = new List({
    name,
  });
  try {
    await newList.save();
    res.status(201).json({ newList, message: "List added successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const PutList = async (req, res) => {
  const id = req.params.id;
  const list = req.body;
  try {
    const updatedList = await List.findByIdAndUpdate(id, list, { new: true });
    res.status(200).json({ updatedList, message: "List updated successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const DeleteList = async (req, res) => {
  const id = req.params.id;
  try {
    await List.findByIdAndDelete(id);
    res.status(200).json({ message: "List deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const GetDesc = async (req, res) => {
  try {
    const desc = await Desc.find();
    res.status(200).json({ desc, message: "desc fetched successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  console.log("Get desc");
};

export const GetDescById = async (req, res) => {
  const id = req.params.id;
  try {
    const desc = await Desc.findById(id);
    res.status(200).json({ desc, message: "desc ById successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const GetDescByListId = async (req, res) => {
  const { listId } = req.params;

  try {
    const desc = await Desc.find({ listId });

    if (!desc || desc.length === 0) {
      return res.status(404).json({ message: "Deskripsi tidak ditemukan untuk List ini" });
    }

    res.status(200).json({ desc, message: "Deskripsi berhasil ditemukan" });
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan server", error: error.message });
  }
};



export const PostDesc = async (req, res) => {
  const { action, title, listId } = req.body;
  const newDesc = new Desc({
    action,
    title,
    listId,
  });
  try {
    await newDesc.save();
    res.status(201).json({ newDesc, message: "desc added successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const PutDesc = async (req, res) => {
  const id = req.params.id;
  const desc = req.body;
  try {
    const updatedDesc = await Desc.findByIdAndUpdate(id, desc, { new: true });
    res.status(200).json({ updatedDesc, message: "Desc updated successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const DeleteDesc = async (req, res) => {
  const id = req.params.id;
  try {
    await Desc.findByIdAndDelete(id);
    res.status(200).json({ message: "Desc deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
