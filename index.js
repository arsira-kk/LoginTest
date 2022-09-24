const express = require('express');
const session = require('express-session');
const router = require('./routes/Myrouter');
const path = require('path');

const app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));








app.use(router);


app.listen(3000);