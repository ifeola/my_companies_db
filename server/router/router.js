import { Router } from "express";
import { getCustomer, getCustomers } from "../controller/controller.js";

const router = Router();

router.get("/customers", getCustomers);
router.get("/customers/:id", getCustomer);

export default router;
