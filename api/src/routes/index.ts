import { Router } from "express";
import UserRouter from "./Users";
import ColumnRouter from "./Columns";
import CardRouter from "./Cards";

// Init router and path
const router = Router();

// Add sub-routes
router.use("/users", UserRouter);
router.use("/columns", ColumnRouter);
router.use("/cards", CardRouter);

// Export the base-router
export default router;
