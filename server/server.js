import express from "express";
import database from "./database/database.js";
import router from "./router/router.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/v1", router);

app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));
