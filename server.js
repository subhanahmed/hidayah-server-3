const express = require('express');
const connectDB = require('./config/db');
const formData = require('express-form-data');

require('colors');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes.js');
const newsRoutes = require('./routes/newsRoute.js');
const categoryRoutes = require('./routes/categoryRoute');
const superAdminRoutes = require('./routes/superAdminRoutes.js')
const getEnrolledRoutes = require('./routes/getEnrolledRoute')
const programRoutes=require('./routes/programRoute')
const studentRoutes = require('./routes/studentRoute')
const attendanceRoutes=require('./routes/attendanceRoute')


const morgan = require('morgan');



connectDB();

const app = express();

var cors = require('cors')
app.use(cors({origin: true, credentials: true}));
app.options('*',cors())

app.use(formData.parse());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb'}));


app.use('/api/users', userRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/superAdmin', superAdminRoutes)
app.use('/api/enrollment', getEnrolledRoutes)
app.use('/api/program',programRoutes)
app.use('/api/student',studentRoutes)
app.use('/api/attendance',attendanceRoutes)


app.get('*', function(req, res){
  res.status(404).json({
    msg: "Api path not found."
  });
});

const PORT = process.env.PORT || 3000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.red,
  ),
);



// hosted server https://news-app-native.herokuapp.com/
