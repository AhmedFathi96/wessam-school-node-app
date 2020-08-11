const express = require('express')
const router  = express.Router();
const auth    = require('../middleware/auth');
const multer  = require('multer');
const blog  = require('../models/blog'); 
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

router.post('/add-blog-post', auth , upload.fields([{
        name: 'blog_cover_img', maxCount: 1
        }, {
        name: 'blog_post_img', maxCount: 1
        }]
),async(req,res)=>{

    try{
        const data = new blog({
            blog_cover_img: req.files.blog_cover_img[0].buffer,
            blog_post_img: req.files.blog_post_img[0].buffer,
            post_content: req.body.post_content,
            content_body: req.body.content_body,
            header: req.body.header,
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

router.get('/get-blog-posts', auth , async(req,res)=>{
    
    try{
        const data = await blog.find({});
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
router.get('/get-blog-post/:id', auth , async(req,res)=>{
    
    try{
        const id = req.params.id
        const data = await blog.findById(id);
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


router.get('/get-blog-post-cover-image/:id/view' , async(req,res)=>{
    
    try{
        const id = req.params.id
        const data = await blog.findById(id);
        res.set('Content-type' , 'image/jpg');
        res.send(data.blog_cover_img);
    }catch(e){
        res.status(400).send({
            status:'Error',
            status:'Error',
            Error: e
        });
    }
})

router.get('/get-blog-post-image/:id/view' , async(req,res)=>{
    
    try{
        const id = req.params.id
        const data = await blog.findById(id);
        res.set('Content-type' , 'image/jpg');
        res.send(data.blog_post_img);
    }catch(e){
        res.status(400).send({
            status:'Error',
            status:'Error',
            Error: e
        });
    }
})

router.put('/update-blog-post/:id', auth ,upload.fields([{
    name: 'blog_cover_img', maxCount: 1
    }, {
    name: 'blog_post_img', maxCount: 1
    }]
), async (req,res)=>{
    try{
        const id = req.params.id;
        // const newData = new blog({blog_img:buffer})
        console.log(req.body)
        const data = await blog.findByIdAndUpdate(
            id, 
            {
                blog_cover_img: req.files.blog_cover_img[0].buffer,
                blog_post_img: req.files.blog_post_img[0].buffer,
                post_content: req.body.post_content,
                content_body: req.body.content_body,
                header: req.body.header,
            
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

router.delete('/delete-blog-post/:id',auth , async(req,res)=>{
    
    try{
        const id = req.params.id
        console.log('id==>' , id)
        const data = await blog.findByIdAndDelete(id);
        if(!data){
            res.status(400).send({
                status:'Error',
                Error: 'can\'t find that blog'
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