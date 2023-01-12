import express, { RequestHandler } from 'express';
import bodyParser from "body-parser";
import * as dotenv from "dotenv";

import api from "./api";

dotenv.config();

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