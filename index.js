import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mysql from "mysql2";

const PORT = 2000;

import { expenseRouter } from "./routes/expenseRoute.js";

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/expenses", expenseRouter);


app.listen(PORT, () => {
	console.log(`Server running @ ${PORT}`);
});




// app.get("/expensesDB/:id", (request, response) => {
// 	const scriptQuery = `SELECT * FROM expenses.expense WHERE id = ${request.params.id};`;
// 	db.query(scriptQuery, (error, result) => {
// 		if (error) {
// 			response.status(500).send(error);
// 		} else {
// 			result.length
// 				? response.status(200).send(result)
// 				: response.status(404).send(`Not Found`);
// 		}
// 	});
// });
// app.get("/expensesDB", (request, response) => {
// 	const scriptQuery = `SELECT * FROM expenses.expense;`;
// 	db.query(scriptQuery, (error, result) => {
// 		if (error) {
// 			response.status(500).send(error);
// 		} else {
// 			result.length
// 				? response.status(200).send(result)
// 				: response.status(404).send(`Not Found`);
// 		}
// 	});
// });
// app.post("/expensesDB", (request, response) => {
// 	const { name, date, nominal, category } = request.body;
// 	const scriptQuery = 
// 	`INSERT INTO expenses.expense VALUES (${null}, ${db.escape(date)}, ${db.escape(name)}, ${db.escape(nominal)}, ${db.escape(category)});`;
	
// 	db.query(scriptQuery, (error, result) => {
// 		if (error) {
// 			response.status(500).send(error);
// 		} else {
// 			db.query(`SELECT * FROM expenses.expense WHERE name = '${name}'`, (error, result) => {
// 				response.status(200).send({message:"Insertion succeeded", data:  result[0]});
// 			});
// 		}
// 	});
// });