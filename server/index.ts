import express from "express";

import cors from 'cors';

import sequelize from "./db";

require('dotenv').config();

import userRouter from "./routes/user";

import roleRouter from "./routes/role";

import customerRouter from "./routes/customer";

import User from "./models/user";
import Customer from "./models/customer";
import Role from "./models/role";

const app=express();

app.use(express.json({limit:"30mb"}));

app.use(cors());

app.use('/users',userRouter);
app.use('/role',roleRouter);
app.use('/customer',customerRouter);

User.belongsTo(Customer,{
    foreignKey:'cid'
});
User.belongsTo(Role,{
    foreignKey:'rid'
});

sequelize
    .sync()
    .then(()=>{
        console.log('successful connection');
        app.listen(process.env.PORT||3000);
    })
    .catch((error :any)=>{
        console.log('error:',error);
    })





