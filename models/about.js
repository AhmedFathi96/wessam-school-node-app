const mongoose = require('mongoose');


const about = mongoose.Schema({
    about_img:{
        type: Buffer ,
        required: true
    },
    header: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        required: true
    }
    
}, {timestamps: true})


mongoose.set('useNewUrlParser', true);  
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const About = mongoose.model('about' , about);
module.exports = About;