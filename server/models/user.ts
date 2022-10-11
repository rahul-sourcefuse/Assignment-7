const Sequelize=require('sequelize');

import sequelize from '../db';


const User=sequelize.define('user',{
    id:{
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        allowNull:false,
        primaryKey:true
    },
    firstName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    middleName:{
        type:Sequelize.STRING,
        defaultValue:""
    },
    lastName:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    phoneNumber:{
        type:Sequelize.BIGINT,
        allowNull:false
    },
    address:{
        type:Sequelize.STRING,
        allowNull:false
    },
    cid:{
        type:Sequelize.UUID,
        allowNull:false
    },
    rid:{
        type:Sequelize.UUID,
        allowNull:false
    }
});

export default User;