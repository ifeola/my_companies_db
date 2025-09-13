import express from "express";
import database from "./database/database.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));
