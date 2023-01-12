import express, { Request, Response } from "express";
import { metadataRetreiver } from "./service";

export const tokenMetadataHandler = express.Router();

tokenMetadataHandler.get('/:address/:tokenId', (req: Request, res: Response) => 
	metadataRetreiver(req).then((response) => res.status(200).json({response})));