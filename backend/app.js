const express = require('express');
const dotenv = require('dotenv').config({path: './config/.env'});
const app = express();


app.listen(() => {
    console.log(`server running at port 1000`);
})