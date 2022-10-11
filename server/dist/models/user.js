"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require('sequelize');
const db_1 = __importDefault(require("../db"));
const User = db_1.default.define('user', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    middleName: {
        type: Sequelize.STRING,
        defaultValue: ""
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cid: {
        type: Sequelize.UUID,
        allowNull: false
    },
    rid: {
        type: Sequelize.UUID,
        allowNull: false
    }
});
exports.default = User;
