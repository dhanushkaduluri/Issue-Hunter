import dotenv from 'dotenv';
dotenv.config();  // Load Env

import express from 'express';
import mongoose from 'mongoose';  // Import mongoose separately
import Mainrouter from './routes/index.js';

import db from './config/mongoose.js';
const port = process.env.PORT || 8000;
const app = express();
import path from 'path';
import expressLayouts from 'express-ejs-layouts';

app.use(express.urlencoded());
app.use(express.static('assets'));
app.use(expressLayouts);

// Extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// Set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Use express router
app.use('/', Mainrouter);

app.listen(port, (err) => {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
