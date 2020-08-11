const mongoose = require('mongoose');


const testimonial = mongoose.Schema({
    testimonial_img:{
        type: Buffer ,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    about_author: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        required: true
    },
}, {timestamps: true})


mongoose.set('useNewUrlParser', true);  
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const Testimonial = mongoose.model('testimonial' , testimonial);
module.exports = Testimonial;