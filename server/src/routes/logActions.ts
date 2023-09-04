import express from "express";
import { Router } from "express";

import { logSearch } from "../controllers/logSearch_controller";
import { logSelected } from "../controllers/logSelect_controller";

const router: Router = express.Router();

router.get("/logSearch", logSearch);

router.get("/logSelected", logSelected);

export default router;
