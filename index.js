const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./routes.js');


const app = express();
const database = process.env.MONGODB_URI || 'mongodb://localhost/test';
mongoose.connect(database);

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: false}));




router(app);


app.listen(process.env.PORT || 3000);
