import express, { Request, Response } from "express";
import { crawl } from "./service";

export const crawlerHandler = express.Router();

crawlerHandler.post('/', (req: Request, res: Response) => 
	crawl(req).then((response) => res.status(200).json({response})));