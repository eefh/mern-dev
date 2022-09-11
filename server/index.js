<<<<<<< HEAD
import dotenv from 'dotenv';
dotenv.config()
=======
>>>>>>> 23c8cc732c753b07ecb7458d1c5ccfe3d09620a5
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
<<<<<<< HEAD

=======
import dotenv from 'dotenv';
>>>>>>> 23c8cc732c753b07ecb7458d1c5ccfe3d09620a5

import postRoutes from './routes/posts.js'

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

<<<<<<< HEAD
const CONNECTION_URL = process.env.MONGO_URL;
=======
const CONNECTION_URL = 'mongodb+srv://eefjh:data123@cluster0.pb937wg.mongodb.net/?retryWrites=true&w=majority';
>>>>>>> 23c8cc732c753b07ecb7458d1c5ccfe3d09620a5
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
        .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}!`)))
        .catch((error) => console.log(error));