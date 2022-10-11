"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./db"));
require('dotenv').config();
const user_1 = __importDefault(require("./routes/user"));
const role_1 = __importDefault(require("./routes/role"));
const customer_1 = __importDefault(require("./routes/customer"));
const user_2 = __importDefault(require("./models/user"));
const customer_2 = __importDefault(require("./models/customer"));
const role_2 = __importDefault(require("./models/role"));
const app = express_1.default();
app.use(express_1.default.json({ limit: "30mb" }));
app.use(cors_1.default());
app.use('/users', user_1.default);
app.use('/role', role_1.default);
app.use('/customer', customer_1.default);
user_2.default.belongsTo(customer_2.default, {
    foreignKey: 'cid'
});
user_2.default.belongsTo(role_2.default, {
    foreignKey: 'rid'
});
db_1.default
    .sync()
    .then(() => {
    console.log('successful connection');
    app.listen(process.env.PORT || 3000);
})
    .catch((error) => {
    console.log('error:', error);
});
