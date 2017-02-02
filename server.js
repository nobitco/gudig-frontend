var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('...iniciando construcción TTdigital...');
})

app.listen(3000, function () {
  console.log('Escuchando por el puerto 3000!')
})
