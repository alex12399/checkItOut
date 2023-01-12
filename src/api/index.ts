import { Router } from "express";
import { crawlerHandler } from "./crawler/handler";

const router = Router();

router.use("/crawler", crawlerHandler);

export default router;