const mongoose = require('mongoose');


const blog = mongoose.Schema({
    blog_cover_img:{
        type: Buffer ,
        required: true
    },
    blog_post_img:{
        type: Buffer ,
        required: true
    },
    post_content: {
        type: String,
        required: true
    },
    content_body: {
        type: String,
        required: true
    },
    header: {
        type: String,
        required: true
    },
}, {timestamps: true})


mongoose.set('useNewUrlParser', true);  
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const Blog = mongoose.model('blog' , blog);
module.exports = Blog;