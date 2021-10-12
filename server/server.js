const express = require('express');
const { AUTH } = require('../src/config.js');
const axios = require('axios');
const cors = require('cors');
const compression = require('compression');
const app = express();
const port = 3050;

app.use(express.json());
app.use(express.static('../public/index.html'));
app.use(compression());
app.use(cors());

app.get('/latest', (req, res) => {
  axios({
    url: `http://www.themealdb.com/api/json/v2/${AUTH}/latest.php`,
    data: req.body
  })
  .then((response) => {
    res.send(response.data.meals)
  }).catch((err) => {
    console.info('Error making the request');
    res.status(400).send();
  })
});

app.get('/random', (req, res) => {
  axios({
    url: `http://www.themealdb.com/api/json/v2/${AUTH}/randomselection.php`,
    data: req.body
  })
  .then((response) => {
    res.send(response.data.meals)
  }).catch((err) => {
    console.info('Error making the request');
    res.status(400).send();
  })
});

app.get('/ingredient', (req, res) => {
  axios({
    url: `http://www.themealdb.com/api/json/v2/${AUTH}/filter.php?i=${req.body.ingredient}`,
    data: req.body.ingredient
  })
  .then((response) => {
    res.send(response.data.meals)
  }).catch((err) => {
    console.info('Error making the request');
    res.status(400).send();
  })
})

app.listen(port, () => {
  console.info(`Server listening on port: ${port}`);
})