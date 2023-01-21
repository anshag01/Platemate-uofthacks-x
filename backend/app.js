var express = require('express');
var cors = require('cors');
var axios = require('axios');
require('dotenv').config();
const https = require('follow-redirects').https;
const fs = require('fs');

var app = express();

app.use(cors());
app.use(express.json());

// app.post('/addNewUser', (req, res, next) => {
//   axios({
//     method: 'post',
//     url: 'https://api.estuary.tech/content/add',
//     headers: {
//       'Content-Type': 'multipart/form-data',
//       'Accept': 'application/json',
//       'Authorization': `Bearer ${process.env.ESTUARY_API_KEY}`
//     },
//     data: {},
//     maxRedirects: 20
//   });
// });

async function findPlaceFromText(address) {
  // let data;
  const res = await axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${address}&inputtype=textquery&fields=geometry&key=${process.env.GOOGLE_MAPS_API_KEY}`)
  const data = res.data;
  return data.candidates[0].geometry.location;
}

app.get('/findNearbyRestaurants', async (req, res, next) => {
  const data = await findPlaceFromText(req.body.address);
  axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${data.lat},${data.lng}&radius=${req.body.radius}&type=restaurant&maxprice=${req.body.budget}&rankby=prominence&key=${process.env.GOOGLE_MAPS_API_KEY}`)
    .then(restaurantsData => console.log(restaurantsData.data))
    .catch(err => next(err));
});

app.get('/getPlaceDetails', (req, res, next) => {
  axios.get(`https://maps.googleapis.com/maps/api/place/details/json?fields=name,editorial_summary,rating,price_level,formatted_address,opening_hours&place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&key=${process.env.GOOGLE_MAPS_API_KEY}`)
    .then(placeData => console.log(placeData.data))
    .catch(err => next(err));
});

module.exports = app;
