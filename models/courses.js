const mongoose = require('mongoose');

const course = mongoose.Schema({
    course_type:{
        type: String,
        required: true
    },
    plane_name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    bullet1:{
        type: String,
        required: false
    },
    bullet2:{
        type: String,
        required: false
    },
    bullet3:{
        type: String,
        required: false
    },
    bullet4:{
        type: String,
        required: false
    },
    bullet5:{
        type: String,
        required: false
    },
    
    
}, {timestamps: true})



mongoose.set('useNewUrlParser', true);  
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const Course = mongoose.model('courses' , course);
module.exports = Course;