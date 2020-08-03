import { Router } from "express";
import UserRouter from "./Users";
import ColumnRouter from "./Columns";

// Init router and path
const router = Router();

// Add sub-routes
router.use("/users", UserRouter);
router.use("/columns", ColumnRouter);

// Export the base-router
export default router;
