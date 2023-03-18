import { 
	getExpensesByQuery, 
	getExpenseByID, 
	deleteExpenseByID, 
	insertNewExpense, 
	modifyExpense 
} from "../logic/expenseServices.js";


export const getExpenses = (request, response) => {
	const filteredResult = getExpensesByQuery(request.query);

	filteredResult.length 
		? response.status(200).send(filteredResult)
		: response.status(404).send(`Not Found.`);
};


export const getExpense = (request, response) => {
	const resultByID = getExpenseByID(request.params.id);



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
	const deleteStatus = deleteExpenseByID(request.params.id);

	deleteStatus
		? response.status(200).send(`Data for id ${request.params.id} has been deleted.`)
		: response.status(404).send(`Not Found.`);
};


export const patchExpense = (request, response) => {
	const patchStatus = modifyExpense(request.body, request.params.id);

	patchStatus
		? response.status(200).send(`Data for id ${request.params.id} has been patched.`)
		: response.status(400).send(`Bad Request, no body / ID not found.`);
};

