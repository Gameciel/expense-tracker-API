import express from "express";

import {
	getExpense,
	getExpenses,
	postExpense,
	deleteExpense,
	patchExpense,
} from "../controller/expenseController.js";

const router = express.Router();

router.get("/:id", getExpense);
router.get("/", getExpenses);

router.post("/", postExpense);
router.delete("/:id", deleteExpense);
router.patch("/:id", patchExpense);


export const expenseRouter = router;