const mongoose = require('mongoose');
const jwt      = require('jsonwebtoken');
const validator = require('validator');

const admin = mongoose.Schema({
    name:{
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
    password:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    role:{                                  // Role could be administrator  or supervisor
        type: String,
        required: true,
    },
    tokens:[{
        token:{
            type: String,
            require: true
        }
    }]
    
}, {timestamps: true})



admin.methods.generateToken = async function(){
    const token = jwt.sign({_id: this._id.toString()} , 'FuckersYouKNowNothing');
    this.tokens =  this.tokens.concat({token});
    await this.save()
    return token;
}

admin.statics.findUserByCredentials = async (email , password) =>{
    const admin_info = await Admin.findOne({email:email , password:password});
    if(!admin_info){
        throw new Error('The user does not exists')
    }
    return admin_info;
}

mongoose.set('useNewUrlParser', true);  
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const Admin = mongoose.model('admin' , admin);
module.exports = Admin;