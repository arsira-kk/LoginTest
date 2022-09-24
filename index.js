<<<<<<< HEAD
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


=======
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


>>>>>>> 1f2c30fb6b0b64e7246b8d5f11cf2c889cf015ff
app.listen(3000);