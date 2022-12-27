import { Router } from "express";
const router = Router();

import { userContact } from "../controller/contactcontroller.js";
import { getList } from "../controller/contactcontroller.js";
import { updateContact } from "../controller/contactcontroller.js";
import { deleteContact } from "../controller/contactcontroller.js";

router.route("/create").post(userContact);
router.route("/get").get(getList);
router.route("/update/:id").put(updateContact);
router.route("/delete/:id").delete(deleteContact);

export default router;
