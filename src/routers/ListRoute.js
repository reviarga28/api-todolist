import express from "express";
import {
    GetList,
    GetListById,
    PostList,
    PutList,
    DeleteList
} from "../controllers/ListController.js";

const router = express.Router();

router.get("/list", GetList);
router.get("/list/:id", GetListById);
router.post("/list", PostList);
router.put("/list/:id", PutList);
router.delete("/list/:id", DeleteList);

export default router;