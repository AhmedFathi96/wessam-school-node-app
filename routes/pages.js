const express = require('express')
const router  = express.Router();
const auth    = require('../middleware/auth');
const multer  = require('multer');
const pages  = require('../models/pages'); 


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

router.post('/create-pages', auth , upload.fields([
        {
            name: 'highlights_img', maxCount: 1
        }, 
        {
            name: 'courses_img', maxCount: 1
        },
        {
            name: 'blog_img', maxCount: 1
        }, 
        {
            name: 'contact_img', maxCount: 1
        },
        {
            name: 'testimonial_img', maxCount: 1
        },
    ]
),async(req,res)=>{

    try{
        const data = new pages({
            highlights_img: req.files.highlights_img[0].buffer,
            courses_img: req.files.courses_img[0].buffer,
            blog_img: req.files.blog_img[0].buffer,
            testimonial_img: req.files.testimonial_img[0].buffer,
            contact_img: req.files.contact_img[0].buffer,

            highlights_header: req.body.highlights_header,
            highlights_text: req.body.highlights_text,

            courses_header: req.body.courses_header,
            courses_text: req.body.courses_text,

            blog_header: req.body.blog_header,
            blog_text: req.body.blog_text,

            testimonial_header: req.body.testimonial_header,
            testimonial_text: req.body.testimonial_text,

            contact_header: req.body.contact_header,
            contact_text: req.body.contact_text,

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


router.get('/website-get-pages-posts' , async(req,res)=>{
    
    try{
        const data = await pages.find({});
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
router.get('/get-highlights-page', auth , async(req,res)=>{
    
    try{
        const data = await pages.find({});
        const re = {
            highlights_img:    data[0].highlights_img,
            highlights_header: data[0].highlights_header,
            highlights_text:   data[0].highlights_text,
        }
        console.log(re);
        res.status(200).send({
            status:'success',
            data: re
        });
    }catch(e){
        res.status(400).send({
            status:'Error',
            Error: e
        });
    }
})


router.get('/get-courses-page', auth , async(req,res)=>{
    
    try{
        const data = await pages.find({});
        const re = {
            courses_img:    data[0].courses_img,
            courses_header: data[0].courses_header,
            courses_text:   data[0].courses_text,
        }
        console.log(re);
        res.status(200).send({
            status:'success',
            data: re
        });
    }catch(e){
        res.status(400).send({
            status:'Error',
            Error: e
        });
    }
})

router.get('/get-blog-page', auth , async(req,res)=>{
    
    try{
        const data = await pages.find({});
        const re = {
            blog_img:    data[0].blog_img,
            blog_header: data[0].blog_header,
            blog_text:   data[0].blog_text,
        }
        console.log(re);
        res.status(200).send({
            status:'success',
            data: re
        });
    }catch(e){
        res.status(400).send({
            status:'Error',
            Error: e
        });
    }
})

router.get('/get-contact-page', auth , async(req,res)=>{
    
    try{
        const data = await pages.find({});
        const re = {
            contact_img:    data[0].contact_img,
            contact_header: data[0].contact_header,
            contact_text:   data[0].contact_text,
        }
        console.log(re);
        res.status(200).send({
            status:'success',
            data: re
        });
    }catch(e){
        res.status(400).send({
            status:'Error',
            Error: e
        });
    }
})

router.get('/get-testimonial-page', auth , async(req,res)=>{
    
    try{
        const data = await pages.find({});
        const re = {
            testimonial_img:    data[0].testimonial_img,
            testimonial_header: data[0].testimonial_header,
            testimonial_text:   data[0].testimonial_text,
        }
        console.log(re);
        res.status(200).send({
            status:'success',
            data: re
        });
    }catch(e){
        res.status(400).send({
            status:'Error',
            Error: e
        });
    }
})


router.get('/get-all-pages', auth , async(req,res)=>{
    
    try{
        const data = await pages.find({});
        res.status(200).send({
            status:'success',
            data: data
        });
    }catch(e){
        res.status(400).send({
            status:'Error',
            Error: e
        });
    }
})



router.get('/view-highlights-page-cover-image' , async(req,res)=>{
    
    try{
        const data = await pages.find({});
        res.set('Content-type' , 'image/jpg');
        res.send(data[0].highlights_img);
    }catch(e){
        res.status(400).send({
            status:'Error',
            status:'Error',
            Error: e
        });
    }
})


router.get('/view-courses-page-cover-image' , async(req,res)=>{
    
    try{
        const data = await pages.find({});
        res.set('Content-type' , 'image/jpg');
        res.send(data[0].courses_img);
    }catch(e){
        res.status(400).send({
            status:'Error',
            status:'Error',
            Error: e
        });
    }
})

router.get('/view-blog-page-cover-image' , async(req,res)=>{
    
    try{
        const data = await pages.find({});
        res.set('Content-type' , 'image/jpg');
        res.send(data[0].blog_img);
    }catch(e){
        res.status(400).send({
            status:'Error',
            status:'Error',
            Error: e
        });
    }
})


router.get('/view-contact-page-cover-image' , async(req,res)=>{
    
    try{
        const data = await pages.find({});
        res.set('Content-type' , 'image/jpg');
        res.send(data[0].contact_img);
    }catch(e){
        res.status(400).send({
            status:'Error',
            status:'Error',
            Error: e
        });
    }
})

router.get('/view-testimonial-page-cover-image' , async(req,res)=>{
    
    try{
        const data = await pages.find({});
        res.set('Content-type' , 'image/jpg');
        res.send(data[0].testimonial_img);
    }catch(e){
        res.status(400).send({
            status:'Error',
            status:'Error',
            Error: e
        });
    }
})


router.put('/update-highlights-page/:id', auth ,upload.fields([{
    name: 'highlights_img', maxCount: 1
    }]
), async (req,res)=>{
    try{
        const id = req.params.id;
        // const newData = new pages({pages_img:buffer})
        console.log(req.body)
        const data = await pages.findByIdAndUpdate(
            id, 
            {
                highlights_img: req.files.highlights_img[0].buffer,
                highlights_header: req.body.highlights_header,
                highlights_text: req.body.highlights_text,
            
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
router.put('/update-courses-page/:id', auth ,upload.fields([{
    name: 'courses_img', maxCount: 1
    }]
), async (req,res)=>{
    try{
        const id = req.params.id;
        // const newData = new pages({pages_img:buffer})
        console.log(req.body)
        const data = await pages.findByIdAndUpdate(
            id, 
            {
                courses_img: req.files.courses_img[0].buffer,
                courses_header: req.body.courses_header,
                courses_text: req.body.courses_text,
            
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
router.put('/update-blog-page/:id', auth ,upload.fields([{
    name: 'blog_img', maxCount: 1
    }]
), async (req,res)=>{
    try{
        const id = req.params.id;
        // const newData = new pages({pages_img:buffer})
        console.log(req.body)
        const data = await pages.findByIdAndUpdate(
            id, 
            {
                blog_img: req.files.blog_img[0].buffer,
                blog_header: req.body.blog_header,
                blog_text: req.body.blog_text,
            
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
router.put('/update-contact-page/:id', auth ,upload.fields([{
    name: 'contact_img', maxCount: 1
    }]
), async (req,res)=>{
    try{
        const id = req.params.id;
        // const newData = new pages({pages_img:buffer})
        console.log(req.body)
        const data = await pages.findByIdAndUpdate(
            id, 
            {
                contact_img: req.files.contact_img[0].buffer,
                contact_header: req.body.contact_header,
                contact_text: req.body.contact_text,
            
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
router.put('/update-testimonial-page/:id', auth ,upload.fields([{
    name: 'testimonial_img', maxCount: 1
    }]
), async (req,res)=>{
    try{
        const id = req.params.id;
        // const newData = new pages({pages_img:buffer})
        console.log(req.body)
        const data = await pages.findByIdAndUpdate(
            id, 
            {
                testimonial_img: req.files.testimonial_img[0].buffer,
                testimonial_header: req.body.testimonial_header,
                testimonial_text: req.body.testimonial_text,
            
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
module.exports = router;