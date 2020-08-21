const express = require('express')
const router  = express.Router();
const student   = require('../models/student'); 
const auth    = require('../middleware/auth')

router.post('/create-student', auth , async(req,res)=>{
    
    try{
        const data = new student(req.body);
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


router.post('/website-create-student' , async(req,res)=>{
    
    try{
        const data = new student(req.body);
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

router.get('/get-students', auth , async(req,res)=>{
    
    try{
        const data = await student.find({});
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
router.get('/get-student/:id', auth , async(req,res)=>{
    
    try{
        const id = req.params.id
        const data = await student.findById(id);
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

router.put('/update-student/:id', auth , async (req,res)=>{
    try{
        const id = req.params.id;
        const updates = Object.keys(req.body)
        const allowed_updates = ['name' , 'parent_name' , 'grade' , 'email' , 'course' , 'student_phone' , 'parent_phone' , 'address' , 'status'];
        const is_valid = updates.every((up)=>{allowed_updates.includes(up)});
        console.log('===>' , updates , is_valid)
        if(is_valid){
            res.status(400).send('Invalid property');
        }
        const data = await student.findByIdAndUpdate(id, req.body ,{new:true , runValidators:true , useFindAndModify:false})
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

router.delete('/delete-student/:id',auth , async(req,res)=>{
    
    try{
        const id = req.params.id
        console.log('id==>' , id)
        const data = await student.findByIdAndDelete(id);
        if(!data){
            res.status(400).send({
                status:'Error',
                Error: 'can\'t find that student'
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