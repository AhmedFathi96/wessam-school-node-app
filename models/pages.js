const mongoose = require('mongoose');

const pages = mongoose.Schema({
    highlights_img:{
        type: Buffer ,
        required: true
    },
    highlights_header:{
        type: String,
        required: true
    },
    highlights_text:{
        type: String,
        required: true
    },

    courses_img:{
        type: Buffer ,
        required: true
    },
    courses_header:{
        type: String,
        required: true
    },
    courses_text:{
        type: String,
        required: true
    },

    blog_img:{
        type: Buffer ,
        required: true
    },
    blog_header:{
        type: String,
        required: true
    },
    blog_text:{
        type: String,
        required: true
    },

    contact_img:{
        type: Buffer ,
        required: true
    },
    contact_header:{
        type: String,
        required: true
    },
    contact_text:{
        type: String,
        required: true
    },


    testimonial_img:{
        type: Buffer ,
        required: true
    },
    testimonial_header:{
        type: String,
        required: true
    },
    testimonial_text:{
        type: String,
        required: true
    },

    
    
}, {timestamps: true})



mongoose.set('useNewUrlParser', true);  
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const Pages = mongoose.model('pages' , pages);
module.exports = Pages;