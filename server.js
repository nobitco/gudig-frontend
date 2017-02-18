var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index', { title: 'TTdigital' });
})

app.get('/login', function (req, res) {
  res.render('index', { title: 'TTdigital - Login' });
})

app.listen(3000, function () {
  console.log('Escuchando por el puerto 3000!')
})
