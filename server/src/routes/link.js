import { Router } from "express";
import createLink from "../controllers/link/create";
import isAuthenticated from "../middleware/isAuthenticated";
import listAll from "../controllers/link/list";
import viewLink from "../controllers/link/view";
import deleteLink from "../controllers/link/delete";
import updateLink from "../controllers/link/update";

const linkRoutes = Router();

linkRoutes.post("/", isAuthenticated, createLink);
linkRoutes.get("/", isAuthenticated, listAll);
linkRoutes.get("/:id", isAuthenticated, viewLink);
linkRoutes.delete("/:id", isAuthenticated, deleteLink);
linkRoutes.put("/:id", isAuthenticated, updateLink);

export default linkRoutes;
