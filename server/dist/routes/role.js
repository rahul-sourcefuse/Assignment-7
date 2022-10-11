"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const role_1 = require("../controller/role");
const router = express_1.Router();
router.get('/', role_1.getRoleData);
router.post('/', role_1.addRole);
exports.default = router;
