
var express = require('express');
const Connect = require('./controllers/connect');
var cors = require('cors');
var bodyParser = require('body-parser')



const app = express()
const port = process.env.PORT || 5026


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/', (req, res) =>  {
    console.log('data' , req.body)
    res.send(`data ==> ${req.body}`)})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


// var app = express();
Connect();




// app.get('/', function (req, res) {
//     res.send('Hello World!');
// });




// import routes
const authRouter        = require('./routes/auth');
const adminRouter       = require('./routes/admin');
const studentRouter     = require('./routes/student');
const sliderRouter      = require('./routes/slider');
const aboutRouter       = require('./routes/about');
const galleryRouter     = require('./routes/gallery');
const testimonialRouter = require('./routes/testimonial');
const blogRouter        = require('./routes/blog');
const contactRouter     = require('./routes/contact');
const courseRouter      = require('./routes/courses');
const pagesRouter       = require('./routes/pages');
const infoRouter       = require('./routes/info');

 










// set routes
app.use('/api', authRouter)
app.use('/api/admin', adminRouter)
app.use('/api/student', studentRouter)
app.use('/api/slider', sliderRouter)
app.use('/api/about', aboutRouter)
app.use('/api/gallery', galleryRouter)
app.use('/api/testimonial', testimonialRouter)
app.use('/api/blog', blogRouter)
app.use('/api/contact', contactRouter)
app.use('/api/courses', courseRouter)
app.use('/api/pages', pagesRouter)
app.use('/api/info', infoRouter)













