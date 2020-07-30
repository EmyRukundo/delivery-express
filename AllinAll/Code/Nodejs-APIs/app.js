const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

//View engine setup
app.engine('hbs', exphbs({
    defaultLayout: 'contact',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

// Body parser Midlleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//static folder
app.use('/public', express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.render('layouts/contact')
});

app.listen(3000, () => console.log('Server started running'));