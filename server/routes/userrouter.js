import { Router } from "express";
const router = Router();

import { create } from "../controller/usercontroller.js";
import { find } from "../controller/usercontroller.js";
import { update } from "../controller/usercontroller.js";
import { clientDelete } from "../controller/usercontroller.js";

router.route("/api/create").post(create);
router.route("/api/get").get(find);
router.route("/api/users/:id").put(update);
router.route("/delete/users/:id").delete(clientDelete);

export default router;
