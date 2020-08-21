const mongoose = require('mongoose');

// const url = 'mongodb+srv://tacc:271996Ahmed@cluster0-xtqop.mongodb.net/<dbname>?retryWrites=true&w=majority';
const url = 'mongodb://localhost:27017/<dbname>';

const Connect = async ()=>{
    await mongoose.connect(url ,
        {
            useNewUrlParser:true,
            useUnifiedTopology: true
        });
    console.log('DB Successfully Connected');
}

module.exports = Connect;