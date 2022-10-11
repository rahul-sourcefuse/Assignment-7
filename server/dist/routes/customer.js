"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customer_1 = require("../controller/customer");
const router = express_1.Router();
router.get('/', customer_1.getCustomer);
router.post('/', customer_1.addCustomer);
exports.default = router;
