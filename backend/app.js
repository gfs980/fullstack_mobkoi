const express = require('express');
const axios = require('axios');
const uniqid = require('uniqid');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const port = 8080;

const apiKey = 'YV2I5zx4nh6Y5xKqcKOR58jOkXaYwHQxaOPbp3iE';

axios.defaults.baseURL = 'https://esobbc6302.execute-api.eu-west-1.amazonaws.com/default';
axios.defaults.headers.common['X-API-Key'] = apiKey;


app.post('/api/add-campaign', async (req, res, next) => {
  try {
    const params = new URLSearchParams();
    params.append('id', uniqid());
    params.append('startDate', req.body.startDate);
    params.append('endDate', req.body.endDate);
    params.append('targetImpressions', req.body.targetImpressions);
    
    console.log('params: ', params);

    const response = await axios.post(
      '/campaigns',
      params
    );
    res.json(response.data);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.get('/api/get-campaigns', async (req, res, next) => {
  try {
    const response = await axios.get(
      '/campaigns/*'
    );
    res.json(response.data);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.get('/api/get-campaigns/:id', async (req, res, next) => {
  try {
    const response = await axios.get(
      '/campaigns/' + req.params.id,
    );
    res.json(response.data);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.listen(port);

module.exports = app;
