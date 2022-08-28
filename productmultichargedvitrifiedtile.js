const express = require('express');
const router = express.Router();
const multer = require('multer');

router.get('/', async (req,res)=>{
    const images =await FileModel25.find();
    res.send(images);
})

router.post('/',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            const newImage = new FileModel25({
                name:req.body.name,
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                }
            })
            newImage.save()
            .then(()=>res.send("successfully uploaded"))
            .catch(err=>console.log(err))
        }
    })
});
const Storage = multer.diskStorage({
    destination:'upload',
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
});

const upload=multer({
    storage:Storage
}).single('testImage')

router.delete('/:id',async(req,res)=>{
    const image = await FileModel25.findByIdAndRemove(req.params.id)
    .then(result=>res.status(200).send('Documnet DEleted.'))
    .catch(err=>res.status(500).send(err));

});



module.exports=router;