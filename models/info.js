const mongoose = require('mongoose');
const validator = require('validator');
const info = mongoose.Schema({
    address:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: false,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Please Enter correct email')
            }
        }
    },
    phone:{
        type: String,
        required: true
    },
    map_url:{                                  // Role could be infoistrator  or supervisor
        type: String,
        required: true,
    },
    facebook_url:{                                  // Role could be infoistrator  or supervisor
        type: String,
        required: true,
    },
    twitter_url:{                                  // Role could be infoistrator  or supervisor
        type: String,
        required: true,
    },
    instagram_url:{                                  // Role could be infoistrator  or supervisor
        type: String,
        required: true,
    },
    whatsapp_number:{                                  // Role could be infoistrator  or supervisor
        type: String,
        required: true,
    },
    company_name:{                                  // Role could be infoistrator  or supervisor
        type: String,
        required: true,
    },

    
    
}, {timestamps: true})




mongoose.set('useNewUrlParser', true);  
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const Info = mongoose.model('info' , info);
module.exports = Info;