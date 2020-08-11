const mongoose = require('mongoose');
const validator = require('validator');

const student = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    parent_name:{
        type: String,
        required: true
    },
    grade:{                                  
        type: String,
        required: true,
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
    course:{
        type: String,
        required: true
    },
    student_phone:{
        type: String,
        required: true
    },
    parent_phone:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    status:{
        type: String,                   // Paid un paid
        required: true
    },    
}, {timestamps: true})



// student.methods.generateToken = async function(){
//     const token = jwt.sign({_id: this._id.toString()} , 'FuckersYouKNowNothing');
//     this.tokens =  this.tokens.concat({token});
//     await this.save()
//     return token;
// }


mongoose.set('useNewUrlParser', true);  
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const Student = mongoose.model('student' , student);
module.exports = Student;