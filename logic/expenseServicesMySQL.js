import { db, queryResolver } from "../helpers/queryHelper.js";

const table = "expenses.data";
let queryScript = "";
let queryResult;

export const getExpensesByQuery = async filter => {
	const requestQuery = Object.keys(filter);

	if (!requestQuery.length) {
		queryScript = `SELECT * FROM ${table};`;
	} else if (requestQuery.includes("category")) {
		queryScript = `SELECT * FROM ${table} WHERE category = ${db.escape(
			filter.category
		)};`;
	} else if (
		requestQuery.includes("date-start") &&
		requestQuery.includes("date-end")
	) {
		queryScript = `SELECT * FROM ${table} WHERE date >= ${db.escape(
			filter["date-start"]
		)} AND date <= ${db.escape(filter["date-end"])};`;
	}

	await queryResolver(queryScript).then(result => {
		queryResult = result;
	});

	return queryResult;
};

export const getExpenseByID = async paramID => {
	await queryResolver(
		`SELECT * FROM ${table} WHERE id = ${parseInt(paramID)}`
	).then(result => {
		queryResult = result;
	});

	return queryResult;
};

export const insertNewExpense = async data => {
	const { date, name, nominal, category } = data;

	await queryResolver(
		`INSERT INTO ${table} VALUES (null, ${db.escape(date)}, ${db.escape(
			name
		)},  ${db.escape(nominal)}, ${db.escape(category)})`
	).then(result => {
		queryResult = result;
	});

	return queryResult;
};

export const removeExpense = async paramID => {
	await queryResolver(
		`DELETE FROM ${table} WHERE id = ${db.escape(paramID)}`
	).then(result => {
		queryResult = result;
	});

	return queryResult;
};

export const modifyExpense = async (data, paramID) => {
	const toUpdate = [];

	for (let key in data) {
		toUpdate.push(`${key} = ${db.escape(data[key])}`);
	}

	await queryResolver(
		`UPDATE ${table} SET ${toUpdate} WHERE id = ${db.escape(paramID)}`
	).then(result => {
		queryResult = result;
	});

	return queryResult;
};
