var express = require('express');
var cors = require('cors');
var axios = require('axios');
require('dotenv').config();

const CohereExtractor = require('./cohere.js');

var app = express();

app.use(cors());
app.use(express.json());

// GOOGLE MAPS

// async function findPlaceFromText(address) {
//   const res = await axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${address}&inputtype=textquery&fields=geometry&key=${process.env.GOOGLE_MAPS_API_KEY}`)
//   const data = res.data;
//   return data.candidates[0].geometry.location;
// }

app.get('/findNearbyRestaurants', async (req, res, next) => {
  // const data = await findPlaceFromText(req.body.address);
  axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.body.lat},${req.body.lng}&radius=${req.body.radius}&type=restaurant&maxprice=${req.body.budget}&rankby=prominence&key=${process.env.GOOGLE_MAPS_API_KEY}`)
    .then(restaurantsData => console.log(restaurantsData.data))
    .catch(err => next(err));
});

app.get('/getPlaceDetails', (req, res, next) => {
  axios.get(`https://maps.googleapis.com/maps/api/place/details/json?fields=name,editorial_summary,rating,price_level,formatted_address,opening_hours&place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&key=${process.env.GOOGLE_MAPS_API_KEY}`)
    .then(placeData => console.log(placeData.data))
    .catch(err => next(err));
});

// COHERE

const bioExamples = ["Hello! I'm Mimi and I love to eat good food. I'm always up for trying new restaurants and cuisines, and I love to meet new people who share my passion for food. I'm looking forward to exploring my city and trying all the best dishes it has to offer. My favourite cuisine is definitely Japanese, and my favourite food is ramen. I'm always up for a good bowl of ramen, no matter what time of day it is.", "Hello, my name is John and I am a big fan of Mexican cuisine. My favourite food is barbacoa. I am looking forward to meeting new people and trying new foods.", "Hello! I'm Mary and I love to eat good food. I'm always up for trying new restaurants and cuisines, and I love to meet new people who share my passion for food. My favourite cuisine is Thai and my favourite food is Som Tam."];
const bioExampleLabels = ["Japanese", "Mexican", "Thai"];
const cohereKeywordExtractor = new CohereExtractor(bioExamples, bioExampleLabels, [], "", "extract the favourite cuisine from the bio:")

const testBio = "Hello! I'm Sam and I love food. I'm always up for trying new restaurants and cuisines, and I love to cook too. My favourite cuisine is definitely Italian, and my favourite food is pizza.";
const testBio2 = "Hello, I'm Joe and I love food! I'm always up for trying new restaurants and cuisines. My favourite cuisine is definitely Mexican, and my favourite food is definitely tacos!";
const testBio3 = "Hello, my name is John and I am a big fan of Thai food. My favorite dish is definitely green curry with chicken. I am always up for trying new restaurants and cuisines, so if you have any recommendations, I would love to hear them!";

cohereKeywordExtractor.extract(testBio)
  .then(result => console.log(result));
cohereKeywordExtractor.extract(testBio2)
  .then(result => console.log(result));
cohereKeywordExtractor.extract(testBio3)
  .then(result => console.log(result));

module.exports = app;
