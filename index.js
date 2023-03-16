import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const PORT = 2000;

import { expenseTrackerRouter } from "./routes/expenseTrackerRoute.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/tracker", expenseTrackerRouter);

app.listen(PORT, () => {
	console.log(`Server running @ ${PORT}`);
});
