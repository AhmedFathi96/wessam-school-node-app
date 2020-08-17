const mongoose = require('mongoose');


const gallery = mongoose.Schema({
    gallery_img:{
        type: Buffer ,
        required: true
    },
    height_ration:{
        type: Number,
        required: true
    },
    width_ration:{
        type: Number,
        required: true
    },
    order:{
        type: Number,
        required: true
    }
}, {timestamps: true})


mongoose.set('useNewUrlParser', true);  
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const Gallery = mongoose.model('gallery' , gallery);
module.exports = Gallery;