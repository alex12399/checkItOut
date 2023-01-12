import { Request } from "express";
import fetch from 'node-fetch';
import { v4 as uuidv4 } from 'uuid';

import { pool } from "../../index";

export const crawl = async (data: Request) => {
	const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
	const address = data.body.address;

	const uuid = uuidv4();

	await pool.insert({ status: 0, uuid }).into("jobs");

	const ABILink = `https://api.etherscan.io/api
	?module=contract
	&action=getabi
	&address=${address}
	&apikey=${ETHERSCAN_API_KEY}`;

	return fetch(ABILink).then(async res => {
		await pool("jobs").where("uuid", "=", uuid).update({ status: 1, updatedAt: new Date() })
		return res.json();
	}).catch(async () => {
		await pool("jobs").where("uuid", "=", uuid).update({ status: 2, updatedAt: new Date() })
	})
}

export const jobStatus = async (data: Request) => {
	const status = await pool.select("status").where("uuid", "=", data.params.jobId).from("jobs");

	if (!status.length) {
		return { status: "ERROR" };
	}

	switch (status[0].status) {
		case 0:
			return { status: "PENDING" };
		case 1:
			return { status: "SUCCESSFUL"};
		default:
			return { status: "ERROR"};
	}
}