require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const connectDB = require('./connection/conn');
const adminRouter = require('./routes/admin');



connectDB();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/admin', adminRouter);


app.get('/', (req, res) => res.send('Hello World!'))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))