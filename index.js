const express = require ('express')
const cors = require ('cors')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles.routes');
const facultyRouter = require('./routes/faculty.routes')
const AdminRouter = require('./routes/admin.routes')
const RegisterRouter = require('./routes/register.routes')
const recordRouter = require('./routes/record.routes')
// const ClassRecords = require('./routes/classrecords.routes')

require('dotenv').config();

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
// app.use('/classrecords', ClassRecords)

//Mongoo database connection
// const uri = process.env.ATLAS_URI;
                        //flags
mongoose.connect('mongodb+srv://hia:Zu5h2NryX3OjMY3y@cluster0.mkrocy9.mongodb.net/Hia?retryWrites=true&w=majority');

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Connected to MongoDB!');
})

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
})