const express = require('express');
const app = express();
const router = express.Router();

const index = require('./src/routes/index.js');
const gitUserRoute = require('./src/routes/gitUserRoute');

app.use('/', index);
app.use('/search', gitUserRoute);


const port =  '3001';


app.listen(port, function () {
    console.log(`app listening on port ${port}`)
})