const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 8877;
app.use(cors());


app.use(express.json());
app.get('/',(req,res)=>{
  res.json([
      { key:0 , moeda:'BRL', name:'Brasil Real',     sobre:''},
      { key:1 , moeda:'USD', name:'Dólar Americano', sobre:'O dólar americano é a moeda mais conhecida ao redor do mundo por ser a que mais movimenta com a economia mundial. É a principal moeda no mercado de câmbio, o dólar é a base para transações e utilizada em grandes movimentações da economia global.\n Mesmo com a alta desvalorização e turbulências políticas, o dólar continua sendo a moeda mais importante do planeta utilizada em diversos países ao redor do mundo'},
      { key:2 , moeda:'EUR', name:'Zona do Euro', sobre:'Ao contrário da longa história por trás do dólar norte-americano, o Euro tem apenas 17 anos de idade, desde que foi introduzido em 1999. Euro é a segunda moeda mais usada do mundo, com 39% de sua quota em transações diárias pelo mundo todo. O Euro é todavia a moeda oficial de 19 países do continente Europeu, e da União Europeia.\n O símbolo financeiro do euro é € e refere-se portanto a letra inicial da Europa para as linhas paralelas que fazem referência à estabilidade dentro da zona do euro.'},
      { key:3 , moeda:'GBP', name:'Libra Esterlina', sobre:'A libra é a moeda oficial do Reino Unido, sendo ela então uma das moedas mais antigas do mundo. Na antiguidade a moeda era muito valorizada.  A primeira moeda da unidade de libra apareceu, todavia, apenas em 1489, com o rei Henrique VII, e era chamada de soberano.'},
      { key:4 , moeda:'AUD', name: 'Austrália Dólar', sobre:'O dólar australiano é a moeda oficial da Comunidade da Austrália, incluindo o Território Antártico Australiano, a Ilha Christmas ou Ilha do Natal, as Ilhas Cocos, a Ilha Heard e Ilhas McDonald e a Ilha Norfolk, assim como os arquipélagos independentes de Quiribati e Tuvalu, no Pacífico. O dólar australiano é a oitava moeda mais usada no comércio estrangeiro.'},
      { key:5 , moeda:'CHF', name: 'Franco Suíço', sobre:'O Franco Suíço é a moeda oficial da Suíça, Leichtenstein (localizado entre a Suíça e a Áustria) e Campione d’Itália (província localizada no norte da Itália).'},
      { key:6 , moeda:'CAD' , name: 'Canadá Dólar ', sobre:'O dólar canadense é a moeda oficial do Canadá. As cédulas do dólar canadense são maiores e com diferentes variações de cores, como: azul, lilás, verde, vermelho e marrom, não se parecendo em nada com o seu vizinho dólar americano e, logo, facilitando bastante na identificação.'},
      { key:7 , moeda:'ARS', name: 'Peso Argentino', sobre:'O Peso Argentino atual está em circulação desde 1992, e o seu nome é sobretudo uma herança da colonização espanhola na América Latina. Apesar do nome da moeda ter mudado várias vezes, nos últimos duzentos anos, a designação “Peso” sempre foi mantida.'} ])
})

app.listen(PORT);