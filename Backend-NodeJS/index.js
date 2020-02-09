const express = require('express');
const cors = require('cors');
const config = require('config');
const bodyParser = require('body-parser');

const port = process.env.PORT || config.port;

const app = express();

app.use(cors())
app.options('*', cors());


app.use(bodyParser.urlencoded({
    extended: true
}))


const server = require('http').createServer(app);
const apiRoutes = require('./routes/routes');

app.use('', apiRoutes);


app.use((req, res, next) => {
  req.socket.on('error', () => {});
  next();
});

server.on('listening', () => {
    console.log('Server is running');
});

server.listen(port, () => {
    console.log('Server listening at port %d ', port);
});

module.exports = app;