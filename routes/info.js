const express = require('express')
const router  = express.Router();
const info   = require('../models/info'); 
const auth    = require('../middleware/auth')

router.post('/create-info', auth , async(req,res)=>{
    
    try{
        const data = new info(req.body);
        console.log(data,req.body);
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

router.get('/get-info', auth , async(req,res)=>{
    
    try{
        const data = await info.find({});
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
router.get('/website-get-info/' , async(req,res)=>{
    
    try{
        const data = await info.find({});
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

router.put('/update-info/:id', auth , async (req,res)=>{
    try{

        const id = req.params.id;
        // const newData = new slider({slider_img:buffer,caption: req.body.caption})
        const data = await info.findByIdAndUpdate(id, req.body ,{new:true , runValidators:true , useFindAndModify:false})

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