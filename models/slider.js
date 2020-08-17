const mongoose = require('mongoose');


const slider = mongoose.Schema({
    slider_img:{
        type: Buffer 
    },
    caption: {
        type: String,
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

const Slider = mongoose.model('slider' , slider);
module.exports = Slider;