const express=require("express");
const { json } = require("express/lib/response");
const router=express.Router();
const mongoose = require("mongoose");
const fs=require("fs");

//Multer adds a body object and a file or files object to the request object
const multer=require("multer");

//Set Request Size Limit
router.use(express.json({limit:'50mb'}));

//Connecting to the mongodb
mongoose.connect("mongodb://localhost:27017/Passiontiles")
.then(()=>console.log(""))
.catch(err=>{console.error('Could not run..',err)});

//Storage
const Storage=multer.diskStorage({
    destination:'upload',//name of folder where images will be stored
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    },
});

//
const upload=multer({
    storage: Storage
}).single('testimage')


//Schema
const ImgSchema = mongoose.Schema({
    name : {type:String,required:true}, 
    image : { data: Buffer, contentType: String}

});

//Model
const imgmodel=mongoose.model("Homemodel",ImgSchema);

//Post request for adding 
router.post("/",(req,res)=>{
    console.log("inside post functon");
    //console.log(res.body.title);
    upload(req,res,(err)=>{
        if(err){
            console.log(err);
        }
        else
        {
            const insertImage=new imgmodel({
                name: req.body.name,
                img :
                {
                    data : req.file.filename,
                    contentType:"image/jpg"
                },
            });
        
            insertImage.save()
            .then(()=>res.send("Successfully Uploaded"))
            .catch((err)=> console.log(err))   
        }
    })
});

const DIR = 'upload';
//delete request for deleting the connection
router.delete("/:id",(req,res)=>{
    console.log("inside delete functon");
    imgmodel.findByIdAndRemove(req.params.id)
     .then(result=>res.status(200).send('Documnet Deleted.'))
     .catch(err=>res.status(500).send(err));

})
module.exports=router;