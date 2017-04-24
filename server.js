var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var passport = require('passport');
var config = require('./config');
var gudig = require('gudig-client');
var auth = require('./auth');

var client = gudig.createClient(config.client);
var app = express();

app.set(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSession({
  secret: config.secret,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'pug');
app.use(express.static('public'));

passport.use(auth.localStrategy);
passport.deserializeUser(auth.deserializeUser);
passport.serializeUser(auth.serializeUser);

app.get('/', function (req, res) {
  res.render('index', { title: 'TTdigital' });
})

app.get('/login', function (req, res) {
  res.render('index', { title: 'TTdigital - Login' });
})

app.post('/signin', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

app.get('/whoami', function (req, res) {
  if (req.isAuthenticated()) {
    return res.json(req.user);
  }

  res.json({ auth: false });
})

function ensureAuth (req,res, next){
  if (req.isAuthenticated()) {
    return next();
  }

  res.status(401).send(send({ error: 'not authenticated' }));
}

app.listen(3000, function () {
  console.log('Escuchando por el puerto 3000!')
})
