import express from "express";
import {
    GetList,
    GetListById,
    PostList,
    PutList,
    DeleteList,
    GetDesc,
    GetDescById,
    PostDesc,
    PutDesc,
    DeleteDesc,
    GetDescByListId
} from "../controllers/ListController.js";

const router = express.Router();

router.get("/list", GetList);
router.get("/list/:id", GetListById);
router.post("/list", PostList);
router.put("/list/:id", PutList);
router.delete("/list/:id", DeleteList);

// description

router.get("/desc", GetDesc);
router.get("/desc/:id", GetDescById);
router.get("/descId/:listId", GetDescByListId);
router.post("/desc", PostDesc);
router.put("/desc/:id", PutDesc);
router.delete("/desc/:id", DeleteDesc);

export default router;