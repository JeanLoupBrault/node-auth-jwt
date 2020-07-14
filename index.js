const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
dotenv.config();

//connect to db
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true }, () => console.log('connected to db')
)

//middleware
app.use(express.json());


//route middleware
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);


app.listen(3000, () => console.log('server up and running'));


