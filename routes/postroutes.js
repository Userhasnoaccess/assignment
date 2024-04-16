const express = require('express');
const router = express.Router();
const postmod = require('./model/post');
router.use(express.json());

//api
router.post('/add',async(req,res)=>{
    try{
        const data =req.body;
        await postmod(data).save();
        res.send({messsge:"data done"})
    } catch(error){
        console.log(error)
    }
})
module.exports=router;