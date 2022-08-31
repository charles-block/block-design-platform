import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import clientProjectPostsRoutes from './routes/clientProjectPosts.js';

//initialize app
const app = express();

//use express middleware to connect this to our application



//set up bodyParser to it could send requests properly
app.use(bodyParser.json({ limit: "30mb", extended: true })); //Send images 
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//define starting path for all the routes inside posts.js
//posts is a prefix
app.use('/posts', postRoutes);
app.use('/client-projects', clientProjectPostsRoutes);

app.get('/', (req, res) => {
    res.send('Hello to Design-Block-Platform API');
})

//https://www.mongodb.com/atlas/database

//Store in env variable
const CONNECTION_URL = 'mongodb+srv://block-design:JKKJKK333@cluster0.gzkip.mongodb.net/?retryWrites=true&w=majority';

// hiroku will auto popuate env variabole called PORT
const PORT = process.env.PORT || 5000;

//connect to database
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));



