"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require('sequelize');
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const sequelize = new Sequelize(process.env.DATABASE, process.env.DBUSERNAME, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'postgres',
    port: 5432
});
exports.default = sequelize;
