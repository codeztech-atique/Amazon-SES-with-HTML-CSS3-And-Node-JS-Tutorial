const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());

app.use(cors());


const send = require('../controllers/sendEmail');

//Testing 
app.get('/',  (req, res) => {
    res.send({
        status:200,
        message:'Application is working fine!'
    })
})

// Get All User Data
app.post('/user/sendmail', (req, res) => {
    send.emailViaAWS_SES(req, res);
});

module.exports = app;