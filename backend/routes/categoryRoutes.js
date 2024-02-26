import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import {
  createCategoryController,
  updateCategoryController,
  deleteCategoryController,
  getCategoriesController,
  getSingleCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router();

//routes

//create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

//get all categories
router.get("/get-category", getCategoriesController);

//get a single category
router.get("/single-category/:slug", getSingleCategoryController);

export default router;
