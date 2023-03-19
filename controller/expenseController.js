import {
	getExpensesByQuery,
	getExpenseByID,
	removeExpense,
	insertNewExpense,
	modifyExpense,
} from "../logic/expenseServicesMySQL.js";

export const getExpenses = async (request, response) => {
	const filteredResult = await getExpensesByQuery(request.query);

	filteredResult.length
		? response.status(200).send(filteredResult)
		: response.status(404).send(`Not Found.`);
};

export const getExpense = async (request, response) => {
	const resultByID = await getExpenseByID(request.params.id);

	resultByID.length
		? response.status(200).send(resultByID)
		: response.status(404).send(`Not Found.`);
};

export const postExpense = (request, response) => {
	const postStatus = insertNewExpense(request.body);

	postStatus
		? response.status(200).send("Data has been added.")
		: response.status(400).send("Bad Request, have you put body on request?");
};

export const deleteExpense = (request, response) => {
	const deleteStatus = removeExpense(request.params.id);

	deleteStatus
		? response
				.status(200)
				.send(`Data for id ${request.params.id} has been deleted.`)
		: response.status(404).send(`Not Found.`);
};

export const patchExpense = (request, response) => {
	const patchStatus = modifyExpense(request.body, request.params.id);

	patchStatus
		? response
				.status(200)
				.send(`Data for id ${request.params.id} has been patched.`)
		: response.status(400).send(`Bad Request, no body / ID not found.`);
};
