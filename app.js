const path = require('path')
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const connectDB = require("./config/db");

//load the confin

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

//this is for logging when using dev
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// handlebars templating engine
app.engine('.hbs', exphbs ({ defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', ".hbs")

//static folder 
app.use(express.static(path.join(__dirname, 'public')))

//routes 
app.use('/', require('./routes/index'))

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(
    `server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
