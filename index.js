const express = require ('express')
const cors = require ('cors')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles.routes');
const facultyRouter = require('./routes/faculty.routes')
const AdminRouter = require('./routes/admin.routes')
const RegisterRouter = require('./routes/register.routes')
const recordRouter = require('./routes/record.routes')
const  DataBase = require('./config/database')
// const dotenv = require('dotenv')
// const ClassRecords = require('./routes/classrecords.routes')

require('dotenv').config();

DataBase();
const app = express()

const port = process.env.PORT || 8080;

//middleware
app.use(cors());
app.use(express.json());

//endpoint
app.use('/articles', articleRouter);
app.use('/faculty', facultyRouter);
app.use('/', AdminRouter);
app.use('/register',RegisterRouter);
app.use('/records', recordRouter);

 const PORT = process.env.PORT || 8080;

 const server = app.listen(PORT, console.log(PORT));