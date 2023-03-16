import fs from "fs";
import { autoIncrementID, getMeIndex } from "../logic/API_LOGIC.js";

const datas = JSON.parse(fs.readFileSync("./data/expenseTracker.json"));

const rewriteData = () => {
	fs.writeFileSync("./data/expenseTracker.json", JSON.stringify(datas));
};

// get method
export const getExpenses = (request, response) => {
	if (true) {
		response.status(200).send(datas);
	} else {
	}
};

// post method
export const postExpense = (request, response) => {
	datas.push({ id: autoIncrementID(datas), ...request.body });

	rewriteData();
	response.status(200).send("Data has been added");
};

// delete method
export const deleteExpense = (request, response) => {
	const indexAt = getMeIndex(datas, request.query.id);

	indexAt < 0
		? response.status(404).send(`Not found`)
		: datas.splice(indexAt, 1);

	rewriteData();
	response.status(200).send(`Data for id ${request.query.id} has been deleted`);
};

// patch method
export const patchExpense = (request, response) => {
	const indexAt = getMeIndex(datas, request.query.id);
	const incomingKeys = Object.keys(request.body);

	incomingKeys.forEach(key => {
		if (datas[indexAt][key]) {
			datas[indexAt][key] = request.body[key];
		}
	});

	rewriteData();
	response.status(200).send(`Data for id ${request.query.id} has been patched`);
};

// put method
export const putExpense = (request, response) => {
	const indexAt = getMeIndex(datas, request.query.id);

	datas[indexAt] = { id: datas[indexAt].id, ...request.body };

	rewriteData();
	response.status(200).send(`Data for id ${request.query.id} has been put`);
};
