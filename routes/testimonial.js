const express = require('express')
const router  = express.Router();
const auth    = require('../middleware/auth');
const multer  = require('multer');
const testimonial  = require('../models/testimonial'); 
const sharp   = require('sharp')


const upload = multer({
    limits: {
        fileSize: 10000000
    },
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return cb(new Error('Please upload and image with jpg or jpeg or png extension'))
        }

        cb(undefined , true)
    }
})

router.post('/add-testimonial', auth , upload.single('testimonial_img') ,async(req,res)=>{
    try{
        const buffer = await sharp(req.file.buffer).toBuffer();

        const data = new testimonial({
            testimonial_img:buffer,
            content: req.body.content,
            author: req.body.author,
            about_author: req.body.about_author,
            order: req.body.order
        })

        await data.save();
        res.status(200).send({
            status:'success',
            data:req.body
        });
    }catch(e){
        res.status(400).send({
            status:'Error',
            Error: e
        });
    }
})

router.get('/get-testimonials', auth , async(req,res)=>{
    
    try{
        const data = await testimonial.find({});
        res.status(200).send({
            status:'success',
            data:data
        });
    }catch(e){
        res.status(400).send({
            status:'Error',
            Error: e
        });
    }
})
router.get('/get-testimonial/:id', auth , async(req,res)=>{
    
    try{
        const id = req.params.id
        const data = await testimonial.findById(id);
        res.status(200).send({
            status:'success',
            data:data
        });
    }catch(e){
        res.status(400).send({
            status:'Error',
            Error: e
        });
    }
})


router.get('/get-testimonial-image/:id/view' , async(req,res)=>{
    
    try{
        const id = req.params.id
        const data = await testimonial.findById(id);
        res.set('Content-type' , 'image/jpg');
        res.send(data.testimonial_img);
    }catch(e){
        res.status(400).send({
            status:'Error',
            status:'Error',
            Error: e
        });
    }
})

router.put('/update-testimonial/:id', auth , upload.single('testimonial_img'), async (req,res)=>{
    try{
        const id = req.params.id;
        // const newData = new testimonial({testimonial_img:buffer})
        console.log(req.body)
        const data = await testimonial.findByIdAndUpdate(
            id, 
            {
                testimonial_img:req.file.buffer,
                content: req.body.content,
                author: req.body.author,
                about_author: req.body.about_author,
                order: req.body.order
            
            },
            {new:true , runValidators:true , useFindAndModify:false}
        )
        if(!data){
            return res.status(400).send({
                status:'Error',
                Error: 'Something wrong'
            })
        }
        res.status(200).send({
            status: 'success',
            data: data
        })

    }catch(e){
        res.status(400).send({
            status:'Error',
            Error: e
        });
    }

})

router.delete('/delete-testimonial/:id',auth , async(req,res)=>{
    
    try{
        const id = req.params.id
        console.log('id==>' , id)
        const data = await testimonial.findByIdAndDelete(id);
        if(!data){
            res.status(400).send({
                status:'Error',
                Error: 'can\'t find that testimonial'
            });
        }
        res.status(200).send({
            status:'success',
            data:data
        });
    }catch(e){
        res.status(400).send({
            status:'Error',
            Error: e
        });
    }
})
module.exports = router;