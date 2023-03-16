import fs from "fs";
import { autoIncrementID, getMeIndex } from './API_LOGIC.js'

const datas = JSON.parse(fs.readFileSync("./data/expenseTracker.json"));

export const getExpensesByQuery = filter => {
	const requestQuery = Object.keys(filter);

	if (!requestQuery.length) {
		return datas;

	} else if (requestQuery.includes("category")) {
		return datas.filter(data => (data.category == filter.category));

	} else if (requestQuery.includes("date-start") && requestQuery.includes("date-end")) {
		const dateStart = new Date(filter["date-start"]);
		const dateEnd = new Date(filter["date-end"]);

		return datas.filter(data => new Date(data.date) >= dateStart && new Date(data.date) <= dateEnd);

	} else if (requestQuery.includes("date-start") && !requestQuery.includes("date-end")) {
		const dateStart = new Date(filter["date-start"]);

		return datas.filter(data =>  new Date(data.date) >= dateStart);

	} else if (	!requestQuery.includes("date-start") &&	requestQuery.includes("date-end")) {
		const dateEnd = new Date(filter["date-end"]);

		return datas.filter(data => new Date(data.date) <= dateEnd);
    
	}
};

export const getExpenseByID = paramID => {
	return datas.filter(data => data.id == paramID);
}

export const insertNewExpense = data => {

	if(Object.keys(data).length) {
		datas.push({id: autoIncrementID(datas), ...data});
		fs.writeFileSync('./data/expenseTracker.json', JSON.stringify(datas));
		return true;
	} else {
		return false;
	}

}

export const deleteExpenseByID = paramID => {
	const indexAt = getMeIndex(datas, paramID);

	if(indexAt < 0) {
		return false;
	} else {
		datas.splice(indexAt, 1);
		fs.writeFileSync('./data/expenseTracker.json', JSON.stringify(datas));
		return true;
	}
}

export const modifyExpense = (data, paramID) => {
	const indexAt = getMeIndex(datas, paramID)

	if(indexAt < 0 || Object.keys(data).length === 0) {
		return false;
	} else {
		datas[indexAt] = {...datas[indexAt], ...data};

		fs.writeFileSync('./data/expenseTracker.json', JSON.stringify(datas));
		return true;
	}
}

export const overwriteExpense = (data, paramID) => {
	const indexAt = getMeIndex(datas, paramID);

	if(indexAt < 0 || Object.keys(data).length === 0) {
		return false;
	} else {
		datas[indexAt] = {id: paramID, ...data};

		fs.writeFileSync('./data/expenseTracker.json', JSON.stringify(datas));
		return true;
	}
}