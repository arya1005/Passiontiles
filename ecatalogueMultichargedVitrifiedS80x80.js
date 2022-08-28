const express = require('express');
const router = express.Router();
const multer = require('multer');

router.get('/',async(req,res)=>{
    const files = await FileModel10.find();
    res.send(files);
})

router.post('/',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            const newFile= new FileModel10({
                name: req.body.name,
                file:{
                    data: req.file.filename,
                    contentType:'image/png'
                }
            })
            newFile.save()
            .then(()=>res.send("Succesfull Uploads"))
            .catch(err=>console.log(err))
        }
    })
});

const Storage= multer.diskStorage({
    destination:'upload',
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
});

const upload=multer({
    storage:Storage
}).single('myFile');

router.delete('/:id',async(req,res)=>{
    const file= await FileModel10.findByIdAndRemove(req.params.id)
    .then(result=>res.status(200).send('Documnet DEleted.'))
    .catch(err=>res.status(500).send(err));
  
});


module.exports=router;