import express from "express";
import { watch, getEdit, postEdit, getUpload, postUpload } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit); // use one line for both get and post
videoRouter.route("/upload").get(getUpload).post(postUpload); // use one line for both get and post

export default videoRouter;