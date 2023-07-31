import { connectDB } from "@/config/db";

import {
    create,
    list,
} from "@/controller/auth"

connectDB()
export default (req,res) => {
    if(req.method === "GET"){
        list(req,res)
    }else if (req.method === "POST"){
        create(req,res)
    }else{
        res.status(400).send("Error!!")
    }
}