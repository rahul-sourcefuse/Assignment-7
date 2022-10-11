import { Request,Response } from "express";
import Customer from "../models/customer";

export const getCustomer= async(req:Request,res:Response)=>{
    try{
        const data=await Customer.findAll();
        res.json(data);
    }catch(error){
        console.log(error);
    }
}

export const addCustomer= async(req:Request,res:Response)=>{
    const name=req.body.name;
    const website=req.body.website;
    const address=req.body.address;

    try{
        const data=await Customer.create({name:name,website:website,address:address});
        res.json(data);
    }catch(error){
        console.log(error);
    }
}

