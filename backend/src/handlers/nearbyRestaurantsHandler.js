export default nearbyRestuarantsHandler = async (req, res, next) => {
    // const data = await findPlaceFromText(req.body.address);
    axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.body.lat},${req.body.lng}&radius=5000&type=restaurant&maxprice=${req.body.budget}&rankby=prominence&key=${process.env.GOOGLE_MAPS_API_KEY}`)
      .then(restaurantsData => console.log(restaurantsData.data))
      .catch(err => next(err));
  }