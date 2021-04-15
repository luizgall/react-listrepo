const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');

const index = require('./src/routes/index.js');
const gitUserRoute = require('./src/routes/gitUserRoute');

app.use(cors());
app.use(express.json());
app.use('/', gitUserRoute);


const port =  '3001';


app.listen(port, function () {
    console.log(`app listening on port ${port}`)
})