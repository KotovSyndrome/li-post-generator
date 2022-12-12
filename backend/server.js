const path = require("path");
let dotenv = require('dotenv');
let express = require('express');
let axios = require('axios');
let morgan = require('morgan');
let cors = require('cors');
const PORT = process.env.PORT || 3001;
let bodyParser = require('body-parser')
dotenv.config();
let url = 'https://api.openai.com/v1/completions';
let API_KEY = process.env.API_KEY;


let config = {
    headers: {
        // change for deployment
        "Access-Control-Allow-Origin": '*',
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
    }
}

// CORS
let app = express();
app.use(cors());

app.use(express.json())

// logging
app.use(morgan('dev'));

app.post('/createPost', (req, res) => {
    let body = {
        "model": "text-davinci-003",
        "prompt": req.body.prompt,
        "max_tokens": 2000,
        "temperature": 0.95,
      };

    axios.post(url, body, config)
    .then((data) => {
        console.log('data.data.choices', data.data.choices);
        res.status(200).send(data.data.choices[0].text)})
    .catch((error) => console.log(error))
});

// Serve React App
const sendIndex = (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../build/') });
}

app.get('/', sendIndex);

// serve static files
// Statically serve all other content (robots.txt, manifest.json, all js files, etc...)
app.use(express.static(path.join(__dirname, "../build/")));

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

