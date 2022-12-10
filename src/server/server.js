import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import express from 'express';
import app from '../App';
var bodyParser = require('body-parser')
dotenv.config();

// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// serve static files
app.use(express.static(__dirname + '/public'));

// app.post('/createPost', (req, res) => {

// });