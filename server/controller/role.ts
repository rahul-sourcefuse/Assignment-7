import { Request,Response } from "express";

import Role from "../models/role";

export const addRole=async(req:Request,res:Response)=>{
    const name=req.body.name;
    const key=req.body.key;
    const description=req.body.description;
    try{
       const data=await Role.create({name:name,key:key,description:description})
       res.json(data);
    }catch(error){
        console.log(error)
    }
}

export const getRoleData=async(req:Request,res:Response)=>{
    
    try{
       const data=await Role.findAll()
       res.json(data);
    }catch(error){
        console.log(error)
    }
} 