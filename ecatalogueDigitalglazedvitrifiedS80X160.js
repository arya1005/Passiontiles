const express = require('express');
const router = express.Router();
const multer = require('multer');

router.get('/',async(req,res)=>{
    const file = await FileModel15.find();
    res.send(file);
})

router.post('/',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            const newFile= new FileModel15({
                name: req.body.name,
                file:{
                    data: req.file.filename,
                    contentType:'file/pdf'
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
    const file= await FileModel15.findByIdAndRemove(req.params.id)
    .then(result=>res.status(200).send('Documnet DEleted.'))
    .catch(err=>res.status(500).send(err));
});


module.exports=router;
