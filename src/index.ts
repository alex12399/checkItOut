import express, { RequestHandler } from 'express';
import bodyParser from "body-parser";
import * as dotenv from "dotenv";

import api from "./api";
import { createPool } from './mysql';

dotenv.config();

export const pool = createPool({
  host: process.env.DB_HOST,
	port: parseInt(process.env.DB_PORT),
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_DATABASE
})

const app = express();

app.use(bodyParser.json({ limit: "20mb" }) as RequestHandler);
app.use(bodyParser.urlencoded({ extended: true }) as RequestHandler);
 
app.use("/api", api);
 
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});