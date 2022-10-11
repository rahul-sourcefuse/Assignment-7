import { Router } from "express";

import {getCustomer,addCustomer} from "../controller/customer";

const router=Router();

router.get('/',getCustomer);
router.post('/',addCustomer);


export default router;