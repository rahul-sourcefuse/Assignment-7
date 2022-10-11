const Sequelize=require('sequelize');
import sequelize from "../db";

const Role = sequelize.define('role',{
    id:{
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    key:{
        type:Sequelize.ENUM('A','SA','S'),
        allowNull:false
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

export default Role;