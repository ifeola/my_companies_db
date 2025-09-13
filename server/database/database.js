import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const database = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	database: process.env.DB_DATABASE,
	password: process.env.DB_PASSWORD,
});

database.connect((error) => {
	if (error) {
		console.log("There is an error connecting to database", error.stack);
	} else {
		console.log("Database connected successfully.");
	}
});

export default database;
