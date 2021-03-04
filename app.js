const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 8877;
app.use(cors());


app.use(express.json());
app.get('/',(req,res)=>{
  res.json([
      { key:0 , moeda:'BRL', name:'Brasil Real'},
      { key:1 , moeda:'USD', name:'Estados Unidos Dólar'},
      { key:2 , moeda:'EUR', name:'Zona do Euro'},
      { key:3 , moeda:'GBP', name:'Libra Esterlina'},
      { key:4 , moeda:'AUD', name: 'Austrália Dólar'},
      { key:5 , moeda:'CHF', name: 'Franco Suíço'},
      { key:6 , moeda:'CAD' , name: 'Canadá Dólar '},
      { key:7 , moeda:'ARS', name: 'Peso Argentino'} ])
})

app.listen(PORT);