import { Request } from "express";
import fetch from 'node-fetch';


export const crawl = async (data: Request) => {
	const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
	const contractAddress = data.body.contract;

	const ABILink = `https://api.etherscan.io/api
	?module=contract
	&action=getabi
	&address=${contractAddress}
	&apikey=${ETHERSCAN_API_KEY}`

	return fetch(ABILink).then(async res => await res.json());
}