import mysql from 'mysql2';

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "expenses",
	port: 3306,
	multipleStatements: true,
});

db.connect(err => {
	if (err) {
		console.error(`error ${err}`);
	} else {
		console.log(`Connected to MySQL Server`);
	}
});

const table = 'expenses.data';
let queryResult = [];

export const getExpensesByQuery = filter => {
	const requestQuery = Object.keys(filter);

	if (!requestQuery.length) {
		db.query(`SELECT * FROM ${table};`, (error, result) => {
			if(error) {
				return;
			} else {
				queryResult = result;
			}
		})
	} else if (requestQuery.includes("category")) {
		db.query(`${queryLine} WHERE category = ${filter.category}`, (error, result) => {
			if(error) {
				return;
			} else {
				queryResult = result;
			}
		})
	} else if (requestQuery.includes("date-start") && requestQuery.includes("date-end")) {
		const dateStart = new Date(filter["date-start"]);
		const dateEnd = new Date(filter["date-end"]);
		
		db.query(`${queryLine} WHERE date >= ${db.escape(dateStart)} AND date <= ${db.escape(dateEnd)}`, (error, result) => {
			if(error) {
				return;
			} else {
				queryResult = result;
			}
		})
	} 

	return queryResult;
};

export const getExpenseByID = paramID => {
	db.query(`SELECT * FROM ${table} WHERE id = ${parseInt(paramID)}`, (error, result) => {
		if(error) {
			return;
		} else {
			queryResult = result;
		}
	})

	return queryResult;
}

export const insertNewExpense = data => {
	const { date, name, nominal, category } = data;
	
	db.query(
		`INSERT INTO ${table} VALUES = (null, ${db.escape(date)}, ${db.escape(name)},  ${db.escape(nominal)}, ${db.escape(category)})`,
		(error, result) => {
			if(error) {
				return null;
			} else {
				return true;
			}
		}
	);

}

export const deleteExpenseByID = paramID => {
	db.query(
		`DELETE FROM ${table} WHERE id = ${db.escape(paramID)}`,
		(error, result) => {
			if(error) {
				return null;
			} else {
				return true;
			}
		}
	);
}

export const modifyExpense = (data, paramID) => {
	const toUpdate = [];

	for(let key in data) {
		toUpdate.push(`${key} = ${db.escape(data[key])}`);
	};

	db.query(
		`UPDATE ${table} SET ${toUpdate} WHERE id = ${db.escape(paramID)}`,
		(error, result) => {
			if(error) {
				return null;
			} else {
				return true;
			}
		}
	);
}