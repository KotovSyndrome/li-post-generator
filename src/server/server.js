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

// parse application/json
// app.use(bodyParser.json())

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
// serve static files
app.use(express.static(__dirname + '/public'));

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
    // .then((r) => r.json())
    .then((data) => {
        // let jsonData = data.json()
        // console.log('jsonData', jsonData)
        // console.log('data', data)
        console.log('data.data.choices', data.data.choices);
        res.status(200).send(data.data.choices[0].text)})
    .catch((error) => console.log(error))
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});