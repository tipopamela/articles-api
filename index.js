const express = require('express')
const app = express()
const port = 8080

app.get('/', function (req, res) {
  res.send('Minha primeira requisição')
})

app.get('/segunda-req', function (req, res) {
  res.send('Minha segunda requisição')
})

app.get('/com-parametros', function (req, res) {
  res.send('Com parâmetros funciona! Quintou nos estudos, ' + req.query.nome)
})

app.listen(port, function () {
  console.log('Ouvindo a porta: ', port)
})
