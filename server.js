const express = require('express');
const app = express();
const path = require('path');

const db = require('./models');
require('./routes/html-routes')(app);

app.use(express.static(path.join(__dirname, '/public')));

PORT = 8080;

db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
    console.log('App is listening on port: ' + PORT);
});
});