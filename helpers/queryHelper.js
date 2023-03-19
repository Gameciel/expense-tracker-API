import mysql from 'mysql2';

export const db = mysql.createConnection({
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


export const queryResolver = queryScript => {
    return new Promise((resolve, reject) => {
        db.query(queryScript, (error, result) => {
            if(error) {
                return reject(error);
            } else {
                resolve(result);
            }
        });
    })
}