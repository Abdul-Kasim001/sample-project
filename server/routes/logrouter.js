
import { Router } from "express";
const router = Router();

import { create } from "../controller/logcontroller.js";
import { find } from "../controller/logcontroller.js";
import { update } from "../controller/logcontroller.js";
import { empdelete } from "../controller/logcontroller.js";

router.route("/api/create").post(create);
router.route("/api/get").get(find);
router.route("/api/users/:id").put(update);
router.route("/delete/users/:id").delete(empdelete);

export default router;
