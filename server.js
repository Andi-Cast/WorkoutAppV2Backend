require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500;
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/dbconnection');

connectDB();

//CORS
app.use(cors(corsOptions));

//built-in middleware that allows easy access to
//the parsed data through req.body
app.use(express.urlencoded({ extended: false }));

//middleware that parses JSON and makes it accessible 
//on the req.body property
app.use(express.json());


//Error handling middleware after all routes
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
