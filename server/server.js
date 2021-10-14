const express = require('express');
const { AUTH } = require('../src/config.js');
const axios = require('axios');
const cors = require('cors');
const compression = require('compression');
const app = express();
const port = 3050;

app.use(express.json());
//For deployment, change app.use to this:
// app.use(express.static('/home/ubuntu/WhatsForDinner/build'));
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
    url: `http://www.themealdb.com/api/json/v2/${AUTH}/filter.php?i=${req.query.ingredient}`,
    data: req.query.ingredient
  })
  .then((response) => {
    res.send(response.data.meals)
  }).catch((err) => {
    console.info('Error making the request');
    res.status(400).send();
  })
})

app.get('/recipe', (req, res) => {
  axios({
    url: `http://www.themealdb.com/api/json/v2/${AUTH}/search.php?s=${req.query.recipe}`,
    data: req.query.recipe
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