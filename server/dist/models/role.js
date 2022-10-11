"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require('sequelize');
const db_1 = __importDefault(require("../db"));
const Role = db_1.default.define('role', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    key: {
        type: Sequelize.ENUM('A', 'SA', 'S'),
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
exports.default = Role;
