const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 8877;
app.use(cors());


app.use(express.json());
app.get('/', (req, res) => {
  res.json([{  } ])
  })
  
  app.listen(PORT);