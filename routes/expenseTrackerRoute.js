import express from "express";
const router = express.Router();

import {
	getExpenses,
	postExpense,
	deleteExpense,
	patchExpense,
	putExpense,
} from "../controller/expenseTrackerController.js";

router.get("/data", getExpenses);
router.post("/data", postExpense);
router.delete("/data", deleteExpense);
router.patch("/data", patchExpense);
router.put("/data", putExpense);

export const expenseTrackerRouter = router;
