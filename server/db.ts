const Sequelize = require('sequelize')


import * as dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE as string,process.env.DBUSERNAME as string,process.env.PASSWORD,{
    host:process.env.HOST,
    dialect:'postgres',
    port:5432
});

export default sequelize;
