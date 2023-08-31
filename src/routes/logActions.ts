import express from "express";
import { Router } from "express";

import { logSearch } from "../controllers/logSearch_controller";
import { logSelected } from "../controllers/logSelect_controller";

const router: Router = express.Router();

router.post("/logSearch", logSearch);

router.post("/logSelected", logSelected);

export default router;
