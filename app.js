
const express = require('express');
const app = express();

// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8080;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});

app.get('/conversor',(req,res)=>{
  res.json({
    moedas:[
      { key:0 , moeda:'BRL', name:'Brasil Real'},
      { key:1 , moeda:'USD', name:'Estados Unidos Dólar'},
      { key:2 , moeda:'EUR', name:'Zona do Euro'},
      { key:3 , moeda:'GBP', name:'Libra Esterlina'},
      { key:4 , moeda:'AUD', name: 'Austrália Dólar'},
      { key:5 , moeda:'CHF', name: 'Franco Suíço'},
      { key:6 , moeda:'CAD', name: 'Canadá Dólar '},
      { key:7 , moeda:'ARS', name: 'Peso Argentino'},
    ]
  })
})

app.listen(PORT,()=>{})