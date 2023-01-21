var initializeApp = require('firebase/app').initializeApp;
var getFirestore = require('firebase/firestore').getFirestore;
var collection = require('firebase/firestore').collection;
var addDoc = require('firebase/firestore').addDoc;
var getDoc = require('firebase/firestore').getDoc;

var express = require('express');
var cors = require('cors');
var axios = require('axios');
require('dotenv').config();

var app = express();
app.use(cors());
app.use(express.json());

// FIREBASE CONFIG

const firebaseConfig = {
    apiKey: 'AIzaSyBidOMsX0DzROn3v29TBS_z1t40gxC0rM4',
    authDomain: 'uofthacks-x-375407.firebaseapp.com',
    projectId: 'uofthacks-x-375407',
    storageBucket: 'uofthacks-x-375407.appspot.com',
    messagingSenderId: '834263756036',
    appId: '1:834263756036:web:488d4b17bc6b71c44d3451',
    measurementId: 'G-8REC5KN4LD'
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// COHERE CONFIG

const CohereExtractor = require('./cohereExtractor.js');
const CohereExplainer = require('./cohereExplainer.js');
const {
    default: nearbyRestaurantsHandler
} = require('./src/handlers/nearbyRestaurantsHandler.js');
const {
    default: placeDetailsHandler
} = require('./src/handlers/placeDetailsHandler.js');
const { default: signUpHandler } = require('./src/handlers/signUpHandler.js');
const { default: loginHandler } = require('./src/handlers/loginHandler.js');
const {
    default: explainMatchHandler
} = require('./src/handlers/explainMatchHandler.js');

const cohereKeywordExtractor = new CohereExtractor();
const cohereMatchExplainer = new CohereExplainer();

// GOOGLE MAPS

// async function findPlaceFromText(address) {
//   const res = await axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${address}&inputtype=textquery&fields=geometry&key=${process.env.GOOGLE_MAPS_API_KEY}`);
//   const data = res.data;
//   return data.candidates[0].geometry.location;
// }

app.get('/findNearbyRestaurants', nearbyRestaurantsHandler);

app.get('/getPlaceDetails', placeDetailsHandler);

// COHERE

app.post('/signup', signUpHandler);

app.get('/logIn', async (req, res, next) => {
    const docRef = doc(db, 'users', req.body.username);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        if (req.body.password === docSnap.data().password) {
            res.send(docRef.id);
        } else {
            console.log('Incorrect password.');
        }
    } else {
        console.log('No such document!');
    }
});

// async function getUserInfo(uuid) {
//   const res = await axios.get('FIREBASE API');
//   const data = res.data;
//   return data;
// }

app.post('/explainMatch', explainMatchHandler);

app.listen(8000, () => {
    console.log('Server running on port 8000');
});

module.exports = app;
