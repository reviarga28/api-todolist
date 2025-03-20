import { List } from "../models/List.js";

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
  const {name ,description } = req.body;
  const newList = new List({
    description,
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
