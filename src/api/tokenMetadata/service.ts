import { Request } from "express";
import { Network, Alchemy, GetNftMetadataOptions } from "alchemy-sdk";
import fs from "fs";
import https from "https";

export const metadataRetreiver = async (data: Request) => {
	const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
	const settings = {
		apiKey: ALCHEMY_API_KEY,
		network: Network.ETH_MAINNET
	};

	const alchemy = new Alchemy(settings);

	const address = data.params.address;
	const tokenId = data.params.tokenId;

	const nftMetadataOptions: GetNftMetadataOptions = {}

	const metadata = await alchemy.nft.getNftMetadata(address, tokenId, nftMetadataOptions)
		.catch((error) => console.log(error));

	if (metadata) {
		if (metadata?.media[0]?.raw) {
			const imageLink = metadata.media[0].raw;
			const filename = imageLink.split("/")[imageLink.split("/").length - 1];
			const file = fs.createWriteStream(filename);

			https.get(imageLink, (res) => {
   				res.pipe(file);

   				file.on("finish", () => {
					file.close();
					console.log("Download Completed");
   				});
			});
		}
		return metadata;
	}

	return null;
}