import { Router } from "express";
import { crawlerHandler } from "./crawler/handler";
import { tokenMetadataHandler } from "./tokenMetadata/handler";

const router = Router();

router.use("/crawler", crawlerHandler);

router.use("/contract", tokenMetadataHandler);

export default router;